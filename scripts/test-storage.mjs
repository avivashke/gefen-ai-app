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
process.env.AI_PROXY_URL = 'https://ai.example/v1';
delete process.env.NETLIFY;
delete process.env.NETLIFY_SITE_ID;
delete process.env.AWS_LAMBDA_FUNCTION_NAME;

const {
  handleActivateStudent,
  handleAdminLogin,
  handleAdminCurriculumReports,
  handleAdminGenerateCurriculum,
  handleAdminGetAiModels,
  handleAdminImpersonateStudent,
  handleAdminResetCode,
  handleAdminSaveAiModels,
  handleAdminStudents,
  handleAdminTestAiModel,
  handleAiChat,
  handleConfig,
  handleGetCurriculum,
  handleMe,
  handleGetProgress,
  handleLogin,
  handleSaveProgress,
  refreshAiTarget,
  resolveCaller,
} = await import('../server/app.js');
const {
  compareAndSetProgressRecord,
  getAppSetting,
  getProgressRecord,
  getStudentRecord,
} = await import('../server/storage.js');
const { STUDENTS } = await import('../server/students.js');
refreshAiTarget();
assert.deepEqual(
  STUDENTS.map(({ username, level, targetLevel, gender, interests }) => ({ username, level, targetLevel, gender, interests })),
  [
    { username: 'גפן', level: 'A1', targetLevel: undefined, gender: 'female', interests: ['ריקוד', 'חיות', 'טבע'] },
    { username: 'בארי', level: 'A2', targetLevel: 'B1', gender: 'male', interests: ['כדורגל', 'ספורט', 'חיות', 'טבע'] },
    { username: 'שקד', level: 'A1', targetLevel: undefined, gender: 'female', interests: ['ריקוד', 'חיות', 'טבע'] },
    { username: 'מעיין', level: 'A1', targetLevel: undefined, gender: 'male', interests: ['פוקימון'] },
    { username: 'הדר', level: 'A2', targetLevel: 'B1', gender: 'male', interests: ['עובדות מעניינות', 'טבע', 'חיות', 'טרנדים'] },
    { username: 'מיה', level: 'A1', targetLevel: undefined, gender: 'female', interests: [] },
    { username: 'יולי', level: 'B1', targetLevel: undefined, gender: 'female', interests: ['cocina', 'negocios', 'arquitectura', 'moda'] },
    { username: 'אביב', level: 'A2', targetLevel: undefined, gender: 'male', interests: [] },
  ],
);
assert.equal(STUDENTS.find((student) => student.key === 'YULI')?.nativeLanguage, 'Spanish');
assert.equal(STUDENTS.find((student) => student.key === 'YULI')?.uiLanguage, 'es');
assert.equal(STUDENTS.find((student) => student.key === 'YULI')?.learningLanguage, 'English');
assert.equal(STUDENTS.find((student) => student.key === 'AVIV')?.uiLanguage, 'he');
assert.equal(STUDENTS.find((student) => student.key === 'AVIV')?.learningLanguage, 'French');

function generatedCurriculum(title, level = 'A1') {
  const words = ['apple', 'book', 'chair', 'dance', 'egg', 'friend'].map((en) => ({
    en, he: `${en} בעברית`, ex: `I see a ${en}.`, exHe: `אני רואה ${en} בעברית.`,
  }));
  return {
    title,
    level,
    units: Array.from({ length: 4 }, (_, index) => ({
      title: `Unit ${index + 1}`,
      he: `יחידה ${index + 1}`,
      lead: 'תיאור קצר',
      icon: '📘',
      canDo: ['מטרה ראשונה', 'מטרה שנייה'],
      fact: 'עובדה קצרה',
      rules: [{
        title: 'כלל דקדוק',
        short: 'סיכום',
        formula: 'Subject + verb',
        body: 'הסבר',
        examples: [{ en: 'I am ready.', he: 'אני מוכנה.' }, { en: 'You are ready.', he: 'את מוכנה.' }],
        mistake: 'שגיאה נפוצה',
        hook: 'רמז לזכירה',
      }],
      words,
      reading: {
        title: `Reading ${index + 1}`,
        passage: 'A student visits a local shop to learn how it works. She asks questions, compares different products, and writes down useful details. After the visit, she explains what she learned to a friend and gives a reason for her favorite choice.',
        vocabulary: words.map(({ en }) => ({ en, he: `${en} בעברית` })),
        questions: [
          { q: 'Where does the student go?', options: ['A local shop', 'A large museum', 'A dance class'], answer: 'A local shop', why: 'הקטע מתאר ביקור בחנות מקומית.' },
          { q: 'What does she do after the visit?', options: ['She explains what she learned', 'She buys a new house', 'She forgets her notes'], answer: 'She explains what she learned', why: 'אחרי הביקור היא מספרת לחברה מה למדה.' },
        ],
      },
      grammar: [
        { type: 'mcq', ruleIndex: 0, q: 'מה נכון?', opts: ['I am ready.', 'I is ready.', 'I be ready.'], ans: 'I am ready.', why: 'הסבר', hint: 'רמז' },
        { type: 'type', ruleIndex: 0, q: 'כתבי משפט', ans: ['I am ready.'], why: 'הסבר', hint: 'רמז' },
        { type: 'scr', ruleIndex: 0, q: 'סדרי את המשפט', sentence: 'I am ready.', ans: ['I am ready.'], why: 'הסבר', hint: 'רמז' },
        { type: 'gap', ruleIndex: 0, q: 'השלימי', sentence: 'I ___ ready.', ans: ['am'], why: 'הסבר', hint: 'רמז' },
      ],
      scenario: {
        title: 'שיחה לתרגול',
        en: 'Practice conversation',
        who: 'Alex',
        role: 'חבר/ה',
        desc: 'תיאור תרחיש',
        focus: 'Be verb',
        opening: 'Hello! How are you?',
        openingHe: 'שלום! מה שלומך?',
        steps: Array.from({ length: 3 }, () => ({
          bot: 'What do you like?',
          he: 'מה את אוהבת?',
          suggestions: ['I like music.', 'I like books.', 'I like school.'],
        })),
        more: ['What is your name?', 'How old are you?', 'Where do you live?'],
      },
    })),
  };
}

let aiResult = generatedCurriculum('מסלול ראשון');
let aiRequestBody = null;
const originalFetch = globalThis.fetch;
globalThis.fetch = async (_url, options) => {
  aiRequestBody = JSON.parse(options.body);
  return new Response(JSON.stringify({
    choices: [{ message: { content: JSON.stringify(aiResult) } }],
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

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
  assert.equal(adminLogin.body.user.displayName, 'אביב');
  assert.equal(adminLogin.body.user.gender, 'male');
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

  const yuliCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'YULI' },
  });
  assert.equal(yuliCode.statusCode, 200);
  assert.equal(yuliCode.body.purpose, 'activation');
  const yuliActivated = await call(handleActivateStudent, {
    body: { username: 'יולי', code: yuliCode.body.code, password: 'yuli-test-password' },
  });
  assert.equal(yuliActivated.statusCode, 200);
  assert.equal(yuliActivated.body.user.level, 'B1');
  assert.equal(yuliActivated.body.user.targetLevel, 'B1');
  assert.equal(yuliActivated.body.user.gender, 'female');
  assert.equal(yuliActivated.body.user.nativeLanguage, 'Spanish');
  assert.equal(yuliActivated.body.user.uiLanguage, 'es');
  assert.equal(yuliActivated.body.user.learningLanguage, 'English');
  const yuliProgress = await call(handleSaveProgress, {
    headers: { authorization: `Bearer ${yuliActivated.body.token}` },
    body: { data: { xp: 7 }, client_updated_at: null },
  });
  assert.equal(yuliProgress.statusCode, 200);
  assert.equal((await getProgressRecord('YULI')).data.xp, 7);
  assert.equal(await getProgressRecord('GEFEN'), null);

  const avivCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'AVIV' },
  });
  assert.equal(avivCode.statusCode, 200);
  const avivActivated = await call(handleActivateStudent, {
    body: { username: 'אביב', code: avivCode.body.code, password: 'aviv-test-password' },
  });
  assert.equal(avivActivated.statusCode, 200);
  assert.equal(avivActivated.body.user.level, 'A2');
  assert.equal(avivActivated.body.user.uiLanguage, 'he');
  assert.equal(avivActivated.body.user.learningLanguage, 'French');

  const missingAdminAuth = await call(handleAdminGetAiModels);
  assert.equal(missingAdminAuth.statusCode, 401);
  const savedModels = await call(handleAdminSaveAiModels, {
    headers: adminHeaders,
    body: {
      activeProviderId: 'groq-default',
      providers: [{
        id: 'groq-default',
        name: 'Groq',
        kind: 'groq',
        apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
        model: 'llama-3.3-70b-versatile',
        apiKey: 'test-ai-key-secret',
      }],
    },
  });
  assert.equal(savedModels.statusCode, 200);
  assert.equal(savedModels.body.providers[0].hasApiKey, true);
  assert.equal(JSON.stringify(savedModels.body).includes('test-ai-key-secret'), false);
  assert.equal(JSON.stringify(await getAppSetting('ai-model-pool')).includes('test-ai-key-secret'), false);
  const preservedKey = await call(handleAdminSaveAiModels, {
    headers: adminHeaders,
    body: {
      activeProviderId: 'groq-default',
      providers: [{
        id: 'groq-default',
        name: 'Groq',
        kind: 'groq',
        apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
        model: 'llama-3.3-70b-versatile',
        apiKey: '',
      }],
    },
  });
  assert.equal(preservedKey.statusCode, 200);
  assert.equal(preservedKey.body.providers[0].hasApiKey, true);
  const listedModels = await call(handleAdminGetAiModels, { headers: adminHeaders });
  assert.equal(listedModels.statusCode, 200);
  assert.equal(listedModels.body.providers[0].apiKey, undefined);
  assert.equal(JSON.stringify(listedModels.body).includes('test-ai-key-secret'), false);
  const publicConfig = await call(handleConfig);
  assert.equal(publicConfig.body.ai.enabled, true);
  assert.equal(publicConfig.body.ai.label, 'Groq');
  assert.equal(publicConfig.body.ai.model, 'llama-3.3-70b-versatile');
  assert.equal(publicConfig.body.storage, 'local');

  const rejectedHttpProvider = await call(handleAdminSaveAiModels, {
    headers: adminHeaders,
    body: {
      activeProviderId: 'groq-default',
      providers: [{
        id: 'groq-default',
        name: 'Unsafe',
        kind: 'openai-compatible',
        apiUrl: 'http://example.com/v1',
        model: 'test',
        apiKey: 'secret',
      }],
    },
  });
  assert.equal(rejectedHttpProvider.statusCode, 400);

  const modelTest = await call(handleAdminTestAiModel, {
    headers: adminHeaders,
    body: { providerId: 'groq-default' },
  });
  assert.equal(modelTest.statusCode, 200);
  assert.equal(modelTest.body.ok, true);
  const anonymousAi = await call(handleAiChat, {
    body: { messages: [{ role: 'user', content: 'hello' }] },
  });
  assert.equal(anonymousAi.statusCode, 401);
  const learnerAi = await call(handleAiChat, {
    headers: { authorization: `Bearer ${activated.body.token}` },
    body: {
      model: 'attacker-selected-model',
      messages: [{ role: 'user', content: 'hello' }],
    },
  });
  assert.equal(learnerAi.statusCode, 200);
  assert.equal(aiRequestBody.model, 'llama-3.3-70b-versatile');

  const saved = await call(handleSaveProgress, {
    headers: { authorization: `Bearer ${activated.body.token}` },
    body: {
      data: { xp: 25, streak: 3, prog: { exercise1: { done: true } } },
      client_updated_at: null,
    },
  });
  assert.equal(saved.statusCode, 200);
  const savedProgress = await getProgressRecord('GEFEN');
  assert.equal(savedProgress.data.xp, 25);
  assert.equal((await getProgressRecord('YULI')).data.xp, 7);
  const storageAfterReload = await import('../server/storage.js?restart-check');
  assert.deepEqual(await storageAfterReload.getProgressRecord('GEFEN'), savedProgress);
  const newerProgress = { ...savedProgress, updated: new Date(Date.now() + 1000).toISOString() };
  assert.equal(await compareAndSetProgressRecord('GEFEN', newerProgress, savedProgress.updated), true);
  assert.equal(await compareAndSetProgressRecord('GEFEN', savedProgress, savedProgress.updated), false);

  const firstCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
    body: { prompt: 'A1 English for daily life and school' },
  });
  assert.equal(firstCourse.statusCode, 200);
  assert.equal(aiRequestBody.model, 'llama-3.3-70b-versatile');
  assert.match(aiRequestBody.messages[0].content, /exactly one valid JSON object/);
  assert.match(aiRequestBody.messages[0].content, /reading comprehension questions/);
  assert.match(aiRequestBody.messages[1].content, /The generated course level must be exactly A1/);
  assert.equal((await getStudentRecord('GEFEN')).curriculum.units[0].reading.questions.length, 2);
  assert.equal(firstCourse.body.archivedReport.summary.xp, 25);
  assert.equal(firstCourse.body.reportsCount, 1);
  assert.match(aiRequestBody.messages[0].content, /Address the learner respectfully/);
  assert.match(aiRequestBody.messages[1].content, /Learner: גפן; girl; address her respectfully/);
  assert.match(aiRequestBody.messages[1].content, /ריקוד, חיות, טבע/);
  const firstCourseId = (await getStudentRecord('GEFEN')).curriculum.id;
  const courseHeaders = { authorization: `Bearer ${activated.body.token}` };
  const assigned = await call(handleGetCurriculum, { headers: courseHeaders });
  assert.equal(assigned.statusCode, 200);
  assert.equal(assigned.body.courseId, firstCourseId);

  const hiddenOldProgress = await call(handleGetProgress, { headers: courseHeaders });
  assert.equal(hiddenOldProgress.body.data, null);
  aiResult = generatedCurriculum('מסלול ברמה לא נכונה', 'A2');
  const mismatchedLevel = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
    body: { prompt: 'Create a personalized A2 English course for the learner.' },
  });
  assert.equal(mismatchedLevel.statusCode, 502);
  assert.equal((await getStudentRecord('GEFEN')).curriculum.id, firstCourseId);
  const staleWrite = await call(handleSaveProgress, {
    headers: courseHeaders,
    body: { data: { courseId: 'default', xp: 99 }, client_updated_at: null },
  });
  assert.equal(staleWrite.statusCode, 409);

  aiResult = generatedCurriculum('מסלול בארי', 'A2');
  const barryCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'BARRY' },
    body: { prompt: 'Create a personalized course with football, sports, animals, and nature.' },
  });
  assert.equal(barryCourse.statusCode, 200);
  assert.match(aiRequestBody.messages[1].content, /Learner: בארי; boy; address him respectfully/);
  assert.match(aiRequestBody.messages[1].content, /Current CEFR level: A2, approaching B1/);
  assert.match(aiRequestBody.messages[1].content, /The generated course level must be exactly A2/);
  assert.match(aiRequestBody.messages[1].content, /כדורגל, ספורט, חיות, טבע/);
  assert.equal((await getStudentRecord('BARRY')).curriculum.learnerGender, 'male');

  aiResult = generatedCurriculum('Yuli: English B1', 'B1');
  const yuliCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'YULI' },
    body: { prompt: 'Create a varied English B1 course with cooking, business, architecture, and fashion topics.' },
  });
  assert.equal(yuliCourse.statusCode, 200);
  assert.match(aiRequestBody.messages[1].content, /Learner: יולי; girl; address her respectfully/);
  assert.match(aiRequestBody.messages[1].content, /Native language: Spanish\. Teach English; use Spanish for all instructions, explanations, and translations/);
  assert.match(aiRequestBody.messages[1].content, /Current CEFR level: B1 \(B1\)/);
  assert.match(aiRequestBody.messages[1].content, /The generated course level must be exactly B1/);
  assert.match(aiRequestBody.messages[1].content, /cocina, negocios, arquitectura, moda/);
  assert.match(aiRequestBody.messages[0].content, /professional English-course designer/);
  assert.match(aiRequestBody.messages[0].content, /Use Spanish for all instructions, explanations, translations, and interface-facing text; use English for examples/);
  assert.match(aiRequestBody.messages[1].content, /reading passages/);
  assert.equal((await getStudentRecord('YULI')).curriculum.level, 'B1');
  assert.equal((await getStudentRecord('YULI')).curriculum.units[0].reading.questions.length, 2);

  aiResult = generatedCurriculum('Aviv: French A2', 'A2');
  const avivCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'AVIV' },
    body: { prompt: 'Create a French A2 course for a Hebrew-speaking learner with a Hebrew interface.' },
  });
  assert.equal(avivCourse.statusCode, 200);
  assert.match(aiRequestBody.messages[1].content, /Native language: Hebrew\. Teach French; use Hebrew for all instructions, explanations, and translations/);
  assert.match(aiRequestBody.messages[0].content, /professional French-course designer/);
  assert.match(aiRequestBody.messages[0].content, /Use Hebrew for all instructions, explanations, translations, and interface-facing text; use French for examples/);
  assert.equal((await getStudentRecord('AVIV')).curriculum.level, 'A2');

  const courseProgress = await call(handleSaveProgress, {
    headers: courseHeaders,
    body: {
      data: {
        courseId: firstCourseId,
        courseSnapshot: { id: firstCourseId, title: 'מסלול ראשון', level: 'A1', units: [{ id: `${firstCourseId}-u1`, he: 'יחידה', rules: [{ id: `${firstCourseId}-u1-r1`, title: 'כלל' }] }] },
        xp: 12,
        prog: { [`${firstCourseId}-u1.x1`]: { done: true, seen: 1, correct: 1, wrong: 0 } },
        stats: { answers: 1, correct: 1, bySkill: {} },
      },
      client_updated_at: null,
    },
  });
  assert.equal(courseProgress.statusCode, 200);

  aiResult = { title: 'מסלול לא תקין', level: 'A1', units: [] };
  const invalidCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
    body: { prompt: 'A2 English about nature and travel' },
  });
  assert.equal(invalidCourse.statusCode, 502);
  assert.equal((await getStudentRecord('GEFEN')).curriculum.id, firstCourseId);

  aiResult = generatedCurriculum('מסלול שני');
  const secondCourse = await call(handleAdminGenerateCurriculum, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
    body: { prompt: 'A2 English about nature and travel' },
  });
  assert.equal(secondCourse.statusCode, 200);
  assert.equal(secondCourse.body.archivedReport.courseTitle, 'מסלול ראשון');
  assert.equal(secondCourse.body.archivedReport.summary.xp, 12);
  const secondCourseId = (await getStudentRecord('GEFEN')).curriculum.id;
  assert.notEqual(secondCourseId, firstCourseId);
  const reports = await call(handleAdminCurriculumReports, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
  });
  assert.equal(reports.body.reports.length, 2);

  const secondCourseSave = await call(handleSaveProgress, {
    headers: courseHeaders,
    body: {
      data: {
        courseId: secondCourseId,
        xp: 5,
        streak: 2,
        stats: { answers: 2, correct: 1, bySkill: { grammar: { a: 2, c: 1 } } },
        words: { ready: { box: 4, seen: 1 } },
        prog: { [`${secondCourseId}-u1.x1`]: { done: true, seen: 1, correct: 1, wrong: 0 } },
      },
      client_updated_at: null,
    },
  });
  assert.equal(secondCourseSave.statusCode, 200);

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

  const impersonation = await call(handleAdminImpersonateStudent, {
    headers: adminHeaders,
    params: { key: 'GEFEN' },
  });
  assert.equal(impersonation.statusCode, 200);
  assert.equal(impersonation.body.user.impersonatedByAdmin, true);
  const impersonatedMe = await call(handleMe, {
    headers: { authorization: `Bearer ${impersonation.body.token}` },
  });
  assert.equal(impersonatedMe.statusCode, 200);
  assert.equal(impersonatedMe.body.user.impersonatedByAdmin, true);
  assert.equal((await resolveCaller(`Bearer ${impersonation.body.token}`)).id, 'GEFEN');

  const previewImpersonation = await call(handleAdminImpersonateStudent, {
    headers: adminHeaders,
    params: { key: 'MIA' },
  });
  assert.equal(previewImpersonation.statusCode, 200);
  assert.equal(previewImpersonation.body.user.activated, false);
  assert.equal((await resolveCaller(`Bearer ${previewImpersonation.body.token}`)).id, 'MIA');
  assert.equal((await getStudentRecord('MIA')).activated, false);

  const loaded = await call(handleGetProgress, {
    headers: { authorization: `Bearer ${login.body.token}` },
  });
  assert.equal(loaded.statusCode, 200);
  assert.equal(loaded.body.data.xp, 5);
  assert.equal(loaded.body.storage, 'local');

  const secondCode = await call(handleAdminResetCode, {
    headers: adminHeaders,
    params: { key: 'BARRY' },
  });
  const secondStudent = await call(handleActivateStudent, {
    body: { username: 'בארי', code: secondCode.body.code, password: 'barry-test-password' },
  });
  assert.equal(secondStudent.body.user.gender, 'male');
  assert.equal(secondStudent.body.user.level, 'A2');
  assert.equal(secondStudent.body.user.targetLevel, 'B1');
  const secondProgress = await call(handleGetProgress, {
    headers: { authorization: `Bearer ${secondStudent.body.token}` },
  });
  assert.equal(secondProgress.statusCode, 200);
  assert.equal(secondProgress.body.data, null);

  const dashboard = await call(handleAdminStudents, { headers: adminHeaders });
  assert.equal(dashboard.statusCode, 200);
  const barryProfile = dashboard.body.students.find((student) => student.key === 'BARRY');
  assert.equal(barryProfile.level, 'A2');
  assert.equal(barryProfile.targetLevel, 'B1');
  assert.equal(barryProfile.gender, 'male');
  assert.deepEqual(barryProfile.interests, ['כדורגל', 'ספורט', 'חיות', 'טבע']);
  assert.match(barryProfile.profilePrompt, /מתקרב ל-B1/);
  const gefenDashboard = dashboard.body.students.find((student) => student.key === 'GEFEN');
  assert.equal(gefenDashboard.xp, 5);
  assert.equal(gefenDashboard.streak, 2);
  assert.equal(gefenDashboard.accuracy, 50);
  assert.equal(gefenDashboard.masteredWords, 1);
  assert.equal(gefenDashboard.completedExercises, 1);
  assert.ok(gefenDashboard.totalExercises > gefenDashboard.completedExercises);
  assert.equal(gefenDashboard.unitProgress.length, 4);
  assert.equal(gefenDashboard.skills.find((skill) => skill.key === 'grammar').accuracy, 50);
  const miaDashboard = dashboard.body.students.find((student) => student.key === 'MIA');
  assert.equal(Boolean(miaDashboard.missing), false);
  assert.equal(miaDashboard.activated, false);

  console.log('Storage/auth and curriculum flow passed: activation, course isolation, AI validation, progress archiving, reset, and admin reports.');
} finally {
  globalThis.fetch = originalFetch;
  fs.rmSync(dataDir, { recursive: true, force: true });
}
