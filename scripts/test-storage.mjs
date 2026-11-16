import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gefen-storage-test-'));
process.env.DATA_DIR = dataDir;
process.env.AUTH_TOKEN_SECRET = 'test-auth-token-secret-at-least-32-characters';
process.env.ADMIN_USERNAME = 'teacher';
process.env.ADMIN_PASSWORD = 'test-admin-password';
process.env.ADMIN_SESSION_SECRET = 'test-admin-session-secret-at-least-32-characters';
delete process.env.NETLIFY;
delete process.env.NETLIFY_SITE_ID;
delete process.env.AWS_LAMBDA_FUNCTION_NAME;

const {
  handleActivateStudent,
  handleAdminLogin,
  handleAdminResetCode,
  handleAdminStudents,
  handleGetProgress,
  handleLogin,
  handleSaveProgress,
  resolveCaller,
} = await import('../server/app.js');
const { compareAndSetProgressRecord, getProgressRecord } = await import('../server/storage.js');

async function call(handler, request = {}) {
  const response = {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
    setHeader() {},
  };
  await handler({
    headers: {},
    params: {},
    body: {},
    ...request,
  }, response);
  return response;
}

try {
  const adminLogin = await call(handleAdminLogin, {
    body: { username: 'teacher', password: 'test-admin-password' },
  });
  assert.equal(adminLogin.statusCode, 200);
  const adminHeaders = { authorization: `Bearer ${adminLogin.body.token}` };

  const initialCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
  });
  assert.equal(initialCode.statusCode, 200);
  assert.equal(initialCode.body.purpose, 'activation');
  assert.equal(initialCode.body.expires_at, null);

  const activated = await call(handleActivateStudent, {
    body: { username: 'גפן', code: initialCode.body.code, password: 'gefen-test-password' },
  });
  assert.equal(activated.statusCode, 200);
  assert.equal((await resolveCaller(`Bearer ${activated.body.token}`)).id, 'GEFEN');

  const saved = await call(handleSaveProgress, {
    headers: { authorization: `Bearer ${activated.body.token}` },
    body: {
      data: { xp: 25, streak: 3, prog: { exercise1: { done: true } } },
      client_updated_at: null,
    },
  });
  assert.equal(saved.statusCode, 200);
  const savedProgress = await getProgressRecord('GEFEN');
  const newerProgress = { ...savedProgress, updated: new Date(Date.now() + 1000).toISOString() };
  assert.equal(await compareAndSetProgressRecord('GEFEN', newerProgress, savedProgress.updated), true);
  assert.equal(await compareAndSetProgressRecord('GEFEN', savedProgress, savedProgress.updated), false);

  const resetCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
  });
  assert.equal(resetCode.statusCode, 200);
  assert.equal(resetCode.body.purpose, 'reset');
  assert.ok(Date.parse(resetCode.body.expires_at) > Date.now());

  const reactivated = await call(handleActivateStudent, {
    body: { username: 'גפן', code: resetCode.body.code, password: 'gefen-new-password' },
  });
  assert.equal(reactivated.statusCode, 200);
  assert.equal(await resolveCaller(`Bearer ${activated.body.token}`), null);

  const login = await call(handleLogin, {
    body: { username: 'גפן', password: 'gefen-new-password' },
  });
  assert.equal(login.statusCode, 200);

  const loaded = await call(handleGetProgress, {
    headers: { authorization: `Bearer ${login.body.token}` },
  });
  assert.equal(loaded.statusCode, 200);
  assert.equal(loaded.body.data.xp, 25);
  assert.equal(loaded.body.storage, 'local');

  const secondCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'BARRY' },
  });
  const secondStudent = await call(handleActivateStudent, {
    body: { username: 'בארי', code: secondCode.body.code, password: 'barry-test-password' },
  });
  const secondProgress = await call(handleGetProgress, {
    headers: { authorization: `Bearer ${secondStudent.body.token}` },
  });
  assert.equal(secondProgress.statusCode, 200);
  assert.equal(secondProgress.body.data, null);

  const dashboard = await call(handleAdminStudents, { headers: adminHeaders });
  assert.equal(dashboard.statusCode, 200);
  assert.equal(dashboard.body.students.find((student) => student.key === 'GEFEN').xp, 25);
  assert.equal(dashboard.body.students.find((student) => student.key === 'MIA').missing, true);

  console.log('Storage/auth flow passed: activation, login, reset, student isolation, progress, and admin summary.');
} finally {
  fs.rmSync(dataDir, { recursive: true, force: true });
}
