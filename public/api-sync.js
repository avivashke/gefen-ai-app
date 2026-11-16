/* ================= Authenticated progress sync =================
   Each student signs in with a username and password. The server scopes
   progress requests to the authenticated student record.
   =============================================================== */
(function () {
  const TOKEN_KEY = 'auth_token';
  const USER_KEY = 'auth_user';
  const ADMIN_TOKEN_KEY = 'admin_token';
  const ADMIN_USER_KEY = 'admin_user';
  const DEBOUNCE_MS = 2000;

  let authToken = localStorage.getItem(TOKEN_KEY) || '';
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

  async function load() {
    if (!syncEnabled) return { data: null, skipped: true };
    const result = await apiRequest('/progress');
    storageMode = result.storage || storageMode;
    lastSyncedAt = Date.now();
    emit('loaded', result);
    return result;
  }

  async function login(username, password) {
    const result = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    storageMode = result.storage || storageMode;
    setSession(result.token, result.user);
    return result.user;
  }

  async function activate(username, code, password) {
    const result = await apiRequest('/auth/activate', {
      method: 'POST',
      body: JSON.stringify({ username, code, password }),
    });
    storageMode = result.storage || storageMode;
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

  function adminIssueResetCode(key) {
    return adminRequest(`/admin/students/${encodeURIComponent(key)}/reset-code`, { method: 'POST' });
  }

  function config() {
    return fetch('/api/config').then(async (res) => {
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      return body;
    });
  }

  function logout() {
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
        logout();
        emit('unauthorized');
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
      await load();
      return { user: account };
    } catch (e) {
      if (e.status === 401) {
        setSession('', null);
        emit('unauthorized');
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
    issueResetCode: adminIssueResetCode,
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
