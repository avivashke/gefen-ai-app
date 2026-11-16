# PocketBase Setup

The app authenticates each student with a username and password. Progress is
stored in PocketBase and scoped to the authenticated student, so each account
has separate progress across devices.

## Configure PocketBase

Run PocketBase and create a PocketBase Superuser in the Admin UI. In the
PocketBase dashboard, create an **Auth** collection named `users` if it does
not already exist, with password authentication enabled. Then run:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-admin-email \
PB_ADMIN_PASSWORD=your-admin-password \
node scripts/setup-pocketbase.mjs
```

The script creates or preserves the `progress` collection with a `user`
relation to the `users` auth collection, a JSON `data` field, and
an `updated` date field. Its API rules restrict records to their authenticated
owner. It also locks all API access to the legacy public `profiles` collection,
if that collection exists. The existing `users` auth collection must also be
present; the script adds private activation and password-reset fields to it.

## Create student accounts

Run the setup script with the same PocketBase URL and Superuser credentials:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-admin-email \
PB_ADMIN_PASSWORD=your-admin-password \
node scripts/setup-students.mjs
```

The script generates a one-time activation code for each new/unactivated
student, stores only a hash, and prints each code once. Save and deliver each
code privately. Students choose their own password (minimum eight characters)
in the app. Activated accounts are left unchanged.

## Admin dashboard and password resets

Configure these server-side environment variables in Netlify:

- `ADMIN_USERNAME` and `ADMIN_PASSWORD` for the teacher's app login.
- `ADMIN_SESSION_SECRET`, a random secret at least 32 characters long.
- `PB_ADMIN_EMAIL` and `PB_ADMIN_PASSWORD` for a dedicated PocketBase
  Superuser used only by the server to read summaries and set one-time codes.
- `TEACHER_WHATSAPP`, the teacher's full international number using digits
  only (for example `9725...`), for the prefilled reset-request link.

Never put these values in frontend code or source control. The admin dashboard
shows progress summaries, not conversation contents. A student can open a
pre-filled WhatsApp request to the teacher. After verifying the request, use
the dashboard to generate a 30-minute reset code and send it privately; the
student enters the code and chooses a new password.

The WhatsApp request target is sent by the public config endpoint so it does
not need to be committed to source control. It is a public contact link, not
an authentication factor.

Student usernames, internal email mappings, and CEFR levels are configured in
[`server/students.js`](./server/students.js). Set the desired level for each
student there and deploy the app. Current course units are A1/A1+; other levels
can guide AI conversations but need matching course content before the full
course can be described as level-tailored.
