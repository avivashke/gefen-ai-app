import puppeteer from 'puppeteer-core';

const BASE = process.env.BASE || 'http://localhost:3100';

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const page = await browser.newPage();
const errors = [];
const consoleErrors = [];
const apiCalls = [];

page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text());
});
await page.setRequestInterception(true);
page.on('request', (request) => {
  if (!request.url().startsWith(`${BASE}/api/`)) {
    request.continue();
    return;
  }

  const path = new URL(request.url()).pathname;
  const method = request.method();
  const body = request.postData() ? JSON.parse(request.postData()) : null;
  apiCalls.push({ path, method, body, authorization: request.headers().authorization });

  let response = {};
  if (path === '/api/config') {
    response = { teacherWhatsApp: '972500000000', storage: 'netlify-blobs' };
  } else if (path === '/api/auth/login') {
    response = {
      token: 'smoke-test-token',
      user: { id: 'student-smoke', username: body.username, level: 'A1' },
      storage: 'netlify-blobs',
    };
  } else if (path === '/api/auth/activate') {
    response = {
      token: 'activated-smoke-token',
      user: { id: 'student-smoke', username: body.username, level: 'A1' },
      storage: 'netlify-blobs',
    };
  } else if (path === '/api/auth/admin/login') {
    response = { token: 'admin-smoke-token', user: { username: body.username, role: 'admin' } };
  } else if (path === '/api/admin/students') {
    response = {
      students: ['גפן', 'בארי', 'שקד', 'מעיין', 'הדר', 'מיה'].map((username, index) => ({
        username, key: ['GEFEN', 'BARRY', 'SHAKED', 'MAAYAN', 'HADAR', 'MIA'][index],
        level: 'A1', activated: index !== 0, missing: index === 0, xp: index * 10, streak: index,
        completedExercises: index + 1, lastActive: null,
      })),
    };
  } else if (path === '/api/admin/students/GEFEN/reset-code') {
    response = { code: 'reset-smoke-code', purpose: 'activation', expires_at: null };
  } else if (/^\/api\/admin\/students\/[^/]+\/curriculum-reports$/.test(path)) {
    response = { reports: [] };
  } else if (/^\/api\/admin\/students\/[^/]+\/curriculum$/.test(path) && method === 'POST') {
    response = {
      curriculum: { id: 'course-smoke', title: 'מסלול בדיקה', level: 'A2', unitCount: 4 },
      archivedReport: null,
      reportsCount: 0,
    };
  } else if (path === '/api/curriculum') {
    response = { curriculum: null, courseId: 'default' };
  } else if (path === '/api/progress' && method === 'GET') {
    response = { data: null, courseId: 'default', storage: 'netlify-blobs' };
  } else if (path === '/api/progress' && method === 'POST') {
    response = { ok: true, storage: 'netlify-blobs' };
  }

  request.respond({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(response),
  });
});

await page.goto(`${BASE}/#/home`, { waitUntil: 'networkidle2' });
await page.waitForSelector('#student-username');
await page.waitForFunction(() => document.querySelector('#whatsapp-reset-link')?.href.includes('wa.me/972500000000'));
const whatsappResetLinkConfigured = await page.$eval('#whatsapp-reset-link', (link) => link.href.includes('wa.me/972500000000'));
await page.select('#student-username', 'בארי');
await page.type('#student-password', 'smoke-test-password');
await page.click('[data-act="student-login"]');
await page.waitForFunction(() => document.title.startsWith('lomdaa – בארי'));
await new Promise((resolve) => setTimeout(resolve, 300));

const account = await page.evaluate(() => ({
  title: document.title,
  name: S.name,
  level: S.settings.level,
  loginModalVisible: !document.getElementById('overlay').hidden,
}));

await page.evaluate(() => { location.hash = `#/chat/${SCENARIOS[0].id}`; });
await page.waitForSelector('.suggestion-text');
const suggestions = await page.evaluate(() => {
  const elements = [...document.querySelectorAll('.suggestion-text')];
  return {
    count: elements.length,
    allReadOnly: elements.every((element) => !element.closest('button, a, [role="button"]')),
    inputAvailable: Boolean(document.querySelector('#chat-input')),
    microphoneAvailable: Boolean(document.querySelector('#chat-mic')),
    learnerNameInOpening: S.chat.messages[0]?.text.includes('בארי'),
  };
});

const microphone = await page.evaluate(async () => {
  const originalMediaDevices = navigator.mediaDevices;
  const originalRecognition = window.SpeechRecognition;
  const result = { requested: false, started: false, permissionError: null };
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: {
      getUserMedia: async () => {
        result.requested = true;
        return { getTracks: () => [{ stop() {} }] };
      },
    },
  });
  window.SpeechRecognition = class {
    start() { result.started = true; }
    abort() {}
  };
  listenOnce('en-US', null, (error) => { result.permissionError = error; }, null);
  await new Promise((resolve) => setTimeout(resolve, 50));
  Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: originalMediaDevices });
  if (originalRecognition) window.SpeechRecognition = originalRecognition;
  else delete window.SpeechRecognition;
  return result;
});

await page.evaluate(() => openPasswordSetup());
await page.select('#activation-username', 'בארי');
await page.type('#activation-code', 'activation-smoke-code');
await page.type('#activation-password', 'new-smoke-password');
await page.type('#activation-password-confirm', 'new-smoke-password');
await page.click('[data-act="password-setup"]');
await page.waitForFunction(() => window.apiSync.user()?.username === 'בארי');
const activationWorked = apiCalls.some((call) => call.path === '/api/auth/activate' && call.method === 'POST');

await page.evaluate(() => { location.hash = '#/admin'; });
await page.waitForSelector('#admin-username');
await page.type('#admin-username', 'teacher');
await page.type('#admin-password', 'admin-smoke-password');
await page.click('[data-act="admin-login"]');
await page.waitForSelector('tbody tr[data-admin-student]');
await page.click('[data-act="admin-reset-code"][data-key="GEFEN"]');
await page.waitForFunction(() => document.querySelector('tbody tr[data-admin-student="GEFEN"] code')?.textContent === 'reset-smoke-code');
const adminDashboard = await page.evaluate(() => ({
  rows: document.querySelectorAll('tbody tr[data-admin-student]').length,
  initialAction: document.querySelector('tbody tr[data-admin-student="GEFEN"] [data-act="admin-reset-code"]')?.textContent,
  resetCode: document.querySelector('tbody tr[data-admin-student="GEFEN"] code')?.textContent,
}));
await page.click('[data-act="admin-edit-curriculum"][data-key="GEFEN"]');
await page.waitForSelector('#curriculum-prompt');
await page.type('#curriculum-prompt', 'A2 English for travel and nature topics');
await page.click('[data-act="admin-generate-curriculum"]');
await page.waitForFunction(() => document.querySelector('tbody tr[data-admin-student="GEFEN"]')?.textContent.includes('מסלול בדיקה'));
const curriculumGeneration = apiCalls.find((call) => (
  call.path === '/api/admin/students/GEFEN/curriculum' && call.method === 'POST'
));

const authenticatedProgressRequest = apiCalls.find((call) => (
  call.path === '/api/progress' && call.authorization === 'Bearer smoke-test-token'
));
if (!account.title.startsWith('lomdaa – בארי') || account.name !== 'בארי' || account.level !== 'A1' || account.loginModalVisible) {
  throw new Error(`Student login/identity failed: ${JSON.stringify(account)}`);
}
if (suggestions.count !== 3 || !suggestions.allReadOnly || !suggestions.inputAvailable || !suggestions.microphoneAvailable || !suggestions.learnerNameInOpening) {
  throw new Error(`Chat controls failed: ${JSON.stringify(suggestions)}`);
}
if (!microphone.requested || !microphone.started || microphone.permissionError) {
  throw new Error(`Microphone permission flow failed: ${JSON.stringify(microphone)}`);
}
if (!activationWorked || adminDashboard.rows !== 6 || adminDashboard.initialAction !== 'קוד הפעלה'
  || adminDashboard.resetCode !== 'reset-smoke-code') {
  throw new Error(`Activation/admin dashboard failed: ${JSON.stringify({ activationWorked, adminDashboard })}`);
}
if (!whatsappResetLinkConfigured) {
  throw new Error('WhatsApp password-reset request link was not configured');
}
if (!authenticatedProgressRequest) {
  throw new Error('Progress requests were not sent with the authenticated token');
}
if (!curriculumGeneration || curriculumGeneration.body?.prompt !== 'A2 English for travel and nature topics') {
  throw new Error('Admin curriculum prompt was not submitted correctly');
}
if (errors.length || consoleErrors.length) {
  throw new Error(`Browser smoke errors: ${JSON.stringify({ errors, consoleErrors })}`);
}

console.log(JSON.stringify({ account, suggestions, microphone, activationWorked, adminDashboard, whatsappResetLinkConfigured, apiCalls, errors, consoleErrors }, null, 2));
await browser.close();
