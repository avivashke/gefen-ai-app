import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { studentByEmail, studentByUsername } from './students.js';

// Support both ESM (local dev) and CJS (Netlify Functions)
const isESM = typeof import.meta !== 'undefined' && import.meta.url;
const __dir = isESM
  ? path.dirname(fileURLToPath(import.meta.url))
  : process.cwd();

export const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';
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

/* ------------------------------------------------------------------ */
/* PocketBase                                                          */
/* ------------------------------------------------------------------ */

export async function newPbClient() {
  const { default: PocketBase } = await import('pocketbase');
  return new PocketBase(PB_URL);
}

let adminClientPromise = null;
export function getAdminClient() {
  if (!adminClientPromise) {
    adminClientPromise = newPbClient();
  }
  return adminClientPromise;
}
export let adminReady = false;
export let pbReachable = false;

export async function connectAdmin(env = process.env) {
  const email = env.PB_ADMIN_EMAIL;
  const password = env.PB_ADMIN_PASSWORD;
  if (!email || !password) return false;
  try {
    const client = await getAdminClient();
    await client.collection('_superusers').authWithPassword(email, password);
    adminReady = true;
    console.log('[PocketBase] admin client authenticated');
    return true;
  } catch (e) {
    adminReady = false;
    console.warn('[PocketBase] admin auth failed:', e.message);
    return false;
  }
}

export async function checkPocketBase() {
  try {
    const client = await newPbClient();
    const health = await client.health.check();
    pbReachable = Boolean(health);
  } catch {
    pbReachable = false;
  }
  return pbReachable;
}

/** Resolve the caller's own id from a bearer token without trusting client state. */
export async function callerId(authorization) {
  if (!authorization || !authorization.startsWith('Bearer ')) return null;
  const token = authorization.slice(7);
  const claims = decodeClaims(token);
  if (!claims) return null;
  if (claims.type === 'admin') return null;
  if (claims.id) return claims.id;

  const client = await newPbClient();
  client.authStore.save(token, null);
  try {
    const auth = await client.collection('users').authRefresh();
    return auth?.record?.id || null;
  } catch {
    return null;
  }
}

function decodeClaims(token) {
  const parts = String(token).split('.');
  if (parts.length !== 3) return null;
  try {
    const json = Buffer.from(parts[1].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Local auth fallback (keeps accounts + progress when PB is offline)  */
/* ------------------------------------------------------------------ */

const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dir, '..', 'data');

const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROGRESS_FILE = path.join(DATA_DIR, 'progress.json');
const SECRET = process.env.LOCAL_AUTH_SECRET || 'gefen-local-dev-secret';

let usersCache = null;
let progressCache = null;

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return structuredClone(fallback);
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

// Best-effort local persistence. On serverless platforms (Netlify Functions)
// the filesystem is read-only outside /tmp, so writes may fail — we degrade
// gracefully instead of crashing the whole request.
function writeJson(file, value) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const tmp = `${file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(value, null, 2));
    fs.renameSync(tmp, file);
    return true;
  } catch (e) {
    console.warn(`[local-storage] write failed (read-only fs?): ${file} :: ${e.message}`);
    return false;
  }
}

function loadUsers() {
  if (usersCache === null) usersCache = readJson(USERS_FILE, {});
  return usersCache;
}

function saveUsers() {
  return writeJson(USERS_FILE, loadUsers());
}

function loadProgress() {
  if (progressCache === null) progressCache = readJson(PROGRESS_FILE, {});
  return progressCache;
}

function saveProgress() {
  return writeJson(PROGRESS_FILE, loadProgress());
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

function signToken(userId) {
  const payload = Buffer.from(
    JSON.stringify({ id: userId, type: 'authRecord', exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 }),
  ).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${sig}.sig`;
}

function verifyToken(token) {
  const parts = String(token).split('.');
  if (parts.length !== 3) return null;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');
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

/** Resolve the caller from a bearer token against PB first, then local store. */
function isHmacToken(token) {
  const parts = String(token || '').split('.');
  if (parts.length !== 3 || parts[2] !== 'sig') return false;
  const expected = crypto.createHmac('sha256', SECRET).update(parts[0]).digest('base64url');
  const a = Buffer.from(parts[1]);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function findUserById(userId) {
  const users = loadUsers();
  const direct = users[userId];
  if (direct && typeof direct === 'object') return { email: userId, record: direct };
  for (const [email, record] of Object.entries(users)) {
    if (record && record.id === userId) return { email, record };
  }
  return null;
}

export async function resolveCaller(authorization) {
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';
  if (!token) return null;

  // Locally signed token: no network needed, works fully offline.
  if (isHmacToken(token)) {
    const claims = verifyToken(token);
    if (!claims?.id) return null;
    return findUserById(claims.id) ? { id: claims.id, source: 'local' } : null;
  }

  // PocketBase JWT.
  const remote = await callerId(authorization);
  return remote ? { id: remote, source: 'pocketbase' } : null;
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

function filterValue(userId) {
  return String(userId).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function findProgressRecord(client, userId) {
  const page = await client.collection('progress').getList(1, 1, {
    filter: `user = "${filterValue(userId)}"`,
    sort: '-updated',
  });
  return page.items[0] || null;
}

async function authenticatedPbClient(authorization, callerIdValue) {
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : '';
  if (!token) throw Object.assign(new Error('חסרה הרשאת משתמש'), { status: 401 });
  const client = await newPbClient();
  client.authStore.save(token, null);
  let auth;
  try {
    auth = await client.collection('users').authRefresh();
  } catch {
    throw Object.assign(new Error('ההרשאה פגה או אינה תקינה'), { status: 401 });
  }
  if (auth?.record?.id !== callerIdValue) throw Object.assign(new Error('ההרשאה אינה תואמת לחשבון'), { status: 401 });
  return client;
}

export async function handleHealth(req, res) {
  const authorization = req.headers.authorization;
  const reachable = await checkPocketBase();
  const caller = await resolveCaller(authorization);

  res.json({
    status: 'ok',
    pocketbase: { url: PB_URL, reachable, admin: adminReady, fallback: reachable ? 'cloud' : 'local' },
    ai: { configured: AI_TARGET.kind !== 'none' && AI_TARGET.kind !== 'invalid', kind: AI_TARGET.kind },
    auth: caller ? 'authenticated' : 'anonymous',
  });
}

export async function handleConfig(req, res) {
  const reachable = await checkPocketBase();
  res.json({
    pocketbaseUrl: PB_URL,
    storage: reachable ? 'cloud' : 'local',
    ai: {
      enabled: AI_TARGET.kind !== 'none' && AI_TARGET.kind !== 'invalid',
      kind: AI_TARGET.kind,
      label: AI_TARGET.label,
    },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function localSignup(email, password) {
  const users = loadUsers();
  const normalized = email.trim().toLowerCase();
  if (users[normalized]) throw Object.assign(new Error('האימייל כבר רשום'), { status: 409 });

  const id = crypto.randomBytes(8).toString('hex');
  users[normalized] = { id, password: hashPassword(password), created: new Date().toISOString() };
  saveUsers();
  return { token: signToken(id), user: { id, email: normalized } };
}

async function localLogin(email, password) {
  const users = loadUsers();
  const normalized = email.trim().toLowerCase();
  const record = users[normalized];
  if (!record || !verifyPassword(password, record.password)) {
    throw Object.assign(new Error('אימייל או סיסמה שגויים'), { status: 401 });
  }
  return { token: signToken(record.id), user: { id: record.id, email: normalized } };
}

export async function handleSignup(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password) return fail(res, 400, 'נדרשים אימייל וסיסמה');
  if (!EMAIL_RE.test(String(email))) return fail(res, 400, 'כתובת אימייל לא תקינה');
  if (String(password).length < 8) return fail(res, 400, 'הסיסמה חייבת להכיל 8 תווים לפחות');

  const reachable = await checkPocketBase();
  if (!reachable) {
    try {
      const result = await localSignup(email, password);
      return res.status(201).json(result);
    } catch (e) {
      return fail(res, e.status || 500, e.message);
    }
  }

  const client = await newPbClient();
  try {
    const created = await client.collection('users').create({
      email: String(email).trim().toLowerCase(),
      password,
      passwordConfirm: password,
    });
    const auth = await client.collection('users').authWithPassword(created.email, password);
    res.status(201).json({ token: auth.token, user: { id: auth.record.id, email: auth.record.email } });
  } catch (e) {
    fail(res, 400, e?.message || 'יצירת המשתמש נכשלה');
  }
}

export async function handleLogin(req, res) {
  const { username, email, password } = req.body || {};
  const loginValue = String(username || email || '').trim();
  if (!loginValue || !password) return fail(res, 400, 'נדרשים שם משתמש וסיסמה');

  const student = studentByUsername(loginValue);
  const loginEmail = student?.email || (loginValue.includes('@') ? loginValue.toLowerCase() : '');
  if (!loginEmail) return fail(res, 401, 'שם המשתמש או הסיסמה שגויים');

  const reachable = await checkPocketBase();
  if (!reachable) {
    try {
      const result = await localLogin(loginEmail, password);
      const account = student || studentByEmail(result.user.email);
      return res.json({
        ...result,
        user: { ...result.user, username: account?.username || result.user.email, level: account?.level || 'A1' },
      });
    } catch (e) {
      return fail(res, e.status || 500, e.message);
    }
  }

  const client = await newPbClient();
  try {
    const auth = await client.collection('users').authWithPassword(loginEmail, password);
    const account = student || studentByEmail(auth.record.email);
    res.json({
      token: auth.token,
      user: {
        id: auth.record.id,
        email: auth.record.email,
        username: account?.username || auth.record.email,
        level: account?.level || 'A1',
      },
    });
  } catch {
    fail(res, 401, 'שם המשתמש או הסיסמה שגויים');
  }
}

export async function handleMe(req, res) {
  const caller = await resolveCaller(req.headers.authorization);
  if (!caller) return fail(res, 401, 'לא מחובר');
  if (caller.source === 'pocketbase') {
    try {
      await authenticatedPbClient(req.headers.authorization, caller.id);
    } catch (e) {
      return fail(res, e.status || 401, e.message);
    }
  }
  res.json({ user: { id: caller.id }, storage: caller.source });
}

export async function handleGetProgress(req, res) {
  const caller = await resolveCaller(req.headers.authorization);
  if (!caller) return fail(res, 401, 'נדרשת התחברות');

  if (caller.source === 'local') {
    const progress = loadProgress();
    const entry = progress[caller.id];
    if (!entry) return res.json({ data: null, updated_at: null, storage: 'local' });
    return res.json({
      data: parseJsonMaybe(entry.data),
      updated_at: entry.updated || null,
      storage: 'local',
    });
  }

  try {
    const client = await authenticatedPbClient(req.headers.authorization, caller.id);
    const record = await findProgressRecord(client, caller.id);
    if (!record) return res.json({ data: null, updated_at: null, storage: 'cloud' });
    res.json({
      data: parseJsonMaybe(record.data),
      updated_at: record.updated || null,
      recordId: record.id,
      storage: 'cloud',
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

  if (caller.source === 'local') {
    const progress = loadProgress();
    const existing = progress[caller.id];
    if (existing?.updated) {
      const cloudTime = Date.parse(existing.updated);
      const localTime = Date.parse(client_updated_at || '');
      if (!Number.isNaN(cloudTime) && !Number.isNaN(localTime) && cloudTime > localTime + 1000) {
        return res.status(409).json({ ok: false, reason: 'cloud-newer', storage: 'local' });
      }
    }
    progress[caller.id] = { data: stamped, updated: stamped.updated_at };
    saveProgress();
    return res.json({ ok: true, updated_at: stamped.updated_at, storage: 'local' });
  }

  try {
    const client = await authenticatedPbClient(req.headers.authorization, caller.id);
    const existing = await findProgressRecord(client, caller.id);

    if (existing?.updated) {
      const cloudTime = Date.parse(existing.updated);
      const localTime = Date.parse(client_updated_at || '');
      if (!Number.isNaN(cloudTime) && !Number.isNaN(localTime) && cloudTime > localTime + 1000) {
        return res.status(409).json({ ok: false, reason: 'cloud-newer', storage: 'cloud' });
      }
    }

    let recordId = existing && existing.id;
    if (recordId) {
      await client.collection('progress').update(recordId, {
        user: caller.id,
        data: stamped,
        updated: stamped.updated_at,
      });
    } else {
      const created = await client.collection('progress').create({
        user: caller.id,
        data: stamped,
        updated: stamped.updated_at,
      });
      recordId = created.id;
    }

    res.json({ ok: true, recordId, updated_at: stamped.updated_at, storage: 'cloud' });
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
    console.log(`PocketBase: ${PB_URL}`);
    console.log(`AI: ${AI_TARGET.label}`);
  });

  const reachable = await checkPocketBase();
  console.log(`PocketBase reachable: ${reachable ? 'yes' : 'no (local fallback active)'}`);

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