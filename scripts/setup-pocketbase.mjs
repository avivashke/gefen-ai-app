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

  let progressCollection = null;
  try {
    progressCollection = await pb.collections.getOne(collectionName);
  } catch (e) {
    if (e.status !== 404) throw e;
  }
  if (progressCollection) {
    console.log(`[setup] Collection '${collectionName}' already exists (id: ${progressCollection.id})`);
    await pb.collections.update(progressCollection.id, {
      listRule: `@request.auth.id != "" && user = @request.auth.id`,
      viewRule: `@request.auth.id != "" && user = @request.auth.id`,
      createRule: `@request.auth.id != "" && user = @request.auth.id`,
      updateRule: `@request.auth.id != "" && user = @request.auth.id`,
      deleteRule: `@request.auth.id != "" && user = @request.auth.id`,
    });
  } else {
    console.log(`[setup] Creating collection '${collectionName}'...`);

    await pb.collections.create({
      name: collectionName,
      type: 'base',
      listRule: `@request.auth.id != "" && user = @request.auth.id`,
      viewRule: `@request.auth.id != "" && user = @request.auth.id`,
      createRule: `@request.auth.id != "" && user = @request.auth.id`,
      updateRule: `@request.auth.id != "" && user = @request.auth.id`,
      deleteRule: `@request.auth.id != "" && user = @request.auth.id`,
      fields: [
        {
          name: 'user',
          type: 'relation',
          required: true,
          collectionId: '_pb_users_auth_', // PocketBase users collection
          options: {
            collectionId: '_pb_users_auth_',
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
  // 2. Lock down any profiles collection from the previous public version
  // ------------------------------------------------------------------
  let legacyProfiles = null;
  try {
    legacyProfiles = await pb.collections.getOne('profiles');
  } catch (e) {
    if (e.status !== 404) throw e;
  }
  if (legacyProfiles) {
    await pb.collections.update(legacyProfiles.id, {
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
    });
    console.log('[setup] Locked public access to legacy profiles');
  } else {
    console.log('[setup] No legacy profiles collection to lock');
  }

  console.log('[setup] Done. Configure PB_URL in the app server to enable student sync.');
  console.log(`[setup] PB_URL=${PB_URL}`);
}

main().catch((err) => {
  console.error('[setup] Failed:', err.message);
  process.exit(1);
});