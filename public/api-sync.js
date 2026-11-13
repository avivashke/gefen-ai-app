/* ================= Backend API Sync ================= */
const API_BASE = '/api';
let authToken = null;
let syncEnabled = false;
let syncTimer = null;

function apiInit() {
  const stored = localStorage.getItem('auth_token');
  if (stored) {
    authToken = stored;
    syncEnabled = true;
  }
}

async function apiRequest(path, options = {}) {
  const headers = {'Content-Type': 'application/json', ...options.headers};
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  const res = await fetch(`${API_BASE}${path}`, {headers, ...options});
  if (!res.ok) {
    const err = await res.json().catch(()=>({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

async function apiSignup(email, password) {
  const data = await apiRequest('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({email, password})
  });
  authToken = data.token;
  syncEnabled = true;
  localStorage.setItem('auth_token', authToken);
  return data.user;
}

async function apiLogin(email, password) {
  const data = await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({email, password})
  });
  authToken = data.token;
  syncEnabled = true;
  localStorage.setItem('auth_token', authToken);
  return data.user;
}

function apiLogout() {
  authToken = null;
  syncEnabled = false;
  localStorage.removeItem('auth_token');
}

async function apiLoadProgress() {
  if (!syncEnabled) return null;
  try {
    const result = await apiRequest('/progress');
    return result.data;
  } catch(e) {
    console.warn('[API] Load failed:', e.message);
    return null;
  }
}

async function apiSaveProgress(state) {
  if (!syncEnabled) return;
  try {
    await apiRequest('/progress', {
      method: 'POST',
      body: JSON.stringify({data: state})
    });
    console.log('[API] Progress synced');
  } catch(e) {
    console.warn('[API] Sync failed:', e.message);
  }
}

function scheduleSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    if (syncEnabled) {
      apiSaveProgress(S).then(() => scheduleSync());
    }
  }, 5000);
}