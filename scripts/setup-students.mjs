import PocketBase from 'pocketbase';
import crypto from 'node:crypto';
import { STUDENTS } from '../server/students.js';

const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD;
const pb = new PocketBase(PB_URL);

async function main() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('Set PB_ADMIN_EMAIL and PB_ADMIN_PASSWORD to an existing PocketBase superuser');
  }

  await pb.collection('_superusers').authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
  const pending = [];
  for (const student of STUDENTS) {
    const result = await pb.collection('users').getList(1, 1, {
      filter: `email = "${student.email}"`,
    });
    const record = result.items[0] || null;
    if (record?.activated) {
      console.log(`[students] ${student.username}: already activated; account left unchanged`);
      continue;
    }

    if (record?.activation_hash) {
      console.log(`[students] ${student.username}: activation already pending; use the previously issued code`);
      continue;
    }

    pending.push({
      student,
      record,
      code: crypto.randomBytes(8).toString('hex'),
      temporaryPassword: crypto.randomBytes(32).toString('base64url'),
    });
  }

  const activationCodes = [];
  for (const { student, record, code, temporaryPassword } of pending) {
    const fields = {
      password: temporaryPassword,
      passwordConfirm: temporaryPassword,
      emailVisibility: false,
      activated: false,
      activation_hash: crypto.createHash('sha256').update(code).digest('hex'),
      reset_hash: '',
      reset_expires: '',
    };
    if (record) {
      await pb.collection('users').update(record.id, fields);
    } else {
      await pb.collection('users').create({ email: student.email, ...fields });
    }
    activationCodes.push({ username: student.username, code });
  }

  if (activationCodes.length) {
    console.log('[students] Save these one-time activation codes and deliver each privately:');
    activationCodes.forEach(({ username, code }) => console.log(`${username}: ${code}`));
  }
}

main().catch((err) => {
  console.error('[students] Setup failed:', err.message);
  process.exit(1);
});
