/* ================= Shared learner profiles =================
   Profiles are intentionally public: anyone can select a profile and edit
   its progress. This supports login-free use across devices.
   ========================================================== */
(function () {
  const PROFILE_KEY = 'gefen_active_profile';
  const DEBOUNCE_MS = 2000;

  let activeProfile = localStorage.getItem(PROFILE_KEY) || '';
  let apiAvailable = false;
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
    return fetch(`/api${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    }).then(async (res) => {
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
        err.code = body && body.code;
        throw err;
      }
      return body;
    });
  }

  function setActiveProfile(profile) {
    activeProfile = profile ? profile.id : '';
    if (activeProfile) localStorage.setItem(PROFILE_KEY, activeProfile);
    else localStorage.removeItem(PROFILE_KEY);
    emit('profile', profile || null);
  }

  async function listProfiles() {
    const result = await apiRequest('/profiles');
    apiAvailable = true;
    storageMode = result.storage || 'local';
    emit('profiles', result.profiles || []);
    return result;
  }

  async function createProfile(name, level, data) {
    const result = await apiRequest('/profiles', {
      method: 'POST',
      body: JSON.stringify({ name, level, data }),
    });
    apiAvailable = true;
    storageMode = result.storage || 'local';
    setActiveProfile(result.profile);
    emit('profiles', [result.profile]);
    lastSyncedAt = Date.now();
    return result;
  }

  async function loadProfile(id = activeProfile) {
    if (!id) return { data: null, skipped: true };
    const result = await apiRequest(`/profiles/${encodeURIComponent(id)}/progress`);
    apiAvailable = true;
    storageMode = result.storage || 'local';
    setActiveProfile(result.profile);
    lastSyncedAt = Date.now();
    emit('loaded', result);
    return result;
  }

  async function loadLegacyProgress() {
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    try {
      return await apiRequest('/progress', { headers: { Authorization: `Bearer ${token}` } });
    } catch (e) {
      console.warn('[sync] legacy progress migration unavailable:', e.message);
      return null;
    }
  }

  function localUpdatedAt(state) {
    const t = state && (state.updated_at || state.updatedAt);
    if (t) {
      const ms = Date.parse(t);
      if (!Number.isNaN(ms)) return ms;
    }
    return lastSyncedAt || 0;
  }

  function stampLocal(state, profileId) {
    const copy = JSON.parse(JSON.stringify(state));
    copy.updated_at = new Date().toISOString();
    return { data: copy, profileId, clientUpdatedAt: copy.updated_at };
  }

  async function flush() {
    if (!apiAvailable || busy || !pending || !online) return;
    busy = true;
    const snapshot = pending;
    try {
      const result = await apiRequest(`/profiles/${encodeURIComponent(snapshot.profileId)}/progress`, {
        method: 'POST',
        body: JSON.stringify({
          data: snapshot.data,
          level: snapshot.data.settings?.level || 'A1',
          client_updated_at: snapshot.clientUpdatedAt,
        }),
      });
      storageMode = result.storage || storageMode;
      if (pending === snapshot) pending = null;
      lastSyncedAt = Date.now();
      emit('saved', result);
    } catch (e) {
      if (e.status === 409) {
        try {
          const remote = await apiRequest(`/profiles/${encodeURIComponent(snapshot.profileId)}/progress`);
          if (remote && remote.data) {
            if (pending === snapshot) pending = null;
            emit('conflict', remote);
          }
        } catch (pullErr) {
          console.warn('[sync] conflict pull failed:', pullErr.message);
        }
      } else {
        if (pending === snapshot) pending = snapshot;
        scheduleRetry();
        emit('error', e);
      }
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
    if (!activeProfile) return;
    pending = stampLocal(state, activeProfile);
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => flush(), DEBOUNCE_MS);
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
    if (!document.hidden && pending && activeProfile) flush();
  });

  window.apiSync = {
    async init() {
      try {
        return await listProfiles();
      } catch (e) {
        apiAvailable = false;
        emit('error', e);
        return { profiles: [], error: e.message };
      }
    },
    isEnabled: () => Boolean(apiAvailable && activeProfile),
    isOnline: () => online,
    profileId: () => activeProfile,
    storage: () => storageMode,
    profile: () => activeProfile,
    list: listProfiles,
    create: createProfile,
    select: (id) => {
      clearTimeout(syncTimer);
      pending = null;
      const profile = id ? { id } : null;
      setActiveProfile(profile);
    },
    load: loadProfile,
    loadLegacy: loadLegacyProgress,
    save: scheduleSync,
    flush,
    localUpdatedAt,
    lastSyncedAt: () => lastSyncedAt,
    on: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
})();
