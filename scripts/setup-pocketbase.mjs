import PocketBase from 'pocketbase';

const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL || 'admin@gefen.ai';
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD || 'ChangeMe123!';

const pb = new PocketBase(PB_URL);

async function main() {
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
  // 2. Ensure an admin superuser exists
  // ------------------------------------------------------------------
  try {
    await pb.admins.getList(1, 1, { filter: `email = "${ADMIN_EMAIL}"` });
    console.log(`[setup] Admin ${ADMIN_EMAIL} exists`);
  } catch {
    console.log(`[setup] Creating admin superuser ${ADMIN_EMAIL}...`);
    await pb.admins.create({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      passwordConfirm: ADMIN_PASSWORD,
    });
    console.log('[setup] Admin created');
  }

  console.log('[setup] Done. You can now set PB_URL in Netlify to connect cross-device sync.');
  console.log(`[setup] PB_URL=${PB_URL}`);
  console.log(`[setup] ADMIN_EMAIL=${ADMIN_EMAIL}`);
  console.log(`[setup] ADMIN_PASSWORD=${ADMIN_PASSWORD}`);
}

main().catch((err) => {
  console.error('[setup] Failed:', err.message);
  process.exit(1);
});