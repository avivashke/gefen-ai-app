# PocketBase Collection Setup

Run PocketBase, open Admin UI at http://127.0.0.1:8087/_/

## Create Collection: `progress`

1. Go to Collections → Create new collection
2. Name: `progress`
3. Type: `Base`
4. Add fields:
   - `user` (Relation) → Users collection, Required, Cascade Delete
   - `data` (JSON) → Required
   - `updated` (Date) → Required
5. Save

## API Rules (Settings → API Rules)
- List/View: `@request.auth.id = user`
- Create: `@request.auth.id = user`
- Update: `@request.auth.id = user`
- Delete: `@request.auth.id = user`

## Create Admin User
In Admin UI → Settings → Admins → New admin
- Email: admin@gefen.local
- Password: gefenadmin123