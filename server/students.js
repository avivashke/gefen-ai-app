export const STUDENTS = Object.freeze([
  { username: 'גפן', key: 'GEFEN', level: 'A1', levelStage: 'תחילת A1', gender: 'female', interests: ['ריקוד', 'חיות', 'טבע'] },
  { username: 'בארי', key: 'BARRY', level: 'A2', targetLevel: 'B1', levelStage: 'מתקרב ל-B1', gender: 'male', interests: ['כדורגל', 'ספורט', 'חיות', 'טבע'] },
  { username: 'שקד', key: 'SHAKED', level: 'A1', levelStage: 'תחילת A1', gender: 'female', interests: ['ריקוד', 'חיות', 'טבע'] },
  { username: 'מעיין', key: 'MAAYAN', level: 'A1', levelStage: 'תחילת A1', gender: 'male', interests: ['פוקימון'] },
  { username: 'הדר', key: 'HADAR', level: 'A2', targetLevel: 'B1', levelStage: 'מתקרב ל-B1', gender: 'male', interests: ['עובדות מעניינות', 'טבע', 'חיות', 'טרנדים'] },
  { username: 'מיה', key: 'MIA', level: 'A1', levelStage: 'תחילת A1', gender: 'female', interests: [] },
  { username: 'יולי', displayName: 'Yuli', key: 'YULI', level: 'B1', levelStage: 'B1', gender: 'female', nativeLanguage: 'Spanish', uiLanguage: 'es', learningLanguage: 'English', interests: ['cocina', 'negocios', 'arquitectura', 'moda'] },
  { username: 'אביב', displayName: 'Aviv', key: 'AVIV', level: 'A2', levelStage: 'A2', gender: 'male', nativeLanguage: 'Hebrew', uiLanguage: 'he', learningLanguage: 'French', interests: [] },
]);

export function studentByUsername(username) {
  const normalized = String(username || '').trim().toLocaleLowerCase('he');
  return STUDENTS.find((student) => student.username.toLocaleLowerCase('he') === normalized) || null;
}
