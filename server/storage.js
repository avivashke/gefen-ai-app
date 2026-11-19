import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROGRESS_FILE = path.join(DATA_DIR, 'progress.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const NETLIFY_RUNTIME = process.env.NETLIFY === 'true'
  || Boolean(process.env.NETLIFY_SITE_ID)
  || Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

const SUPABASE_URL = process.env.SUPABASE_URL?.trim();
const SUPABASE_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();
const SUPABASE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_KEY);

let blobStorePromise = null;

async function supabaseGet(key) {
  if (!SUPABASE_ENABLED) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/gefen_storage?key=eq.${encodeURIComponent(key)}&select=value`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    if (!res.ok) return null;
    const rows = await res.json();
    return rows && rows.length > 0 ? rows[0].value : null;
  } catch {
    return null;
  }
}

async function supabaseSet(key, value) {
  if (!SUPABASE_ENABLED) return false;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/gefen_storage`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates',
      },
      body: JSON.stringify({ key, value, updated_at: new Date().toISOString() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function readLocalFile(file) {
  if (!fs.existsSync(file)) return {};
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Local data file has an invalid shape: ${file}`);
  }
  return parsed;
}

function writeLocalFile(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), { mode: 0o600 });
  fs.chmodSync(tmp, 0o600);
  fs.renameSync(tmp, file);
}

async function getBlobStore() {
  if (!NETLIFY_RUNTIME) return null;
  if (!blobStorePromise) {
    const siteID = process.env.NETLIFY_SITE_ID?.trim();
    const token = (process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_AUTH_TOKEN || '').trim();
    const options = siteID && token ? { siteID, token } : undefined;
    blobStorePromise = import('@netlify/blobs')
      .then(({ getStore }) => getStore('gefen-coach-data', options))
      .catch((error) => {
        if (error.message?.includes('environment has not been configured to use Netlify Blobs')) {
          throw new Error(
            'Netlify Blobs credentials are missing. Configure NETLIFY_SITE_ID and NETLIFY_BLOBS_TOKEN for this site.',
          );
        }
        throw error;
      });
  }
  return blobStorePromise;
}

export function activeStorage() {
  if (SUPABASE_ENABLED) return 'supabase';
  return NETLIFY_RUNTIME ? 'netlify-blobs' : 'local';
}

async function getRecord(file, key) {
  if (SUPABASE_ENABLED) {
    const data = await supabaseGet(key);
    if (data !== null) return data;
  }
  const store = await getBlobStore();
  if (store) return store.get(key, { type: 'json', consistency: 'strong' });
  return readLocalFile(file)[key] ?? null;
}

async function setRecord(file, key, value) {
  if (SUPABASE_ENABLED) {
    await supabaseSet(key, value);
  }
  const store = await getBlobStore();
  if (store) {
    await store.setJSON(key, value);
    return;
  }
  const records = readLocalFile(file);
  records[key] = value;
  writeLocalFile(file, records);
}

export function getStudentRecord(studentKey) {
  return getRecord(USERS_FILE, `student:${studentKey}`);
}

export function setStudentRecord(studentKey, record) {
  return setRecord(USERS_FILE, `student:${studentKey}`, record);
}

export function getAppSetting(settingKey) {
  return getRecord(SETTINGS_FILE, `setting:${settingKey}`);
}

export function setAppSetting(settingKey, value) {
  return setRecord(SETTINGS_FILE, `setting:${settingKey}`, value);
}

export function getProgressRecord(studentKey) {
  return getRecord(PROGRESS_FILE, `progress:${studentKey}`);
}

export async function compareAndSetProgressRecord(studentKey, record, expectedUpdated) {
  const key = `progress:${studentKey}`;
  if (SUPABASE_ENABLED) {
    const current = await supabaseGet(key);
    if ((current?.updated ?? null) !== (expectedUpdated ?? null)) return false;
    await supabaseSet(key, record);
    return true;
  }
  const store = await getBlobStore();
  if (store) {
    const current = await store.getWithMetadata(key, { type: 'json', consistency: 'strong' });
    if ((current?.data?.updated ?? null) !== (expectedUpdated ?? null)) return false;
    const result = await store.setJSON(
      key,
      record,
      current?.etag ? { onlyIfMatch: current.etag } : { onlyIfNew: true },
    );
    return result.modified;
  }

  const records = readLocalFile(PROGRESS_FILE);
  if ((records[key]?.updated ?? null) !== (expectedUpdated ?? null)) return false;
  records[key] = record;
  writeLocalFile(PROGRESS_FILE, records);
  return true;
}
