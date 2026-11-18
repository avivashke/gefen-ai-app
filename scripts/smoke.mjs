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
      user: {
        id: 'student-smoke', username: body.username, level: 'A2', targetLevel: 'B1',
        gender: 'male', interests: ['כדורגל', 'חיות', 'טבע'],
      },
      storage: 'netlify-blobs',
    };
  } else if (path === '/api/auth/activate') {
    response = {
      token: 'activated-smoke-token',
      user: {
        id: 'student-smoke', username: body.username, level: 'A2', targetLevel: 'B1',
        gender: 'male', interests: ['כדורגל', 'חיות', 'טבע'],
      },
      storage: 'netlify-blobs',
    };
  } else if (path === '/api/auth/admin/login') {
    response = { token: 'admin-smoke-token', user: { username: body.username, role: 'admin' } };
  } else if (path === '/api/admin/students/GEFEN/impersonate' && method === 'POST') {
    response = {
      token: 'admin-impersonation-token',
      user: { id: 'GEFEN', username: 'גפן', level: 'A1', activated: false, impersonatedByAdmin: true },
    };
  } else if (path === '/api/admin/students') {
    response = {
      students: ['גפן', 'בארי', 'שקד', 'מעיין', 'הדר', 'מיה', 'יולי', 'אביב'].map((username, index) => ({
        username, key: ['GEFEN', 'BARRY', 'SHAKED', 'MAAYAN', 'HADAR', 'MIA', 'YULI', 'AVIV'][index],
        level: index === 1 || index === 4 || index >= 6 ? 'A2' : 'A1',
        targetLevel: index === 1 || index === 4 || index === 6 ? 'B1' : 'A2',
        gender: [1, 3, 4, 7].includes(index) ? 'male' : 'female',
        interests: index === 1 ? ['כדורגל', 'חיות', 'טבע'] : [],
        profilePrompt: 'רמת אנגלית: A2. התלמיד: בארי. תחומי עניין: כדורגל, חיות וטבע.',
        activated: index !== 0, missing: index === 0, xp: index * 10, streak: index,
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
await page.waitForFunction(() => document.title.startsWith('Lamda – בארי'));
await new Promise((resolve) => setTimeout(resolve, 300));

const account = await page.evaluate(() => ({
  title: document.title,
  name: S.name,
  level: S.settings.level,
gender: window.apiSync.user()?.gender,
courseTitle: UNITS[0]?.he,
courseLead: UNITS[0]?.lead,
chatPrompt: buildSystemPrompt(SCENARIOS[0]),
  loginModalVisible: !document.getElementById('overlay').hidden,
}));

await page.evaluate(() => go('#/learn'));
await page.waitForFunction(() => location.hash === '#/learn');
await page.click('.topbar-nav [data-act="nav-back"]');
await page.waitForFunction(() => location.hash === '#/home');
await page.evaluate(() => go('#/learn'));
await page.waitForFunction(() => location.hash === '#/learn');
await page.click('.topbar-nav [data-go="#/home"]');
await page.waitForFunction(() => location.hash === '#/home');
const navigationAndLocalSave = await page.evaluate(() => {
  S.xp += 1;
  saveNow();
  const stored = JSON.parse(localStorage.getItem(stateStorageKey()));
  return {
    controls: document.querySelectorAll('.topbar-nav button').length,
    savedXp: stored.xp,
    savedUpdatedAt: stored.updated_at,
  };
});

await page.evaluate(() => {
  const unit = UNITS[0];
  S.unitPos[unit.id] = unit.exercises.findIndex((exercise) => exercise.t === 'readmcq');
  go('#/unit/u1/practice');
});
await page.waitForSelector('.reading-passage .tap-word');
await page.locator('.reading-passage .tap-word').first().click();
const readingTranslation = await page.locator('.reading-passage .word-translation-bubble').innerText();
const readingAnswer = await page.evaluate(() => QS.ex.ans);
await page.locator('.opt').filter({ hasText: readingAnswer }).click();
await page.waitForSelector('#fb-slot .fb.ok');
const answerWordCount = await page.locator('#fb-slot .tap-word').count();
await page.locator('#fb-slot .tap-word').first().click();
await page.waitForTimeout(4100);
const readingBubbleClosed = await page.locator('.word-translation-bubble').count() === 0;
const readingInteraction = { readingTranslation, answerWordCount, readingBubbleClosed };

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
  const originalUserAgent = navigator.userAgent;
  const originalRecognition = window.SpeechRecognition;
  const result = {
    started: false,
    startedSynchronously: false,
    startedAfterPermission: false,
    endedSynchronously: false,
    permissionRequested: 0,
    permissionRequestedSynchronously: false,
    tracksStopped: 0,
    permissionError: null,
  };
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: {
      getUserMedia: () => {
        result.permissionRequested++;
        result.permissionRequestedSynchronously ||= inCall;
        return Promise.resolve({
          getTracks: () => [{ stop() { result.tracksStopped++; } }],
        });
      },
    },
  });
  let inCall = false;
  let permissionGranted = false;
  Object.defineProperty(navigator, 'userAgent', {
    configurable: true,
    value: 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/131.0 Mobile Safari/537.36',
  });
  window.SpeechRecognition = class {
    start() {
      result.started = true;
      result.startedSynchronously = inCall;
      result.startedAfterPermission = permissionGranted;
      this.onend?.();
    }
    abort() {}
  };
  inCall = true;
  const controller = listenOnce('en-US', null, (error) => { result.permissionError = error; }, null);
  result.endedSynchronously = controller === null;
  permissionGranted = true;
  await new Promise((resolve) => setTimeout(resolve, 0));
  window.SpeechRecognition = class {
    start() { throw Object.assign(new Error('denied'), { name: 'NotAllowedError' }); }
    abort() {}
  };
  const failedController = listenOnce('en-US', null, (error) => { result.permissionError = error; }, null);
  result.failedControllerNull = failedController === null;
  inCall = false;
  await new Promise((resolve) => setTimeout(resolve, 0));
  window.SpeechRecognition = class {
    start() {}
    abort() {}
  };
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: {
      getUserMedia: () => Promise.reject(Object.assign(new Error('denied'), { name: 'NotAllowedError' })),
    },
  });
  let browserPermissionError = '';
  permissionGranted = false;
  inCall = true;
  listenOnce('en-US', null, (error) => { browserPermissionError = error; }, null);
  inCall = false;
  await new Promise((resolve) => setTimeout(resolve, 0));
  result.browserPermissionError = browserPermissionError;
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: { getUserMedia: () => new Promise(() => {}) },
  });
  Object.defineProperty(navigator, 'userAgent', {
    configurable: true,
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
  });
  window.SpeechRecognition = class {
    start() { result.iosStartedSynchronously = inCall; }
    abort() {}
  };
  inCall = true;
  const iosController = listenOnce('en-US', null, () => {}, null);
  inCall = false;
  result.iosControllerReturned = Boolean(iosController);
  iosController?.stop();
  Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: originalMediaDevices });
  Object.defineProperty(navigator, 'userAgent', { configurable: true, value: originalUserAgent });
  if (originalRecognition) window.SpeechRecognition = originalRecognition;
  else delete window.SpeechRecognition;
  return result;
});

await page.type('#chat-input', 'I like music.');
await page.click('#chat-send');
await page.waitForFunction(() => S.chat.messages.filter((message) => message.role === 'ai').length > 1);
const wordButtons = await page.$$('.msg.ai [data-vocab-word]');
await wordButtons[wordButtons.length - 1].click();
await page.waitForSelector('#vocab-tooltip [data-vocab-say]');
const vocabularyPopup = await page.$eval('#vocab-tooltip', (tooltip) => ({
  hasSpeaker: Boolean(tooltip.querySelector('[data-vocab-say]')),
  text: tooltip.textContent,
}));
await new Promise((resolve) => setTimeout(resolve, 4100));
const vocabularyPopupClosed = !(await page.$('#vocab-tooltip'));

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
await page.waitForSelector('.admin-student-card[data-admin-student]');
await page.click('[data-act="admin-reset-code"][data-key="GEFEN"]');
await page.waitForFunction(() => document.querySelector('.admin-student-card[data-admin-student="GEFEN"] code')?.textContent === 'reset-smoke-code');
const adminDashboard = await page.evaluate(() => ({
  rows: document.querySelectorAll('.admin-student-card[data-admin-student]').length,
  initialAction: document.querySelector('.admin-student-card[data-admin-student="GEFEN"] [data-act="admin-reset-code"]')?.textContent,
  enterAction: document.querySelector('.admin-student-card[data-admin-student="GEFEN"] [data-act="admin-impersonate"]')?.textContent,
  resetCode: document.querySelector('.admin-student-card[data-admin-student="GEFEN"] code')?.textContent,
}));
await page.click('[data-act="admin-edit-curriculum"][data-key="GEFEN"]');
await page.waitForSelector('#curriculum-prompt');
await page.$eval('#curriculum-prompt', (field) => { field.value = 'A2 English for travel and nature topics'; });
await page.click('[data-act="admin-generate-curriculum"]');
await page.waitForFunction(() => document.querySelector('.admin-student-card[data-admin-student="GEFEN"]')?.textContent.includes('מסלול בדיקה'));
const curriculumGeneration = apiCalls.find((call) => (
  call.path === '/api/admin/students/GEFEN/curriculum' && call.method === 'POST'
));
await page.click('[data-act="admin-impersonate"][data-key="GEFEN"]');
await page.waitForSelector('.admin-impersonation-banner');
const inactiveStudentPreview = await page.evaluate(() => ({
  banner: document.querySelector('.admin-impersonation-banner')?.textContent || '',
  user: window.apiSync.user()?.username,
  activated: window.apiSync.user()?.activated,
}));
await page.click('[data-act="admin-impersonation-exit"]');
await page.waitForSelector('.admin-student-card[data-admin-student]');
const adminReturned = await page.evaluate(() => !document.querySelector('.admin-impersonation-banner'));

const authenticatedProgressRequest = apiCalls.find((call) => (
  call.path === '/api/progress' && call.authorization === 'Bearer smoke-test-token'
));
if (!account.title.startsWith('Lamda – בארי') || account.name !== 'בארי' || account.level !== 'A2'
  || account.gender !== 'male' || !account.courseTitle.includes('מכירים חברים')
  || !account.courseLead.includes('אתה כבר יודע') || !account.chatPrompt.includes('כדורגל')
  || !account.chatPrompt.includes('masculine singular') || account.loginModalVisible) {
  throw new Error(`Student login/identity failed: ${JSON.stringify(account)}`);
}
if (navigationAndLocalSave.controls !== 2 || navigationAndLocalSave.savedXp !== 1
  || !Date.parse(navigationAndLocalSave.savedUpdatedAt)) {
  throw new Error(`Persistent navigation/local save failed: ${JSON.stringify(navigationAndLocalSave)}`);
}
if (!readingInteraction.readingTranslation || readingInteraction.answerWordCount < 1
  || !readingInteraction.readingBubbleClosed) {
  throw new Error(`Reading word audio/translation interaction failed: ${JSON.stringify(readingInteraction)}`);
}
if (suggestions.count !== 3 || !suggestions.allReadOnly || !suggestions.inputAvailable || !suggestions.microphoneAvailable || !suggestions.learnerNameInOpening) {
  throw new Error(`Chat controls failed: ${JSON.stringify(suggestions)}`);
}
if (!microphone.started || microphone.startedSynchronously || !microphone.startedAfterPermission
  || microphone.endedSynchronously || !microphone.iosStartedSynchronously || !microphone.iosControllerReturned
  || !microphone.permissionRequestedSynchronously || microphone.permissionRequested !== 2
  || microphone.tracksStopped !== 2 || microphone.browserPermissionError !== 'not-allowed'
  || !microphone.failedControllerNull || microphone.permissionError !== 'not-allowed') {
  throw new Error(`Microphone permission flow failed: ${JSON.stringify(microphone)}`);
}
if (!activationWorked || adminDashboard.rows !== 8 || adminDashboard.initialAction !== 'קוד הפעלה'
  || adminDashboard.enterAction !== 'בדיקת החשבון' || adminDashboard.resetCode !== 'reset-smoke-code') {
  throw new Error(`Activation/admin dashboard failed: ${JSON.stringify({ activationWorked, adminDashboard })}`);
}
if (!vocabularyPopup.hasSpeaker || !vocabularyPopupClosed) {
  throw new Error(`Vocabulary popup failed: ${JSON.stringify({ vocabularyPopup, vocabularyPopupClosed })}`);
}
if (inactiveStudentPreview.user !== 'גפן' || inactiveStudentPreview.activated !== false
  || !inactiveStudentPreview.banner.includes('עדיין לא הופעל') || !adminReturned) {
  throw new Error(`Inactive learner preview/return failed: ${JSON.stringify({ inactiveStudentPreview, adminReturned })}`);
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
const localizedProfiles = await page.evaluate(() => {
  const profiles = [
    { username: 'יולי', displayName: 'Yuli', gender: 'female', level: 'A2', targetLevel: 'B1', uiLanguage: 'es', learningLanguage: 'English', nativeLanguage: 'Spanish', interests: [] },
    { username: 'אביב', displayName: 'Aviv', gender: 'male', level: 'A2', uiLanguage: 'en', learningLanguage: 'French', nativeLanguage: 'Hebrew', interests: [] },
  ];
  return profiles.map((profile) => {
    setStudentIdentity(profile);
    history.replaceState(null, '', '#/home');
    render();
    const text = document.body.innerText;
    return {
      displayName: profile.displayName,
      language: document.documentElement.lang,
      direction: document.documentElement.dir,
      coursePendingMessage: document.querySelector('#main')?.innerText || '',
      hasHebrew: /[\u0590-\u05ff]/.test(text),
    };
  });
});
if (localizedProfiles.some((profile) => profile.hasHebrew
  || profile.language !== (profile.displayName === 'Yuli' ? 'es' : 'en')
  || profile.direction !== 'ltr'
  || !profile.coursePendingMessage.includes(profile.displayName === 'Yuli' ? 'español' : 'English'))) {
  throw new Error(`Localized learner interface failed: ${JSON.stringify(localizedProfiles)}`);
}
if (errors.length || consoleErrors.length) {
  throw new Error(`Browser smoke errors: ${JSON.stringify({ errors, consoleErrors })}`);
}

console.log(JSON.stringify({ account, suggestions, microphone, activationWorked, adminDashboard, inactiveStudentPreview, adminReturned, whatsappResetLinkConfigured, localizedProfiles, apiCalls, errors, consoleErrors }, null, 2));
await browser.close();
