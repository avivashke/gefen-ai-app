import express from 'express';
import cors from 'cors';
import { createClient } from 'pocketbase';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';

// PocketBase admin client for server-side operations
const pb = new PocketBase(PB_URL);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', pocketbase: PB_URL });
});

// Auth endpoints
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    const record = await pb.collection('users').create({ email, password, passwordConfirm: password });
    const authData = await pb.collection('users').authWithPassword(email, password);
    res.json({ token: pb.authStore.token, user: authData.record });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const authData = await pb.collection('users').authWithPassword(email, password);
    res.json({ token: pb.authStore.token, user: authData.record });
  } catch (e) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  pb.authStore.clear();
  res.json({ ok: true });
});

app.get('/api/auth/me', (req, res) => {
  if (pb.authStore.isValid) {
    res.json({ user: pb.authStore.model });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

// Progress sync endpoints
app.get('/api/progress', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token' });
    }
    const token = authHeader.slice(7);
    pb.authStore.save(token, null);
    
    if (!pb.authStore.isValid) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    const userId = pb.authStore.model.id;
    const records = await pb.collection('progress').getList(1, 1, {
      filter: `user = "${userId}"`,
      sort: '-updated'
    });
    
    if (records.items.length > 0) {
      const data = JSON.parse(records.items[0].data);
      res.json({ data, recordId: records.items[0].id });
    } else {
      res.json({ data: null });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/progress', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token' });
    }
    const token = authHeader.slice(7);
    pb.authStore.save(token, null);
    
    if (!pb.authStore.isValid) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    const userId = pb.authStore.model.id;
    const { data } = req.body;
    
    const records = await pb.collection('progress').getList(1, 1, {
      filter: `user = "${userId}"`,
      sort: '-updated'
    });
    
    const payload = { user: userId, data: JSON.stringify(data), updated: new Date().toISOString() };
    
    let record;
    if (records.items.length > 0) {
      record = await pb.collection('progress').update(records.items[0].id, payload);
    } else {
      record = await pb.collection('progress').create(payload);
    }
    
    res.json({ ok: true, recordId: record.id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// AI Proxy endpoint (forwards to Cloudflare Worker)
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, model, temperature, max_tokens } = req.body;
    const workerUrl = process.env.AI_PROXY_URL || 'https://gefen-ai.avivashke95.workers.dev';
    
    const response = await fetch(`${workerUrl}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model || 'openai/gpt-oss-120b',
        messages,
        temperature: temperature ?? 0.72,
        max_tokens: max_tokens ?? 800
      })
    });
    
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`PocketBase: ${PB_URL}`);
});