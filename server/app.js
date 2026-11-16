import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { STUDENTS, studentByUsername } from './students.js';
import {
  activeStorage,
  compareAndSetProgressRecord,
  getProgressRecord,
  getStudentRecord,
  setStudentRecord,
} from './storage.js';

// Support both ESM (local dev) and CJS (Netlify Functions)
const isESM = typeof import.meta !== 'undefined' && import.meta.url;
const __dir = isESM
  ? path.dirname(fileURLToPath(import.meta.url))
  : process.cwd();

export const PUBLIC_DIR = process.env.PUBLIC_DIR
  ? path.resolve(process.env.PUBLIC_DIR)
  : path.join(__dir, '..', 'public');

/* ------------------------------------------------------------------ */
/* AI proxy target                                                     */
/* ------------------------------------------------------------------ */

export function resolveAiTarget(env = process.env) {
  const raw = (env.AI_PROXY_URL || '').trim();

  // Legacy: a bare Cloudflare Worker origin. Append the expected /chat path.
  if (/^https:\/\/[a-z0-9-]+\.workers\.dev\/?$/i.test(raw)) {
    return {
      kind: 'worker',
      label: 'Cloudflare Worker',
      url: `${raw.replace(/\/+$/, '')}/chat`,
      headers: {},
    };
  }

  if (!raw || raw === 'none') {
    return { kind: 'none', label: 'not configured', url: null, headers: {} };
  }

  let url;
  try {
    url = new URL(raw);
  } catch {
    return { kind: 'invalid', label: 'invalid URL', url: null, headers: {} };
  }

  const clean = url.pathname.replace(/\/+$/, '');
  const endpoint = clean.endsWith('/chat/completions') || clean.endsWith('/chat')
    ? url.href
    : `${url.origin}${clean}/chat/completions`;

  return {
    kind: 'openai-compatible',
    label: 'OpenAI-compatible endpoint',
    url: endpoint,
    headers: env.AI_API_KEY ? { Authorization: `Bearer ${env.AI_API_KEY}` } : {},
  };
}

export let AI_TARGET = resolveAiTarget();

export function refreshAiTarget(env = process.env) {
  AI_TARGET = resolveAiTarget(env);
  return AI_TARGET;
}

function secureEqual(left, right) {
  const a = Buffer.from(String(left || ''));
  const b = Buffer.from(String(right || ''));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function hashOneTimeCode(code) {
  return crypto.createHash('sha256').update(String(code)).digest('hex');
}

function signAdminToken() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const payload = Buffer.from(JSON.stringify({
    id: 'teacher-admin',
    role: 'admin',
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8,
  })).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${sig}.admin`;
}

function adminTokenIsValid(authorization) {
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';
  const [payload, signature, marker] = String(token).split('.');
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || marker !== 'admin' || !payload || !signature) return false;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  if (!secureEqual(signature, expected)) return false;
  try {
    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return claims.id === 'teacher-admin'
      && claims.role === 'admin'
      && claims.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

const AUTH_SECRET = process.env.AUTH_TOKEN_SECRET
  || (process.env.NODE_ENV !== 'production' && activeStorage() === 'local'
    ? (process.env.LOCAL_AUTH_SECRET || 'gefen-local-dev-secret-not-for-production')
    : '');

function requireAuthSecret() {
  if (!AUTH_SECRET || AUTH_SECRET.length < 32) {
    throw Object.assign(new Error('AUTH_TOKEN_SECRET must be configured with at least 32 characters'), { status: 503 });
  }
  return AUTH_SECRET;
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, hash] = String(stored || '').split(':');
  if (!salt || !hash) return false;
  const candidate = crypto.scryptSync(String(password), salt, 64).toString('hex');
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(candidate, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function signToken(studentKey, authVersion) {
  const payload = Buffer.from(
    JSON.stringify({
      id: studentKey,
      type: 'student',
      authVersion,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
    }),
  ).toString('base64url');
  const sig = crypto.createHmac('sha256', requireAuthSecret()).update(payload).digest('base64url');
  return `${payload}.${sig}.sig`;
}

function verifyToken(token) {
  const parts = String(token).split('.');
  if (parts.length !== 3 || !AUTH_SECRET || AUTH_SECRET.length < 32) return null;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', AUTH_SECRET).update(payload).digest('base64url');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (claims.exp && claims.exp < Math.floor(Date.now() / 1000)) return null;
    return claims;
  } catch {
    return null;
  }
}

/** Resolve a student token against the persisted account record. */
function isHmacToken(token) {
  const parts = String(token || '').split('.');
  if (parts.length !== 3 || parts[2] !== 'sig' || !AUTH_SECRET || AUTH_SECRET.length < 32) return false;
  const expected = crypto.createHmac('sha256', AUTH_SECRET).update(parts[0]).digest('base64url');
  const a = Buffer.from(parts[1]);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function resolveCaller(authorization) {
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';
  if (!token) return null;

  if (!isHmacToken(token)) return null;
  const claims = verifyToken(token);
  if (!claims?.id || claims.type !== 'student') return null;
  const student = STUDENTS.find((entry) => entry.key === claims.id);
  if (!student) return null;
  const account = await getStudentRecord(student.key);
  if (!account?.activated || account.authVersion !== claims.authVersion) return null;
  return { id: student.key, source: activeStorage() };
}

/* ------------------------------------------------------------------ */
/* Shared handlers                                                     */
/* ------------------------------------------------------------------ */

export function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

function parseJsonMaybe(value) {
  if (value && typeof value === 'object') return value;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return null;
}

export function stampState(data) {
  return { ...data, updated_at: new Date().toISOString() };
}

export async function handleHealth(req, res) {
  const authorization = req.headers.authorization;
  const caller = await resolveCaller(authorization);

  res.json({
    status: 'ok',
    storage: activeStorage(),
    ai: { configured: AI_TARGET.kind !== 'none' && AI_TARGET.kind !== 'invalid', kind: AI_TARGET.kind },
    auth: caller ? 'authenticated' : 'anonymous',
  });
}

export async function handleConfig(req, res) {
  res.json({
    storage: activeStorage(),
    teacherWhatsApp: String(process.env.TEACHER_WHATSAPP || '').replace(/\D/g, ''),
    ai: {
      enabled: AI_TARGET.kind !== 'none' && AI_TARGET.kind !== 'invalid',
      kind: AI_TARGET.kind,
      label: AI_TARGET.label,
    },
  });
}

export async function handleSignup(req, res) {
  return fail(res, 403, 'יצירת חשבונות פתוחה אינה זמינה');
}

export async function handleLogin(req, res) {
  const { username, password } = req.body || {};
  const student = studentByUsername(username);
  if (!student || !password) return fail(res, 401, 'שם המשתמש או הסיסמה שגויים');

  try {
    const account = await getStudentRecord(student.key);
    if (!account?.activated || !account.passwordHash) {
      return fail(res, 403, 'יש להגדיר סיסמה חדשה באמצעות קוד ההפעלה');
    }
    if (!verifyPassword(password, account.passwordHash)) {
      return fail(res, 401, 'שם המשתמש או הסיסמה שגויים');
    }
    res.setHeader('Cache-Control', 'no-store');
    res.json({
      token: signToken(student.key, account.authVersion),
      user: { id: student.key, username: student.username, level: student.level },
      storage: activeStorage(),
    });
  } catch (e) {
    fail(res, e.status || 500, e.message);
  }
}

export async function handleActivateStudent(req, res) {
  const { username, code, password } = req.body || {};
  const student = studentByUsername(username);
  if (!student || !code || !password) return fail(res, 400, 'יש לבחור תלמיד, להזין קוד וסיסמה חדשה');
  if (String(password).length < 8) return fail(res, 400, 'הסיסמה חייבת להכיל 8 תווים לפחות');
  if (String(code).length < 8 || String(code).length > 64) return fail(res, 400, 'קוד ההפעלה אינו תקין');

  try {
    requireAuthSecret();
    const record = await getStudentRecord(student.key);
    if (!record) return fail(res, 401, 'קוד ההפעלה או האיפוס שגוי, נוצל או שפג תוקפו');

    const isFirstActivation = !record.activated;
    const codeHash = hashOneTimeCode(code.trim());
    const matchesActivationCode = isFirstActivation
      && record.activationHash
      && secureEqual(record.activationHash, codeHash);
    const expiresAt = Date.parse(record.resetExpires || '');
    const matchesResetCode = record.resetHash
      && Number.isFinite(expiresAt)
      && expiresAt >= Date.now()
      && secureEqual(record.resetHash, codeHash);
    if (!matchesActivationCode && !matchesResetCode) {
      return fail(res, 401, 'קוד ההפעלה או האיפוס שגוי, נוצל או שפג תוקפו');
    }

    const authVersion = (Number(record.authVersion) || 0) + 1;
    await setStudentRecord(student.key, {
      ...record,
      passwordHash: hashPassword(password),
      activated: true,
      authVersion,
      activationHash: '',
      resetHash: '',
      resetExpires: '',
    });

    res.setHeader('Cache-Control', 'no-store');
    res.json({
      token: signToken(student.key, authVersion),
      user: { id: student.key, username: student.username, level: student.level },
      storage: activeStorage(),
    });
  } catch (e) {
    fail(res, e.status || 500, `הגדרת הסיסמה נכשלה: ${e.message}`);
  }
}

export async function handleAdminLogin(req, res) {
  const { username, password } = req.body || {};
  const configuredUsername = process.env.ADMIN_USERNAME;
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;
  if (!configuredUsername || !configuredPassword || !sessionSecret || sessionSecret.length < 32) {
    return fail(res, 503, 'חשבון האדמין עדיין לא הוגדר בשרת');
  }
  if (!secureEqual(username, configuredUsername) || !secureEqual(password, configuredPassword)) {
    return fail(res, 401, 'שם המשתמש או הסיסמה שגויים');
  }
  res.setHeader('Cache-Control', 'no-store');
  res.json({ token: signAdminToken(), user: { username: configuredUsername, role: 'admin' } });
}

export async function handleAdminStudents(req, res) {
  if (!adminTokenIsValid(req.headers.authorization)) return fail(res, 401, 'נדרשת כניסת אדמין');
  res.setHeader('Cache-Control', 'no-store');
  try {
    const students = [];
    for (const student of STUDENTS) {
      const account = await getStudentRecord(student.key);
      if (!account) {
        students.push({ username: student.username, key: student.key, level: student.level, missing: true });
        continue;
      }
      const record = await getProgressRecord(student.key);
      const data = record ? parseJsonMaybe(record.data) : null;
      const prog = data?.prog && typeof data.prog === 'object' ? data.prog : {};
      students.push({
        username: student.username,
        key: student.key,
        level: student.level,
        activated: Boolean(account.activated),
        xp: Number(data?.xp) || 0,
        streak: Number(data?.streak) || 0,
        completedExercises: Object.values(prog).filter((item) => item?.done).length,
        lastActive: record?.updated || null,
      });
    }
    res.json({ students });
  } catch (e) {
    fail(res, e.status || 500, `טעינת נתוני התלמידים נכשלה: ${e.message}`);
  }
}

export async function handleAdminResetCode(req, res) {
  if (!adminTokenIsValid(req.headers.authorization)) return fail(res, 401, 'נדרשת כניסת אדמין');
  res.setHeader('Cache-Control', 'no-store');
  const student = STUDENTS.find((candidate) => candidate.key === req.params.key);
  if (!student) return fail(res, 404, 'תלמיד לא נמצא');
  try {
    requireAuthSecret();
    const code = crypto.randomBytes(8).toString('hex');
    const record = await getStudentRecord(student.key) || {
      activated: false,
      authVersion: 0,
    };
    const isActivation = !record.activated;
    const expires = isActivation ? null : new Date(Date.now() + 30 * 60 * 1000).toISOString();
    await setStudentRecord(student.key, {
      ...record,
      ...(isActivation
        ? { activationHash: hashOneTimeCode(code), resetHash: '', resetExpires: '' }
        : { resetHash: hashOneTimeCode(code), resetExpires: expires }),
    });
    res.json({ code, purpose: isActivation ? 'activation' : 'reset', expires_at: expires });
  } catch (e) {
    fail(res, e.status || 500, `יצירת קוד הפעלה או איפוס נכשלה: ${e.message}`);
  }
}

export async function handleMe(req, res) {
  const caller = await resolveCaller(req.headers.authorization);
  if (!caller) return fail(res, 401, 'לא מחובר');
  res.json({ user: { id: caller.id }, storage: caller.source });
}

export async function handleGetProgress(req, res) {
  const caller = await resolveCaller(req.headers.authorization);
  if (!caller) return fail(res, 401, 'נדרשת התחברות');

  try {
    const record = await getProgressRecord(caller.id);
    if (!record) return res.json({ data: null, updated_at: null, storage: caller.source });
    res.json({
      data: parseJsonMaybe(record.data),
      updated_at: record.updated || null,
      storage: caller.source,
    });
  } catch (e) {
    fail(res, e.status || 500, `טעינת ההתקדמות נכשלה: ${e.message}`);
  }
}

export async function handleSaveProgress(req, res) {
  const caller = await resolveCaller(req.headers.authorization);
  if (!caller) return fail(res, 401, 'נדרשת התחברות');

  const { data, client_updated_at } = req.body || {};
  if (!data || typeof data !== 'object') return fail(res, 400, 'חסר אובייקט התקדמות (data)');

  const stamped = stampState(data);

  try {
    const existing = await getProgressRecord(caller.id);

    if (existing?.updated) {
      const cloudTime = Date.parse(existing.updated);
      const localTime = Date.parse(client_updated_at || '');
      if (!Number.isNaN(cloudTime) && !Number.isNaN(localTime) && cloudTime > localTime + 1000) {
        return res.status(409).json({ ok: false, reason: 'cloud-newer', storage: caller.source });
      }
    }

    const saved = await compareAndSetProgressRecord(
      caller.id,
      { data: stamped, updated: stamped.updated_at },
      existing?.updated ?? null,
    );
    if (!saved) {
      return res.status(409).json({ ok: false, reason: 'cloud-newer', storage: caller.source });
    }
    res.json({ ok: true, updated_at: stamped.updated_at, storage: caller.source });
  } catch (e) {
    fail(res, e.status || 500, `שמירת ההתקדמות נכשלה: ${e.message}`);
  }
}

export async function handleAiChat(req, res) {
  if (AI_TARGET.kind === 'none' || AI_TARGET.kind === 'invalid') {
    return fail(res, 503, 'שירות ה-AI אינו מוגדר בשרת');
  }

  const { messages, model, temperature, max_tokens } = req.body || {};
  if (!Array.isArray(messages) || !messages.length) return fail(res, 400, 'חסרים הודעות (messages)');

  try {
    const response = await fetch(AI_TARGET.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.origin ? { 'Origin': req.headers.origin } : {}),
        ...(AI_TARGET.headers || {}),
      },
      body: JSON.stringify({
        model: model || 'openai/gpt-oss-120b',
        messages,
        temperature: temperature ?? 0.72,
        max_tokens: max_tokens ?? 800,
      }),
    });

    const text = await response.text();
    let payload;
    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      return res.status(503).json({ error: 'שירות ה-AI אינו זמין כרגע' });
    }

    if (!response.ok) {
      const detail = payload?.error?.message || payload?.error || `HTTP ${response.status}`;
      return res.status(503).json({
        error: typeof detail === 'string' ? detail : 'שגיאת AI',
        upstream_status: response.status,
      });
    }

    res.json(payload);
  } catch (e) {
    fail(res, 503, `שירות ה-AI אינו זמין: ${e.message}`);
  }
}

/* ------------------------------------------------------------------ */
/* Express app                                                         */
/* ------------------------------------------------------------------ */

export function createApp({ serveStatic = true } = {}, expressModule, corsModule) {
  refreshAiTarget();

  const express = expressModule;
  const cors = corsModule;
  const app = express();
  app.disable('x-powered-by');
  app.use(cors());
  app.use(express.json({ limit: '2mb' }));

  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  if (serveStatic) {
    app.use(
      express.static(PUBLIC_DIR, {
        index: false,
        maxAge: process.env.NODE_ENV === 'production' ? '1h' : 0,
      }),
    );
  }

  app.get('/api/health', handleHealth);
  app.get('/api/config', handleConfig);
  app.post('/api/auth/signup', handleSignup);
  app.post('/api/auth/login', handleLogin);
  app.post('/api/auth/activate', handleActivateStudent);
  app.post('/api/auth/admin/login', handleAdminLogin);
  app.get('/api/admin/students', handleAdminStudents);
  app.post('/api/admin/students/:key/reset-code', handleAdminResetCode);
  app.get('/api/auth/me', handleMe);
  app.post('/api/auth/logout', (req, res) => res.json({ ok: true }));
  app.get('/api/progress', handleGetProgress);
  app.post('/api/progress', handleSaveProgress);
  app.post('/api/ai/chat', handleAiChat);

  app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

  if (serveStatic) {
    app.get('*', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')));
  }

  app.use((err, req, res, next) => {
    console.error('[error]', err);
    if (res.headersSent) return next(err);
    res.status(500).json({ error: 'שגיאת שרת' });
  });

  return app;
}

export async function startServer(port = Number(process.env.PORT) || 3000) {
  const { default: express } = await import('express');
  const { default: cors } = await import('cors');

  const app = createApp({}, express, cors);
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving: ${PUBLIC_DIR}`);
    console.log(`Storage: ${activeStorage()}`);
    console.log(`AI: ${AI_TARGET.label}`);
  });

  const shutdown = (signal) => {
    console.log(`\n${signal} received, shutting down...`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 5000).unref();
  };
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  return server;
}

export { signToken, verifyToken, hashPassword, verifyPassword };