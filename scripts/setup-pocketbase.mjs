import PocketBase from 'pocketbase';

const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD;
const pb = new PocketBase(PB_URL);

async function main() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('Set PB_ADMIN_EMAIL and PB_ADMIN_PASSWORD to an existing PocketBase superuser');
  }
  console.log(`[setup] Connecting to PocketBase at ${PB_URL}...`);

  // Authenticate as admin (superuser)
  await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
  console.log('[setup] Admin authenticated');

  // ------------------------------------------------------------------
  // 1. Create 'progress' collection if it doesn't exist
  // ------------------------------------------------------------------
  const collectionName = 'progress';

  try {
    const existing = await pb.collections.getOne(collectionName);
    console.log(`[setup] Collection '${collectionName}' already exists (id: ${existing.id})`);
  } catch (e) {
    console.log(`[setup] Creating collection '${collectionName}'...`);

    await pb.collections.create({
      name: collectionName,
      type: 'base',
      listRule: `@request.auth.id != "" && user = @request.auth.id`,
      viewRule: `@request.auth.id != "" && user = @request.auth.id`,
      createRule: `@request.auth.id != ""`,
      updateRule: `@request.auth.id != "" && user = @request.auth.id`,
      deleteRule: `@request.auth.id != "" && user = @request.auth.id`,
      fields: [
        {
          name: 'user',
          type: 'relation',
          required: true,
          collectionId: '_pb_users_auth__', // PocketBase users collection
          options: {
            collectionId: '_pb_users_auth__',
            maxSelect: 1,
            cascadeDelete: false,
          },
        },
        {
          name: 'data',
          type: 'json',
          required: true,
        },
        {
          name: 'updated',
          type: 'date',
          required: true,
        },
      ],
    });
    console.log(`[setup] Collection '${collectionName}' created`);
  }

  // ------------------------------------------------------------------
  // 2. Create public named profiles for login-free, per-learner sync
  // ------------------------------------------------------------------
  const profilesCollection = 'profiles';
  try {
    const existing = await pb.collections.getOne(profilesCollection);
    console.log(`[setup] Collection '${profilesCollection}' already exists (id: ${existing.id})`);
  } catch {
    console.log(`[setup] Creating collection '${profilesCollection}'...`);
    await pb.collections.create({
      name: profilesCollection,
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: null,
      fields: [
        {
          name: 'profile_id',
          type: 'text',
          required: true,
          presentable: false,
          unique: true,
          options: { min: 1, max: 64, pattern: '^[a-zA-Z0-9_-]+$' },
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          unique: true,
          options: { min: 1, max: 40 },
        },
        {
          name: 'level',
          type: 'text',
          required: true,
          options: { min: 2, max: 2, pattern: '^(A1|A2|B1)$' },
        },
        {
          name: 'data',
          type: 'json',
          required: true,
        },
        {
          name: 'updated',
          type: 'date',
          required: true,
        },
      ],
    });
    console.log(`[setup] Collection '${profilesCollection}' created`);
  }

  console.log('[setup] Done. Configure PB_URL in the app server to enable profile sync.');
  console.log(`[setup] PB_URL=${PB_URL}`);
}

main().catch((err) => {
  console.error('[setup] Failed:', err.message);
  process.exit(1);
});