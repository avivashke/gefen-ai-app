/* ================= Cloud sync (backend API) =================
   - Bearer token is stored in localStorage and sent per request
   - Server derives the user from the token; nothing is trusted from the client
   - Every mutation is queued and retried, so progress survives flaky networks
   - Conflicts resolved by "updated_at": newest state wins, never lose data
   ============================================================== */
(function () {
  const TOKEN_KEY = 'auth_token';
  const USER_KEY = 'auth_user';
  const DEBOUNCE_MS = 2000;

  let authToken = localStorage.getItem(TOKEN_KEY) || null;
  let syncEnabled = Boolean(authToken);
  let syncTimer = null;
  let retryTimer = null;
  let pending = null;
  let lastSyncedAt = 0;
  let online = navigator.onLine;
  let busy = false;
  let queued = false;

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

  function onSync(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function apiRequest(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (authToken) headers.Authorization = `Bearer ${authToken}`;
    return fetch(`/api${path}`, { ...options, headers }).then(async (res) => {
      const text = await res.text();
      let body = null;
      try {
        body = text ? JSON.parse(text) : null;
      } catch (e) {
        body = null;
      }
      if (!res.ok) {
        const err = new Error((body && (body.error || body.message)) || `HTTP ${res.status}`);
        err.status = res.status;
        err.code = body && body.code;
        throw err;
      }
      return body;
    });
  }

  function setSession(token, user) {
    authToken = token;
    syncEnabled = Boolean(token);
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    emit('session', { user, syncEnabled });
  }

  function currentUser() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    } catch (e) {
      return null;
    }
  }

  async function apiSignup(email, password) {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setSession(data.token, data.user);
    await apiLoadProgress();
    return data.user;
  }

  async function apiLogin(email, password) {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setSession(data.token, data.user);
    await apiLoadProgress();
    return data.user;
  }

  function apiLogout() {
    setSession(null, null);
    pending = null;
    clearTimeout(syncTimer);
    clearTimeout(retryTimer);
  }

  /* ---------- loading ---------- */

  async function apiLoadProgress() {
    if (!syncEnabled) return { data: null, skipped: true };
    try {
      const result = await apiRequest('/progress');
      lastSyncedAt = Date.now();
      emit('loaded', result);
      return result;
    } catch (e) {
      if (e.status === 401) {
        setSession(null, null);
        emit('unauthorized');
      }
      console.warn('[sync] load failed:', e.message);
      return { data: null, error: e.message };
    }
  }

  /* ---------- saving ---------- */

  function localUpdatedAt(state) {
    const t = state && (state.updated_at || state.updatedAt);
    if (t) {
      const ms = Date.parse(t);
      if (!Number.isNaN(ms)) return ms;
    }
    return lastSyncedAt || 0;
  }

  function stampLocal(state) {
    const copy = JSON.parse(JSON.stringify(state));
    copy.updated_at = new Date().toISOString();
    return copy;
  }

  async function flush() {
    if (!syncEnabled || busy || !pending) return;
    busy = true;
    const snapshot = pending;
    try {
      const res = await apiRequest('/progress', {
        method: 'POST',
        body: JSON.stringify({ data: snapshot, client_updated_at: snapshot.updated_at }),
      });
      pending = null;
      lastSyncedAt = Date.now();
      emit('saved', res);
    } catch (e) {
      if (e.status === 401) {
        setSession(null, null);
        emit('unauthorized');
        return;
      }
      if (e.status === 409) {
        // Cloud is newer: pull it in, then let the caller merge.
        try {
          const remote = await apiRequest('/progress');
          if (remote && remote.data) {
            lastSyncedAt = Date.now();
            pending = null;
            emit('conflict', remote);
          }
        } catch (pullErr) {
          console.warn('[sync] conflict pull failed:', pullErr.message);
        }
        return;
      }
      if (pending === snapshot) pending = snapshot;
      scheduleRetry();
      emit('error', e);
    } finally {
      busy = false;
      if (pending) flush();
    }
  }

  function scheduleRetry() {
    clearTimeout(retryTimer);
    retryTimer = setTimeout(() => flush(), 15000);
  }

  function scheduleSync(state) {
    if (!syncEnabled) return;
    pending = stampLocal(state);
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => flush(), DEBOUNCE_MS);
  }

  /* ---------- connectivity ---------- */

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

  /* ---------- public API (used by index.html) ---------- */

  window.apiSync = {
    init() {
      // Validate an existing token in the background; drop it if rejected.
      if (!syncEnabled) return;
      apiRequest('/auth/me')
        .then((data) => {
          if (data && data.user) {
            localStorage.setItem(USER_KEY, JSON.stringify(data.user));
            emit('session', { user: data.user, syncEnabled: true });
          }
        })
        .catch(() => {
          if (authToken) setSession(null, null);
        });
    },
    isEnabled: () => syncEnabled,
    isOnline: () => online,
    token: () => authToken,
    user: currentUser,
    lastSyncedAt: () => lastSyncedAt,
    signup: apiSignup,
    login: apiLogin,
    logout: apiLogout,
    load: apiLoadProgress,
    save: scheduleSync,
    flush,
    localUpdatedAt,
    on: onSync,
  };

  // Legacy globals kept for the existing inline handlers.
  window.apiInit = () => window.apiSync.init();
  window.apiLoadProgress = apiLoadProgress;
  window.apiSaveProgress = (state) => scheduleSync(state);
  window.scheduleSync = (state) => scheduleSync(state);
  window.apiLogout = apiLogout;
  window.apiLogin = apiLogin;
  window.apiSignup = apiSignup;

  Object.defineProperty(window, 'syncEnabled', { get: () => syncEnabled, configurable: true });
})();