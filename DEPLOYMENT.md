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

### Option 2.5: Netlify (recommended for this repo)

This repo is already configured for Netlify via `netlify.toml`:

1. Push the repo to GitHub.
2. Go to netlify.com → **Add new site** → **Import an existing project** → connect GitHub.
3. Netlify auto-detects:
   - **Publish directory:** `public`
   - **Functions directory:** `netlify/functions`
   - **Build command:** (none — static site + functions)
4. Add **Environment variables** (Site settings → Build & deploy → Environment):
   - `PB_URL` = your PocketBase URL (required for cloud sync / auth across devices)
   - `AI_PROXY_URL` = https://gefen-ai.avivashke95.workers.dev (AI chat proxy)
   - `LOCAL_AUTH_SECRET` = any random string (optional, for local fallback tokens)
   - `NODE_ENV` = production
5. Deploy.

The function `netlify/functions/api.js` wraps the Express backend, so `/api/*` calls are proxied automatically. All other routes serve `public/index.html` (SPA hash-router).

---

## 💾 איפה נשמרת ההתקדמות של המשתמש?

| מצב | איפה הנתונים נשמרים | סנכרון בין מכשירים | נדרש תשתית חיצונית |
|-----|----------------------|---------------------|---------------------|
| **ברירת מחדל (ללא PB_URL)** | `localStorage` בדפדפן של המשתמש | ❌ רק במכשיר הנוכחי | לא |
| **עם PocketBase בענן** | מסד נתונים בענן (PocketBase) | ✅ כן, בין מכשירים | כן (חינמי) |

ב-Netlify Functions לא ניתן לכתוב לקבצים מקומיים (מערכת קבצים לקריאה בלבד), אז אם לא מגדיר `PB_URL`, ההתקדמות נשמרת רק בדפדפן של המשתמש. יש אפשרות **איפוס מלא** מההגדרות (`איפוס כל ההתקדמות`) שיוחק את כל הנתונים מהמכשיר הנוכחי (ומהסנכרון בענן אם מחובר).

---

## 🆓 הקמת מסד חינמי לסנכרון בין מכשירים (מומלץ)

כדי שהמשתמשים יוכלו להיכנס לחשבון ולסנכרן התקדמות בין מכשירים, יש להקים PocketBase בענן ולחבר אותו ל-Netlify דרך משתנה הסביבה `PB_URL`.

### אפשרות א: PocketBase Cloud (הכי קל ומומלץ)
1. הירשמי ב-[pocketbase.io](https://pocketbase.io) — יש שכבה חינמית (1GB, 10K בקשות/יום).
2. צרי פרויקט חדש והעתיקי את ה-URL (למשל `https://gefen-ai-xyz.pocketbase.io`).
3. ב-Netlify: Site settings → Build & deploy → Environment → הוסיפי `PB_URL` עם ה-URL הזה.
4. Deploy מחדש.

### אפשרות ב: Render.com (חינם עם Docker)
1. צרי שירות חדש ב-Render בחירת **Docker**.
2. תמונה: `ghcr.io/pocketbase/pocketbase:0.22.10`
3. פקודת הפעלה: `serve --http=0.0.0.0:10000`
4. הוסיפי **Persistent Disk** כדי שהנתונים לא יימחקו בהפעלה חוזרת.
5. העתיקי את ה-URL של השירות ל-`PB_URL` ב-Netlify.

### אפשרות ג: Railway.app (חינם לניסיון)
1. צרו פרויקט חדש → Deploy מ-DockerHub.
2. תמונה: `ghcr.io/pocketbase/pocketbase:0.22.10`
3. חברו את ה-URL ל-`PB_URL` ב-Netlify.

---

### משתני סביבה במלואם

| משתנה | חובה? | תיאור | דוגמה |
|--------|--------|-------|--------|
| `PB_URL` | כן (לסנכרון ענן) | כתובת PocketBase לסנכרון ענן | `https://my-app.pocketbase.io` |
| `PB_ADMIN_EMAIL` | כן (לסנכרון ענן) | אימייל מנהל PocketBase | `admin@gefen.ai` |
| `PB_ADMIN_PASSWORD` | כן (לסנכרון ענן) | סיסמת מנהל PocketBase | `StrongPassword123!` |
| `AI_PROXY_URL` | לא | פרוקסי לשיחת AI | `https://gefen-ai.avivashke95.workers.dev` |
| `LOCAL_AUTH_SECRET` | לא | סוד לאימות מקומי fallback | כל מחרוזת אקראית |
| `NODE_ENV` | לא | סביבת הפעלה | `production` |

אם `PB_URL` לא מוגדר או לא נגיש, האפליקציה עובדת במצב **מקומי בלבד** — התקדמות נשמרת ב-`localStorage` בדפדפן, ויש כפתור איפוס מלא בהגדרות.

### הגדרת Collections ב-PocketBase (פעם אחת)

לאחר שהמסד רץ בענן, יש ליצור את collection `progress` ולהגדיר הרשאות גישה. אפשר דרך Admin UI של PocketBase, או להריץ את סקריפט ההגדרה שכבר כלול בפרויקט:

```bash
export PB_URL=https://your-pocketbase-url
export PB_ADMIN_EMAIL=your-admin-email
export PB_ADMIN_PASSWORD=your-admin-password
node scripts/setup-pocketbase.mjs
```

**מה הסקריפט עושה:**
- יוצר collection בשם `progress` עם השדות: `user` (קישור למשתמש), `data` (JSON עם ההתקדמות), `updated` (תאריך עדכון).
- מגדיר כללי גישה כך שכל משתמש רואה ועורך רק את הנתונים שלו.
- יוצר משתמש מנהל (superuser) אם לא קיים.

**או באופן ידני דרך Admin UI:**
1. Collections → Add Collection → Base → שם: `progress`
2. שדות: `user` (Relation ל-users), `data` (JSON), `updated` (Date)
3. כללי גישה: Create `@request.auth.id != ""`, Read/Update/Delete `@request.auth.id != "" && user = @request.auth.id`

### בדיקה שהסינכרון עובד

1. היכנסי לאתר ב-Netlify.
2. בהגדרות (⚙️) המצב צריך להראות `☁️ בענן` במקום `💾 מקומי בדפדפן`.
3. נרשמי / התחברי עם אימייל וסיסמה.
4. התקדמי בכמה יחידות למידה.
5. פתיחי את האתר במכשיר אחר או בדפדפן אחר והתחברי — ההתקדמות תופיע שם אוטומטית.

### Option 4: Your Always-On PC + Cloudflare Tunnel
```bash
# On your PC
cloudflared tunnel --url http://localhost:3000
# Gives you: https://random-name.trycloudflare.com
```

## פיתוח מקומי

```bash
# 1. הפעלי PocketBase מקומית (במTerminal נפרד)
cd pocketbase/pocketbase
./pocketbase serve --http=0.0.0.0:8087

# 2. הגדרי משתני סביבה
export PB_URL=http://127.0.0.1:8087
export PB_ADMIN_EMAIL=admin@gefen.ai
export PB_ADMIN_PASSWORD=ChangeMe123!

# 3. הפעלי סקריפט הגדרה ראשונית לפעמים הראשונות
node scripts/setup-pocketbase.mjs

# 4. הפעלי את השרת
npm install
npm run dev

# 5. פתיחי http://localhost:3000
```

---

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