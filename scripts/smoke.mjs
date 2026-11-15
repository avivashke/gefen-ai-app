import puppeteer from 'puppeteer-core';

const BASE = process.env.BASE || 'http://localhost:3100';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const page = await browser.newPage();
const errors = [];
const consoleErrors = [];
const failed = [];

page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text());
});
page.on('requestfailed', (r) => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));

await page.goto(`${BASE}/#/home`, { waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 1200));

const report = await page.evaluate(() => {
  const out = {};
  out.title = document.title;
  out.hasS = typeof S !== 'undefined';
  out.xp = typeof S !== 'undefined' ? S.xp : null;
  out.mainChildren = document.getElementById('main')?.children.length ?? -1;
  out.syncBadge = document.getElementById('sync-badge')?.textContent || null;
  out.canUseAI = typeof canUseAI === 'function' ? canUseAI() : null;
  out.apiMode = typeof S !== 'undefined' ? S.api.mode : null;
  return out;
});

// navigate through the app to exercise render paths
const routes = ['#/learn', '#/chat', '#/review', '#/stats', '#/home'];
for (const r of routes) {
  await page.evaluate((route) => { location.hash = route; }, r);
  await new Promise((res) => setTimeout(res, 400));
}

// exercise a local save + reload to verify persistence
await page.evaluate(() => {
  if (typeof S !== 'undefined') {
    S.xp = 999;
    if (typeof saveNow === 'function') saveNow();
  }
});
await new Promise((r) => setTimeout(r, 600));
await page.reload({ waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 900));

const afterReload = await page.evaluate(() => (typeof S !== 'undefined' ? S.xp : null));

// open settings modal and attempt signup through the API
await page.evaluate(() => { location.hash = '#/home'; });
await new Promise((r) => setTimeout(r, 400));
await page.evaluate(() => openSettings());
await new Promise((r) => setTimeout(r, 400));
const settingsOpened = await page.evaluate(() => {
  const overlay = document.getElementById('overlay');
  return { visible: overlay && !overlay.hidden, hasEmail: !!document.getElementById('sync-email') };
});

const email = `puppeteer${Date.now()}@example.com`;
const signupResult = await page.evaluate(async (mail) => {
  const pass = 'password123';
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: mail, password: pass }),
  });
  const body = await res.json();
  if (!res.ok) return { ok: false, body };
  localStorage.setItem('auth_token', body.token);
  return { ok: true, user: body.user };
}, email);

const syncAfter = await page.evaluate(async () => {
  const out = {};
  out.enabled = window.apiSync?.isEnabled();
  out.user = window.apiSync?.user();
  out.hasSave = typeof window.apiSync?.save === 'function';
  if (typeof S !== 'undefined') { S.xp = 777; }
  window.apiSync.save(S);
  await new Promise((r) => setTimeout(r, 1500));
  const res = await fetch('/api/progress', { headers: { Authorization: `Bearer ${window.apiSync.token()}` } });
  out.remote = await res.json();
  return out;
});

console.log(JSON.stringify({
  report,
  afterReload,
  settingsOpened,
  signupResult: signupResult.ok ? { ok: true, email: signupResult.user.email } : signupResult,
  syncAfter: {
    enabled: syncAfter.enabled,
    hasSave: syncAfter.hasSave,
    email: syncAfter.user?.email,
    remoteXp: syncAfter.remote?.data?.xp ?? null,
    storage: syncAfter.remote?.storage ?? null,
  },
  errors,
  consoleErrors: consoleErrors.slice(0, 10),
  failed: failed.slice(0, 10),
}, null, 2));

await browser.close();