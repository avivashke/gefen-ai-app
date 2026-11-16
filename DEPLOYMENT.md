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
   - `PB_URL` = your PocketBase URL (required for student accounts and cross-device progress sync)
   - `AI_PROXY_URL` = https://gefen-ai.avivashke95.workers.dev (AI chat proxy)
   - `NODE_ENV` = production
5. Deploy.

The function `netlify/functions/api.js` wraps the Express backend, so `/api/*` calls are proxied automatically. All other routes serve `public/index.html` (SPA hash-router).

---

## חשבונות תלמידים והתקדמות

| מצב | איפה הנתונים נשמרים | סנכרון בין מכשירים | נדרש תשתית חיצונית |
|-----|----------------------|---------------------|---------------------|
| **ללא PocketBase** | בדפדפן או באחסון המקומי של השרת | ❌ אין הבטחת סנכרון | לא |
| **עם PocketBase בענן** | מסד נתונים בענן (PocketBase) | ✅ לפי חשבון תלמיד | כן |

כל תלמידה או תלמיד מפעילים את החשבון פעם אחת עם קוד אישי ובוחרים לעצמם סיסמה. ההתקדמות נשמרת אוטומטית בחשבון שלהם; במכשיר אחר נכנסים עם אותם פרטים. בקשת איפוס פותחת הודעת WhatsApp למורה. המורה מאמתת את הבקשה בדשבורד ומייצרת קוד איפוס חד־פעמי.

ב-Netlify Functions אין אחסון מקומי מתמשך. יש להגדיר `PB_URL`, להגדיר את PocketBase ולהריץ פעם אחת את סקריפט יצירת חשבונות התלמידים. בלי PocketBase פעיל לא ניתן להתחבר או לסנכרן בין מכשירים.

---

## 🆓 הקמת מסד חינמי לסנכרון בין מכשירים (מומלץ)

כדי ליצור חשבונות ולסנכרן התקדמות בין מכשירים, יש להקים PocketBase בענן ולחבר אותו ל-Netlify דרך `PB_URL`.

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
| `AI_PROXY_URL` | לא | פרוקסי לשיחת AI | `https://gefen-ai.avivashke95.workers.dev` |
| `NODE_ENV` | לא | סביבת הפעלה | `production` |

אם `PB_URL` לא מוגדר או לא נגיש, האפליקציה עובדת במצב מקומי, ללא הבטחת שמירה בענן או סנכרון בין מכשירים.

### הגדרת Collections ב-PocketBase (פעם אחת)

לאחר שהמסד רץ בענן, הריצי את סקריפט ההגדרה כדי ליצור את האוספים:

```bash
export PB_URL=https://your-pocketbase-url
PB_ADMIN_EMAIL=your-existing-superuser-email PB_ADMIN_PASSWORD=your-superuser-password node scripts/setup-pocketbase.mjs
```

האפליקציה משתמשת באוסף `progress`, שבו כל רשומה משויכת לחשבון PocketBase המאומת. הסקריפט נועל גישה ציבורית לאוסף `profiles` מהגרסה הקודמת ומוסיף שדות אבטחה לאוסף האימות `users`. לאחר מכן יש ליצור את ששת חשבונות התלמידים:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-existing-superuser-email \
PB_ADMIN_PASSWORD=your-superuser-password \
node scripts/setup-students.mjs
```

הסקריפט מייצר קוד הפעלה אקראי לכל חשבון חדש ומציג אותו פעם אחת בטרמינל. שמרי את הקודים והעבירי כל אחד לתלמיד/ה באופן פרטי. התלמידים קובעים סיסמה בת 8 תווים לפחות מתוך מסך „הגדרת סיסמה”. אם קוד אבד, אפשר להנפיק אחר דרך דשבורד המורה.

### משתמש אדמין ודשבורד המורה

הגדרי את משתני הסביבה הבאים ב-Netlify (Site settings → Environment variables):

| משתנה | תיאור |
|--------|-------|
| `ADMIN_USERNAME` | שם המשתמש שתבחרי לכניסת האדמין |
| `ADMIN_PASSWORD` | סיסמת אדמין חזקה, לפחות 12 תווים |
| `ADMIN_SESSION_SECRET` | סוד אקראי באורך 32 תווים לפחות לחתימת session |
| `PB_ADMIN_EMAIL` | חשבון Superuser ייעודי של PocketBase, לשימוש צד־שרת בלבד |
| `PB_ADMIN_PASSWORD` | הסיסמה של ה־Superuser הייעודי, לשימוש צד־שרת בלבד |
| `TEACHER_WHATSAPP` | מספר המורה בפורמט בינלאומי, ספרות בלבד (למשל `9725...`) |

אין להכניס את הערכים האלה לקוד או לשלוח אותם בצ׳אט. פרטי PocketBase נשארים ב־Netlify בצד השרת ואינם נשלחים לדפדפן. מומלץ ליצור Superuser נפרד לתפעול האפליקציה, ולא להשתמש בחשבון האישי שלך.

לאחר הפריסה, פתחי „ניהול מורה” והתחברי עם `ADMIN_USERNAME` ו־`ADMIN_PASSWORD`. הדשבורד מציג סיכום פעילות (רמה, XP, רצף ותרגילים שהושלמו) בלי תוכן השיחות. לאחר בקשת איפוס בוואטסאפ, לחצי „קוד איפוס” והעבירי את הקוד לתלמיד/ה. הקוד תקף ל־30 דקות ונמחק אחרי שימוש.

לפרטים על הגדרה ידנית, ראו [POCKETBASE_SETUP.md](./POCKETBASE_SETUP.md).

### הגדרת ALLOWED_ORIGINS ב-Cloudflare Worker (חובה לסנכרון AI)

ה-Cloudflare Worker (`gefen-ai.avivashke95.workers.dev`) חוסם בקשות שמגיעות ממקורות שלא מוגדרים ברשימת ה-`ALLOWED_ORIGINS`. ללא הגדרה זו, הבקשות מ-Netlify יקבלו שגיאת 403.

#### שלבי הגדרה:

1. היכנסי ל-[Cloudflare Dashboard](https://dash.cloudflare.com)
2. גשי ל-**Workers & Pages** → בחרי ב-`gefen-ai`
3. גשי ל-**Settings** → **Variables** → **Environment variables**
4. הוסיפי משתנה חדש:
   - **שם:** `ALLOWED_ORIGINS`
   - **ערך:** `https://wonderful-squirrel-816721.netlify.app` (החליפי בדומיין האמיתי של האתר שלך ב-Netlify)
   - אפשרי מספר דומיינים מופרדים בפסיק אם צריך: `https://site1.netlify.app,https://site2.netlify.app`
5. לחצי **Save** או **Deploy**

#### בדיקה:

לאחר העדכון, שלחי הודעה במאמנת AI באתר ב-Netlify. השגיאה 403 אמורה להיעלם.

#### הגדרת כתובת פרוקסי Cloudflare Worker מתוך ההגדרות של האפליקציה (חוצה מכשירים)

ניתן להגדיר את כתובת הפרוקסי של Cloudflare Worker ישירות ממסך ההגדרות של האפליקציה (⚙️ הגדרות → חיבור המאמנת). הגדרה זו נשמרת במכשיר המקומי.

- בשדה "כתובת פרוקסי Cloudflare Worker" הדביקי את כתובת ה-Worker (לדוגמה `https://gefen-ai.avivashke95.workers.dev/`).
- הקוד בודק שהכתובת תקינה לפני השמירה ומראה שגיאה אם היא לא תקינה.
- המפתח הסודי של Groq (API Key) לעולם אינו נשמר בענן – הוא נשאר במכשיר שבו הזנת אותו בלבד, מסיבות אבטחה.

---

## משתני סביבה ב-Netlify (שיש להגדיר גם כן)

ב-Netlify: **Site settings → Build & deploy → Environment variables**

| משתנה | חובה? | ערך לדוגמה | תיאור |
|--------|--------|-------------|--------|
| `AI_PROXY_URL` | כן | `https://gefen-ai.avivashke95.workers.dev` | כתובת פרוקסי ה-AI ב-Cloudflare Worker |
| `PB_URL` | כן (לסינכרון ענן) | `https://your-pocketbase-instance` | כתובת PocketBase בענן |
| `PB_ADMIN_EMAIL`, `PB_ADMIN_PASSWORD` | כן (לדשבורד והפעלת חשבונות) | מוגדרים ב-Netlify Secrets | חשבון Superuser ייעודי; צד־שרת בלבד |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD` | כן (לכניסת מורה) | בחירה אישית | פרטי כניסת האדמין |
| `ADMIN_SESSION_SECRET` | כן (לכניסת מורה) | מחרוזת אקראית באורך 32+ | מפתח חתימת session |
| `TEACHER_WHATSAPP` | כן (לבקשת איפוס) | קידומת בינלאומית וספרות בלבד | יעד קישור WhatsApp |
| `ALLOWED_ORIGINS` | כן | `https://wonderful-squirrel-816721.netlify.app` | מוגדר ב-Cloudflare Worker, לא ב-Netlify |
| `NODE_ENV` | לא | `production` | סביבת הפעלה |

---

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

# 3. הפעלי סקריפט הגדרה ראשונית (השתמשי ב-Superuser קיים)
PB_ADMIN_EMAIL=your-existing-superuser-email PB_ADMIN_PASSWORD=your-superuser-password node scripts/setup-pocketbase.mjs

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