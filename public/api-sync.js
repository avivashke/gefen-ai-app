/* ================= Authenticated progress sync =================
   Each student signs in with a username and password. The server scopes
   progress requests to the authenticated student record.
   =============================================================== */
(function () {
  const TOKEN_KEY = 'auth_token';
  const USER_KEY = 'auth_user';
  const ADMIN_TOKEN_KEY = 'admin_token';
  const ADMIN_USER_KEY = 'admin_user';
  const ADMIN_IMPERSONATION_KEY = 'admin_impersonation_session';
  const DEBOUNCE_MS = 2000;

  function readImpersonationSession() {
    try {
      return JSON.parse(sessionStorage.getItem(ADMIN_IMPERSONATION_KEY) || 'null');
    } catch {
      return null;
    }
  }

  let impersonationSession = readImpersonationSession();
  let authToken = impersonationSession?.token || localStorage.getItem(TOKEN_KEY) || '';
  let syncEnabled = Boolean(authToken);
  let storageMode = 'local';
  let syncTimer = null;
  let retryTimer = null;
  let pending = null;
  let lastSyncedAt = 0;
  let online = navigator.onLine;
  let busy = false;
  const listeners = new Set();

  function emit(event, payload) {
    listeners.forEach((fn) => {
      try {
        fn(event, payload);
      } catch (e) {
        console.warn('[sync] listener error', e);
      }
    });
  }

  function apiRequest(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (authToken && !headers.Authorization) headers.Authorization = `Bearer ${authToken}`;
    return fetch(`/api${path}`, { ...options, headers }).then(async (res) => {
      const text = await res.text();
      let body = null;
      try {
        body = text ? JSON.parse(text) : null;
      } catch {
        body = null;
      }
      if (!res.ok) {
        const err = new Error((body && (body.error || body.message)) || `HTTP ${res.status}`);
        err.status = res.status;
        throw err;
      }
      return body;
    });
  }

  function user() {
    if (impersonationSession) return impersonationSession.user || null;
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    } catch {
      return null;
    }
  }

  function setSession(token, account) {
    authToken = token || '';
    syncEnabled = Boolean(authToken);
    if (authToken) {
      localStorage.setItem(TOKEN_KEY, authToken);
      if (account) localStorage.setItem(USER_KEY, JSON.stringify(account));
    } else {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
    emit('session', { user: account || user(), syncEnabled });
  }

  function finishAdminImpersonation() {
    if (!impersonationSession) return null;
    const previous = impersonationSession.previous || {};
    sessionStorage.removeItem(ADMIN_IMPERSONATION_KEY);
    impersonationSession = null;
    pending = null;
    clearTimeout(syncTimer);
    clearTimeout(retryTimer);
    setSession(previous.token || '', previous.user || null);
    return previous.user || null;
  }

  async function load() {
    if (!syncEnabled) return { data: null, skipped: true };
    const result = await apiRequest('/progress');
    storageMode = result.storage || storageMode;
    lastSyncedAt = Date.now();
    emit('loaded', result);
    return result;
  }

  async function curriculum() {
    const result = await apiRequest('/curriculum');
    emit('curriculum', result);
    return result;
  }

  function aiChat(messages, options = {}) {
    return apiRequest('/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ messages, ...options }),
    });
  }

  async function login(username, password) {
    const result = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    storageMode = result.storage || storageMode;
    if (impersonationSession) {
      sessionStorage.removeItem(ADMIN_IMPERSONATION_KEY);
      impersonationSession = null;
    }
    setSession(result.token, result.user);
    return result.user;
  }

  async function activate(username, code, password) {
    const result = await apiRequest('/auth/activate', {
      method: 'POST',
      body: JSON.stringify({ username, code, password }),
    });
    storageMode = result.storage || storageMode;
    if (impersonationSession) {
      sessionStorage.removeItem(ADMIN_IMPERSONATION_KEY);
      impersonationSession = null;
    }
    setSession(result.token, result.user);
    return result.user;
  }

  function adminRequest(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    const token = localStorage.getItem(ADMIN_TOKEN_KEY) || '';
    if (token) headers.Authorization = `Bearer ${token}`;
    return fetch(`/api${path}`, { ...options, headers }).then(async (res) => {
      const text = await res.text();
      let body = null;
      try {
        body = text ? JSON.parse(text) : null;
      } catch {
        body = null;
      }
      if (!res.ok) {
        const err = new Error((body && (body.error || body.message)) || `HTTP ${res.status}`);
        err.status = res.status;
        throw err;
      }
      return body;
    });
  }

  async function adminLogin(username, password) {
    const result = await adminRequest('/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    localStorage.setItem(ADMIN_TOKEN_KEY, result.token);
    localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(result.user));
    return result.user;
  }

  function adminLogout() {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_USER_KEY);
  }

  function adminStudents() {
    return adminRequest('/admin/students');
  }

  function adminAiModels() {
    return adminRequest('/admin/ai/models');
  }

  function adminSaveAiModels(settings) {
    return adminRequest('/admin/ai/models', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }

  function adminTestAiModel(providerId) {
    return adminRequest('/admin/ai/models/test', {
      method: 'POST',
      body: JSON.stringify({ providerId }),
    });
  }

  async function adminEnterStudent(key) {
    if (impersonationSession) throw new Error('כבר פועלת כניסה לחשבון תלמיד');
    if (pending) {
      await flush();
      if (pending) throw new Error('ההתקדמות הקודמת עדיין לא הסתנכרנה. בדקי חיבור ונסי שוב.');
    }
    const result = await adminRequest(`/admin/students/${encodeURIComponent(key)}/impersonate`, { method: 'POST' });
    const previous = {
      token: localStorage.getItem(TOKEN_KEY) || '',
      user: user(),
    };
    impersonationSession = { token: result.token, user: result.user, previous };
    sessionStorage.setItem(ADMIN_IMPERSONATION_KEY, JSON.stringify(impersonationSession));
    authToken = result.token;
    syncEnabled = true;
    pending = null;
    clearTimeout(syncTimer);
    clearTimeout(retryTimer);
    emit('session', { user: result.user, syncEnabled, impersonated: true });
    return result.user;
  }

  async function adminExitStudent() {
    if (!impersonationSession) return null;
    if (pending) {
      await flush();
      if (pending) throw new Error('התקדמות התלמיד עדיין לא הסתנכרנה. התחברי לרשת ונסי שוב כדי לא לאבד שינויים.');
    }
    return finishAdminImpersonation();
  }

  function adminImpersonatingStudent() {
    return impersonationSession?.user || null;
  }

  function adminIssueResetCode(key) {
    return adminRequest(`/admin/students/${encodeURIComponent(key)}/reset-code`, { method: 'POST' });
  }

  function adminGenerateCurriculum(key, prompt) {
    return adminRequest(`/admin/students/${encodeURIComponent(key)}/curriculum`, {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
  }

  function adminCurriculumReports(key) {
    return adminRequest(`/admin/students/${encodeURIComponent(key)}/curriculum-reports`);
  }

  function config() {
    return fetch('/api/config').then(async (res) => {
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      return body;
    });
  }

  function logout() {
    if (impersonationSession) {
      finishAdminImpersonation();
      return;
    }
    setSession('', null);
    pending = null;
    clearTimeout(syncTimer);
    clearTimeout(retryTimer);
  }

  function stampLocal(state) {
    const copy = JSON.parse(JSON.stringify(state));
    copy.updated_at = new Date().toISOString();
    return copy;
  }

  function scheduleRetry() {
    clearTimeout(retryTimer);
    retryTimer = setTimeout(() => {
      retryTimer = null;
      flush();
    }, 15000);
  }

  async function flush() {
    if (!syncEnabled || busy || !pending || !online) return;
    busy = true;
    const snapshot = pending;
    let retryNeeded = false;
    try {
      const result = await apiRequest('/progress', {
        method: 'POST',
        body: JSON.stringify({ data: snapshot, client_updated_at: snapshot.updated_at }),
      });
      storageMode = result.storage || storageMode;
      if (pending === snapshot) pending = null;
      lastSyncedAt = Date.now();
      emit('saved', result);
    } catch (e) {
      if (e.status === 401) {
        if (impersonationSession) {
          const previousUser = finishAdminImpersonation();
          emit('impersonation-ended', { expired: true, user: previousUser });
        } else {
          logout();
          emit('unauthorized');
        }
      } else if (e.status === 409) {
        try {
          const remote = await apiRequest('/progress');
          if (remote && remote.data) {
            if (pending === snapshot) pending = null;
            emit('conflict', remote);
          } else {
            retryNeeded = true;
          }
        } catch (pullErr) {
          console.warn('[sync] conflict pull failed:', pullErr.message);
          retryNeeded = true;
        }
      } else {
        if (pending === snapshot) pending = snapshot;
        retryNeeded = true;
        emit('error', e);
      }
    } finally {
      busy = false;
      if (retryNeeded) scheduleRetry();
      if (!retryNeeded && pending && pending !== snapshot) flush();
    }
  }

  function save(state) {
    if (!syncEnabled) return;
    pending = stampLocal(state);
    clearTimeout(syncTimer);
    syncTimer = setTimeout(flush, DEBOUNCE_MS);
  }

  async function init() {
    if (!syncEnabled) {
      emit('unauthorized');
      return { user: null };
    }
    try {
      const result = await apiRequest('/auth/me');
      storageMode = result.storage || storageMode;
      const stored = user() || {};
      const account = { ...stored, ...(result.user || {}) };
      setSession(authToken, account);
      await curriculum();
      await load();
      return { user: account };
    } catch (e) {
      if (e.status === 401) {
        if (impersonationSession) {
          const previousUser = finishAdminImpersonation();
          emit('impersonation-ended', { expired: true, user: previousUser });
        } else {
          setSession('', null);
          emit('unauthorized');
        }
      } else {
        emit('error', e);
      }
      return { user: user(), error: e.message };
    }
  }

  function markOnline() {
    online = true;
    emit('online');
    if (pending) flush();
  }
  function markOffline() {
    online = false;
    emit('offline');
  }
  window.addEventListener('online', markOnline);
  window.addEventListener('offline', markOffline);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && pending && syncEnabled) flush();
  });

  window.apiSync = {
    init,
    isEnabled: () => syncEnabled,
    isOnline: () => online,
    token: () => authToken,
    user,
    login,
    activate,
    logout,
    load,
    curriculum,
    aiChat,
    save,
    flush,
    lastSyncedAt: () => lastSyncedAt,
    storage: () => storageMode,
    on: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
  window.adminApi = {
    login: adminLogin,
    logout: adminLogout,
    isEnabled: () => Boolean(localStorage.getItem(ADMIN_TOKEN_KEY)),
    user: () => {
      try {
        return JSON.parse(localStorage.getItem(ADMIN_USER_KEY) || 'null');
      } catch {
        return null;
      }
    },
    students: adminStudents,
    aiModels: adminAiModels,
    saveAiModels: adminSaveAiModels,
    testAiModel: adminTestAiModel,
    enterStudent: adminEnterStudent,
    exitStudent: adminExitStudent,
    impersonatingStudent: adminImpersonatingStudent,
    issueResetCode: adminIssueResetCode,
    generateCurriculum: adminGenerateCurriculum,
    curriculumReports: adminCurriculumReports,
  };
  window.apiSync.config = config;

  window.apiInit = init;
  window.apiLoadProgress = load;
  window.apiSaveProgress = save;
  window.scheduleSync = save;
  window.apiLogout = logout;
  window.apiLogin = login;
  Object.defineProperty(window, 'syncEnabled', { get: () => syncEnabled, configurable: true });
})();
