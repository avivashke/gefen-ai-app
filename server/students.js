export const STUDENTS = Object.freeze([
  { username: 'גפן', key: 'GEFEN', email: 'gefen@students.gefen.example.com', level: 'A1' },
  { username: 'בארי', key: 'BARRY', email: 'barry@students.gefen.example.com', level: 'A1' },
  { username: 'שקד', key: 'SHAKED', email: 'shaked@students.gefen.example.com', level: 'A1' },
  { username: 'מעיין', key: 'MAAYAN', email: 'maayan@students.gefen.example.com', level: 'A1' },
  { username: 'הדר', key: 'HADAR', email: 'hadar@students.gefen.example.com', level: 'A1' },
  { username: 'מיה', key: 'MIA', email: 'mia@students.gefen.example.com', level: 'A1' },
]);

export function studentByUsername(username) {
  const normalized = String(username || '').trim().toLocaleLowerCase('he');
  return STUDENTS.find((student) => student.username.toLocaleLowerCase('he') === normalized) || null;
}

export function studentByEmail(email) {
  const normalized = String(email || '').trim().toLowerCase();
  return STUDENTS.find((student) => student.email === normalized) || null;
}
