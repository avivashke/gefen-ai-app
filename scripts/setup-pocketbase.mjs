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
  await pb.collection('_superusers').authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
  console.log('[setup] Admin authenticated');
  const usersCollection = await pb.collections.getOne('users');

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
    const userField = progressCollection.fields.find((field) => field.name === 'user');
    if (!userField || userField.type !== 'relation') {
      throw new Error(`Collection '${collectionName}' needs a relation field named 'user'`);
    }
    const fields = progressCollection.fields.map((field) => field.name === 'user'
      ? {
        ...field,
        collectionId: usersCollection.id,
        options: { ...field.options, collectionId: usersCollection.id },
      }
      : field);
    await pb.collections.update(progressCollection.id, {
      fields,
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
          collectionId: usersCollection.id,
          options: {
            collectionId: usersCollection.id,
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

  const userFields = [
    { name: 'activation_hash', type: 'text', required: false },
    { name: 'activated', type: 'bool', required: false },
    { name: 'reset_hash', type: 'text', required: false },
    { name: 'reset_expires', type: 'date', required: false },
  ];
  const missingUserFields = userFields.filter(
    (field) => !usersCollection.fields.some((existing) => existing.name === field.name),
  );
  if (missingUserFields.length) {
    await pb.collections.update(usersCollection.id, {
      fields: [...usersCollection.fields, ...missingUserFields],
    });
    console.log(`[setup] Added account security fields to users: ${missingUserFields.map((field) => field.name).join(', ')}`);
  } else {
    console.log('[setup] Student account security fields already exist');
  }

  console.log('[setup] Done. Configure PB_URL in the app server to enable student sync.');
  console.log(`[setup] PB_URL=${PB_URL}`);
}

main().catch((err) => {
  console.error('[setup] Failed:', err.message);
  process.exit(1);
});