# Lamda — Deployment

## Netlify deployment

The app is configured for Netlify. Connect this repository to Netlify and deploy
with the repository's `netlify.toml` settings. Netlify Blobs is the shared,
persistent store used by the app's server function; it needs no PocketBase
instance or separate database setup.

Set these server-side environment variables in Netlify before deploying:

| Variable | Required | Purpose |
| --- | --- | --- |
| `ADMIN_USERNAME` | Yes | Teacher dashboard username |
| `ADMIN_PASSWORD` | Yes | Strong teacher dashboard password |
| `ADMIN_SESSION_SECRET` | Yes | Random secret of at least 32 characters for admin sessions |
| `AUTH_TOKEN_SECRET` | Yes | Independent random secret of at least 32 characters for student sessions |
| `NETLIFY_SITE_ID` | Yes | Netlify Project ID used to access the Blobs store |
| `NETLIFY_BLOBS_TOKEN` | Yes | Netlify personal access token used only by the server function to access Blobs |
| `TEACHER_WHATSAPP` | Recommended | Teacher's international phone number, digits only |
| `AI_PROXY_URL` | Optional | OpenAI-compatible AI proxy URL; required for AI chat and personal curriculum generation |
| `NODE_ENV` | Optional | Set to `production` |

Generate the two secrets separately, for example with `openssl rand -hex 32`.
Do not use the same value for both, and never commit or share the values.

For `NETLIFY_SITE_ID`, copy the **Project ID** from Netlify's project
configuration. Create a personal access token in **User settings → Applications
→ Personal access tokens**, then add it as `NETLIFY_BLOBS_TOKEN` in the site's
environment variables with Functions scope. Keep the token secret; never put it
in frontend code or send it in chat.

After deploying, open **Teacher Admin** and sign in with `ADMIN_USERNAME` and
`ADMIN_PASSWORD`. Use **Activation code** in each learner's row and deliver the
one-time code privately. The learner chooses a password of at least eight
characters. After a password-reset request is verified, use **Reset code**;
reset codes expire after 30 minutes. Progress is stored separately for each
learner and syncs across devices using the same account.

Learner profiles are configured in `server/students.js`. The profile's gender
controls Hebrew forms; CEFR level and interests are sent to the AI course
generator and conversation coach. The admin course prompt is prefilled with
these settings and can be adjusted before generating a course.

The admin dashboard shows learner-level progress cards, including exercise
completion, accuracy, XP, streaks, vocabulary mastery, and unit progress.
**Enter account** creates a one-hour, student-scoped session, including for
learners who have not activated their account yet. This lets the teacher inspect
the course before sharing its activation code. Actions taken in that session
are saved as the learner; this does not activate the learner's account. A
persistent banner identifies the session and provides a return to admin. The
admin dashboard and password are not exposed to the learner session.

In the admin dashboard, use **Edit AI curriculum** on a learner's row to
generate a complete four-unit course from a teacher prompt. Include the
learner's CEFR level and requested topics. Before replacing an existing
curriculum, Lamda archives a progress summary with unit results, strengths,
review needs, and vocabulary mastery; private chat transcripts are not included.
The new curriculum is loaded the next time that learner signs in, and progress
from the previous curriculum is kept separate.

The app writes to the Netlify Blobs store named `gefen-coach-data`. Each deployed
Netlify site has its own store; the learners visiting that site share its
student roster and data.

## Local development

Install dependencies and run the Express server:

```bash
npm install
export ADMIN_USERNAME='teacher'
export ADMIN_PASSWORD='use-a-strong-local-password'
export ADMIN_SESSION_SECRET="$(openssl rand -hex 32)"
export AUTH_TOKEN_SECRET="$(openssl rand -hex 32)"
npm run dev
```

Open `http://localhost:3000`. Outside Netlify, the app uses JSON files under
`data/` (or `DATA_DIR` if set). This is only local development storage; it is
not shared between devices and is not suitable for deployment on serverless
hosting.

## Existing PocketBase data

The app no longer reads or writes PocketBase. Existing PocketBase records are
not copied automatically to Netlify Blobs and remain in the old PocketBase
instance until separately exported or deleted. `PB_URL`, `PB_ADMIN_EMAIL`, and
`PB_ADMIN_PASSWORD` are no longer required by this app and should be removed
from Netlify's environment variables once the migration is verified.

## AI proxy

Configure `AI_PROXY_URL` and allow the Netlify site's origin in the AI
provider/Worker's origin settings. Student progress and authentication do not
depend on the AI proxy, but chat and curriculum generation do.
