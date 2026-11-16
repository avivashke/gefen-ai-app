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
  if (path === '/api/auth/login') {
    response = {
      token: 'smoke-test-token',
      user: { id: 'student-smoke', username: body.username, level: 'A1' },
    };
  } else if (path === '/api/progress' && method === 'GET') {
    response = { data: null, storage: 'cloud' };
  } else if (path === '/api/progress' && method === 'POST') {
    response = { ok: true, storage: 'cloud' };
  }

  request.respond({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(response),
  });
});

await page.goto(`${BASE}/#/home`, { waitUntil: 'networkidle2' });
await page.waitForSelector('#student-username');
await page.select('#student-username', 'בארי');
await page.type('#student-password', 'smoke-test-password');
await page.click('[data-act="student-login"]');
await page.waitForFunction(() => document.title.startsWith('בארי'));
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

const authenticatedProgressRequest = apiCalls.find((call) => (
  call.path === '/api/progress' && call.authorization === 'Bearer smoke-test-token'
));
if (!account.title.startsWith('בארי') || account.name !== 'בארי' || account.level !== 'A1' || account.loginModalVisible) {
  throw new Error(`Student login/identity failed: ${JSON.stringify(account)}`);
}
if (suggestions.count !== 3 || !suggestions.allReadOnly || !suggestions.inputAvailable || !suggestions.microphoneAvailable) {
  throw new Error(`Chat controls failed: ${JSON.stringify(suggestions)}`);
}
if (!microphone.requested || !microphone.started || microphone.permissionError) {
  throw new Error(`Microphone permission flow failed: ${JSON.stringify(microphone)}`);
}
if (!authenticatedProgressRequest) {
  throw new Error('Progress requests were not sent with the authenticated token');
}
if (errors.length || consoleErrors.length) {
  throw new Error(`Browser smoke errors: ${JSON.stringify({ errors, consoleErrors })}`);
}

console.log(JSON.stringify({ account, suggestions, microphone, apiCalls, errors, consoleErrors }, null, 2));
await browser.close();
