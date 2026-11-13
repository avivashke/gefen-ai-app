# Gefen English Coach - Fullstack Deployment

## Quick Start (Local Development)

```bash
# 1. Start PocketBase (in separate terminal)
cd pocketbase/pocketbase
./pocketbase.exe serve --http=0.0.0.0:8087

# 2. Start backend (in separate terminal)
npm install
npm run dev

# 3. Open http://localhost:3000
```

## Free Cloud Deployment Options

### Option 1: Render.com (Recommended)
1. Fork this repo
2. Go to render.com → New → Web Service
3. Connect your GitHub repo
4. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
5. Add Environment Variables:
   - `PB_URL` = your PocketBase URL (see below)
   - `AI_PROXY_URL` = https://gefen-ai.avivashke95.workers.dev
6. Deploy!

### Option 2: Railway.app
1. Go to railway.app → New Project → Deploy from GitHub
2. Select repo, it auto-detects Node.js
3. Add PocketBase as a separate service or use external

### Option 3: Fly.io
```bash
fly launch --no-deploy
fly deploy
```

### Option 4: Your Always-On PC + Cloudflare Tunnel
```bash
# On your PC
cloudflared tunnel --url http://localhost:3000
# Gives you: https://random-name.trycloudflare.com
```

## PocketBase Hosting (Free)

### Option A: PocketBase Cloud (pocketbase.io)
- Free tier: 1GB, 10k requests/day
- Just sign up and create a database

### Option B: Railway/Render for PocketBase
- Deploy PocketBase as separate service
- Use Docker: `docker run -p 8087:8087 ghcr.io/pocketbase/pocketbase:0.22.10 serve --http=0.0.0.0:8087`

### Option C: Your PC (current setup)
- Keep PocketBase running on your PC
- Use Cloudflare Tunnel for public access:
  ```bash
  cloudflared tunnel --url http://localhost:8087
  ```
- Set `PB_URL=https://your-tunnel.trycloudflare.com` in backend env

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend port | 3000 |
| `PB_URL` | PocketBase URL | http://127.0.0.1:8087 |
| `AI_PROXY_URL` | Groq Worker URL | https://gefen-ai.avivashke95.workers.dev |

## Features Enabled
- ✅ Sidebar navigation (responsive)
- ✅ PocketBase sync (multi-device)
- ✅ AI Chat via backend proxy
- ✅ Local-first (works offline)
- ✅ Export/Import progress
- ✅ Free deployment ready