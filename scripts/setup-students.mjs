import PocketBase from 'pocketbase';
import { STUDENTS } from '../server/students.js';

const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8087';
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD;
const pb = new PocketBase(PB_URL);

async function main() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('Set PB_ADMIN_EMAIL and PB_ADMIN_PASSWORD to an existing PocketBase superuser');
  }

  await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
  const pending = [];
  for (const student of STUDENTS) {
    const result = await pb.collection('users').getList(1, 1, {
      filter: `email = "${student.email}"`,
    });
    if (result.items.length) {
      console.log(`[students] ${student.username}: account already exists; password left unchanged`);
      continue;
    }

    const password = process.env[`STUDENT_PASSWORD_${student.key}`];
    if (!password || password.length < 8) {
      throw new Error(`Set a unique STUDENT_PASSWORD_${student.key} with at least 8 characters`);
    }
    pending.push({ student, password });
  }

  const passwords = pending.map(({ password }) => password);
  if (new Set(passwords).size !== passwords.length) {
    throw new Error('Each new student account must have a different password');
  }

  for (const { student, password } of pending) {
    await pb.collection('users').create({
      email: student.email,
      password,
      passwordConfirm: password,
      emailVisibility: false,
    });
    console.log(`[students] Created account for ${student.username}`);
  }
}

main().catch((err) => {
  console.error('[students] Setup failed:', err.message);
  process.exit(1);
});
