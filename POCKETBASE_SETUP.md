# PocketBase Setup

The app authenticates each student with a username and password. Progress is
stored in PocketBase and scoped to the authenticated student, so each account
has separate progress across devices.

## Configure PocketBase

Run PocketBase, create a PocketBase Superuser in the Admin UI, and run:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-admin-email \
PB_ADMIN_PASSWORD=your-admin-password \
node scripts/setup-pocketbase.mjs
```

The script creates or preserves the `progress` collection with a `user`
relation to PocketBase's built-in `users` collection, a JSON `data` field, and
an `updated` date field. Its API rules restrict records to their authenticated
owner. It also locks all API access to the legacy public `profiles` collection,
if that collection exists.

## Create student accounts

Set a distinct password for each student. Passwords must contain at least
eight characters. Run the setup script once with the same PocketBase URL and
Superuser credentials:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-admin-email \
PB_ADMIN_PASSWORD=your-admin-password \
STUDENT_PASSWORD_GEFEN='unique-password-1' \
STUDENT_PASSWORD_BARRY='unique-password-2' \
STUDENT_PASSWORD_SHAKED='unique-password-3' \
STUDENT_PASSWORD_MAAYAN='unique-password-4' \
STUDENT_PASSWORD_HADAR='unique-password-5' \
STUDENT_PASSWORD_MIA='unique-password-6' \
node scripts/setup-students.mjs
```

Replace the example values with six different passwords and deliver them
privately to the students. Do not commit real passwords. Existing accounts are
left unchanged by the script; reset their passwords in PocketBase Admin UI if
needed.

Student usernames, internal email mappings, and CEFR levels are configured in
[`server/students.js`](./server/students.js). Set the desired level for each
student there and deploy the app. Current course units are A1/A1+; other levels
can guide AI conversations but need matching course content before the full
course can be described as level-tailored.
