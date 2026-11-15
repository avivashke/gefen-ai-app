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

// open settings and verify account login is replaced by learner profiles
await page.evaluate(() => { location.hash = '#/home'; });
await new Promise((r) => setTimeout(r, 400));
await page.evaluate(() => openSettings());
await new Promise((r) => setTimeout(r, 400));
const settingsOpened = await page.evaluate(() => {
  const overlay = document.getElementById('overlay');
  return {
    visible: overlay && !overlay.hidden,
    hasProfileManager: !!document.querySelector('[data-act="profile-manage"]'),
    hasEmail: !!document.getElementById('sync-email'),
  };
});

const profileSync = await page.evaluate(async () => {
  const suffix = Date.now();
  await createLearnerProfile(`Smoke ${suffix} A`, 'A2');
  S.xp = 333;
  S.updated_at = new Date().toISOString();
  saveNow();
  await window.apiSync.flush();
  const firstProfileId = activeProfileId;
  await createLearnerProfile(`Smoke ${suffix} B`, 'B1');
  const secondProfileXp = S.xp;
  const secondProfileId = activeProfileId;
  await activateProfile(knownProfiles.find((profile) => profile.id === firstProfileId));
  const firstProfileXp = S.xp;
  return {
    firstProfileId,
    secondProfileId,
    firstProfileXp,
    secondProfileXp,
    storage: window.apiSync.storage(),
  };
});
await page.reload({ waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 900));
const profileReloadXp = await page.evaluate(() => (typeof S !== 'undefined' ? S.xp : null));

if (!settingsOpened.visible || !settingsOpened.hasProfileManager || settingsOpened.hasEmail) {
  throw new Error('Settings did not expose the expected login-free profile manager');
}
if (profileSync.firstProfileId === profileSync.secondProfileId
  || profileSync.firstProfileXp !== 333
  || profileSync.secondProfileXp !== 0
  || profileReloadXp !== 333) {
  throw new Error(`Profile isolation/persistence failed: ${JSON.stringify({ profileSync, profileReloadXp })}`);
}
if (errors.length || consoleErrors.length || failed.length) {
  throw new Error(`Browser smoke errors: ${JSON.stringify({ errors, consoleErrors, failed })}`);
}

console.log(JSON.stringify({
  report,
  afterReload,
  settingsOpened,
  profileSync,
  profileReloadXp,
  errors,
  consoleErrors: consoleErrors.slice(0, 10),
  failed: failed.slice(0, 10),
}, null, 2));

await browser.close();