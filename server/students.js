export const STUDENTS = Object.freeze([
  { username: 'גפן', key: 'GEFEN', level: 'A1' },
  { username: 'בארי', key: 'BARRY', level: 'A1' },
  { username: 'שקד', key: 'SHAKED', level: 'A1' },
  { username: 'מעיין', key: 'MAAYAN', level: 'A1' },
  { username: 'הדר', key: 'HADAR', level: 'A1' },
  { username: 'מיה', key: 'MIA', level: 'A1' },
]);

export function studentByUsername(username) {
  const normalized = String(username || '').trim().toLocaleLowerCase('he');
  return STUDENTS.find((student) => student.username.toLocaleLowerCase('he') === normalized) || null;
}
