# PocketBase Setup

The app uses a public `profiles` collection for named learner profiles. No
account or password is required: selecting the same profile on another device
loads the same progress and level.

## Create the collections

Run PocketBase, create a PocketBase Superuser in the Admin UI, and run the
setup script with that superuser's credentials:

```bash
PB_URL=https://your-pocketbase-url \
PB_ADMIN_EMAIL=your-admin-email \
PB_ADMIN_PASSWORD=your-admin-password \
node scripts/setup-pocketbase.mjs
```

The script creates or preserves:

- `progress` — legacy account-based progress.
- `profiles` — login-free profiles used by the app.

The `profiles` collection has `profile_id` (unique text), `name` (text),
`level` (text), `data` (JSON), and `updated` (date) fields. Its list, view,
create, and update API rules are public so the server can support profile
selection without a login. Delete is disabled.

**Privacy notice:** profiles and their learning progress are not private.
Anyone who can open the app can list profiles, read their progress, and edit
it. Do not store sensitive information in a profile.

## Manual configuration

If configuring manually, create a Base collection named `profiles` with:

- `profile_id`: Text, required, unique, pattern `^[a-zA-Z0-9_-]+$`
- `name`: Text, required, unique, maximum 40 characters
- `level`: Text, required (`A1`, `A2`, or `B1`)
- `data`: JSON, required
- `updated`: Date, required

Set List, View, Create, and Update rules to an empty rule (public access).
Leave Delete locked (`null`).

The old account-based `progress` collection can remain in place; new named
profiles use `profiles` instead.
