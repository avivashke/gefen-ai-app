/* ============================================================
   GEFEN ENGLISH COACH — curriculum (4 units) · dance & friends
   Level: A1 → A1+ (continues from "to be" and pronouns)
   ============================================================ */
const DEFAULT_UNITS = [
{
  id:'u1', n:1, icon:'🤝', color:'pink', cefr:'A1',
  title:'Be – Questions', he:'מכירות חברות חדשות',
  lead:'את כבר יודעת am / is / are. עכשיו לומדות לשאול שאלות – כדי להכיר חברות חדשות ולדבר על הסטודיו.',
  canDo:['לשאול "האם את רקדנית?"','לענות בקצרה: Yes, I am / No, she isn\'t','לשאול איפה ומי: Where is…? Who is…?'],
  fact:'כשרוקדים ביחד, המוח משחרר חומר שנקרא אוקסיטוצין – "הורמון החברות". לכן קל כל כך להתיידד בחוג ריקוד!',
  rules:[
    {id:'be-q', title:'שאלה עם Be – הפועל קופץ לפני הנושא', short:'Am / Is / Are + נושא ?',
     formula:'She is a dancer.  →  Is she a dancer?\nYou are my friend.  →  Are you my friend?',
     body:`באנגלית שואלים בלי מילת שאלה: פשוט <b>מחליפים מקום</b>. am / is / are עוברים להתחלה, והנושא אחריהם. תשובה קצרה: <b>Yes, she is.</b> או <b>No, she isn't.</b>`,
     examples:[{en:'Is she a dancer?',he:'האם היא רקדנית?'},{en:'Are you and Dana friends?',he:'האם את ודנה חברות?'},{en:"No, we aren't.",he:'לא, אנחנו לא.'}],
     mistake:'You are a dancer? → <b>Are you</b> a dancer?',
     hook:'am / is / are הם כמו רקדנית ראשית – בשאלה הם נכנסים ראשונים לבמה.'},
    {id:'be-wh', title:'Where / Who – מילות שאלה', short:'Where / Who + is / are',
     formula:'Where + is / are + נושא ?\nWho + is / are + נושא ?',
     body:`<b>Where</b> = איפה, <b>Who</b> = מי. מילת השאלה באה ראשונה, ואחריה am / is / are, ואז הנושא. אחד → <b>is</b>, יותר מאחד → <b>are</b>.`,
     examples:[{en:'Where is the studio?',he:'איפה הסטודיו?'},{en:'Who is your best friend?',he:'מי החברה הכי טובה שלך?'},{en:'Where are my shoes?',he:'איפה הנעליים שלי?'}],
     mistake:'Where <b>are</b> the studio? → Where <b>is</b> the studio?',
     hook:'שואלים "איפה?" – מחפשים מקום. שואלים "מי?" – מחפשים אדם.'}
  ],
  words:[
    {en:'friend',he:'חברה / חבר',pron:'FREND',ex:'She is my best friend.',exHe:'היא החברה הכי טובה שלי.'},
    {en:'dancer',he:'רקדנית',pron:'DAN-ser',ex:'My sister is a dancer.',exHe:'אחותי רקדנית.'},
    {en:'music',he:'מוזיקה',pron:'MYOO-zik',ex:'I love music.',exHe:'אני אוהבת מוזיקה.'},
    {en:'studio',he:'סטודיו',pron:'STOO-dee-oh',ex:'The dance studio is big.',exHe:'סטודיו הריקוד גדול.'},
    {en:'kind',he:'נחמדה / אדיבה',pron:'KAYND',ex:'My friend is kind.',exHe:'החברה שלי אדיבה.'},
    {en:'funny',he:'מצחיקה',pron:'FUN-ee',ex:'Dana is funny.',exHe:'דנה מצחיקה.'},
    {en:'together',he:'ביחד',pron:'too-GETH-er',ex:'We are together.',exHe:'אנחנו ביחד.'},
    {en:'teacher',he:'מורה',pron:'TEE-cher',ex:'The teacher is nice.',exHe:'המורה נחמדה.'},
    {en:'party',he:'מסיבה',pron:'PAR-tee',ex:'The party is on Friday.',exHe:'המסיבה ביום שישי.'},
    {en:'new',he:'חדשה',pron:'NYOO',ex:'She is a new friend.',exHe:'היא חברה חדשה.',skipGap:true}
  ],
  grammar:[
    {t:'mcq',id:'u1.x1',skill:'grammar',rule:'be-q',q:'___ she your best friend?',opts:['Is','Are','Am'],ans:'Is',why:'she = אחת, ולכן שואלים עם Is.',hint:'she הולכת עם is.'},
    {t:'mcq',id:'u1.x2',skill:'grammar',rule:'be-q',q:'___ you a dancer?',opts:['Are','Is','Am'],ans:'Are',why:'you הולך תמיד עם are.',hint:'you → are.'},
    {t:'type',id:'u1.x3',skill:'grammar',rule:'be-q',q:'תרגמי: "האם היא רקדנית?"',ans:['Is she a dancer'],why:'is עובר לפני she: Is she a dancer?',hint:'Is + she + a dancer.'},
    {t:'scr',id:'u1.x4',skill:'grammar',rule:'be-q',q:'בני את השאלה: האם את בסטודיו?',sentence:'Are you at the studio?',why:'Are מתחיל, ואחריו you.',hint:'מתחילים ב-Are.'},
    {t:'mcq',id:'u1.x5',skill:'grammar',rule:'be-wh',q:'Where ___ your dance shoes?',opts:['are','is','am'],ans:'are',why:'shoes = כמה, ולכן are.',hint:'נעליים = יותר מאחת.'},
    {t:'type',id:'u1.x6',skill:'grammar',rule:'be-wh',q:'השלימי: ___ is your teacher? (מי)',ans:['Who'],why:'מי = Who.',hint:'מתחילה ב-W.'},
    {t:'mcq',id:'u1.x7',skill:'grammar',rule:'be-q',q:'איזה משפט נכון?',opts:['Is she a dancer?','She is a dancer?','Does she a dancer?'],ans:'Is she a dancer?',why:'בשאלה am/is/are קופץ להתחלה.',hint:'מי בא ראשון?'}
  ]
},
{
  id:'u2', n:2, icon:'🎀', color:'purple', cefr:'A1',
  title:'have / has', he:'מה יש לי בתיק של הריקוד',
  lead:'באנגלית אומרים "אני מחזיקה" במקום "יש לי". לומדות מתי have ומתי has, ואיך אומרים "אין לי".',
  canDo:['לספר מה יש לך: I have…','לספר מה יש לחברה: She has…','לומר מה אין: She doesn\'t have…'],
  fact:'נעלי בלט מיוחדות נקראות "פוינט". רקדניות מקצועיות מחליפות זוג חדש אחרי כמה ימי ריקוד בלבד!',
  rules:[
    {id:'have-has', title:'have או has?', short:'I / you / we / they + have · he / she / it + has',
     formula:'I / you / we / they  +  have\nhe / she / it  +  has',
     body:`<b>have</b> = יש ל… עם I, you, we, they. עם <b>he, she, it</b> (או שם של אחת) אומרים <b>has</b>. זה כמו am ו-is: הפועל משתנה לפי מי מדבר.`,
     examples:[{en:'I have a new dress.',he:'יש לי שמלה חדשה.'},{en:'She has ballet shoes.',he:'יש לה נעלי בלט.'},{en:'We have a secret.',he:'יש לנו סוד.'}],
     mistake:'She <b>have</b> a phone. → She <b>has</b> a phone.',
     hook:'has מתחבר רק לבנות ולבנים יחידים: she has, he has, it has.'},
    {id:'have-neg', title:'אין לי – don\'t / doesn\'t have', short:"don't / doesn't + have",
     formula:"I / you / we / they  +  don't have\nhe / she / it  +  doesn't have",
     body:`כדי לומר "אין", מוסיפים <b>don't</b> (עם I, you, we, they) או <b>doesn't</b> (עם he, she, it). אחרי doesn't חוזרים ל-<b>have</b> – בלי s.`,
     examples:[{en:"I don't have a ticket.",he:'אין לי כרטיס.'},{en:"She doesn't have a camera.",he:'אין לה מצלמה.'},{en:"We don't have time.",he:'אין לנו זמן.'}],
     mistake:"She doesn't <b>has</b> a bag. → She doesn't <b>have</b> a bag.",
     hook:"doesn't לוקחת את ה-s, ולכן אחריה רק have."}
  ],
  words:[
    {en:'dress',he:'שמלה',pron:'DRES',ex:'I have a new dress.',exHe:'יש לי שמלה חדשה.'},
    {en:'shoes',he:'נעליים',pron:'SHOOZ',ex:'She has dance shoes.',exHe:'יש לה נעלי ריקוד.'},
    {en:'ticket',he:'כרטיס',pron:'TIK-it',ex:'We have a ticket.',exHe:'יש לנו כרטיס.'},
    {en:'phone',he:'טלפון',pron:'FOHN',ex:'My friend has a phone.',exHe:'לחברה שלי יש טלפון.'},
    {en:'picture',he:'תמונה',pron:'PIK-cher',ex:'I have a picture of us.',exHe:'יש לי תמונה שלנו.'},
    {en:'costume',he:'תלבושת',pron:'KOS-tyoom',ex:'She has a red costume.',exHe:'יש לה תלבושת אדומה.'},
    {en:'ballet',he:'בלט',pron:'BAL-ay',ex:'I have ballet on Monday.',exHe:'יש לי בלט ביום שני.'},
    {en:'camera',he:'מצלמה',pron:'KAM-ra',ex:'They have a camera.',exHe:'יש להן מצלמה.'},
    {en:'secret',he:'סוד',pron:'SEE-krit',ex:'We have a secret.',exHe:'יש לנו סוד.'},
    {en:'sister',he:'אחות',pron:'SIS-ter',ex:'I have a sister.',exHe:'יש לי אחות.'}
  ],
  grammar:[
    {t:'mcq',id:'u2.x1',skill:'grammar',rule:'have-has',q:'I ___ a new dress.',opts:['have','has','having'],ans:'have',why:'I → have.',hint:'I הולכת עם have.'},
    {t:'mcq',id:'u2.x2',skill:'grammar',rule:'have-has',q:'She ___ ballet shoes.',opts:['has','have','is'],ans:'has',why:'she → has.',hint:'she + has.'},
    {t:'mcq',id:'u2.x3',skill:'grammar',rule:'have-has',q:'Dana and I ___ a secret.',opts:['have','has','are'],ans:'have',why:'Dana and I = we → have.',hint:'Dana and I = we.'},
    {t:'type',id:'u2.x4',skill:'grammar',rule:'have-has',q:'תרגמי: "יש לי חברה טובה"',ans:['I have a good friend','I have a best friend'],why:'I have + a good friend.',hint:'I have…'},
    {t:'scr',id:'u2.x5',skill:'grammar',rule:'have-has',q:'בני את המשפט: יש לה טלפון חדש.',sentence:'She has a new phone.',why:'she → has.',hint:'מתחילים ב-She.'},
    {t:'mcq',id:'u2.x6',skill:'grammar',rule:'have-neg',q:'She ___ a camera.',opts:["doesn't have","don't have","doesn't has"],ans:"doesn't have",why:"she → doesn't, ואחריה have בלי s.",hint:"doesn't לוקחת את ה-s."},
    {t:'type',id:'u2.x7',skill:'grammar',rule:'have-has',q:'השלימי: My friend ___ (have) a picture of us.',ans:['has'],why:'My friend = she → has.',hint:'my friend = she.'}
  ]
},
{
  id:'u3', n:3, icon:'💃', color:'cyan', cefr:'A1+',
  title:'can · like + ing', he:'מה אני יודעת ואוהבת לעשות',
  lead:'לומדות לספר מה את יודעת לעשות (I can dance) ומה את אוהבת (I love dancing).',
  canDo:['לומר מה אפשר: I can spin','לומר מה אי אפשר: I can\'t swim','לספר על תחביבים: I love singing'],
  fact:'ריקוד הוא אחד התרגילים הכי מהנים לגוף: שעה של ריקוד שורפת כמו ריצה קלה – וגם משפרת מצב רוח!',
  rules:[
    {id:'can-form', title:'can – אני יכולה', short:'can / can\'t + פועל בסיס',
     formula:"Subject  +  can / can't  +  verb\nCan  +  subject  +  verb ?",
     body:`<b>can</b> = יכולה / יודעת. אחריו בא פועל רגיל <b>בלי s ובלי to</b>, לכל נושא. שלילה: <b>can't</b>. שאלה: <b>Can</b> קופץ להתחלה.`,
     examples:[{en:'I can spin very fast.',he:'אני יודעת להסתובב מהר מאוד.'},{en:"She can't swim.",he:'היא לא יודעת לשחות.'},{en:'Can you dance?',he:'את יודעת לרקוד?'}],
     mistake:'She <b>cans</b> sing. → She <b>can</b> sing. · I can <b>to</b> dance. → I can dance.',
     hook:'can הוא "חלק מילה" – הוא לא משתנה בכלל, לא מוסיפים לו s.'},
    {id:'like-ing', title:'like / love + ing', short:'like / love + פועל + ing',
     formula:'I like / love  +  verb + ing',
     body:`כשמספרים מה אוהבים לעשות, מוסיפים <b>ing</b> לפועל שאחרי like / love. עם he / she / it: <b>likes / loves</b>.`,
     examples:[{en:'I love dancing.',he:'אני אוהבת לרקוד.'},{en:'She likes singing.',he:'היא אוהבת לשיר.'},{en:'We like jumping.',he:'אנחנו אוהבות לקפוץ.'}],
     mistake:'I love <b>dance</b> with my friends. → I love <b>dancing</b> with my friends.',
     hook:'ing הוא ההפיכה של פועל ל"דבר שאוהבים לעשות".'}
  ],
  words:[
    {en:'sing',he:'לשיר',pron:'SING',ex:'I can sing.',exHe:'אני יודעת לשיר.'},
    {en:'jump',he:'לקפוץ',pron:'JUMP',ex:'She can jump high.',exHe:'היא יודעת לקפוץ גבוה.'},
    {en:'spin',he:'להסתובב',pron:'SPIN',ex:'I can spin fast.',exHe:'אני יודעת להסתובב מהר.'},
    {en:'clap',he:'למחוא כפיים',pron:'KLAP',ex:'We clap to the music.',exHe:'אנחנו מוחאות כפיים למוזיקה.'},
    {en:'smile',he:'לחייך',pron:'SMAYL',ex:'I smile when I dance.',exHe:'אני מחייכת כשאני רוקדת.'},
    {en:'stage',he:'במה',pron:'STEYJ',ex:'She is on the stage.',exHe:'היא על הבמה.'},
    {en:'step',he:'צעד',pron:'STEP',ex:'This step is easy.',exHe:'הצעד הזה קל.'},
    {en:'song',he:'שיר',pron:'SONG',ex:'I love this song.',exHe:'אני אוהבת את השיר הזה.'},
    {en:'move',he:'לזוז',pron:'MOOV',ex:'We can move together.',exHe:'אנחנו יכולות לזוז ביחד.'},
    {en:'learn',he:'ללמוד',pron:'LURN',ex:'I learn a new dance.',exHe:'אני לומדת ריקוד חדש.'}
  ],
  grammar:[
    {t:'mcq',id:'u3.x1',skill:'grammar',rule:'can-form',q:'She can ___ very fast.',opts:['spin','spins','spinning'],ans:'spin',why:'אחרי can – פועל בסיס, בלי s.',hint:'can לא משתנה.'},
    {t:'mcq',id:'u3.x2',skill:'grammar',rule:'can-form',q:'Can she jump high? Yes, she ___.',opts:['can','is','does'],ans:'can',why:'עונים עם אותו עוזר: Yes, she can.',hint:'השאלה התחילה ב-Can.'},
    {t:'type',id:'u3.x3',skill:'grammar',rule:'like-ing',q:'תרגמי: "אני אוהבת לרקוד"',ans:['I love dancing','I like dancing'],why:'love / like + dancing.',hint:'I love + dance + ing.'},
    {t:'mcq',id:'u3.x4',skill:'grammar',rule:'like-ing',q:'I love ___ with my friends.',opts:['dancing','dance','dances'],ans:'dancing',why:'אחרי love – פועל עם ing.',hint:'צריך ing.'},
    {t:'scr',id:'u3.x5',skill:'grammar',rule:'can-form',q:'בני את המשפט: אנחנו יכולות לשיר ביחד.',sentence:'We can sing together.',why:'We + can + sing + together.',hint:'מתחילים ב-We.'},
    {t:'mcq',id:'u3.x6',skill:'grammar',rule:'can-form',q:'איזה משפט נכון?',opts:['She can sing.','She cans sing.','She can sings.'],ans:'She can sing.',why:'can בלי s, והפועל אחריו בלי s.',hint:'שתי ה-s מיותרות.'},
    {t:'type',id:'u3.x7',skill:'grammar',rule:'like-ing',q:'השלימי: I like ___ (jump) on the stage.',ans:['jumping'],why:'like + jumping.',hint:'jump + ing.'}
  ]
},
{
  id:'u4', n:4, icon:'🗓️', color:'gold', cefr:'A1+',
  title:'Present Simple – my week', he:'השבוע שלי עם הריקוד',
  lead:'לומדות לספר על שגרה: מה עושים כל יום ובסוף השבוע. עם he / she נוסף s.',
  canDo:['לספר על שגרה: I dance every day','לספר על חברה: She dances on Monday','להשתמש ב-always / sometimes'],
  fact:'רקדנית מקצועית מתאמנת כמעט כל יום. אבל גם 15 דקות ביום מספיקות כדי להשתפר – באנגלית וגם בריקוד!',
  rules:[
    {id:'ps-base', title:'שגרה עם I / you / we / they', short:'I / you / we / they + פועל',
     formula:'I / you / we / they  +  verb',
     body:`כדי לספר על מה שקורה <b>כל יום</b>, משתמשים בפועל הבסיסי. עם <b>I, you, we, they</b> הפועל לא משתנה בכלל. מילות זמן: <b>every day</b>, <b>on Monday</b>, <b>after school</b>.`,
     examples:[{en:'I practice every day.',he:'אני מתאמנת כל יום.'},{en:'We meet after school.',he:'אנחנו נפגשות אחרי בית ספר.'},{en:'They listen to music.',he:'הן מקשיבות למוזיקה.'}],
     mistake:'I <b>am</b> practice every day. → I practice every day.',
     hook:'בלי am ובלי is – הפועל לבד מספיק.'},
    {id:'ps-s', title:'he / she מקבלות s', short:'he / she / it + פועל + s',
     formula:'he / she / it  +  verb + s',
     body:`כשהנושא הוא <b>he, she, it</b> (או שם של אחת), מוסיפים <b>s</b> לפועל: dance → dances. פועלים מיוחדים: <b>go → goes</b>, <b>watch → watches</b>.`,
     examples:[{en:'Dana dances every day.',he:'דנה רוקדת כל יום.'},{en:'She meets her friends on Friday.',he:'היא פוגשת את החברות שלה ביום שישי.'},{en:'My sister goes to ballet.',he:'אחותי הולכת לבלט.'}],
     mistake:'She <b>dance</b> every day. → She <b>dances</b> every day.',
     hook:'s היא כמו סרט של כוכבת: רק she / he / it מקבלות אותו.'}
  ],
  words:[
    {en:'practice',he:'להתאמן',pron:'PRAK-tis',ex:'We practice every day.',exHe:'אנחנו מתאמנות כל יום.'},
    {en:'class',he:'שיעור / חוג',pron:'KLAS',ex:'She has a dance class.',exHe:'יש לה חוג ריקוד.'},
    {en:'lesson',he:'שיעור',pron:'LES-en',ex:'The lesson starts at four.',exHe:'השיעור מתחיל בארבע.'},
    {en:'weekend',he:'סוף שבוע',pron:'WEEK-end',ex:'We dance on the weekend.',exHe:'אנחנו רוקדות בסוף השבוע.'},
    {en:'always',he:'תמיד',pron:'AWL-weyz',ex:'I always smile on stage.',exHe:'אני תמיד מחייכת על הבמה.'},
    {en:'sometimes',he:'לפעמים',pron:'SUM-taymz',ex:'We sometimes watch videos.',exHe:'לפעמים אנחנו רואות סרטונים.'},
    {en:'listen',he:'להקשיב',pron:'LIS-en',ex:'I listen to music.',exHe:'אני מקשיבה למוזיקה.'},
    {en:'wear',he:'ללבוש',pron:'WER',ex:'She wears a pink dress.',exHe:'היא לובשת שמלה ורודה.'},
    {en:'meet',he:'להיפגש',pron:'MEET',ex:'We meet at the studio.',exHe:'אנחנו נפגשות בסטודיו.'},
    {en:'watch',he:'לצפות',pron:'WOCH',ex:'I watch dance videos.',exHe:'אני צופה בסרטוני ריקוד.'}
  ],
  grammar:[
    {t:'mcq',id:'u4.x1',skill:'grammar',rule:'ps-s',q:'My friend ___ in a dance class.',opts:['dances','dance','dancing'],ans:'dances',why:'My friend = she → dances.',hint:'she מקבלת s.'},
    {t:'mcq',id:'u4.x2',skill:'grammar',rule:'ps-base',q:'We ___ together every Friday.',opts:['practice','practices','are practice'],ans:'practice',why:'we → פועל בסיס.',hint:'we לא מקבלת s.'},
    {t:'type',id:'u4.x3',skill:'grammar',rule:'ps-s',q:'השלימי: She ___ (like) pop music.',ans:['likes'],why:'she → likes.',hint:'like + s.'},
    {t:'scr',id:'u4.x4',skill:'grammar',rule:'ps-base',q:'בני את המשפט: אני מתאמנת עם חברות כל יום.',sentence:'I practice with my friends every day.',why:'I + practice + with my friends + every day.',hint:'מתחילים ב-I.'},
    {t:'mcq',id:'u4.x5',skill:'grammar',rule:'ps-base',q:'I ___ to music after school.',opts:['listen','listens','listening'],ans:'listen',why:'I → listen.',hint:'I בלי s.'},
    {t:'type',id:'u4.x6',skill:'grammar',rule:'ps-s',q:'תרגמי: "היא רוקדת כל יום"',ans:['She dances every day'],why:'she → dances.',hint:'She dance+s…'},
    {t:'mcq',id:'u4.x7',skill:'grammar',rule:'ps-s',q:'איזה משפט נכון?',opts:['She meets her friends on Friday.','She meet her friends on Friday.','She is meet her friends on Friday.'],ans:'She meets her friends on Friday.',why:'she → meets, ובלי is.',hint:'she מקבלת s, ובלי is.'}
  ]
}
];
function defaultUnitsForProfile(){
  const lang=CURRENT_LEARNER_PROFILE.learningLanguage||'English';
  const level=CURRENT_LEARNER_PROFILE.level||'A1';
  const ui=CURRENT_LEARNER_PROFILE.uiLanguage||'he';
  if(lang==='French'){
    return [
      {
        id:'u1', n:1, icon:'🥐', color:'pink', cefr:level,
        title:'La vie quotidienne et les projets',
        he:'חיי היומיום ותוכניות (צרפתית A2)',
        lead:'ביחידה הזו מתרגלים שיחות יומיומיות בצרפתית ברמת A2: איך להציג את עצמך, לספר על השגרה ולדבר על תוכניות לעתיד הקרוב עם aller + פועל.',
        canDo:['לספר על השגרה היומית והעבודה בצרפתית','לדבר על תוכניות קרובות עם העתיד הקרוב (Futur proche)','לשאול שאלות מנומסות בחיי היומיום'],
        fact:'צרפתית מדוברת ב-5 יבשות על ידי יותר מ-320 מיליון בני אדם ברחבי העולם.',
        rules:[
          {id:'fr-futur-proche', title:'העתיד הקרוב – Futur proche (aller + infinitif)', short:'je vais / tu vas / il va + פועל בצורת המקור',
           formula:'Je vais + פועל במקור (infinitif)\nTu vas + פועל במקור\nIl / Elle / On va + פועל במקור\nNous allons / Vous allez / Ils vont + פועל במקור',
           body:'כדי לדבר בצרפתית על תוכנית קרובה ("אני הולך/ת לעשות"), מטים את הפועל <b>aller</b> בהווה ומוסיפים אחריו את הפועל בצורת המקור (ללא הטיה).',
           examples:[{en:'Ce soir, je vais cuisiner avec mes amis.',he:'הערב אני הולך לבשל עם החברים שלי.'},{en:'Demain, nous allons visiter un musée à Paris.',he:'מחר אנחנו הולכים לבקר במוזיאון בפריז.'},{en:'Est-ce que tu vas travailler demain ?',he:'האם אתה הולך לעבוד מחר?'}],
           mistake:'Je vais <b>travaille</b>. → Je vais <b>travailler</b> (הפועל השני נשאר בצורת המקור).',
           hook:'aller בהווה הוא המנוע, והפועל שאחריו נשאר שלם עם סיומת er / ir / re.'},
          {id:'fr-questions-a2', title:'שאלות מנומסות עם Est-ce que ואינטונציה', short:'Est-ce que + משפט רגיל ?',
           formula:'Tu habites ici. → Est-ce que tu habites ici ?\nOù est-ce que tu travailles ?',
           body:'ברמת A2 קל מאוד לבנות שאלות: מוסיפים <b>Est-ce que</b> בתחילת המשפט (או אחרי מילת שאלה כמו Où / Quand / Pourquoi), וסדר המילים נשאר רגיל.',
           examples:[{en:'Où est-ce que tu habites ?',he:'איפה אתה גר?'},{en:'Quand est-ce que le train part ?',he:'מתי הרכבת יוצאת?'},{en:'Pourquoi est-ce que tu apprends le français ?',he:'למה אתה לומד צרפתית?'}],
           mistake:'Où est-ce que <b>habites-tu</b> ? → Où est-ce que <b>tu habites</b> ?',
           hook:'אחרי Est-ce que לא הופכים את הסדר – פשוט נושא ואז פועל.'}
        ],
        words:[
          {en:'quotidien',he:'יומיומי / שגרה',pron:'ko-tee-DYEN',ex:'Mon travail quotidien est très intéressant.',exHe:'העבודה היומיומית שלי מעניינת מאוד.'},
          {en:'projet',he:'תוכנית / פרויקט',pron:'pro-ZHEH',ex:'J\'ai un nouveau projet pour le week-end.',exHe:'יש לי תוכנית חדשה לסוף השבוע.'},
          {en:'quartier',he:'שכונה',pron:'kar-TYEH',ex:'Mon quartier est calme et agréable.',exHe:'השכונה שלי שקטה ונעימה.'},
          {en:'rendez-vous',he:'פגישה / תור',pron:'rahn-day-VOO',ex:'J\'ai un rendez-vous à dix heures.',exHe:'יש לי פגישה בשעה עשר.',skipGap:true},
          {en:'ensemble',he:'ביחד',pron:'ahn-SAHM-bl',ex:'Nous allons déjeuner ensemble.',exHe:'אנחנו הולכים לאכול צהריים ביחד.'},
          {en:'bientôt',he:'בקרוב',pron:'byen-TOH',ex:'Je vais partir bientôt.',exHe:'אני הולך לצאת בקרוב.'},
          {en:'choisir',he:'לבחור',pron:'shwa-ZEER',ex:'Tu vas choisir quel film ?',exHe:'איזה סרט אתה הולך לבחור?'}
        ],
        reading:{
          title:'סוף שבוע בפריז',
          passage:'Samedi matin, Aviv va retrouver son ami Marc dans un petit café du quartier. Ensemble, ils vont organiser leur projet pour le week-end. D\'abord, ils vont visiter une exposition de photographie, puis ils vont déjeuner près de la rivière. Dimanche, Aviv va se reposer et préparer sa semaine de travail.',
          vocabulary:[
            {en:'samedi',he:'יום שבת'},{en:'matin',he:'בוקר'},{en:'retrouver',he:'לפגוש'},{en:'quartier',he:'שכונה'},
            {en:'ensemble',he:'ביחד'},{en:'projet',he:'תוכנית / פרויקט'},{en:'exposition',he:'תערוכה'},{en:'déjeuner',he:'לאכול צהריים'},
            {en:'rivière',he:'נהר'},{en:'dimanche',he:'יום ראשון'},{en:'semaine',he:'שבוע'},{en:'travail',he:'עבודה'}
          ],
          questions:[
            {q:'איפה אביב הולך לפגוש את מארק בשבת בבוקר?',opts:['בבית קפה קטן בשכונה','בתחנת הרכבת המרכזית','במשרד שלו'],ans:'בבית קפה קטן בשכונה',why:'בקטע כתוב: dans un petit café du quartier.'},
            {q:'מה הם הולכים לעשות אחרי התערוכה?',opts:['לאכול צהריים ליד הנהר','לחזור מיד הביתה','ללכת לקולנוע'],ans:'לאכול צהריים ליד הנהר',why:'בקטע כתוב: puis ils vont déjeuner près de la rivière.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u1.x1',skill:'grammar',rule:'fr-futur-proche',q:'השלם בעתיד הקרוב: Demain, je ___ visiter le musée.',opts:['vais','vas','va'],ans:'vais',why:'עם je משתמשים ב-vais ואחריו פועל במקור (visiter).',hint:'je → vais.'},
          {t:'mcq',id:'u1.x2',skill:'grammar',rule:'fr-futur-proche',q:'Nous ___ déjeuner ensemble à midi.',opts:['allons','allez','vont'],ans:'allons',why:'עם nous הצורה של aller היא allons.',hint:'nous → allons.'},
          {t:'type',id:'u1.x3',skill:'grammar',rule:'fr-futur-proche',q:'תרגם לצרפתית: "אני הולך לבחור" (Je + aller + choisir)',ans:['Je vais choisir'],why:'Je vais + הפועל במקור choisir.',hint:'Je vais + choisir.'},
          {t:'scr',id:'u1.x4',skill:'grammar',rule:'fr-questions-a2',q:'סדר את השאלה בצרפתית: איפה אתה גר?',sentence:'Où est-ce que tu habites ?',ans:['Où est-ce que tu habites ?'],why:'מילת שאלה Où + est-ce que + נושא ופועל.',hint:'מתחילים ב-Où.'},
          {t:'gap',id:'u1.x5',skill:'grammar',rule:'fr-futur-proche',q:'השלם את הפועל בצורת המקור (לעבוד – travailler):',sentence:'Demain, elle va ___ au bureau.',ans:['travailler'],why:'אחרי va הפועל בא בצורת המקור: travailler.',hint:'מסתיים ב-er.'}
        ]
      },
      {
        id:'u2', n:2, icon:'📖', color:'purple', cefr:level,
        title:'Souvenirs et passé composé',
        he:'חוויות וזמן עבר (Passé composé)',
        lead:'ברמת A2 חשוב לדעת לספר מה עשית אתמול או בחופשה האחרונה. ביחידה הזו נלמד את זמן העבר Passé composé עם הפועל העוזר avoir.',
        canDo:['לספר על פעולות שהסתיימו בעבר עם Passé composé','להשתמש בביטויי זמן בעבר: hier, la semaine dernière','לספר על חוויה או טיול קצר בצרפתית'],
        fact:'בצרפתית מדוברת משתמשים כמעט תמיד ב-Passé composé כדי לספר על אירועים בעבר.',
        rules:[
          {id:'fr-passe-avoir', title:'זמן עבר עם avoir – Passé composé', short:'j\'ai / tu as / il a + participe passé (é / i / u)',
           formula:'J\'ai parlé (דיברתי)\nTu as fini (סיימת)\nIl / Elle a vu (הוא/היא ראה/ראתה)\nNous avons visité (ביקרנו)',
           body:'זמן העבר מורכב משתי מילים: הפועל העוזר <b>avoir</b> בהווה (j\'ai, tu as, il a, nous avons, vous avez, ils ont) + צורת העבר של הפועל. פעלים שמסתיימים ב-<b>er</b> מקבלים <b>é</b> (כמו visiter → visité).',
           examples:[{en:'Hier, j\'ai visité une belle ville.',he:'אתמול ביקרתי בעיר יפה.'},{en:'Nous avons goûté un plat délicieux.',he:'טעמנו מנה טעימה מאוד.'},{en:'Tu as regardé le match hier soir ?',he:'צפית במשחק אתמול בערב?'}],
           mistake:'J\'ai <b>visiter</b>. → J\'ai <b>visité</b> (עם צורת עבר ב-é).',
           hook:'שומעים אותו דבר (visiter / visité), אבל אחרי j\'ai כותבים עם é!'}
        ],
        words:[
          {en:'hier',he:'אתמול',pron:'ee-YAIR',ex:'Hier, j\'ai travaillé toute la journée.',exHe:'אתמול עבדתי כל היום.'},
          {en:'dernier',he:'אחרון / שעבר',pron:'dair-NYEH',ex:'Le week-end dernier, nous avons voyagé.',exHe:'בסוף השבוע שעבר טיילנו.'},
          {en:'goûter',he:'לטעום',pron:'goo-TEH',ex:'J\'ai goûté une soupe française.',exHe:'טעמתי מרק צרפתי.',skipGap:true},
          {en:'découvrir',he:'לגלות',pron:'day-koo-VREER',ex:'Nous avons découvert un bon restaurant.',exHe:'גילינו מסעדה טובה.',skipGap:true},
          {en:'oublier',he:'לשכוח',pron:'oo-blee-YEH',ex:'Il a oublié ses clés sur la table.',exHe:'הוא שכח את המפתחות שלו על השולחן.',skipGap:true},
          {en:'souvenir',he:'זיכרון / מזכרת',pron:'soov-NEER',ex:'C\'est un très bon souvenir.',exHe:'זה זיכרון טוב מאוד.'},
          {en:'spectacle',he:'מופע / הצגה',pron:'spek-TAKL',ex:'Elles ont adoré le spectacle.',exHe:'הן אהבו מאוד את המופע.'}
        ],
        reading:{
          title:'ערב תרבות בליון',
          passage:'La semaine dernière, Aviv a passé deux jours à Lyon. Le premier jour, il a marché dans le vieux centre et il a découvert une petite librairie. Le soir, il a dîné dans un bouchon traditionnel et il a goûté une spécialité locale. Il a aussi assisté à un spectacle de musique.',
          vocabulary:[
            {en:'semaine',he:'שבוע'},{en:'passé',he:'בילה / עבר'},{en:'jours',he:'ימים'},{en:'marché',he:'הלך / צעד'},
            {en:'vieux',he:'עתיק / ישן'},{en:'découvert',he:'גילה'},{en:'librairie',he:'חנות ספרים'},{en:'soir',he:'ערב'},
            {en:'dîné',he:'אכל ארוחת ערב'},{en:'goûté',he:'טעם'},{en:'spectacle',he:'מופע'},{en:'musique',he:'מוזיקה'}
          ],
          questions:[
            {q:'מה אביב גילה במרכז העתיק של ליון?',opts:['חנות ספרים קטנה','מוזיאון לאמנות מודרנית','פארק גדול'],ans:'חנות ספרים קטנה',why:'בקטע כתוב: il a découvert une petite librairie.'},
            {q:'מה הוא עשה בערב בנוסף לארוחת הערב?',opts:['נכח במופע מוזיקה','נסע ברכבת לפריז','קנה בגדים'],ans:'נכח במופע מוזיקה',why:'בקטע כתוב: Il a aussi assisté à un spectacle de musique.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u2.x1',skill:'grammar',rule:'fr-passe-avoir',q:'Hier, j\'___ visité le vieux quartier.',opts:['ai','as','a'],ans:'ai',why:'עם je הפועל העוזר avoir הוא ai → j\'ai visité.',hint:'j\' + ai.'},
          {t:'mcq',id:'u2.x2',skill:'grammar',rule:'fr-passe-avoir',q:'Nous avons ___ un spectacle magnifique.',opts:['regardé','regarder','regardons'],ans:'regardé',why:'אחרי avons באה צורת העבר (participe passé) עם é.',hint:'מסתיים ב-é.'},
          {t:'type',id:'u2.x3',skill:'grammar',rule:'fr-passe-avoir',q:'כתוב בצרפתית: "אתמול עבדתי" (Hier, j\'ai + travaillé)',ans:['Hier, j\'ai travaillé','Hier j\'ai travaillé'],why:'Hier, j\'ai travaillé.',hint:'Hier, j\'ai travaillé.'},
          {t:'scr',id:'u2.x4',skill:'grammar',rule:'fr-passe-avoir',q:'סדר את המשפט: גילינו מסעדה טובה.',sentence:'Nous avons découvert un bon restaurant.',ans:['Nous avons découvert un bon restaurant.'],why:'Nous avons + découvert + un bon restaurant.',hint:'מתחילים ב-Nous.'},
          {t:'gap',id:'u2.x5',skill:'grammar',rule:'fr-passe-avoir',q:'השלם את הפועל העוזר המתאים ל-tu:',sentence:'Est-ce que tu ___ aimé le film ?',ans:['as'],why:'עם tu משתמשים ב-as: tu as aimé.',hint:'tu → as.'}
        ]
      },
      {
        id:'u3', n:3, icon:'🍽️', color:'cyan', cefr:level,
        title:'Au restaurant et faire des achats',
        he:'במסעדה וקניות (כמויות ובקשות מנומסות)',
        lead:'לומדים להזמין אוכל ושתייה בנימוס עם je voudrais, ולהשתמש בביטויי כמות ומילות יחס (du, de la, beaucoup de) ברמת A2.',
        canDo:['להזמין בנימוס במסעדה או בחנות עם Je voudrais…','להשתמש ב-du / de la / des ובכמויות (beaucoup de, un peu de)','לשאול על מחירים, תפריט והמלצות'],
        fact:'בצרפת נהוג תמיד לפתוח פנייה למוכר או למלצר במילה Bonjour לפני שמבקשים משהו.',
        rules:[
          {id:'fr-voudrais', title:'בקשה מנומסת – Je voudrais וביטויי כמות', short:'Je voudrais + שם עצם / פועל · du / de la / un peu de',
           formula:'Je voudrais un café, s\'il vous plaît.\nJe prends du pain et de la salade.\nJe bois un peu d\'eau / beaucoup de thé.',
           body:'במקום לומר Je veux ("אני רוצה" – ישיר מדי), אומרים <b>Je voudrais</b> ("הייתי רוצה"). כשמדברים על אוכל כמותי לא ספיר משתמשים ב-<b>du</b> (זכר), <b>de la</b> (נקבה), וכשיש תיאור כמות כמו <b>un peu de</b> (קצת) או <b>beaucoup de</b> (הרבה) משתמשים רק ב-<b>de</b>.',
           examples:[{en:'Bonjour, je voudrais réserver une table pour deux personnes.',he:'שלום, הייתי רוצה להזמין שולחן לשני אנשים.'},{en:'Je prends du poisson avec un peu de riz.',he:'אני לוקח דג עם קצת אורז.'},{en:'L\'addition, s\'il vous plaît.',he:'החשבון, בבקשה.'}],
           mistake:'beaucoup <b>des</b> fruits → beaucoup <b>de</b> fruits.',
           hook:'אחרי כמות (beaucoup / un peu / trop) תמיד בא de פשוט!'}
        ],
        words:[
          {en:'addition',he:'חשבון (במסעדה)',pron:'a-dee-SYON',ex:'L\'addition, s\'il vous plaît.',exHe:'החשבון, בבקשה.'},
          {en:'commander',he:'להזמין',pron:'ko-mahn-DEH',ex:'Nous sommes prêts à commander.',exHe:'אנחנו מוכנים להזמין.'},
          {en:'plat',he:'מנה',pron:'plah',ex:'Quel est le plat du jour ?',exHe:'מהי מנת היום?'},
          {en:'conseiller',he:'להמליץ / לייעץ',pron:'kon-say-YEH',ex:'Qu\'est-ce que vous me conseillez ?',exHe:'על מה אתה ממליץ לי?',skipGap:true},
          {en:'morceau',he:'חתיכה / פרוסה',pron:'mor-SOH',ex:'Je voudrais un morceau de fromage.',exHe:'הייתי רוצה חתיכת גבינה.'},
          {en:'bouteille',he:'בקבוק',pron:'boo-TAY',ex:'Une bouteille d\'eau fraîche, s\'il vous plaît.',exHe:'בקבוק מים קרים, בבקשה.'},
          {en:'marché',he:'שוק',pron:'mar-SHEH',ex:'J\'achète des légumes frais au marché.',exHe:'אני קונה ירקות טריים בשוק.'}
        ],
        reading:{
          title:'ארוחת צהריים בביסטרו',
          passage:'À midi, Aviv entre dans un bistrot animé. Le serveur apporte la carte et présente le plat du jour : du saumon grillé avec des légumes du marché. Aviv dit : « Bonjour, je voudrais le plat du jour et une carafe d\'eau, s\'il vous plaît. » À la fin du repas, il demande un café et l\'addition.',
          vocabulary:[
            {en:'midi',he:'צהריים'},{en:'bistrot',he:'ביסטרו / מסעדה'},{en:'serveur',he:'מלצר'},{en:'carte',he:'תפריט'},
            {en:'plat',he:'מנה'},{en:'saumon',he:'סלמון'},{en:'légumes',he:'ירקות'},{en:'marché',he:'שוק'},
            {en:'voudrais',he:'הייתי רוצה'},{en:'carafe',he:'קנקן'},{en:'repas',he:'ארוחה'},{en:'addition',he:'חשבון'}
          ],
          questions:[
            {q:'מהי מנת היום שהמלצר מציג?',opts:['סלמון בגריל עם ירקות מהשוק','מרק בצל וגבינה','עוף עם תפוחי אדמה'],ans:'סלמון בגריל עם ירקות מהשוק',why:'בקטע כתוב: du saumon grillé avec des légumes du marché.'},
            {q:'מה אביב מבקש בסוף הארוחה?',opts:['קפה ואת החשבון','קינוח שוקולד','עוד קנקן מים'],ans:'קפה ואת החשבון',why:'בקטע כתוב: il demande un café et l\'addition.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u3.x1',skill:'grammar',rule:'fr-voudrais',q:'איך מבקשים בנימוס: "הייתי רוצה להזמין שולחן"?',opts:['Je voudrais réserver une table.','Je veux réserver une table.','J\'ai réservé une table.'],ans:'Je voudrais réserver une table.',why:'Je voudrais היא הצורה המנומסת לבקשה.',hint:'Je voudrais…'},
          {t:'mcq',id:'u3.x2',skill:'grammar',rule:'fr-voudrais',q:'Il achète beaucoup ___ fruits au marché.',opts:['de','des','du'],ans:'de',why:'אחרי ביטוי כמות כמו beaucoup משתמשים ב-de.',hint:'beaucoup + de.'},
          {t:'type',id:'u3.x3',skill:'grammar',rule:'fr-voudrais',q:'כתוב בצרפתית: "החשבון, בבקשה"',ans:['L\'addition, s\'il vous plaît','L\'addition s\'il vous plaît'],why:'L\'addition, s\'il vous plaît.',hint:'L\'addition…'},
          {t:'scr',id:'u3.x4',skill:'grammar',rule:'fr-voudrais',q:'סדר את המשפט: מהי מנת היום?',sentence:'Quel est le plat du jour ?',ans:['Quel est le plat du jour ?'],why:'Quel est + le plat du jour ?',hint:'מתחילים ב-Quel.'},
          {t:'gap',id:'u3.x5',skill:'grammar',rule:'fr-voudrais',q:'השלם את המילה החסרה לבקשה מנומסת:',sentence:'Bonjour, je ___ un café, s\'il vous plaît.',ans:['voudrais'],why:'Je voudrais = הייתי רוצה.',hint:'מתחיל ב-v.'}
        ]
      },
      {
        id:'u4', n:4, icon:'🚄', color:'gold', cefr:level,
        title:'Voyages, déplacements et comparaisons',
        he:'נסיעות, התמצאות והשוואות',
        lead:'ביחידה הרביעית לומדים להתמצא בעיר ובתחבורה, להשוות בין אפשרויות עם plus / moins / aussi… que, ולתת או לבקש הכוונה.',
        canDo:['להשוות בין מקומות ואמצעי תחבורה (plus rapide que…)','לבקש ולהבין הוראות הגעה בעיר','לקנות כרטיסים ולהסתדר בתחנת הרכבת'],
        fact:'רכבת ה-TGV הצרפתית מגיעה למהירות של 320 קמ"ש ומחברת בין ערים מרכזיות תוך שעתיים.',
        rules:[
          {id:'fr-comparatif', title:'השוואה בצרפתית – Le comparatif', short:'plus / moins / aussi + תואר + que',
           formula:'Le train est plus rapide que la voiture. (הרכבת מהירה יותר מהמכונית)\nLe bus est moins cher que le taxi. (האוטובוס זול יותר מהמונית)\nCe quartier est aussi calme que l\'autre. (השכונה הזו שקטה כמו האחרת)',
           body:'כדי להשוות בין שני דברים בצרפתית: שמים <b>plus</b> (יותר), <b>moins</b> (פחות) או <b>aussi</b> (אותו דבר) לפני התואר, ואחריו את המילה <b>que</b> (מאשר / כמו). יוצא דופן חשוב: טוב יותר = <b>meilleur(e) que</b>.',
           examples:[{en:'Le TGV est plus rapide que le bus.',he:'הרכבת המהירה מהירה יותר מהאוטובוס.'},{en:'Ce billet est moins cher aujourd\'hui.',he:'הכרטיס הזה זול יותר היום.'},{en:'La boulangerie est tout droit, puis à gauche.',he:'המאפייה ישר, ואז שמאלה.'}],
           mistake:'plus <b>bon</b> que → <b>meilleur</b> que.',
           hook:'plus… que (+) · moins… que (-) · aussi… que (=).'}
        ],
        words:[
          {en:'gare',he:'תחנת רכבת',pron:'gahr',ex:'La gare est à dix minutes à pied.',exHe:'תחנת הרכבת נמצאת במרחק עשר דקות הליכה.'},
          {en:'billet',he:'כרטיס נסיעה',pron:'bee-YEH',ex:'J\'ai réservé un billet de train.',exHe:'הזמנתי כרטיס רכבת.'},
          {en:'rapide',he:'מהיר',pron:'ra-PEED',ex:'Le métro est plus rapide que le bus.',exHe:'המטרו מהיר יותר מהאוטובוס.'},
          {en:'cher',he:'יקר',pron:'shair',ex:'Ce trajet est moins cher le matin.',exHe:'הנסיעה הזו זולה יותר בבוקר.'},
          {en:'droite',he:'ימין / ימינה',pron:'drwat',ex:'Tournez à droite après le pont.',exHe:'פנו ימינה אחרי הגשר.'},
          {en:'gauche',he:'שמאל / שמאלה',pron:'gohsh',ex:'La pharmacie est à gauche de la banque.',exHe:'בית המרקחת נמצא משמאל לבנק.'},
          {en:'horaire',he:'לוח זמנים',pron:'o-RAIR',ex:'Je vérifie les horaires des trains.',exHe:'אני בודק את לוחות הזמנים של הרכבות.',skipGap:true}
        ],
        reading:{
          title:'נסיעה ברכבת המהירה',
          passage:'Pour aller de Paris à Marseille, Aviv compare les moyens de transport. L\'avion est rapide, mais l\'aéroport est loin du centre. Le train TGV est plus pratique parce que la gare est au cœur de la ville. De plus, le billet de train est moins cher s\'il réserve à l\'avance.',
          vocabulary:[
            {en:'aller',he:'לנסוע / ללכת'},{en:'compare',he:'משווה'},{en:'transport',he:'תחבורה'},{en:'avion',he:'מטוס'},
            {en:'rapide',he:'מהיר'},{en:'loin',he:'רחוק'},{en:'pratique',he:'נוח / שימושי'},{en:'gare',he:'תחנת רכבת'},
            {en:'ville',he:'עיר'},{en:'billet',he:'כרטיס'},{en:'cher',he:'יקר'},{en:'avance',he:'מראש'}
          ],
          questions:[
            {q:'למה רכבת ה-TGV נוחה יותר עבור אביב?',opts:['כי תחנת הרכבת נמצאת בלב העיר','כי היא חינמית בסופי שבוע','כי אין צורך בכרטיס'],ans:'כי תחנת הרכבת נמצאת בלב העיר',why:'בקטע כתוב: parce que la gare est au cœur de la ville.'},
            {q:'מתי כרטיס הרכבת זול יותר?',opts:['כשמזמינים מראש','כשקונים במטוס','רק בלילה'],ans:'כשמזמינים מראש',why:'בקטע כתוב: moins cher s\'il réserve à l\'avance.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u4.x1',skill:'grammar',rule:'fr-comparatif',q:'Le train est plus rapide ___ la voiture.',opts:['que','de','comme'],ans:'que',why:'בהשוואה עם plus/moins משתמשים ב-que.',hint:'plus + תואר + que.'},
          {t:'mcq',id:'u4.x2',skill:'grammar',rule:'fr-comparatif',q:'איך אומרים "זול יותר" (פחות יקר) בצרפתית?',opts:['moins cher','plus cher','aussi cher'],ans:'moins cher',why:'cher = יקר, ולכן moins cher = פחות יקר (זול יותר).',hint:'moins = פחות.'},
          {t:'type',id:'u4.x3',skill:'grammar',rule:'fr-comparatif',q:'תרגם לצרפתית: "תחנת הרכבת" (השתמש ב-la)',ans:['la gare','La gare'],why:'la gare = תחנת הרכבת.',hint:'la g…'},
          {t:'scr',id:'u4.x4',skill:'grammar',rule:'fr-comparatif',q:'סדר את המשפט: המטרו מהיר יותר מהאוטובוס.',sentence:'Le métro est plus rapide que le bus.',ans:['Le métro est plus rapide que le bus.'],why:'Le métro est + plus rapide que + le bus.',hint:'מתחילים ב-Le métro.'},
          {t:'gap',id:'u4.x5',skill:'grammar',rule:'fr-comparatif',q:'השלם את מילת ההשוואה ("טוב יותר" = meilleur ___):',sentence:'Ce gâteau est meilleur ___ l\'autre.',ans:['que'],why:'meilleur que = טוב יותר מ-.',hint:'3 אותיות, מתחילה ב-q.'}
        ]
      }
    ];
  }
  if(ui==='es'){
    return [
      {
        id:'u1', n:1, icon:'🍳', color:'pink', cefr:level,
        title:'Gastronomy & Culinary Experiences',
        he:'Gastronomía y experiencias culinarias',
        lead:'En esta unidad de nivel B1 practicarás cómo hablar de experiencias culinarias, recetas e ingredientes usando el Present Perfect y el Past Simple.',
        canDo:['Diferenciar entre Present Perfect (experiencias) y Past Simple (momentos específicos)','Describir platos, técnicas de cocina e ingredientes en inglés','Expresar opiniones sobre restaurantes y tendencias gastronómicas'],
        fact:'El inglés culinario adoptó cientos de términos internacionales, pero los verbos de técnica (simmer, roast, whisk) son puramente anglosajones.',
        rules:[
          {id:'es-b1-perf-past', title:'Present Perfect vs. Past Simple', short:'have/has + participio (experiencia) vs. verbo en pasado (fecha concreta)',
           formula:'I have tried Peruvian food several times. (experiencia sin fecha)\nI tried that recipe last Saturday. (momento específico en el pasado)',
           body:'Usamos <b>Present Perfect</b> (have/has + past participle) para hablar de experiencias de vida o acciones con relevancia actual sin decir cuándo ocurrieron. Usamos <b>Past Simple</b> cuando mencionamos un momento cerrado en el pasado (<i>yesterday, last week, in 2022</i>).',
           examples:[{en:'Have you ever baked sourdough bread at home?',he:'¿Alguna vez has horneado pan de masa madre en casa?'},{en:'She opened her own catering business two years ago.',he:'Ella abrió su propio negocio de catering hace dos años.'},{en:'We have already tasted the new seasonal menu.',he:'Ya hemos probado el nuevo menú de temporada.'}],
           mistake:'I <b>have visited</b> that restaurant yesterday. → I <b>visited</b> that restaurant yesterday.',
           hook:'Si hay fecha o "yesterday / last / ago" → Past Simple. Si es experiencia abierta → Present Perfect.'}
        ],
        words:[
          {en:'ingredient',he:'ingrediente',pron:'in-GREE-dee-ent',ex:'Fresh herbs are the key ingredient in this sauce.',exHe:'Las hierbas frescas son el ingrediente clave en esta salsa.'},
          {en:'recipe',he:'receta',pron:'RES-ih-pee',ex:'She has adapted a traditional family recipe.',exHe:'Ella ha adaptado una receta familiar tradicional.'},
          {en:'flavor',he:'sabor',pron:'FLAY-ver',ex:'Roasting the garlic gives the dish a rich flavor.',exHe:'Asar el ajo le da al plato un sabor rico.'},
          {en:'season',he:'sazonar / condimentar',pron:'SEE-zen',ex:'Always season the soup before serving it.',exHe:'Sazona siempre la sopa antes de servirla.'},
          {en:'cuisine',he:'cocina / gastronomía',pron:'kwih-ZEEN',ex:'Mediterranean cuisine uses plenty of olive oil.',exHe:'La cocina mediterránea utiliza abundante aceite de oliva.'},
          {en:'homemade',he:'casero / hecho en casa',pron:'hohm-MAYD',ex:'Nothing beats homemade pasta on a Sunday.',exHe:'Nada supera a la pasta casera un domingo.'},
          {en:'appetizer',he:'entrante / aperitivo',pron:'AP-eh-ty-zer',ex:'We ordered a light appetizer to share.',exHe:'Pedimos un entrante ligero para compartir.'}
        ],
        reading:{
          title:'De la cocina casera a un proyecto gastronómico',
          passage:'Over the last three years, Sofia has transformed her passion for cooking into a thriving local business. She started by testing recipes in her apartment and sharing photos online. Last spring, she rented a small commercial kitchen in the city center. Since then, she has supplied fresh, homemade meals to dozens of offices and has recently launched weekend cooking workshops.',
          vocabulary:[
            {en:'transformed',he:'transformado'},{en:'passion',he:'pasión'},{en:'thriving',he:'próspero'},{en:'business',he:'negocio'},
            {en:'recipes',he:'recetas'},{en:'spring',he:'primavera'},{en:'rented',he:'alquiló'},{en:'kitchen',he:'cocina'},
            {en:'supplied',he:'suministrado'},{en:'homemade',he:'caseras'},{en:'launched',he:'lanzado'},{en:'workshops',he:'talleres'}
          ],
          questions:[
            {q:'¿Cuándo alquiló Sofía una cocina comercial?',opts:['La primavera pasada','Hace tres días','Todavía cocina en su apartamento'],ans:'La primavera pasada',why:'El texto dice: "Last spring, she rented a small commercial kitchen".'},
            {q:'¿Qué actividad nueva ha lanzado recientemente?',opts:['Talleres de cocina de fin de semana','Un libro de arquitectura','Una tienda de ropa'],ans:'Talleres de cocina de fin de semana',why:'El texto dice: "has recently launched weekend cooking workshops".'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u1.x1',skill:'grammar',rule:'es-b1-perf-past',q:'Elige la opción correcta: I ___ this Mediterranean recipe three times so far.',opts:['have made','made','am making'],ans:'have made',why:'"So far" (hasta ahora) indica experiencia acumulada → Present Perfect (have made).',hint:'Experiencia hasta hoy → have + participio.'},
          {t:'mcq',id:'u1.x2',skill:'grammar',rule:'es-b1-perf-past',q:'We ___ a wonderful bistro in Madrid last month.',opts:['discovered','have discovered','discover'],ans:'discovered',why:'"Last month" es un momento cerrado en el pasado → Past Simple.',hint:'"Last month" requiere Past Simple.'},
          {t:'type',id:'u1.x3',skill:'grammar',rule:'es-b1-perf-past',q:'Completa con Present Perfect: She ___ (open) a new bakery recently.',ans:['has opened'],why:'She + has + opened.',hint:'has + verbo con -ed.'},
          {t:'scr',id:'u1.x4',skill:'grammar',rule:'es-b1-perf-past',q:'Ordena la pregunta en inglés: ¿Alguna vez has probado la pasta casera?',sentence:'Have you ever tried homemade pasta?',ans:['Have you ever tried homemade pasta?'],why:'Have + you + ever + tried + homemade pasta?',hint:'Empieza con Have.'},
          {t:'gap',id:'u1.x5',skill:'grammar',rule:'es-b1-perf-past',q:'Completa con el pasado simple de "cook":',sentence:'Last night, we ___ dinner for our guests.',ans:['cooked'],why:'"Last night" requiere Past Simple: cooked.',hint:'cook + ed.'}
        ]
      },
      {
        id:'u2', n:2, icon:'💼', color:'purple', cefr:level,
        title:'Business, Innovation & Negotiations',
        he:'Negocios, innovación y proyectos',
        lead:'Aprende a expresar planes futuros, predicciones y condiciones reales en el mundo de los negocios usando First Conditional y conectores como unless y as soon as.',
        canDo:['Usar el First Conditional para negociar y planificar proyectos','Conectar ideas con unless, as soon as y provided that','Hablar sobre presupuestos, clientes y estrategias comerciales'],
        fact:'En reuniones internacionales de negocios en inglés, usar condicionales suaviza las propuestas y muestra profesionalidad.',
        rules:[
          {id:'es-b1-first-cond', title:'First Conditional y conectores temporales', short:'If / Unless / As soon as + Present Simple, will + verbo',
           formula:'If we improve the design, clients will invest more.\nUnless we reduce costs, the budget won\'t be enough.\nI will call you as soon as the meeting finishes.',
           body:'En las oraciones condicionales reales (<b>First Conditional</b>), la parte que lleva <b>if</b>, <b>unless</b> (a menos que) o <b>as soon as</b> (tan pronto como) va en <b>Present Simple</b>, aunque se refiera al futuro. El resultado lleva <b>will / won\'t / can / might</b> + verbo base.',
           examples:[{en:'If the client approves the proposal, we will launch in May.',he:'Si el cliente aprueba la propuesta, lanzaremos en mayo.'},{en:'We won\'t sign the contract unless they change the deadline.',he:'No firmaremos el contrato a menos que cambien la fecha límite.'},{en:'I will send the report as soon as I arrive at the office.',he:'Enviaré el informe tan pronto como llegue a la oficina.'}],
           mistake:'If the client <b>will approve</b>… → If the client <b>approves</b>…',
           hook:'Después de if / unless / as soon as nunca pongas "will": usa Present Simple.'}
        ],
        words:[
          {en:'budget',he:'presupuesto',pron:'BUJ-it',ex:'We need to stay within our annual budget.',exHe:'Necesitamos mantenernos dentro de nuestro presupuesto anual.'},
          {en:'deadline',he:'fecha límite',pron:'DED-lyn',ex:'The deadline for the design project is Friday.',exHe:'La fecha límite para el proyecto de diseño es el viernes.'},
          {en:'proposal',he:'propuesta',pron:'pruh-POH-zel',ex:'She presented a clear business proposal.',exHe:'Ella presentó una propuesta de negocios clara.'},
          {en:'invest',he:'invertir',pron:'in-VEST',ex:'They want to invest in sustainable fashion.',exHe:'Quieren invertir en moda sostenible.'},
          {en:'schedule',he:'horario / programar',pron:'SKEJ-ool',ex:'Let\'s schedule a call with the supplier.',exHe:'Programemos una llamada con el proveedor.'},
          {en:'profit',he:'beneficio / ganancia',pron:'PROF-it',ex:'The company increased its profit this quarter.',exHe:'La empresa aumentó sus ganancias este trimestre.'},
          {en:'partner',he:'socio / socia',pron:'PART-ner',ex:'She is looking for a reliable business partner.',exHe:'Está buscando un socio comercial confiable.'}
        ],
        reading:{
          title:'Lanzamiento de una marca creativa',
          passage:'Elena and her business partner are preparing to launch an online store that combines modern fashion and artisanal home decor. If their marketing campaign succeeds this month, they will expand to international shipping before the holidays. However, they won\'t sign with the new manufacturer unless the company guarantees sustainable materials and fair delivery deadlines.',
          vocabulary:[
            {en:'partner',he:'socio'},{en:'launch',he:'lanzar'},{en:'combines',he:'combina'},{en:'fashion',he:'moda'},
            {en:'campaign',he:'campaña'},{en:'succeeds',he:'tiene éxito'},{en:'expand',he:'expandirse'},{en:'shipping',he:'envío'},
            {en:'manufacturer',he:'fabricante'},{en:'unless',he:'a menos que'},{en:'sustainable',he:'sostenibles'},{en:'deadlines',he:'plazos'}
          ],
          questions:[
            {q:'¿Qué harán Elena y su socio si la campaña de marketing tiene éxito?',opts:['Ampliarán los envíos a nivel internacional','Cerrarán la tienda en línea','Cambiarán de sector a la gastronomía'],ans:'Ampliarán los envíos a nivel internacional',why:'El texto dice: "they will expand to international shipping".'},
            {q:'¿Bajo qué condición firmarán con el nuevo fabricante?',opts:['Solo si garantiza materiales sostenibles y plazos justos','Si reduce el precio a la mitad','Si está ubicado en la misma calle'],ans:'Solo si garantiza materiales sostenibles y plazos justos',why:'El texto dice: "unless the company guarantees sustainable materials and fair delivery deadlines".'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u2.x1',skill:'grammar',rule:'es-b1-first-cond',q:'If the client ___ the budget today, we will start tomorrow.',opts:['approves','will approve','approved'],ans:'approves',why:'En la cláusula con "if" usamos Present Simple (approves).',hint:'the client (he/she) + Present Simple.'},
          {t:'mcq',id:'u2.x2',skill:'grammar',rule:'es-b1-first-cond',q:'We won\'t finish on time ___ everyone helps with the presentation.',opts:['unless','if not','as soon'],ans:'unless',why:'"Unless" significa "a menos que".',hint:'Equivale a "a menos que".'},
          {t:'type',id:'u2.x3',skill:'grammar',rule:'es-b1-first-cond',q:'Traduce la palabra: "presupuesto"',ans:['budget'],why:'Presupuesto = budget.',hint:'Empieza por b (6 letras).'},
          {t:'scr',id:'u2.x4',skill:'grammar',rule:'es-b1-first-cond',q:'Ordena la frase: Te llamaré tan pronto como termine la reunión.',sentence:'I will call you as soon as the meeting ends.',ans:['I will call you as soon as the meeting ends.'],why:'I will call you + as soon as + the meeting ends.',hint:'Empieza con I will.'},
          {t:'gap',id:'u2.x5',skill:'grammar',rule:'es-b1-first-cond',q:'Completa con "will" para formar el resultado del condicional:',sentence:'If we invest in quality, customers ___ trust our brand.',ans:['will'],why:'El resultado del First Conditional lleva will + verbo base.',hint:'Futuro con w…'}
        ]
      },
      {
        id:'u3', n:3, icon:'🏛️', color:'cyan', cefr:level,
        title:'Architecture, Design & Urban Spaces',
        he:'Arquitectura, diseño y espacios urbanos',
        lead:'En esta unidad aprenderás a describir edificios, interiores y obras arquitectónicas utilizando la voz pasiva (Passive Voice) y cláusulas relativas.',
        canDo:['Usar la voz pasiva en presente y pasado (is built / was designed by)','Describir materiales, estilos arquitectónicos y espacios interiores','Unir información con who, which, that y where'],
        fact:'La arquitectura sostenible moderna reutiliza materiales locales para reducir la huella de carbono de los edificios.',
        rules:[
          {id:'es-b1-passive', title:'La voz pasiva (Passive Voice) en presente y pasado', short:'am/is/are/was/were + participio pasado (+ by)',
           formula:'This building was designed by a famous architect in 1998.\nNatural stone and glass are used in modern facades.',
           body:'Usamos la <b>voz pasiva</b> cuando el objeto o edificio es más importante que quién hizo la acción. Se forma con el verbo <b>to be</b> (<i>is / are / was / were</i>) seguido del <b>past participle</b> (<i>designed, built, restored, made</i>). Para indicar el autor usamos <b>by</b>.',
           examples:[{en:'The old warehouse was converted into a bright design studio.',he:'El antiguo almacén fue convertido en un luminoso estudio de diseño.'},{en:'Many contemporary homes are built with recycled materials.',he:'Muchas casas contemporáneas se construyen con materiales reciclados.'},{en:'The exhibition is visited by thousands of architects every year.',he:'La exposición es visitada por miles de arquitectos cada año.'}],
           mistake:'The museum <b>designed</b> by Zaha Hadid. → The museum <b>was designed</b> by Zaha Hadid.',
           hook:'No olvides el verbo "to be" (was / were / is / are) antes del participio.'}
        ],
        words:[
          {en:'architect',he:'arquitecto / arquitecta',pron:'AR-kih-tekt',ex:'The architect presented the 3D model of the house.',exHe:'La arquitecta presentó el modelo 3D de la casa.'},
          {en:'sustainable',he:'sostenible',pron:'suh-STAY-nuh-bel',ex:'Sustainable architecture saves energy and water.',exHe:'La arquitectura sostenible ahorra energía y agua.'},
          {en:'restore',he:'restaurar',pron:'rih-STOR',ex:'They plan to restore the historic facade.',exHe:'Planean restaurar la fachada histórica.'},
          {en:'spacious',he:'espacioso / amplio',pron:'SPAY-shus',ex:'The living room feels bright and spacious.',exHe:'El salón se siente luminoso y espacioso.'},
          {en:'structure',he:'estructura',pron:'STRUK-cher',ex:'The steel structure supports the glass roof.',exHe:'La estructura de acero sostiene el techo de cristal.'},
          {en:'layout',he:'distribución / diseño',pron:'LAY-owt',ex:'An open-plan layout connects the kitchen and dining area.',exHe:'Una distribución abierta conecta la cocina y el comedor.'},
          {en:'courtyard',he:'patio interior',pron:'KORT-yard',ex:'The rooms are organized around a central courtyard.',exHe:'Las habitaciones están organizadas alrededor de un patio central.'}
        ],
        reading:{
          title:'Un edificio histórico renovado',
          passage:'In the heart of the district stands an old textile factory that was built in the nineteenth century. Five years ago, the building was purchased by a group of young architects and was carefully restored. Today, the ground floor is used as a culinary market and café, while the upper floors house spacious studios where designers and fashion creators work together.',
          vocabulary:[
            {en:'factory',he:'fábrica'},{en:'built',he:'construida'},{en:'century',he:'siglo'},{en:'purchased',he:'comprado'},
            {en:'architects',he:'arquitectos'},{en:'restored',he:'restaurado'},{en:'ground',he:'planta baja'},{en:'market',he:'mercado'},
            {en:'upper',he:'superiores'},{en:'spacious',he:'espaciosos'},{en:'studios',he:'estudios'},{en:'designers',he:'diseñadores'}
          ],
          questions:[
            {q:'¿Qué era originalmente el edificio en el siglo XIX?',opts:['Una antigua fábrica textil','Un hotel de lujo','Una estación de tren'],ans:'Una antigua fábrica textil',why:'El texto dice: "an old textile factory that was built in the nineteenth century".'},
            {q:'¿Para qué se utiliza hoy la planta baja?',opts:['Como mercado gastronómico y cafetería','Como aparcamiento privado','Como almacén de madera'],ans:'Como mercado gastronómico y cafetería',why:'El texto dice: "the ground floor is used as a culinary market and café".'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u3.x1',skill:'grammar',rule:'es-b1-passive',q:'This iconic bridge ___ built in 2005.',opts:['was','is','has'],ans:'was',why:'"In 2005" es pasado y "bridge" es singular → was built.',hint:'Pasado singular del verbo to be.'},
          {t:'mcq',id:'u3.x2',skill:'grammar',rule:'es-b1-passive',q:'Recycled wood and glass ___ used in this studio.',opts:['are','is','was'],ans:'are',why:'Dos materiales (plural) en presente → are used.',hint:'Plural en presente.'},
          {t:'type',id:'u3.x3',skill:'grammar',rule:'es-b1-passive',q:'Completa en voz pasiva (pasado): The house ___ designed by a local architect.',ans:['was'],why:'The house (singular) + was designed.',hint:'3 letras: w…'},
          {t:'scr',id:'u3.x4',skill:'grammar',rule:'es-b1-passive',q:'Ordena la frase: La fachada histórica fue restaurada el año pasado.',sentence:'The historic facade was restored last year.',ans:['The historic facade was restored last year.'],why:'The historic facade + was restored + last year.',hint:'Empieza con The historic.'},
          {t:'gap',id:'u3.x5',skill:'grammar',rule:'es-b1-passive',q:'Completa con la preposición que introduce al autor en voz pasiva:',sentence:'The pavilion was designed ___ an Italian team.',ans:['by'],why:'En la voz pasiva usamos "by" para indicar quién realizó la acción.',hint:'2 letras: b…'}
        ]
      },
      {
        id:'u4', n:4, icon:'👗', color:'gold', cefr:level,
        title:'Fashion, Style & Creative Trends',
        he:'Moda, estilo y tendencias creativas',
        lead:'En la cuarta unidad practicarás modales de deducción y consejo, comparaciones avanzadas y vocabulario sobre moda, tejidos y sostenibilidad.',
        canDo:['Dar recomendaciones y expresar opiniones matizadas con should, ought to, might y must','Hablar sobre tendencias de moda, tejidos y diseño ético','Debatir sobre calidad, estilo personal y consumo responsable'],
        fact:'Las marcas de moda de autor priorizan cada vez más tejidos orgánicos y colecciones cápsula atemporales.',
        rules:[
          {id:'es-b1-modals', title:'Modales de consejo, posibilidad y deducción (should, might, must)', short:'should / must / might / can\'t + verbo en forma base',
           formula:'You should invest in timeless pieces. (consejo)\nThat jacket must be handmade—look at the stitching! (deducción segura)\nThis trend might become popular next winter. (posibilidad)',
           body:'En nivel B1 usamos verbos modales no solo para obligación, sino también para deducir y aconsejar: <b>should</b> (deberías), <b>must</b> (debe de ser – certeza lógica), <b>might / could</b> (puede que – posibilidad) y <b>can\'t</b> (no puede ser). Siempre van seguidos del verbo sin "to".',
           examples:[{en:'Designers should choose durable fabrics.',he:'Los diseñadores deberían elegir tejidos duraderos.'},{en:'That silk dress must be very comfortable.',he:'Ese vestido de seda debe de ser muy cómodo.'},{en:'We might attend the fashion exhibition in Milan.',he:'Puede que asistamos a la exposición de moda en Milán.'}],
           mistake:'She must <b>to be</b> the designer. → She must <b>be</b> the designer.',
           hook:'Después de must / should / might el verbo va directo, nunca lleva "to".'}
        ],
        words:[
          {en:'fabric',he:'tejido / tela',pron:'FAB-rik',ex:'Linen is a breathable fabric for summer.',exHe:'El lino es un tejido transpirable para el verano.'},
          {en:'trend',he:'tendencia',pron:'TREND',ex:'Minimalist tailoring is a major trend this year.',exHe:'La sastrería minimalista es una gran tendencia este año.'},
          {en:'pattern',he:'patrón / estampado',pron:'PAT-ern',ex:'She sketched a geometric pattern for the collection.',exHe:'Ella dibujó un patrón geométrico para la colección.'},
          {en:'tailored',he:'a medida / entallado',pron:'TAY-lerd',ex:'A tailored blazer looks elegant in any business meeting.',exHe:'Una chaqueta entallada luce elegante en cualquier reunión de negocios.'},
          {en:'timeless',he:'atemporal',pron:'TYM-les',ex:'Good architecture and classic fashion are timeless.',exHe:'La buena arquitectura y la moda clásica son atemporales.'},
          {en:'craftsmanship',he:'artesanía / manufactura',pron:'KRAFTS-mun-ship',ex:'Customers appreciate high-quality craftsmanship.',exHe:'Los clientes aprecian la artesanía de alta calidad.'},
          {en:'wardrobe',he:'armario / vestuario',pron:'WOR-drohb',ex:'Building a capsule wardrobe saves time every morning.',exHe:'Crear un armario cápsula ahorra tiempo cada mañana.'}
        ],
        reading:{
          title:'El auge del armario cápsula y el diseño ético',
          passage:'More consumers are rethinking how they buy clothes. Instead of following fast trends that disappear in a few weeks, many professionals prefer a capsule wardrobe made of timeless, tailored garments. Although high-quality fabrics and ethical craftsmanship cost more at first, these pieces last for years and can be combined effortlessly for both business meetings and social events.',
          vocabulary:[
            {en:'consumers',he:'consumidores'},{en:'trends',he:'tendencias'},{en:'disappear',he:'desaparecen'},{en:'wardrobe',he:'armario'},
            {en:'timeless',he:'atemporales'},{en:'tailored',he:'a medida / de corte'},{en:'garments',he:'prendas'},{en:'fabrics',he:'tejidos'},
            {en:'craftsmanship',he:'artesanía'},{en:'pieces',he:'piezas'},{en:'combined',he:'combinadas'},{en:'meetings',he:'reuniones'}
          ],
          questions:[
            {q:'¿Qué prefieren muchos profesionales en lugar de las tendencias rápidas?',opts:['Un armario cápsula con prendas atemporales y bien cortadas','Comprar ropa nueva todas las semanas','Usar únicamente ropa deportiva'],ans:'Un armario cápsula con prendas atemporales y bien cortadas',why:'El texto dice: "prefer a capsule wardrobe made of timeless, tailored garments".'},
            {q:'¿Cuál es la ventaja de los tejidos de alta calidad según el texto?',opts:['Duran años y se combinan fácilmente','Son siempre los más baratos de producir','Solo se pueden usar una vez'],ans:'Duran años y se combinan fácilmente',why:'El texto dice: "these pieces last for years and can be combined effortlessly".'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u4.x1',skill:'grammar',rule:'es-b1-modals',q:'Look at the fine details on that coat—it ___ be handmade!',opts:['must','shouldn\'t','can'],ans:'must',why:'Usamos "must" para una deducción lógica casi segura.',hint:'Deducción positiva segura.'},
          {t:'mcq',id:'u4.x2',skill:'grammar',rule:'es-b1-modals',q:'Brands ___ use more sustainable fabrics in their collections.',opts:['should','might to','must to'],ans:'should',why:'"Should" + verbo base expresa recomendación.',hint:'Sin "to".'},
          {t:'type',id:'u4.x3',skill:'grammar',rule:'es-b1-modals',q:'Traduce al inglés: "tejido / tela"',ans:['fabric'],why:'Tejido o tela = fabric.',hint:'Empieza con f (6 letras).'},
          {t:'scr',id:'u4.x4',skill:'grammar',rule:'es-b1-modals',q:'Ordena la frase: Puede que asistamos al desfile de moda mañana.',sentence:'We might attend the fashion show tomorrow.',ans:['We might attend the fashion show tomorrow.'],why:'We + might + attend + the fashion show tomorrow.',hint:'Empieza con We might.'},
          {t:'gap',id:'u4.x5',skill:'grammar',rule:'es-b1-modals',q:'Completa con el verbo base "be" después del modal:',sentence:'Good design should ___ both functional and beautiful.',ans:['be'],why:'Después de un verbo modal (should) siempre va el infinitivo sin "to" (be).',hint:'Verbo ser/estar en forma base.'}
        ]
      }
    ];
  }
  const isBarry = S.name==='בארי' || CURRENT_LEARNER_PROFILE.interests.includes('כדורגל') || (CURRENT_LEARNER_PROFILE.gender==='male' && CURRENT_LEARNER_PROFILE.level==='A2' && lang==='English');
  if(isBarry){
    return [
      {
        id:'u1', n:1, icon:'⚽', color:'lime', cefr:'A2',
        title:'Match Day, Tactics & Teamwork',
        he:'יום המשחק, טקטיקה ועבודת צוות (כדורגל וספורט A2)',
        lead:'אתה כבר יודע אנגלית בסיסית. עכשיו ברמת A2 לומדים לתאר משחקים מרגשים, פעולות מהירות על המגרש וניצחונות גדולים באמצעות פעלים לא-רגילים בעבר (Past Simple).',
        canDo:['לספר על משחק כדורגל ואירועי ספורט בעבר באנגלית','להשתמש בפעלים לא-רגילים בעבר (won, scored, ran, caught, beat)','לתאר עבודת צוות, אסטרטגיה ומהלכים על המגרש'],
        fact:'כדורגל הוא הספורט הנצפה ביותר בעולם עם מעל 4 מיליארד אוהדים! בעיטת הכדורגל המהירה ביותר שנמדדה אי פעם הגיעה למהירות מדהימה של 210 קמ"ש.',
        rules:[
          {id:'a2-past-irregular', title:'פעלים לא-רגילים בעבר (Past Simple Irregular Verbs)', short:'win → won · run → ran · score → scored · catch → caught',
           formula:'Subject + Past verb (ran / scored / won / beat)\nWe won the championship yesterday!\nHe scored a brilliant goal in the 90th minute.',
           body:'בזמן Past Simple, פעלים רבים באנגלית אינם מקבלים -ed אלא משנים צורה לחלוטין: <b>win</b> הופך ל-<b>won</b>, <b>run</b> הופך ל-<b>ran</b>, <b>catch</b> הופך ל-<b>caught</b>. משתמשים בצורות האלו כדי לספר מה קרה במשחק שהסתיים.',
           examples:[{en:'Our team won the championship yesterday.',he:'הקבוצה שלנו זכתה באליפות אתמול.'},{en:'He ran past three defenders and scored.',he:'הוא רץ מעבר לשלושה מגנים והבקיע.'},{en:'The goalkeeper caught the ball in the last second.',he:'השוער תפס את הכדור בשנייה האחרונה.'}],
           mistake:'We <b>winned</b> the final game. → We <b>won</b> the final game.',
           hook:'פעלים חזקים בספורט משנים צורה בעבר: win הופך ל-won, ו-run הופך ל-ran!'},
          {id:'a2-time-past', title:'ביטויי זמן בעבר: yesterday, last week, ago', short:'yesterday / last match / two days ago',
           formula:'Time expression at start or end of sentence:\nYesterday, we practiced penalties.\nOur team beat the rivals two weeks ago.',
           body:'כדי לדייק מתי התרחש המשחק או האימון, מוסיפים ביטויי זמן בעבר: <b>yesterday</b> (אתמול), <b>last week / last match</b> (בשבוע שעבר / במשחק שעבר), או <b>ago</b> (לפני – לדוגמה: three days ago).',
           examples:[{en:'We had intense training yesterday.',he:'היה לנו אימון אינטנסיבי אתמול.'},{en:'They scored three goals ten minutes ago.',he:'הם הבקיעו שלושה שערים לפני עשר דקות.'}],
           mistake:'two days <b>before</b> we won → two days <b>ago</b> we won.',
           hook:'כשסופרים זמן לאחור מההווה משתמשים ב-ago: five minutes ago!'}
        ],
        words:[
          {en:'stadium',he:'אצטדיון',pron:'STAY-dee-um',ex:'Eighty thousand fans cheered in the stadium.',exHe:'שמונים אלף אוהדים הריעו באצטדיון.'},
          {en:'champion',he:'אלוף',pron:'CHAM-pee-on',ex:'Our team fought hard and became the champion.',exHe:'הקבוצה שלנו נלחמה קשה והפכה לאלופה.'},
          {en:'score',he:'להבקיע / ניקוד',pron:'SKOR',ex:'He managed to score a goal from thirty meters.',exHe:'הוא הצליח להבקיע שער ממרחק שלושים מטרים.'},
          {en:'match',he:'משחק / התמודדות',pron:'MATCH',ex:'The championship match was tense until the final whistle.',exHe:'משחק האליפות היה מותח עד שריקת הסיום.'},
          {en:'teammate',he:'חבר לקבוצה',pron:'TEEM-mayt',ex:'He passed the ball directly to his teammate.',exHe:'הוא מסר את הכדור ישירות לחבר שלו לקבוצה.'},
          {en:'coach',he:'מאמן',pron:'KOHTCH',ex:'The coach gave us inspiring instructions before the game.',exHe:'המאמן נתן לנו הוראות מעוררות השראה לפני המשחק.'},
          {en:'trophy',he:'גביע',pron:'TROH-fee',ex:'The captain lifted the gold trophy with pride.',exHe:'הקפטן הניף את גביע הזהב בגאווה.'}
        ],
        reading:{
          title:'הגמר הגדול והשער בדקה ה-90',
          passage:'Last Saturday, Barry played in the regional football final. The stadium was packed with loud supporters. In the first half, the score was zero to zero because both defenses played aggressively. Five minutes before the final whistle, the opponent team attacked, but our goalkeeper made an unbelievable save. Then, Barry received a long pass, ran past two defenders, and scored the winning goal! The coach ran onto the pitch and the team lifted the trophy.',
          vocabulary:[
            {en:'final',he:'גמר'},{en:'stadium',he:'אצטדיון'},{en:'supporters',he:'אוהדים'},{en:'half',he:'מחצית'},
            {en:'whistle',he:'שריקה'},{en:'goalkeeper',he:'שוער'},{en:'save',he:'הצלה'},{en:'received',he:'קיבל'},
            {en:'defenders',he:'מגנים'},{en:'scored',he:'הבקיע'},{en:'coach',he:'מאמן'},{en:'trophy',he:'גביע'}
          ],
          questions:[
            {q:'למה התוצאה במחצית הראשונה הייתה 0-0?',opts:['כי שתי ההגנות שיחקו בצורה אגרסיבית','כי אף אחד לא בעט לשער','כי השופט ביטל את השערים'],ans:'כי שתי ההגנות שיחקו בצורה אגרסיבית',why:'בקטע כתוב: the score was zero to zero because both defenses played aggressively.'},
            {q:'מה קרה רגע לפני שבארי הבקיע את שער הניצחון?',opts:['השוער ביצע הצלה לא תיאמן','הקפטן נפצע והוחלף','הקהל פרץ למגרש'],ans:'השוער ביצע הצלה לא תיאמן',why:'בקטע כתוב: our goalkeeper made an unbelievable save.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u1.x1',skill:'grammar',rule:'a2-past-irregular',q:'Our team played amazingly and ___ the cup last night.',opts:['won','winned','wins'],ans:'won',why:'הפועל win הופך בעבר ל-won.',hint:'צורה לא-רגילה: win → won.'},
          {t:'mcq',id:'u1.x2',skill:'grammar',rule:'a2-time-past',q:'The referee blew the final whistle five minutes ___ .',opts:['ago','before','yesterday'],ans:'ago',why:'כשסופרים זמן לאחור ("לפני חמש דקות") משתמשים ב-ago.',hint:'five minutes + ago.'},
          {t:'type',id:'u1.x3',skill:'grammar',rule:'a2-past-irregular',q:'השלם את צורת העבר של run: The striker ___ very fast.',ans:['ran'],why:'העבר של run הוא ran.',hint:'אות אחת משתנה: u הופכת ל-a.'},
          {t:'scr',id:'u1.x4',skill:'grammar',rule:'a2-past-irregular',q:'סדר את המשפט: הוא הבקיע שער מדהים אתמול.',sentence:'He scored an incredible goal yesterday.',ans:['He scored an incredible goal yesterday.'],why:'He + scored + an incredible goal + yesterday.',hint:'מתחילים ב-He.'},
          {t:'gap',id:'u1.x5',skill:'grammar',rule:'a2-past-irregular',q:'השלם את צורת העבר של הפועל catch:',sentence:'The goalkeeper ___ the ball in the air.',ans:['caught'],why:'העבר של catch הוא caught.',hint:'מתחיל ב-c ומסתיים ב-aught.'}
        ]
      },
      {
        id:'u2', n:2, icon:'🦁', color:'gold', cefr:'A2',
        title:'Animal Superpowers & Wildlife',
        he:'כוחות-על בטבע ועולם החי (חיות וטבע A2)',
        lead:'עולם החיות מלא בכישורי הישרדות עוצרי נשימה: ריצה במהירויות על, הסוואה בלתי נראית וחושים חדים פי עשרה משל בני אדם. ביחידה זו נלמד להשוות ביניהן בעזרת דרגות השוואה (Comparatives & Superlatives).',
        canDo:['להשוות בין חיות וטורפים בטבע בעזרת דרגות השוואה באנגלית','להשתמש ב-faster than, the fastest, more dangerous than','לתאר סביבות מחיה ויכולות הישרדות מיוחדות'],
        fact:'הברדלס (Cheetah) מאיץ מ-0 ל-100 קמ"ש תוך 3 שניות – מהר יותר מרוב מכוניות הספורט! אבל באוויר, הבז הנודד (Peregrine Falcon) צולל במהירות בלתי נתפסת של 390 קמ"ש!',
        rules:[
          {id:'a2-comparatives', title:'השוואה בין שניים: תואר + er + than', short:'fast → faster than · strong → stronger than',
           formula:'Animal A + is + adjective-er + than + Animal B\nThe cheetah is faster than the lion.\nAn eagle is larger than a falcon.',
           body:'כשמשווים בין שני דברים באנגלית, מוסיפים לסיומת של תואר קצר <b>-er</b> ואחריו את המילה <b>than</b> (מ-). לתארים ארוכים (כמו dangerous או intelligent) לא מוסיפים er אלא אומרים: <b>more + adjective + than</b>.',
           examples:[{en:'A cheetah is faster than any horse.',he:'ברדלס מהיר יותר מכל סוס.'},{en:'Lions are more dangerous than wolves.',he:'אריות מסוכנים יותר מזאבים.'}],
           mistake:'A cheetah is more fast than a lion. → A cheetah is <b>faster than</b> a lion.',
           hook:'לתואר קצר (fast) מוסיפים er + than! לתואר ארוך (dangerous) שמים more מלפנים.'},
          {id:'a2-superlatives', title:'השיאן בקבוצה: the + תואר-est / the most', short:'the fastest · the strongest · the most powerful',
           formula:'The + adjective-est / The most + adjective\nThe blue whale is the largest animal on Earth.\nThe falcon is the most incredible diver.',
           body:'כדי לתאר את השיאן של הקבוצה ("הכי מהיר", "הכי חזק"), שמים <b>the</b> לפני התואר ומוסיפים לו את הסיומת <b>-est</b>. לתארים ארוכים משתמשים ב-<b>the most</b>.',
           examples:[{en:'The peregrine falcon is the fastest bird in the world.',he:'הבז הנודד הוא הציפור המהירה ביותר בעולם.'},{en:'Chameleons have the most colorful camouflage.',he:'לזיקיות יש את ההסוואה הצבעונית ביותר.'}],
           mistake:'He is the most fast animal. → He is <b>the fastest</b> animal.',
           hook:'השיאן מקבל תמיד the בהתחלה, ו-est בסוף: the fastest!'}
        ],
        words:[
          {en:'predator',he:'טורף',pron:'PRED-uh-ter',ex:'The lion is a formidable apex predator in Africa.',exHe:'האריה הוא טורף-על אדיר באפריקה.'},
          {en:'cheetah',he:'ברדלס / צ\'יטה',pron:'CHEE-tuh',ex:'The cheetah can sprint at hundred kilometers per hour.',exHe:'הברדלס יכול לרוץ בספרינט במאה קילומטרים לשעה.'},
          {en:'camouflage',he:'הסוואה',pron:'KAM-oo-flahzh',ex:'Tigers use stripe camouflage to blend into tall grass.',exHe:'טיגריסים משתמשים בהסוואת פסים כדי להיטמע בעשב גבוה.'},
          {en:'survival',he:'הישרדות',pron:'ser-VY-vul',ex:'Camouflage is essential for animal survival in the wild.',exHe:'הסוואה חיונית להישרדות בעלי חיים בטבע.'},
          {en:'species',he:'מין (ביולוגי)',pron:'SPEE-sheez',ex:'Scientists discover new animal species every single year.',exHe:'מדענים מגלים מיני בעלי חיים חדשים בכל שנה ושנה.'},
          {en:'wildlife',he:'חיות בר',pron:'WYLD-lyf',ex:'The national park protects endangered wildlife from poachers.',exHe:'הפארק הלאומי מגן על חיות בר בסכנת הכחדה מפני ציידים.'},
          {en:'habitat',he:'סביבת מחיה / בית גידול',pron:'HAB-ih-tat',ex:'Polar bears depend on sea ice as their natural habitat.',exHe:'דובי קוטב תלויים בקרח הים כסביבת המחיה הטבעית שלהם.'}
        ],
        reading:{
          title:'כוחות-העל של חיות הסוואנה',
          passage:'The African savannah is home to some of the most extraordinary creatures on the planet. Animals here develop unique superpowers to survive. The cheetah is famous for being the fastest runner on four legs, using its long flexible spine and non-retractable claws like athletic cleats. Meanwhile, the leopard is not as fast, but it is much stronger than the cheetah. Leopards can drag prey twice their own weight high up into tree branches to keep it safe from hyenas. Across the sky, the martial eagle spots small movements from six kilometers away because its vision is eight times sharper than a human’s!',
          vocabulary:[
            {en:'savannah',he:'סוואנה'},{en:'extraordinary',he:'יוצא דופן'},{en:'survive',he:'לשרוד'},{en:'flexible',he:'גמיש'},
            {en:'claws',he:'טפרים'},{en:'cleats',he:'פקקים (בנעלי ספורט)'},{en:'drag',he:'לגרור'},{en:'branches',he:'ענפים'},
            {en:'hyenas',he:'צבועים'},{en:'eagle',he:'עיט'},{en:'vision',he:'ראייה'},{en:'sharper',he:'חדה יותר'}
          ],
          questions:[
            {q:'במה הנמר (leopard) עולה על הברדלס (cheetah)?',opts:['הוא חזק ממנו ויכול לגרור טרף כבד על עצים','הוא רץ מהר יותר ממנו למרחקים ארוכים','יש לו ראיית לילה טובה יותר'],ans:'הוא חזק ממנו ויכול לגרור טרף כבד על עצים',why:'בקטע כתוב: it is much stronger than the cheetah. Leopards can drag prey twice their own weight high up into tree branches.'},
            {q:'עד כמה ראייתו של העיט חדה יותר מזו של אדם?',opts:['פי 8 מראיית אדם','פי 2 מראיית אדם','פי 20 מראיית אדם'],ans:'פי 8 מראיית אדם',why:'בקטע כתוב: its vision is eight times sharper than a human’s!'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u2.x1',skill:'grammar',rule:'a2-comparatives',q:'A cheetah is ___ than a grizzly bear.',opts:['faster','fastest','more fast'],ans:'faster',why:'תואר קצר (fast) בהשוואה מקבל er + than: faster than.',hint:'fast + er.'},
          {t:'mcq',id:'u2.x2',skill:'grammar',rule:'a2-superlatives',q:'The blue whale is ___ animal in the ocean.',opts:['the largest','larger','most large'],ans:'the largest',why:'כדי לתאר את השיאן המוחלט שמים the ואז תואר עם est.',hint:'the + large + st.'},
          {t:'type',id:'u2.x3',skill:'grammar',rule:'a2-comparatives',q:'השלם את צורת ההשוואה של strong: The leopard is ___ than the cheetah.',ans:['stronger'],why:'strong הופך ל-stronger בהשוואה.',hint:'strong + er.'},
          {t:'scr',id:'u2.x4',skill:'grammar',rule:'a2-superlatives',q:'סדר את המשפט: הבז הוא הציפור המהירה ביותר בעולם.',sentence:'The falcon is the fastest bird in the world.',ans:['The falcon is the fastest bird in the world.'],why:'The falcon + is + the fastest bird + in the world.',hint:'מתחילים ב-The falcon.'},
          {t:'gap',id:'u2.x5',skill:'grammar',rule:'a2-comparatives',q:'השלם את המילה החסרה אחרי תואר ההשוואה:',sentence:'An elephant is heavier ___ a rhino.',ans:['than'],why:'אחרי heavier חייבת לבוא המילה than (מ-).',hint:'מתחיל ב-t (4 אותיות).'}
        ]
      },
      {
        id:'u3', n:3, icon:'🌋', color:'pink', cefr:'A2',
        title:'Wild Nature & Extreme Expeditions',
        he:'טבע פראי, הרי געש ומסעות מחקר (טבע ומסעות A2)',
        lead:'הטבע בכדור הארץ עוצמתי ובלתי צפוי: הרי געש מתפרצים, קרחונים ענקיים וסופות אוקיינוס. ביחידה זו לומדים לתכנן מסעות חקר עם be going to, ולדבר על סיבות ותוצאות עם משפטי תנאי ראשון (First Conditional).',
        canDo:['לתכנן משלחת מחקר בטבע עם be going to באנגלית','להשתמש במשפטי תנאי ראשון (If we cross the river, we will find...)','לתאר תופעות טבע קיצוניות, הרי געש וקרחונים'],
        fact:'מעל 80% מקרקעית האוקיינוסים מעולם לא נחקרה על ידי בני אדם! אנחנו יודעים יותר על פני הירח ומאדים מאשר על המעמקים המסתוריים ביותר של כדור הארץ.',
        rules:[
          {id:'a2-going-to', title:'תוכניות ומסעות לעתיד: be going to', short:'am / is / are + going to + פועל',
           formula:'Subject + am/is/are + going to + verb\nWe are going to explore the volcanic crater tomorrow.\nHe is going to climb the glacier next week.',
           body:'כשמתכננים פעולה עתידית שכבר הוחלט עליה (כמו מסע, טיול או ניסוי), משתמשים בצורה <b>be going to + פועל במקור</b>. זה מקביל ל"אני עומד/הולך לעשות".',
           examples:[{en:'Our expedition team is going to study the volcano.',he:'צוות המשלחת שלנו הולך לחקור את הר הגעש.'},{en:'I am going to bring special heat-proof gear.',he:'אני הולך להביא ציוד מיוחד חסין חום.'}],
           mistake:'We going to climb the mountain. → We <b>are going to climb</b> the mountain.',
           hook:'אל תשכח את ה-be: I am going to, We are going to!'},
          {id:'a2-first-conditional', title:'תנאי ראשון למצבים אמיתיים: If + Present, will + פועל', short:'If it rains, we will stay in the camp',
           formula:'If + Present Simple, will / won\'t + base verb\nIf the volcano erupts, we will evacuate immediately.\nIf we follow the river, we will reach the ocean.',
           body:'במשפטי תנאי ראשון (First Conditional), החלק עם <b>if</b> (אם) מתאר תנאי אפשרי בהווה ונוסח ב-Present Simple, והתוצאה בעתיד מקבלת <b>will</b> או <b>won\'t</b>.',
           examples:[{en:'If we find water, the expedition will continue.',he:'אם נמצא מים, המשלחת תימשך.'},{en:'If the weather turns stormy, we won\'t cross the glacier.',he:'אם מזג האוויר יהפוך לסוער, לא נחצה את הקרחון.'}],
           mistake:'If it <b>will rain</b>, we will wait. → If it <b>rains</b>, we will wait.',
           hook:'אחרי if שמים הווה פשוט (Present Simple), ובתוצאה שמים will!'}
        ],
        words:[
          {en:'volcano',he:'הר געש',pron:'vol-KAY-noh',ex:'The volcano spewed red lava high into the night sky.',exHe:'הר הגעש פלט לבה אדומה גבוה אל שמי הלילה.'},
          {en:'rainforest',he:'יער גשם',pron:'RAYN-for-est',ex:'The Amazon is the largest tropical rainforest in the world.',exHe:'האמזונס הוא יער הגשם הטרופי הגדול בעולם.'},
          {en:'expedition',he:'משלחת מחקר / מסע',pron:'ex-peh-DISH-un',ex:'The scientific expedition spent three months in Antarctica.',exHe:'משלחת המחקר המדעית בילתה שלושה חודשים באנטארקטיקה.'},
          {en:'glacier',he:'קרחון',pron:'GLAY-sher',ex:'The massive glacier moves slowly down the mountain valley.',exHe:'הקרחון העצום נע לאט במורד עמק ההר.'},
          {en:'ocean',he:'אוקיינוס',pron:'OH-shun',ex:'The deepest parts of the ocean remain totally dark.',exHe:'החלקים העמוקים ביותר באוקיינוס נותרים חשוכים לחלוטין.'},
          {en:'danger',he:'סכנה',pron:'DAYN-jer',ex:'Explorers must watch out for the danger of falling rocks.',exHe:'חוקרים חייבים להיזהר מסכנת סלעים נופלים.'},
          {en:'explore',he:'לחקור / לסייר',pron:'ex-PLOR',ex:'We plan to explore hidden caves along the coast.',exHe:'אנחנו מתכננים לחקור מערות נסתרות לאורך החוף.'}
        ],
        reading:{
          title:'משלחת מדעית להר געש פעיל',
          passage:'Next month, an international team of scientists is going to launch an ambitious expedition to Mount Yasur, an active volcano on a remote Pacific island. Mount Yasur has been erupting almost continuously for hundreds of years. The researchers are going to place heat-resistant seismic sensors right near the rim of the crater. "If we collect accurate sound waves from inside the magma chamber, we will predict future explosions much earlier," explains the lead geologist. The team wears silver protective suits because volcanic rock bombs can reach temperatures of over one thousand degrees Celsius!',
          vocabulary:[
            {en:'ambitious',he:'שאפתני'},{en:'remote',he:'מרוחק'},{en:'island',he:'אי'},{en:'continuously',he:'ברציפות'},
            {en:'heat-resistant',he:'עמיד בחום'},{en:'seismic',he:'סייסמי / של רעידות'},{en:'rim',he:'שפה / קצה'},{en:'crater',he:'לוע'},
            {en:'magma',he:'מגמה'},{en:'explosions',he:'פיצוצים'},{en:'geologist',he:'גיאולוג'},{en:'suits',he:'חליפות'}
          ],
          questions:[
            {q:'מה המדענים הולכים להציב ליד לוע הר הגעש?',opts:['חיישנים סייסמיים עמידים בחום','רובוט תת-ימי','מצלמת וידאו רגילה'],ans:'חיישנים סייסמיים עמידים בחום',why:'בקטע כתוב: The researchers are going to place heat-resistant seismic sensors right near the rim of the crater.'},
            {q:'מה יקרה אם המשלחת תאסוף גלי קול מדויקים מתוך תא המגמה?',opts:['הם יוכלו לחזות התפרצויות מוקדם בהרבה','הם יעצרו את ההתפרצות לחלוטין','הר הגעש יתקרר במהירות'],ans:'הם יוכלו לחזות התפרצויות מוקדם בהרבה',why:'בקטע כתוב: If we collect accurate sound waves... we will predict future explosions much earlier.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u3.x1',skill:'grammar',rule:'a2-going-to',q:'Our science team ___ to explore the deep cave tomorrow.',opts:['is going','are going','going'],ans:'is going',why:'נושא ביחיד (our team) מקבל is going to.',hint:'is + going.'},
          {t:'mcq',id:'u3.x2',skill:'grammar',rule:'a2-first-conditional',q:'If the volcano erupts, we ___ to a safe zone immediately.',opts:['will evacuate','evacuated','evacuate'],ans:'will evacuate',why:'תוצאה של First Conditional מקבלת will + פועל בסיסי.',hint:'will + פועל.'},
          {t:'type',id:'u3.x3',skill:'grammar',rule:'a2-going-to',q:'השלם את המילה החסרה: We are ___ to climb the glacier.',ans:['going'],why:'התבנית היא be going to.',hint:'going.'},
          {t:'scr',id:'u3.x4',skill:'grammar',rule:'a2-first-conditional',q:'סדר את המשפט: אם מזג האוויר יהיה בהיר, נגיע לפסגה.',sentence:'If the weather is clear we will reach the summit.',ans:['If the weather is clear we will reach the summit.'],why:'If the weather is clear, we will reach the summit.',hint:'מתחילים ב-If.'},
          {t:'gap',id:'u3.x5',skill:'grammar',rule:'a2-first-conditional',q:'השלם את הפועל ב-Present Simple אחרי If:',sentence:'If they ___ fresh water, they will set up camp.',ans:['find'],why:'אחרי If משתמשים ב-Present Simple: they find.',hint:'פועל בצורת המקור find.'}
        ]
      },
      {
        id:'u4', n:4, icon:'🚀', color:'cyan', cefr:'A2',
        title:'Science Lab & Space Facts',
        he:'מעבדת מדע ועובדות חלל מדהימות (מדע ועובדות מעניינות A2)',
        lead:'היקום מלא בתופעות מדעיות שמאתגרות את ההיגיון: כוכבי לכת בלי לילה, כוח כבידה שגורם לך לקפוץ פי שישה לגובה, וחורים שחורים שבולעים אפילו קרני אור. ביחידה זו נלמד להסביר תופעות מדעיות עם מודאלים (can, could, might, must) ומילות קישור (because, so).',
        canDo:['להסביר עובדות מדעיות ותופעות חלל מרתקות באנגלית','להשתמש בפעלי עזר להשערה ויכולת (can, could, might, must be)','לחבר סיבה ותוצאה עם because ו-so'],
        fact:'יום אחד בכוכב הלכת נוגה (Venus) ארוך יותר משנה שלמה שלו! לוקח לו 243 ימי כדור הארץ להסתובב סביב עצמו, אבל רק 225 ימים להקיף את השמש.',
        rules:[
          {id:'a2-modals-science', title:'פעלי עזר להשערה ויכולת: can, could, might, must', short:'can (יכול) · might (אולי) · must (חייב להיות)',
           formula:'Subject + modal (can / might / must) + base verb\nAstronauts can jump very high on the Moon.\nThat bright light must be planet Jupiter.\nScientists might find microbial life on Mars.',
           body:'במדע ובהשערות משתמשים בפעלי עזר: <b>can</b> מציין יכולת מוכחת, <b>might</b> מציין אפשרות שאינה ודאית ("אולי / ייתכן ש..."), ו-<b>must be</b> מציין מסקנה הגיונית כמעט בטוחה ("זה חייב להיות..."). אחרי כל המודאלים הפועל תמיד נשאר בצורתו הבסיסית!',
           examples:[{en:'Light can travel three hundred thousand kilometers per second.',he:'אור יכול לנוע שלוש מאות אלף קילומטרים בשנייה.'},{en:'There must be billions of galaxies in our universe.',he:'חייבות להיות מיליארדי גלקסיות ביקום שלנו.'},{en:'Telescopes might detect water on distant exoplanets.',he:'טלסקופים עשויים לזהות מים בכוכבי לכת חוץ-שמשיים רחוקים.'}],
           mistake:'It might <b>to rain</b> acid on Venus. → It might <b>rain</b> acid on Venus.',
           hook:'אחרי can / might / must לא שמים to לעולם!'},
          {id:'a2-connectors', title:'סיבה ותוצאה במדע: because ו-so', short:'because (בגלל ש...) · so (לכן / אז)',
           formula:'Result + because + Reason: We float because gravity is low.\nReason + so + Result: Gravity is low, so we float.',
           body:'כדי לחבר רעיונות מדעיים, משתמשים ב-<b>because</b> כדי להסביר את הסיבה ("למה זה קורה?"), וב-<b>so</b> כדי להסביר את התוצאה ("ומה קורה בעקבות זאת?").',
           examples:[{en:'The Moon has less mass, so its gravity is weaker.',he:'לירח יש פחות מסה, לכן כוח הכבידה שלו חלש יותר.'},{en:'Stars shine bright because nuclear fusion produces energy.',he:'כוכבים מאירים בחוזקה מכיוון שהיתוך גרעיני מייצר אנרגיה.'}],
           mistake:'Because it was cold, <b>so</b> we wore suits. → It was cold, <b>so</b> we wore suits.',
           hook:'תבחר אחד: או because בהסבר, או so בתוצאה!'}
        ],
        words:[
          {en:'gravity',he:'כוח כבידה',pron:'GRAV-ih-tee',ex:'Zero gravity allows astronauts to float inside the spaceship.',exHe:'אפס כבידה מאפשר לאסטרונאוטים לרחף בתוך החללית.'},
          {en:'galaxy',he:'גלקסיה',pron:'GAL-ak-see',ex:'The Milky Way is our home spiral galaxy.',exHe:'שביל החלב הוא גלקסיית הבית הספירלית שלנו.'},
          {en:'experiment',he:'ניסוי מדעי',pron:'ex-PEER-ih-ment',ex:'The scientist conducted an experiment to test the magnetic field.',exHe:'המדען ערך ניסוי כדי לבדוק את השדה המגנטי.'},
          {en:'universe',he:'יקום',pron:'YOO-nih-vers',ex:'The universe contains over two trillion galaxies.',exHe:'היקום מכיל מעל שני טריליון גלקסיות.'},
          {en:'planet',he:'כוכב לכת',pron:'PLAN-it',ex:'Jupiter is the largest planet in our solar system.',exHe:'צדק הוא כוכב הלכת הגדול ביותר במערכת השמש שלנו.'},
          {en:'discover',he:'לגלות',pron:'dih-SKUV-er',ex:'Astronomers hope to discover signs of life on icy moons.',exHe:'אסטרונומים מקווים לגלות סימני חיים על ירחים מכוסי קרח.'},
          {en:'evidence',he:'ראיות / הוכחות',pron:'EV-ih-dents',ex:'Fossils provide direct evidence of ancient creatures.',exHe:'מאובנים מספקים ראיות ישירות לקיומם של יצורים קדומים.'}
        ],
        reading:{
          title:'סודות מערכת השמש וכוח הכבידה',
          passage:'Our solar system is packed with mind-boggling scientific mysteries. Take the planet Saturn, for example. Even though Saturn is ninety-five times more massive than Earth, it is made mostly of hydrogen and helium gases. Because its density is lower than water, Saturn could literally float in an enormous cosmic bathtub! Meanwhile, on our neighboring Moon, the gravitational pull is only one-sixth of Earth’s gravity. That means an astronaut who weighs sixty kilograms feels like only ten kilograms on lunar soil, so you can jump over vehicles with ease. Scientists continue to launch robotic probes because each new mission discovers unexpected evidence about the origins of our universe.',
          vocabulary:[
            {en:'mysteries',he:'מסתורין'},{en:'hydrogen',he:'מימן'},{en:'helium',he:'הליום'},{en:'density',he:'צפיפות'},
            {en:'literally',he:'פשוטו כמשמעו'},{en:'enormous',he:'ענק'},{en:'lunar',he:'של הירח'},{en:'soil',he:'אדמה'},
            {en:'vehicles',he:'כלי רכב'},{en:'probes',he:'גשושיות חלל'},{en:'origins',he:'מקורות'},{en:'unexpected',he:'בלתי צפוי'}
          ],
          questions:[
            {q:'למה כוכב הלכת שבתאי (Saturn) היה יכול לצוף באמבטיית מים ענקית?',opts:['כי הצפיפות הממוצעת שלו נמוכה מצפיפות של מים','כי יש לו טבעות קרח מסביבו','כי אין לו כוח כבידה כלל'],ans:'כי הצפיפות הממוצעת שלו נמוכה מצפיפות של מים',why:'בקטע כתוב: Because its density is lower than water, Saturn could literally float in an enormous cosmic bathtub!'},
            {q:'כמה שוקל אדם של 60 ק"ג כשהוא נמצא על הירח?',opts:['הוא מרגיש כמו 10 ק"ג בלבד','הוא שוקל 60 ק"ג בדיוק','הוא שוקל 120 ק"ג'],ans:'הוא מרגיש כמו 10 ק"ג בלבד',why:'בקטע כתוב: an astronaut who weighs sixty kilograms feels like only ten kilograms on lunar soil.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u4.x1',skill:'grammar',rule:'a2-modals-science',q:'On the Moon, gravity is weak, so astronauts ___ jump high.',opts:['can','must to','might to'],ans:'can',why:'can מביע יכולת, ואחריו בא פועל בסיסי ללא to.',hint:'can + פועל.'},
          {t:'mcq',id:'u4.x2',skill:'grammar',rule:'a2-connectors',q:'Saturn is lighter than water ___ it is made mostly of gas.',opts:['because','so','although'],ans:'because',why:'because מסביר את הסיבה למה שבתאי קל ממים.',hint:'מסביר סיבה: because.'},
          {t:'type',id:'u4.x3',skill:'grammar',rule:'a2-modals-science',q:'השלם את המודאל שמביע ודאות הגיונית: That glowing dot ___ be planet Venus.',ans:['must'],why:'must be = חייב להיות (הסקה הגיונית כמעט ודאית).',hint:'must.'},
          {t:'scr',id:'u4.x4',skill:'grammar',rule:'a2-connectors',q:'סדר את המשפט: לירח יש פחות כבידה ולכן קל לקפוץ.',sentence:'The Moon has less gravity so it is easy to jump.',ans:['The Moon has less gravity so it is easy to jump.'],why:'The Moon has less gravity so it is easy to jump.',hint:'מתחילים ב-The Moon.'},
          {t:'gap',id:'u4.x5',skill:'grammar',rule:'a2-modals-science',q:'השלם את המודאל שמביע אפשרות לא ודאית ("עשוי / עלול"):',sentence:'Telescopes ___ discover water on that distant planet.',ans:['might'],why:'might = עשוי / ייתכן ש...',hint:'מתחיל ב-m (5 אותיות).'}
        ]
      }
    ];
  }
  const isMaayan = S.name==='מעיין' || CURRENT_LEARNER_PROFILE.interests.includes('פוקימון');
  if(isMaayan){
    return [
      {
        id:'u1', n:1, icon:'⚡', color:'gold', cefr:'A1',
        title:'My First Pokemon & Colors',
        he:'הפוקימון הראשון שלי וצבעים (פוקימון A1)',
        lead:'ברוך הבא לעולם הפוקימונים! ביחידה זו לומדים להציג את עצמך כמאמן, להציג את הפוקימון שלך ואת הצבעים שלו בעזרת הפועל To Be (am / is / are).',
        canDo:['להציג את עצמי כמאמן: I am a Pokemon trainer','לתאר את הפוקימון שלי וצבעו: Pikachu is yellow','לשאול שאלות: Is Charmander red? Yes, it is!'],
        fact:'פיקאצ\'ו אוגר אנרגיה חשמלית בלחיים האדומות שלו, וכאשר הוא שמח הוא משחרר ניצוצות עדינים ומקשקש בזנב הברק שלו!',
        rules:[
          {id:'a1-be-pokemon', title:'הפועל To Be עם פוקימונים: am / is / are', short:'I am · He/She/It is · We/They are',
           formula:'I am a trainer.\nPikachu is fast.\nCharmander and Squirtle are starter Pokemon.\nIs it yellow? Yes, it is!',
           body:'באנגלית משתמשים ב-<b>am</b> עם I, ב-<b>is</b> עם שם של פוקימון יחיד (It / Pikachu), וב-<b>are</b> כשמדובר בכמה פוקימונים (They / We). כדי לשאול שאלה, הופכים את הסדר: Is Pikachu fast?',
           examples:[{en:'I am a Pokemon trainer.',he:'אני מאמן פוקימונים.'},{en:'Pikachu is an electric Pokemon.',he:'פיקאצ\'ו הוא פוקימון חשמלי.'},{en:'Charizard is very powerful.',he:'צ\'אריזרד חזק מאוד.'}],
           mistake:'Pikachu <b>are</b> yellow. → Pikachu <b>is</b> yellow.',
           hook:'פוקימון אחד מקבל is, קבוצה מקבלת are!'}
        ],
        words:[
          {en:'trainer',he:'מאמן',pron:'TRAY-ner',ex:'Every trainer wants to become the champion.',exHe:'כל מאמן רוצה להפוך לאלוף.'},
          {en:'electric',he:'חשמלי',pron:'ee-LEK-trik',ex:'Pikachu has powerful electric attacks.',exHe:'לפיקאצ\'ו יש מתקפות חשמליות חזקות.'},
          {en:'creature',he:'יצור',pron:'KREE-cher',ex:'A Pokemon is a magical creature with special powers.',exHe:'פוקימון הוא יצור קסום עם כוחות מיוחדים.'},
          {en:'adventure',he:'הרפתקה',pron:'ad-VEN-cher',ex:'We are ready for an exciting journey and adventure.',exHe:'אנחנו מוכנים למסע מרגש והרפתקה.'},
          {en:'badge',he:'תג (מכון)',pron:'BADJ',ex:'Ash won the first gym badge today.',exHe:'אש זכה בתג המכון הראשון שלו היום.'},
          {en:'battle',he:'קרב',pron:'BAT-l',ex:'The stadium battle was thrilling and fast.',exHe:'הקרב באצטדיון היה מותח ומהיר.'},
          {en:'power',he:'כוח / עוצמה',pron:'POW-er',ex:'This dragon Pokemon has incredible power.',exHe:'לפוקימון הדרקון הזה יש עוצמה מדהימה.'}
        ],
        reading:{
          title:'הפוקימון הראשון של מעיין',
          passage:'Maayan is a new Pokemon trainer. Today, he visits Professor Oak at the research laboratory. On the table, there are three Poke Balls. Maayan looks at the starters: Charmander is red and fire type, Squirtle is blue and water type, and Bulbasaur is green. But suddenly, a small yellow Pikachu jumps from behind the desk. Pikachu looks at Maayan and says "Pika Pika!" Maayan smiles and says: "You are amazing. We are best friends now!"',
          vocabulary:[
            {en:'trainer',he:'מאמן'},{en:'visits',he:'מבקר'},{en:'laboratory',he:'מעבדה'},{en:'table',he:'שולחן'},
            {en:'starters',he:'התחלתיים'},{en:'fire',he:'אש'},{en:'water',he:'מים'},{en:'suddenly',he:'פתאום'},
            {en:'desk',he:'שולחן כתיבה'},{en:'smiles',he:'מחייך'},{en:'friends',he:'חברים'},{en:'amazing',he:'מדהים'}
          ],
          questions:[
            {q:'איזה פוקימון קפץ פתאום מאחורי השולחן של הפרופסור?',opts:['פיקאצ\'ו צהוב וקטן','צ\'ארמנדר אדום','סקוורטל כחול'],ans:'פיקאצ\'ו צהוב וקטן',why:'בקטע כתוב: suddenly, a small yellow Pikachu jumps from behind the desk.'},
            {q:'מה מעיין אמר לפיקאצ\'ו בסוף הקטע?',opts:['אתה מדהים. אנחנו החברים הכי טובים עכשיו!','תחזור לפוקדור שלך','אני רוצה פוקימון מים'],ans:'אתה מדהים. אנחנו החברים הכי טובים עכשיו!',why:'בקטע כתוב: You are amazing. We are best friends now!'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u1.x1',skill:'grammar',rule:'a1-be-pokemon',q:'Pikachu ___ an electric Pokemon.',opts:['is','are','am'],ans:'is',why:'נושא יחיד מקבל is: Pikachu is.',hint:'יחיד → is.'},
          {t:'mcq',id:'u1.x2',skill:'grammar',rule:'a1-be-pokemon',q:'I ___ a Pokemon trainer.',opts:['am','is','are'],ans:'am',why:'עם I תמיד בא am: I am a trainer.',hint:'I → am.'},
          {t:'type',id:'u1.x3',skill:'grammar',rule:'a1-be-pokemon',q:'השלם את הצבע באנגלית: Charmander is ___ (אדום).',ans:['red'],why:'אדום באנגלית = red.',hint:'red (3 אותיות).'},
          {t:'scr',id:'u1.x4',skill:'grammar',rule:'a1-be-pokemon',q:'סדר את המשפט: פיקאצ\'ו מהיר מאוד.',sentence:'Pikachu is very fast.',ans:['Pikachu is very fast.'],why:'Pikachu + is + very fast.',hint:'מתחילים ב-Pikachu.'},
          {t:'gap',id:'u1.x5',skill:'grammar',rule:'a1-be-pokemon',q:'השלם את הפועל החסר: Squirtle and Bulbasaur ___ starter Pokemon.',ans:['are'],why:'שני פוקימונים זה רבים (They), לכן משתמשים ב-are.',hint:'רבים → are.'}
        ]
      },
      {
        id:'u2', n:2, icon:'🥊', color:'pink', cefr:'A1',
        title:'Pokemon Powers & Abilities',
        he:'כוחות ויכולות של פוקימונים (can / like)',
        lead:'לכל פוקימון יש מתקפות מיוחדות: חלקם יכולים לעוף, לחפור או לירות ברקים. לומדים לדבר על יכולות עם can ו-can\'t ועל מה שאוהבים עם like.',
        canDo:['לומר מה הפוקימון יכול לעשות: Pikachu can use Thunderbolt','לשאול על יכולות: Can Charizard fly? Yes, it can!','לומר מה אני אוהב: I like electric Pokemon'],
        fact:'מיוטו (Mewtwo) נוצר במעבדה גנטית חשאית, ויש לו כוחות טלקינזיס אדירים שמאפשרים לו לרחף ולהזיז סלעי ענק בלי לגעת בהם!',
        rules:[
          {id:'a1-can-pokemon', title:'יכולות עם can ו-can\'t: ללא to', short:'can + פועל בסיסי · can\'t + פועל',
           formula:'Subject + can / can\'t + base verb\nPikachu can jump high.\nCan it fly? No, it can\'t.',
           body:'משתמשים ב-<b>can</b> כדי לומר מה הפוקימון מסוגל לעשות, וב-<b>can\'t</b> למה שאינו מסוגל. אחרי can הפועל נשאר פשוט וללא to לעולם!',
           examples:[{en:'Pikachu can shock enemies with electricity.',he:'פיקאצ\'ו יכול לחשמל אויבים באנרגיה.'},{en:'Charizard can fly high in the sky.',he:'צ\'אריזרד יכול לעוף גבוה בשמיים.'}],
           mistake:'Pikachu can <b>to</b> jump. → Pikachu can <b>jump</b>.',
           hook:'אחרי can אין to לעולם!'}
        ],
        words:[
          {en:'attack',he:'מתקפה',pron:'uh-TAK',ex:'Pikachu launched a surprise Thunderbolt attack.',exHe:'פיקאצ\'ו ביצע מתקפת מכת ברק בהפתעה.'},
          {en:'fast',he:'מהיר',pron:'FAST',ex:'Electric Pokemon are extremely fast in battle.',exHe:'פוקימונים חשמליים מהירים בצורה קיצונית בקרב.'},
          {en:'strong',he:'חזק',pron:'STRONG',ex:'Machamp is very strong and can lift big rocks.',exHe:'מאצ\'אמפ חזק מאוד ויכול להרים סלעים גדולים.'},
          {en:'fly',he:'לעוף',pron:'FLY',ex:'Flying Pokemon can cross mountains easily.',exHe:'פוקימונים מעופפים יכולים לחצות הרים בקלות.'},
          {en:'swim',he:'לשחות',pron:'SWIM',ex:'Water Pokemon swim with great speed in the river.',exHe:'פוקימוני מים שוחים במהירות גדולה בנהר.'},
          {en:'dodge',he:'להתחמק',pron:'DODJ',ex:'The trainer told Pikachu to dodge the rock.',exHe:'המאמן אמר לפיקאצ\'ו להתחמק מהסלע.'},
          {en:'protect',he:'להגן',pron:'pro-TEKT',ex:'The shield can protect the team from danger.',exHe:'המגן יכול להגן על הצוות מפני סכנה.'}
        ],
        reading:{
          title:'קרב המכון הראשון',
          passage:'Maayan and Pikachu enter the Pewter City Gym. The Gym Leader Brock stands across the arena with his giant rock Pokemon Onix. Brock smiles and says: "Can your electric Pokemon beat my rock defense?" Maayan gives a confident command: "Pikachu, you are faster! Dodge the attack and use Iron Tail!" Pikachu dodges the heavy tail, jumps in the air, and strikes the ground. The arena shakes, and Maayan wins his very first badge!',
          vocabulary:[
            {en:'enter',he:'נכנסים'},{en:'arena',he:'זירה'},{en:'giant',he:'ענק'},{en:'stands',he:'עומד'},
            {en:'defense',he:'הגנה'},{en:'confident',he:'בטוח בעצמו'},{en:'command',he:'פקודה'},{en:'faster',he:'מהיר יותר'},
            {en:'heavy',he:'כבד'},{en:'strikes',he:'מכה'},{en:'shakes',he:'רועדת'},{en:'wins',he:'מנצח'}
          ],
          questions:[
            {q:'איזה פוקימון סלע ענק שייך למנהיג המכון ברוק?',opts:['אוניקס (Onix)','סקוורטל','פיקאצ\'ו'],ans:'אוניקס (Onix)',why:'בקטע כתוב: with his giant rock Pokemon Onix.'},
            {q:'איזו פקודה מעיין נתן לפיקאצ\'ו כדי לנצח?',opts:['להתחמק מהמתקפה ולהשתמש בזנב ברזל','לברוח מהמכון','לשחות בנהר'],ans:'להתחמק מהמתקפה ולהשתמש בזנב ברזל',why:'בקטע כתוב: Dodge the attack and use Iron Tail!'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u2.x1',skill:'grammar',rule:'a1-can-pokemon',q:'Charizard ___ fly high in the clouds.',opts:['can','can to','is can'],ans:'can',why:'אחרי can בא פועל בסיסי ישירות ללא to.',hint:'can + פועל.'},
          {t:'mcq',id:'u2.x2',skill:'grammar',rule:'a1-can-pokemon',q:'Can Pikachu swim underwater? No, it ___ .',opts:['can\'t','isn\'t','don\'t'],ans:'can\'t',why:'שאלת Can נענית ב-No, it can\'t.',hint:'שלילה של can.'},
          {t:'type',id:'u2.x3',skill:'grammar',rule:'a1-can-pokemon',q:'השלם את המילה החסרה: Pikachu can ___ (לקפוץ) very high.',ans:['jump'],why:'לקפוץ באנגלית = jump.',hint:'jump.'},
          {t:'scr',id:'u2.x4',skill:'grammar',rule:'a1-can-pokemon',q:'סדר את המשפט: אני אוהב פוקימונים מהירים.',sentence:'I like fast Pokemon.',ans:['I like fast Pokemon.'],why:'I + like + fast Pokemon.',hint:'מתחילים ב-I.'},
          {t:'gap',id:'u2.x5',skill:'grammar',rule:'a1-can-pokemon',q:'השלם את שאלת היכולת:',sentence:'___ your Pokemon use Thunderbolt?',ans:['Can'],why:'שאלת יכולת מתחילה ב-Can.',hint:'Can (3 אותיות).'}
        ]
      },
      {
        id:'u3', n:3, icon:'🎒', color:'cyan', cefr:'A1',
        title:'The Trainer Backpack',
        he:'תיק המאמן וחפצים במסע (have / has)',
        lead:'לכל מאמן יש תרמיל מסע עם פוקדורים, שיקויים ופוקידע. לומדים להשתמש ב-have וב-has כדי לדבר על מה שיש ברשותך ומה יש לחברים.',
        canDo:['לומר מה יש לי בתרמיל: I have five Poke Balls','לתאר מה יש לחברים: Ash has a Pokedex','לשאול שאלות: Do you have a potion? Yes, I do!'],
        fact:'ברחבי עולם הפוקימונים קיימים כיום מעל 1,000 מינים שונים של פוקימונים המחולקים ל-18 סוגי אלמנטים שונים!',
        rules:[
          {id:'a1-have-pokemon', title:'שייכות: I have לעומת He/She/It has', short:'I/You/We/They have · He/She/It has',
           formula:'I have three Poke Balls.\nThe trainer has a rare map.\nDo you have a potion? Yes, I do.',
           body:'משתמשים ב-<b>have</b> עם I, You, We, They. כשמדברים על מאמן יחיד (Ash / He / She) משתמשים ב-<b>has</b>.',
           examples:[{en:'I have five Poke Balls in my bag.',he:'יש לי חמישה פוקדורים בתיק שלי.'},{en:'The trainer has a helpful Pokedex.',he:'למאמן יש פוקידע מועיל.'}],
           mistake:'He <b>have</b> a potion. → He <b>has</b> a potion.',
           hook:'עם he/she/it אומרים has!'}
        ],
        words:[
          {en:'backpack',he:'תרמיל / תיק גב',pron:'BAK-pak',ex:'I keep all my battle items in the backpack.',exHe:'אני שומר את כל פריטי הקרב שלי בתרמיל.'},
          {en:'potion',he:'שיקוי ריפוי',pron:'POH-shun',ex:'A potion heals your tired Pokemon quickly.',exHe:'שיקוי מרפא את הפוקימון העייף שלך במהירות.'},
          {en:'catch',he:'לתפוס',pron:'KATCH',ex:'Trainers use Poke Balls to catch wild creatures.',exHe:'מאמנים משתמשים בפוקדורים כדי לתפוס יצורי בר.'},
          {en:'item',he:'חפץ / פריט',pron:'EYE-tem',ex:'Which rare item did you find in the cave?',exHe:'איזה חפץ נדיר מצאת במערה?'},
          {en:'friend',he:'חבר',pron:'FREND',ex:'Pikachu is not just a partner, it is a true friend.',exHe:'פיקאצ\'ו הוא לא סתם שותף, הוא חבר אמיתי.'},
          {en:'journey',he:'מסע',pron:'JER-nee',ex:'Our Pokemon journey starts at sunrise.',exHe:'מסע הפוקימון שלנו מתחיל בזריחה.'},
          {en:'rare',he:'נדיר',pron:'RARE',ex:'Dragonite is a very rare and legendary sighting.',exHe:'דראגונייט הוא מראה נדיר ואגדי מאוד.'}
        ],
        reading:{
          title:'הכנות למסע ביער ורדיאן',
          passage:'Before entering the deep Viridian Forest, Maayan checks his backpack. He has ten Poke Balls, three healing potions, and a map of the region. His friend Brock has a warm camping tent and cooking supplies. "We have everything we need for the journey," says Maayan. Suddenly, they hear rustling in the tall grass. A rare Butterfree appears with shining wings! Maayan takes a Poke Ball and prepares for his next adventure.',
          vocabulary:[
            {en:'checks',he:'בודק'},{en:'backpack',he:'תרמיל'},{en:'healing',he:'מרפא'},{en:'region',he:'מחוז'},
            {en:'tent',he:'אוהל'},{en:'supplies',he:'ציוד'},{en:'everything',he:'הכל'},{en:'rustling',he:'רשרוש'},
            {en:'grass',he:'עשב'},{en:'appears',he:'מופיע'},{en:'wings',he:'כנפיים'},{en:'prepares',he:'מתכונן'}
          ],
          questions:[
            {q:'כמה פוקדורים יש למעיין בתיק הגב?',opts:['עשרה פוקדורים','רק פוקדור אחד','מאה פוקדורים'],ans:'עשרה פוקדורים',why:'בקטע כתוב: He has ten Poke Balls.'},
            {q:'איזה פוקימון נדיר עם כנפיים זוהרות הופיע בעשב?',opts:['באטרפרי (Butterfree)','צ\'אריזרד','פיקאצ\'ו'],ans:'באטרפרי (Butterfree)',why:'בקטע כתוב: A rare Butterfree appears with shining wings!'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u3.x1',skill:'grammar',rule:'a1-have-pokemon',q:'I ___ five Poke Balls in my backpack.',opts:['have','has','am have'],ans:'have',why:'עם I משתמשים ב-have.',hint:'I → have.'},
          {t:'mcq',id:'u3.x2',skill:'grammar',rule:'a1-have-pokemon',q:'The Pokemon trainer ___ a new Pokedex.',opts:['has','have','having'],ans:'has',why:'נושא יחיד (the trainer = he) מקבל has.',hint:'גוף שלישי → has.'},
          {t:'type',id:'u3.x3',skill:'grammar',rule:'a1-have-pokemon',q:'השלם את צורת השייכות של have עבור He: He ___ a healing potion.',ans:['has'],why:'עם He הפועל have הופך ל-has.',hint:'has.'},
          {t:'scr',id:'u3.x4',skill:'grammar',rule:'a1-have-pokemon',q:'סדר את המשפט: יש לנו מפה של המחוז.',sentence:'We have a map of the region.',ans:['We have a map of the region.'],why:'We + have + a map of the region.',hint:'מתחילים ב-We.'},
          {t:'gap',id:'u3.x5',skill:'grammar',rule:'a1-have-pokemon',q:'השלם את מילת השאלה לשייכות בהווה:',sentence:'Do you ___ a potion for Pikachu?',ans:['have'],why:'אחרי Do you משתמשים ב-have בצורת המקור.',hint:'have (4 אותיות).'}
        ]
      },
      {
        id:'u4', n:4, icon:'🏆', color:'lime', cefr:'A1',
        title:'Pokemon Gym & Daily Routine',
        he:'אימונים במכון ושגרת מאמן (Present Simple)',
        lead:'מאמנים מתאמנים בכל יום, מטיילים בין ערים ודואגים לבריאות הפוקימונים במרכז הפוקימונים. לומדים הווה פשוט (Present Simple) עם סיומת s לפעלים בגוף שלישי.',
        canDo:['לתאר את שגרת האימונים: Trainers practice every day','להשתמש בסיומת s בגוף שלישי: Pikachu runs fast','לדבר על ניצחונות ואליפות המחוז'],
        fact:'מאמני פוקימון צועדים בממוצע מעל 10 קילומטרים ביום במהלך המסעות שלהם באזורים השונים!',
        rules:[
          {id:'a1-ps-pokemon', title:'הווה פשוט ושגרה: תוספת s בגוף שלישי', short:'I practice · He/She/It practices',
           formula:'I/We/They + verb (train / walk / battle)\nHe/She/It + verb-s (trains / walks / battles)',
           body:'כשמדברים על פעולה שחוזרת על עצמה בשגרה, משתמשים ב-Present Simple. אם הנושא הוא פוקימון יחיד או מאמן (He / She / It), הפועל מקבל תוספת <b>s</b> בסופו!',
           examples:[{en:'We train together every morning.',he:'אנחנו מתאמנים יחד בכל בוקר.'},{en:'Pikachu runs fast in the arena.',he:'פיקאצ\'ו רץ מהר בזירה.'}],
           mistake:'Pikachu <b>run</b> fast. → Pikachu <b>runs</b> fast.',
           hook:'גוף שלישי יחיד אוהב s בסוף הפועל!'}
        ],
        words:[
          {en:'champion',he:'אלוף',pron:'CHAM-pee-on',ex:'Only the most dedicated trainer becomes the champion.',exHe:'רק המאמן המסור ביותר הופך לאלוף.'},
          {en:'victory',he:'ניצחון',pron:'VIK-tuh-ree',ex:'The hard battle ended in a glorious victory.',exHe:'הקרב הקשה הסתיים בניצחון מפואר.'},
          {en:'practice',he:'להתאמן / תרגול',pron:'PRAK-tis',ex:'We practice new battle tactics every afternoon.',exHe:'אנחנו מתרגלים טקטיקות קרב חדשות בכל אחר צהריים.'},
          {en:'team',he:'צוות / קבוצה',pron:'TEEM',ex:'A balanced team has six different Pokemon types.',exHe:'לצוות מאוזן יש שישה סוגי פוקימונים שונים.'},
          {en:'forest',he:'יער',pron:'FOR-ist',ex:'Many grass and bug Pokemon live in the green forest.',exHe:'פוקימוני עשב וחרקים רבים חיים ביער הירוק.'},
          {en:'center',he:'מרכז (פוקימונים)',pron:'SEN-ter',ex:'Nurse Joy restores all energy at the Pokemon Center.',exHe:'האחות ג\'וי מחדשת את כל האנרגיה במרכז הפוקימונים.'},
          {en:'evolve',he:'להתפתח',pron:'ee-VOLV',ex:'With enough experience, your partner will evolve.',exHe:'עם מספיק ניסיון, השותף שלך יתפתח.'}
        ],
        reading:{
          title:'יום אימונים בדרך לאליפות',
          passage:'Every day starts early for Maayan and his Pokemon team. First, they run around the lake to build endurance. Next, Pikachu practices electric accuracy by aiming at target balloons. In the afternoon, they visit the Pokemon Center, where friendly Nurse Joy heals their energy. In the evening, the whole team rests by the campfire. Maayan looks up at the starry sky and dreams of winning the Pokemon League Championship trophy.',
          vocabulary:[
            {en:'starts',he:'מתחיל'},{en:'early',he:'מוקדם'},{en:'endurance',he:'סיבולת'},{en:'accuracy',he:'דיוק'},
            {en:'aiming',he:'מכוון'},{en:'balloons',he:'בלונים'},{en:'afternoon',he:'אחר הצהריים'},{en:'friendly',he:'ידידותית'},
            {en:'heals',he:'מרפאה'},{en:'evening',he:'ערב'},{en:'campfire',he:'מדורה'},{en:'trophy',he:'גביע'}
          ],
          questions:[
            {q:'מה מעיין והצוות שלו עושים בתחילת כל יום סביב האגם?',opts:['רצים כדי לפתח סיבולת','הולכים לישון באוהל','דגים דגים במים'],ans:'רצים כדי לפתח סיבולת',why:'בקטע כתוב: First, they run around the lake to build endurance.'},
            {q:'מי מרפאה את האנרגיה של הפוקימונים במרכז הפוקימונים?',opts:['האחות ג\'וי הידידותית','פרופסור אוק','המאמן ברוק'],ans:'האחות ג\'וי הידידותית',why:'בקטע כתוב: where friendly Nurse Joy heals their energy.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u4.x1',skill:'grammar',rule:'a1-ps-pokemon',q:'Pikachu ___ every day after lunch.',opts:['trains','train','is train'],ans:'trains',why:'נושא יחיד (Pikachu = it) מקבל s בסוף הפועל: trains.',hint:'יחיד → תוספת s.'},
          {t:'mcq',id:'u4.x2',skill:'grammar',rule:'a1-ps-pokemon',q:'Trainers ___ all around the Pokemon world.',opts:['travel','travels','is travel'],ans:'travel',why:'נושא ברבים (Trainers = they) מקבל פועל בסיסי: travel.',hint:'רבים → ללא s.'},
          {t:'type',id:'u4.x3',skill:'grammar',rule:'a1-ps-pokemon',q:'הוסף s לפועל עבור גוף שלישי: Ash ___ (battle) with passion.',ans:['battles'],why:'battle מקבל s בסוף: battles.',hint:'battles.'},
          {t:'scr',id:'u4.x4',skill:'grammar',rule:'a1-ps-pokemon',q:'סדר את המשפט: אנחנו מתאמנים יחד בכל בוקר.',sentence:'We train together every morning.',ans:['We train together every morning.'],why:'We + train + together + every morning.',hint:'מתחילים ב-We.'},
          {t:'gap',id:'u4.x5',skill:'grammar',rule:'a1-ps-pokemon',q:'השלם את הפועל ב-Present Simple עבור נושא ברבים:',sentence:'They ___ wild Pokemon in the forest.',ans:['catch'],why:'עם They הפועל נשאר בצורת המקור catch.',hint:'פועל בצורת המקור catch.'}
        ]
      }
    ];
  }
  const isHadar = S.name==='הדר' || CURRENT_LEARNER_PROFILE.interests.includes('טרנדים');
  if(isHadar){
    return [
      {
        id:'u1', n:1, icon:'📱', color:'lime', cefr:'A2',
        title:'Viral Trends & Content Creators',
        he:'טרנדים ויראליים ויוצרי תוכן (טרנדים ורשתות A2)',
        lead:'איך סרטון קצר הופך לטרנד עולמי תוך שעות בודדות? ביחידה זו לומדים לתאר תופעות רשת, סרטונים ויראליים ואירועים בעבר (Past Simple).',
        canDo:['לספר על טרנד ויראלי וסרטון שהצליח ברשת','להשתמש בפעלים בעבר: created, uploaded, shared, watched','להביע דעה על אלגוריתמים ופלטפורמות תוכן'],
        fact:'מעל 500 שעות של וידאו חדש מועלות ליוטיוב בכל דקה אחת בלבד – כמות שאי אפשר לצפות בה בכל החיים!',
        rules:[
          {id:'a2-past-trends', title:'פעלים בעבר לתיאור אירועים דיגיטליים (Past Simple)', short:'created · uploaded · watched · reached',
           formula:'Subject + Past verb (-ed or irregular)\nHe uploaded a funny video yesterday.\nThe clip reached one million views in three hours.',
           body:'משתמשים ב-<b>Past Simple</b> כדי לספר על סרטון שעלה או טרנד שהתפוצץ בעבר. לפעלים רגילים מוסיפים <b>-ed</b> (uploaded, shared), ולפעלים לא-רגילים יש צורות עבר ייחודיות (made, saw, went).',
           examples:[{en:'The creator uploaded an amazing challenge video.',he:'היוצר העלה סרטון אתגר מדהים.'},{en:'The video went viral across social media.',he:'הסרטון הפך לוויראלי בכל הרשתות החברתיות.'}],
           mistake:'He <b>upload</b> a video yesterday. → He <b>uploaded</b> a video yesterday.',
           hook:'פעולה שהסתיימה בעבר מקבלת עבר: uploaded / shared!'}
        ],
        words:[
          {en:'creator',he:'יוצר תוכן',pron:'kree-AY-ter',ex:'The creator edits videos with fast cuts and sound effects.',exHe:'יוצר התוכן עורך סרטונים עם חיתוכים מהירים ואפקטים קוליים.'},
          {en:'viral',he:'ויראלי (מתפשט במהירות)',pron:'VY-rul',ex:'A clever concept can go viral in just a few minutes.',exHe:'רעיון חכם יכול להפוך לוויראלי בתוך דקות ספורות בלבד.'},
          {en:'algorithm',he:'אלגוריתם',pron:'AL-guh-rith-um',ex:'The algorithm recommends content based on your watch time.',exHe:'האלגוריתם ממליץ על תוכן בהתבסס על זמן הצפייה שלך.'},
          {en:'audience',he:'קהל צופים',pron:'AW-dee-ents',ex:'Engaging directly with your audience builds strong loyalty.',exHe:'אינטראקציה ישירה עם הקהל שלך בונה נאמנות חזקה.'},
          {en:'creative',he:'יצירתי',pron:'kree-AY-tiv',ex:'Creative storytelling makes videos stand out in the feed.',exHe:'סיפור יצירתי גורם לסרטונים לבלוט בפיד.'},
          {en:'trend',he:'טרנד / מגמה',pron:'TREND',ex:'Everyone joined the viral dance trend this week.',exHe:'כולם הצטרפו לטרנד הריקוד הוויראלי השבוע.'},
          {en:'platform',he:'פלטפורמה דיגיטלית',pron:'PLAT-form',ex:'Short video platforms dominate mobile entertainment.',exHe:'פלטפורמות וידאו קצר שולטות בבידור הנייד.'}
        ],
        reading:{
          title:'איך סרטון רשת הופך לוויראלי',
          passage:'Last month, sixteen-year-old Hadar had a creative idea for a short video. He documented an incredible science experiment using magnets and colored neon liquid. Within twenty minutes of posting, the video received thousands of likes. The platform algorithm detected high audience retention, so it recommended the video to millions of feeds worldwide. By the following morning, the clip reached five million views and inspired thousands of creators to try the experiment themselves.',
          vocabulary:[
            {en:'documented',he:'תיעד'},{en:'magnets',he:'מגנטים'},{en:'liquid',he:'נוזל'},{en:'posting',he:'פרסום'},
            {en:'retention',he:'שמירת עניין'},{en:'recommended',he:'המלצה'},{en:'worldwide',he:'ברחבי העולם'},{en:'following',he:'הבא'},
            {en:'views',he:'צפיות'},{en:'inspired',he:'העניק השראה'},{en:'creators',he:'יוצרים'},{en:'themselves',he:'בעצמם'}
          ],
          questions:[
            {q:'מה גרם לאלגוריתם להמליץ על הסרטון של הדר למיליוני משתמשים?',opts:['שמירת עניין גבוהה של הקהל (retention)','כי הסרטון היה ארוך מאוד','כי שילמו על פרסום ממומן'],ans:'שמירת עניין גבוהה של הקהל (retention)',why:'בקטע כתוב: The platform algorithm detected high audience retention, so it recommended the video.'},
            {q:'לכמה צפיות הגיע הסרטון עד הבוקר שלמחרת?',opts:['חמישה מיליון צפיות','מאה צפיות','אלף צפיות'],ans:'חמישה מיליון צפיות',why:'בקטע כתוב: By the following morning, the clip reached five million views.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u1.x1',skill:'grammar',rule:'a2-past-trends',q:'Yesterday, the creator ___ a new tech video.',opts:['uploaded','upload','uploading'],ans:'uploaded',why:'yesterday מציין עבר → uploaded.',hint:'עבר של upload.'},
          {t:'mcq',id:'u1.x2',skill:'grammar',rule:'a2-past-trends',q:'The short clip ___ viral across the world last week.',opts:['went','go','gone'],ans:'went',why:'העבר של go הוא went (went viral).',hint:'עבר לא-רגיל של go.'},
          {t:'type',id:'u1.x3',skill:'grammar',rule:'a2-past-trends',q:'השלם את צורת העבר של watch: Millions of people ___ the video.',ans:['watched'],why:'watch + ed = watched.',hint:'watched.'},
          {t:'scr',id:'u1.x4',skill:'grammar',rule:'a2-past-trends',q:'סדר את המשפט: הסרטון הגיע למיליון צפיות.',sentence:'The video reached one million views.',ans:['The video reached one million views.'],why:'The video + reached + one million views.',hint:'מתחילים ב-The video.'},
          {t:'gap',id:'u1.x5',skill:'grammar',rule:'a2-past-trends',q:'השלם את מילת העבר:',sentence:'She ___ a very creative trend two days ago.',ans:['created'],why:'two days ago דורש עבר: created.',hint:'create + d.'}
        ]
      },
      {
        id:'u2', n:2, icon:'🌍', color:'gold', cefr:'A2',
        title:'Extreme Nature & Wildlife Records',
        he:'שיאי טבע פראי ועולם החי (עובדות מעניינות A2)',
        lead:'הטבע מלא בשיאים קיצוניים: חיות שמחזיקות מעמד בלחץ אדיר במעמקים וטורפים עם כוחות על. לומדים להשוות בין שיאנים בעזרת דרגות השוואה.',
        canDo:['להשוות בין תופעות טבע וחיות: deeper than, the most dangerous','לתאר שיאי טבע קיצוניים ועובדות מעניינות באנגלית','להשתמש באוצר מילים מדעי על מעמקי הים והישרדות'],
        fact:'חסילון האקדח (Pistol Shrimp) סוגר את הצבת שלו במהירות מטורפת שיוצרת בועת חום בטמפרטורת פני השמש (4,700°C) וקול חזק ממטוס סילון!',
        rules:[
          {id:'a2-comp-hadar', title:'דרגות השוואה ושיאים: -er than לעומת the -est', short:'deeper than · the deepest · more extreme than · the most extreme',
           formula:'Adjective-er + than (השוואה בין 2)\nThe + adjective-est (השיאן של כולם)',
           body:'משתמשים בסיומת <b>-er + than</b> להשוואה בין שני דברים (deeper than). לתארים ארוכים שמים <b>more ... than</b>. כדי להכתיר את השיאן שמים <b>the + -est</b> או <b>the most</b>.',
           examples:[{en:'The Mariana Trench is deeper than Mount Everest is tall.',he:'שקע מריאנה עמוק יותר מגובהו של הר האוורסט.'},{en:'The blue whale is the heaviest creature on Earth.',he:'הלווייתן הכחול הוא היצור הכבד ביותר בכדור הארץ.'}],
           mistake:'It is the <b>most deep</b> trench. → It is the <b>deepest</b> trench.',
           hook:'תואר קצר מקבל est בסוף, לא most!'}
        ],
        words:[
          {en:'record',he:'שיא עולמי',pron:'REK-ord',ex:'The peregrine falcon holds the world speed record in the air.',exHe:'הבז הנודד מחזיק בשיא המהירות העולמי באוויר.'},
          {en:'extreme',he:'קיצוני',pron:'ex-TREEM',ex:'Extreme pressure in deep ocean trenches crushes normal submarines.',exHe:'לחץ קיצוני בשקעי אוקיינוס עמוקים מוחץ צוללות רגילות.'},
          {en:'depth',he:'עומק',pron:'DEPTH',ex:'Strange glowing fish live at a depth of four thousand meters.',exHe:'דגים זוהרים ומוזרים חיים בעומק של ארבעת אלפים מטרים.'},
          {en:'pressure',he:'לחץ',pron:'PRESH-er',ex:'Deep sea creatures adapt to survive extreme water pressure.',exHe:'יצורי מעמקים מסתגלים כדי לשרוד לחץ מים קיצוני.'},
          {en:'survive',he:'לשרוד',pron:'ser-VYV',ex:'Tardigrades can survive outer space and freezing ice.',exHe:'דובוני מים מסוגלים לשרוד בחלל החיצון ובקרח קפוא.'},
          {en:'organism',he:'אורגניזם / יצור חי',pron:'OR-guh-niz-um',ex:'The honey mushroom is the largest single living organism on Earth.',exHe:'פטריית הדבש היא האורגניזם החי הבודד הגדול ביותר בכדור הארץ.'},
          {en:'phenomenon',he:'תופעה מדעית',pron:'feh-NOM-eh-non',ex:'Bioluminescence is an incredible glowing natural phenomenon.',exHe:'ביולומינצנציה היא תופעת טבע מדהימה של פליטת אור.'}
        ],
        reading:{
          title:'מסע אל מעמקי שקע מריאנה',
          passage:'Eleven kilometers below the surface of the Pacific Ocean lies the Mariana Trench, the deepest point on our planet. In this pitch-black realm, water pressure is one thousand times stronger than at sea level. Scientists believed that no complex life could survive in such an extreme environment. However, robotic submersibles discovered transparent snailfish swimming effortlessly along the seabed. These fish have flexible bones and special chemical compounds in their cells, making them the deepest-living vertebrates ever discovered.',
          vocabulary:[
            {en:'surface',he:'פני השטח'},{en:'trench',he:'שקע'},{en:'realm',he:'ממלכה / תחום'},{en:'submersibles',he:'צוללות מחקר'},
            {en:'transparent',he:'שקוף'},{en:'effortlessly',he:'ללא מאמץ'},{en:'seabed',he:'קרקעית הים'},{en:'flexible',he:'גמיש'},
            {en:'compounds',he:'תרכובות'},{en:'cells',he:'תאים'},{en:'vertebrates',he:'בעלי חוליות'},{en:'discovered',he:'התגלו'}
          ],
          questions:[
            {q:'מה עוצמת לחץ המים בשקע מריאנה בהשוואה לפני הים?',opts:['פי 1,000 חזק יותר מבלחץ פני הים','זהה בדיוק ללחץ פני הים','פי 2 בלבד'],ans:'פי 1,000 חזק יותר מבלחץ פני הים',why:'בקטע כתוב: water pressure is one thousand times stronger than at sea level.'},
            {q:'איזה יצור שקוף התגלה שוחה בקלות בקרקעית השקע?',opts:['דג חילזון שקוף (transparent snailfish)','כריש ענק','דולפין'],ans:'דג חילזון שקוף (transparent snailfish)',why:'בקטע כתוב: robotic submersibles discovered transparent snailfish swimming effortlessly.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u2.x1',skill:'grammar',rule:'a2-comp-hadar',q:'The Mariana Trench is ___ than any other canyon on Earth.',opts:['deeper','deepest','more deep'],ans:'deeper',why:'השוואה בין שניים: deep + er + than.',hint:'deep + er.'},
          {t:'mcq',id:'u2.x2',skill:'grammar',rule:'a2-comp-hadar',q:'The blue whale is ___ creature on the planet.',opts:['the largest','larger','most large'],ans:'the largest',why:'השיאן המוחלט מקבל the + est: the largest.',hint:'the + est.'},
          {t:'type',id:'u2.x3',skill:'grammar',rule:'a2-comp-hadar',q:'השלם את תואר ההשוואה עבור heavy: An elephant is ___ than a rhino.',ans:['heavier'],why:'heavy מסתיים ב-y, ולכן הופך ל-heavier.',hint:'heavier.'},
          {t:'scr',id:'u2.x4',skill:'grammar',rule:'a2-comp-hadar',q:'סדר את המשפט: זהו האורגניזם הקיצוני ביותר בטבע.',sentence:'This is the most extreme organism in nature.',ans:['This is the most extreme organism in nature.'],why:'This is + the most extreme organism + in nature.',hint:'מתחילים ב-This is.'},
          {t:'gap',id:'u2.x5',skill:'grammar',rule:'a2-comp-hadar',q:'השלם את המילה החסרה אחרי תואר השוואה:',sentence:'This deep fish is smaller ___ a human hand.',ans:['than'],why:'אחרי smaller שמים than (מ-).',hint:'than (4 אותיות).'}
        ]
      },
      {
        id:'u3', n:3, icon:'💡', color:'pink', cefr:'A2',
        title:'Inventions & Future Technology',
        he:'המצאות וטכנולוגיית העתיד (טכנולוגיה ומדע A2)',
        lead:'רחפנים אוטונומיים, ערים חכמות ובינה מלאכותית מעצבים מחדש את חיינו. ביחידה זו לומדים לדבר על תוכניות עתידיות עם be going to ועל תוצאות אפשריות עם First Conditional.',
        canDo:['לדבר על תוכניות טכנולוגיות עם be going to','להשתמש במשפטי תנאי ראשון (If we build... we will solve...)','להסביר חידושים בעולם ה-AI והרובוטיקה'],
        fact:'שבבי מחשב מודרניים מכילים מיליארדי טרנזיסטורים זעירים שכל אחד מהם קטן פי 10,000 מעובי של שערה אנושית אחת!',
        rules:[
          {id:'a2-tech-future', title:'עתיד ותנאים טכנולוגיים: be going to & First Conditional', short:'is/are going to + פועל · If + Present, will + פועל',
           formula:'Engineers are going to launch the prototype next month.\nIf smart grids optimize electricity, cities will reduce pollution.',
           body:'משתמשים ב-<b>be going to</b> עבור תוכניות שכבר נכנסו לפיתוח. במשפטי תנאי (First Conditional) מתארים מה יקרה בעקבות טכנולוגיה חדשה: If + Present Simple, ו-will בתוצאה.',
           examples:[{en:'Autonomous drones are going to deliver emergency medicine.',he:'רחפנים אוטונומיים הולכים להעביר תרופות חירום.'},{en:'If AI assists doctors, diagnoses will become faster.',he:'אם בינה מלאכותית תסייע לרופאים, האבחונים יהפכו למהירים יותר.'}],
           mistake:'If engineers <b>will invent</b> new batteries, cars will drive further. → If engineers <b>invent</b> new batteries…',
           hook:'אחרי If משתמשים ב-Present Simple, לא ב-will!'}
        ],
        words:[
          {en:'invention',he:'המצאה',pron:'in-VEN-shun',ex:'The printing press was a revolutionary historical invention.',exHe:'דפוס הדפוס היה המצאה היסטורית מהפכנית.'},
          {en:'future',he:'עתיד',pron:'FYOO-cher',ex:'Renewable solar panels will power the future of transportation.',exHe:'פאנלים סולאריים מתחדשים יספקו אנרגיה לעתיד התחבורה.'},
          {en:'artificial',he:'מלאכותי (כמו AI)',pron:'ar-tih-FISH-ul',ex:'Artificial intelligence helps scientists analyze huge datasets.',exHe:'בינה מלאכותית עוזרת למדענים לנתח מאגרי נתונים ענקיים.'},
          {en:'smart',he:'חכם (דיגיטלי)',pron:'SMART',ex:'Smart sensors adjust street lights automatically to save energy.',exHe:'חיישנים חכמים מתאימים את תאורת הרחוב אוטומטית כדי לחסוך באנרגיה.'},
          {en:'develop',he:'לפתח',pron:'dih-VEL-up',ex:'Engineers work round the clock to develop cleaner energy sources.',exHe:'מהנדסים עובדים מסביב לשעון כדי לפתח מקורות אנרגיה נקיים יותר.'},
          {en:'solution',he:'פתרון',pron:'suh-LOO-shun',ex:'Recycling ocean plastics offers an innovative green solution.',exHe:'מיחזור פלסטיק מהאוקיינוס מציע פתרון ירוק וחדשני.'},
          {en:'energy',he:'אנרגיה',pron:'EN-er-jee',ex:'Fusion reactors might produce virtually unlimited clean energy.',exHe:'כורי היתוך עשויים לייצר אנרגיה נקייה כמעט ללא הגבלה.'}
        ],
        reading:{
          title:'ערי העתיד בשנת 2050',
          passage:'How are humans going to live thirty years from now? Architects and urban engineers are currently designing carbon-neutral vertical cities. In these futuristic hubs, buildings are going to grow their own fresh organic vegetables in aeroponic indoor farms. Flying electric taxis will transport commuters smoothly without traffic jams. If solar glass covers skyscraper windows, the buildings will generate all their own electricity. Most importantly, AI-controlled water purification systems will eliminate waste, making future cities clean, quiet, and sustainable.',
          vocabulary:[
            {en:'architects',he:'אדריכלים'},{en:'carbon-neutral',he:'ניטרלי מפחמן'},{en:'vertical',he:'אנכי'},{en:'futuristic',he:'עתידני'},
            {en:'organic',he:'אורגני'},{en:'indoor',he:'בתוך מבנה'},{en:'commuters',he:'נוסעים יומיומיים'},{en:'traffic',he:'תנועה'},
            {en:'generate',he:'לייצר'},{en:'purification',he:'טיהור'},{en:'eliminate',he:'לחסל / להעלים'},{en:'sustainable',he:'בר קיימא'}
          ],
          questions:[
            {q:'איפה יגדלו ירקות טריים במגדלי העתיד?',opts:['בחוות אנכיות סגורות בתוך הבניינים','בשדות רחוקים מחוץ לעיר','לא יגדלו ירקות כלל'],ans:'בחוות אנכיות סגורות בתוך הבניינים',why:'בקטע כתוב: buildings are going to grow their own fresh organic vegetables in aeroponic indoor farms.'},
            {q:'מה יקרה אם חלונות גורדי השחקים יצופו בזכוכית סולארית?',opts:['הבניינים ייצרו בעצמם את כל החשמל שלהם','הם יהיו חשוכים לחלוטין','החלונות יישברו בקלות'],ans:'הבניינים ייצרו בעצמם את כל החשמל שלהם',why:'בקטע כתוב: If solar glass covers skyscraper windows, the buildings will generate all their own electricity.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u3.x1',skill:'grammar',rule:'a2-tech-future',q:'Engineers ___ to test the flying taxi tomorrow.',opts:['are going','is going','going'],ans:'are going',why:'נושא ברבים (engineers = they) מקבל are going to.',hint:'רבים → are going.'},
          {t:'mcq',id:'u3.x2',skill:'grammar',rule:'a2-tech-future',q:'If we use solar glass, the skyscraper ___ its own electricity.',opts:['will generate','generated','generates to'],ans:'will generate',why:'תוצאה ב-First Conditional מקבלת will + פועל בסיסי.',hint:'will + פועל.'},
          {t:'type',id:'u3.x3',skill:'grammar',rule:'a2-tech-future',q:'השלם את המילה החסרה: The team is ___ to build a smart robot.',ans:['going'],why:'התבנית היא is going to.',hint:'going.'},
          {t:'scr',id:'u3.x4',skill:'grammar',rule:'a2-tech-future',q:'סדר את המשפט: בינה מלאכותית תסייע לרופאים בעתיד.',sentence:'Artificial intelligence will assist doctors in the future.',ans:['Artificial intelligence will assist doctors in the future.'],why:'Artificial intelligence + will assist doctors + in the future.',hint:'מתחילים ב-Artificial intelligence.'},
          {t:'gap',id:'u3.x5',skill:'grammar',rule:'a2-tech-future',q:'השלם את הפועל ב-Present Simple אחרי If:',sentence:'If cities ___ clean energy, pollution will decrease.',ans:['use'],why:'אחרי If משתמשים ב-Present Simple: cities use.',hint:'פועל בצורת המקור use.'}
        ]
      },
      {
        id:'u4', n:4, icon:'🧠', color:'cyan', cefr:'A2',
        title:'Mind-Blowing Brain & Science Facts',
        he:'סודות המוח ועובדות מדע מדהימות (מדעי המוח והיקום A2)',
        lead:'למה אנחנו חולמים? איך עובדות אשליות אופטיות? ואיך המוח האנושי מאחסן מידע עצום? לומדים להסביר השערות ומסקנות עם מודאלים (can, might, must) ומילות קישור (because, so).',
        canDo:['להסביר עובדות מדעיות מרתקות על המוח והאדם','להשתמש במודאלים להסקת מסקנות: must be, might happen','לחבר סיבה ותוצאה עם because ו-so'],
        fact:'למוח האנושי יש קיבולת אחסון שוות ערך לכ-2.5 מיליון ג\'יגה-בייט – מספיק כדי להקליט 300 שנים רצופות של וידאו באיכות HD מלאה!',
        rules:[
          {id:'a2-modals-brain', title:'מודאלים להסקה ומילות קישור: must be · might · because · so', short:'must (בטוח) · might (אולי) · because (כי) · so (לכן)',
           formula:'Optical illusions trick our eyes because the brain predicts patterns.\nThat memory must be very old.\nWe dream, so the brain organizes our memories.',
           body:'משתמשים ב-<b>must be</b> כשיש מסקנה הגיונית כמעט ודאית, וב-<b>might</b> כשיש השערה לא ודאית. <b>because</b> מסביר את הסיבה ("בגלל ש"), ו-<b>so</b> מסביר את התוצאה ("לכן").',
           examples:[{en:'Your brain must be processing visual signals right now.',he:'המוח שלך ודאי מעבד אותות חזותיים ברגע זה.'},{en:'Dreams might help our mind process emotions.',he:'חלומות עשויים לעזור למוחנו לעבד רגשות.'}],
           mistake:'Because he was tired <b>so</b> he slept. → Because he was tired, he slept.',
           hook:'משתמשים רק באחד: או because או so, לעולם לא שניהם יחד!'}
        ],
        words:[
          {en:'memory',he:'זיכרון',pron:'MEM-uh-ree',ex:'The human brain consolidates memory while you sleep.',exHe:'המוח האנושי מגבש את הזיכרון בזמן שאתה ישן.'},
          {en:'illusion',he:'אשליה (אופטית)',pron:'ih-LOO-zhun',ex:'An optical illusion proves that our eyes can be easily tricked.',exHe:'אשליה אופטית מוכיחה שקל להערים על העיניים שלנו.'},
          {en:'mystery',he:'תעלומה / מסתורין',pron:'MIS-tuh-ree',ex:'Consciousness remains the greatest unsolved mystery of science.',exHe:'התודעה נותרת התעלומה הבלתי פתורה הגדולה ביותר של המדע.'},
          {en:'curious',he:'סקרן',pron:'KYOOR-ee-us',ex:'Curious minds ask questions and discover breakthrough answers.',exHe:'מוחות סקרנים שואלים שאלות ומגלים תשובות פורצות דרך.'},
          {en:'evidence',he:'ראיות / הוכחות',pron:'EV-ih-dents',ex:'Brain scans provide clear evidence of active neural pathways.',exHe:'סריקות מוח מספקות ראיות ברורות לנתיבים עצביים פעילים.'},
          {en:'explain',he:'להסביר',pron:'ex-PLAYN',ex:'Psychologists try to explain why people experience deja vu.',exHe:'פסיכולוגים מנסים להסביר מדוע אנשים חווים דז\'ה וו.'},
          {en:'brain',he:'מוח',pron:'BRAYN',ex:'The brain uses twenty percent of all oxygen in the human body.',exHe:'המוח משתמש בעשרים אחוזים מכלל החמצן בגוף האדם.'}
        ],
        reading:{
          title:'למה המוח האנושי חולם בלילה?',
          passage:'Every single night while we sleep, our brain creates vivid, colorful movies inside our head called dreams. For centuries, philosophers wondered why dreaming happens. Today, neuroscientists have fascinating evidence. When you enter REM sleep, your brain replays the emotional memories of the day, filing important information and clearing out unnecessary noise. Because neural pathways fire rapidly without physical movement, dreams might feel completely real. Scientists believe that dreaming is essential for creative problem-solving and psychological health.',
          vocabulary:[
            {en:'vivid',he:'חי / מוחשי'},{en:'philosophers',he:'פילוסופים'},{en:'neuroscientists',he:'חוקרי מוח'},{en:'fascinating',he:'מרתק'},
            {en:'replays',he:'משחזר / מנגן שוב'},{en:'filing',he:'מתייק / מסדר'},{en:'unnecessary',he:'מיותר'},{en:'rapidly',he:'במהירות'},
            {en:'physical',he:'פיזי'},{en:'essential',he:'חיוני'},{en:'problem-solving',he:'פתרון בעיות'},{en:'psychological',he:'פסיכולוגי'}
          ],
          questions:[
            {q:'מה המוח עושה עם הזיכרונות של היום בזמן שנת חלום (REM)?',opts:['משחזר אותם, מתייק מידע חשוב ומנקה רעש מיותר','מוחק את כל הזיכרונות לצמיתות','מפסיק לפעול לחלוטין'],ans:'משחזר אותם, מתייק מידע חשוב ומנקה רעש מיותר',why:'בקטע כתוב: your brain replays the emotional memories of the day, filing important information and clearing out unnecessary noise.'},
            {q:'למה חלומות יכולים להרגיש אמיתיים לחלוטין?',opts:['כי נתיבים עצביים מופעלים במהירות במוח גם ללא תנועה פיזית','כי אנחנו לא באמת ישנים','כי העיניים פקוחות'],ans:'כי נתיבים עצביים מופעלים במהירות במוח גם ללא תנועה פיזית',why:'בקטע כתוב: Because neural pathways fire rapidly without physical movement, dreams might feel completely real.'}
          ]
        },
        grammar:[
          {t:'mcq',id:'u4.x1',skill:'grammar',rule:'a2-modals-brain',q:'Our eyes see light, ___ the brain creates the actual image.',opts:['but','because to','although so'],ans:'but',why:'ניגוד רעיוני בין העין למוח מסומן ב-but.',hint:'ניגוד: but.'},
          {t:'mcq',id:'u4.x2',skill:'grammar',rule:'a2-modals-brain',q:'The brain needs sleep ___ it can organize daily memories.',opts:['so that','because so','although'],ans:'so that',why:'מטרת השינה: so that (כדי ש...).',hint:'כדי ש: so that.'},
          {t:'type',id:'u4.x3',skill:'grammar',rule:'a2-modals-brain',q:'השלם את המודאל שמביע הסקה ודאית הגיונית: That optical trick ___ be an illusion.',ans:['must'],why:'must be = חייב להיות (הסקה הגיונית).',hint:'must.'},
          {t:'scr',id:'u4.x4',skill:'grammar',rule:'a2-modals-brain',q:'סדר את המשפט: המוח משתמש בעשרים אחוזים מהחמצן בגוף.',sentence:'The brain uses twenty percent of body oxygen.',ans:['The brain uses twenty percent of body oxygen.'],why:'The brain uses + twenty percent + of body oxygen.',hint:'מתחילים ב-The brain.'},
          {t:'gap',id:'u4.x5',skill:'grammar',rule:'a2-modals-brain',q:'השלם את המודאל שמביע אפשרות ("עשוי / עלול"):',sentence:'Curious students ___ discover amazing new facts.',ans:['might'],why:'might = עשוי / ייתכן ש...',hint:'might (5 אותיות).'}
        ]
      }
    ];
  }
  return JSON.parse(JSON.stringify(DEFAULT_UNITS));
}
let UNITS = JSON.parse(JSON.stringify(DEFAULT_UNITS));
let CURRENT_COURSE_ID='default';
let ACTIVE_CURRICULUM=null;
/* ============================================================
   Conversation scenarios
   ============================================================ */
const DEFAULT_SCENARIOS = [
{
  id:'newfriend', icon:'🤝', title:'חברה חדשה בכיתה', en:'A new friend',
  who:'Lily', role:'חברה חדשה בכיתה', level:'A1', focus:'Be questions', unit:'u1',
  desc:'ליילי חדשה בכיתה. שאלי אותה שאלות והכירו אחת את השנייה.',
  opening:"Hi Gefen! I am Lily. I am new in your class. Are you a dancer?",
  openingHe:'היי גפן! אני לילי. אני חדשה בכיתה שלך. את רקדנית?',
  startWords:[{en:'new',he:'חדשה'},{en:'friend',he:'חברה'}],
  steps:[
    {bot:"Cool! I like music too. What is your favourite song?",he:'מגניב! גם אני אוהבת מוזיקה. מה השיר האהוב עליך?',suggestions:['My favourite song is a pop song.','I love music from the radio.','I like many songs.']},
    {bot:"Nice! Is Dana your best friend?",he:'יפה! האם דנה החברה הכי טובה שלך?',suggestions:['Yes, she is my best friend.',"No, she isn't. Mia is my best friend.",'Yes, she is. She is funny.']},
    {bot:"Where is the dance studio?",he:'איפה סטודיו הריקוד?',suggestions:['The studio is near my school.','It is next to the park.','It is in my town.']}
  ],
  more:['Are you happy today?','Who is your teacher?','Is your school big?'],
  words:[{en:'new',he:'חדשה'},{en:'favourite',he:'אהוב'},{en:'funny',he:'מצחיקה'}]
},
{
  id:'studio', icon:'💃', title:'בסטודיו לריקוד', en:'At the dance studio',
  who:'Ms. Noa', role:'מורה לריקוד', level:'A1', focus:'can + like', unit:'u3',
  desc:'המורה נועה שואלת מה את יודעת לרקוד ומה את אוהבת.',
  opening:"Welcome to the dance studio, Gefen! I am Ms. Noa. Can you spin?",
  openingHe:'ברוכה הבאה לסטודיו, גפן! אני המורה נועה. את יודעת להסתובב?',
  startWords:[{en:'spin',he:'להסתובב'},{en:'stage',he:'במה'}],
  steps:[
    {bot:"Great! What do you love doing in class?",he:'נהדר! מה את אוהבת לעשות בשיעור?',suggestions:['I love dancing with my friends.','I like jumping and spinning.','I love learning new steps.']},
    {bot:"Can you jump high?",he:'את יודעת לקפוץ גבוה?',suggestions:['Yes, I can jump high.',"No, I can't. But I can try!",'Yes, I can. I love jumping.']},
    {bot:"What music do you like?",he:'איזו מוזיקה את אוהבת?',suggestions:['I like pop music.','I love songs with a fast beat.','I like music from movies.']}
  ],
  more:['Can you clap to the music?','Do you like the stage?','Can you smile and dance?'],
  words:[{en:'step',he:'צעד'},{en:'jump',he:'לקפוץ'},{en:'clap',he:'למחוא כפיים'}]
},
{
  id:'party', icon:'🎂', title:'מסיבת יום הולדת', en:'Birthday party',
  who:'Maya', role:'החברה הכי טובה', level:'A1', focus:'have / has', unit:'u2',
  desc:'מאיה מזמינה אותך למסיבה. מה יש לך ללבוש ולהביא?',
  opening:"Hi Gefen! My birthday party is on Friday! Do you have a dress for the party?",
  openingHe:'היי גפן! מסיבת יום ההולדת שלי ביום שישי! יש לך שמלה למסיבה?',
  startWords:[{en:'party',he:'מסיבה'},{en:'dress',he:'שמלה'}],
  steps:[
    {bot:"Cool! What colour is your dress?",he:'מגניב! באיזה צבע השמלה שלך?',suggestions:['My dress is pink.','I have a blue dress.','My dress is red and white.']},
    {bot:"Dana has a camera. Do you have a camera too?",he:'לדנה יש מצלמה. גם לך יש?',suggestions:["No, I don't have a camera.",'Yes, I have a camera.','I have a phone.']},
    {bot:"We have a secret song for the party! Do you like it?",he:'יש לנו שיר סודי למסיבה! את אוהבת אותו?',suggestions:['Yes, I love it!','I like it. It is fun.','I love dancing to it.']}
  ],
  more:['Do you have a sister?','Who is at the party?','Do you have a gift?'],
  words:[{en:'secret',he:'סוד'},{en:'camera',he:'מצלמה'},{en:'gift',he:'מתנה'}]
},
{
  id:'week', icon:'🗓️', title:'השבוע שלי', en:'My week',
  who:'Dana', role:'חברה מהחוג', level:'A1', focus:'Present Simple', unit:'u4',
  desc:'דנה שואלת על השגרה שלך: מתי רוקדים ומה עושים בסוף השבוע.',
  opening:"Hi Gefen! I practice dance every day. What do you do after school?",
  openingHe:'היי גפן! אני מתאמנת בריקוד כל יום. מה את עושה אחרי בית ספר?',
  startWords:[{en:'practice',he:'להתאמן'},{en:'weekend',he:'סוף שבוע'}],
  steps:[
    {bot:"Nice! Do you meet your friends after school?",he:'יפה! את נפגשת עם חברות אחרי בית ספר?',suggestions:['Yes, I meet my friends.','I meet Mia at the park.','Sometimes I meet my friends.']},
    {bot:"What do you do on the weekend?",he:'מה את עושה בסוף השבוע?',suggestions:['I dance and watch videos.','I play with my friends.','I listen to music.']},
    {bot:"My sister dances too. She has a class on Monday. Do you have a class?",he:'גם אחותי רוקדת. יש לה חוג ביום שני. יש לך חוג?',suggestions:['Yes, I have a dance class.',"No, I don't have a class.",'I have a class on Tuesday.']}
  ],
  more:['Do you always smile on stage?','Who dances with you?','What do you wear to class?'],
  words:[{en:'sometimes',he:'לפעמים'},{en:'always',he:'תמיד'},{en:'class',he:'חוג'}]
},
{
  id:'free', icon:'💬', title:'שיחה חופשית', en:'Free talk',
  who:'Maya', role:'חברה לתרגול אנגלית', level:'A1–A2', focus:'Free conversation', unit:'',
  desc:'בלי תסריט. דברי על ריקוד, חברות או סתם על היום שלך.',
  opening:"Hi Gefen! I am Maya, your English friend. We can talk about dance, friends, music – anything you like. What do you want to talk about?",
  openingHe:'היי גפן! אני מאיה, החברה שלך לאנגלית. אפשר לדבר על ריקוד, חברות, מוזיקה – מה שבא לך. על מה תרצי לדבר?',
  startWords:[{en:'choose',he:'לבחור'},{en:'topic',he:'נושא'}],
  steps:[
    {bot:"Nice choice! Tell me one thing you love about it.",he:'בחירה טובה! ספרי לי דבר אחד שאת אוהבת בזה.',suggestions:['I love dancing with my friends.','I love the music.','I love it because it is fun.']},
    {bot:"What is your best friend like?",he:'איך החברה הכי טובה שלך?',suggestions:['She is kind and funny.','She is my best friend. We dance together.','She is nice.']},
    {bot:"Ask me a question now – I want to hear your English!",he:'עכשיו שאלי אותי שאלה – אני רוצה לשמוע את האנגלית שלך!',suggestions:['What is your favourite song?','Can you dance?','Do you have a best friend?']}
  ],
  more:['What do you do on the weekend?','Do you like music?','Who is your best friend?'],
  words:[{en:'topic',he:'נושא'},{en:'favourite',he:'אהוב'},{en:'best',he:'הכי טוב'}]
}
];
let SCENARIOS = JSON.parse(JSON.stringify(DEFAULT_SCENARIOS));
function defaultScenariosForProfile(){
  const lang=CURRENT_LEARNER_PROFILE.learningLanguage||'English';
  const level=CURRENT_LEARNER_PROFILE.level||'A1';
  const ui=CURRENT_LEARNER_PROFILE.uiLanguage||'he';
  if(lang==='French'){
    return [
      {
        id:'fr-cafe', icon:'🥐', title:'בבית קפה בפריז', en:'Au café à Paris',
        who:'Claire', role:'מלצרית וחברה בפריז', level, focus:'Futur proche & commandes', unit:'u1',
        desc:'קלייר פוגשת אותך בבית קפה בשכונה. דברו על השגרה ועל התוכניות לסוף השבוע.',
        opening:'Bonjour Aviv ! Bienvenue au café du quartier. Qu\'est-ce que tu vas faire ce week-end ?',
        openingHe:'שלום אביב! ברוך הבא לבית הקפה השכונתי. מה אתה הולך לעשות בסוף השבוע הזה?',
        startWords:[{en:'quartier',he:'שכונה'},{en:'projet',he:'תוכנית'}],
        steps:[
          {bot:'Super idée ! Et qu\'est-ce que tu voudrais boire ou manger aujourd\'hui ?',he:'רעיון מעולה! ומה היית רוצה לשתות או לאכול היום?',suggestions:['Je voudrais un café et un croissant, s\'il vous plaît.','Je prends un thé avec un morceau de fromage.','Je voudrais le plat du jour, s\'il vous plaît.']},
          {bot:'Très bien ! Qu\'est-ce que tu as fait la semaine dernière ?',he:'מצוין! מה עשית בשבוע שעבר?',suggestions:['La semaine dernière, j\'ai visité un musée.','Hier, j\'ai travaillé et j\'ai dîné avec des amis.','J\'ai découvert un bon restaurant.']},
          {bot:'Comment est-ce que tu préfères voyager en ville ?',he:'איך אתה מעדיף להתנייד בעיר?',suggestions:['Le métro est plus rapide que le bus.','Je préfère marcher dans le quartier.','Le train est très pratique.']}
        ],
        more:['Quel est ton plat français préféré ?','Est-ce que tu vas voyager bientôt ?','Où est-ce que tu habites ?'],
        words:[{en:'voudrais',he:'הייתי רוצה'},{en:'ensemble',he:'ביחד'},{en:'rapide',he:'מהיר'}]
      },
      {
        id:'fr-voyage', icon:'🚄', title:'בתחנת הרכבת ובטיול', en:'À la gare et en voyage',
        who:'Marc', role:'חבר לעבודה בליון', level, focus:'Passé composé & comparaisons', unit:'u4',
        desc:'מארק מתכנן איתך נסיעה ברכבת המהירה ומשווה בין אפשרויות.',
        opening:'Salut Aviv ! Le train TGV part bientôt. Est-ce que tu as déjà réservé ton billet ?',
        openingHe:'היי אביב! רכבת ה-TGV יוצאת בקרוב. האם כבר הזמנת את הכרטיס שלך?',
        startWords:[{en:'gare',he:'תחנת רכבת'},{en:'billet',he:'כרטיס'}],
        steps:[
          {bot:'Parfait ! Pourquoi est-ce que tu préfères le train à l\'avion ?',he:'מושלם! למה אתה מעדיף את הרכבת על פני המטוס?',suggestions:['Le train est plus pratique et moins cher.','La gare est au centre de la ville.','Le voyage en train est plus agréable.']},
          {bot:'Qu\'est-ce que nous allons visiter en premier ?',he:'במה אנחנו הולכים לבקר קודם?',suggestions:['Nous allons visiter le vieux quartier.','D\'abord, nous allons déjeuner au bistrot.','Nous allons voir une exposition.']},
          {bot:'Quel est ton meilleur souvenir de voyage ?',he:'מהו זיכרון הטיול הכי טוב שלך?',suggestions:['J\'ai adoré mon voyage l\'année dernière.','J\'ai goûté des plats délicieux.','C\'était un week-end magnifique.']}
        ],
        more:['À quelle heure est le prochain train ?','Est-ce que tu aimes la cuisine française ?','Qu\'est-ce que tu vas faire demain ?'],
        words:[{en:'horaire',he:'לוח זמנים'},{en:'cher',he:'יקר'},{en:'souvenir',he:'זיכרון'}]
      }
    ];
  }
  if(ui==='es'){
    return [
      {
        id:'es-culinary-biz', icon:'🍳', title:'Proyecto gastronómico y de negocios', en:'Culinary & Business Pitch',
        who:'Elena', role:'Socia creativa y consultora', level, focus:'Present Perfect & First Conditional', unit:'u1',
        desc:'Conversa con Elena sobre gastronomía, propuestas de negocio y tendencias creativas en inglés B1.',
        opening:'Hi Yuli! I have just reviewed our new culinary and design concept. Have you ever worked on a project that combines food and business?',
        openingHe:'¡Hola, Yuli! Acabo de revisar nuestro nuevo concepto gastronómico y de diseño. ¿Alguna vez has trabajado en un proyecto que combine cocina y negocios?',
        startWords:[{en:'proposal',he:'propuesta'},{en:'cuisine',he:'gastronomía'}],
        steps:[
          {bot:'That sounds fascinating! If we launch the studio next month, what kind of experience will we offer our clients?',he:'¡Suena fascinante! Si lanzamos el estudio el próximo mes, ¿qué tipo de experiencia ofreceremos a nuestros clientes?',suggestions:['If we launch next month, we will offer homemade tasting menus.','We will organize creative workshops if the budget allows it.','Clients will love it if we combine modern architecture and local cuisine.']},
          {bot:'Great point! How should we design the interior layout of the space?',he:'¡Buen punto! ¿Cómo deberíamos diseñar la distribución interior del espacio?',suggestions:['The main room should be spacious and bright.','It could be designed around a central courtyard.','We should use sustainable materials like wood and glass.']},
          {bot:'And what about the brand style and wardrobe for our team?',he:'¿Y qué hay del estilo de la marca y el vestuario de nuestro equipo?',suggestions:['They should wear timeless, tailored aprons and jackets.','Natural linen fabric must be the best option for comfort.','A minimalist pattern might fit our brand identity.']}
        ],
        more:['What dish have you cooked recently that you are proud of?','What architectural style inspires you the most?','How do you choose between fast trends and timeless fashion?'],
        words:[{en:'sustainable',he:'sostenible'},{en:'spacious',he:'espacioso'},{en:'timeless',he:'atemporal'}]
      },
      {
        id:'es-arch-fashion', icon:'🏛️', title:'Estudio de arquitectura y moda', en:'Architecture & Fashion Studio',
        who:'Lucas', role:'Arquitecto y diseñador en Milán', level, focus:'Passive Voice & Modals', unit:'u3',
        desc:'Habla con Lucas sobre restauración de espacios urbanos, exposiciones de diseño y moda ética.',
        opening:'Welcome to the studio, Yuli! This building was restored two years ago. What do you notice first when you enter a well-designed space?',
        openingHe:'¡Bienvenida al estudio, Yuli! Este edificio fue restaurado hace dos años. ¿En qué te fijas primero cuando entras en un espacio bien diseñado?',
        startWords:[{en:'restore',he:'restaurar'},{en:'craftsmanship',he:'artesanía'}],
        steps:[
          {bot:'I completely agree. Natural light changes everything. Have you visited any memorable buildings or exhibitions recently?',he:'Estoy totalmente de acuerdo. La luz natural lo cambia todo. ¿Has visitado algún edificio o exposición memorable recientemente?',suggestions:['Last year I visited a historic building that was converted into a gallery.','I have seen several modern spaces with open-plan layouts.','I love buildings where traditional structure meets modern glass.']},
          {bot:'We are hosting a sustainable fashion pop-up here next week. Why do you think ethical craftsmanship is becoming so important?',he:'La semana que viene organizaremos aquí un evento de moda sostenible. ¿Por qué crees que la artesanía ética se está volviendo tan importante?',suggestions:['People prefer garments that last for years instead of fast trends.','High-quality fabrics feel better and are more sustainable.','Brands should invest in timeless design rather than mass production.']},
          {bot:'If you could design your own creative space or collection, what would it look like?',he:'Si pudieras diseñar tu propio espacio creativo o colección, ¿cómo sería?',suggestions:['It would combine warm architecture, fashion, and a small café.','I would focus on clean lines, natural fabrics, and a welcoming kitchen.','If I had the budget, I would restore an old courtyard house.']}
        ],
        more:['Which material do you prefer in interior design?','What makes a piece of clothing truly timeless?','What business deadline are you working toward right now?'],
        words:[{en:'layout',he:'distribución'},{en:'tailored',he:'a medida'},{en:'budget',he:'presupuesto'}]
      }
    ];
  }
  const isBarry = S.name==='בארי' || CURRENT_LEARNER_PROFILE.interests.includes('כדורגל') || (CURRENT_LEARNER_PROFILE.gender==='male' && CURRENT_LEARNER_PROFILE.level==='A2' && lang==='English');
  if(isBarry){
    return [
      {
        id:'barry-football', icon:'⚽', title:'המשחק על האליפות', en:'The Championship Match',
        who:'Coach Leo', role:'מאמן כדורגל', level, focus:'Past Simple & Match tactics', unit:'u1',
        desc:'המאמן ליאו מנתח איתך את הניצחון הגדול במשחק הגמר והשער המכריע.',
        opening:'What an incredible match today, Barry! You scored the winning goal in the final minute. How did you feel when the ball hit the net?',
        openingHe:'איזה משחק מדהים היום, בארי! הבקעת את שער הניצחון בדקה האחרונה. איך הרגשת כשהכדור פגע ברשת?',
        startWords:[{en:'stadium',he:'אצטדיון'},{en:'score',he:'להבקיע'}],
        steps:[
          {bot:'You ran so fast past their defense! Who passed you the ball before you scored?',he:'רצת כל כך מהר מעבר להגנה שלהם! מי מסר לך את הכדור לפני שהבקעת?',suggestions:['My teammate passed me the ball from the midfield.','Our captain kicked a great cross into the penalty box.','I intercepted the ball and ran straight to the goal.']},
          {bot:'That teamwork was pure magic! What is our main strategy for the next big match?',he:'עבודת הצוות הזו הייתה קסם טהור! מהי האסטרטגיה המרכזית שלנו למשחק הגדול הבא?',suggestions:['We need to practice our defense and quick counter-attacks.','We should keep possession of the ball and pass faster.','We will win if everyone supports each other on the pitch.']},
          {bot:'You have the heart of a true champion. Which world-famous football stadium would you love to play in?',he:'יש לך לב של אלוף אמיתי. באיזה אצטדיון כדורגל מפורסם בעולם היית רוצה לשחק?',suggestions:['I would love to play at Camp Nou or Wembley Stadium.','Santiago Bernabéu is my dream stadium because of its history.','Playing in front of eighty thousand roaring fans would be unforgettable.']}
        ],
        more:['Who is your favourite football player of all time?','Did you train hard yesterday before the game?','How do you celebrate with your teammates after a trophy win?'],
        words:[{en:'champion',he:'אלוף'},{en:'teammate',he:'חבר לקבוצה'},{en:'trophy',he:'גביע'}]
      },
      {
        id:'barry-safari', icon:'🦁', title:'מסע ספארי בעקבות טורפים', en:'Wild Safari Expedition',
        who:'Ranger Alex', role:'חוקר חיות בר וספארי', level, focus:'Comparatives & Animal Superpowers', unit:'u2',
        desc:'הריינג\'ר אלכס לוקח אותך לגילוי כוחות-העל המדהימים של טורפי הסוואנה.',
        opening:'Welcome to the savannah research base, Barry! Look through your binoculars—a cheetah is resting under that acacia tree. Did you know it is the fastest land animal on Earth?',
        openingHe:'ברוך הבא לתחנת המחקר בסוואנה, בארי! הסתכל במשקפת—ברדלס נח מתחת לעץ השיטה. ידעת שהוא חיית היבשה המהירה ביותר בכדור הארץ?',
        startWords:[{en:'predator',he:'טורף'},{en:'cheetah',he:'ברדלס'}],
        steps:[
          {bot:'It can reach one hundred kilometers per hour in three seconds! Why do you think camouflage is so important for wild predators?',he:'הוא יכול להגיע ל-100 קמ"ש תוך 3 שניות! למה לדעתך הסוואה כל כך חשובה לטורפים בטבע?',suggestions:['Camouflage helps predators hide in the grass before they hunt.','It allows animals to stay invisible to their prey until the last second.','Without natural camouflage, it is much harder to survive in the wild.']},
          {bot:'Exactly right. Look above us! A peregrine falcon is diving. Which animal superpower do you find the most fascinating?',he:'מדויק לגמרי. הסתכל מעלינו! בז נודד צולל. איזה כוח-על של בעל חיים הכי מרתק אותך?',suggestions:['I love the extreme speed of the cheetah and the diving falcon.','An eagle has sight that is much sharper than human vision.','Electric eels and deep-sea creatures with natural light are incredible.']},
          {bot:'Nature is full of miracles. If we build a wildlife sanctuary, which endangered species should we protect first?',he:'הטבע מלא בניסים. אם נבנה שמורת טבע, על איזה מין בסכנת הכחדה נגן קודם?',suggestions:['We should protect big cats like lions, tigers, and cheetahs.','Rhinos and sea turtles need safe habitats away from danger.','Every single species is connected, so we must protect their entire ecosystem.']}
        ],
        more:['Have you ever seen an owl hunt at night?','Which animal is stronger: a grizzly bear or a gorilla?','How do chameleon colors change when their temperature shifts?'],
        words:[{en:'camouflage',he:'הסוואה'},{en:'wildlife',he:'חיות בר'},{en:'habitat',he:'סביבת מחיה'}]
      },
      {
        id:'barry-science', icon:'🔬', title:'מעבדת מדע וחלל', en:'Space Facts & Science Lab',
        who:'Dr. Noah', role:'חוקר חלל ואסטרופיזיקאי', level, focus:'Modals & Mind-blowing Facts', unit:'u4',
        desc:'ד"ר נח עורך איתך ניסויים ומגלה עובדות מדעיות מפתיעות על החלל.',
        opening:'Hello Barry! Welcome to the astrophysics laboratory. Here is a mind-blowing fact: one single day on planet Venus is longer than its entire year! Can you guess why that happens?',
        openingHe:'שלום בארי! ברוך הבא למעבדת האסטרופיזיקה. הנה עובדה שתפוצץ לך את המוח: יום אחד בכוכב הלכת נוגה ארוך יותר מכל השנה שלו! אתה יכול לנחש למה זה קורה?',
        startWords:[{en:'galaxy',he:'גלקסיה'},{en:'gravity',he:'כוח כבידה'}],
        steps:[
          {bot:'Venus rotates backwards and spins extremely slowly! What happens to gravity when an astronaut walks on the Moon?',he:'נוגה מסתובב לאחור ומסתובב לאט בצורה קיצונית! מה קורה לכוח הכבידה כשאסטרונאוט הולך על הירח?',suggestions:['The Moon has weaker gravity, so you can jump six times higher!','There is less mass on the Moon, so gravity is much lighter than on Earth.','Astronauts almost float because gravitational pull is lower.']},
          {bot:'Brilliant scientific thinking! What do you think would happen if we sent a robotic rover inside a black hole?',he:'חשיבה מדעית מבריקה! מה לדעתך יקרה אם נשלח רכב מחקר רובוטי לתוך חור שחור?',suggestions:['Gravity must be so intense that even light cannot escape it.','The rover might lose radio contact because space and time bend.','Scientists believe matter stretches like spaghetti near the center!']},
          {bot:'You have the mind of a true scientist, Barry. If you could design your own science experiment, what would you test?',he:'יש לך מוח של מדען אמיתי, בארי. אם היית יכול לתכנן ניסוי מדעי משלך, מה היית בודק?',suggestions:['I would test how plants grow in zero gravity aboard the space station.','I would build a magnetic levitation train that travels with zero friction.','I would explore deep ocean trenches to discover new glowing organisms.']}
        ],
        more:['How many stars do you think exist in our galaxy?','Why is Mars called the Red Planet?','Can solar energy power an entire space base on Mars?'],
        words:[{en:'universe',he:'יקום'},{en:'experiment',he:'ניסוי'},{en:'discover',he:'לגלות'}]
      }
    ];
  }
  const isMaayan = S.name==='מעיין' || CURRENT_LEARNER_PROFILE.interests.includes('פוקימון');
  if(isMaayan){
    return [
      {
        id:'maayan-oak', icon:'⚡', title:'פגישה עם פרופסור אוק', en:'Meeting Professor Oak',
        who:'Prof. Oak', role:'חוקר פוקימונים ראשי', level, focus:'Be & First Pokemon', unit:'u1',
        desc:'פרופסור אוק פוגש אותך במעבדה לעזור לך לבחור את שותף הפוקימון הראשון שלך.',
        opening:'Welcome to the world of Pokemon, Maayan! I am Professor Oak. Are you ready to become a great trainer?',
        openingHe:'ברוך הבא לעולם הפוקימונים, מעיין! אני פרופסור אוק. אתה מוכן להפוך למאמן דגול?',
        startWords:[{en:'trainer',he:'מאמן'},{en:'creature',he:'יצור'}],
        steps:[
          {bot:'Look at the three starter Poke Balls on the desk! Which element type is your favourite?',he:'הסתכל על שלושת הפוקדורים ההתחלתיים על השולחן! איזה סוג אלמנט הכי אהוב עליך?',suggestions:['I like electric Pokemon because they are fast.','I love fire Pokemon like Charmander.','Water Pokemon are cool because they swim so well.']},
          {bot:'Look, a wild Pikachu just appeared! Can you say hello to it in English?',he:'תראה, פיקאצ\'ו פראי הרגע הופיע! אתה יכול להגיד לו שלום באנגלית?',suggestions:['Hello Pikachu, you are very cute and yellow!','Hi Pikachu! Are you ready for an exciting adventure?','Pikachu is my best partner and friend.']},
          {bot:'Wonderful! What items do you have in your trainer backpack for the journey?',he:'נפלא! איזה פריטים יש לך בתרמיל המאמן שלך לקראת המסע?',suggestions:['I have five Poke Balls and two healing potions.','I have a map of the region and a Pokedex.','I have supplies and a tent for camping.']}
        ],
        more:['Is Pikachu fast in battle?','What is your favourite Pokemon type?','Can Charizard fly over mountains?'],
        words:[{en:'electric',he:'חשמלי'},{en:'battle',he:'קרב'},{en:'backpack',he:'תרמיל'}]
      },
      {
        id:'maayan-brock', icon:'🥊', title:'קרב מכון פיוטר', en:'Pewter Gym Battle',
        who:'Gym Leader Brock', role:'מנהיג מכון סלע', level, focus:'can / can\'t & moves', unit:'u2',
        desc:'מנהיג המכון ברוק מאתגר אותך בקרב על תג המכון הראשון.',
        opening:'Welcome to the Pewter Gym, Maayan! I train giant Rock Pokemon. Can your electric Pikachu beat my rock defense?',
        openingHe:'ברוך הבא למכון פיוטר, מעיין! אני מאמן פוקימוני סלע ענקיים. האם פיקאצ\'ו החשמלי שלך יכול לנצח את הגנת הסלע שלי?',
        startWords:[{en:'attack',he:'מתקפה'},{en:'dodge',he:'להתחמק'}],
        steps:[
          {bot:'My Onix uses Rock Throw! What is your battle command for Pikachu?',he:'האוניקס שלי משתמש בהטלת סלעים! מהי פקודת הקרב שלך לפיקאצ\'ו?',suggestions:['Pikachu, dodge the rock and use Quick Attack!','Pikachu can jump high to avoid the falling stones!','Use Iron Tail directly on the ground to create an earthquake!']},
          {bot:'That was an incredibly fast counter-move! Can Pikachu learn new elemental moves as it trains?',he:'זה היה מהלך נגדי מהיר בצורה מדהימה! פיקאצ\'ו יכול ללמוד מתקפות אלמנטים חדשות כשהוא מתאמן?',suggestions:['Yes, it can learn Thunderbolt and Volt Tackle!','With regular practice, my team gets stronger every single day.','Pikachu can also evolve into Raichu in the future.']},
          {bot:'You earned my respect and the Boulder Badge! Where will your adventure take you next?',he:'הרווחת את הכבוד שלי ואת תג הסלע! לאן ההרפתקה שלך תיקח אותך הלאה?',suggestions:['We are going to Cerulean City to challenge the Water Gym.','We travel through Viridian Forest to catch new rare friends.','Our ultimate goal is winning the Pokemon League Championship!']}
        ],
        more:['Do you have a water Pokemon on your team?','Can flying Pokemon dodge ground attacks?','How many badges do you need for the league?'],
        words:[{en:'badge',he:'תג'},{en:'strong',he:'חזק'},{en:'victory',he:'ניצחון'}]
      }
    ];
  }
  const isHadar = S.name==='הדר' || CURRENT_LEARNER_PROFILE.interests.includes('טרנדים');
  if(isHadar){
    return [
      {
        id:'hadar-trends', icon:'📱', title:'סטודיו יוצרי תוכן וטרנדים', en:'Viral Creators Studio',
        who:'Creator Max', role:'יוצר תוכן ויראלי', level, focus:'Past Simple & Video trends', unit:'u1',
        desc:'מקס משוחח איתך על סרטונים ויראליים, אלגוריתמים וטרנדים חדשים ברשת.',
        opening:'Hey Hadar! Did you see the new viral tech challenge online today? It already reached two million views in six hours! Why do you think it became so popular?',
        openingHe:'היי הדר! ראית את אתגר הטכנולוגיה הוויראלי החדש ברשת היום? הוא כבר הגיע לשני מיליון צפיות תוך שש שעות! למה לדעתך הוא הפך לכל כך פופולרי?',
        startWords:[{en:'creator',he:'יוצר'},{en:'viral',he:'ויראלי'}],
        steps:[
          {bot:'You nailed it. The pacing was super engaging. What kind of creative videos do you enjoy watching most on your feed?',he:'קלעת בול. הקצב היה מרתק בטירוף. איזה סוג של סרטונים יצירתיים אתה הכי נהנה לראות בפיד שלך?',suggestions:['I love fast-paced science experiments and mind-blowing facts.','I enjoy watching creative tech reviews and smart futuristic gadgets.','I like comedy skits and trending challenges that make people laugh.']},
          {bot:'How do you think algorithms decide which creator videos to push to the homepage?',he:'איך לדעתך אלגוריתמים מחליטים איזה סרטונים של יוצרים לקדם לעמוד הראשי?',suggestions:['The algorithm tracks how long audiences watch before swiping.','High retention, shares, and creative comments signal viral potential.','Videos that teach something surprising in three seconds perform best.']},
          {bot:'If you uploaded your own video project tomorrow, what would your title and hook be?',he:'אם היית מעלה פרויקט וידאו משלך מחר, מה היו הכותרת והפתיח המסקרן שלך?',suggestions:['I would title it: "5 Impossible Animal Facts That Break Science!"','My video would test a crazy magnetic invention in a home laboratory.','I would show a before-and-after experiment that surprises the audience.']}
        ],
        more:['What is the most interesting viral trend you watched recently?','Do you think short videos help students learn faster?','How will artificial intelligence change future content creation?'],
        words:[{en:'algorithm',he:'אלגוריתם'},{en:'creative',he:'יצירתי'},{en:'trend',he:'טרנד'}]
      },
      {
        id:'hadar-records', icon:'🌍', title:'משלחת מעמקים ושיאי טבע', en:'Extreme Earth Expedition',
        who:'Dr. Leo', role:'חוקר שיאי טבע ומעמקים', level, focus:'Comparatives & Extreme Nature', unit:'u2',
        desc:'ד"ר ליאו לוקח אותך למסע מחקר בעקבות היצורים הקיצוניים ביותר בכדור הארץ.',
        opening:'Welcome aboard our oceanic research submarine, Hadar! We are descending toward the deepest abyss on Earth. Did you know that deep-sea pressure can crush steel pipes like paper?',
        openingHe:'ברוך הבא לצוללת המחקר הימית שלנו, הדר! אנחנו צוללים לעבר התהום העמוקה ביותר בכדור הארץ. ידעת שלחץ במעמקים יכול למעוך צינורות פלדה כמו נייר?',
        startWords:[{en:'extreme',he:'קיצוני'},{en:'depth',he:'עומק'}],
        steps:[
          {bot:'Look outside our quartz viewing window! A transparent snailfish is swimming smoothly. Why can it survive at such an extreme depth?',he:'הסתכל מחוץ לחלון הקוורץ שלנו! דג חילזון שקוף שוחה בקלות. למה הוא מסוגל לשרוד בעומק כה קיצוני?',suggestions:['It has flexible cartilage bones instead of rigid hard bone.','Special cellular compounds protect its organs from high pressure.','It adapted over millions of years to thrive without sunlight.']},
          {bot:'Incredible scientific deduction! Which extreme creature record on Earth surprises you the most?',he:'הסקה מדעית מדהימה! איזה שיא של יצור קיצוני בכדור הארץ הכי מפתיע אותך?',suggestions:['The pistol shrimp creates bubbles that flash hotter than the surface of the sun!','Tardigrades can survive outer space, radiation, and freezing cold!','The blue whale has a heart the size of a small car.']},
          {bot:'Earth is packed with mind-blowing mysteries. If you led our next science expedition, where would we travel?',he:'כדור הארץ מלא בתעלומות שמפוצצות את המוח. אם היית מוביל את משלחת המדע הבאה שלנו, לאן היינו נוסעים?',suggestions:['I would explore hydrothermal vents at the bottom of the Arctic Ocean.','We should investigate glowing caves in deep rainforest underground rivers.','I would study microbes living inside active volcanic craters.']}
        ],
        more:['Why do deep sea creatures glow in the dark?','Which animal is more venomous: a box jellyfish or an inland taipan?','How does memory consolidate in the human brain during deep sleep?'],
        words:[{en:'survive',he:'לשרוד'},{en:'phenomenon',he:'תופעה'},{en:'mystery',he:'תעלומה'}]
      }
    ];
  }
  return CURRENT_LEARNER_GENDER==='male'
    ? masculineCurriculum(JSON.parse(JSON.stringify(DEFAULT_SCENARIOS)))
    : JSON.parse(JSON.stringify(DEFAULT_SCENARIOS));
}
const QUICK_PHRASES = [
  {en:'Can you repeat that, please?',he:'אפשר לחזור על זה?'},
  {en:'How do you say … in English?',he:'איך אומרים … באנגלית?'},
  {en:'I don’t understand. Can you help?',he:'לא הבנתי. אפשר לעזור?'},
  {en:'Can I have a hint, please?',he:'אפשר רמז, בבקשה?'},
  {en:'Can we talk slowly?',he:'אפשר לדבר לאט?'},
  {en:'That’s fun! Tell me more.',he:'כיף! ספרי לי עוד.'}
];
const LOCAL_FIXES = [
  {re:/\bi is\b/i, fix:()=>'I am', why:'עם I תמיד am: I am.'},
  {re:/\b(he|she|it) are\b/i, fix:m=>m[1]+' is', why:'עם he / she / it אומרים is.'},
  {re:/\b(we|you|they) (is|am)\b/i, fix:m=>m[1]+' are', why:'עם we / you / they אומרים are.'},
  {re:/\bi has\b/i, fix:()=>'I have', why:'עם I אומרים have, לא has.'},
  {re:/\b(he|she|it) have\b/i, fix:m=>m[1]+' has', why:'עם he / she / it אומרים has.'},
  {re:/\b(he|she|it) (dance|like|love|go|play|want|practice|meet|watch|listen|sing)\b/i, fix:m=>{const v=m[2].toLowerCase();return m[1]+' '+({go:'goes',watch:'watches'}[v]||v+'s')}, why:'עם he / she / it הפועל מקבל s.'},
  {re:/\b(he|she|it) don'?t\b/i, fix:m=>m[1]+" doesn't", why:"עם he / she / it אומרים doesn't."},
  {re:/\bcan (to) (dance|sing|jump|spin|swim)\b/i, fix:m=>'can '+m[2], why:'אחרי can אין to.'},
  {re:/\bcan (dances|sings|jumps|spins|swims|goes|plays)\b/i, fix:m=>'can '+({dances:'dance',sings:'sing',jumps:'jump',spins:'spin',swims:'swim',goes:'go',plays:'play'}[m[1].toLowerCase()]), why:'אחרי can הפועל נשאר בלי s.'},
  {re:/\bi am (dance|sing|like|love|have|practice)\b/i, fix:m=>'I '+m[1], why:'עם פועל רגיל לא אומרים am.'},
  {re:/\b(like|love) (dance|sing|swim|read|draw|jump)\b(?!ing)/i, fix:m=>m[1]+' '+({dance:'dancing',sing:'singing',swim:'swimming',read:'reading',draw:'drawing',jump:'jumping'}[m[2].toLowerCase()]), why:'אחרי like / love מוסיפים ing לפועל.'}
];

/* ============================================================
   BEERI ENGLISH COACH — core: state, data, home, path, exercises
   ============================================================ */
const KEY = 'gefen_english_coach_v1';
const DAY = 86400000;
const INTERVALS = [0, 1, 3, 7, 16, 35]; // days by mastery box
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const escA = s => esc(s).replace(/'/g, '&#39;');
const rnd = a => a[Math.floor(Math.random() * a.length)];
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]}return r}
function dateKey(ts){const d=new Date(ts==null?Date.now():ts);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
const todayKey = () => dateKey();
function dayIndex(){return Math.floor((Date.now()-(new Date().getTimezoneOffset()*-60000))/DAY)}
const CONTR = {"i'm":'i am',"you're":'you are',"he's":'he is',"she's":'she is',"it's":'it is',"we're":'we are',"they're":'they are',"isn't":'is not',"aren't":'are not',"wasn't":'was not',"weren't":'were not',"don't":'do not',"doesn't":'does not',"didn't":'did not',"can't":'can not',"couldn't":'could not',"won't":'will not',"wouldn't":'would not',"haven't":'have not',"hasn't":'has not',"mustn't":'must not',"let's":'let us',"i'll":'i will',"i've":'i have',"i'd":'i would',"you'll":'you will',"we'll":'we will',"they'll":'they will',"he'll":'he will',"she'll":'she will',"it'll":'it will'};
function normEN(s){s=String(s||'').toLowerCase().replace(/[’‘`´]/g,"'").replace(/[.,!?;:"“”]/g,' ').replace(/\s+/g,' ').trim();return s.split(' ').map(w=>CONTR[w]||w).join(' ').replace(/[’']/g,'').replace(/\s+/g,' ').trim()}
function normHE(s){return String(s||'').replace(/[\u0591-\u05C7]/g,'').replace(/["'׳״.,!?()\-–—]/g,' ').replace(/\s+/g,' ').trim()}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function compareAnswer(given, accepted){
  const g=normEN(given);
  for(const a of accepted){ if(g===normEN(a)) return {ok:true,near:false}; }
  const target=normEN(accepted[0]);
  if(target.indexOf(' ')===-1 && target.length>=5 && lev(g,target)<=1) return {ok:true,near:true};
  return {ok:false,near:false};
}
function thinHint(target,lvl){
  const words=String(target).split(' '), he=/[\u0590-\u05FF]/.test(target);
  if(lvl<=1){
    return words.length>1 ? `בתשובה יש <b>${words.length}</b> מילים. הראשונה מתחילה ב-<b>${words[0][0]}</b>.` : `במילה יש <b>${target.length}</b> אותיות, והיא מתחילה ב-<b>${target[0].toUpperCase()}</b>.`;
  }
  if(lvl===2){
    return words.map(w=>w.length>2?w[0]+'•'.repeat(w.length-1):w).join(' ');
  }
  return words.map(w=>w.slice(0,Math.ceil(w.length/2))+'…').join(' ');
}

/* ================= state ================= */
const ACHIEVEMENTS = [
  {id:'first',icon:'🎯',name:'הצעד הראשון',desc:'תשובה ראשונה',test:S=>S.stats.answers>=1},
  {id:'ten',icon:'🔟',name:'מתחמם',desc:'10 תשובות',test:S=>S.stats.answers>=10},
  {id:'streak3',icon:'🔥',name:'רצף של 3',desc:'3 ימים ברצף',test:S=>S.streak>=3},
  {id:'streak7',icon:'⚡',name:'שבוע שלם',desc:'7 ימים ברצף',test:S=>S.streak>=7},
  {id:'words25',icon:'📚',name:'25 מילים',desc:'25 מילים במעגל החזרה',test:S=>Object.keys(S.words).length>=25},
  {id:'words60',icon:'🧠',name:'60 מילים',desc:'60 מילים במעגל החזרה',test:S=>Object.keys(S.words).length>=60},
  {id:'mastered20',icon:'🏆',name:'20 מילים יציבות',desc:'20 מילים ברמה 4+',test:S=>Object.values(S.words).filter(w=>(w.box||0)>=4).length>=20},
  {id:'unit1',icon:'✅',name:'יחידה ראשונה',desc:'סיום יחידה 1',test:S=>{const u=UNITS[0];return u.exercises.every(e=>S.prog[e.id]&&S.prog[e.id].done)}},
  {id:'unit4',icon:'🚀',name:'חצי מסלול',desc:'סיום 2 יחידות',test:S=>UNITS.slice(0,2).every(u=>u.exercises.every(e=>S.prog[e.id]&&S.prog[e.id].done))},
  {id:'allunits',icon:'👑',name:'המסלול המלא',desc:'סיום כל 4 היחידות',test:S=>UNITS.every(u=>u.exercises.every(e=>S.prog[e.id]&&S.prog[e.id].done))},
  {id:'chat1',icon:'💬',name:'שיחה ראשונה',desc:'שיחת AI ראשונה',test:S=>S.stats.chats>=1},
  {id:'chat5',icon:'🗣️',name:'5 שיחות',desc:'5 שיחות עם המאמנת',test:S=>S.stats.chats>=5},
  {id:'exam85',icon:'📝',name:'מבחן מצוין',desc:'85+ במבחן מסכם',test:S=>S.exam.best>=85},
  {id:'review50',icon:'🔁',name:'50 חזרות',desc:'50 חזרות חכמות',test:S=>S.stats.reviews>=50},
  {id:'speak',icon:'🎤',name:'קול של רקדנית',desc:'תרגול דיבור ראשון',test:S=>S.stats.speak>=1},
  {id:'perfect10',icon:'💎',name:'בלי טעויות',desc:'10 תשובות נכונות ברצף',test:S=>S.stats.bestStreak>=10}
];
const RULES = new Set();
const ALL_WORDS = {};
const ALL_WORD_LIST = [];
const RULE_MAP = {};
const EX_MAP = {};
const FACTS = [
  'כשרוקדים ביחד המוח משחרר אוקסיטוצין – "הורמון החברות".',
  'רקדנית בלט יכולה להסתובב על קצה האצבעות יותר מ-30 פעמים ברצף!',
  'ריקוד משפר מצב רוח, שינה וזיכרון – גם באנגלית.',
  'המילה Ballet באה מצרפתית, ובאנגלית אומרים אותה BAL-ay.',
  'ריקוד הוא אחת הדרכים העתיקות ביותר שבהן אנשים מספרים סיפורים.',
  'חיוך על הבמה גורם גם לקהל וגם לרקדנית להרגיש טוב יותר.',
  'חברים טובים צוחקים יחד יותר, וצחוק עוזר ללמוד מילים חדשות.',
  'המוח זוכר מילה חדשה טוב יותר כשמשלבים אותה בתנועה – נסי לרקוד את המילה!',
  'באנגלית "Best friend" אפשר לומר גם BFF = Best Friends Forever.',
  'עשר דקות אנגלית כל יום מנצחות שעה אחת פעם בשבוע.'
];












function freshState(){
  return {
    v:1, name:'תלמידה', courseId:'default', courseSnapshot:null,
    xp:0, streak:0, lastDay:'', activeDays:{},
    daily:{date:todayKey(), xp:0, answers:0, reviews:0, chats:0},
    settings:{sound:true, ttsRate:.9, autoSpeak:false, showTr:true, fontScale:1, goal:60, correction:'balanced', level:'A1'},
    prog:{}, words:{}, rules:{}, unitPos:{}, seen:{intro:{},units:{}},
    stats:{answers:0, correct:0, streak:0, bestStreak:0, reviews:0, chats:0, speak:0, speakScore:0, bySkill:{vocab:{a:0,c:0},grammar:{a:0,c:0},listening:{a:0,c:0}}},
    badges:{}, exam:{last:null, best:0, attempts:0, active:null},
    review:{lastDate:'', doneToday:0, queue:[], idx:0, results:[]},
    chat:{scenario:'', messages:[], history:[], localTurn:0, sessionStart:0, learned:{}, sessions:0},
    adaptive:{mistakes:[], discoveredInterests:[], customExercises:[], boosters:[], lastBooster:null, lastAdaptedAt:null, answersSinceAdapt:0},
    last:{route:'#/home',unit:'u1'}
  };
}
let S = freshState();
let lastSaved = 0;
let saveTimer = null;
let syncing = false;

function stateStorageKey(){
  const account=window.apiSync&&window.apiSync.user?window.apiSync.user():null;
  return account?.id ? `${KEY}_${account.id}` : `${KEY}_guest`;
}

function mergeState(base, incoming){
  const out = {...base, ...incoming};
  out.settings = {...base.settings, ...(incoming.settings||{})};
  out.stats = {...base.stats, ...(incoming.stats||{})};
  out.stats.bySkill = {...base.stats.bySkill, ...((incoming.stats&&incoming.stats.bySkill)||{})};
  out.review = {...base.review, ...(incoming.review||{})};
  out.chat = {...base.chat, ...(incoming.chat||{})};
  out.exam = {...base.exam, ...(incoming.exam||{})};
  out.daily = {...base.daily, ...(incoming.daily||{})};
  out.adaptive = {...base.adaptive, ...(incoming.adaptive||{})};
  out.last = {...base.last, ...(incoming.last||{})};
  delete out.api;
  return out;
}

function isNewer(remote, local){
  const r = Date.parse(remote || '') || 0;
  const l = Date.parse(local || '') || 0;
  return r > l + 1000;
}

function loadState(){
  let removeLegacyAiSettings=false;
  try{
    const raw = localStorage.getItem(stateStorageKey());
    if(raw){
      const data = JSON.parse(raw);
      removeLegacyAiSettings=Boolean(data.api);
      S = mergeState(freshState(), data);
    }
  }catch(e){ console.warn('load failed', e); }

  if(S.daily.date !== todayKey()) S.daily = {date:todayKey(), xp:0, answers:0, reviews:0, chats:0};
  if(S.review.lastDate !== todayKey()){ S.review.lastDate = todayKey(); S.review.doneToday = 0; }
  if(S.lastDay && S.lastDay !== todayKey() && S.lastDay !== dateKey(Date.now()-DAY)) S.streak = 0;
  applyFontScale();
  if(removeLegacyAiSettings) persistLocal();
}

/* ---------------- cloud sync bridge ---------------- */
function cloudReady(){
  return !!(window.apiSync && window.apiSync.isEnabled());
}
function applyCloud(data, updatedAt){
  if(!data || typeof data !== 'object') return;
  const localTime = Date.parse(S.updated_at || '') || 0;
  const remoteTime = Date.parse(updatedAt || '') || 0;
  if(isNewer(updatedAt, S.updated_at)){
    S = mergeState(freshState(), data);
    const account=window.apiSync&&window.apiSync.user?window.apiSync.user():null;
    if(account) setStudentIdentity(account);
    S.courseId=CURRENT_COURSE_ID;
    S.courseSnapshot=S.courseSnapshot||courseSnapshot();
    S.updated_at = updatedAt || new Date().toISOString();
    persistLocal();
    applyFontScale();
    if(typeof render === 'function') render();
    if(typeof updateHeader === 'function') updateHeader();
    if(typeof toast === 'function') toast('ההתקדמות נטענה מהענן ✓');
  }else{
    // Local is at least as new: push it up so both devices converge.
    cloudPush(true);
  }
}
function cloudPush(force){
  if(!cloudReady() || typeof window.apiSync.save !== 'function') return;
  S.updated_at = new Date().toISOString();
  S.courseId=CURRENT_COURSE_ID;
  S.courseSnapshot=courseSnapshot();
  persistLocal();
  window.apiSync.save(S, {force:!!force});
}
const STUDENT_NAMES=['גפן','בארי','שקד','מעיין','הדר','מיה','יולי','אביב'];
function studentDisplayName(username){
  return username==='יולי'?'Yuli':username==='אביב'?'Aviv':username;
}
let TEACHER_WHATSAPP='';
let CURRENT_LEARNER_GENDER='female';
let CURRENT_UI_LANGUAGE='he';
let CURRENT_LEARNER_PROFILE={gender:'female',interests:[],level:'A1',levelStage:'תחילת A1',uiLanguage:'he',learningLanguage:'English',nativeLanguage:'Hebrew'};
const UI_TRANSLATIONS=[
  ['בית הספר','the school','la escuela'],['בית ספר','school','escuela'],
  ['בית','Home','Inicio'],['לומדים','Learn','Aprender'],['ללמוד','Learn','Aprender'],
  ['חזרה','Review','Repaso'],['שיחה','Conversation','Conversación'],['סטטיסטיקה','Progress','Progreso'],
  ['הגדרות','Settings','Ajustes'],['כניסה','Sign in','Entrar'],['יציאה','Sign out','Salir'],
  ['חזרה אחורה','Back','Atrás'],['לדף הבית','Home','Inicio'],['המשך','Continue','Continuar'],
  ['תפריט ראשי','Main menu','Menú principal'],['פתח תפריט','Open menu','Abrir menú'],
  ['חזרה למסך הקודם','Back to previous screen','Volver a la pantalla anterior'],
  ['חזרה לדף הבית','Back to home','Volver al inicio'],['חזרה למסלול','Back to course','Volver al curso'],
  ['כל התרחישים','All scenarios','Todas las situaciones'],
  ['הבא','Next','Siguiente'],['הבא ←','Next →','Siguiente →'],['הקודם','Previous','Anterior'],
  ['שמור','Save','Guardar'],  ['ביטול','Cancel','Cancelar'],['סגירה','Close','Cerrar'],['לחזרה','Review','Repasar'],
  ['שיחה עם המאמנת','Chat with your coach','Hablar con tu tutora'],['המסלול שלי','My course','Mi curso'],
  ['התקדמות נשמרת בענן','Progress syncing to cloud','Progreso sincronizándose en la nube'],
  ['מסונכרן בענן','Synced to cloud','Sincronizado en la nube'],
  ['נשמר במכשיר','Saved on this device','Guardado en este dispositivo'],
  ['לא מסונכרן','Not synced','Sin sincronizar'],
  ['ימים','days','días'],['נקודות ניסיון','experience points','puntos de experiencia'],
  ['משהו נתקע 🙂','Something went wrong 🙂','Algo salió mal 🙂'],
  ['נסי לרענן. השגיאה לא מוחקת את ההתקדמות.','Try refreshing. This error does not erase your progress.','Prueba a actualizar. Este error no borra tu progreso.'],
  ['היי ','Hi, ','Hola, '],['מוכנה לתרגל אנגלית?','Ready to practice?','¿Lista para practicar?'],
  ['המשיכי ללמוד','Continue learning','Seguir aprendiendo'],['שיחה עם המאמנת','Chat with your coach','Hablar con tu tutora'],
  ['המשימות של היום','Today’s goals','Objetivos de hoy'],['חזרה חכמה','Smart review','Repaso inteligente'],
  ['תרגול יומי','Daily practice','Práctica diaria'],['שיחה באנגלית','English conversation','Conversación en inglés'],
  ['⚡ יום ','⚡ Day ','⚡ Día '],['ברצף · רמה ','in a row · Level ','seguido · Nivel '],
  ['מהיעד היומי','of daily goal','del objetivo diario'],['XP היום','XP today','XP hoy'],
  ['לרמה ','to level ','para el nivel '],['יחידות','units','unidades'],['מילים במעגל','words in review','palabras en repaso'],
  ['ממשיכים מאיפה שעצרת','Pick up where you left off','Continúa donde lo dejaste'],
  ['חזרה על ההסבר','Review the explanation','Repasar la explicación'],['כל המסלול','Full course','Todo el curso'],
  ['המילה של היום','Word of the day','Palabra del día'],['עובדה שכדאי לדעת','A fact worth knowing','Un dato interesante'],
  ['רמת שליטה','Mastery level','Nivel de dominio'],['עוד לא התאמנת עליה','You haven’t practiced this yet','Aún no has practicado esta palabra'],
  ['האזיני, ואז נסי לספר אותה באנגלית.','Listen, then try to say it in English.','Escucha y luego intenta contarla en inglés.'],
  ['נדבר על זה עם המאמנת','Discuss this with your coach','Habla de esto con tu tutora'],
  ['מעגל החזרה שלך','Your review cycle','Tu ciclo de repaso'],['לכל החזרות','All reviews','Ir a todos los repasos'],
  ['ממתינות לחזרה','Due for review','Pendientes de repaso'],['בהטמעה','In progress','En aprendizaje'],
  ['יציבות','Mastered','Dominadas'],['חדשות במעגל','New in review','Nuevas para repasar'],
  ['אין חזרות ממתינות','No reviews due','No hay repasos pendientes'],
  ['0/5 מילים במעגל','0/5 words in review','0/5 palabras en repaso'],
  ['0/10 תשובות','0/10 answers','0/10 respuestas'],['עוד לא דיברת היום','You haven’t spoken today','Aún no has hablado hoy'],
  ['נכונות','correct','correctas'],['מתוך','of','de'],['הושלמו','completed','completadas'],
  ['התחילי לתרגל','Start practicing','Empieza a practicar'],['מוכנה','Ready','Lista'],
  ['📖 חזרה על ההסבר','📖 Review the explanation','📖 Repasar la explicación'],
  ['🗺️ כל המסלול','🗺️ Full course','🗺️ Todo el curso'],
  ['מכירות חברות חדשות','Getting to know new friends','Conociendo nuevas amigas'],
  ['היי, ','Hi, ','Hola, '],['קצב השיחה','Conversation pace','Ritmo de conversación'],
  ['לחזרה','Review','Repasar'],['לתרגל','Practice','Practicar'],['לדבר','Speak','Hablar'],
  ['מה יש כאן','What you’ll find here','Qué encontrarás aquí'],['עוד לא הייתה שיחה. בחרי תרחיש למעלה – זה לוקח 30 שניות.','No conversations yet. Choose a scenario above to get started.','Aún no hay conversaciones. Elige un escenario para empezar.'],
  ['המאמנת שלך','Your coach','Tu tutora'],['שיחה אמיתית באנגלית – עם תיקון עדין, הצעות תשובה, תרגום והקראה. בחרי תרחיש, או דברי בחופשיות.','Practice with feedback, reply suggestions, translations, and audio. Choose a scenario or start chatting.','Practica con correcciones, sugerencias, traducciones y audio. Elige una situación o empieza a hablar.'],
  ['בוחרי תרחיש','Choose a scenario','Elige una situación'],['בחרי תרחיש','Choose a scenario','Elige una situación'],
  ['בוחרי תרחיש','Choose a scenario','Elige una situación'],['בחרי תרחיש','Choose a scenario','Elige una situación'],
  ['תרגום בלחיצה','Tap to translate','Toca para traducir'],['לא הבנת? תרגום לעברית מתחת לכל הודעה – רק אם את רוצה.','Need help? Show a translation below each message.','¿Necesitas ayuda? Muestra la traducción debajo de cada mensaje.'],
  ['תיקון בזמן אמת','Live feedback','Correcciones al instante'],['הצעות תשובה','Suggested replies','Sugerencias de respuesta'],
  ['דברי למיקרופון, והמאמנת מקריאה את התשובות בקול.','Speak into the microphone and hear replies aloud.','Habla por el micrófono y escucha las respuestas en voz alta.'],
  ['מילים לחזרה','Words to review','Palabras para repasar'],['דוח סיום','Session report','Informe de la sesión'],
  ['🎭 בחרי תרחיש','🎭 Choose a scenario','🎭 Elige una situación'],
  ['💬 המאמנת שלך','💬 Your coach','💬 Tu tutora'],['📜 שיחות אחרונות','📜 Recent conversations','📜 Conversaciones recientes'],
  ['💡 אפשר לענות כך:','💡 You could say:','💡 Puedes responder así:'],
  ['פידבק על התשובה שלך','Feedback on your answer','Comentarios sobre tu respuesta'],
  ['עצירת השמעה','Stop audio','Detener audio'],
  ['השמעה','Play audio','Reproducir audio'],['תרגום','Translate','Traducir'],
  ['🔊 השמע שוב','🔊 Play again','🔊 Reproducir de nuevo'],['לחצי על מילה באנגלית כדי לשמוע אותה ולראות את התרגום.','Tap an English word to hear it and see its translation.','Toca una palabra en inglés para escucharla y ver su traducción.'],
  ['לחצי על מילה באנגלית כדי לראות תרגום ולשמוע אותה.','Tap an English word to see its translation and hear it.','Toca una palabra en inglés para ver su traducción y escucharla.'],
  ['טוען תרגום…','Loading translation…','Cargando traducción…'],
  ['תרגום לא זמין','Translation unavailable','Traducción no disponible'],
  ['המילה לא נמצאה במילון המקומי','Word not found in the local dictionary','Palabra no encontrada en el diccionario local'],
  ['התחברי כדי לתרגם מילים חדשות','Sign in to translate new words','Inicia sesión para traducir palabras nuevas'],
  ['התרגום לא זמין כרגע. נסי שוב.','Translation is unavailable right now. Try again.','La traducción no está disponible ahora. Inténtalo de nuevo.'],
  ['לא זיהיתי דיבור. דברי קרוב יותר למיקרופון ונסי שוב.','I didn’t hear speech. Move closer to the microphone and try again.','No detecté voz. Acércate al micrófono e inténtalo de nuevo.'],
  ['הגישה למיקרופון נדחתה. אשרי מיקרופון בהגדרות האתר או הדפדפן ונסי שוב.','Microphone access was denied. Allow it in your browser or site settings and try again.','Se denegó el acceso al micrófono. Permítelo en el navegador o en el sitio e inténtalo de nuevo.'],
  ['הדפדפן לא תומך בזיהוי דיבור. אפשר להקליד את התשובה במקום.','Speech recognition is not supported. You can type your answer instead.','El navegador no admite el reconocimiento de voz. Puedes escribir la respuesta.'],
  ['שירות זיהוי הדיבור לא זמין כרגע. אפשר להקליד את התשובה.','Speech recognition is unavailable. You can type your answer instead.','El reconocimiento de voz no está disponible. Puedes escribir la respuesta.'],
  ['כדי להשתמש במיקרופון צריך לפתוח את האתר ב-HTTPS או ב-localhost.','Use HTTPS or localhost to access the microphone.','Para usar el micrófono, abre el sitio con HTTPS o en localhost.'],
  ['לא נמצא מיקרופון זמין במכשיר.','No microphone was found on this device.','No se encontró un micrófono en este dispositivo.'],
  ['המיקרופון בשימוש באפליקציה אחרת. סגרי אותה ונסי שוב.','The microphone is being used by another app. Close it and try again.','Otra aplicación está usando el micrófono. Ciérrala e inténtalo de nuevo.'],
  ['לא הצלחתי להפעיל את המיקרופון. בדקי את ההרשאות ונסי שוב.','Could not start the microphone. Check permissions and try again.','No se pudo iniciar el micrófono. Revisa los permisos e inténtalo de nuevo.'],
  ['ההקלטה הופסקה.','Recording stopped.','Grabación detenida.'],['🎧 מקשיבה… דברי עכשיו','🎧 Listening… speak now','🎧 Escuchando… habla ahora'],
  ['כניסה לתלמידים','Student sign in','Acceso de estudiantes'],['בחרי את שם המשתמש והקלידי את הסיסמה שלך.','Choose your username and enter your password.','Elige tu usuario e introduce tu contraseña.'],
  ['שם משתמש','Username','Usuario'],['סיסמה','Password','Contraseña'],['סיסמה חדשה','New password','Contraseña nueva'],
  ['הגדרת סיסמה / איפוס עם קוד','Set or reset password with a code','Crear o restablecer contraseña con un código'],
  ['בקשת קוד איפוס בוואטסאפ','Request a reset code on WhatsApp','Solicitar un código por WhatsApp'],
  ['ההתקדמות והרמה נשמרות בנפרד לכל תלמיד.','Progress and level are saved separately for each student.','El progreso y el nivel se guardan por separado para cada estudiante.'],
  ['חזרה לכניסה','Back to sign in','Volver al acceso'],['שמירת הסיסמה','Save password','Guardar contraseña'],
  ['פידבק','Feedback','Comentarios'],['תיקון','Correction style','Tipo de corrección'],
  ['עדין','Gentle','Amable'],['מאוזן','Balanced','Equilibrado'],['קפדן','Detailed','Detallado'],
  ['רמז','Hint','Pista'],['תקן אותי','Correct me','Corrígeme'],['שאלי אותי','Ask me','Pregúntame'],
  ['ביטויים','Phrases','Frases'],['שלחי','Send','Enviar'],['סיום','Finish','Finalizar'],['חדש','New','Nuevo'],
  ['התקדמות','Progress','Progreso'],['מילים יציבות','mastered words','palabras dominadas'],
  ['לחצי כדי לעצור','Tap to stop','Toca para detener'],['דברי למיקרופון','Speak into the microphone','Habla por el micrófono'],
  ['קלט קולי','Voice input','Entrada de voz'],['הודעה','Message','Mensaje'],
  ['המאמנת המקומית','Local coach','Tutora local'],['מאמנת AI','AI coach','Tutora con IA'],
  ['מסלול','Course','Curso'],['מאמנת AI','AI coach','Tutora con IA'],['ניהול מורה','Teacher dashboard','Panel del docente'],
  ['צליל','Sound','Sonido'],['המשך שיחה','Continue conversation','Continuar conversación'],
  ['רמת שיחה:','Conversation level:','Nivel de conversación:'],['נקבעת לפי חשבון התלמידה','Based on the learner’s account','Según la cuenta de estudiante'],
  ['השירות המקוון לא זמין כרגע – ממשיכים במאמנת המקומית.','The online service is unavailable. Continuing with the local coach.','El servicio en línea no está disponible. Continuamos con la tutora local.'],
  ['עברנו למאמנת המקומית','Switched to the local coach','Cambiamos a la tutora local'],
  ['הצעד הבא','Next step','Siguiente paso'],['ההסבר','Explanation','Explicación'],
  ['הכלל יעזור','The rule may help','La regla puede ayudar'],['פתח את הכלל','Open the rule','Ver la regla'],
  ['לשאלה הבאה','Next question','Siguiente pregunta'],['הוסיפי','Add','Añadir'],
  ['הכל מתחיל בצעד אחד. עשר דקות ביום ואת מרגיש את ההבדל.','It starts with one step. Ten minutes a day makes a difference.','Todo empieza con un paso. Diez minutos al día marcan la diferencia.'],
  ['דיוק כללי','Overall accuracy','Precisión general'],['מילים יציבות','mastered words','palabras dominadas'],
  ['הכלל','The rule','La regla'],['הכלל עוזר','The rule helps','La regla ayuda'],
  ['🗺️ מסלול הלמידה','🗺️ Learning path','🗺️ Ruta de aprendizaje'],
  ['סדר מומלץ: כל יחידה בונה על הקודמת. אפשר לחזור לכל יחידה בכל רגע – החזרות מחזירות אותך למילים ולתחביר שוב ושוב.','Recommended order: each unit builds on the previous one. You can revisit any unit at any time.','Orden recomendado: cada unidad se basa en la anterior. Puedes volver a cualquier unidad cuando quieras.'],
  ['🏁 מבחן סוף המסלול','🏁 Course-end test','🏁 Examen final del curso'],
  ['טרם בוצע','Not taken yet','Aún no realizado'],
  ['20 שאלות מכל היחידות, בלי לחץ זמן. בסוף תקבלי ציון, פירוט לפי נושא וטיפים לחזרה.','20 questions from all units, with no time limit. Get a score, topic breakdown, and review tips.','20 preguntas de todas las unidades, sin límite de tiempo. Recibe una puntuación, un resumen por tema y consejos.'],
  ['📝 למבחן המסכם','📝 Take the final test','📝 Hacer el examen final'],
  ['📖 הסבר','📖 Explanation','📖 Explicación'],['📚 מילים','📚 Vocabulary','📚 Vocabulario'],
  ['✏️ תרגול','✏️ Practice','✏️ Práctica'],['🎯 מה תדעי לעשות','🎯 What you’ll learn','🎯 Lo que aprenderás'],
  ['📌 הכללים – בקצרה ולעומק','📌 Grammar rules','📌 Reglas gramaticales'],
  ['פתוח תמיד בתרגיל','Always available during practice','Disponible durante la práctica'],
  ['⚠️ הטעות הנפוצה:','⚠️ Common mistake:','⚠️ Error frecuente:'],
  ['💡 טריק לזכור:','💡 Memory tip:','💡 Truco para recordar:'],
  ['💡 עובדה שתדביק אותך','💡 A fact to remember','💡 Un dato para recordar'],
  ['▶ בואי נתרגל את היחידה','▶ Practice this unit','▶ Practicar esta unidad'],
  ['הסבר היחידה','Unit explanation','Explicación de la unidad'],
  ['למילים','Vocabulary','Vocabulario'],['לתרגול','Practice','Practicar'],
  ['תרגיל','Exercise','Ejercicio'],['מפה','Map','Mapa'],['אוצר מילים','Vocabulary','Vocabulario'],
  ['💡 רמז','💡 Hint','💡 Pista'],['📖 על הכללים','📖 About the rules','📖 Sobre las reglas'],
  ['📚 המילים','📚 Vocabulary','📚 Vocabulario'],['פתרון','Answer','Respuesta'],
  ['🔁 עוד סיבוב','🔁 Another round','🔁 Otra ronda'],['לתפריט','Menu','Menú'],
  ['🔁 מעגל החזרה','🔁 Review cycle','🔁 Ciclo de repaso'],
  ['מרווחת: כל מילה חוזרת בדיוק כשהמוח עומד לשכוח אותה. זה מה שהופך מילה מ״הכרתי״ ל״ידעתי״.','Spaced review brings each word back just before you forget it.','El repaso espaciado presenta cada palabra justo antes de que la olvides.'],
  ['מילים ממתינות לחזרה עכשיו','Words due for review','Palabras pendientes de repaso'],
  ['▶ על החלשות','▶ Review difficult words','▶ Repasar palabras difíciles'],
  ['⏳ מה חוזר בקרוב','⏳ Coming up soon','⏳ Próximamente'],
  ['🎯 אימונים קצרים','🎯 Quick practice','🎯 Prácticas cortas'],
  ['ספרינט 5 דקות','5-minute sprint','Reto de 5 minutos'],
  ['10 תרגילים מעורבים מכל מה שלמדת','10 mixed exercises from everything you’ve learned','10 ejercicios variados de todo lo que has aprendido'],
  ['אוזן חדה','Listening challenge','Reto auditivo'],
  ['שמיעה – מילה שנשמעת, את מזהה','Listen to a word and identify it','Escucha una palabra e identifícala'],
  ['ציד טעויות','Spot the mistake','Encuentra el error'],
  ['מצאו את המשפט הנכון','Find the correct sentence','Encuentra la frase correcta'],
  ['תרגול דיבור','Speaking practice','Práctica oral'],
  ['אמרי בקול, קבלי ציון על ההגייה','Speak aloud and get a pronunciation score','Habla en voz alta y recibe una puntuación de pronunciación'],
  ['🧠 למה דווקא במעגלים?','🧠 Why spaced review?','🧠 ¿Por qué repasar por ciclos?'],
  ['כשתפגשי מילה שוב אחרי יום, ואז אחרי שלושה, ואז אחרי שבוע – המוח מבין שזה חשוב ושומר אותה.','When you review a word after a day, then three days, then a week, your brain keeps it.','Al repasar una palabra al día siguiente, luego a los tres días y después a la semana, tu cerebro la retiene.'],
  ['📈 ההתקדמות שלך','📈 Your progress','📈 Tu progreso'],
  ['לא רק ציונים – תמונת מצב של איך את לומדת, זוכרת ומדברת.','More than scores: see how you learn, remember, and speak.','Más que notas: descubre cómo aprendes, recuerdas y hablas.'],
  ['מוכנות כללית','Overall readiness','Preparación general'],
  ['בתחילת הדרך – כל יום מוסיף לבסיס 🌱','Just getting started—every day builds your foundation 🌱','Estás empezando: cada día fortalece tu base 🌱'],
  ['🔥 השבוע שלך','🔥 Your week','🔥 Tu semana'],['ימים ברצף','day streak','días seguidos'],
  ['📊 פרופיל כישורים','📊 Skill profile','📊 Perfil de habilidades'],
  ['📚 אוצר מילים','📚 Vocabulary','📚 Vocabulario'],['📘 דקדוק','📘 Grammar','📘 Gramática'],
  ['כללים נפגשו','rules practiced','reglas practicadas'],['📖 הבנת הנקרא','📖 Reading','📖 Comprensión lectora'],
  ['תרגילי קריאה','reading exercises','ejercicios de lectura'],['👂 שמיעה','👂 Listening','👂 Comprensión auditiva'],
  ['תרגילי שמיעה','listening exercises','ejercicios de comprensión auditiva'],
  ['🎤 דיבור','🎤 Speaking','🎤 Expresión oral'],['אימוני דיבור','speaking practices','prácticas orales'],
  ['שיחות','conversations','conversaciones'],['למסלול ←','Course →','Curso →'],
  ['🏅 הישגים','🏅 Achievements','🏅 Logros'],['הצעד הראשון','First step','Primer paso'],
  ['תשובה ראשונה','First answer','Primera respuesta'],['10 תשובות','10 answers','10 respuestas'],
  ['רצף של 3','3-day streak','Racha de 3 días'],['3 ימים ברצף','3 days in a row','3 días seguidos'],
  ['שבוע שלם','A full week','Una semana completa'],['7 ימים ברצף','7 days in a row','7 días seguidos'],
  ['25 מילים','25 words','25 palabras'],['60 מילים','60 words','60 palabras'],
  ['20 מילים ברמה 4+','20 words at level 4+','20 palabras en nivel 4+'],
  ['יחידה ראשונה','First unit','Primera unidad'],['המסלול המלא','Full course','Curso completo'],
  ['מבחן מצוין','Excellent test','Excelente examen'],['85+ במבחן מסכם','85+ on the final test','85+ en el examen final'],
  ['50 חזרות','50 reviews','50 repasos'],['קול של רקדנית','Confident voice','Voz segura'],
  ['תרגול דיבור ראשון','First speaking practice','Primera práctica oral'],
  ['בלי טעויות','No mistakes','Sin errores'],['10 תשובות נכונות ברצף','10 correct answers in a row','10 respuestas correctas seguidas'],
  ['📝 מבחן מסכם','📝 Final test','📝 Examen final'],
  ['20 שאלות מכל היחידות. בסוף תקבלי ציון ופירוט.','20 questions from all units, followed by a score and breakdown.','20 preguntas de todas las unidades y luego recibirás una puntuación y un resumen.'],
  ['התחילי מבחן','Start test','Empezar examen'],
  ['💾 הנתונים והגיבוי','💾 Data and backup','💾 Datos y copia de seguridad'],
  ['ההתקדמות נשמרת אוטומטית בדפדפן הזה. ליתר ביטחון אפשר לייצא גיבוי או ליצור קישור למכשיר אחר.','Progress is saved automatically. Export a backup or create a link to move it to another device.','El progreso se guarda automáticamente. Exporta una copia o crea un enlace para usarlo en otro dispositivo.'],
  ['⬇️ ייצוא גיבוי','⬇️ Export backup','⬇️ Exportar copia'],
  ['🔗 קישור למכשיר אחר','🔗 Link to another device','🔗 Enlace para otro dispositivo'],
  ['⬆️ ייבוא','⬆️ Import','⬆️ Importar'],['המפתח של Groq לא נכלל בגיבוי או בקישור.','The Groq key is not included in backups or links.','La clave de Groq no se incluye en copias ni enlaces.'],
  ['✨ מה יש כאן','✨ What you’ll find here','✨ Qué encontrarás aquí'],
  ['שיחה אמיתית באנגלית – עם תיקון עדין, הצעות תשובה, תרגום והקראה. בחרי תרחיש, או דברי בחופשיות.','Practice with gentle corrections, reply suggestions, translations, and audio. Choose a scenario or chat freely.','Practica con correcciones amables, sugerencias, traducciones y audio. Elige una situación o conversa libremente.'],
  ['טעית? המאמנת מראה מה נכון ולמה, בעברית פשוטה.','Make a mistake? Your coach shows the correction and explains why.','¿Te equivocaste? Tu tutora te muestra la corrección y te explica por qué.'],
  ['תקועה? קבלי 3 דרכים לומר את מה שרצית – ברמה שלך.','Need help? Get three ways to say what you mean at your level.','¿No sabes qué decir? Recibe tres opciones adaptadas a tu nivel.'],
  ['בסוף שיחה: כמה דיברת, מה לתקן ומה הצעד הבא.','At the end: see how much you spoke, what to improve, and what to do next.','Al final: descubre cuánto hablaste, qué mejorar y cuál es el siguiente paso.'],
  ['בלי תסריט. דברי על ריקוד, חברות או סתם על היום שלך.','No script. Talk about anything you like.','Sin guion. Habla de lo que quieras.'],
  ['▶ פתחי שיחה','▶ Start conversation','▶ Iniciar conversación'],
  ['מצב מקומי:','Local mode:','Modo local:'],['📊 סיום','📊 Finish','📊 Finalizar'],['✚ חדש','✚ New','✚ Nuevo'],
  ['🧠 המוח האדפטיבי של הלומדה','🧠 Adaptive Learning Brain','🧠 Cerebro de aprendizaje adaptativo'],
  ['מותאם אישית בזמן אמת','Personalized in real time','Personalizado en tiempo real'],
  ['המאמנת לומדת אותך תוך כדי תרגול ושיחה','Your coach learns how you study through practice and conversation','Tu tutora aprende de ti mientras practicas y conversas'],
  ['לחיזוק כרגע:','Focus areas right now:','Para reforzar ahora:'],
  ['מילים שהמנוע מחזק לך:','Words being reinforced for you:','Palabras que el sistema refuerza para ti:'],
  ['נקודות חוזק שזוהו:','Identified strengths:','Puntos fuertes identificados:'],
  ['נושאים שלמדתי שאת אוהבת:','Topics I noticed you enjoy:','Temas que noté que te gustan:'],
  ['בוסטר אישי מוכן:','Personal booster ready:','Impulso personal listo:'],
  ['⚡ תרגול מותאם אישית עכשיו','⚡ Start adaptive practice now','⚡ Practicar impulso adaptativo ahora'],
  ['🔄 עדכון והתאמת הלומדה מחדש','🔄 Refresh adaptive booster','🔄 Actualizar impulso adaptativo'],
  ['בונה תרגול אישי…','Building personal practice…','Creando práctica personal…'],
  ['בוסטר AI אישי','Personal AI Booster','Impulso personal con IA'],
  ['תרגילים שנבנו במיוחד לנקודות החיזוק שלך','Exercises built specifically for your focus areas','Ejercicios creados especialmente para tus puntos a reforzar'],
];
const SORTED_UI_TRANSLATIONS=UI_TRANSLATIONS.slice().sort((a,b)=>b[0].length-a[0].length);
function localizedText(value){
  if(typeof value!=='string'||CURRENT_UI_LANGUAGE==='he') return value;
  let localized=value;
  localized=localized.replace(/יחידה (\d+) · ([A-Z0-9+]+)/g,(_,n,level)=>`Unit ${n} · ${level}`);
  localized=localized.replace(/(\d+) מתוך (\d+) · (\d+) נכונות/g,'$1 of $2 · $3 correct');
  localized=localized.replace(/(\d+) מתוך (\d+) נכונות/g,'$1 of $2 correct');
  localized=localized.replace(/(\d+) יחידות/g,'$1 units').replace(/(\d+) עולמות/g,'$1 scenarios');
  if(CURRENT_UI_LANGUAGE==='es'){
    localized=localized.replace(/Unit (\d+) · ([A-Z0-9+]+)/g,'Unidad $1 · $2');
    localized=localized.replace(/(\d+) units/g,'$1 unidades').replace(/(\d+) scenarios/g,'$1 situaciones');
    localized=localized.replace(/(\d+) of (\d+) · (\d+) correct/g,'$1 de $2 · $3 correctas');
    localized=localized.replace(/(\d+) of (\d+) correct/g,'$1 de $2 correctas');
  }
  return SORTED_UI_TRANSLATIONS
    .reduce((text,[he,english,spanish])=>{
      const replacement=CURRENT_UI_LANGUAGE==='es'?spanish:english;
      const escaped=he.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      const pattern=/[\s]/.test(he)
        ?new RegExp(escaped,'g')
        :new RegExp(`(^|[^\\u0590-\\u05FF])${escaped}(?=$|[^\\u0590-\\u05FF])`,'g');
      return text.replace(pattern,(match,prefix)=>replacement+(/\s/.test(he)?'':prefix||''));
    },localized);
}
let ADMIN_STUDENTS=null;
let ADMIN_RESET_CODES={};
let ADMIN_CURRICULUM_BUSY={};
let ADMIN_LOADING=false;
let ADMIN_ERROR='';
let ADMIN_AI_MODELS=null;
let ADMIN_AI_BUSY=false;
let ADMIN_AI_ERROR='';
let PUBLIC_AI_STATUS={enabled:false,label:'מאמנת AI'};
const MASCULINE_UI_PHRASES=[
  ['ברוכה הבאה','ברוך הבא'],
  ['תמשיכי כך','תמשיך כך'],
  ['תראי למעלה','תראה למעלה'],
  ['התלמידה','התלמיד'],
  ['תלמידה','תלמיד'],
  ['מוכנה','מוכן'],
  ['את לומדת','אתה לומד'],
  ['את מתאמנת','אתה מתאמן'],
  ['את רוקדת','אתה רוקד'],
  ['את מדברת','אתה מדבר'],
  ['את מתקדמת','אתה מתקדם'],
  ['את מוכנה','אתה מוכן'],
  ['את עושה','אתה עושה'],
  ['את יודעת','אתה יודע'],
  ['את אוהבת','אתה אוהב'],
  ['את יכולה','אתה יכול'],
  ['את רוצה','אתה רוצה'],
  ['את צריכה','אתה צריך'],
  ['את משתמשת','אתה משתמש'],
  ['את מרגישה','אתה מרגיש'],
  ['אני לומדת','אני לומד'],
  ['אני מתאמנת','אני מתאמן'],
  ['אני רוקדת','אני רוקד'],
  ['אני מחייכת','אני מחייך'],
  ['אני מקשיבה','אני מקשיב'],
  ['אני מוכנה','אני מוכן'],
  ['אנחנו יכולות','אנחנו יכולים'],
  ['אנחנו מוחאות','אנחנו מוחאים'],
  ['אנחנו נפגשות','אנחנו נפגשים'],
  ['אנחנו רוקדות','אנחנו רוקדים'],
  ['אנחנו מתאמנות','אנחנו מתאמנים'],
  ['אנחנו יודעות','אנחנו יודעים'],
  ['אנחנו אוהבות','אנחנו אוהבים'],
  ['בחרי','בחר'],
  ['כתבי','כתוב'],
  ['התחילי','התחל'],
  ['המשיכי','המשך'],
  ['השלימי','השלם'],
  ['תרגמי','תרגם'],
  ['הזיני','הזן'],
  ['הקלידי','הקלד'],
  ['לחצי','לחץ'],
  ['נסי','נסה'],
  ['קחי','קח'],
  ['שימי','שים'],
  ['דברי','דבר'],
  ['חזרי','חזור'],
  ['בדקי','בדוק'],
  ['העבירי','העבר'],
  ['הגדירי','הגדר'],
  ['התחברי','התחבר'],
  ['היכנסי','היכנס'],
  ['פני','פנה'],
  ['תמשיכי','תמשיך'],
  ['תראי','תראה']
];
const MASCULINE_CURRICULUM_PHRASES=[
  ['מכירות חברות חדשות','מכירים חברים חדשים'],
  ['מה אני יודעת ואוהבת לעשות','מה אני יודע ואוהב לעשות'],
  ['לומדות לספר מה את יודעת לעשות','לומדים לספר מה אתה יודע לעשות'],
  ['לומדות לספר','לומדים לספר'],
  ['מה את יודעת','מה אתה יודע'],
  ['עכשיו לומדות','עכשיו לומדים'],
  ['לומדות לשאול','לומדים לשאול'],
  ['לומדות מתי','לומדים מתי'],
  ['את כבר יודעת','אתה כבר יודע'],
  ['את ודנה חברות','אתה ודנה חברים'],
  ['האם את רקדנית','האם אתה רקדן'],
  ['מי החברה הכי טובה שלך','מי החבר הכי טוב שלך'],
  ['החברה הכי טובה שלי','החבר הכי טוב שלי'],
  ['החברות שלי','החברים שלי'],
  ['החברה שלי','החבר שלי'],
  ['חברה / חבר','חבר'],
  ['חברה טובה','חבר טוב'],
  ['חברות חדשות','חברים חדשים'],
  ['חברות טובות','חברים טובים'],
  ['אדיבה','אדיב'],
  ['נחמדה','נחמד'],
  ['מצחיקה','מצחיק'],
  ['להכיר חברות חדשות','להכיר חברים חדשים'],
  ['חברה חדשה','חבר חדש'],
  ['חברות','חברים'],
  ['רקדנית ראשית','רקדן ראשי'],
  ['רקדנית מקצועית','רקדן מקצועי'],
  ['רקדניות מקצועיות','רקדנים מקצועיים'],
  ['רקדניות','רקדנים'],
  ['רקדנית','רקדן'],
  ['את יודעת','אתה יודע'],
  ['את אוהבת','אתה אוהב'],
  ['את יכולה','אתה יכול'],
  ['את רוצה','אתה רוצה'],
  ['את צריכה','אתה צריך'],
  ['את בוחרת','אתה בוחר'],
  ['את עושה','אתה עושה'],
  ['את לומדת','אתה לומד'],
  ['את מתאמנת','אתה מתאמן'],
  ['את רוקדת','אתה רוקד'],
  ['את מרגישה','אתה מרגיש'],
  ['את משתמשת','אתה משתמש'],
  ['את מדברת','אתה מדבר'],
  ['את מתקדמת','אתה מתקדם'],
  ['את מוכנה','אתה מוכן'],
  ['יכולה / יודעת','יכול / יודע'],
  ['כשאת ','כשאתה '],
  ['איך שאת ','איך שאתה '],
  ['אני אוהבת','אני אוהב'],
  ['אני יודעת','אני יודע'],
  ['אני מחזיקה','אני מחזיק'],
  ['אני מתאמנת','אני מתאמן'],
  ['אני רוקדת','אני רוקד'],
  ['אנחנו יודעות','אנחנו יודעים'],
  ['אנחנו אוהבות','אנחנו אוהבים'],
  ['אנחנו יכולות','אנחנו יכולים'],
  ['אנחנו מוחאות','אנחנו מוחאים'],
  ['אנחנו נפגשות','אנחנו נפגשים'],
  ['אנחנו רוקדות','אנחנו רוקדים'],
  ['אנחנו מתאמנות','אנחנו מתאמנים'],
  ['אנחנו מחייכות','אנחנו מחייכים'],
  ['אנחנו מקשיבות','אנחנו מקשיבים']
];
function replaceMasculinePhrases(value,phrases){
  if(typeof value!=='string') return value;
  return phrases.reduce((text,[feminine,masculine])=>text.split(feminine).join(masculine),value);
}
function masculineHebrew(value){
  return replaceMasculinePhrases(value,MASCULINE_UI_PHRASES);
}
function masculineCurriculumText(value){
  return replaceMasculinePhrases(replaceMasculinePhrases(value,MASCULINE_UI_PHRASES),MASCULINE_CURRICULUM_PHRASES);
}
function masculineCurriculum(value){
  if(typeof value==='string') return masculineCurriculumText(value);
  if(Array.isArray(value)) return value.map(masculineCurriculum);
  if(value&&typeof value==='object'){
    return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,masculineCurriculum(item)]));
  }
  return value;
}
function currentHebrewGender(){
  return parts()[0]==='admin'?'male':CURRENT_LEARNER_GENDER;
}
const PERSONALIZED_TEXT_SOURCE=new WeakMap();
const PERSONALIZED_ATTRIBUTE_SOURCE=new WeakMap();
function personalizeVisibleText(root=document.body){
  if(!root) return;
  const translateAttributes=['aria-label','title','placeholder','alt'];
  const visit=(node)=>{
    if(node.nodeType===Node.TEXT_NODE){
      const current=node.nodeValue;
      const previous=PERSONALIZED_TEXT_SOURCE.get(node);
      const source=previous&&previous.displayed===current?previous.original:current;
      const text=CURRENT_UI_LANGUAGE==='he'
        ?(currentHebrewGender()==='male'?masculineHebrew(source):source)
        :localizedText(source);
      PERSONALIZED_TEXT_SOURCE.set(node,{original:source,displayed:text});
      if(text!==current) node.nodeValue=text;
      return;
    }
    if(node.nodeType===Node.ELEMENT_NODE){
      let attributeSources=PERSONALIZED_ATTRIBUTE_SOURCE.get(node);
      if(!attributeSources){ attributeSources=new Map(); PERSONALIZED_ATTRIBUTE_SOURCE.set(node,attributeSources); }
      translateAttributes.forEach(attribute=>{
        const value=node.getAttribute(attribute);
        if(!value) return;
        const previous=attributeSources.get(attribute);
        const source=previous&&previous.displayed===value?previous.original:value;
        const text=CURRENT_UI_LANGUAGE==='he'
          ?(currentHebrewGender()==='male'?masculineHebrew(source):source)
          :localizedText(source);
        attributeSources.set(attribute,{original:source,displayed:text});
        if(text!==value) node.setAttribute(attribute,text);
      });
      if(['SCRIPT','STYLE','TEXTAREA'].includes(node.tagName)) return;
    }
    node.childNodes?.forEach(visit);
  };
  visit(root);
}
function watchPersonalizedText(){
  if(!window.MutationObserver||!document.body) return;
  const observer=new MutationObserver(records=>{
    records.forEach(record=>{
      if(record.type==='characterData') personalizeVisibleText(record.target);
      else if(record.type==='attributes') personalizeVisibleText(record.target);
      else record.addedNodes.forEach(personalizeVisibleText);
    });
  });
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder','alt']});
}
function whatsappResetUrl(username){
  if(!TEACHER_WHATSAPP) return '';
  const message=`שלום, אשמח לקבל קוד לאיפוס הסיסמה באפליקציה. שם המשתמש: ${username}`;
  return `https://wa.me/${TEACHER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
function refreshWhatsAppLinks(root=document){
  root.querySelectorAll('[data-whatsapp-reset]').forEach(link=>{
    const url=whatsappResetUrl(link.dataset.username||STUDENT_NAMES[0]);
    link.href=url||'#';
    link.setAttribute('aria-disabled',url?'false':'true');
  });
}
function setStudentIdentity(account){
  if(!account) return;
  const name=account.displayName||account.username||'תלמידה';
  const gender=account.gender==='male'?'male':'female';
  const genderChanged=CURRENT_LEARNER_GENDER!==gender;
  CURRENT_LEARNER_GENDER=gender;
  CURRENT_UI_LANGUAGE=account.uiLanguage||'he';
  CURRENT_LEARNER_PROFILE={
    gender,
    interests:Array.isArray(account.interests)?account.interests:[],
    level:account.level||'A1',
    targetLevel:account.targetLevel||account.level||'A1',
    levelStage:account.levelStage||'',
    uiLanguage:CURRENT_UI_LANGUAGE,
    learningLanguage:account.learningLanguage||'English',
    nativeLanguage:account.nativeLanguage||'Hebrew'
  };
  document.documentElement.lang=CURRENT_UI_LANGUAGE;
  document.documentElement.dir=CURRENT_UI_LANGUAGE==='he'?'rtl':'ltr';
  document.title=`Lamda – ${name}`;
  const brand=$('#app-name'); if(brand) brand.textContent=`Lamda · ${name}`;
  applyStudentTheme(account);
  S.name=name;
  S.settings.level=account.level||S.settings.level||'A1';
  updateHeader();
  personalizeVisibleText(document.body);
  return genderChanged;
}
function applyStudentTheme(account){
  if(!account){
    delete document.documentElement.dataset.theme;
    $$('.brand-mark').forEach(el=>el.textContent='💃');
    $$('.sidebar-user .avatar').forEach(el=>el.textContent='💃');
    return;
  }
  const u = account.username || '';
  const k = account.key || '';
  const interests = Array.isArray(account.interests) ? account.interests : [];
  let theme = '', icon = '💃';

  if(u === 'בארי' || k === 'BARRY' || interests.includes('כדורגל')){
    theme = 'barry'; icon = '⚽';
  }else if(u === 'מעיין' || k === 'MAAYAN' || interests.includes('פוקימון')){
    theme = 'maayan'; icon = '⚡';
  }else if(u === 'הדר' || k === 'HADAR' || interests.includes('טרנדים')){
    theme = 'hadar'; icon = '🔥';
  }else if(u === 'יולי' || k === 'YULI' || account.uiLanguage === 'es'){
    theme = 'yuli'; icon = '✨';
  }else if(u === 'אביב' || k === 'AVIV' || account.learningLanguage === 'French'){
    theme = 'aviv'; icon = '🗼';
  }else if(u === 'מיה' || k === 'MIA'){
    theme = 'mia'; icon = '🎨';
  }else{
    theme = ''; icon = '💃';
  }

  if(theme) document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;

  $$('.brand-mark').forEach(el=>el.textContent=icon);
  $$('.sidebar-user .avatar').forEach(el=>el.textContent=icon);
}
function clearStudentIdentity(){
  CURRENT_LEARNER_GENDER='female';
  CURRENT_UI_LANGUAGE='he';
  CURRENT_LEARNER_PROFILE={gender:'female',interests:[],level:'A1',levelStage:'תחילת A1',uiLanguage:'he',learningLanguage:'English',nativeLanguage:'Hebrew'};
  applyStudentTheme(null);
  document.documentElement.lang='he';
  document.documentElement.dir='rtl';
  S.name='תלמידה';
  document.title='Lamda — English learning';
  const brand=$('#app-name'); if(brand) brand.textContent='Lamda';
  personalizeVisibleText(document.body);
}
function openStudentLogin(message=''){
  const currentUser=$('#student-username')?.value||window.apiSync?.user?.()?.username||STUDENT_NAMES[0];
  const options=STUDENT_NAMES.map(name=>`<option value="${escA(name)}" ${name===currentUser?'selected':''}>${esc(studentDisplayName(name))}</option>`).join('');
  openModal(`<div class="auth-modal">
    <div class="auth-head">
      <h3>👋 כניסה לתלמידים</h3>
      <p class="small muted">בחרי את שם המשתמש והקלידי את הסיסמה שלך.</p>
    </div>
    ${message?`<div class="auth-error" role="alert">${esc(message)}</div>`:''}
    <form class="auth-form" data-submit-act="student-login" novalidate>
      <div class="auth-fields">
        <div class="field"><label for="student-username">שם משתמש</label><select id="student-username" name="username">${options}</select></div>
        <div class="field"><label for="student-password">סיסמה</label><input id="student-password" name="password" type="password" autocomplete="current-password" placeholder="הקלידי סיסמה…"></div>
      </div>
      <button type="submit" class="btn primary wide auth-submit">כניסה</button>
    </form>
    <div class="auth-divider"><span>אפשרויות נוספות</span></div>
    <div class="auth-secondary">
      <button type="button" class="btn ghost wide" data-act="password-setup-open">הגדרת סיסמה / איפוס עם קוד</button>
      <a class="btn ghost wide" id="whatsapp-reset-link" data-whatsapp-reset data-username="${escA(currentUser)}" href="#" target="_blank" rel="noopener" aria-disabled="true">בקשת קוד איפוס בוואטסאפ</a>
      <button type="button" class="btn ghost wide" data-go="#/admin">כניסת מורה / אדמין</button>
    </div>
    <p class="tiny muted auth-foot">ההתקדמות והרמה נשמרות בנפרד לכל תלמיד · אפשר ללחוץ Enter לאישור.</p>
  </div>`);
  $('#student-username')?.addEventListener('change',event=>{
    const link=$('#whatsapp-reset-link');
    if(link){ link.dataset.username=event.target.value; refreshWhatsAppLinks(link.parentElement); }
  });
  refreshWhatsAppLinks($('#overlay'));
  setTimeout(()=>$('#student-password')?.focus(),0);
}
function openPasswordSetup(message=''){
  const username=$('#activation-username')?.value||$('#student-username')?.value||STUDENT_NAMES[0];
  const options=STUDENT_NAMES.map(name=>`<option value="${escA(name)}" ${name===username?'selected':''}>${esc(studentDisplayName(name))}</option>`).join('');
  openModal(`<div class="auth-modal">
    <div class="auth-head">
      <h3>🔐 הגדרת סיסמה</h3>
      <p class="small muted">הזיני את קוד ההפעלה שקיבלת מהמורה ובחרי סיסמה חדשה. לאיפוס, בקשי קוד חדש בוואטסאפ.</p>
    </div>
    ${message?`<div class="auth-error" role="alert">${esc(message)}</div>`:''}
    <form class="auth-form" data-submit-act="password-setup" novalidate>
      <div class="auth-fields">
        <div class="field"><label for="activation-username">שם משתמש</label><select id="activation-username" name="username">${options}</select></div>
        <div class="field"><label for="activation-code">קוד הפעלה / איפוס</label><input id="activation-code" name="code" autocomplete="one-time-code" placeholder="הדביקי או הקלידי קוד מהמורה"></div>
        <div class="field"><label for="activation-password">סיסמה חדשה (8 תווים לפחות)</label><input id="activation-password" name="new-password" type="password" autocomplete="new-password" placeholder="לפחות 8 תווים"></div>
        <div class="field"><label for="activation-password-confirm">אימות סיסמה</label><input id="activation-password-confirm" name="confirm-password" type="password" autocomplete="new-password" placeholder="הקלידי את הסיסמה שוב"></div>
      </div>
      <button type="submit" class="btn primary wide auth-submit">שמירת הסיסמה</button>
    </form>
    <div class="auth-divider"><span>או</span></div>
    <div class="auth-secondary">
      <a class="btn ghost wide" data-whatsapp-reset data-username="${escA(username)}" href="#" target="_blank" rel="noopener" aria-disabled="true">בקשת קוד איפוס בוואטסאפ</a>
      <button type="button" class="btn ghost wide" data-act="student-login-open">חזרה לכניסה</button>
    </div>
  </div>`);
  $('#activation-username')?.addEventListener('change',event=>{
    const link=$('#overlay [data-whatsapp-reset]');
    if(link){ link.dataset.username=event.target.value; refreshWhatsAppLinks($('#overlay')); }
  });
  refreshWhatsAppLinks($('#overlay'));
  setTimeout(()=>$('#activation-code')?.focus(),0);
}
async function loadStudentAccount(account){
  S=freshState();
  loadState();
  S.name=account.username;
  S.settings.level=account.level||'A1';
  setStudentIdentity(account);
  try{
    const assigned=await window.apiSync.curriculum();
    installCurriculum(assigned,true);
    const result=await window.apiSync.load();
    S.courseId=CURRENT_COURSE_ID;
    S.courseSnapshot=courseSnapshot();
    if(!result.data){ S.updated_at=new Date().toISOString(); saveNow(); await window.apiSync.flush(); }
    else if(!result.data.courseSnapshot||result.data.courseId!==CURRENT_COURSE_ID){
      saveNow();
      await window.apiSync.flush();
    }
  }catch(e){
    console.warn('[sync] progress load after login failed:',e.message);
    updateSyncBadge('error');
  }
}
async function submitPasswordSetup(){
  const username=$('#activation-username')?.value;
  const code=$('#activation-code')?.value?.trim();
  const password=$('#activation-password')?.value||'';
  const confirmation=$('#activation-password-confirm')?.value||'';
  if(password.length<8){ openPasswordSetup('הסיסמה חייבת להכיל 8 תווים לפחות.'); return; }
  if(password!==confirmation){ openPasswordSetup('הסיסמאות אינן זהות.'); return; }
  try{
    toast('שומרת סיסמה...');
    const account=await window.apiSync.activate(username,code,password);
    await loadStudentAccount(account);
    closeModal();
    render(); updateHeader();
    toast(`הסיסמה נשמרה. ברוכה הבאה, ${account.username} ✓`);
  }catch(e){
    openPasswordSetup(e.status===401?'הקוד שגוי, נוצל או שפג תוקפו. בקשי קוד חדש מהמורה.':'לא הצלחתי לשמור את הסיסמה. בדקי חיבור ונסי שוב.');
  }
}
async function submitStudentLogin(){
  const username=$('#student-username')?.value;
  const password=$('#student-password')?.value;
  if(!username||!password){ openStudentLogin('יש לבחור שם משתמש ולהקליד סיסמה.'); return; }
  try{
    toast('מתחברת...');
    const account=await window.apiSync.login(username,password);
    await loadStudentAccount(account);
    closeModal();
    render();
    updateHeader();
    toast(`ברוכה הבאה, ${account.username} ✓`);
  }catch(e){
    openStudentLogin(e.status===401?'שם המשתמש או הסיסמה שגויים.':'לא הצלחתי להתחבר. בדקי חיבור ונסי שוב.');
  }
}
function logoutStudent(){
  if(window.adminApi?.impersonatingStudent()){
    exitAdminStudent();
    return;
  }
  saveNow();
  window.apiSync.flush().finally(()=>{
    window.apiSync.logout();
    S=freshState();
    clearStudentIdentity();
    installCurriculum({curriculum:null,courseId:'default'});
    render();
    openStudentLogin();
  });
}
function persistLocal(){
  try{ localStorage.setItem(stateStorageKey(), JSON.stringify(S)); lastSaved = Date.now(); }catch(e){ console.warn('save failed', e); }
}
function saveNow(){
  if(cloudReady()) cloudPush();
  else persistLocal();
}
function save(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ saveNow(); updateHeader(); }, 160);
}

function initCloudSync(){
  if(!window.apiSync) return;
  window.apiSync.on((event, payload) => {
    if(event === 'loaded'){
      applyCloud(payload && payload.data, payload && payload.updated_at);
    }else if(event === 'conflict'){
      applyCloud(payload && payload.data, payload && payload.updated_at);
      if(payload?.courseId && payload.courseId!==S.courseId){
        window.apiSync.curriculum().then(installCurriculum).then(()=>window.apiSync.load()).catch(error=>console.warn('[sync] course refresh failed:',error.message));
      }
    }else if(event === 'curriculum'){
      installCurriculum(payload);
    }else if(event === 'saved'){
      if(typeof updateSyncBadge === 'function') updateSyncBadge(window.apiSync.storage()==='netlify-blobs'?'saved':'server');
      if(payload?.nextModuleUnlocked){
        window.apiSync.curriculum().then(assigned=>{
          if(payload.level) CURRENT_LEARNER_PROFILE.level=payload.level;
          installCurriculum(assigned,true);
          toast(CURRENT_UI_LANGUAGE==='es'?'🎉 ¡Felicidades! Has desbloqueado el siguiente módulo con 80+ en el examen.':'🎉 כל הכבוד! עברת את המבחן בציון 80+ והמודול הבא נפתח עבורך!');
        }).catch(error=>console.warn('[sync] next module unlock refresh failed:',error.message));
      }
    }else if(event === 'offline'){
      if(typeof updateSyncBadge === 'function') updateSyncBadge('offline');
    }else if(event === 'online'){
      if(typeof updateSyncBadge === 'function') updateSyncBadge('online');
      if(syncing) cloudPush(true);
    }else if(event === 'error'){
      if(typeof updateSyncBadge === 'function') updateSyncBadge('error',payload?.message);
    }else if(event === 'session'){
      if(payload&&payload.user){
        // Do not auto-sign-in on fresh app open: show login screen instead.
        // The user must explicitly tap "כניסה" to load an account.
        if(typeof updateSyncBadge==='function') updateSyncBadge('saved');
      }
    }else if(event === 'impersonation-ended'){
      exitAdminStudent(true);
    }else if(event === 'unauthorized'){
      if(window.adminApi?.isEnabled()){
        go('#/admin');
        return;
      }
      syncing=false;
      S=freshState();
      clearStudentIdentity();
      installCurriculum({curriculum:null,courseId:'default'});
      render();
      if(parts()[0]!=='admin') openStudentLogin();
    }
  });

  window.apiSync.init();
}
function markActive(){
  const t = todayKey();
  if(S.lastDay !== t){
    S.streak = (S.lastDay === dateKey(Date.now()-DAY)) ? (S.streak||0)+1 : 1;
    S.lastDay = t;
  }
  if(!S.activeDays[t]) S.activeDays[t] = 0;
}
function levelInfo(){ const lvl = Math.floor(S.xp/250)+1, into = S.xp%250; return {lvl, into, need:250, pct:Math.round(into/250*100)}; }
function addXP(n, node){
  if(!n) return;
  S.xp += n;
  S.daily.xp = (S.daily.xp||0)+n;
  if(S.activeDays[todayKey()]==null) S.activeDays[todayKey()]=0;
  S.activeDays[todayKey()] += n;
  floatXP(n,node);
  save();
}
function floatXP(n,node){
  const r = (node && node.getBoundingClientRect) ? node.getBoundingClientRect() : {left:innerWidth/2,top:innerHeight/2,width:0};
  const e = document.createElement('div');
  e.className='xpfloat'; e.textContent='+'+n+' XP';
  e.style.left = Math.max(20, r.left + r.width/2 - 18)+'px';
  e.style.top = Math.max(70, Math.min(r.top, innerHeight-80))+'px';
  document.body.appendChild(e); setTimeout(()=>e.remove(),1000);
}
function toast(t){
  const el=$('#toast'); if(!el) return;
  el.textContent=CURRENT_UI_LANGUAGE==='he'
    ?(currentHebrewGender()==='male'?masculineHebrew(t):t)
    :localizedText(t);
  el.classList.add('show');
  clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.remove('show'),2600);
}
function confetti(n=26){
  const ems=['🎉','⭐','✨','🌟','🎊','💫','⚡'];
  for(let i=0;i<n;i++){
    const s=document.createElement('span'); s.className='conf'; s.textContent=rnd(ems);
    s.style.left=Math.random()*100+'vw'; s.style.animationDelay=(Math.random()*.5)+'s';
    document.body.appendChild(s); setTimeout(()=>s.remove(),2800);
  }
}

/* ================= audio ================= */
let VOICE=null, AC=null, SPEAKING_CHAT_INDEX=null, SPEAKING_TOKEN=0, SPEAK_KEEPALIVE=null, SPEAK_CHUNK_TIMER=null, VOICE_HANDS_FREE=false;
function learningSpeechLocale(){
  const language=(CURRENT_LEARNER_PROFILE.learningLanguage||'English').toLowerCase();
  if(language.startsWith('french')) return 'fr-FR';
  if(language.startsWith('spanish')) return 'es-ES';
  if(language.startsWith('hebrew')) return 'he-IL';
  return 'en-US';
}
function scoreVoiceNaturalness(v, targetLocale, langPrefix){
  const vLang = (v.lang || '').replace('_', '-').toLowerCase();
  const isExact = vLang === targetLocale;
  const isMatch = isExact || vLang.startsWith(langPrefix);
  if(!isMatch) return -9999;

  let score = 0;
  if(isExact) score += 45;
  else if(langPrefix==='en' && (vLang==='en-gb' || vLang==='en-us')) score += 30;

  const name = (v.name || '').toLowerCase();
  // Highest priority: Modern neural / natural voices (Edge Online Natural, macOS/iOS Enhanced, Google)
  if(name.includes('natural') || name.includes('neural')) score += 160;
  if(name.includes('online')) score += 110;
  if(name.includes('enhanced') || name.includes('premium') || name.includes('siri')) score += 105;
  if(v.localService === false) score += 45;

  // Top-tier natural voice personas across Windows Edge, Chrome, macOS, iOS, Android
  if(/\b(aria|jenny|ava|emma|andrew|brian|guy|sonia|ryan|libby|steffan|michelle|ana)\b/i.test(name)) score += 90;
  if(/\b(samantha|zoe|serena|allison|daniel|karen|moira|tessa|nicky|aaron)\b/i.test(name)) score += 70;
  if(/google us english|google uk english/i.test(name)) score += 85;
  else if(/google/i.test(name)) score += 60;
  if(/\b(denise|henri|vivienne|remy|rémy|eloise|éloïse|thomas|audrey|amélie|celeste)\b/i.test(name)) score += 85;
  if(/\b(elvira|alvaro|álvaro|mónica|jorge|paulina|dalia|paloma)\b/i.test(name)) score += 80;

  // Strongly penalize robotic legacy Windows SAPI5 & compact engines
  if(/\b(david|zira|mark|hazel|george|susan|heera|ravi|hortense|paul|julie)\b/i.test(name) && !name.includes('natural') && !name.includes('online')) score -= 110;
  if(name.includes('desktop') && !name.includes('natural')) score -= 70;
  if(name.includes('compact') || name.includes('espeak') || name.includes('whisper') || name.includes('eloquence')) score -= 140;

  return score;
}
function availableVoicesForLocale(locale){
  if(!('speechSynthesis' in window)) return [];
  const voices = speechSynthesis.getVoices() || [];
  if(!voices.length) return [];
  const targetLocale = (locale || learningSpeechLocale()).replace('_', '-').toLowerCase();
  const langPrefix = targetLocale.split('-')[0];
  return voices
    .map(v => ({ voice: v, score: scoreVoiceNaturalness(v, targetLocale, langPrefix) }))
    .filter(item => item.score > -5000)
    .sort((a, b) => b.score - a.score);
}
function findBestVoice(locale){
  const ranked = availableVoicesForLocale(locale);
  if(!ranked.length) return null;
  const preferred = S?.settings?.voiceName;
  if(preferred){
    const chosen = ranked.find(item => item.voice.name === preferred);
    if(chosen) return chosen.voice;
  }
  return ranked[0].voice;
}
function isNeuralVoice(voice){
  const n = (voice?.name || '').toLowerCase();
  return /natural|neural|online|enhanced|premium|google|siri/i.test(n) || voice?.localService === false;
}
function cleanSpeechText(text){
  return String(text || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[*#`_~]/g, '')
    .replace(/\([^)]{1,40}\)/g, ' ')
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
    .replace(/\s*([.!?…])\s*/g, '$1 ')
    .replace(/\s+/g, ' ')
    .trim();
}
function splitSpeechChunks(text){
  const clean = cleanSpeechText(text);
  if(!clean) return [];
  const rawSentences = clean.match(/[^.!?…]+[.!?…]*\s*/g) || [clean];
  const chunks = [];
  rawSentences.forEach(s => {
    const part = s.trim();
    if(!part) return;
    if(part.length <= 165){ chunks.push(part); return; }
    // Split long clauses cleanly at commas/dashes so Windows/Chrome never stalls
    const subParts = part.split(/(?<=[,;—–])\s+/);
    let buf = '';
    subParts.forEach(sub => {
      if((buf + ' ' + sub).trim().length > 160 && buf){
        chunks.push(buf.trim());
        buf = sub;
      }else{
        buf = (buf + ' ' + sub).trim();
      }
    });
    if(buf) chunks.push(buf);
  });
  return chunks;
}
function initVoice(){
  if(!('speechSynthesis' in window)) return;
  const pick = () => {
    VOICE = findBestVoice(learningSpeechLocale());
  };
  pick();
  speechSynthesis.onvoiceschanged = pick;
}
function updateChatSpeakButtons(){
  $$('[data-chat-say]').forEach(btn=>{
    const idx=Number(btn.dataset.chatSay);
    const active=SPEAKING_CHAT_INDEX===idx;
    btn.classList.toggle('speaking',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });
  $$('[data-chat-stop]').forEach(btn=>{
    const idx=Number(btn.dataset.chatStop);
    const active=SPEAKING_CHAT_INDEX===idx;
    btn.classList.toggle('hide',!active);
  });
}
function stopSpeaking(){
  SPEAKING_TOKEN++;
  SPEAKING_CHAT_INDEX=null;
  clearInterval(SPEAK_KEEPALIVE); SPEAK_KEEPALIVE=null;
  clearTimeout(SPEAK_CHUNK_TIMER); SPEAK_CHUNK_TIMER=null;
  try{
    if('speechSynthesis' in window) speechSynthesis.cancel();
  }catch(e){}
  updateChatSpeakButtons();
}
function speak(text, rate, options={}){
  if(!('speechSynthesis' in window)){ toast('הדפדפן לא תומך בהשמעה'); return; }
  try{
    const token=++SPEAKING_TOKEN;
    clearInterval(SPEAK_KEEPALIVE); SPEAK_KEEPALIVE=null;
    clearTimeout(SPEAK_CHUNK_TIMER); SPEAK_CHUNK_TIMER=null;
    speechSynthesis.cancel();
    SPEAKING_CHAT_INDEX=Number.isInteger(options.chatIndex)?options.chatIndex:null;
    updateChatSpeakButtons();

    const chunks = splitSpeechChunks(text);
    if(!chunks.length){
      SPEAKING_CHAT_INDEX=null;
      updateChatSpeakButtons();
      return;
    }

    const locale = options.locale || learningSpeechLocale();
    const voice = options.voice || findBestVoice(locale) || VOICE;
    const neural = isNeuralVoice(voice);
    const baseRate = Number(rate || S?.settings?.ttsRate || (neural ? 0.96 : 0.91));
    const finalRate = clamp(baseRate, 0.65, 1.25);

    const finishAll = (completed) => {
      if(SPEAKING_TOKEN !== token) return;
      clearInterval(SPEAK_KEEPALIVE); SPEAK_KEEPALIVE=null;
      clearTimeout(SPEAK_CHUNK_TIMER); SPEAK_CHUNK_TIMER=null;
      SPEAKING_CHAT_INDEX = null;
      updateChatSpeakButtons();
      if(completed && typeof options.onDone === 'function') options.onDone();
    };

    // Prevent Chrome/Windows speechSynthesis 15-second pause bug
    SPEAK_KEEPALIVE = setInterval(() => {
      if(SPEAKING_TOKEN !== token){ clearInterval(SPEAK_KEEPALIVE); return; }
      try{
        if(speechSynthesis.speaking && !speechSynthesis.paused){
          speechSynthesis.pause();
          speechSynthesis.resume();
        }
      }catch(e){}
    }, 10000);

    let idx = 0;
    const speakNext = () => {
      if(SPEAKING_TOKEN !== token) return;
      if(idx >= chunks.length){ finishAll(true); return; }
      const u = new SpeechSynthesisUtterance(chunks[idx]);
      u.lang = voice?.lang || locale;
      u.rate = finalRate;
      u.pitch = neural ? 1.0 : 1.01;
      u.volume = 1.0;
      if(voice) u.voice = voice;
      u.onend = () => {
        if(SPEAKING_TOKEN !== token) return;
        idx++;
        if(idx >= chunks.length) finishAll(true);
        else SPEAK_CHUNK_TIMER = setTimeout(speakNext, 125);
      };
      u.onerror = () => finishAll(false);
      speechSynthesis.speak(u);
    };
    speakNext();
  }catch(e){
    SPEAKING_CHAT_INDEX=null;
    updateChatSpeakButtons();
  }
}
function openVoicePickerModal(){
  const locale = learningSpeechLocale();
  const ranked = availableVoicesForLocale(locale);
  const activeVoice = findBestVoice(locale);
  const sampleText = locale.startsWith('fr')
    ? 'Bonjour ! Je suis ravi de pratiquer le français avec toi aujourd\'hui.'
    : 'Hi there! I am excited to practice speaking with you today.';
  openModal(`<button class="x" data-close>✕</button>
    <h3>🎙️ בחירת קול ומהירות לשיחה</h3>
    <p class="small muted">בחר/י את הקול שנשמע הכי טבעי ונעים במכשיר שלך (קולות <b>Natural / Online / Google</b> נשמעים הכי אנושיים).</p>
    <div class="field" style="margin-top:12px">
      <label>מהירות דיבור</label>
      <div class="row">
        ${[[0.82,'🐢 איטי (0.82×)'],[0.95,'✨ טבעי (0.95×)'],[1.08,'⚡ שוטף (1.08×)']].map(([r,lbl])=>`<button class="chip ${Math.abs((S.settings.ttsRate||0.95)-r)<0.06?'active':''}" data-act="voice-set-rate" data-rate="${r}">${lbl}</button>`).join('')}
      </div>
    </div>
    <div class="field" style="margin-top:12px">
      <label>קולות זמינים (${ranked.length})</label>
      <div class="voice-list">
        <button class="voice-item ${!S.settings.voiceName?'active':''}" data-act="voice-select" data-voice="">
          <div><b>✨ בחירה אוטומטית (הקול הטבעי ביותר)</b><div class="tiny muted">${esc(ranked[0]?.voice?.name||'ברירת מחדל של הדפדפן')}</div></div>
          <span class="tag lime">מומלץ</span>
        </button>
        ${ranked.slice(0,14).map(({voice,score})=>`<div class="voice-item ${S.settings.voiceName===voice.name?'active':''}">
          <button class="voice-pick-main" data-act="voice-select" data-voice="${escA(voice.name)}">
            <b>${esc(voice.name.replace(/Microsoft |Google /g,''))}</b>
            <div class="tiny muted">${esc(voice.lang)} ${score>=160?'· ⭐ קול טבעי (Neural)':''}</div>
          </button>
          <button class="iconbtn" data-act="voice-preview" data-voice="${escA(voice.name)}" title="השמעת דוגמה" aria-label="השמעת דוגמה">🔊</button>
        </div>`).join('')||'<p class="small muted">הדפדפן עדיין טוען את רשימת הקולות. נסו לפתוח שוב בעוד שנייה.</p>'}
      </div>
    </div>
    <div class="row" style="margin-top:12px">
      <button class="btn primary wide" data-act="voice-preview-current" data-sample="${escA(sampleText)}">🔊 שמע/י דוגמה עם הקול הנבחר</button>
      <button class="btn ghost wide" data-close>סיום</button>
    </div>`);
}
function beep(ok){
  if(S.settings && !S.settings.sound) return;
  try{
    AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    const seq = ok ? [[660,0],[880,.11]] : [[210,0]];
    seq.forEach(([f,d])=>{
      const o=AC.createOscillator(), g=AC.createGain();
      o.frequency.value=f; o.type=ok?'sine':'triangle'; g.gain.value=.06;
      o.connect(g); g.connect(AC.destination); o.start(AC.currentTime+d); o.stop(AC.currentTime+d+.16);
    });
  }catch(e){}
}
function listenOnce(lang,onRes,onErr,onEnd,onInterim){
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!window.isSecureContext){ onErr&&onErr('secure-context'); onEnd&&onEnd(); return null; }
  const mediaDevices=navigator.mediaDevices;
  const requestPermission=typeof mediaDevices?.getUserMedia==='function';
  const appleMobile=/iPad|iPhone|iPod/i.test(navigator.userAgent)
    || (navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  if(!Recognition&&!requestPermission){ onErr&&onErr('unsupported'); onEnd&&onEnd(); return null; }

  let recognition=null, timer=null, finished=false, receivedResult=false, bestInterim='';
  const finish=(error)=>{
    if(finished) return;
    finished=true;
    clearTimeout(timer);
    if(error&&recognition){ try{ recognition.abort(); }catch(e){} }
    if(!receivedResult && bestInterim && (!error || error==='no-speech')){
      receivedResult=true;
      onRes&&onRes([bestInterim]);
      onEnd&&onEnd();
      return;
    }
    if(error) onErr&&onErr(error);
    onEnd&&onEnd();
  };
  const controller={
    stop(){
      if(recognition){ try{ recognition.stop(); }catch(e){} }
      setTimeout(()=>finish(), 180);
    }
  };
  const mapError=(error)=>{
    const name=String(error&&((error.name)||(error.error))||error||'');
    if(['NotAllowedError','PermissionDeniedError','SecurityError','not-allowed','service-not-allowed'].includes(name)) return 'not-allowed';
    if(['NotFoundError','DevicesNotFoundError','audio-capture'].includes(name)) return 'no-microphone';
    if(['NotReadableError','TrackStartError'].includes(name)) return 'microphone-busy';
    if(['AbortError','InvalidStateError'].includes(name)) return 'microphone-busy';
    if(name==='no-speech'||name==='timeout') return 'no-speech';
    if(name==='network') return 'network';
    return 'error';
  };

  const startRecognition=()=>{
    if(finished||!Recognition) return;
    try{
      recognition=new Recognition();
      recognition.lang=lang;
      recognition.interimResults=Boolean(onInterim);
      recognition.maxAlternatives=5;
      recognition.onresult=ev=>{
        if(finished||receivedResult) return;
        let interimText='';
        for(let i=ev.resultIndex;i<ev.results.length;i++){
          const res=ev.results[i];
          if(res.isFinal){
            receivedResult=true;
            const alts=[...res].map(item=>item.transcript.trim()).filter(Boolean);
            onRes&&onRes(alts);
            return;
          }else{
            interimText+=(res[0]?.transcript||'');
          }
        }
        if(interimText.trim()){
          bestInterim=interimText.trim();
          onInterim&&onInterim(bestInterim);
        }
      };
      recognition.onerror=ev=>finish(receivedResult?null:mapError(ev));
      recognition.onend=()=>finish(receivedResult?null:'no-speech');
      recognition.start();
    }catch(error){ finish(mapError(error)); }
  };
  timer=setTimeout(()=>finish('timeout'),20000);
  if(requestPermission){
    try{
      const permission=mediaDevices.getUserMedia({audio:true,video:false});
      if(Recognition&&appleMobile) startRecognition();
      permission.then(stream=>{
        stream.getTracks().forEach(track=>track.stop());
        if(!Recognition) finish('unsupported');
        else if(!appleMobile) startRecognition();
      }).catch(error=>finish(mapError(error)));
    }catch(error){ finish(mapError(error)); }
  }else if(Recognition) startRecognition();
  return finished ? null : controller;
}
let RECOGNIZER=null;
function microphoneErrorText(code){
  if(code==='secure-context') return 'כדי להשתמש במיקרופון צריך לפתוח את האתר ב-HTTPS או ב-localhost.';
  if(code==='permission-unavailable') return 'הדפדפן לא מאפשר גישה למיקרופון. נסי לפתוח את האפליקציה בדפדפן מעודכן.';
  if(code==='unsupported') return 'הדפדפן לא תומך בזיהוי דיבור. אפשר להקליד את התשובה במקום.';
  if(code==='not-allowed') return 'הגישה למיקרופון נדחתה. אשרי מיקרופון בהגדרות האתר או הדפדפן ונסי שוב.';
  if(code==='no-microphone') return 'לא נמצא מיקרופון זמין במכשיר.';
  if(code==='microphone-busy') return 'המיקרופון בשימוש באפליקציה אחרת. סגרי אותה ונסי שוב.';
  if(code==='no-speech') return 'לא זיהיתי דיבור. דברי קרוב יותר למיקרופון ונסי שוב.';
  if(code==='network') return 'שירות זיהוי הדיבור לא זמין כרגע. אפשר להקליד את התשובה.';
  return 'לא הצלחתי להפעיל את המיקרופון. בדקי את ההרשאות ונסי שוב.';
}
function setChatMicState(listening){
  const btn=$('#chat-mic');
  if(!btn) return;
  btn.classList.toggle('rec',listening);
  btn.setAttribute('aria-label',listening?'עצירת הקלטה':'קלט קולי');
  btn.title=listening?'לחצי כדי לעצור':'דברי למיקרופון';
}
function applyFontScale(){
  const f=(S.settings&&S.settings.fontScale)||1;
  document.documentElement.style.setProperty('--fs', f);
}
function speakBtn(text,label){
  return `<button class="iconbtn" data-say="${escA(text)}" aria-label="השמעת ${escA(label||text)}" title="השמעה">🔊</button>`;
}

const COMMON_WORD_TRANSLATIONS={
  a:'מילת יידוע', an:'מילת יידוע', the:'ה־', i:'אני', you:'את/ה', he:'הוא', she:'היא', it:'זה',
  "i'm":'אני', "i've":'יש לי', "i'll":'אני א־', "you're":'את/ה', "you've":'יש לך',
  "he's":'הוא', "she's":'היא', "it's":'זה', "we're":'אנחנו', "they're":'הם/הן',
  "don't":'לא', "doesn't":'לא', "didn't":'לא', "can't":'לא יכול/ה', "isn't":'אינו/אינה',
  "aren't":'אינם/אינן', "wasn't":'לא היה/הייתה', "won't":'לא יהיה/תהיה',
  we:'אנחנו', they:'הם/הן', my:'שלי', your:'שלך', his:'שלו', her:'שלה', our:'שלנו',
  is:'הוא/היא', am:'אני', are:'הם/הן', was:'היה/הייתה', were:'היו', be:'להיות',
  have:'יש / להחזיק', has:'יש לו/לה', had:'היה לו/לה', do:'לעשות', does:'עושה',
  did:'עשה/עשתה', can:'יכול/ה', could:'יכול/ה', will:'יהיה / יעשה', would:'היה / הייתה',
  and:'ו־', or:'או', but:'אבל', because:'כי', with:'עם', for:'עבור', from:'מ־',
  in:'בתוך', on:'על / ב־', at:'ב־', to:'אל / ל־', of:'של', by:'על ידי',
  this:'זה / זאת', that:'ההוא / ההיא', these:'אלה', those:'ההם / ההן',
  what:'מה', when:'מתי', where:'איפה', who:'מי', why:'למה', how:'איך',
  not:'לא', very:'מאוד', more:'יותר', than:'מאשר', their:'שלהם/שלהן',
  every:'כל', after:'אחרי', before:'לפני', if:'אם', then:'אז', also:'גם',
  make:'להכין / ליצור', made:'הכין/הכינה', use:'להשתמש', uses:'משתמש/ת',
  work:'עבודה / לעבוד', works:'עובד/ת', want:'לרצות', wants:'רוצה',
  best:'הכי טוב/ה', love:'לאהוב / אהבה', likes:'אוהב/ת', liked:'אהב/ה', dance:'לרקוד / ריקוד',
  dances:'רוקד/ת', dancing:'ריקוד', big:'גדול/ה', small:'קטן/ה', good:'טוב/ה', nice:'נחמד/ה',
  new:'חדש/ה', old:'ישן/ה', fast:'מהר / מהיר/ה', high:'גבוה/ה', easy:'קל/ה', happy:'שמח/ה',
  friend:'חבר/ה', friends:'חברים/חברות', sister:'אחות', brother:'אח', day:'יום', days:'ימים',
  name:'שם', school:'בית ספר', student:'תלמיד/ה', students:'תלמידים/ות', visit:'לבקר',
  visits:'מבקר/ת', asks:'שואל/ת', asked:'שאל/ה', compare:'להשוות', compares:'משווה',
  different:'שונה', products:'מוצרים',   product:'מוצר', writes:'כותב/ת', us:'אותנו',
  starts:'מתחיל/ה', four:'ארבע', down:'למטה', local:'מקומי/ת', shop:'חנות', learn:'ללמוד',
  learned:'למד/ה', explains:'מסביר/ה', gives:'נותן/ת', reason:'סיבה', favorite:'אהוב/ה',
  choice:'בחירה', funny:'מצחיק/ה', party:'מסיבה', friday:'יום שישי',
  music:'מוזיקה', studio:'סטודיו', kind:'נחמד/ה', picture:'תמונה', costume:'תלבושת',
  phone:'טלפון', camera:'מצלמה', shoes:'נעליים', red:'אדום/ה', pink:'ורוד/ה',
};
const SPANISH_WORD_TRANSLATIONS={
  a:'un / una', an:'un / una', the:'el / la', i:'yo', you:'tú', he:'él', she:'ella', it:'eso',
  we:'nosotros / nosotras', they:'ellos / ellas', my:'mi', your:'tu', is:'es / está', am:'soy / estoy',
  are:'eres / estás', have:'tener', has:'tiene', can:'poder', do:'hacer', does:'hace',
  and:'y', or:'o', but:'pero', because:'porque', with:'con', for:'para', from:'de', in:'en',
  on:'sobre / en', at:'en', to:'a / para', of:'de', this:'este / esta', that:'ese / esa',
  what:'qué', when:'cuándo', where:'dónde', who:'quién', why:'por qué', how:'cómo',
  not:'no', very:'muy', more:'más', every:'cada', after:'después', before:'antes',
  friend:'amigo / amiga', friends:'amigos / amigas', sister:'hermana', brother:'hermano',
  day:'día', school:'escuela', student:'estudiante', learn:'aprender', learned:'aprendió',
  good:'bueno / buena', nice:'agradable', new:'nuevo / nueva', happy:'feliz', best:'mejor',
  love:'amar / encantar', dance:'bailar', dancing:'baile', song:'canción', music:'música',
  party:'fiesta', friday:'viernes', studio:'estudio', practice:'practicar', class:'clase',
  lesson:'lección', weekend:'fin de semana', always:'siempre', sometimes:'a veces',
  listen:'escuchar', wear:'llevar', meet:'encontrarse', watch:'mirar', sing:'cantar',
  jump:'saltar', spin:'girar', clap:'aplaudir', smile:'sonreír', stage:'escenario',
  step:'paso', move:'moverse', funny:'divertido / divertida', favorite:'favorito / favorita',
};
let wordBubbleTimer=null;
function wordTranslation(word,vocabulary=[]){
  const key=String(word||'').toLocaleLowerCase('en');
  const entry=vocabulary.find(item=>String(item.en||'').toLocaleLowerCase('en')===key)
    ||ALL_WORDS[key]
    ||ALL_WORDS[key.replace(/ies$/,'y')]
    ||ALL_WORDS[key.replace(/s$/,'')]
    ||ALL_WORDS[key.replace(/(?:ing|ed)$/,'')];
  if(entry?.he&&(ACTIVE_CURRICULUM||CURRENT_UI_LANGUAGE==='es'||CURRENT_LEARNER_PROFILE.learningLanguage==='French')) return entry.he;
  if(CURRENT_UI_LANGUAGE==='es'&&SPANISH_WORD_TRANSLATIONS[key]) return SPANISH_WORD_TRANSLATIONS[key];
  if(entry?.he&&CURRENT_UI_LANGUAGE==='he') return entry.he;
  return CURRENT_UI_LANGUAGE==='he'?COMMON_WORD_TRANSLATIONS[key]||'תרגום לא זמין':'';
}
function clickableEnglish(text,vocabulary=[]){
  return String(text||'').match(/[\p{L}]+(?:['’][\p{L}]+)*|[^\p{L}]+/gu)?.map(part=>{
    if(!/^[\p{L}]/u.test(part)) return esc(part);
    const translation=wordTranslation(part,vocabulary);
    const label=translation?`${part}: ${translation}; ${localizedText('השמעה')}`:`${localizedText('תרגום')}: ${part}`;
    return `<button type="button" class="tap-word" data-word-audio="${escA(part)}" data-word-translation="${escA(translation)}" aria-label="${escA(label)}">${esc(part)}</button>`;
  }).join('')||'';
}
function fallbackReading(unit){
  const words=(unit.words||[]).filter(word=>word.ex&&word.exHe).slice(0,5);
  const vocabulary=words.map(word=>({en:word.en,he:word.he}));
  const questions=words.slice(0,Math.min(3,words.length)).map((word,index)=>{
    const choices=[word.ex,...words.filter((item,itemIndex)=>itemIndex!==index).slice(0,2).map(item=>item.ex)];
    return {q:`איזה משפט בקטע מכיל את המילה ${word.en}?`,opts:choices,ans:word.ex,why:`המשפט מופיע בקטע הקריאה ומכיל את המילה ${word.en}.`};
  });
  return {
    title:`קוראים: ${unit.he||unit.title}`,
    passage:words.map(word=>word.ex).join(' '),
    vocabulary,
    questions,
  };
}

/* ================= build all exercises ================= */
function buildData(){
  UNITS.forEach(u=>{
    u.rules.forEach(r=>{ RULE_MAP[r.id] = {...r, unitId:u.id, unitTitle:u.title}; });
    u.words.forEach(w=>{
      const key=w.en.toLowerCase();
      if(!ALL_WORDS[key]){ ALL_WORDS[key]={...w, key}; ALL_WORD_LIST.push(ALL_WORDS[key]); }
    });
    const vocab = buildVocabExercises(u);
    u.reading=u.reading||fallbackReading(u);
    const readingExercises=(u.reading.questions||[]).map((question,index)=>({
      t:'readmcq',
      id:`${u.id}.r${index+1}`,
      skill:'reading',
      q:question.q,
      opts:question.opts||question.options,
      ans:question.ans||question.answer,
      why:question.why,
      reading:u.reading,
    }));
    u.exercises = [...vocab, ...u.grammar.map(g=>({...g, unit:u.id, skill:g.skill||'grammar'})), ...readingExercises];
    u.exercises.forEach(e=>{ e.unit=u.id; EX_MAP[e.id]=e; });
  });
}
let CURRENT_MODULE_STAGE=1;
let ACTIVE_CONTINUATION_META=null;
function courseSnapshot(){
  const totalExercises=UNITS.reduce((sum,u)=>sum+(u.exercises?.length||0),0);
  return {
    id:CURRENT_COURSE_ID,
    title:ACTIVE_CURRICULUM?.title||ACTIVE_CONTINUATION_META?.title||'מסלול בסיסי',
    level:ACTIVE_CURRICULUM?.level||ACTIVE_CONTINUATION_META?.level||S.settings.level||'A1',
    moduleStage:CURRENT_MODULE_STAGE,
    totalExercises,
    units:UNITS.map(unit=>({
      id:unit.id,
      title:unit.title,
      he:unit.he,
      exerciseCount:unit.exercises?.length||0,
      rules:(unit.rules||[]).map(rule=>({id:rule.id,title:rule.title}))
    }))
  };
}
function courseOverallPercent(){
  const total=UNITS.reduce((sum,u)=>sum+(u.exercises?.length||0),0);
  const done=UNITS.reduce((sum,u)=>sum+unitDoneCount(u),0);
  return total?Math.min(100,Math.round(done/total*100)):0;
}
function allUnitsCompleted(){
  return UNITS.length>0 && UNITS.every(unitComplete);
}
function canAdvanceContinuation(){
  if(PENDING_NEXT_CURRICULUM) return true;
  if(CURRENT_MODULE_STAGE<3) return true;
  return false;
}
async function advanceToContinuationModule(requestedStage){
  const nextStage=requestedStage||Math.min(3,CURRENT_MODULE_STAGE+1);
  if(cloudReady()&&window.apiSync?.advanceModuleStage){
    try{
      toast('🚀 פותח מודול המשך ושומר את ההתקדמות…');
      const result=await window.apiSync.advanceModuleStage(nextStage);
      if(result?.user) setStudentIdentity(result.user);
      installCurriculum({
        curriculum:result.curriculum||null,
        courseId:result.courseId||`stage-${result.moduleStage||nextStage}`,
        moduleStage:result.moduleStage||nextStage,
        pendingNextCurriculum:null,
      },true);
      confetti(38);
      toast(`🎉 מודול ההמשך נפתח! ברוכים הבאים לשלב ${CURRENT_MODULE_STAGE}`);
      go('#/learn');
      return;
    }catch(e){
      toast(`לא הצלחתי לשמור מעבר בענן: ${e.message}`);
    }
  }
  const targetCourseId=nextStage>1?`stage-${nextStage}`:'default';
  installCurriculum({curriculum:null,courseId:targetCourseId,moduleStage:nextStage,pendingNextCurriculum:null},true);
  confetti(38);
  toast(`🎉 מודול ההמשך נפתח! שלב ${CURRENT_MODULE_STAGE}`);
  go('#/learn');
}
let PENDING_NEXT_CURRICULUM=null;
function installCurriculum(result,force=false){
  const sourceCurriculum=result?.curriculum||null;
  PENDING_NEXT_CURRICULUM=result?.pendingNextCurriculum||null;
  const curriculum=sourceCurriculum&&CURRENT_LEARNER_GENDER==='male'&&CURRENT_UI_LANGUAGE==='he'
    ? masculineCurriculum(sourceCurriculum)
    : sourceCurriculum;
  const stageFromResult=Number(result?.moduleStage)||Number(CURRENT_LEARNER_PROFILE?.moduleStage)||Number(S?.moduleStage)||1;
  const stageFromId=/^stage-(\d+)$/.test(String(result?.courseId||''))?Number(String(result.courseId).split('-')[1]):0;
  const targetStage=Math.max(1,Math.min(3,stageFromId||stageFromResult||1));
  const courseId=result?.courseId||curriculum?.id||(targetStage>1?`stage-${targetStage}`:'default');
  const courseChanged=courseId!==CURRENT_COURSE_ID||courseId!==(S.courseId||'default')||targetStage!==CURRENT_MODULE_STAGE;
  const changed=force||courseChanged;
  if(!changed){
    if(curriculum) ACTIVE_CURRICULUM=curriculum;
    S.courseId=courseId;
    S.moduleStage=CURRENT_MODULE_STAGE;
    S.courseSnapshot=courseSnapshot();
    return false;
  }
  CURRENT_COURSE_ID=courseId;
  CURRENT_MODULE_STAGE=targetStage;
  ACTIVE_CURRICULUM=curriculum;
  ACTIVE_CONTINUATION_META=null;

  let baseUnits=null;
  let baseScenarios=null;
  if(curriculum){
    baseUnits=curriculum.units;
    baseScenarios=curriculum.units.map((unit)=>({
      id:`scenario-${unit.id}`,
      icon:unit.icon||'📘',
      title:unit.scenario.title,
      en:unit.scenario.en,
      who:unit.scenario.who,
      role:unit.scenario.role,
      level:curriculum.level,
      focus:unit.scenario.focus,
      unit:unit.id,
      desc:unit.scenario.desc,
      opening:unit.scenario.opening,
      openingHe:unit.scenario.openingHe,
      startWords:unit.words.slice(0,2).map(word=>({en:word.en,he:word.he})),
      steps:unit.scenario.steps,
      more:unit.scenario.more,
      words:unit.words.slice(0,3).map(word=>({en:word.en,he:word.he}))
    }));
  }else if(targetStage>=2 && typeof window.getContinuationModule==='function'){
    const cont=window.getContinuationModule(CURRENT_LEARNER_PROFILE,targetStage);
    ACTIVE_CONTINUATION_META={stage:cont.stage,title:cont.title,subtitle:cont.subtitle,level:cont.level};
    baseUnits=cont.units;
    baseScenarios=cont.scenarios;
  }else{
    baseUnits=defaultUnitsForProfile();
    baseScenarios=defaultScenariosForProfile();
  }

  const courseUnits=JSON.parse(JSON.stringify(baseUnits));
  UNITS=CURRENT_LEARNER_GENDER==='male'&&CURRENT_UI_LANGUAGE==='he'&&!sourceCurriculum?masculineCurriculum(courseUnits):courseUnits;
  SCENARIOS=JSON.parse(JSON.stringify(baseScenarios));

  Object.keys(RULE_MAP).forEach(key=>delete RULE_MAP[key]);
  Object.keys(EX_MAP).forEach(key=>delete EX_MAP[key]);
  Object.keys(ALL_WORDS).forEach(key=>delete ALL_WORDS[key]);
  ALL_WORD_LIST.length=0;
  RULES.clear();
  buildData();
  rebuildScenarioMap();

  S.courseId=courseId;
  S.moduleStage=CURRENT_MODULE_STAGE;
  if(courseChanged){
    const fresh=freshState();
    const keepXp=S.xp||0, keepStreak=S.streak||0, keepBadges=S.badges||{}, keepDays=S.activeDays||{}, keepWords=S.words||{};
    S.prog=fresh.prog;
    S.words=targetStage>=2?keepWords:fresh.words;
    S.rules=fresh.rules;
    S.unitPos=fresh.unitPos;
    S.seen=fresh.seen;
    S.stats=fresh.stats;
    S.daily={...fresh.daily,xp:S.daily?.xp||0};
    S.exam=fresh.exam;
    S.review=fresh.review;
    S.chat=fresh.chat;
    if(targetStage>=2){ S.xp=keepXp; S.streak=keepStreak; S.badges=keepBadges; S.activeDays=keepDays; }
    S.settings.level=curriculum?.level||ACTIVE_CONTINUATION_META?.level||CURRENT_LEARNER_PROFILE.level||S.settings.level||'A1';
  }
  S.courseSnapshot=courseSnapshot();
  persistLocal();
  if(typeof render==='function') render();
  return true;
}
function buildVocabExercises(u){
  const exs=[];
  const isSpanish=CURRENT_UI_LANGUAGE==='es';
  const isFrenchLearning=CURRENT_LEARNER_PROFILE.learningLanguage==='French';
  const targetLangHe=isFrenchLearning?'בצרפתית':'באנגלית';
  const targetLangEs=isFrenchLearning?'en francés':'en inglés';
  const hePool = [...new Set(u.words.map(w=>w.he))];
  const allHe = [...new Set(ALL_WORD_LIST.map(w=>w.he))];
  const distractors = (correct, n) => {
    const pool = shuffle([...new Set([...hePool, ...allHe])].filter(h=>h!==correct));
    return pool.slice(0,n);
  };
  u.words.forEach((w,idx)=>{
    exs.push({
      t:'mcq', id:`${u.id}.m.${w.en}`, unit:u.id, skill:'vocab', word:w.en, rule:'',
      q:isSpanish?`¿Cuál es el significado de <b class="en">${w.en}</b>?`:`מה המשמעות של <b class="en">${w.en}</b>?`,
      opts:shuffle([w.he,...distractors(w.he,3)]), ans:w.he,
      why:isSpanish?`<b class="en">${w.en}</b> = ${w.he}. Ejemplo: ${w.ex} — ${w.exHe}`:`<b class="en">${w.en}</b> = ${w.he}. דוגמה: ${w.ex} — ${w.exHe}`,
      hint:isSpanish?`La palabra aparece en el ejemplo: ${w.ex}`:`המילה מופיעה בתחילת הדוגמה: ${w.ex}`
    });
  });
  u.words.filter(w=>w.en.replace(/[^\p{L}]/gu,'').length>=5).slice(0,4).forEach(w=>{
    exs.push({
      t:'type', id:`${u.id}.t.${w.en}`, unit:u.id, skill:'vocab', word:w.en, rule:'',
      q:isSpanish?`¿Cómo se escribe ${targetLangEs}: <b>${w.he}</b>?`:`איך כותבים ${targetLangHe}: <b>${w.he}</b>?`,
      ans:[w.en], why:`<b class="en">${w.en}</b> = ${w.he}. ${w.ex} — ${w.exHe}`,
      hint:isSpanish?`${w.en.length} letras, empieza por ${w.en[0].toUpperCase()}.${w.pron?` Pronunciación: ${w.pron}`:''}`:`${w.en.length} אותיות, מתחילה ב-${w.en[0].toUpperCase()}.${w.pron?` הגייה: ${w.pron}`:''}`
    });
  });
  const gapWords = u.words.map(w=>{
    if(w.skipGap || w.en.includes(' ')) return null;
    const base=w.en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    let m=null;
    try{ m=w.ex.match(new RegExp('\\b'+base+'\\w*\\b','i')); }catch(e){}
    if(!m) return null;
    return {w, form:m[0], sentence:w.ex.replace(m[0],'___')};
  }).filter(Boolean).slice(0,3);
  gapWords.forEach(g=>{
    exs.push({
      t:'gap', id:`${u.id}.g.${g.w.en}`, unit:u.id, skill:'vocab', word:g.w.en, rule:'',
      q:isSpanish?`Completa con la forma correcta de <b class="en">${g.w.en}</b> (${g.w.he}):`:`השלימי עם הצורה הנכונה של <b class="en">${g.w.en}</b> (${g.w.he}):`,
      sentence:g.sentence, ans:[g.form],
      why:isSpanish?`Frase completa: ${g.w.ex} — ${g.w.exHe}. En esta frase la forma es <b>${g.form}</b>.`:`המשפט המלא: ${g.w.ex} — ${g.w.exHe} במשפט הזה הצורה היא <b>${g.form}</b>.`,
      hint:isSpanish?`La palabra empieza por ${g.form[0]}.`:`הצורה במשפט מתחילה ב-${g.form[0]}.`
    });
  });
  const l1=u.words[0], l2=u.words[Math.min(6,u.words.length-1)];
  if(l1) exs.push({
    t:'listenmcq', id:`${u.id}.lc.${l1.en}`, unit:u.id, skill:'listening', word:l1.en, rule:'', audio:l1.en,
    q:isSpanish?'Pulsa el botón para escuchar la palabra y elige su significado.':'לחצי על הכפתור, הקשיבי למילה – ובחרי את המשמעות.',
    opts:shuffle([l1.he,...distractors(l1.he,3)]), ans:l1.he,
    why:isSpanish?`Escuchaste <b class="en">${l1.en}</b> = ${l1.he}. ${l1.ex}`:`שמעת <b class="en">${l1.en}</b> = ${l1.he}. ${l1.ex}`,
    hint:isSpanish?`La palabra empieza por ${l1.en[0].toUpperCase()} (${l1.en.length} letras).`:`המילה מתחילה ב-${l1.en[0].toUpperCase()} (${l1.en.length} אותיות).`
  });
  if(l2) exs.push({
    t:'listen', id:`${u.id}.lw.${l2.en}`, unit:u.id, skill:'listening', word:l2.en, rule:'', audio:l2.en,
    q:isSpanish?'Pulsa el botón y escribe la palabra que escuchaste.':'לחצי על הכפתור וכתבי את המילה ששמעת.',
    ans:[l2.en], why:`<b class="en">${l2.en}</b> = ${l2.he}. ${l2.ex}`,
    hint:isSpanish?`${l2.en.length} letras, empieza por ${l2.en[0].toUpperCase()}.`:`${l2.en.length} אותיות, מתחילה ב-${l2.en[0].toUpperCase()}.`
  });
  return exs;
}
buildData();

/* ================= calculations ================= */
function unitDoneCount(u){ return u.exercises.filter(e=>S.prog[e.id]&&S.prog[e.id].done).length; }
function unitCorrectCount(u){ return u.exercises.filter(e=>S.prog[e.id]&&S.prog[e.id].correct>0).length; }
function unitPct(u){ return Math.round(unitDoneCount(u)/u.exercises.length*100); }
function unitComplete(u){ return unitDoneCount(u)===u.exercises.length; }
function nextUnit(){ return UNITS.find(u=>!unitComplete(u)) || UNITS[UNITS.length-1]; }
function dueWords(){ return Object.values(S.words).filter(w=>w.seen && (w.due||0)<=Date.now()).sort((a,b)=>(a.box||0)-(b.box||0)); }
function wordStats(){
  const vals=Object.values(S.words);
  return {
    total:vals.length,
    due:vals.filter(w=>(w.due||0)<=Date.now()).length,
    newW:vals.filter(w=>(w.box||0)===0).length,
    learning:vals.filter(w=>(w.box||0)>0&&(w.box||0)<3).length,
    stable:vals.filter(w=>(w.box||0)>=3&&(w.box||0)<5).length,
    mastered:vals.filter(w=>(w.box||0)>=5).length
  };
}
function ruleStrength(){
  const vals=Object.values(S.rules);
  if(!vals.length) return 0;
  const correct=vals.reduce((a,r)=>a+(r.correct||0),0);
  const all=vals.reduce((a,r)=>a+(r.seen||0),0);
  return all?Math.round(correct/all*100):0;
}
function accuracy(){
  const a=S.stats.answers||0;
  return a?Math.round((S.stats.correct||0)/a*100):0;
}
function overallReadiness(){
  const unitPart = UNITS.reduce((a,u)=>a+unitPct(u),0)/UNITS.length;
  const ws=wordStats();
  const masteredPart = ws.total?ws.mastered/ws.total*100:0;
  const chatPart = Math.min(100,(S.stats.chats||0)*8);
  const examPart = S.exam.best||0;
  return Math.round(unitPart*.5 + masteredPart*.25 + chatPart*.1 + examPart*.15);
}
function masteryDots(en){
  const box=(S.words[en.toLowerCase()]&&S.words[en.toLowerCase()].box)||0;
  return `<span class="mastery" title="רמת שליטה ${box}/5">${[0,1,2,3,4].map(i=>`<i class="${i<box?(box>=4?'on':'mid'):''}"></i>`).join('')}</span>`;
}

/* ================= header / badges ================= */
function updateHeader(){
  const hs=$('#h-streak'), hx=$('#h-xp');
  if(hs) hs.textContent=S.streak||0;
  if(hx) hx.textContent=S.xp||0;
  const snd=$('#btn-sound'); if(snd) snd.textContent=S.settings.sound?'🔊':'🔇';
  const hasDue=dueWords().length>0;
  const dot=$('#nav-dot-review'); if(dot) dot.classList.toggle('hide', !hasDue);
  const dotTop=$('#nav-dot-review-top'); if(dotTop) dotTop.classList.toggle('hide', !hasDue);
  const dotMob=$('#nav-dot-review-mobile'); if(dotMob) dotMob.classList.toggle('hide', !hasDue);

  // Show/hide logout and login buttons based on login state
  const account=window.apiSync&&window.apiSync.user?window.apiSync.user():null;
  const logoutBtn=$$('button[data-act="student-logout"]');
  logoutBtn.forEach(b=>b.style.display=account?'inline-flex':'none');
  const loginBtn=$('#topbar-login-btn');
  if(loginBtn) loginBtn.style.display=account?'none':'inline-flex';
  const topBrand=$('#topbar-brand-name');
  if(topBrand) topBrand.textContent=account?(S.name||account.username||'Lamda'):'Lamda';

  // Update sync indicator in topbar
  const syncInd=$('#topbar-sync-indicator');
  if(syncInd){
    if(account){
      const storage=window.apiSync?.storage?.()||'local';
      const isCloud=storage==='netlify-blobs'||storage==='supabase';
      syncInd.innerHTML=isCloud?'☁️ <span class="hide-mobile" style="color:var(--lime);font-size:.72rem;font-weight:900">ענן</span>':'💾 <span class="hide-mobile" style="color:var(--gold);font-size:.72rem;font-weight:900">שרת</span>';
      syncInd.title=isCloud?'מסונכרן בענן — ההתקדמות נשמרת בין מכשירים':'נשמר בשרת מקומי';
      syncInd.style.borderColor='rgba(34,197,94,.4)';
    }else{
      syncInd.innerHTML='☁️';
      syncInd.title='לא מחובר לחשבון תלמיד — לחץ להתחברות ושמירה בענן';
      syncInd.style.borderColor='rgba(255,201,77,.4)';
    }
  }

  // Update sidebar
  const sidebarName=$('#sidebar-name'); if(sidebarName) sidebarName.textContent=S.name||'תלמידה';
  const sidebarXp=$('#sidebar-xp'); if(sidebarXp) sidebarXp.textContent=S.xp||0;
  const sidebarStreak=$('#sidebar-streak'); if(sidebarStreak) sidebarStreak.textContent=S.streak||0;
}
function checkBadges(){
  ACHIEVEMENTS.forEach(b=>{
    if(!S.badges[b.id] && b.test(S)){
      S.badges[b.id]=Date.now();
      toast(`${b.icon} הישג חדש: ${b.name}`);
    }
  });
}
function trackAnswer(ex, ok){
  S.stats.answers++; if(ok)S.stats.correct++;
  S.stats.streak = ok ? (S.stats.streak||0)+1 : 0;
  if(S.stats.streak>S.stats.bestStreak) S.stats.bestStreak=S.stats.streak;
  const skill=ex.skill||'vocab';
  S.stats.bySkill[skill]=S.stats.bySkill[skill]||{a:0,c:0};
  S.stats.bySkill[skill].a++; if(ok)S.stats.bySkill[skill].c++;
  S.daily.answers++;
  if(ex.word) recordWord(ex.word,ok);
  if(ex.rule) recordRule(ex.rule,ok);
  recordAdaptiveAnswer(ex, ok);
  markActive();
  checkBadges();
}
function ensureAdaptiveState(){
  if(!S.adaptive||typeof S.adaptive!=='object'){
    S.adaptive={mistakes:[],discoveredInterests:[],customExercises:[],boosters:[],lastBooster:null,lastAdaptedAt:null,answersSinceAdapt:0};
  }
  if(!Array.isArray(S.adaptive.mistakes)) S.adaptive.mistakes=[];
  if(!Array.isArray(S.adaptive.discoveredInterests)) S.adaptive.discoveredInterests=[];
  if(!Array.isArray(S.adaptive.customExercises)) S.adaptive.customExercises=[];
  if(!Array.isArray(S.adaptive.boosters)) S.adaptive.boosters=[];
  return S.adaptive;
}
function recordAdaptiveAnswer(ex, ok){
  const adaptive=ensureAdaptiveState();
  adaptive.answersSinceAdapt=(Number(adaptive.answersSinceAdapt)||0)+1;
  if(!ok && ex){
    const ruleObj=ex.rule?RULE_MAP[ex.rule]:null;
    const expected=Array.isArray(ex.ans)?ex.ans[0]:(ex.ans||ex.sentence||'');
    const given=QS?.given||QS?.typed||QS?.choice||'';
    adaptive.mistakes.unshift({
      id:ex.id||'',
      rule:ex.rule||'',
      topic:ruleObj?.title||ex.word||ex.skill||'grammar',
      q:String(ex.q||'').replace(/<[^>]*>/g,'').slice(0,140),
      given:String(given||'').slice(0,120),
      expected:String(expected||'').slice(0,120),
      why:String(ex.why||'').replace(/<[^>]*>/g,'').slice(0,180),
      ts:Date.now()
    });
    adaptive.mistakes=adaptive.mistakes.slice(0,15);
  }
  // Automatically trigger silent background AI adaptation when enough answers accumulate
  if(adaptive.answersSinceAdapt>=8 && canUseAI() && !ADAPTIVE_BUSY){
    adaptive.answersSinceAdapt=0;
    generateAdaptiveBooster({silent:true});
  }
}
function recordAdaptiveChatTurn(userText, aiRes){
  const adaptive=ensureAdaptiveState();
  (aiRes?.corrections||[]).forEach(c=>{
    if(c&&c.right){
      adaptive.mistakes.unshift({
        id:'chat-corr',
        rule:'chat',
        topic:CURRENT_UI_LANGUAGE==='es'?'Conversación':'שיחה עם המאמנת',
        q:String(userText||'').slice(0,120),
        given:String(c.wrong||userText||'').slice(0,120),
        expected:String(c.right||'').slice(0,120),
        why:String(c.why||'').slice(0,180),
        ts:Date.now()
      });
    }
  });
  adaptive.mistakes=adaptive.mistakes.slice(0,15);
  const interestMatchers=[
    ['music',/music|song|concert|band|מוזיקה|שיר/i,'מוזיקה / Music'],
    ['travel',/travel|trip|paris|flight|train|hotel|טיול|נסיעה|פריז/i,'טיולים / Travel'],
    ['food',/cook|recipe|food|restaurant|cafe|dinner|בישול|אוכל|מסעדה/i,'קולינריה / Gastronomy'],
    ['sports',/football|soccer|sport|run|gym|dance|כדורגל|ספורט|ריקוד/i,'ספורט ותנועה / Sports'],
    ['architecture',/architect|design|building|house|studio|אדריכלות|עיצוב/i,'עיצוב ואדריכלות / Design'],
    ['fashion',/fashion|style|dress|fabric|trend|אופנה|סטייל/i,'אופנה / Fashion'],
    ['tech',/game|pokemon|tech|app|computer|משחק|טכנולוגיה/i,'טכנולוגיה ומשחקים / Tech']
  ];
  interestMatchers.forEach(([,regex,label])=>{
    if(regex.test(userText||'') && !adaptive.discoveredInterests.includes(label)){
      adaptive.discoveredInterests.unshift(label);
      adaptive.discoveredInterests=adaptive.discoveredInterests.slice(0,8);
    }
  });
}
function learnerAdaptiveSummary(){
  const adaptive=ensureAdaptiveState();
  const weakRules=Object.entries(S.rules||{})
    .filter(([,m])=>(m.seen||0)>=1 && (m.wrong||0)>0)
    .map(([id,m])=>{
      const r=RULE_MAP[id];
      const acc=Math.round((m.correct||0)/((m.correct||0)+(m.wrong||0))*100);
      return {id,title:r?.title||id,accuracy:acc,wrong:m.wrong||0,seen:m.seen||0};
    })
    .sort((a,b)=>a.accuracy-b.accuracy||b.wrong-a.wrong)
    .slice(0,4);
  const strongRules=Object.entries(S.rules||{})
    .filter(([,m])=>(m.seen||0)>=2 && Math.round((m.correct||0)/((m.correct||0)+(m.wrong||0))*100)>=80)
    .map(([id,m])=>{
      const r=RULE_MAP[id];
      const acc=Math.round((m.correct||0)/((m.correct||0)+(m.wrong||0))*100);
      return {id,title:r?.title||id,accuracy:acc};
    })
    .slice(0,4);
  const weakWords=Object.values(S.words||{})
    .filter(w=>w&&w.en&&((w.wrong||0)>0||((w.seen||0)>0&&(w.box||0)<=1)))
    .sort((a,b)=>(b.wrong||0)-(a.wrong||0))
    .slice(0,6)
    .map(w=>({en:w.en,he:w.he||wordByKey(w.en.toLowerCase())?.he||'',wrong:w.wrong||0,box:w.box||0}));
  return {
    weakRules,
    strongRules,
    weakWords,
    recentMistakes:adaptive.mistakes.slice(0,5),
    discoveredInterests:adaptive.discoveredInterests,
    customExercises:adaptive.customExercises||[],
    lastBooster:adaptive.lastBooster||null,
    lastAdaptedAt:adaptive.lastAdaptedAt||null
  };
}
function buildLocalAdaptiveBooster(summary){
  const isEs=CURRENT_UI_LANGUAGE==='es';
  const isFr=CURRENT_LEARNER_PROFILE.learningLanguage==='French';
  const id=`local-adapt-${Date.now()}`;
  const focusRule=summary.weakRules[0];
  const pool=UNITS.flatMap(u=>u.exercises).filter(e=>['mcq','type','gap','scr'].includes(e.t));
  const weakPool=pool.filter(e=>{
    const p=S.prog[e.id];
    return (p&&p.wrong>0) || (focusRule&&e.rule===focusRule.id);
  });
  const chosen=shuffle(weakPool.length>=3?weakPool:pool).slice(0,5).map((e,idx)=>({
    ...JSON.parse(JSON.stringify(e)),
    id:`${id}.x${idx+1}`,
    adaptive:true
  }));
  const words=(summary.weakWords.length?summary.weakWords:ALL_WORD_LIST.slice(0,4)).slice(0,4).map(w=>{
    const full=wordByKey(String(w.en||'').toLowerCase())||w;
    return {en:full.en,he:full.he||'',pron:full.pron||'',ex:full.ex||full.en,exHe:full.exHe||full.he||''};
  });
  return {
    id,
    level:S.settings.level||CURRENT_LEARNER_PROFILE.level||'A1',
    title:isEs?'Entrenamiento adaptativo personalizado':isFr?'אימון צרפתית מותאם אישית':'אימון AI מותאם אישית עבורך',
    insight:isEs
      ?(focusRule?`Noté que podemos reforzar "${focusRule.title}" (${focusRule.accuracy}% de precisión). Preparé 5 ejercicios prácticos para dominarlo.`:'Analicé tu ritmo de estudio y seleccioné ejercicios clave para consolidar tu vocabulario y gramática de nivel B1.')
      :(focusRule?`זיהיתי שכדאי לחזק את הנושא "${focusRule.title}" (דיוק נוכחי: ${focusRule.accuracy}%). בניתי עבורך מקבץ ממוקד שיעזור לך לשלוט בו בביטחון.`:'המערכת ניתחה את התשובות האחרונות שלך ובנתה תרגול חכם שמחזק בדיוק את המילים והמבנים שפגשת לאחרונה.'),
    focusTip:focusRule&&(RULE_MAP[focusRule.id]?.hook||RULE_MAP[focusRule.id]?.short)
      ?`${RULE_MAP[focusRule.id].title}: ${RULE_MAP[focusRule.id].hook||RULE_MAP[focusRule.id].short}`
      :(isEs?'Lee toda la oración antes de elegir el tiempo verbal o la estructura.':'קרא/י את כל המשפט וזהה/י את מילת הזמן או הנושא לפני בחירת התשובה.'),
    generatedAt:new Date().toISOString(),
    words,
    exercises:chosen
  };
}
let ADAPTIVE_BUSY=false;
async function generateAdaptiveBooster({silent=false,openAfter=false,focusTopic=''}={}){
  if(ADAPTIVE_BUSY) return;
  ADAPTIVE_BUSY=true;
  if(!silent) render();
  const summary=learnerAdaptiveSummary();
  try{
    let booster=null;
    if(canUseAI() && window.apiSync?.aiAdaptiveBooster){
      const res=await window.apiSync.aiAdaptiveBooster({
        focusTopic,
        summary:{
          weakRules:summary.weakRules,
          weakWords:summary.weakWords,
          recentMistakes:summary.recentMistakes
        }
      });
      booster=res?.booster||null;
    }
    if(!booster){
      booster=buildLocalAdaptiveBooster(summary);
    }
    const adaptive=ensureAdaptiveState();
    adaptive.lastBooster=booster;
    adaptive.lastAdaptedAt=booster.generatedAt||new Date().toISOString();
    adaptive.boosters=[booster,...(adaptive.boosters||[])].slice(0,8);
    (booster.words||[]).forEach(w=>{
      if(!w||!w.en) return;
      const key=w.en.toLowerCase();
      if(!ALL_WORDS[key]){ ALL_WORDS[key]={...w,key}; ALL_WORD_LIST.push(ALL_WORDS[key]); }
    });
    const newExs=(booster.exercises||[]).map(ex=>({...ex,unit:UNITS[0]?.id||'u1',adaptive:true}));
    newExs.forEach(ex=>{ EX_MAP[ex.id]=ex; });
    adaptive.customExercises=[...newExs,...(adaptive.customExercises||[])].slice(0,25);
    saveNow();
    if(!silent){
      toast(CURRENT_UI_LANGUAGE==='es'?'✨ ¡Tu entrenamiento adaptativo está listo!':'✨ התרגול האישי החדש שלך מוכן!');
    }
    if(openAfter){
      startDrill('adaptive');
      return;
    }
  }catch(err){
    const fallback=buildLocalAdaptiveBooster(summary);
    const adaptive=ensureAdaptiveState();
    adaptive.lastBooster=fallback;
    adaptive.lastAdaptedAt=fallback.generatedAt;
    (fallback.exercises||[]).forEach(ex=>{ EX_MAP[ex.id]=ex; });
    adaptive.customExercises=[...(fallback.exercises||[]),...(adaptive.customExercises||[])].slice(0,25);
    saveNow();
    if(openAfter){ startDrill('adaptive'); return; }
  }finally{
    ADAPTIVE_BUSY=false;
    if(!silent) render();
  }
}
function recordWord(en, ok){
  const key=String(en).toLowerCase();
  const w=S.words[key] || (S.words[key]={box:0,due:Date.now(),seen:0,correct:0,wrong:0,last:0});
  w.key=key;
  if(!w.en) w.en=(ALL_WORDS[key]&&ALL_WORDS[key].en)||en;
  if(!w.he) w.he=(ALL_WORDS[key]&&ALL_WORDS[key].he)||'';
  w.seen=(w.seen||0)+1; w.last=Date.now();
  if(ok){
    w.correct=(w.correct||0)+1;
    w.box=Math.min(5,(w.box||0)+1);
    w.due=Date.now()+INTERVALS[w.box]*DAY;
  }else{
    w.wrong=(w.wrong||0)+1;
    w.box=Math.max(0,(w.box||0)-1);
    w.due=Date.now()+15*60000;
  }
}
function recordRule(id, ok){
  if(!id) return;
  const r=S.rules[id] || (S.rules[id]={seen:0,correct:0,wrong:0});
  r.seen++; if(ok)r.correct++; else r.wrong++;
}
function hydrateExtraWords(){
  Object.values(S.words||{}).forEach(w=>{
    if(!w||!w.en) return;
    const key=String(w.en).toLowerCase();
    if(!ALL_WORDS[key]){
      const obj={en:w.en,he:w.he||'',pron:'',ex:'From your conversation: '+w.en+'.',exHe:'מהשיחה שלך.'};
      ALL_WORDS[key]=obj; ALL_WORD_LIST.push(obj);
    }
  });
  const adaptive=ensureAdaptiveState();
  (adaptive.customExercises||[]).forEach(ex=>{
    if(ex&&ex.id) EX_MAP[ex.id]=ex;
  });
  (adaptive.boosters||[]).forEach(b=>{
    (b.words||[]).forEach(w=>{
      if(!w||!w.en) return;
      const key=w.en.toLowerCase();
      if(!ALL_WORDS[key]){ ALL_WORDS[key]={...w,key}; ALL_WORD_LIST.push(ALL_WORDS[key]); }
    });
  });
}

function adaptiveCoachRadarHTML(){
  const summary=learnerAdaptiveSummary();
  const isEs=CURRENT_UI_LANGUAGE==='es';
  const booster=summary.lastBooster;
  const weakRules=summary.weakRules;
  const weakWords=summary.weakWords;
  const strongRules=summary.strongRules;
  const interests=[...(CURRENT_LEARNER_PROFILE.interests||[]),...(summary.discoveredInterests||[])].slice(0,6);
  const title=isEs?'🧠 Tu Tutor IA Adaptativo en Tiempo Real':'🧠 המאמנת האישית שלומדת אותך תוך כדי תנועה';
  const sub=isEs
    ?'La IA analiza tus respuestas, conversaciones y puntos fuertes para adaptar tus ejercicios continuamente.'
    :'הבינה המלאכותית מנתחת את התשובות, השיחות והטעויות שלך ובונה עבורך חיזוקים מותאמים אישית בזמן אמת.';
  const insightText=booster?.insight
    ||(weakRules.length
      ?(isEs?`Foco detectado: conviene reforzar "${weakRules[0].title}" (${weakRules[0].accuracy}% de precisión).`:`מוקד שזוהה: כדאי לחזק את הנושא "${weakRules[0].title}" (${weakRules[0].accuracy}% דיוק).`)
      :(isEs?'Vas por excelente camino. Pulsa para generar un entrenamiento adaptado a tu nivel y tus intereses.':'ההתקדמות שלך יציבה! אפשר ליצור בכל רגע מקבץ תרגול חכם שמותאם לרמה ולתחומי העניין שלך.'));
  return `<div class="card section adaptive-card">
    <div class="section-head" style="flex-wrap:wrap">
      <h2>${title}</h2>
      <span class="tag purple">${isEs?'Adaptación activa':'התאמה חיה'} · ${esc(S.settings.level||CURRENT_LEARNER_PROFILE.level||'A1')}</span>
    </div>
    <p class="small muted">${sub}</p>
    <div class="adaptive-insight">
      <b>💡 ${esc(booster?.title||(isEs?'Análisis personalizado':'תובנת המאמנת האישית'))}:</b>
      <p class="small" style="margin-top:4px">${esc(insightText)}</p>
      ${booster?.focusTip?`<div class="tiny" style="margin-top:6px;color:var(--cyan)">📌 <b>${isEs?'Consejo clave':'טיפ ממוקד'}:</b> ${esc(booster.focusTip)}</div>`:''}
    </div>
    <div class="grid two" style="margin-top:12px">
      <div class="card flat" style="padding:12px">
        <div class="tiny muted"><b>🎯 ${isEs?'Temas para reforzar':'נושאים ומילים לחיזוק אישי'}</b></div>
        <div class="chips" style="margin-top:8px">
          ${weakRules.map(r=>`<span class="tag gold">📘 ${esc(r.title)} (${r.accuracy}%)</span>`).join('')}
          ${weakWords.slice(0,4).map(w=>`<span class="tag"><span class="en">${esc(w.en)}</span> · ${esc(w.he)}</span>`).join('')}
          ${(!weakRules.length&&!weakWords.length)?`<span class="tiny muted">${isEs?'Sin errores frecuentes detectados aún.':'עדיין לא זוהו נקודות תורפה – כל תשובה מעדכנת את המודל.'}</span>`:''}
        </div>
      </div>
      <div class="card flat" style="padding:12px">
        <div class="tiny muted"><b>🌟 ${isEs?'Puntos fuertes e intereses':'נקודות חוזק ותחומי עניין שהמערכת למדה'}</b></div>
        <div class="chips" style="margin-top:8px">
          ${strongRules.map(r=>`<span class="tag lime">✓ ${esc(r.title)} (${r.accuracy}%)</span>`).join('')}
          ${interests.map(item=>`<span class="tag purple">✨ ${esc(item)}</span>`).join('')}
          ${(!strongRules.length&&!interests.length)?`<span class="tiny muted">${isEs?'Practica para descubrir tus puntos fuertes.':'תרגל/י או שוחח/י עם המאמנת כדי לחשוף נקודות חוזק.'}</span>`:''}
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:14px">
      <button class="btn primary" data-act="adaptive-generate-open" ${ADAPTIVE_BUSY?'disabled':''}>
        ${ADAPTIVE_BUSY?(isEs?'⏳ Generando entrenamiento…':'⏳ בונה תרגול מותאם אישית…'):(isEs?'🚀 Entrenar con ejercicios adaptados':'🚀 פתח תרגול AI מותאם אישית עכשיו')}
      </button>
      <button class="btn ghost sm" data-act="adaptive-refresh" ${ADAPTIVE_BUSY?'disabled':''}>
        🔄 ${isEs?'Actualizar análisis con IA':'בקש מה-AI לעדכן את המסלול עבורי'}
      </button>
    </div>
  </div>`;
}
function praise(){ return rnd([`מעולה, ${S.name||'תלמידה'}!`,'בול!','מדויק!',`וואו, ${S.name||'תלמידה'}!`,'יפה מאוד!','אלופה! 🏆','בדיוק כך!']) }
function nope(){ return rnd([`כמעט, ${S.name||'תלמידה'} 💪`,'לא נורא – מכאן לומדים','קרוב מאוד!','עוד ניסיון קטן','טעות טובה – עכשיו נבין']) }

function continuationUnlockCardHTML(compact=false){
  const isEs=CURRENT_UI_LANGUAGE==='es';
  const allDone=allUnitsCompleted();
  const examPassed=(S.exam?.best||0)>=75;
  const unlocked=allDone||examPassed;
  const hasNext=canAdvanceContinuation();
  if(!unlocked && !PENDING_NEXT_CURRICULUM && compact) return '';
  if(!hasNext && allDone){
    return `<div class="card continuation-card unlocked">
      <div class="row" style="justify-content:space-between;align-items:center">
        <div>
          <span class="tag lime">🏆 ${isEs?'¡Todos los módulos completados!':'השלמת את כל מודולי המסלול!'}</span>
          <h2 style="margin-top:6px;font-size:1.08rem">${isEs?'Sigue creciendo con entrenamiento IA personalizado':'ממשיכים להתקדם עם אימון AI חופשי!'}</h2>
          <p class="small muted">${isEs?'Genera nuevos retos adaptativos o practica conversación avanzada.':'אפשר ליצור מקבצי אתגר מותאמים אישית או לתרגל שיחות ברמה גבוהה עם המאמנת.'}</p>
        </div>
        <div class="row">
          <button class="btn primary sm" data-act="adaptive-generate-open">🚀 אימון AI חדש</button>
          <button class="btn ghost sm" data-go="#/chat">💬 שיחה חופשית</button>
        </div>
      </div>
    </div>`;
  }
  if(unlocked && hasNext){
    const nextStage=Math.min(3,CURRENT_MODULE_STAGE+1);
    const nextLabel=PENDING_NEXT_CURRICULUM
      ? `${PENDING_NEXT_CURRICULUM.title} (${PENDING_NEXT_CURRICULUM.level||''})`
      : (isEs?`Módulo de Continuación ${nextStage-1}`:`מודול המשך ${nextStage-1} (שלב ${nextStage})`);
    return `<div class="card continuation-card unlocked">
      <div class="row" style="justify-content:space-between;align-items:center;gap:12px">
        <div style="flex:1;min-width:220px">
          <span class="tag lime">🏆 ${isEs?'¡Módulo completado!':'סיימת את כל המשימות!'}</span>
          <h2 style="margin-top:6px;font-size:1.1rem">${isEs?'Tu siguiente módulo ya está listo':'מודול ההמשך מוכן ונפתח עבורך!'}</h2>
          <p class="small muted" style="margin-top:3px"><b>${esc(nextLabel)}</b> · ${isEs?'4 unidades nuevas, vocabulario y conversaciones.':'4 יחידות חדשות, אוצר מילים, קריאה ושיחות AI ברמה הבאה — תוך שמירה על ה-XP והרצף שלך.'}</p>
        </div>
        <button class="btn primary" data-act="advance-continuation-module">🚀 ${isEs?'Abrir siguiente módulo':'פתח מודול המשך'}</button>
      </div>
    </div>`;
  }
  if(compact) return '';
  const nextStage=Math.min(3,CURRENT_MODULE_STAGE+1);
  return `<div class="card continuation-card locked" style="margin-top:14px">
    <div class="row" style="justify-content:space-between;align-items:center;gap:10px">
      <div style="flex:1;min-width:210px">
        <span class="tag gold">🔒 ${isEs?'Siguiente módulo':'מודול ההמשך מחכה לך'} · ${PENDING_NEXT_CURRICULUM?esc(PENDING_NEXT_CURRICULUM.level||''):`שלב ${nextStage}`}</span>
        <div class="small" style="margin-top:5px"><b>${PENDING_NEXT_CURRICULUM?esc(PENDING_NEXT_CURRICULUM.title||''):(isEs?`Módulo de Continuación ${nextStage-1}`:`מודול המשך ${nextStage-1} — קפיצת מדרגה`)}</b></div>
        <p class="tiny muted" style="margin-top:2px">${isEs?'Completa las 4 unidades o aprueba el examen final (75+) para desbloquearlo automáticamente.':'השלמת 4 היחידות או ציון 75+ במבחן המסכם תפתח את מודול ההמשך אוטומטית.'}</p>
      </div>
      <span class="tag">${courseOverallPercent()}%</span>
    </div>
  </div>`;
}

function pageHome(){
  const li=levelInfo(), ds=wordStats();
  const goal=S.settings.goal||60;
  const dailyPct=Math.min(100,Math.round((S.daily.xp||0)/goal*100));
  const coursePct=courseOverallPercent();
  const completedUnitsCount=UNITS.filter(unitComplete).length;
  const allDone=allUnitsCompleted();
  const u=nextUnit();
  const word=ALL_WORD_LIST[dayIndex()%ALL_WORD_LIST.length] || ALL_WORD_LIST[0];
  const isFrenchLearning=CURRENT_LEARNER_PROFILE.learningLanguage==='French';
  const isSpanishUI=CURRENT_UI_LANGUAGE==='es';
  const practiceHeading=isSpanishUI
    ?'¿Lista para avanzar hoy?'
    :isFrenchLearning
      ?'ממשיכים להתקדם בצרפתית!'
      :(CURRENT_LEARNER_GENDER==='male'?'ממשיכים להתקדם היום!':'ממשיכים להתקדם היום!');
  const chatTaskTitle=isSpanishUI?'Conversación con tu coach':'שיחה קצרה עם המאמנת';
  const reviewDone=S.review.doneToday||0;
  const tasks=[
    {done:(S.daily.answers||0)>=8, t:'תרגול יומי', s:`${Math.min(S.daily.answers||0,8)}/8 תשובות`, route:`#/unit/${u.id}/practice`, btn:'לתרגל'},
    {done:reviewDone>=5, t:'חזרת מילים', s:`${Math.min(reviewDone,5)}/5 מילים`, route:'#/review', btn:'לחזרה'},
    {done:(S.daily.chats||0)>=1, t:chatTaskTitle, s:(S.daily.chats||0)>=1?'בוצע ✓':'שיחה אחת של דקה', route:'#/chat', btn:'לדבר'}
  ];
  const doneTasksCount=tasks.filter(t=>t.done).length;
  const allDailyDone=doneTasksCount===tasks.length;
  const stageBadge=ACTIVE_CURRICULUM?.title
    ? `${ACTIVE_CURRICULUM.level||S.settings.level}`
    : `שלב ${CURRENT_MODULE_STAGE} · ${S.settings.level||CURRENT_LEARNER_PROFILE.level||'A1'}`;

  return `<div class="page home-condensed">
    <section class="hero hero-clean">
      <div class="hero-top">
        <div style="flex:1;min-width:220px">
          <div class="row" style="gap:6px;margin-bottom:6px">
            <span class="tag lime">⚡ ${esc(stageBadge)}</span>
            <span class="tag gold">🔥 ${S.streak||1} ימים</span>
            <span class="tag">רמה ${li.lvl}</span>
          </div>
          <h1>היי <span>${esc(S.name||'תלמידה')}</span> 👋 · ${practiceHeading}</h1>

          <div class="journey-strip" aria-label="התקדמות במסלול">
            <div class="journey-head">
              <span>התקדמות במודול הנוכחי</span>
              <b>${coursePct}% · ${completedUnitsCount}/${UNITS.length} יחידות</b>
            </div>
            <div class="journey-bar"><i style="width:${coursePct}%"></i></div>
            <div class="journey-dots">
              ${UNITS.map((unit)=>{
                const done=unitComplete(unit), up=unitPct(unit), active=unit.id===u.id&&!done;
                return `<button class="jdot ${done?'done':active?'active':''}" data-go="#/unit/${unit.id}/practice" title="${escA(unit.he)} (${up}%)">
                  <span>${done?'✓':unit.n}</span>
                  <small>${esc(unit.he.split('·')[0].trim().slice(0,12))}</small>
                </button>`;
              }).join('')}
            </div>
          </div>

          <div class="hero-actions">
            ${allDone && canAdvanceContinuation()
              ? `<button class="btn primary" data-act="advance-continuation-module">🚀 פתח מודול המשך</button>`
              : `<button class="btn primary" data-go="#/unit/${u.id}/practice">▶ המשך: ${esc(u.he.split('·')[0].trim())}</button>`}
            <button class="btn ghost" data-go="#/chat">💬 שיחה עם המאמנת</button>
          </div>
        </div>

        <div class="ring-wrap">
          <div class="ring" style="--p:${dailyPct}" title="יעד יומי ${goal} XP">
            <div>${dailyPct}%<small>יעד יומי</small></div>
          </div>
          <div class="col" style="gap:5px">
            <div class="stat-chip"><b>${S.daily.xp||0}</b> / ${goal} XP היום</div>
            <div class="stat-chip">🧠 <b>${ds.mastered}</b> מילים יציבות</div>
            <div class="stat-chip">🎯 <b>${accuracy()?accuracy()+'%':'חדש'}</b> דיוק</div>
          </div>
        </div>
      </div>
    </section>

    ${continuationUnlockCardHTML(true)}

    <div class="grid two section" style="align-items:start">
      <div class="card">
        <div class="section-head">
          <h2>🎯 היעדים של היום</h2>
          <span class="tag ${allDailyDone?'lime':''}">${doneTasksCount}/${tasks.length}</span>
        </div>
        <div class="bar" style="margin-bottom:10px"><i style="width:${Math.round(doneTasksCount/tasks.length*100)}%"></i></div>
        ${tasks.map(t=>`<div class="task ${t.done?'done':''}">
          <div class="task-dot">${t.done?'✓':'•'}</div>
          <div><div class="task-t">${t.t}</div><div class="task-s">${t.s}</div></div>
          ${t.done?'':`<button class="btn xs" data-go="${t.route}">${t.btn}</button>`}
        </div>`).join('')}
        ${allDailyDone?`<div class="bonus-strip">
          <div class="small"><b>🎉 כל היעדים היומיים הושלמו!</b> רוצים להמשיך במומנטום?</div>
          <div class="row" style="margin-top:8px">
            <button class="btn xs primary" data-go="#/cards">🃏 משחק כרטיסיות</button>
            <button class="btn xs ghost" data-act="adaptive-generate-open">🧠 אתגר AI מותאם</button>
            <button class="btn xs ghost" data-go="#/exam">📝 מבחן מהיר</button>
          </div>
        </div>`:''}
      </div>

      <div class="card">
        <div class="section-head">
          <h2>⚡ חיזוק מהיר</h2>
          <span class="more" data-go="#/stats">ניתוח מלא ←</span>
        </div>
        ${word?`<div class="wotd-mini">
          <div class="row" style="justify-content:space-between;align-items:center">
            <div>
              <span class="tiny muted">🌟 מילת היום</span>
              <div class="row" style="gap:8px;margin-top:2px">
                <b class="en" style="font-size:1.2rem;color:var(--lime)">${esc(word.en)}</b>
                <span class="small" style="font-weight:700">${esc(word.he)}</span>
              </div>
              <div class="tiny muted" style="margin-top:2px"><span class="en">${esc(word.ex)}</span></div>
            </div>
            ${speakBtn(word.en)}
          </div>
        </div>`:''}
        <div class="quick-actions-grid" style="margin-top:12px">
          <button class="quick-tile" data-go="#/review">
            <span class="ic">🔁</span>
            <span><b>חזרה חכמה</b><small>${ds.due?`${ds.due} מילים ממתינות`:'הכל מעודכן ✓'}</small></span>
          </button>
          <button class="quick-tile" data-go="#/cards">
            <span class="ic">🃏</span>
            <span><b>כרטיסיות וזיכרון</b><small>תלת-ממד ומשחק התאמה</small></span>
          </button>
          <button class="quick-tile" data-act="adaptive-generate-open">
            <span class="ic">🧠</span>
            <span><b>חיזוק AI אישי</b><small>תרגול ממוקד לטעויות שלך</small></span>
          </button>
          <button class="quick-tile" data-go="#/learn">
            <span class="ic">🗺️</span>
            <span><b>כל היחידות</b><small>${completedUnitsCount}/${UNITS.length} הושלמו</small></span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ================= path ================= */
function pageLearn(){
  const cur=nextUnit();
  const stageInfo=typeof window.getModuleStageInfo==='function'
    ? window.getModuleStageInfo(CURRENT_LEARNER_PROFILE, CURRENT_MODULE_STAGE)
    : {currentStage:CURRENT_MODULE_STAGE,stages:[{n:1,label:'מודול 1',desc:'מסלול יסוד'},{n:2,label:'המשך 1',desc:'קפיצת מדרגה'},{n:3,label:'המשך 2',desc:'שטף ואלופים'}]};
  const coursePct=courseOverallPercent();
  const courseTitle=ACTIVE_CURRICULUM?.title||ACTIVE_CONTINUATION_META?.title||'מסלול הלמידה שלך';

  return `<div class="page">
    <div class="page-head">
      <div>
        <h1 class="page-title">🗺️ ${esc(courseTitle)}</h1>
        <p class="page-sub">התקדמות במודול הנוכחי: <b>${coursePct}%</b> · סיימ/י את 4 היחידות כדי לפתוח את מודול ההמשך.</p>
      </div>
      <span class="tag lime" style="margin-inline-start:auto">שלב ${CURRENT_MODULE_STAGE} · ${esc(S.settings.level||CURRENT_LEARNER_PROFILE.level||'A1')}</span>
    </div>

    <div class="module-ladder" aria-label="סולם המודולים">
      ${stageInfo.stages.map(st=>{
        const isCurrent=st.n===CURRENT_MODULE_STAGE;
        const isDone=st.n<CURRENT_MODULE_STAGE;
        const isNextUnlocked=st.n===CURRENT_MODULE_STAGE+1 && (allUnitsCompleted()||(S.exam?.best||0)>=75);
        return `<div class="ladder-step ${isCurrent?'current':isDone?'done':isNextUnlocked?'ready':'locked'}">
          <div class="ladder-num">${isDone?'✓':st.n}</div>
          <div>
            <b>${esc(st.label)}</b>
            <span>${esc(st.desc)}</span>
          </div>
          ${isCurrent?'<span class="tag lime">פעיל</span>':isDone?'<span class="tag">הושלם</span>':isNextUnlocked?`<button class="btn xs primary" data-act="advance-continuation-module" data-stage="${st.n}">פתח</button>`:'<span class="tiny muted">🔒</span>'}
        </div>`;
      }).join('')}
    </div>

    <div class="bar" style="margin:12px 0 16px"><i style="width:${coursePct}%"></i></div>

    <div class="grid two">
      ${UNITS.map(u=>{
        const pct=unitPct(u), done=unitComplete(u);
        const rem=Math.max(0,(u.exercises?.length||0)-unitDoneCount(u));
        const isNext=u.id===cur.id&&!done;
        return `<button class="unit-card ${done?'done':isNext?'next-up':''}" data-go="#/unit/${u.id}/${pct>0?'practice':'explain'}">
          <div class="unit-ic">${u.icon}</div>
          <div class="unit-body">
            <div class="row" style="justify-content:space-between">
              <div class="unit-kicker">יחידה ${u.n} · ${esc(u.cefr)}</div>
              ${isNext?'<span class="tag lime">הבא בתור</span>':done?'<span class="tag lime">✓ הושלם</span>':`<span class="tiny muted">נותרו ${rem}</span>`}
            </div>
            <div class="unit-title">${esc(u.he)}</div>
            <div class="unit-desc">${esc(u.lead)}</div>
            <div class="unit-foot"><div class="bar"><i style="width:${pct}%"></i></div><span class="unit-pct">${done?'100%':pct+'%'}</span></div>
          </div>
        </button>`;
      }).join('')}
    </div>

    ${continuationUnlockCardHTML(false)}

    <div class="card" style="margin-top:16px">
      <div class="row" style="justify-content:space-between;align-items:center">
        <div>
          <h2 style="font-size:1.05rem">🏁 מבחן מסכם למודול</h2>
          <p class="small muted">20 שאלות מכל היחידות · ציון 75+ פותח את מודול ההמשך.</p>
        </div>
        <div class="row">
          <span class="tag gold">${S.exam.best?S.exam.best+'/100':'טרם בוצע'}</span>
          <button class="btn primary sm" data-go="#/exam">📝 למבחן</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ================= unit ================= */
function pageUnit(unitId, section){
  const u=UNITS.find(x=>x.id===unitId);
  if(!u){ go('#/learn'); return ''; }
  section=section||'explain';
  S.last.unit=u.id;
  save();
  const pct=unitPct(u), done=unitDoneCount(u);
  const tabs=[['explain','📖 הסבר'],['words','📚 מילים'],['practice','✏️ תרגול'],['chat','💬 שיחה']];
  const sc=SCENARIOS.find(s=>s.unit===u.id);
  let inner='';
  if(section==='explain'){
    inner=`<div class="card flat" style="margin-bottom:12px">
        <div class="row"><span class="tag lime">🎯 מה תדע לעשות</span></div>
        <ul style="margin:10px 0 0 0;padding-inline-start:18px;font-size:.88rem;line-height:1.9">${u.canDo.map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="section-head" style="margin-top:16px"><h2>📌 הכללים – בקצרה ולעומק</h2><span class="tiny muted">פתוח תמיד בתרגיל</span></div>
      ${u.rules.map((r,i)=>`<details class="rule" ${i===0?'open':''}>
        <summary><span class="n">${i+1}</span>${r.title}<span class="chev">▾</span></summary>
        <div class="rule-body">
          <p>${r.body}</p>
          <div class="formula">${esc(r.formula)}</div>
          <ul class="ex-list">${r.examples.map(ex=>`<li><span class="en">${ex.en}</span> ${speakBtn(ex.en)}<span class="he">${ex.he}</span></li>`).join('')}</ul>
          <div class="mistake"><b>⚠️ הטעות הנפוצה:</b> ${r.mistake}</div>
          <div class="hook"><b>💡 טריק לזכור:</b> ${r.hook}</div>
        </div>
      </details>`).join('')}
      <div class="card" style="margin-top:14px"><div class="section-head"><h2>💡 עובדה שתדביק אותך</h2></div><div class="fact">${u.fact}</div></div>
      <button class="btn primary wide" style="margin-top:14px" data-go="#/unit/${u.id}/practice">▶ ${done?'המשיכי לתרגל':'בואי נתרגל את היחידה'}</button>`;
  }else if(section==='words'){
    inner=`<div class="card">
      <div class="section-head"><h2>📚 ${u.words.length} מילות מפתח</h2><span class="tag">${u.cefr}</span></div>
      <p class="tiny muted" style="margin-bottom:6px">לחצי 🔊 לשמוע. כל מילה שנפגוש בתרגול נכנסת אוטומטית למעגל החזרות.</p>
      ${u.words.map(w=>`<div class="word">
        <div class="word-main">
          <div><span class="en word-en">${w.en}</span>${w.pron?`<span class="pron"> · ${w.pron}</span>`:''}<span class="word-he">${w.he}</span></div>
          <div class="word-ex"><span class="en">${w.ex}</span><span class="he">${w.exHe}</span></div>
          <div class="row" style="margin-top:5px">${masteryDots(w.en)}<span class="tiny muted">${(S.words[w.en.toLowerCase()]&&S.words[w.en.toLowerCase()].box>=4)?'יציבה בזיכרון':'במעגל החזרה'}</span></div>
        </div>
        ${speakBtn(w.ex,w.en)}
      </div>`).join('')}
    </div>
    <div class="row" style="margin-top:12px;gap:8px">
      <button class="btn primary" style="flex:1" data-go="#/cards?unit=${u.id}">🃏 כרטיסיות תלת-ממדיות</button>
      <button class="btn ghost" style="flex:1" data-go="#/unit/${u.id}/practice">✏️ תרגול בהקשר</button>
    </div>`;
  }else if(section==='practice'){
    inner=`<div id="practice-host">${practiceHTML(u)}</div>`;
  }else{
    inner=`<div class="card">
      <div class="section-head"><h2>💬 שיחה שקשורה ליחידה</h2><span class="tag purple">${sc?sc.level:'A2–B2'}</span></div>
      ${sc?`<p class="small muted">${sc.desc}</p>
        <div class="row" style="margin-top:12px"><span class="tag">${sc.icon} ${sc.who}</span><span class="tag">${sc.focus}</span></div>
        <button class="btn primary wide" style="margin-top:14px" data-go="#/chat/${sc.id}">▶ פתח שיחה עם ${sc.who}</button>`
      :`<p class="small muted">ביחידה הזו נתרגל שיחה חופשית – ספרי למאמנת מה למדת והשתמש במילים החדשות.</p>
        <button class="btn primary wide" style="margin-top:14px" data-go="#/chat/free">▶ שיחה חופשית</button>`}
      <div class="divider"></div>
      <h3 style="font-size:.92rem;margin-bottom:6px">🎯 איך להפיק הכי הרבה</h3>
      <ul style="font-size:.84rem;color:var(--mu);padding-inline-start:18px;line-height:1.9">
        <li>ענה במשפט שלם – גם אם יש טעויות. המאמנת מתקנת בעדינות.</li>
        <li>לחצי על 💡 רמז אם את תקועה, ועל 🌐 תרגום אם לא הבנת.</li>
        <li>בסוף השיחה תקבלי דוח ומילים חדשות לחזרה.</li>
      </ul>
      <div class="row" style="margin-top:10px"><button class="btn sm ghost" data-go="#/chat">לכל התרחישים</button></div>
    </div>`;
  }
  return `<div class="page">
    <div class="page-head">
      <button class="back" data-go="#/learn" aria-label="חזרה למסלול">→</button>
      <div><div class="unit-kicker">יחידה ${u.n} · ${u.cefr}</div><h1 class="page-title">${u.he}</h1><div class="page-sub" style="margin:0">${u.title}</div></div>
      <span class="tag lime" style="margin-inline-start:auto">${pct}%</span>
    </div>
    <div class="bar" style="margin-bottom:14px"><i style="width:${pct}%"></i></div>
    <div class="seg">
      ${tabs.map(([k,label])=>`<button data-go="#/unit/${u.id}/${k}" class="${section===k?'active':''}">${label}</button>`).join('')}
    </div>
    ${inner}
  </div>`;
}

/* ================= exercise engine ================= */
let QS=null;
let PRACTICE_RULE_OPEN = true;
function currentUnitExercise(u){
  const pos=clamp(S.unitPos[u.id]||0,0,u.exercises.length-1);
  return {ex:u.exercises[pos],index:pos};
}
function practiceHTML(u){
  const {ex,index}=currentUnitExercise(u);
  const done=unitDoneCount(u);
  const allDone=done===u.exercises.length;
  const activeRule = (ex && ex.rule ? RULE_MAP[ex.rule] : null) || (u.rules && u.rules[0]) || null;
  return `<div class="card flat" style="margin-bottom:12px">
      <div class="row"><span class="tag">${u.icon} ${u.he}</span><span class="tag lime">${done}/${u.exercises.length} הושלמו</span>
      <button class="btn xs ghost" style="margin-inline-start:auto" data-act="toggle-map">מפה</button></div>
      <div class="ex-map ${S.seen.mapOpen?'':'hide'}" id="ex-map">${u.exercises.map((e,i)=>{
        const p=S.prog[e.id];
        return `<button data-act="jump" data-idx="${i}" class="${p&&p.done?'done':''} ${i===index?'cur':''} ${p&&p.wrong&&!p.correct?'wrong':''}" title="תרגיל ${i+1}">${i+1}</button>`;
      }).join('')}</div>
    </div>
    ${allDone && !S.seen.retryPractice ? `<div class="card center">
      <div style="font-size:2rem">🏁</div><h2 style="margin:6px 0">סיימת את היחידה!</h2>
      <p class="muted small">${unitCorrectCount(u)} מתוך ${u.exercises.length} נכונים. המילים נכנסו למעגל החזרה – שם הן יהפכו ליציבות.</p>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn primary" data-go="#/review">🔁 לחזרה החכמה</button><button class="btn ghost" data-act="re-practice">תרגלי שוב</button><button class="btn ghost" data-go="#/unit/${u.id}/chat">💬 שיחה</button></div>
    </div>` : `
      <div class="card linguistic-rule-guide" style="margin-bottom:12px;border:1px solid rgba(var(--primary-rgb),.35);background:linear-gradient(145deg,rgba(22,36,58,.88),rgba(14,24,38,.96))">
        <div class="row" style="justify-content:space-between;align-items:center">
          <div class="row" style="gap:6px">
            <span class="tag purple">📚 נושא לשוני</span>
            <b style="font-size:.92rem;color:var(--lime)">${esc(u.linguisticTopic || activeRule?.title || u.title)}</b>
          </div>
          <button class="btn xs ghost" data-act="toggle-practice-rule" style="font-size:.76rem">
            ${PRACTICE_RULE_OPEN ? '▲ הסתר כלל' : '▼ הצג כלל ועזרה'}
          </button>
        </div>
        <div id="practice-rule-box" class="${PRACTICE_RULE_OPEN ? '' : 'hide'}" style="margin-top:10px">
          ${activeRule ? `
            <div style="font-size:.88rem;color:#dbe4f0;line-height:1.75">${activeRule.body || u.lead}</div>
            ${activeRule.formula ? `<div class="formula" style="margin:8px 0">${esc(activeRule.formula)}</div>` : ''}
            ${activeRule.examples?.length ? `<div class="tiny" style="color:var(--cyan);margin-top:6px"><b>💡 דוגמה מנחה:</b> <span class="en">${activeRule.examples[0].en}</span> — ${activeRule.examples[0].he}</div>` : ''}
            ${activeRule.mistake ? `<div class="tiny" style="margin-top:6px;color:var(--gold);background:rgba(255,201,77,.1);padding:6px 10px;border-radius:8px"><b>⚠️ שימי לב:</b> ${activeRule.mistake}</div>` : ''}
          ` : `<div style="font-size:.88rem;color:#dbe4f0">${u.lead}</div>`}
        </div>
      </div>
      <div id="ex-host"></div>
    `}
    <div class="row" style="margin-top:12px"><button class="btn sm ghost" data-go="#/unit/${u.id}/explain">📖 חזרה על הכללים</button><button class="btn sm ghost" data-go="#/unit/${u.id}/words">📚 המילים</button></div>`;
}
function mountUnitPractice(u){
  const host=$('#ex-host'); if(!host) return;
  const idx=clamp(S.unitPos[u.id]||0,0,u.exercises.length-1);
  mountExercise(host,u.exercises[idx],{scope:'unit',unitId:u.id,index:idx,total:u.exercises.length});
}
function mountExercise(host,ex,ctx){
  QS={ex,ctx,attempts:0,hint:0,answered:false,tokens:null,zone:[],typed:'',choice:null,revealed:false};
  if(ex.t==='scr'){
    const words=ex.sentence.split(' ');
    let sh=shuffle(words);
    if(words.length>2){ let tries=0; while(sh.join(' ')===words.join(' ')&&tries++<10) sh=shuffle(words); }
    QS.tokens=sh.map((w,i)=>({w,id:i,used:false}));
  }
  host.innerHTML=exerciseCardHTML();
  const inp=$('#answer-input'); if(inp && innerWidth>760) setTimeout(()=>inp.focus(),80);
}
function exerciseCardHTML(){
  const {ex,ctx}=QS;
  const u=UNITS.find(x=>x.id===ex.unit)||{};
  const badge = ctx.scope==='review'?'🔁 חזרה':ctx.scope==='exam'?'📝 מבחן':ctx.scope==='drill'?'🎯 תרגול':`${u.icon||'📘'} יחידה ${u.n||''}`;
  const skillTag = ex.skill==='grammar'?'דקדוק':ex.skill==='listening'?'שמיעה':ex.skill==='reading'?'הבנת הנקרא':'אוצר מילים';
  let body='';
  const disabled=QS.answered?'disabled':'';
  if(ex.t==='readmcq'){
    const reading=ex.reading;
    body=`<section class="reading-passage" aria-label="קטע קריאה">
        <div class="reading-title">📖 ${esc(reading.title||'קטע קריאה')}</div>
        <div>${clickableEnglish(reading.passage,reading.vocabulary)}</div>
        <div class="tiny muted" style="margin-top:8px">לחצי על מילה כדי לשמוע אותה ולראות את התרגום.</div>
      </section>
      <div class="opts">${ex.opts.map((o,i)=>`<button class="opt ${QS.choice===o?(QS.choiceCorrect?'correct':'wrong'):''}" data-opt="${escA(o)}" ${disabled}>
        <span class="k">${'ABCD'[i]||i+1}</span><span class="${/[\u0590-\u05FF]/.test(o)?'':'en'}">${esc(o)}</span></button>`).join('')}</div>`;
  }else if(ex.t==='mcq'||ex.t==='listenmcq'){
    body = `${ex.t==='listenmcq'?`<button class="listen-big" data-act="listen">🔊 השמע שוב</button>`:''}
      <div class="opts">${ex.opts.map((o,i)=>`<button class="opt ${QS.choice===o?(QS.choiceCorrect?'correct':'wrong'):''}" data-opt="${escA(o)}" ${disabled}>
        <span class="k">${'ABCD'[i]||i+1}</span><span class="${/[\u0590-\u05FF]/.test(o)?'':'en'}">${esc(o)}</span></button>`).join('')}</div>`;
  }else if(ex.t==='gap'){
    body=`<div class="ex-sentence">${ex.sentence.split('___').map((part,i,arr)=>esc(part)+(i<arr.length-1?'<span class="blank">______</span>':'')).join('')}</div>
      <input class="txt" id="answer-input" placeholder="הקלד את הצורה החסרה…" value="${escA(QS.typed)}" ${disabled} autocomplete="off" autocapitalize="off" spellcheck="false">`;
  }else if(ex.t==='type'||ex.t==='listen'){
    body=`${ex.t==='listen'?`<button class="listen-big" data-act="listen">🔊 השמע</button>`:''}
      <input class="txt" id="answer-input" placeholder="הקלד באנגלית…" value="${escA(QS.typed)}" ${disabled} autocomplete="off" autocapitalize="off" spellcheck="false">`;
  }else if(ex.t==='scr'){
    body=`<div class="scr-zone" id="scr-zone">${QS.zone.map(id=>{const t=QS.tokens.find(x=>x.id===id);return `<button class="tok in-zone" data-act="unpick" data-id="${id}">${esc(t.w)}</button>`}).join('')}</div>
      <div class="scr-zone" style="border-style:solid;border-color:var(--line)">${QS.tokens.filter(t=>!QS.zone.includes(t.id)).map(t=>`<button class="tok" data-act="pick" data-id="${t.id}">${esc(t.w)}</button>`).join('')}</div>`;
  }
  const isExam=ctx.scope==='exam';
  const actions = isExam
    ? (ex.t==='mcq'||ex.t==='listenmcq' ? '' : `<button class="btn primary" data-act="check">✔ בדיקה</button>`)
    : (ex.t==='mcq'||ex.t==='listenmcq'
      ? `<button class="btn sm ghost" data-act="hint">💡 רמז</button>${ex.rule?`<button class="btn sm ghost" data-act="rule" data-rule="${ex.rule}">📘 הכלל</button>`:''}`
      : `<button class="btn primary" data-act="check">✔ בדיקה</button>
         <button class="btn sm ghost" data-act="hint">💡 רמז</button>
         ${ex.t==='scr'?`<button class="btn sm ghost" data-act="clear">↩ ניקוי</button>`:''}
         ${ex.rule?`<button class="btn sm ghost" data-act="rule" data-rule="${ex.rule}">📘 הכלל</button>`:''}`);
  const ruleObj = ex.rule ? RULE_MAP[ex.rule] : null;
  return `<div class="ex-shell">
    <div class="ex-top">
      <span class="tag">${badge}</span><span class="tag lime">${skillTag}</span>
      ${ctx.total?`<span class="tiny muted">${ctx.index+1} מתוך ${ctx.total}</span>`:''}
      ${ruleObj?`<button class="btn xs ghost" style="margin-inline-start:auto" data-act="rule" data-rule="${ex.rule}">📘 ${esc(ruleObj.short||ruleObj.title)}</button>`:ctx.scope==='unit'?`<button class="btn xs ghost" style="margin-inline-start:auto" data-act="unit-rules">📖 הסבר היחידה</button>`:''}
    </div>
    <div class="ex-progress"><i style="width:${ctx.total?Math.round((ctx.index)/ctx.total*100):0}%"></i></div>
    <div class="ex-card">
      <div class="ex-num">${ctx.scope==='exam'?'שאלת מבחן':ctx.scope==='review'?'כרטיס חזרה':'תרגיל'} ${ctx.index+1}${ctx.total?' / '+ctx.total:''}</div>
      <div class="ex-q">${ex.q}</div>
      ${body}
      <div id="hint-slot"></div>
      <div class="ex-actions">${actions}</div>
      <div id="fb-slot" aria-live="polite"></div>
    </div>
  </div>`;
}
function renderQuestion(){
  const host=$('#ex-host');
  if(host) host.innerHTML=exerciseCardHTML();
  else {
    const shell=$('.ex-shell');
    if(shell) shell.outerHTML=exerciseCardHTML();
  }
  const inp=$('#answer-input');
  if(inp){
    inp.addEventListener('input',e=>{QS.typed=e.target.value});
    inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); e.stopPropagation(); checkTyped(); } });
    if(window.matchMedia && window.matchMedia('(pointer: fine)').matches){
      setTimeout(()=>{ if(document.activeElement!==inp && !inp.disabled) inp.focus(); },0);
    }
  }
}
function currentAccepted(){
  const ex=QS.ex;
  return [].concat(ex.ans||[]);
}
function finalize(ok, given){
  if(QS.answered) return;
  QS.answered=true; QS.correct=ok; QS.given=given;
  const ex=QS.ex, firstTry=QS.attempts===0;
  trackAnswer(ex,ok);
  markProg(ex,ok);
  let gain=0;
  if(ok){
    gain = QS.ctx.scope==='review' ? (firstTry?5:2) : (firstTry?10:5);
    if(QS.hint>0) gain=Math.min(gain,3);
    addXP(gain,$('.ex-card')); beep(true);
  }
  else beep(false);
  if(ex.t==='mcq'||ex.t==='listenmcq'){
    $$('.opt').forEach(b=>{
      b.disabled=true;
      if(normHE(b.dataset.opt)===normHE(ex.ans)) b.classList.add('correct');
      else if(b.dataset.opt===given) b.classList.add('wrong');
      else b.classList.add('dim');
    });
  }
  const inp=$('#answer-input'); if(inp) inp.disabled=true;
  if(ex.skill==='listening' && ok){}
  if(QS.ctx.scope==='review' && typeof reviewAnswered==='function') reviewAnswered(ok);
  if(QS.ctx.scope==='exam' && typeof examAnswered==='function') examAnswered(ok);
  if(QS.ctx.scope==='drill' && typeof drillAnswered==='function') drillAnswered(ok);
  showFeedback(ok,gain);
  save();
}
function markProg(ex,ok){
  if(QS.ctx.scope==='review'||QS.ctx.scope==='exam'||QS.ctx.scope==='drill') return;
  const p=S.prog[ex.id] || (S.prog[ex.id]={done:false,correct:0,wrong:0,seen:0,first:false,ts:0});
  p.done=true; p.seen=(p.seen||0)+1; p.ts=Date.now();
  if(ok){ p.correct=(p.correct||0)+1; if(p.seen===1) p.first=true; }
  else p.wrong=(p.wrong||0)+1;
}
function showFeedback(ok,gain){
  const ex=QS.ex, slot=$('#fb-slot'); if(!slot) return;
  const accepted=currentAccepted();
  const answerLine=accepted.map(a=>`<span class="en">${fmt(a,true)}</span>`).join(' / ');
  const clickableAnswers=ok
    ?accepted.filter(answer=>/[A-Za-z]/.test(String(answer))).map(answer=>clickableEnglish(answer)).join(' / ')
    :'';
  const ruleBtn=(ex.rule&&QS.ctx.scope!=='exam')?`<button class="btn xs ghost" data-act="rule" data-rule="${ex.rule}">📘 פתח את הכלל</button>`:'';
  const nextLabel=QS.ctx.scope==='exam'?'לשאלה הבאה ←':'הבא ←';
  if(ok){
    slot.innerHTML=`<div class="fb ok">
      <h4>✅ ${praise()} ${gain?`<span style="color:var(--gold)">+${gain} XP</span>`:''}</h4>
      ${clickableAnswers?`<div class="answer-line">${clickableAnswers}</div><div class="tiny muted">לחצי על מילה באנגלית כדי לשמוע אותה ולראות את התרגום.</div>`:''}
      ${QS.near?`<div class="small" style="color:var(--gold)">כמעט מושלם – שימי לב לאיות: <span class="en">${esc(accepted[0])}</span></div>`:''}
      <div class="why">${ex.why||''}</div>
      <div class="divider" style="margin:10px 0"></div>
      <div class="row">${ruleBtn}<button class="btn sm primary" data-act="next">${nextLabel}</button></div>
    </div>`;
  }else{
    slot.innerHTML=`<div class="fb no">
      <h4>💪 ${nope()}</h4>
      <div class="small">התשובה הנכונה:</div>
      <div class="answer-line">${answerLine}</div>
      <div class="why">${ex.why||''}</div>
      <div class="row" style="margin-top:10px">${ruleBtn}<button class="btn sm ghost" data-act="retry">🔄 נסי שוב</button><button class="btn sm primary" data-act="next">${nextLabel}</button></div>
    </div>`;
  }
  slot.scrollIntoView({behavior:'smooth',block:'center'});
}
function checkCurrent(){
  if(!QS||QS.answered) return;
  if(QS.ex.t==='scr'){
    const val=(QS.zone||[]).map(id=>{const t=QS.tokens.find(x=>x.id===id);return t?t.w:''}).join(' ');
    if(!val.trim()){ toast('בחרי מילים כדי לבנות משפט 🙂'); return; }
    const res=compareAnswer(val,[QS.ex.sentence]);
    QS.near=res.near;
    if(res.ok) finalize(true,val);
    else { QS.attempts++; QS.typed=val; finalize(false,val); }
    return;
  }
  checkTyped();
}
function checkTyped(){
  if(!QS||QS.answered) return;
  if(QS.ex.t==='scr'){ checkCurrent(); return; }
  const input=$('#answer-input'); const val=input?input.value:'';
  QS.typed=val;
  if(!val.trim()){ toast('כתבי תשובה קודם 🙂'); return; }
  const res=compareAnswer(val,currentAccepted());
  QS.near=res.near;
  if(res.ok) finalize(true,val);
  else { QS.attempts++; finalize(false,val); }
}
function chooseOption(val){
  if(!QS||QS.answered) return;
  const ex=QS.ex;
  const ok = /[\u0590-\u05FF]/.test(ex.ans) ? normHE(val)===normHE(ex.ans) : normEN(val)===normEN(ex.ans);
  QS.choice=val; QS.choiceCorrect=ok;
  if(!ok) QS.attempts++;
  finalize(ok,val);
}
function showHint(){
  if(!QS) return;
  QS.hint++;
  const slot=$('#hint-slot'); if(!slot) return;
  const ex=QS.ex;
  if(ex.t==='mcq'||ex.t==='listenmcq'){
    if(QS.hint===1){
      const wrong=[...$$('.opt')].filter(b=>normHE(b.dataset.opt)!==normHE(ex.ans));
      if(wrong[0]){ wrong[0].classList.add('dim'); wrong[0].disabled=true; }
      slot.innerHTML=`<div class="hintbox">💡 פסלתי תשובה אחת. נשארו ${ex.opts.length-1}. קראי שוב את המשפט ושאלי: מי עושה את הפעולה?</div>`;
    }else{
      slot.innerHTML=`<div class="hintbox">💡 ${thinHint(ex.ans,2)}<br><button class="btn xs ghost" style="margin-top:6px" data-act="rule" data-rule="${ex.rule||''}">📘 הכלל יעזור</button></div>`;
    }
  }else if(ex.t==='scr'){
    const first=ex.sentence.split(' ')[0];
    slot.innerHTML=`<div class="hintbox">💡 המשפט מתחילה ב-<b class="en">${esc(first)}</b> ובסך הכול ${ex.sentence.split(' ').length} מילים.</div>`;
  }else if(ex.t==='listen'||ex.t==='listenmcq'){
    slot.innerHTML=`<div class="hintbox">💡 ${thinHint(ex.ans,QS.hint)}<br><button class="btn xs ghost" style="margin-top:6px" data-act="listen">🔊 השמע שוב</button></div>`;
  }else{
    slot.innerHTML=`<div class="hintbox">💡 ${thinHint([].concat(ex.ans)[0],QS.hint)}</div>`;
  }
}
function retryQuestion(){
  if(!QS) return;
  const ex=QS.ex, ctx=QS.ctx, attempts=QS.attempts, hint=QS.hint;
  mountExercise($('#ex-host'),ex,ctx);
  QS.attempts=attempts; QS.hint=hint;
}
function nextInUnit(){
  const u=UNITS.find(x=>x.id===QS.ctx.unitId);
  let idx=QS.ctx.index+1;
  if(idx>=u.exercises.length){
    S.unitPos[u.id]=u.exercises.length-1; save(); render();
    toast('🏁 סיימת את היחידה! עכשיו לחזרה החכמה');
    return;
  }
  S.unitPos[u.id]=idx; save(); render();
}
function jumpExercise(i){
  const u=UNITS.find(x=>x.id===QS.ctx.unitId);
  S.unitPos[u.id]=clamp(Number(i),0,u.exercises.length-1); save(); render();
}
function openRule(ruleId){
  const r=RULE_MAP[ruleId];
  if(!r){ toast('הכלל יופיע בהסבר היחידה'); return; }
  const u=UNITS.find(x=>x.id===r.unitId);
  openModal(`<button class="x" data-close>✕</button>
    <span class="tag lime">📘 ${u?u.he:''}</span>
    <h3 style="margin-top:8px">${r.title}</h3>
    <p class="small muted">${r.short||''}</p>
    <div class="rule-body" style="padding:0;margin-top:10px">
      <p>${r.body}</p>
      <div class="formula">${esc(r.formula)}</div>
      <ul class="ex-list">${r.examples.map(ex=>`<li><span class="en">${ex.en}</span> ${speakBtn(ex.en)}<span class="he">${ex.he}</span></li>`).join('')}</ul>
      <div class="mistake"><b>⚠️ שימי לב:</b> ${r.mistake}</div>
      <div class="hook"><b>💡 טריק:</b> ${r.hook}</div>
    </div>
    <button class="btn primary wide" style="margin-top:12px" data-close>הבנתי, חזרה לתרגיל</button>`);
}
/* ============================================================
   BEERI ENGLISH COACH — core 2: review, stats, exam, settings, router
   ============================================================ */

/* ================= review / spaced repetition ================= */
function startReview(){
  Object.keys(S.words).forEach(k=>{ if(S.words[k]) S.words[k].key=k; });
  let keys=dueWords().map(w=>w.key);
  if(!keys.length){
    keys=Object.keys(S.words).filter(k=>((S.words[k].box||0)<4)).sort((a,b)=>(S.words[a].box||0)-(S.words[b].box||0)).slice(0,10);
  }
  if(!keys.length){
    toast('עוד אין מילים במעגל – התחילי מיחידה 1');
    go('#/learn'); return;
  }
  S.review.queue=keys.slice(0,12);
  S.review.idx=0; S.review.results=[]; S.review.finished=false;
  save(); go('#/review/session');
}
function wordByKey(k){
  if(ALL_WORDS[k]) return ALL_WORDS[k];
  return ALL_WORD_LIST.find(w=>w.en.toLowerCase()===k)||null;
}
function reviewExercise(word){
  const key=word.en.toLowerCase();
  const s=S.words[key]||{box:0};
  const others=shuffle(ALL_WORD_LIST.filter(w=>w.he!==word.he&&w.en!==word.en));
  const box=s.box||0;
  const mode = box>=4 ? 'listen' : box>=3 ? 'gap' : box===2 ? 'type' : 'mcq';
  if(mode==='type'){
    return {t:'type', id:'rev.'+key, unit:'', skill:'vocab', word:key, q:`איך כותבים באנגלית: <b>${esc(word.he)}</b>?`, ans:[word.en],
      why:`<b class="en">${word.en}</b> = ${word.he}. ${word.ex}`, hint:`${word.en.length} אותיות, מתחילה ב-${word.en[0].toUpperCase()}.`};
  }
  if(mode==='gap'){
    const base=word.en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    let m=null; try{ m=word.ex.match(new RegExp('\\b'+base+'\\w*\\b','i')); }catch(e){}
    if(m){
      return {t:'gap', id:'rev.g.'+key, unit:'', skill:'vocab', word:key, q:`השלימי מהזיכרון: <b class="en">${word.en}</b> (${word.he})`,
        sentence:word.ex.replace(m[0],'___'), ans:[m[0]], why:`${word.ex} — ${word.exHe}`, hint:`מתחילה ב-${m[0][0]}.`};
    }
  }
  if(mode==='listen'){
    return {t:'listen', id:'rev.l.'+key, unit:'', skill:'listening', word:key, audio:word.en,
      q:'לחצי 🔊, הקלידי וכתבי את המילה ששמעת.', ans:[word.en], why:`<b class="en">${word.en}</b> = ${word.he}. ${word.ex}`,
      hint:`${word.en.length} אותיות, מתחילה ב-${word.en[0].toUpperCase()}.`};
  }
  const otherHe=[...new Set(others.map(w=>w.he))].filter(h=>h!==word.he).slice(0,3);
  return {t:'mcq', id:'rev.m.'+key, unit:'', skill:'vocab', word:key,
    q:`מה המשמעות של <b class="en">${word.en}</b>?`,
    opts:shuffle([word.he,...otherHe]), ans:word.he,
    why:`<b class="en">${word.en}</b> = ${word.he}. ${word.ex}`, hint:`המילה מופיעה בדוגמה: ${word.ex}`};
}
function reviewAnswered(ok){
  if(!Array.isArray(S.review.results)) S.review.results=[];
  S.review.results.push(!!ok);
  S.review.doneToday=(S.review.doneToday||0)+1;
  S.daily.reviews=(S.daily.reviews||0)+1;
  S.stats.reviews=(S.stats.reviews||0)+1;
  if(ok) toast(rnd(['נכנס עמוק יותר לזיכרון 🧠','עוד צעד ליציבות ✨','חזרה טובה! +XP']));
  checkBadges(); save();
}
function nextReview(){
  S.review.idx=(S.review.idx||0)+1;
  if(S.review.idx>=S.review.queue.length){
    S.review.finished=true;
    const good=S.review.results.filter(Boolean).length;
    if(S.review.results.length) confetti(good>=S.review.results.length*.7?30:14);
    save(); render(); return;
  }
  save(); render();
}
function reviewOverviewHTML(){
  const ds=wordStats();
  const next=S.review.queue.length && !S.review.finished;
  return `<div class="page">
    <div class="page-head"><h1 class="page-title">🔁 מעגל החזרה</h1><p class="page-sub">חזרה מרווחת: כל מילה חוזרת בדיוק כשהמוח עומד לשכוח אותה. זה מה שהופך מילה מ"הכרתי" ל"ידעתי".</p></div>
    <div class="card">
      <div class="rings-card">
        <div class="ring" style="--p:${ds.total?Math.round(ds.mastered/ds.total*100):0}"><div>${ds.mastered}<small>מילים יציבות</small></div></div>
        <div class="legend">
          <div class="legend-row"><span class="legend-dot" style="background:var(--gold)"></span> ממתינות לחזרה <b>${ds.due}</b></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--cyan)"></span> בהטמעה (1–2) <b>${ds.learning}</b></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--green)"></span> יציבות (3–4) <b>${ds.stable}</b></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--line2)"></span> חדשות <b>${ds.newW}</b></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row" style="justify-content:space-between">
        <div><div class="due-big">${ds.due}</div><div class="due-label">מילים ממתינות לחזרה עכשיו</div></div>
        <button class="btn primary" data-act="start-review">${ds.due?'▶ התחילי חזרה':'▶ חזרה על החלשות'}</button>
      </div>
    </div>
    <div class="grid two section">
      <div class="card">
        <div class="section-head"><h2>⏳ מה חוזר בקרוב</h2></div>
        <div class="upcoming">${upcomingHTML()}</div>
      </div>
      <div class="card">
        <div class="section-head"><h2>🎯 אימונים קצרים</h2></div>
        <div class="col">
          <button class="continue" data-go="#/cards" style="border:1px solid rgba(var(--primary-rgb),.4);background:rgba(var(--primary-rgb),.08)"><span class="ic">🃏</span><span style="flex:1"><b>כרטיסי זיכרון תלת-ממדיים</b><span>כרטיסיות מסתובבות 3D, טיימר מהיר ומשחק התאמה</span></span><span class="tag lime">חדש!</span><span class="arr">←</span></button>
          <button class="continue" data-act="adaptive-generate-open"><span class="ic">🧠</span><span style="flex:1"><b>אימון AI מותאם אישית</b><span>תרגול חכם שנבנה מהטעויות והמילים שלך בזמן אמת</span></span><span class="arr">←</span></button>
          <button class="continue" data-go="#/drill/sprint"><span class="ic">⚡</span><span style="flex:1"><b>ספרינט 5 דקות</b><span>10 תרגילים מעורבים מכל מה שלמדת</span></span><span class="arr">←</span></button>
          <button class="continue" data-go="#/drill/listen"><span class="ic">👂</span><span style="flex:1"><b>אוזן חדה</b><span>שמיעה – מילה שנשמעת, את מזהה</span></span><span class="arr">←</span></button>
          <button class="continue" data-go="#/drill/errors"><span class="ic">🕵️</span><span style="flex:1"><b>ציד טעויות</b><span>מצאו את המשפט הנכון</span></span><span class="arr">←</span></button>
          <button class="continue" data-go="#/speak"><span class="ic">🎤</span><span style="flex:1"><b>תרגול דיבור</b><span>אמרי בקול, קבלי ציון על ההגייה</span></span><span class="arr">←</span></button>
        </div>
      </div>
    </div>
    <div class="card section">
      <div class="section-head"><h2>🧠 למה דווקא במעגלים?</h2></div>
      <p class="small" style="color:#dbe4f0;line-height:1.8">כשאת פוגשת מילה שוב אחרי יום, ואז אחרי שלושה, ואז אחרי שבוע – המוח מבין שזה חשוב ושומר אותה. אם מפספסים חזרה, המילה חוזרת מהר יותר. במסלול הזה כל מילה שלך עוברת בין 5 תחנות: פוגשת → מזהה → כותבת → משתמשת → יציב. את לא צריכה לנהל כלום – המערכת מזכירה לך.</p>
      <div class="grid four" style="margin-top:12px">
        ${[['1','פוגשת','בתרגיל'],['2','מזהה','בבחירה'],['3','כותבת','מהזיכרון'],['4','מיישם','בשיחה'],['5','יציב','חוזר רחוק']].map(([n,t,s])=>`<div class="stat-chip" style="text-align:center"><b>${n}</b> ${t}<div class="tiny muted">${s}</div></div>`).join('')}
      </div>
    </div>
  </div>`;
}
function upcomingHTML(){
  const list=Object.entries(S.words).map(([k,w])=>({k,w})).sort((a,b)=>(a.w.due||0)-(b.w.due||0)).slice(0,7);
  if(!list.length) return `<div class="empty"><span class="big">🌱</span> עדיין אין מילים במעגל.<br>כשתתרגל יחידה, המילים יופיעו כאן.</div>`;
  return list.map(({k,w})=>{
    const word=wordByKey(k); if(!word) return '';
    const delta=(w.due||0)-Date.now();
    const when=delta<=0?'עכשיו':delta<DAY?'היום':delta<2*DAY?'מחר':`בעוד ${Math.ceil(delta/DAY)} ימים`;
    return `<div class="up-row"><span class="en">${esc(word.en)}</span><span class="tiny muted">${word.he}</span><span class="when">${when}</span></div>`;
  }).join('');
}
function pageReviewSession(){
  const done=S.review.finished;
  if(done){
    const results=S.review.results||[], good=results.filter(Boolean).length, total=results.length||1;
    return `<div class="page"><div class="chat-summary">
      <div class="card result-hero">
        <div style="font-size:2.4rem">${good/total>=.8?'🏆':'💪'}</div>
        <div class="result-score">${good}/${total}</div>
        <h2>${good/total>=.8?'הזיכרון שלך מתחזק!':'עוד סיבוב והוא יתייצב'}</h2>
        <p class="muted small">כל חזרה מעבירה את המילים צעד אחד במעגל. המילים שטעית בהן יחזרו מוקדם יותר – בדיוק בזמן הנכון.</p>
        <div class="row" style="justify-content:center;margin-top:14px">
          <button class="btn primary" data-go="#/home">🏠 לבית</button>
          <button class="btn ghost" data-act="start-review">🔁 עוד סיבוב</button>
          <button class="btn ghost" data-go="#/chat">💬 לשיחה</button>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <div class="section-head"><h2>🔮 מתי נפגש שוב</h2></div>
        ${upcomingHTML()}
      </div>
    </div></div>`;
  }
  const key=(S.review.queue||[])[S.review.idx];
  const word=key?wordByKey(key):null;
  if(!word){ startReview(); return ''; }
  const ex=reviewExercise(word);
  return `<div class="page"><div class="chat-summary">
    <div class="page-head"><button class="back" data-go="#/review" aria-label="חזרה">→</button><div><h1 class="page-title">🔁 חזרה חכמה</h1><div class="page-sub" style="margin:0">${S.review.idx+1} מתוך ${S.review.queue.length} · ${word.he}</div></div></div>
    <div id="ex-host"></div>
    <div class="row" style="margin-top:10px"><button class="btn sm ghost" data-act="end-review">סיימי חזרה</button><button class="btn sm ghost" data-go="#/review">לתפריט החזרות</button></div>
  </div></div>`;
}
function mountReview(){
  const key=(S.review.queue||[])[S.review.idx];
  const word=key?wordByKey(key):null;
  if(!word||!$('#ex-host')) return;
  mountExercise($('#ex-host'),reviewExercise(word),{scope:'review',index:S.review.idx,total:S.review.queue.length});
}

/* ================= quick drills ================= */
let DRILL=null;
const DRILL_META={
  sprint:{icon:'⚡',title:'ספרינט 5 דקות',desc:'10 שאלות מעורבות מכל המסלול. תרגול מהיר לכל המוחות.'},
  listen:{icon:'👂',title:'אוזן חדה',desc:'שמיעה בלבד: הקשיבי, זהי ובחרי. תרגול לאוזן של רקדנית.'},
  errors:{icon:'🕵️',title:'ציד טעויות',desc:'בכל שאלה מחכים שלושה משפטים – רק אחד נכון.'},
  adaptive:{icon:'🧠',title:'אימון AI מותאם אישית',desc:'תרגילים שהבינה המלאכותית בנתה במיוחד עבורך לפי הטעויות, המילים והנושאים שדורשים חיזוק תוך כדי תנועה.'}
};
function startDrill(kind){
  let pool=[];
  const adaptive=ensureAdaptiveState();
  if(kind==='adaptive'){
    pool=(adaptive.lastBooster?.exercises?.length?adaptive.lastBooster.exercises:adaptive.customExercises)||[];
    if(!pool.length){
      const booster=buildLocalAdaptiveBooster(learnerAdaptiveSummary());
      adaptive.lastBooster=booster;
      adaptive.customExercises=booster.exercises;
      pool=booster.exercises;
    }
    pool=pool.slice(0,8);
  }
  if(kind==='sprint'){
    const custom=(adaptive.customExercises||[]).slice(0,4);
    const base=shuffle(UNITS.flatMap(u=>u.exercises).filter(e=>['mcq','type','gap','scr'].includes(e.t))).slice(0,10-custom.length);
    pool=shuffle([...custom,...base]);
  }
  if(kind==='listen') pool=shuffle(UNITS.flatMap(u=>u.exercises).filter(e=>['listen','listenmcq'].includes(e.t))).slice(0,10);
  if(kind==='errors') pool=shuffle(UNITS.flatMap(u=>u.exercises).filter(e=>e.t==='mcq'&&e.q.includes('איזה משפט'))).slice(0,10);
  if(pool.length<3) pool=shuffle(UNITS.flatMap(u=>u.exercises).filter(e=>e.t==='mcq')).slice(0,8);
  DRILL={kind,list:pool,idx:0,correct:0};
  go('#/drill/'+kind);
}
function drillAnswered(ok){
  if(!DRILL) return;
  if(ok) DRILL.correct++;
}
function pageDrill(kind){
  const meta=DRILL_META[kind]||DRILL_META.sprint;
  if(!DRILL||DRILL.kind!==kind){
    return `<div class="page"><div class="page-head"><button class="back" data-go="#/review">→</button><div><h1 class="page-title">${meta.icon} ${meta.title}</h1></div></div>
      <div class="card center"><div style="font-size:2.6rem">${meta.icon}</div><h2 style="margin:6px 0">${meta.title}</h2><p class="muted small">${meta.desc}</p>
      <button class="btn primary" style="margin-top:14px" data-act="start-drill" data-kind="${kind}">▶ התחילי תרגול</button></div></div>`;
  }
  if(DRILL.idx>=DRILL.list.length){
    const pct=Math.round(DRILL.correct/DRILL.list.length*100);
    return `<div class="page"><div class="chat-summary"><div class="card result-hero">
      <div style="font-size:2.2rem">${pct>=80?'🔥':pct>=50?'💪':'🌱'}</div>
      <div class="result-score">${pct}%</div><h2>${pct>=80?'תרגול חזק מאוד':'עוד תרגול קטן ואת שם'}</h2>
      <p class="muted small">${DRILL.correct} מתוך ${DRILL.list.length} נכונות.</p>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn primary" data-act="start-drill" data-kind="${kind}">🔁 עוד סיבוב</button><button class="btn ghost" data-go="#/review">לתפריט</button></div>
    </div></div></div>`;
  }
  const ex=DRILL.list[DRILL.idx];
  return `<div class="page"><div class="chat-summary">
    <div class="page-head"><button class="back" data-go="#/review" aria-label="חזרה">→</button><div><h1 class="page-title">${meta.icon} ${meta.title}</h1><div class="page-sub" style="margin:0">${DRILL.idx+1} מתוך ${DRILL.list.length} · ${DRILL.correct} נכונות</div></div></div>
    <div id="ex-host"></div>
  </div></div>`;
}
function mountDrill(){
  if(!DRILL||!$('#ex-host')) return;
  const ex=DRILL.list[DRILL.idx];
  if(!ex) return;
  mountExercise($('#ex-host'),ex,{scope:'drill',index:DRILL.idx,total:DRILL.list.length});
}
function nextDrill(){
  if(!DRILL) return;
  DRILL.idx++; save(); render();
}

/* ================= 3D flashcards & memory card matching module ================= */
const CARDS_STATE = {
  mode: 'flip', // 'flip' | 'match'
  unitFilter: 'all',
  deck: [],
  index: 0,
  flipped: false,
  timerSeconds: 10, // 0 = off, 5, 10, 15
  timeLeft: 10,
  timerInterval: null,
  sessionSeconds: 0,
  sessionInterval: null,
  autoPlay: false,
  autoPlayTimer: null,
  autoSpeak: true,
  hintVisible: false,
  starredKeys: new Set(),
  stats: { again: 0, hard: 0, good: 0, easy: 0, reviewed: 0 },
  match: {
    tiles: [],
    selected: [],
    moves: 0,
    matches: 0,
    totalPairs: 6,
    startTime: 0,
    elapsedMs: 0,
    timerInterval: null,
    combo: 0,
    maxCombo: 0,
    isBusy: false,
    finished: false,
    bestTimeMs: null
  }
};

function playCardAudio(kind){
  if(S.settings && !S.settings.sound) return;
  try{
    AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state === 'suspended') AC.resume();
    const t = AC.currentTime;
    if(kind==='flip'){
      const o=AC.createOscillator(), g=AC.createGain();
      o.frequency.setValueAtTime(320, t);
      o.frequency.exponentialRampToValueAtTime(560, t+0.06);
      g.gain.setValueAtTime(0.04, t);
      g.gain.exponentialRampToValueAtTime(0.001, t+0.07);
      o.connect(g); g.connect(AC.destination);
      o.start(t); o.stop(t+0.07);
    } else if(kind==='match'){
      [[523.25, 0], [659.25, 0.08], [783.99, 0.16]].forEach(([f, d]) => {
        const o=AC.createOscillator(), g=AC.createGain();
        o.type='sine'; o.frequency.value=f;
        g.gain.setValueAtTime(0.05, t+d);
        g.gain.exponentialRampToValueAtTime(0.001, t+d+0.22);
        o.connect(g); g.connect(AC.destination);
        o.start(t+d); o.stop(t+d+0.24);
      });
    } else if(kind==='wrong'){
      const o=AC.createOscillator(), g=AC.createGain();
      o.type='triangle'; o.frequency.setValueAtTime(180, t);
      o.frequency.linearRampToValueAtTime(130, t+0.16);
      g.gain.setValueAtTime(0.06, t);
      g.gain.exponentialRampToValueAtTime(0.001, t+0.18);
      o.connect(g); g.connect(AC.destination);
      o.start(t); o.stop(t+0.18);
    } else if(kind==='combo'){
      [[587.33, 0], [739.99, 0.07], [880, 0.14], [1046.5, 0.21]].forEach(([f, d]) => {
        const o=AC.createOscillator(), g=AC.createGain();
        o.type='sine'; o.frequency.value=f;
        g.gain.setValueAtTime(0.06, t+d);
        g.gain.exponentialRampToValueAtTime(0.001, t+d+0.2);
        o.connect(g); g.connect(AC.destination);
        o.start(t+d); o.stop(t+d+0.22);
      });
    } else if(kind==='victory'){
      [[523.25,0],[659.25,.1],[783.99,.2],[1046.5,.32]].forEach(([f,d])=>{
        const o=AC.createOscillator(), g=AC.createGain();
        o.type='triangle'; o.frequency.value=f;
        g.gain.setValueAtTime(0.07, t+d);
        g.gain.exponentialRampToValueAtTime(0.001, t+d+0.35);
        o.connect(g); g.connect(AC.destination);
        o.start(t+d); o.stop(t+d+0.38);
      });
    }
  }catch(e){}
}

function loadStarredCards(){
  if(Array.isArray(S.starredCards)){
    CARDS_STATE.starredKeys = new Set(S.starredCards);
  }
}

function saveStarredCards(){
  S.starredCards = Array.from(CARDS_STATE.starredKeys);
  save();
}

function getCardsDeck(unitFilter){
  const pool = [];
  UNITS.forEach(u => {
    if(unitFilter !== 'all' && unitFilter !== 'starred' && u.id !== unitFilter) return;
    (u.words || []).forEach(w => {
      const key = String(w.en || '').toLowerCase();
      if(unitFilter === 'starred' && !CARDS_STATE.starredKeys.has(key)) return;
      pool.push({
        ...w,
        key,
        unitId: u.id,
        unitTitle: u.title,
        unitHe: u.he,
        unitIcon: u.icon
      });
    });
  });
  return pool;
}

function initCards(unitFilter, mode){
  loadStarredCards();
  if(unitFilter !== undefined) CARDS_STATE.unitFilter = unitFilter;
  if(mode !== undefined) CARDS_STATE.mode = mode;
  CARDS_STATE.deck = shuffle(getCardsDeck(CARDS_STATE.unitFilter));
  CARDS_STATE.index = 0;
  CARDS_STATE.flipped = false;
  CARDS_STATE.hintVisible = false;
  CARDS_STATE.timeLeft = CARDS_STATE.timerSeconds;
  CARDS_STATE.stats = { again: 0, hard: 0, good: 0, easy: 0, reviewed: 0 };
  
  if(CARDS_STATE.mode === 'match'){
    initMatchGame(CARDS_STATE.unitFilter);
  } else {
    startCardsSessionTimer();
    restartCardTimer();
    if(CARDS_STATE.autoSpeak && CARDS_STATE.deck.length > 0){
      setTimeout(()=>{ if(CARDS_STATE.deck[0]) speak(CARDS_STATE.deck[0].en); }, 350);
    }
  }
}

function cleanupCardsTimers(){
  if(CARDS_STATE.timerInterval){ clearInterval(CARDS_STATE.timerInterval); CARDS_STATE.timerInterval = null; }
  if(CARDS_STATE.sessionInterval){ clearInterval(CARDS_STATE.sessionInterval); CARDS_STATE.sessionInterval = null; }
  if(CARDS_STATE.autoPlayTimer){ clearTimeout(CARDS_STATE.autoPlayTimer); CARDS_STATE.autoPlayTimer = null; }
  if(CARDS_STATE.match.timerInterval){ clearInterval(CARDS_STATE.match.timerInterval); CARDS_STATE.match.timerInterval = null; }
}

function startCardsSessionTimer(){
  if(CARDS_STATE.sessionInterval) clearInterval(CARDS_STATE.sessionInterval);
  CARDS_STATE.sessionInterval = setInterval(()=>{
    CARDS_STATE.sessionSeconds++;
    const el = $('#cards-session-time');
    if(el) el.textContent = formatCardsSec(CARDS_STATE.sessionSeconds);
  }, 1000);
}

function formatCardsSec(totalSec){
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m<10?'0':''}${m}:${s<10?'0':''}${s}`;
}

function restartCardTimer(){
  if(CARDS_STATE.timerInterval){ clearInterval(CARDS_STATE.timerInterval); CARDS_STATE.timerInterval = null; }
  if(CARDS_STATE.autoPlayTimer){ clearTimeout(CARDS_STATE.autoPlayTimer); CARDS_STATE.autoPlayTimer = null; }
  
  if(CARDS_STATE.timerSeconds <= 0){
    const bar = $('#flashcard-timer-fill');
    if(bar) bar.style.width = '0%';
    const txt = $('#card-timer-num');
    if(txt) txt.textContent = 'חופשי';
    return;
  }
  
  CARDS_STATE.timeLeft = CARDS_STATE.timerSeconds;
  updateTimerUI();
  
  const stepMs = 100;
  CARDS_STATE.timerInterval = setInterval(()=>{
    if(CARDS_STATE.flipped){
      clearInterval(CARDS_STATE.timerInterval);
      CARDS_STATE.timerInterval = null;
      return;
    }
    CARDS_STATE.timeLeft -= (stepMs / 1000);
    if(CARDS_STATE.timeLeft <= 0){
      CARDS_STATE.timeLeft = 0;
      updateTimerUI();
      clearInterval(CARDS_STATE.timerInterval);
      CARDS_STATE.timerInterval = null;
      // Auto flip on timeout
      flipCurrentCard(true);
    } else {
      updateTimerUI();
    }
  }, stepMs);
  
  if(CARDS_STATE.autoPlay && !CARDS_STATE.flipped){
    CARDS_STATE.autoPlayTimer = setTimeout(()=>{
      if(!CARDS_STATE.flipped) flipCurrentCard();
    }, 4000);
  }
}

function updateTimerUI(){
  const bar = $('#flashcard-timer-fill');
  const txt = $('#card-timer-num');
  if(bar && CARDS_STATE.timerSeconds > 0){
    const pct = Math.max(0, Math.min(100, (CARDS_STATE.timeLeft / CARDS_STATE.timerSeconds) * 100));
    bar.style.width = `${pct}%`;
  }
  if(txt){
    txt.textContent = `${Math.ceil(CARDS_STATE.timeLeft)}s`;
  }
}

function flipCurrentCard(isTimeout = false){
  const cardEl = $('#active-flashcard');
  if(!cardEl) return;
  CARDS_STATE.flipped = !CARDS_STATE.flipped;
  cardEl.classList.toggle('flipped', CARDS_STATE.flipped);
  playCardAudio('flip');
  
  if(isTimeout){
    cardEl.style.animation = 'shake .4s ease';
    setTimeout(()=>{ if(cardEl) cardEl.style.animation = ''; }, 450);
  }
  
  if(CARDS_STATE.flipped){
    if(CARDS_STATE.timerInterval){ clearInterval(CARDS_STATE.timerInterval); CARDS_STATE.timerInterval = null; }
    if(CARDS_STATE.autoPlay){
      CARDS_STATE.autoPlayTimer = setTimeout(()=>{
        rateCurrentCard('good');
      }, 3500);
    }
  } else {
    restartCardTimer();
    if(CARDS_STATE.autoSpeak){
      const card = CARDS_STATE.deck[CARDS_STATE.index];
      if(card) speak(card.en);
    }
  }
}

function rateCurrentCard(grade){
  if(CARDS_STATE.deck.length === 0) return;
  const card = CARDS_STATE.deck[CARDS_STATE.index];
  CARDS_STATE.stats[grade] = (CARDS_STATE.stats[grade] || 0) + 1;
  CARDS_STATE.stats.reviewed++;
  
  const key = card.key;
  S.words[key] = S.words[key] || { box: 0, due: Date.now(), seen: 0, correct: 0, wrong: 0, last: Date.now(), key, en: card.en, he: card.he };
  S.words[key].seen++;
  S.words[key].last = Date.now();
  
  if(grade === 'easy'){
    S.words[key].box = Math.min(5, (S.words[key].box || 0) + 2);
    S.words[key].correct++;
    addXp(5);
    confetti(12);
  } else if(grade === 'good'){
    S.words[key].box = Math.min(5, (S.words[key].box || 0) + 1);
    S.words[key].correct++;
    addXp(3);
  } else if(grade === 'hard'){
    S.words[key].box = Math.max(1, (S.words[key].box || 0));
    S.words[key].correct++;
    addXp(1);
  } else if(grade === 'again'){
    S.words[key].box = 0;
    S.words[key].wrong++;
    // Re-queue card to end of deck so it repeats
    CARDS_STATE.deck.push(card);
  }
  save();
  
  // Advance to next card
  CARDS_STATE.index++;
  CARDS_STATE.flipped = false;
  CARDS_STATE.hintVisible = false;
  
  renderCardsPage();
  if(CARDS_STATE.autoSpeak && CARDS_STATE.index < CARDS_STATE.deck.length){
    setTimeout(()=>{
      const nextCard = CARDS_STATE.deck[CARDS_STATE.index];
      if(nextCard) speak(nextCard.en);
    }, 250);
  }
}

function navigateCard(step){
  if(CARDS_STATE.deck.length === 0) return;
  CARDS_STATE.index = (CARDS_STATE.index + step + CARDS_STATE.deck.length) % CARDS_STATE.deck.length;
  CARDS_STATE.flipped = false;
  CARDS_STATE.hintVisible = false;
  renderCardsPage();
  if(CARDS_STATE.autoSpeak){
    const card = CARDS_STATE.deck[CARDS_STATE.index];
    if(card) speak(card.en);
  }
}

function toggleCardStar(key){
  if(CARDS_STATE.starredKeys.has(key)){
    CARDS_STATE.starredKeys.delete(key);
    toast('⭐ הוסר מהכרטיסיות המסומנות');
  } else {
    CARDS_STATE.starredKeys.add(key);
    toast('⭐ נוסף לכרטיסיות המסומנות');
  }
  saveStarredCards();
  const starBtn = $(`[data-act="card-star"][data-key="${escA(key)}"]`);
  if(starBtn) starBtn.classList.toggle('active', CARDS_STATE.starredKeys.has(key));
}

function toggleCardHint(){
  CARDS_STATE.hintVisible = !CARDS_STATE.hintVisible;
  const hintEl = $('#card-hint-box');
  if(hintEl) hintEl.classList.toggle('hide', !CARDS_STATE.hintVisible);
}

function cycleCardTimer(){
  const durs = [10, 15, 5, 0];
  const currIdx = durs.indexOf(CARDS_STATE.timerSeconds);
  CARDS_STATE.timerSeconds = durs[(currIdx + 1) % durs.length];
  toast(`⏱️ טיימר כרטיס: ${CARDS_STATE.timerSeconds ? CARDS_STATE.timerSeconds + ' שניות' : 'ללא טיימר'}`);
  restartCardTimer();
  renderCardsPage();
}

function toggleAutoPlay(){
  CARDS_STATE.autoPlay = !CARDS_STATE.autoPlay;
  toast(CARDS_STATE.autoPlay ? '▶️ ניגון אוטומטי הופעל' : '⏸️ ניגון אוטומטי הופסק');
  restartCardTimer();
  renderCardsPage();
}

function toggleAutoSpeak(){
  CARDS_STATE.autoSpeak = !CARDS_STATE.autoSpeak;
  toast(CARDS_STATE.autoSpeak ? '🔊 הקראה אוטומטית פעילה' : '🔇 הקראה אוטומטית כבויה');
  renderCardsPage();
}

/* ================= Speed Match Memory Game ================= */
function initMatchGame(unitFilter){
  cleanupCardsTimers();
  const pool = getCardsDeck(unitFilter || CARDS_STATE.unitFilter);
  const selectedWords = shuffle(pool).slice(0, 6);
  
  const tiles = [];
  selectedWords.forEach((w, idx) => {
    tiles.push({
      id: `en-${idx}`,
      pairId: idx,
      text: w.en,
      sub: w.pron || '',
      isTarget: true,
      flipped: false,
      matched: false,
      mismatch: false
    });
    tiles.push({
      id: `he-${idx}`,
      pairId: idx,
      text: w.he,
      sub: '',
      isTarget: false,
      flipped: false,
      matched: false,
      mismatch: false
    });
  });
  
  CARDS_STATE.match = {
    tiles: shuffle(tiles),
    selected: [],
    moves: 0,
    matches: 0,
    totalPairs: selectedWords.length,
    startTime: Date.now(),
    elapsedMs: 0,
    timerInterval: null,
    combo: 0,
    maxCombo: 0,
    isBusy: false,
    finished: false,
    bestTimeMs: S.matchBestTime || null
  };
  
  CARDS_STATE.match.timerInterval = setInterval(()=>{
    if(CARDS_STATE.match.finished) return;
    CARDS_STATE.match.elapsedMs = Date.now() - CARDS_STATE.match.startTime;
    const el = $('#match-timer');
    if(el) el.textContent = formatMatchTimer(CARDS_STATE.match.elapsedMs);
  }, 100);
}

function formatMatchTimer(ms){
  const totalSec = Math.floor(ms / 1000);
  const tenths = Math.floor((ms % 1000) / 100);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m<10?'0':''}${m}:${s<10?'0':''}${s}.${tenths}`;
}

function handleMatchTileClick(index){
  const m = CARDS_STATE.match;
  if(m.isBusy || m.finished) return;
  const tile = m.tiles[index];
  if(!tile || tile.flipped || tile.matched) return;
  
  tile.flipped = true;
  playCardAudio('flip');
  m.selected.push(index);
  updateMatchGridUI();
  
  if(m.selected.length === 2){
    m.moves++;
    const [idx1, idx2] = m.selected;
    const tile1 = m.tiles[idx1];
    const tile2 = m.tiles[idx2];
    
    if(tile1.pairId === tile2.pairId){
      // Correct Match!
      tile1.matched = true;
      tile2.matched = true;
      m.matches++;
      m.combo++;
      if(m.combo > m.maxCombo) m.maxCombo = m.combo;
      m.selected = [];
      
      if(m.combo > 1){
        playCardAudio('combo');
        toast(`🔥 קומבו x${m.combo}!`);
      } else {
        playCardAudio('match');
      }
      
      if(m.matches === m.totalPairs){
        // Game complete!
        m.finished = true;
        clearInterval(m.timerInterval);
        playCardAudio('victory');
        confetti(35);
        addXp(25);
        if(!m.bestTimeMs || m.elapsedMs < m.bestTimeMs){
          m.bestTimeMs = m.elapsedMs;
          S.matchBestTime = m.bestTimeMs;
          save();
        }
      }
      updateMatchGridUI();
    } else {
      // Mismatch
      m.isBusy = true;
      m.combo = 0;
      playCardAudio('wrong');
      tile1.mismatch = true;
      tile2.mismatch = true;
      updateMatchGridUI();
      
      setTimeout(()=>{
        tile1.flipped = false;
        tile2.flipped = false;
        tile1.mismatch = false;
        tile2.mismatch = false;
        m.selected = [];
        m.isBusy = false;
        updateMatchGridUI();
      }, 750);
    }
  }
}

function updateMatchGridUI(){
  const host = $('#cards-main-view');
  if(!host) return;
  if(CARDS_STATE.mode === 'match'){
    host.innerHTML = matchGameHTML();
  }
}

function pageMemoryCards(subroute){
  if(subroute === 'match') CARDS_STATE.mode = 'match';
  else if(subroute === 'flip') CARDS_STATE.mode = 'flip';
  
  const hash = location.hash;
  if(hash.includes('unit=')){
    const uMatch = hash.match(/unit=([^&]+)/);
    if(uMatch && uMatch[1]) CARDS_STATE.unitFilter = uMatch[1];
  }
  
  if(!CARDS_STATE.deck.length && CARDS_STATE.mode === 'flip'){
    initCards(CARDS_STATE.unitFilter, CARDS_STATE.mode);
  } else if(!CARDS_STATE.match.tiles.length && CARDS_STATE.mode === 'match'){
    initMatchGame(CARDS_STATE.unitFilter);
  }
  
  const isSpanish = CURRENT_UI_LANGUAGE === 'es';
  const isFrench = CURRENT_LEARNER_PROFILE.learningLanguage === 'French';
  const title = isSpanish ? 'Tarjetas de Memoria 3D' : isFrench ? 'כרטיסי זיכרון בצרפתית' : 'כרטיסי זיכרון תלת-ממדיים';
  
  return `<div class="page">
    <div class="cards-container">
      <div class="page-head" style="margin-bottom:0">
        <button class="back" data-go="#/review" aria-label="חזרה">→</button>
        <div>
          <h1 class="page-title">🃏 ${esc(title)}</h1>
          <p class="page-sub" style="margin:0">כרטיסיות מסתובבות ב-3D, טיימר מהיר ומשחק התאמה לכל הרמות</p>
        </div>
      </div>
      
      <!-- Top Toolbar -->
      <div class="cards-toolbar">
        <div class="cards-mode-pills">
          <button class="mode-pill ${CARDS_STATE.mode==='flip'?'active':''}" data-act="card-mode-switch" data-mode="flip">
            🗂️ כרטיסיות 3D
          </button>
          <button class="mode-pill ${CARDS_STATE.mode==='match'?'active':''}" data-act="card-mode-switch" data-mode="match">
            ⏱️ משחק התאמה
          </button>
        </div>
        
        <div class="cards-controls">
          <!-- Unit Filter -->
          <select id="card-unit-select" class="txt sm" data-act="card-unit-filter" style="font-weight:700;border-radius:10px;padding:6px 10px;background:#0c1624">
            <option value="all" ${CARDS_STATE.unitFilter==='all'?'selected':''}>🌟 כל היחידות (${ALL_WORD_LIST.length})</option>
            ${UNITS.map(u=>`<option value="${u.id}" ${CARDS_STATE.unitFilter===u.id?'selected':''}>${u.icon} ${u.he} (${u.words.length})</option>`).join('')}
            <option value="starred" ${CARDS_STATE.unitFilter==='starred'?'selected':''}>⭐ מסומנים (${CARDS_STATE.starredKeys.size})</option>
          </select>
          
          ${CARDS_STATE.mode==='flip'?`
            <button class="btn xs ghost" data-act="card-timer-cycle" title="שנה טיימר">
              ⏱️ <span id="card-timer-label">${CARDS_STATE.timerSeconds?CARDS_STATE.timerSeconds+'s':'חופשי'}</span>
            </button>
            <button class="btn xs ${CARDS_STATE.autoPlay?'primary':'ghost'}" data-act="card-autoplay-toggle" title="ניגון אוטומטי">
              ${CARDS_STATE.autoPlay?'⏸️ עוצר':'▶️ אוטומטי'}
            </button>
            <button class="btn xs ${CARDS_STATE.autoSpeak?'primary':'ghost'}" data-act="card-autospeak-toggle" title="הקראה אוטומטית">
              ${CARDS_STATE.autoSpeak?'🔊':'🔇'}
            </button>
            <button class="btn xs ghost" data-act="card-shuffle" title="ערבב כרטיסים">🔀</button>
          `:`
            <button class="btn xs ghost" data-act="match-restart">🔄 משחק חדש</button>
          `}
        </div>
      </div>
      
      <!-- Main Content Host -->
      <div id="cards-main-view">
        ${CARDS_STATE.mode === 'flip' ? flashcardViewHTML() : matchGameHTML()}
      </div>
    </div>
  </div>`;
}

function flashcardViewHTML(){
  const deck = CARDS_STATE.deck;
  if(!deck.length){
    return `<div class="card center" style="padding:40px 20px">
      <div style="font-size:3rem">⭐</div>
      <h3 style="margin:12px 0 6px">אין כרטיסיות להצגה בסינון זה</h3>
      <p class="muted small">${CARDS_STATE.unitFilter==='starred'?'סמני כוכב על כרטיסיות כדי ליצור רשימת מילים אישית להתמקדות.':'בחרי יחידה אחרת או "כל היחידות".'}</p>
      <button class="btn primary" style="margin-top:14px" data-act="card-unit-filter-reset">הצג את כל היחידות</button>
    </div>`;
  }
  
  if(CARDS_STATE.index >= deck.length){
    const s = CARDS_STATE.stats;
    return `<div class="card center" style="padding:36px 20px">
      <div style="font-size:3.2rem">🏆</div>
      <h2 style="margin:10px 0 6px">סיימת את הסיבוב בהצלחה!</h2>
      <p class="muted small">תרגלת ${s.reviewed} כרטיסיות זיכרון בסיבוב זה.</p>
      
      <div class="grid four" style="margin:20px 0;gap:8px">
        <div class="stat-chip" style="text-align:center"><b>${s.easy}</b><span class="tiny muted" style="color:#86efac">קלות ⭐</span></div>
        <div class="stat-chip" style="text-align:center"><b>${s.good}</b><span class="tiny muted" style="color:#93c5fd">טובות 👍</span></div>
        <div class="stat-chip" style="text-align:center"><b>${s.hard}</b><span class="tiny muted" style="color:#fde047">קשות ⚡</span></div>
        <div class="stat-chip" style="text-align:center"><b>${s.again}</b><span class="tiny muted" style="color:#fca5a5">שוב 🔁</span></div>
      </div>
      
      <div class="row" style="justify-content:center;gap:10px">
        <button class="btn primary" data-act="card-restart">🔁 סיבוב חדש</button>
        <button class="btn ghost" data-act="card-mode-switch" data-mode="match">⏱️ לעבור למשחק זיכרון</button>
        <button class="btn ghost" data-go="#/review">לתפריט החזרות</button>
      </div>
    </div>`;
  }
  
  const card = deck[CARDS_STATE.index];
  const isStarred = CARDS_STATE.starredKeys.has(card.key);
  const cardPos = `${CARDS_STATE.index + 1} / ${deck.length}`;
  const highlightedEx = card.ex ? card.ex.replace(new RegExp(`\\b(${card.en})\\b`, 'gi'), '<mark>$1</mark>') : '';
  const firstLetter = card.en ? card.en[0].toUpperCase() : '';
  const hintText = `${card.en.length} אותיות · מתחילה באות "${firstLetter}"`;
  
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:0 6px;margin-bottom:8px">
      <span class="tiny muted">כרטיס <b>${cardPos}</b></span>
      <div class="row" style="gap:12px">
        <span class="tiny muted" id="cards-session-time">⏱️ ${formatCardsSec(CARDS_STATE.sessionSeconds)}</span>
        ${CARDS_STATE.timerSeconds > 0 ? `<span class="badge" id="card-timer-num" style="background:rgba(255,255,255,.08);font-family:monospace">${Math.ceil(CARDS_STATE.timeLeft)}s</span>` : ''}
      </div>
    </div>
    
    <div class="flashcard-stage">
      <div class="flashcard-3d ${CARDS_STATE.flipped?'flipped':''}" id="active-flashcard" data-act="card-flip">
        
        <!-- FRONT FACE -->
        <div class="flashcard-face flashcard-front">
          <div class="flashcard-timer-bar">
            <div class="flashcard-timer-fill" id="flashcard-timer-fill" style="width:${CARDS_STATE.timerSeconds>0?(CARDS_STATE.timeLeft/CARDS_STATE.timerSeconds)*100:0}%"></div>
          </div>
          
          <div class="flashcard-top-row">
            <span class="flashcard-badge">${card.unitIcon||'📚'} ${card.unitHe||card.unitTitle}</span>
            <div class="row" style="gap:4px">
              <button class="flashcard-star ${isStarred?'active':''}" data-act="card-star" data-key="${escA(card.key)}" title="סמן בכוכב">⭐</button>
            </div>
          </div>
          
          <div class="flashcard-body">
            <div class="row" style="justify-content:center;gap:10px">
              <span class="flashcard-word">${card.en}</span>
              <button class="btn-voice sm" data-act="card-speak" data-word="${escA(card.en)}" title="השמעה" style="margin-top:4px">🔊</button>
            </div>
            ${card.pron ? `<div class="flashcard-pron">[ ${card.pron} ]</div>` : ''}
            ${highlightedEx ? `<div class="flashcard-ex">${highlightedEx}</div>` : ''}
            <div id="card-hint-box" class="flashcard-hint-text ${CARDS_STATE.hintVisible?'':'hide'}">${hintText}</div>
          </div>
          
          <div>
            <div class="row" style="justify-content:space-between;align-items:center">
              <button class="btn xs ghost" data-act="card-hint">💡 רמז</button>
              <div class="flashcard-flip-prompt"><span>👆 לחצי כדי להפוך</span></div>
              <button class="btn xs ghost" data-act="card-flip">🔄 הפוך</button>
            </div>
          </div>
        </div>
        
        <!-- BACK FACE -->
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-top-row">
            <span class="flashcard-badge" style="background:rgba(var(--primary-rgb),.2);color:var(--lime)">תרגום ופירוש</span>
            <button class="flashcard-star ${isStarred?'active':''}" data-act="card-star" data-key="${escA(card.key)}" title="סמן בכוכב">⭐</button>
          </div>
          
          <div class="flashcard-body">
            <div class="row" style="justify-content:center;gap:8px">
              <span class="flashcard-word" style="background:none;-webkit-text-fill-color:initial;color:var(--lime);font-size:2.2rem">${card.he}</span>
              <button class="btn-voice sm" data-act="card-speak" data-word="${escA(card.en)}" title="השמעה">🔊</button>
            </div>
            ${card.pron ? `<div class="flashcard-pron">${card.en} · [ ${card.pron} ]</div>` : `<div class="flashcard-pron">${card.en}</div>`}
            ${card.exHe ? `<div class="flashcard-ex" style="border-color:rgba(var(--primary-rgb),.2)">${card.exHe}</div>` : ''}
          </div>
          
          <div>
            <div class="tiny muted" style="text-align:center;margin-bottom:4px">איך הרגשת עם המילה?</div>
            <div class="flashcard-rating-grid">
              <button class="btn-rate again" data-act="card-rate" data-grade="again">
                <span>🔴 שוב</span>
                <span class="rate-time">חוזר מיד</span>
              </button>
              <button class="btn-rate hard" data-act="card-rate" data-grade="hard">
                <span>🟡 קשה</span>
                <span class="rate-time">יום 1</span>
              </button>
              <button class="btn-rate good" data-act="card-rate" data-grade="good">
                <span>🟢 טוב</span>
                <span class="rate-time">3 ימים</span>
              </button>
              <button class="btn-rate easy" data-act="card-rate" data-grade="easy">
                <span>🌟 קל (+5 XP)</span>
                <span class="rate-time">יציב</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Deck Controls -->
    <div class="row" style="justify-content:space-between;align-items:center;margin-top:14px">
      <button class="btn ghost sm" data-act="card-prev" ${CARDS_STATE.index===0?'disabled':''}>⏮️ הקודם</button>
      <div class="tiny muted" style="direction:ltr;font-family:monospace">
        [Space] flip · [1-4] rate · [S] audio
      </div>
      <button class="btn ghost sm" data-act="card-next">הבא ⏭️</button>
    </div>
  `;
}

function matchGameHTML(){
  const m = CARDS_STATE.match;
  
  if(m.finished){
    const sec = (m.elapsedMs / 1000).toFixed(1);
    const stars = m.moves <= 9 ? '⭐⭐⭐' : m.moves <= 13 ? '⭐⭐' : '⭐';
    return `<div class="card center" style="padding:36px 20px">
      <div style="font-size:3.2rem">🎉</div>
      <h2 style="margin:10px 0 4px">ניצחון מעולה! כל הכבוד!</h2>
      <div style="font-size:1.8rem;margin:6px 0">${stars}</div>
      <p class="muted small">התאמת את כל הזוגות בזמן שיא!</p>
      
      <div class="grid three" style="margin:20px 0;gap:10px">
        <div class="stat-chip" style="text-align:center"><div class="tiny muted">זמן</div><b>${sec}s</b></div>
        <div class="stat-chip" style="text-align:center"><div class="tiny muted">מהלכים</div><b>${m.moves}</b></div>
        <div class="stat-chip" style="text-align:center"><div class="tiny muted">קומבו שיא</div><b>x${m.maxCombo}</b></div>
      </div>
      
      <div class="row" style="justify-content:center;gap:10px">
        <button class="btn primary" data-act="match-restart">🔄 שחק שוב עם מילים חדשות</button>
        <button class="btn ghost" data-act="card-mode-switch" data-mode="flip">🗂️ מעבר לכרטיסיות</button>
      </div>
    </div>`;
  }
  
  return `
    <div class="match-header" style="margin-bottom:14px">
      <div class="match-stat-item">
        <span>⏱️</span>
        <span id="match-timer" style="font-family:monospace;font-size:1.1rem;color:var(--lime)">${formatMatchTimer(m.elapsedMs)}</span>
      </div>
      <div class="match-stat-item">
        <span>🎯 זוגות:</span>
        <b>${m.matches} / ${m.totalPairs}</b>
      </div>
      <div class="match-stat-item">
        <span>👟 מהלכים:</span>
        <b>${m.moves}</b>
      </div>
      ${m.combo > 1 ? `<div class="tag lime">🔥 COMBO x${m.combo}!</div>` : ''}
    </div>
    
    <div class="match-grid">
      ${m.tiles.map((tile, idx) => `
        <div class="match-tile ${tile.flipped?'flipped':''} ${tile.matched?'matched':''} ${tile.mismatch?'mismatch':''}" data-act="match-tile-click" data-idx="${idx}">
          <div class="match-tile-inner">
            <div class="match-tile-front">🃏</div>
            <div class="match-tile-back" style="${tile.isTarget?'color:var(--lime)':''}">
              <div>
                <div style="font-size:.95rem;line-height:1.2">${tile.text}</div>
                ${tile.sub ? `<div class="tiny muted" style="margin-top:3px">${tile.sub}</div>` : ''}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCardsPage(){
  const host = $('#cards-main-view');
  if(host){
    host.innerHTML = CARDS_STATE.mode === 'flip' ? flashcardViewHTML() : matchGameHTML();
  } else {
    render();
  }
}

function mountCards(){
  startCardsSessionTimer();
  if(CARDS_STATE.mode === 'flip'){
    restartCardTimer();
  }
  if(!window.__CARDS_KEY_BOUND){
    window.__CARDS_KEY_BOUND = true;
    document.addEventListener('keydown', handleCardsKeydown);
  }
}

function handleCardsKeydown(e){
  if(location.hash !== '#/cards' && !location.hash.startsWith('#/cards/')) return;
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
  
  if(CARDS_STATE.mode === 'flip'){
    if(e.code === 'Space' || e.key === 'Enter'){
      e.preventDefault();
      flipCurrentCard();
    } else if(e.key === 'ArrowRight' || e.key === 'ArrowDown'){
      e.preventDefault();
      navigateCard(1);
    } else if(e.key === 'ArrowLeft' || e.key === 'ArrowUp'){
      e.preventDefault();
      navigateCard(-1);
    } else if(e.key === '1' && CARDS_STATE.flipped){
      e.preventDefault(); rateCurrentCard('again');
    } else if(e.key === '2' && CARDS_STATE.flipped){
      e.preventDefault(); rateCurrentCard('hard');
    } else if(e.key === '3' && CARDS_STATE.flipped){
      e.preventDefault(); rateCurrentCard('good');
    } else if(e.key === '4' && CARDS_STATE.flipped){
      e.preventDefault(); rateCurrentCard('easy');
    } else if(e.key === 's' || e.key === 'S' || e.key === 'ד'){
      e.preventDefault();
      const card = CARDS_STATE.deck[CARDS_STATE.index];
      if(card) speak(card.en);
    } else if(e.key === 'h' || e.key === 'H' || e.key === 'י'){
      e.preventDefault();
      toggleCardHint();
    }
  }
}

/* ================= speaking lab ================= */
const SPEAK_SENTENCES=[
  {en:'I am a dancer and I love music.',he:'אני רקדנית ואני אוהבת מוזיקה.'},
  {en:'Dana is my best friend.',he:'דנה היא החברה הכי טובה שלי.'},
  {en:'Is she your friend? Yes, she is.',he:'היא חברה שלך? כן, היא.'},
  {en:'I have a pink dress and new shoes.',he:'יש לי שמלה ורודה ונעליים חדשות.'},
  {en:'She has a camera and a phone.',he:'יש לה מצלמה וטלפון.'},
  {en:'We can dance together on the stage.',he:'אנחנו יכולות לרקוד ביחד על הבמה.'},
  {en:'I love dancing with my friends.',he:'אני אוהבת לרקוד עם החברות שלי.'},
  {en:'She practices every day after school.',he:'היא מתאמנת כל יום אחרי בית ספר.'},
  {en:'Where is the dance studio?',he:'איפה סטודיו הריקוד?'},
  {en:'The party is on Friday. Are you ready?',he:'המסיבה ביום שישי. את מוכנה?'}
];
const SPEAK_SENTENCES_BARRY = [
  {en:'I scored the winning goal in the final minute.',he:'הבקעתי את שער הניצחון בדקה האחרונה.'},
  {en:'Our team played in a huge football stadium.',he:'הקבוצה שלנו שיחקה באצטדיון כדורגל ענק.'},
  {en:'The cheetah is faster than any other land animal.',he:'הברדלס מהיר יותר מכל חיית יבשה אחרת.'},
  {en:'Peregrine falcons dive at incredible speeds.',he:'בזים נודדים צוללים במהירויות מדהימות.'},
  {en:'We are going to explore the active volcano next week.',he:'אנחנו הולכים לחקור את הר הגעש הפעיל בשבוע הבא.'},
  {en:'Scientists discovered ice on distant planets.',he:'מדענים גילו קרח בכוכבי לכת רחוקים.'},
  {en:'Gravity on the Moon is much weaker than on Earth.',he:'כוח הכבידה על הירח חלש בהרבה מאשר בכדור הארץ.'},
  {en:'Can you pass the ball to your teammate quickly?',he:'אתה יכול למסור את הכדור לחבר שלך לקבוצה במהירות?'}
];
const SPEAK_SENTENCES_MAAYAN = [
  {en:'I am a Pokemon trainer and Pikachu is my best friend.',he:'אני מאמן פוקימונים ופיקאצ\'ו הוא החבר הכי טוב שלי.'},
  {en:'Pikachu can use a powerful electric attack.',he:'פיקאצ\'ו יכול להשתמש במתקפה חשמלית חזקה.'},
  {en:'I have five Poke Balls in my backpack.',he:'יש לי חמישה פוקדורים בתרמיל שלי.'},
  {en:'Can Charizard fly over the mountains?',he:'האם צ\'אריזרד יכול לעוף מעל ההרים?'},
  {en:'Trainers practice battle moves every day.',he:'מאמנים מתרגלים מהלכי קרב בכל יום.'},
  {en:'We won the gym badge after a hard battle.',he:'זכינו בתג המכון אחרי קרב קשה.'}
];
const SPEAK_SENTENCES_HADAR = [
  {en:'The creator uploaded a viral tech video yesterday.',he:'היוצר העלה סרטון טכנולוגיה ויראלי אתמול.'},
  {en:'The algorithm recommended this clip to millions of viewers.',he:'האלגוריתם המליץ על הסרטון הזה למיליוני צופים.'},
  {en:'The Mariana Trench is deeper than Mount Everest is tall.',he:'שקע מריאנה עמוק יותר מגובהו של הר האוורסט.'},
  {en:'Pistol shrimps create bubbles as hot as the sun.',he:'חסילוני אקדח מייצרים בועות חמות כמו השמש.'},
  {en:'Engineers are going to design smart future cities.',he:'מהנדסים הולכים לתכנן ערי עתיד חכמות.'},
  {en:'The human brain consolidates memories during deep sleep.',he:'המוח האנושי מגבש זיכרונות במהלך שינה עמוקה.'}
];
function getProfileSpeakSentences(){
  const u = S.name || '';
  const interests = CURRENT_LEARNER_PROFILE.interests || [];
  if(u==='בארי' || interests.includes('כדורגל')) return SPEAK_SENTENCES_BARRY;
  if(u==='מעיין' || interests.includes('פוקימון')) return SPEAK_SENTENCES_MAAYAN;
  if(u==='הדר' || interests.includes('טרנדים')) return SPEAK_SENTENCES_HADAR;
  const unitSentences=UNITS.flatMap(u=>(u.words||[]).filter(w=>w.ex&&w.exHe).map(w=>({en:w.ex,he:w.exHe})));
  const adaptiveWords=(ensureAdaptiveState().lastBooster?.words||[]).filter(w=>w.ex&&w.exHe).map(w=>({en:w.ex,he:w.exHe}));
  const combined=[...adaptiveWords,...unitSentences];
  if(combined.length>=6 && (ACTIVE_CURRICULUM || CURRENT_UI_LANGUAGE!=='he' || CURRENT_LEARNER_PROFILE.learningLanguage!=='English')){
    return combined.slice(0,10);
  }
  return SPEAK_SENTENCES;
}











let SPEAK={idx:0,results:[],started:false,last:null};
function pageSpeak(){
  const sentences=getProfileSpeakSentences();
  if(!SPEAK.started){
    return `<div class="page"><div class="page-head"><button class="back" data-go="#/review">→</button><div><h1 class="page-title">🎤 תרגול דיבור</h1></div></div>
      <div class="card center"><div style="font-size:2.6rem">🎤</div><h2 style="margin:6px 0">תרגול הגייה שוטפת</h2>
      <p class="muted small">${sentences.length} משפטים מתוך המסלול האישי שלך. הקשיבי, אמרי בקול, וקבלי ציון על מה שנקלט. הדפדפן צריך לאשר גישה למיקרופון.</p>
      <div class="fact" style="text-align:start;margin-top:12px">טיפ: לאט וברור מנצח מהר ומבולגן.</div>
      <button class="btn primary" style="margin-top:14px" data-act="speak-start">▶ להתחיל</button></div></div>`;
  }
  if(SPEAK.idx>=sentences.length){
    const avg=SPEAK.results.length?Math.round(SPEAK.results.reduce((a,b)=>a+b,0)/SPEAK.results.length):0;
    return `<div class="page"><div class="chat-summary"><div class="card result-hero">
      <div style="font-size:2.2rem">🎤</div><div class="result-score">${avg}%</div><h2>${avg>=80?'הגייה חזקה!':avg>=55?'יש בסיס טוב':'כל חזרה תשפר'}</h2>
      <p class="muted small">הציון מבוסס על הטקסט שהדפדפן זיהה. מיקרופון טוב ועוד חזרות יעשו את ההבדל.</p>
      <div class="row" style="justify-content:center;margin-top:12px"><button class="btn primary" data-act="speak-start">🔁 עוד סיבוב</button><button class="btn ghost" data-go="#/review">לתפריט</button></div>
    </div></div></div>`;
  }
  const s=sentences[SPEAK.idx];
  return `<div class="page"><div class="chat-summary">
    <div class="page-head"><button class="back" data-go="#/review">→</button><div><h1 class="page-title">🎤 תרגול דיבור</h1><div class="page-sub" style="margin:0">${SPEAK.idx+1} מתוך ${sentences.length}</div></div></div>
    <div class="ex-progress"><i style="width:${Math.round(SPEAK.idx/sentences.length*100)}%"></i></div>
    <div class="card">
      <div class="ex-sentence" style="font-size:1.1rem">${esc(s.en)}</div>
      <div class="small muted">${s.he}</div>
      <div class="row" style="margin-top:12px"><button class="btn ghost" data-say="${escA(s.en)}">🔊 שמעי</button><button class="btn primary" data-act="speak-mic">🎤 דברי</button><button class="btn ghost" data-act="speak-next">דלג ←</button></div>
      <div id="speak-result">${SPEAK.last?speakResultHTML(SPEAK.last):''}</div>
    </div>
  </div></div>`;
}
function similarity(a,b){
  const A=normEN(a).split(' ').filter(Boolean), B=normEN(b).split(' ').filter(Boolean);
  if(!B.length) return 0;
  let hit=0; const used=new Set();
  B.forEach(w=>{ const i=A.findIndex((x,j)=>!used.has(j)&&(x===w||lev(x,w)<=1)); if(i>=0){hit++;used.add(i);} });
  return Math.round(hit/B.length*100);
}
function speakResultHTML(r){
  return `<div class="fb ${r.score>=70?'ok':'info'}" style="margin-top:12px">
    <h4>${r.score>=85?'🎯 נשמע מעולה!':r.score>=65?'👏 קרוב מאוד!':'💪 עוד חזרה אחת'}</h4>
    <div class="small">מה שזוהה: <span class="en">${esc(r.heard||'—')}</span></div>
    <div class="bar" style="margin-top:8px"><i style="width:${r.score}%"></i></div>
    <div class="row" style="margin-top:10px"><button class="btn sm primary" data-act="speak-next">הבא ←</button><button class="btn sm ghost" data-act="speak-mic">נסי שוב</button></div>
  </div>`;
}
function startSpeak(){
  SPEAK={idx:0,results:[],started:true,last:null}; render();
}
function speakMic(){
  const box=$('#speak-result');
  if(RECOGNIZER){
    RECOGNIZER.stop();
    RECOGNIZER=null;
    if(box) box.innerHTML='<div class="fb info" style="margin-top:12px">ההקלטה הופסקה.</div>';
    return;
  }
  const sentences=getProfileSpeakSentences();
  const s=sentences[SPEAK.idx]||SPEAK_SENTENCES[0];
  if(box) box.innerHTML='<div class="fb info" style="margin-top:12px">🎧 מקשיבה… דברי עכשיו</div>';
  RECOGNIZER=listenOnce(learningSpeechLocale(),alts=>{
    const heard=alts[0]||'';
    const score=similarity(heard,s.en);
    SPEAK.last={heard,score}; SPEAK.results.push(score);
    S.stats.speak=(S.stats.speak||0)+1; S.stats.speakScore=(S.stats.speakScore||0)+score;
    markActive(); addXP(score>=70?6:2); checkBadges(); save();
    if(box) box.innerHTML=speakResultHTML(SPEAK.last);
    if(score>=70) beep(true);
  },err=>{
    const msg=microphoneErrorText(err);
    if(box) box.innerHTML=`<div class="fb no" style="margin-top:12px">${esc(msg)}<div class="row" style="margin-top:8px"><button class="btn sm ghost" data-act="speak-self">אמרתי את זה נכון</button><button class="btn sm ghost" data-act="speak-next">המשיכי ←</button></div></div>`;
  },()=>{ RECOGNIZER=null; });
}
function nextSpeak(){
  SPEAK.idx++; SPEAK.last=null; save(); render();
}

/* ================= stats ================= */
function pageStats(){
  const li=levelInfo(), acc=accuracy(), ds=wordStats(), readiness=overallReadiness();
  const bySkill=S.stats.bySkill||{};
  const pct=(o)=>o&&o.a?Math.round(o.c/o.a*100):0;
  const speakAvg=S.stats.speak?Math.round((S.stats.speakScore||0)/S.stats.speak):0;
  const chatScore=Math.min(100,(S.stats.chats||0)*10);
  const skills=[
    ['📚 אוצר מילים',ds.total?Math.round(ds.mastered/ds.total*100):0,`${ds.mastered} מילים יציבות`],
    ['📘 דקדוק',ruleStrength(),`${Object.keys(S.rules).length} כללים נפגשו`],
    ['📖 הבנת הנקרא',pct(bySkill.reading),`${bySkill.reading?bySkill.reading.a:0} תרגילי קריאה`],
    ['👂 שמיעה',pct(bySkill.listening),`${bySkill.listening?bySkill.listening.a:0} תרגילי שמיעה`],
    ['🎤 דיבור',speakAvg,`${S.stats.speak||0} אימוני דיבור`],
    ['💬 שיחה',chatScore,`${S.stats.chats||0} שיחות`]
  ];
  const week=[]; for(let i=6;i>=0;i--){ const t=Date.now()-i*DAY, k=dateKey(t); week.push({k,label:new Date(t).toLocaleDateString('he-IL',{weekday:'short'}),xp:S.activeDays[k]||0,today:i===0}); }
  const max=Math.max(10,...week.map(w=>w.xp));
  const adaptiveSum=learnerAdaptiveSummary();
  const recentMistakes=(S.adaptive?.mistakeLog||[]).slice(-5).reverse();
  return `<div class="page">
    <div class="page-head"><h1 class="page-title">📈 ההתקדמות שלך</h1><p class="page-sub">לא רק ציונים – תמונת מצב של איך את לומדת, זוכרת ומדברת.</p></div>
    ${adaptiveCoachRadarHTML()}
    ${recentMistakes.length?`<div class="card section">
      <div class="section-head"><h2>🔍 יומן למידה אדפטיבי – מה המאמנת זיהתה</h2><span class="tag purple">${(S.adaptive?.customExercises||[]).length} תרגילים אישיים נבנו</span></div>
      <p class="small muted">הבינה המלאכותית שומרת דפוסי טעויות מהתרגולים ומהשיחות ומשלבת אותם אוטומטית באימונים הבאים שלך.</p>
      <div class="col" style="margin-top:8px">
        ${recentMistakes.map(m=>`<div class="card flat" style="padding:10px 12px">
          <div class="row" style="justify-content:space-between"><span class="tag ${m.skill==='chat'?'cyan':'gold'}">${m.skill==='chat'?'💬 תיקון משיחה':m.ruleTitle||m.skill||'תרגול'}</span><span class="tiny muted">${m.at?new Date(m.at).toLocaleDateString('he-IL'):''}</span></div>
          <div class="small" style="margin-top:5px">${esc(m.q||'')}</div>
          ${m.expected?`<div class="tiny" style="margin-top:3px;color:var(--lime)">✓ צורה נכונה: <b class="en">${esc(m.expected)}</b></div>`:''}
          ${m.why?`<div class="tiny muted" style="margin-top:2px">${esc(m.why)}</div>`:''}
        </div>`).join('')}
      </div>
    </div>`:''}
    <div class="grid two">
      <div class="card">
        <div class="row"><span class="tag lime">רמה ${li.lvl}</span><span class="tag">${S.xp} XP</span></div>
        <div class="stat-big" style="margin-top:10px">${readiness}% <small>מוכנות כללית</small></div>
        <div class="bar" style="margin-top:10px"><i style="width:${readiness}%"></i></div>
        <div class="small muted" style="margin-top:6px">${readiness<35?'בתחילת הדרך – כל יום מוסיף לבסיס 🌱':readiness<60?'מתקדם יפה – השגרה עובדת 🚀':readiness<80?'כמעט שם – עוד קצת חזרות 💪':'מוכנה – את מדברת ובוטחת 🏆'}</div>
        <div class="divider"></div>
        <div class="small muted">עוד ${250-li.into} XP לרמה ${li.lvl+1}</div>
        <div class="bar" style="margin-top:5px"><i style="width:${li.pct}%"></i></div>
      </div>
      <div class="card">
        <div class="section-head"><h2>🔥 השבוע שלך</h2><span class="tag gold">${S.streak||0} ימים ברצף</span></div>
        <div class="week-chart">${week.map(w=>`<div class="week-bar ${w.today?'today':''}"><b>${w.xp||''}</b><i style="height:${Math.max(3,Math.round(w.xp/max*78))}%"></i><span>${w.label}</span></div>`).join('')}</div>
        <div class="small muted" style="margin-top:8px">${acc}% דיוק · ${S.stats.answers||0} תשובות · ${S.stats.bestStreak||0} שיא רצף נכון</div>
      </div>
    </div>
    <div class="card section">
      <div class="section-head"><h2>📊 פרופיל כישורים</h2></div>
      ${skills.map(([n,p,s])=>`<div class="skill-row"><div class="skill-top"><span>${n}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div><div class="tiny muted">${s}</div></div>`).join('')}
    </div>
    <div class="card section">
      <div class="section-head"><h2>🗺️ יחידות</h2><span class="more" data-go="#/learn">למסלול ←</span></div>
      ${UNITS.map(u=>`<div class="up-row" style="cursor:pointer" data-go="#/unit/${u.id}/practice"><span>${u.icon}</span><span>${u.he}</span><span class="tiny muted">${u.title}</span><span class="when">${unitPct(u)}%</span></div>`).join('')}
    </div>
    <div class="section">
      <div class="section-head"><h2>🏅 הישגים</h2><span class="tiny muted">${ACHIEVEMENTS.filter(a=>S.badges[a.id]).length}/${ACHIEVEMENTS.length}</span></div>
      <div class="badge-grid">${ACHIEVEMENTS.map(a=>`<div class="badge ${S.badges[a.id]?'on':''}" title="${a.desc}"><span class="ic">${a.icon}</span><b>${a.name}</b><span>${a.desc}</span></div>`).join('')}</div>
    </div>
    <div class="card section">
      <div class="section-head"><h2>📝 מבחן מסכם</h2><span class="tag ${S.exam.best>=85?'lime':'gold'}">${S.exam.best?S.exam.best+'/100':'טרם בוצע'}</span></div>
      <p class="small muted">${S.exam.last?`בוצע לאחרונה ב-${new Date(S.exam.last.date).toLocaleDateString('he-IL')} · ${S.exam.last.correct}/${S.exam.last.total} נכונות`:'20 שאלות מכל המסלול. בסוף תקבלי ציון ופירוט.'}</p>
      <button class="btn primary" style="margin-top:10px" data-go="#/exam">${S.exam.last?'נסי שוב':'התחילי מבחן'}</button>
    </div>
    <div class="card section">
      <div class="section-head"><h2>💾 הנתונים והגיבוי</h2></div>
      <p class="small muted">ההתקדמות נשמרת אוטומטית בדפדפן הזה. ליתר ביטחון אפשר לייצא גיבוי או ליצור קישור המשך למכשיר אחר.</p>
      <div class="row" style="margin-top:10px">
        <button class="btn sm ghost" data-act="export">⬇️ ייצוא גיבוי</button>
        <button class="btn sm ghost" data-act="backup-link">🔗 קישור המשך</button>
        <button class="btn sm ghost" data-act="import-file">⬆️ ייבוא</button>
        <button class="btn sm ghost" data-act="settings">⚙️ הגדרות</button>
      </div>
      <div class="tiny muted" style="margin-top:8px">המפתח של Groq לא נכלל בגיבוי או בקישור.</div>
    </div>
  </div>`;
}

let ADMIN_TAB='progress';
let ADMIN_FILTER='all';
let ADMIN_SORT='progress';
function formatRelativeTimeHe(iso){
  if(!iso) return 'טרם התחיל/ה';
  const diffMs=Date.now()-Date.parse(iso);
  if(!Number.isFinite(diffMs)||diffMs<0) return 'עכשיו';
  const mins=Math.floor(diffMs/60000);
  if(mins<2) return 'ממש עכשיו';
  if(mins<60) return `לפני ${mins} דק׳`;
  const hrs=Math.floor(mins/60);
  if(hrs<24) return `לפני ${hrs} שע׳`;
  const days=Math.floor(hrs/24);
  if(days===1) return 'אתמול';
  if(days<14) return `לפני ${days} ימים`;
  return new Date(iso).toLocaleDateString('he-IL');
}
function formatAdaptiveItem(item, kind){
  if(typeof item==='string') return esc(item);
  if(!item||typeof item!=='object') return '';
  if(kind==='word'){
    return `<span class="en">${esc(item.en||'')}</span>${item.he?` (${esc(item.he)})`:''}`;
  }
  const title=item.title||item.id||'';
  const acc=item.accuracy!=null?` (${item.accuracy}%)`:'';
  return `${esc(title)}${acc}`;
}
function adminStudentStatus(student){
  if(student.readyForContinuation) return {cls:'lime',label:'🏆 מוכן להמשך'};
  if(student.activeToday) return {cls:'cyan',label:'🟢 פעיל היום'};
  if(Number(student.completedExercises)>0||Number(student.xp)>0) return {cls:'purple',label:'📘 בתהליך'};
  if(student.activated) return {cls:'gold',label:'⏳ טרם תרגל'};
  return {cls:'',label:'🔒 לא הופעל'};
}
function adminStudentCard(student){
  const completed=Number(student.completedExercises)||0;
  const attempted=Number(student.attemptedExercises)||0;
  const total=Number(student.totalExercises)||attempted;
  const completion=student.overallPercent!=null
    ? Math.max(0,Math.min(100,Number(student.overallPercent)||0))
    : (total?Math.max(0,Math.min(100,Math.round(completed/total*100))):0);
  const accuracy=student.accuracy==null?'—':`${Math.max(0,Math.min(100,Number(student.accuracy)||0))}%`;
  const skills=(student.skills||[]).filter(skill=>skill.attempts>0);
  const skillLabels={vocab:'אוצר מילים',grammar:'דקדוק',listening:'שמיעה',reading:'הבנת הנקרא'};
  const units=student.unitProgress||[];
  const completedUnits=Number(student.completedUnits)||0;
  const totalUnits=Number(student.totalUnits)||units.length||4;
  const moduleStage=Math.max(1,Number(student.moduleStage)||1);
  const status=adminStudentStatus(student);
  const levelLabel=student.targetLevel&&student.targetLevel!==student.level
    ? `${student.level} → ${student.targetLevel}`
    : `${student.level}`;
  const interests=Array.isArray(student.interests)?student.interests:[];
  const weakRules=(student.adaptiveProfile?.weakRules||[]).map(r=>formatAdaptiveItem(r,'rule')).filter(Boolean);
  const weakWords=(student.adaptiveProfile?.weakWords||[]).map(w=>formatAdaptiveItem(w,'word')).filter(Boolean);
  const strongRules=(student.adaptiveProfile?.strongRules||[]).map(r=>formatAdaptiveItem(r,'rule')).filter(Boolean);
  const discInterests=(student.adaptiveProfile?.discoveredInterests||[]).map(esc).filter(Boolean);

  return `<article class="card flat admin-student-card" id="admin-card-${escA(student.key)}" data-admin-student="${escA(student.key)}">
    <div class="admin-student-head">
      <div>
        <div class="row" style="gap:7px;align-items:center">
          <h2>${esc(student.username)}</h2>
          <span class="tag ${status.cls}">${status.label}</span>
        </div>
        <div class="row" style="margin-top:5px;gap:5px">
          <span class="tag">${esc(levelLabel)}</span>
          <span class="tag purple">שלב ${moduleStage}</span>
          ${student.completedModulesCount?`<span class="tag lime">✓ ${student.completedModulesCount} מודולים הושלמו</span>`:''}
        </div>
      </div>
      <div class="admin-pct-badge" title="השלמת המודול הנוכחי">
        <b>${completion}%</b>
        <span>${completedUnits}/${totalUnits} יח׳</span>
      </div>
    </div>

    <div class="tiny muted" style="margin-top:7px">
      ${esc(student.learningLanguage||'English')} · פעילות אחרונה: <b>${esc(formatRelativeTimeHe(student.lastActive))}</b>
      ${student.activeToday?` · היום: <b>${Number(student.dailyXp)||0} XP</b> (${Number(student.dailyAnswers)||0} תשובות, ${Number(student.dailyChats)||0} שיחות)`:''}
    </div>

    <div class="admin-progress-block">
      <div class="row">
        <span class="small">התקדמות במודול (${esc(student.curriculum?.title||`מודול שלב ${moduleStage}`)})</span>
        <b class="small spacer" style="text-align:end">${completed}${total?` / ${total}`:''} תרגילים (${completion}%)</b>
      </div>
      <div class="admin-progress-track" role="img" aria-label="${completion}% מהתרגילים הושלמו"><i style="width:${completion}%"></i></div>
    </div>

    <div class="admin-kpis">
      <div class="admin-kpi"><b>${Number(student.xp)||0}</b><span>XP</span></div>
      <div class="admin-kpi"><b>${Number(student.streak)||0} 🔥</b><span>ימי רצף</span></div>
      <div class="admin-kpi"><b>${accuracy}</b><span>דיוק</span></div>
      <div class="admin-kpi"><b>${Number(student.masteredWords)||0}</b><span>מילים יציבות</span></div>
    </div>

    <div class="row tiny muted" style="margin-top:8px;gap:10px">
      <span>💬 שיחות AI: <b>${Number(student.chatSessions)||0}</b></span>
      <span>📝 מבחן מסכם: <b>${student.examBest?`${student.examBest}/100`:'טרם בוצע'}</b></span>
      <span>✏️ תשובות: <b>${Number(student.totalAnswers)||0}</b></span>
    </div>

    ${units.length?`<div class="admin-unit-bars" aria-label="התקדמות ביחידות">${units.map(unit=>{
      const percent=Math.max(0,Math.min(100,Number(unit.percent)||0));
      return `<div class="admin-mini-bar">
        <span title="${esc(unit.title)}">${esc(unit.title)}</span>
        <div class="admin-progress-track"><i style="width:${percent}%"></i></div>
        <b>${unit.total?`${unit.completed}/${unit.total}`:`${percent}%`}</b>
      </div>`;
    }).join('')}</div>`:''}

    ${skills.length?`<div class="admin-skill-bars">${skills.map(skill=>{
      const percent=skill.accuracy==null?0:Math.max(0,Math.min(100,Number(skill.accuracy)||0));
      return `<div class="admin-mini-bar"><span>${skillLabels[skill.key]||esc(skill.key)}</span><div class="admin-progress-track"><i style="width:${percent}%"></i></div><b>${skill.accuracy==null?'—':`${percent}%`}</b></div>`;
    }).join('')}</div>`:''}

    ${(weakRules.length||weakWords.length||strongRules.length||discInterests.length)?`
    <div class="card flat" style="margin-top:9px;padding:10px;border-color:rgba(192,132,252,.35);background:rgba(192,132,252,.06)">
      <div class="tiny" style="font-weight:800;color:var(--purple)">🧠 תובנות אדפטיביות:</div>
      ${weakRules.length?`<div class="tiny muted" style="margin-top:4px">לחיזוק: <b>${weakRules.join(' · ')}</b></div>`:''}
      ${weakWords.length?`<div class="tiny muted" style="margin-top:2px">מילים לחיזוק: <b>${weakWords.join(', ')}</b></div>`:''}
      ${strongRules.length?`<div class="tiny muted" style="margin-top:2px">שליטה חזקה: <b>${strongRules.join(' · ')}</b></div>`:''}
      ${discInterests.length?`<div class="tiny muted" style="margin-top:2px">תחומי עניין שהתגלו: <b>${discInterests.join(' · ')}</b></div>`:''}
    </div>`:''}

    ${interests.length?`<div class="tiny muted" style="margin-top:7px">תחומי עניין: ${interests.map(esc).join(' · ')}</div>`:''}

    ${student.pendingNextCurriculum?`<div class="card flat" style="margin-top:8px;padding:10px;border-color:rgba(255,201,77,.4);background:rgba(255,201,77,.07)">
      <div class="row" style="justify-content:space-between;align-items:center">
        <div>
          <span class="tag gold">⏳ מודול הבא מוכן (${esc(student.pendingNextCurriculum.level)})</span>
          <div class="small" style="margin-top:4px"><b>${esc(student.pendingNextCurriculum.title)}</b></div>
          <div class="tiny muted">ייפתח אוטומטית בציון 80/100 במבחן המסכם או באישור מיידי שלך.</div>
        </div>
        <button class="btn xs primary" data-act="admin-approve-next-curriculum" data-key="${escA(student.key)}">✅ אשר ופתח</button>
      </div>
    </div>`:''}

    <div class="admin-student-actions row" style="flex-wrap:wrap;gap:6px">
      <button class="btn xs primary" data-act="admin-impersonate" data-key="${escA(student.key)}">${student.activated?'כניסה לחשבון':'בדיקת החשבון'}</button>
      ${moduleStage<3?`<button class="btn xs ghost" data-act="admin-advance-module" data-key="${escA(student.key)}" title="פתח את מודול ההמשך המובנה לשלב ${moduleStage+1}">🚀 פתח שלב ${moduleStage+1}</button>`:''}
      <button class="btn xs ghost" data-act="admin-edit-curriculum" data-key="${escA(student.key)}" data-mode="replace">עריכת מסלול</button>
      <button class="btn xs ghost" data-act="admin-edit-curriculum" data-key="${escA(student.key)}" data-mode="next">✨ הכנת מודול AI הבא</button>
      <button class="btn xs ghost" data-act="admin-view-reports" data-key="${escA(student.key)}">📊 דוחות (${student.completedModulesCount||0})</button>
      <button class="btn xs ghost" data-act="admin-reset-code" data-key="${escA(student.key)}">${student.activated?'קוד איפוס':'קוד הפעלה'}</button>
    </div>
    ${ADMIN_RESET_CODES[student.key]?`<div class="tiny" style="margin-top:7px;direction:ltr"><code>${esc(ADMIN_RESET_CODES[student.key])}</code> <button class="btn xs ghost" data-copy="${escA(ADMIN_RESET_CODES[student.key])}">העתקה</button></div>`:''}
  </article>`;
}
function renderAdminProgressTable(students){
  if(!students.length) return '<p class="small muted">אין תלמידים תואמים לסינון הנבחר.</p>';
  return `<div class="admin-table-wrap">
    <table class="admin-progress-table">
      <thead>
        <tr>
          <th>תלמיד/ה</th>
          <th>רמה / שלב</th>
          <th>התקדמות במודול</th>
          <th>יחידות</th>
          <th>דיוק</th>
          <th>רצף / XP</th>
          <th>פעילות אחרונה</th>
          <th>סטטוס</th>
        </tr>
      </thead>
      <tbody>
        ${students.map(s=>{
          const pct=Math.max(0,Math.min(100,Number(s.overallPercent)||0));
          const acc=s.accuracy==null?'—':`${s.accuracy}%`;
          const st=adminStudentStatus(s);
          return `<tr class="admin-table-row" data-act="admin-scroll-student" data-key="${escA(s.key)}">
            <td><b>${esc(s.username)}</b></td>
            <td><span class="tag">${esc(s.level)}</span> <span class="tiny muted">שלב ${Number(s.moduleStage)||1}</span></td>
            <td>
              <div class="admin-table-bar">
                <div class="admin-progress-track"><i style="width:${pct}%"></i></div>
                <b>${pct}%</b>
              </div>
            </td>
            <td><b>${Number(s.completedUnits)||0}</b>/${Number(s.totalUnits)||4}</td>
            <td>${acc}</td>
            <td><b>${Number(s.xp)||0}</b> XP · ${Number(s.streak)||0}🔥</td>
            <td class="tiny muted">${esc(formatRelativeTimeHe(s.lastActive))}</td>
            <td><span class="tag ${st.cls}">${st.label}</span></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}
function renderAdminAiModels(){
  if(ADMIN_AI_BUSY&&!ADMIN_AI_MODELS) return '<p class="small muted">טוען הגדרות AI…</p>';
  if(!ADMIN_AI_MODELS) return `<p class="small muted">${esc(ADMIN_AI_ERROR||'הגדרות המודלים עדיין לא נטענו.')}</p>`;
  const providers=ADMIN_AI_MODELS.providers||[];
  const activeOptions=providers.map(provider=>`<option value="${escA(provider.id)}" ${ADMIN_AI_MODELS.activeProviderId===provider.id?'selected':''}>${esc(provider.name)} · ${esc(provider.model)}</option>`).join('');
  const rows=providers.map(provider=>`<article class="card section" data-admin-model-provider="${escA(provider.id)}">
    <div class="grid two">
      <div class="field"><label>שם לתצוגה</label><input data-model-name value="${escA(provider.name)}" maxlength="80"></div>
      <div class="field"><label>סוג ספק</label><select data-model-kind><option value="groq" ${provider.kind==='groq'?'selected':''}>Groq</option><option value="openai-compatible" ${provider.kind==='openai-compatible'?'selected':''}>OpenAI-compatible</option></select></div>
    </div>
    <div class="field"><label>כתובת API</label><input data-model-url class="ltr" type="url" value="${escA(provider.apiUrl)}" placeholder="https://api.groq.com/openai/v1/chat/completions"><div class="help">אפשר להזין כתובת בסיסית או כתובת מלאה של chat/completions.</div></div>
    <div class="grid two">
      <div class="field"><label>מזהה מודל</label><input data-model-name-id class="ltr" value="${escA(provider.model)}" maxlength="160"></div>
      <div class="field"><label>מפתח API ${provider.hasApiKey?'(מוגדר; השאר ריק כדי לשמור אותו)':''}</label><input data-model-key class="ltr" type="password" autocomplete="new-password" spellcheck="false" placeholder="${provider.hasApiKey?'•••••••• (מוגדר)':'הדבק מפתח API'}"></div>
    </div>
    <div class="row" style="margin-top:10px">
      <button class="btn xs ghost" data-act="admin-test-ai-model" data-id="${escA(provider.id)}" ${provider.hasApiKey?'':'disabled'}>בדיקת חיבור</button>
      <button class="btn xs danger" data-act="admin-remove-ai-model" data-id="${escA(provider.id)}">הסרת מודל</button>
      ${provider.hasApiKey?'<span class="tiny muted">המפתח מוצפן ונשאר בשרת</span>':''}
    </div>
  </article>`).join('');
  const fallback=ADMIN_AI_MODELS.envFallback?.enabled
    ? `<p class="tiny muted">אם לא יוגדרו מודלים כאן, האפליקציה תמשיך להשתמש בהגדרת השרת: ${esc(ADMIN_AI_MODELS.envFallback.label)} · ${esc(ADMIN_AI_MODELS.envFallback.model)}.</p>`
    : '<p class="tiny muted">לא מוגדר מודל חלופי בשרת. צריך להוסיף כאן לפחות מודל אחד כדי להפעיל את המאמנת.</p>';
  return `<div class="card section">
    <h2 style="font-size:1.05rem">🤖 מודלים למאמנת AI</h2>
    <p class="small muted">אביב מגדיר את ספקי Groq או OpenAI-compatible ואת המודל הפעיל. כל התלמידים משתמשים במודל הפעיל; מפתחות ה-API נשמרים מוצפנים בשרת ולא נשלחים לדפדפני התלמידים.</p>
    ${fallback}
    ${providers.length?`<div class="field"><label for="admin-ai-active">מודל פעיל לכל התלמידים</label><select id="admin-ai-active">${activeOptions}</select></div>`:'<p class="tiny muted">עדיין לא הוגדרו מודלים אישיים.</p>'}
    ${rows}
    ${ADMIN_AI_ERROR?`<div class="help">${esc(ADMIN_AI_ERROR)}</div>`:''}
    <div class="row">
      <button class="btn sm ghost" data-act="admin-add-ai-model">הוסף מודל</button>
      <button class="btn sm primary" data-act="admin-save-ai-models" ${ADMIN_AI_BUSY?'disabled':''}>${ADMIN_AI_BUSY?'שומר…':'שמירת הגדרות המודלים'}</button>
    </div>
  </div>`;
}
function pageAdmin(){
  if(!window.adminApi?.isEnabled()){
    return `<div class="page">
      <div class="card auth-card">
        <div class="auth-head">
          <h1 class="page-title" style="font-size:1.35rem">🛡️ לוח אביב</h1>
          <p class="small muted">כניסת אדמין מאובטחת לצפייה בהתקדמות התלמידים ולניהול המאמנת.</p>
        </div>
        ${ADMIN_ERROR?`<div class="auth-error" role="alert">${esc(ADMIN_ERROR)}</div>`:''}
        <form class="auth-form" data-submit-act="admin-login" novalidate>
          <div class="auth-fields">
            <div class="field"><label for="admin-username">שם משתמש אדמין</label><input id="admin-username" name="username" autocomplete="username" placeholder="שם משתמש"></div>
            <div class="field"><label for="admin-password">סיסמת אדמין</label><input id="admin-password" name="password" type="password" autocomplete="current-password" placeholder="סיסמה"></div>
          </div>
          <button type="submit" class="btn primary wide auth-submit">כניסה ללוח אביב</button>
        </form>
        <div class="auth-divider"><span>או</span></div>
        <div class="auth-secondary">
          <button type="button" class="btn ghost wide" data-go="#/home">חזרה לאפליקציה</button>
        </div>
        <p class="tiny muted auth-foot">חשבון האדמין מוגדר כסוד בשרת ואינו אחד מחשבונות התלמידים · אפשר ללחוץ Enter לכניסה.</p>
      </div>
    </div>`;
  }

  const allStudents=ADMIN_STUDENTS||[];
  const adminName=window.adminApi.user()?.displayName||'אביב';
  const activeTodayCount=allStudents.filter(s=>s.activeToday).length;
  const readyCount=allStudents.filter(s=>s.readyForContinuation).length;
  const avgProgress=allStudents.length
    ? Math.round(allStudents.reduce((sum,s)=>sum+(Number(s.overallPercent)||0),0)/allStudents.length)
    : 0;
  const accuracyValues=allStudents.map(s=>s.accuracy).filter(v=>v!=null&&Number.isFinite(Number(v)));
  const averageAccuracy=accuracyValues.length?`${Math.round(accuracyValues.reduce((sum,v)=>sum+Number(v),0)/accuracyValues.length)}%`:'—';
  const completedModulesTotal=allStudents.reduce((sum,s)=>sum+(Number(s.completedModulesCount)||0),0);

  let filtered=allStudents.slice();
  if(ADMIN_FILTER==='today') filtered=filtered.filter(s=>s.activeToday);
  else if(ADMIN_FILTER==='ready') filtered=filtered.filter(s=>s.readyForContinuation);
  else if(ADMIN_FILTER==='inactive') filtered=filtered.filter(s=>!s.lastActive&&!(Number(s.completedExercises)>0));

  filtered.sort((a,b)=>{
    if(ADMIN_SORT==='recent') return (Date.parse(b.lastActive||0)||0)-(Date.parse(a.lastActive||0)||0);
    if(ADMIN_SORT==='xp') return (Number(b.xp)||0)-(Number(a.xp)||0);
    if(ADMIN_SORT==='name') return String(a.username||'').localeCompare(String(b.username||''),'he');
    return (Number(b.overallPercent)||0)-(Number(a.overallPercent)||0)||(Number(b.xp)||0)-(Number(a.xp)||0);
  });

  return `<div class="page">
    <div class="page-head">
      <div>
        <h1 class="page-title">🛡️ דשבורד התקדמות · ${esc(adminName)}</h1>
        <p class="page-sub">מעקב מלא אחרי התקדמות התלמידים, יחידות, דיוק ומודולי המשך.</p>
      </div>
      <div class="row" style="margin-inline-start:auto">
        <button class="btn sm ghost" data-act="admin-refresh">🔄 רענון</button>
        <button class="btn sm danger" data-act="admin-logout">יציאה</button>
      </div>
    </div>

    ${ADMIN_ERROR?`<div class="help section">${esc(ADMIN_ERROR)}</div>`:''}

    <div class="seg" style="margin-top:6px">
      <button class="${ADMIN_TAB==='progress'?'active':''}" data-act="admin-tab" data-tab="progress">📊 התקדמות תלמידים (${allStudents.length})</button>
      <button class="${ADMIN_TAB==='ai'?'active':''}" data-act="admin-tab" data-tab="ai">🤖 הגדרות מודלי AI</button>
    </div>

    ${ADMIN_TAB==='ai'?renderAdminAiModels():`
      ${ADMIN_LOADING&&!ADMIN_STUDENTS?'<div class="card"><p class="small muted">טוען נתוני התקדמות תלמידים…</p></div>':`
        <div class="admin-summary-grid">
          <div class="admin-summary-item"><b>${avgProgress}%</b><span>התקדמות ממוצעת</span></div>
          <div class="admin-summary-item"><b>${activeTodayCount} / ${allStudents.length}</b><span>פעילים היום</span></div>
          <div class="admin-summary-item"><b>${averageAccuracy}</b><span>דיוק ממוצע</span></div>
          <div class="admin-summary-item"><b>${completedModulesTotal}</b><span>מודולים שהושלמו</span></div>
        </div>

        <div class="card section">
          <div class="section-head" style="flex-wrap:wrap;gap:8px">
            <h2>📋 מבט-על על התקדמות הכיתה</h2>
            <div class="row" style="margin-inline-start:auto;gap:6px">
              ${[['all','הכל'],['today',`פעילים היום (${activeTodayCount})`],['ready',`מוכנים להמשך (${readyCount})`],['inactive','טרם התחילו']].map(([val,lbl])=>`<button class="chip ${ADMIN_FILTER===val?'active':''}" data-act="admin-filter" data-filter="${val}">${lbl}</button>`).join('')}
            </div>
          </div>
          <div class="row" style="margin-bottom:10px;gap:6px">
            <span class="tiny muted">מיון לפי:</span>
            ${[['progress','התקדמות %'],['recent','פעילות אחרונה'],['xp','XP'],['name','שם']].map(([val,lbl])=>`<button class="chip ${ADMIN_SORT===val?'active':''}" data-act="admin-sort" data-sort="${val}">${lbl}</button>`).join('')}
          </div>
          ${renderAdminProgressTable(filtered)}
        </div>

        <div class="section">
          <div class="section-head">
            <h2>👥 פירוט התקדמות אישית לפי תלמיד/ה</h2>
            <span class="tiny muted">${filtered.length} מוצגים · לחצי על תלמיד בטבלה למעבר מהיר</span>
          </div>
          <div class="grid admin-student-grid">${filtered.map(adminStudentCard).join('')}</div>
        </div>
      `}
    `}
  </div>`;
}
async function adminAdvanceStudentModule(key){
  if(ADMIN_CURRICULUM_BUSY[key]) return;
  ADMIN_CURRICULUM_BUSY[key]=true;
  try{
    toast('פותח מודול המשך ושומר דוח התקדמות…');
    const result=await window.adminApi.advanceModuleStage(key);
    ADMIN_STUDENTS=null;
    toast(`מודול ההמשך נפתח (שלב ${result.moduleStage||''} · ${result.level||''}) ✓`);
    await loadAdminDashboard();
  }catch(error){
    ADMIN_ERROR=`פתיחת מודול ההמשך נכשלה: ${error.message}`;
    toast(ADMIN_ERROR);
    render();
  }finally{
    ADMIN_CURRICULUM_BUSY[key]=false;
  }
}
async function loadAdminDashboard(){
  if(ADMIN_LOADING||!window.adminApi?.isEnabled()) return;
  ADMIN_LOADING=true; ADMIN_ERROR='';
  try{
    const [studentsResult,modelsResult]=await Promise.allSettled([
      window.adminApi.students(),
      window.adminApi.aiModels(),
    ]);
    if(studentsResult.status==='rejected') throw studentsResult.reason;
    ADMIN_STUDENTS=studentsResult.value.students||[];
    if(modelsResult.status==='fulfilled'){
      ADMIN_AI_MODELS=modelsResult.value;
      ADMIN_AI_ERROR='';
    }else{
      ADMIN_AI_MODELS=null;
      ADMIN_AI_ERROR=`טעינת מודלי ה-AI נכשלה: ${modelsResult.reason.message}`;
    }
  }catch(error){
    ADMIN_STUDENTS=[];
    ADMIN_ERROR=error.status===401?'פג תוקף החיבור. התחברי שוב.':`טעינת הנתונים נכשלה: ${error.message}`;
    if(error.status===401) window.adminApi.logout();
  }finally{
    ADMIN_LOADING=false;
    if(parts()[0]==='admin') render();
  }
}
function addAdminAiModel(){
  if(!ADMIN_AI_MODELS) ADMIN_AI_MODELS={providers:[],activeProviderId:null,envFallback:{enabled:false}};
  const id=window.crypto?.randomUUID?.()||`model-${Date.now()}`;
  ADMIN_AI_MODELS.providers.push({
    id,name:'Groq',kind:'groq',apiUrl:'https://api.groq.com/openai/v1/chat/completions',
    model:'llama-3.3-70b-versatile',hasApiKey:false,
  });
  if(!ADMIN_AI_MODELS.activeProviderId) ADMIN_AI_MODELS.activeProviderId=id;
  ADMIN_AI_ERROR='';
  render();
}
function removeAdminAiModel(id){
  if(!ADMIN_AI_MODELS) return;
  ADMIN_AI_MODELS.providers=ADMIN_AI_MODELS.providers.filter(provider=>provider.id!==id);
  if(ADMIN_AI_MODELS.activeProviderId===id){
    ADMIN_AI_MODELS.activeProviderId=ADMIN_AI_MODELS.providers[0]?.id||null;
  }
  ADMIN_AI_ERROR='';
  render();
}
async function saveAdminAiModels(){
  if(ADMIN_AI_BUSY||!ADMIN_AI_MODELS) return;
  const rows=$$('#main [data-admin-model-provider]');
  const providers=rows.map(row=>({
    id:row.dataset.adminModelProvider,
    name:row.querySelector('[data-model-name]').value,
    kind:row.querySelector('[data-model-kind]').value,
    apiUrl:row.querySelector('[data-model-url]').value,
    model:row.querySelector('[data-model-name-id]').value,
    apiKey:row.querySelector('[data-model-key]').value,
  }));
  const activeProviderId=$('#admin-ai-active')?.value||null;
  ADMIN_AI_BUSY=true; ADMIN_AI_ERROR=''; render();
  try{
    ADMIN_AI_MODELS=await window.adminApi.saveAiModels({
      providers,
      activeProviderId,
    });
    toast('הגדרות מודלי ה-AI נשמרו ✓');
  }catch(error){
    ADMIN_AI_ERROR=error.message;
  }finally{
    ADMIN_AI_BUSY=false;
    if(parts()[0]==='admin') render();
  }
}
async function testAdminAiModel(id,button){
  if(!button||button.disabled) return;
  button.disabled=true;
  const original=button.textContent;
  button.textContent='בודק…';
  try{
    const result=await window.adminApi.testAiModel(id);
    toast(`החיבור הצליח ✓ · ${result.model}`);
  }catch(error){
    ADMIN_AI_ERROR=error.message;
    render();
  }finally{
    if(button.isConnected){ button.disabled=false; button.textContent=original; }
  }
}
async function enterAdminStudent(key){
  const button=$(`[data-act="admin-impersonate"][data-key="${CSS.escape(key)}"]`);
  if(button){ button.disabled=true; button.textContent='נכנסת…'; }
  try{
    const account=await window.adminApi.enterStudent(key);
    await loadStudentAccount(account);
    closeModal();
    go('#/home');
    toast(`נכנסת לחשבון של ${account.username}. שינויים יישמרו כהתקדמות שלו/ה.`);
  }catch(error){
    if(button){ button.disabled=false; button.textContent='כניסה לחשבון'; }
    toast(`הכניסה לחשבון נכשלה: ${error.message}`);
  }
}
async function exitAdminStudent(expired=false){
  try{
    const account=await window.adminApi.exitStudent();
    if(account) await loadStudentAccount(account);
    else{
      S=freshState();
      clearStudentIdentity();
      installCurriculum({curriculum:null,courseId:'default'});
    }
    ADMIN_STUDENTS=null;
    ADMIN_ERROR='';
    go('#/admin');
    if(expired) toast('פג תוקף הכניסה לחשבון התלמיד. חזרת ללוח האדמין.');
    else toast('חזרת ללוח האדמין.');
  }catch(error){
    toast(`לא ניתן לצאת לפני סנכרון ההתקדמות: ${error.message}`);
  }
}
async function submitAdminLogin(){
  const username=$('#admin-username')?.value?.trim();
  const password=$('#admin-password')?.value||'';
  if(!username||!password){ ADMIN_ERROR='יש להזין שם משתמש וסיסמה.'; render(); return; }
  try{
    await window.adminApi.login(username,password);
    ADMIN_ERROR=''; ADMIN_STUDENTS=null; ADMIN_RESET_CODES={};
    render();
    loadAdminDashboard();
  }catch(error){
    ADMIN_ERROR=error.status===503?error.message:'שם המשתמש או הסיסמה שגויים.';
    render();
  }
}
async function issueStudentResetCode(key){
  try{
    const result=await window.adminApi.issueResetCode(key);
    ADMIN_RESET_CODES[key]=result.code;
    toast(result.purpose==='activation'?'קוד הפעלה נוצר. העבירי אותו לתלמיד/ה בפרטי.':'קוד איפוס נוצר. העבירי אותו לתלמיד/ה בפרטי.');
    render();
  }catch(error){
    ADMIN_ERROR=`יצירת קוד האיפוס נכשלה: ${error.message}`;
    render();
  }
}
const CEFR_LEVEL_OPTIONS=['Pre-A1','A1','A1+','A2','B1','B1+','B2','C1','C2'];
function openCurriculumEditor(key,message='',promptValue,modeValue,levelValue){
  const student=ADMIN_STUDENTS?.find(item=>item.key===key);
  if(!student) return;
  const mode=modeValue==='next'?'next':'replace';
  const defaultLevel=mode==='next'
    ?(student.pendingNextCurriculum?.level||student.suggestedNextLevel||student.targetLevel||student.level||'A2')
    :(student.curriculum?.level||student.level||'A1');
  const selectedLevel=levelValue||defaultLevel;
  const initialPrompt=promptValue??(mode==='next'
    ?(student.pendingNextCurriculumPrompt||student.nextModulePrompt||student.profilePrompt||'')
    :(student.curriculumPrompt||student.profilePrompt||''));
  const levelOptions=CEFR_LEVEL_OPTIONS.map(lvl=>`<option value="${escA(lvl)}" ${lvl===selectedLevel?'selected':''}>${esc(lvl)}${lvl===student.level?' (רמה נוכחית)':lvl===student.suggestedNextLevel?' (הרמה הבאה המומלצת)':''}</option>`).join('');
  openModal(`<h3>✨ ${mode==='next'?'הכנת מודול הבא':'יצירה ועדכון מסלול / רמת לימוד'} — ${esc(student.username)}</h3>
    <p class="small muted">בחר/י את רמת ה-CEFR המבוקשת לתרגילים ואת אופן העדכון: החלפה מיידית של המסלול הנוכחי, או שמירה כ<b>מודול הבא</b> שייפתח אוטומטית כשהתלמיד/ה יסיימו את המבחן המסכם בציון <b>80 מתוך 100</b> (או ברגע שתאשר/י אותו בלוח הניהול).</p>
    <div class="row" style="gap:6px;flex-wrap:wrap;margin:8px 0">
      ${student.curriculum?`<span class="tag lime">מסלול נוכחי: ${esc(student.curriculum.title)} · ${esc(student.curriculum.level)}</span>`:`<span class="tag">מסלול נוכחי: מסלול בסיסי (${esc(student.level)})</span>`}
      ${student.pendingNextCurriculum?`<span class="tag gold">ממתין לאישור / 80+: ${esc(student.pendingNextCurriculum.title)} · ${esc(student.pendingNextCurriculum.level)}</span>`:''}
    </div>
    ${message?`<div class="help" style="margin:8px 0">${esc(message)}</div>`:''}
    <div class="grid two">
      <div class="field">
        <label for="curriculum-level">רמת לימוד לתרגילים (CEFR)</label>
        <select id="curriculum-level">${levelOptions}</select>
      </div>
      <div class="field">
        <label for="curriculum-mode">אופן פתיחת המודול</label>
        <select id="curriculum-mode">
          <option value="next" ${mode==='next'?'selected':''}>🚀 מודול הבא (נפתח בציון 80/100 במבחן או באישור אדמין)</option>
          <option value="replace" ${mode==='replace'?'selected':''}>⚡ החלפה מיידית של המסלול הנוכחי</option>
        </select>
      </div>
    </div>
    <div class="field"><label for="curriculum-prompt">הנחיות למורה / פרומפט</label><textarea id="curriculum-prompt" rows="7" maxlength="5000" placeholder="הוסיפי נושאים, מטרות וסגנון לימוד.">${esc(initialPrompt)}</textarea></div>
    <div class="row">
      <button class="btn primary" data-act="admin-generate-curriculum" data-key="${escA(key)}">${mode==='next'?'יצירה ושמירה כמודול הבא':'יצירה והחלפת המסלול'}</button>
      ${student.pendingNextCurriculum?`<button class="btn ghost" data-act="admin-approve-next-curriculum" data-key="${escA(key)}">✅ אשר ופתח מודול ממתין עכשיו</button>`:''}
      <button class="btn ghost" data-close>ביטול</button>
    </div>
    <p class="tiny muted" style="margin-top:8px">התוכן נוצר דרך שירות ה-AI שהוגדר בשרת; לפני מעבר למודול חדש נשמר דוח מלא של ההתקדמות הקודמת.</p>`);
  $('#curriculum-mode')?.addEventListener('change',event=>{
    const newMode=event.target.value;
    const btn=$('#overlay [data-act="admin-generate-curriculum"]');
    if(btn) btn.textContent=newMode==='next'?'יצירה ושמירה כמודול הבא':'יצירה והחלפת המסלול';
    const lvlSelect=$('#curriculum-level');
    if(lvlSelect&&newMode==='next'&&lvlSelect.value===student.level&&student.suggestedNextLevel){
      lvlSelect.value=student.suggestedNextLevel;
    }
  });
}
function reportDate(value){
  const date=new Date(value);
  return Number.isNaN(date.getTime())?'':date.toLocaleString('he-IL');
}
function renderProgressReport(report){
  const summary=report.summary||{};
  const accuracy=summary.accuracy==null?'—':`${summary.accuracy}%`;
  const words=(items)=>items?.length
    ? `<div class="chips">${items.map(word=>`<span class="chip"><span class="en">${esc(word.en)}</span> — ${esc(word.he)} <span class="tiny muted">(${word.mastery}/5)</span></span>`).join('')}</div>`
    : '<p class="tiny muted">אין נתונים עדיין.</p>';
  return `<div class="card flat" style="margin-top:12px">
    <div class="row"><b>${esc(report.courseTitle||'מסלול קודם')}</b><span class="tag">${esc(report.level||'')}</span><span class="tiny muted">${esc(reportDate(report.archivedAt))}</span></div>
    <p class="small" style="margin-top:8px">נענו ${Number(summary.answers)||0} תשובות · דיוק ${accuracy} · ${Number(summary.completedExercises)||0} תרגילים הושלמו · ${Number(summary.xp)||0} XP · רצף ${Number(summary.streak)||0} ימים</p>
    ${report.prompt?`<p class="tiny muted" style="margin-top:6px"><b>הנחיות המסלול:</b> ${esc(report.prompt)}</p>`:''}
    ${report.units?.length?`<div class="section-head" style="margin-top:12px"><h2>יחידות</h2></div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><tbody>${report.units.map(unit=>`<tr><td style="padding:6px;border-bottom:1px solid var(--line)"><b>${esc(unit.title)}</b><div class="tiny muted">${esc((unit.topics||[]).join(' · '))}</div></td><td class="tiny">${Number(unit.completed)||0}/${Number(unit.attempted)||0} הושלמו</td><td class="tiny">${unit.accuracy==null?'—':`${unit.accuracy}%`}</td></tr>`).join('')}</tbody></table></div>`:''}
    ${report.skills?.length?`<p class="small" style="margin-top:10px"><b>מיומנויות:</b> ${report.skills.map(skill=>`${esc(skill.name)} ${skill.accuracy==null?'—':`${skill.accuracy}%`} (${Number(skill.attempts)||0})`).join(' · ')}</p>`:''}
    ${report.strongTopics?.length?`<p class="small" style="margin-top:8px"><b>נושאים חזקים:</b> ${report.strongTopics.map(topic=>`${esc(topic.topic)} (${topic.accuracy}%)`).join(' · ')}</p>`:''}
    ${report.focusTopics?.length?`<p class="small" style="margin-top:8px"><b>נושאים לחיזוק:</b> ${report.focusTopics.map(topic=>`${esc(topic.topic)} (${topic.accuracy}%)`).join(' · ')}</p>`:''}
    <div class="section-head" style="margin-top:12px"><h2>מילים לשליפה</h2></div>${words(report.masteredWords)}
    <div class="section-head" style="margin-top:12px"><h2>מילים שכדאי לתרגל שוב</h2></div>${words(report.wordsToReview)}
  </div>`;
}
async function showCurriculumReports(key){
  const student=ADMIN_STUDENTS?.find(item=>item.key===key);
  if(!student) return;
  openModal(`<h3>📊 דוחות קודמים — ${esc(student.username)}</h3><p class="small muted">טוען דוחות…</p>`);
  try{
    const result=await window.adminApi.curriculumReports(key);
    const reports=result.reports||[];
    openModal(`<h3>📊 דוחות קודמים — ${esc(student.username)}</h3>
      ${reports.length?reports.map(renderProgressReport).join(''):'<p class="small muted">עדיין לא נשמרו דוחות. דוח יישמר לפני החלפת המסלול הראשונה.</p>'}
      <button class="btn ghost wide" style="margin-top:12px" data-close>סגירה</button>`);
  }catch(error){
    openModal(`<h3>📊 דוחות קודמים</h3><div class="help">${esc(`טעינת הדוחות נכשלה: ${error.message}`)}</div><button class="btn ghost wide" data-close>סגירה</button>`);
  }
}
async function generateStudentCurriculum(key){
  const prompt=$('#curriculum-prompt')?.value?.trim()||'';
  const mode=$('#curriculum-mode')?.value==='next'?'next':'replace';
  const level=$('#curriculum-level')?.value||'';
  if(ADMIN_CURRICULUM_BUSY[key]) return;
  ADMIN_CURRICULUM_BUSY[key]=true;
  const button=$('#overlay [data-act="admin-generate-curriculum"]');
  if(button){ button.disabled=true; button.textContent='יוצרת מסלול…'; }
  try{
    const result=await window.adminApi.generateCurriculum(key,prompt,{mode,level});
    const student=ADMIN_STUDENTS?.find(item=>item.key===key);
    if(student){
      if(result.mode==='next'){
        student.pendingNextCurriculum=result.pendingNextCurriculum;
        student.pendingNextCurriculumPrompt=prompt;
      }else{
        student.curriculum=result.curriculum;
        student.curriculumPrompt=prompt;
        if(result.level) student.level=result.level;
      }
    }
    ADMIN_ERROR='';
    closeModal();
    render();
    if(result.mode==='next'){
      toast(`המודול הבא (${result.pendingNextCurriculum?.level||level}) מוכן וייפתח בציון 80/100 או באישור שלך ✓`);
    }else{
      toast(result.archivedReport?'המסלול החדש נשמר ודוח ההתקדמות הקודם נוצר ✓':'המסלול האישי נשמר ✓');
    }
  }catch(error){
    openCurriculumEditor(key,`יצירת המסלול נכשלה: ${error.message}`,prompt,mode,level);
  }finally{
    ADMIN_CURRICULUM_BUSY[key]=false;
  }
}
async function approveStudentNextCurriculum(key){
  if(ADMIN_CURRICULUM_BUSY[key]) return;
  ADMIN_CURRICULUM_BUSY[key]=true;
  try{
    toast('מאשרת ופותחת את המודול הבא…');
    const result=await window.adminApi.approveNextCurriculum(key);
    const student=ADMIN_STUDENTS?.find(item=>item.key===key);
    if(student){
      student.curriculum=result.curriculum;
      student.pendingNextCurriculum=null;
      student.pendingNextCurriculumPrompt='';
      if(result.level) student.level=result.level;
      if(result.targetLevel) student.targetLevel=result.targetLevel;
      student.xp=0;
      student.completedExercises=0;
      student.attemptedExercises=0;
      student.examBest=0;
    }
    closeModal();
    render();
    toast(`המודול החדש (${result.level||result.curriculum?.level||''}) נפתח לתלמיד/ה ✓`);
  }catch(error){
    ADMIN_ERROR=`אישור המודול הבא נכשל: ${error.message}`;
    toast(ADMIN_ERROR);
    render();
  }finally{
    ADMIN_CURRICULUM_BUSY[key]=false;
  }
}

/* ================= exam ================= */
let EXAM=null, EXAM_RESULT=null, examTimer=null;
function startExam(){
  const pool=UNITS.flatMap(u=>u.exercises).filter(e=>['mcq','type','gap','scr'].includes(e.t));
  const list=shuffle(pool).slice(0,20);
  EXAM={list,idx:0,correct:0,answers:[],start:Date.now()};
  S.exam.active={ids:list.map(e=>e.id),idx:0,correct:0,answers:[],start:EXAM.start};
  EXAM_RESULT=null; save(); go('#/exam');
}
function hydrateExam(){
  if(EXAM || !S.exam.active || !S.exam.active.ids) return;
  const list=S.exam.active.ids.map(id=>EX_MAP[id]).filter(Boolean);
  if(!list.length){ S.exam.active=null; return; }
  EXAM={list,idx:S.exam.active.idx||0,correct:S.exam.active.correct||0,answers:S.exam.active.answers||[],start:S.exam.active.start||Date.now()};
}
function examAnswered(ok){
  if(!EXAM) return;
  if(ok) EXAM.correct++;
  EXAM.answers[EXAM.idx]=ok;
  S.exam.active={ids:EXAM.list.map(e=>e.id),idx:EXAM.idx,correct:EXAM.correct,answers:EXAM.answers,start:EXAM.start};
  save();
}
function nextExam(){
  if(!EXAM) return;
  EXAM.idx++;
  if(EXAM.idx>=EXAM.list.length){ finishExam(); return; }
  S.exam.active.idx=EXAM.idx; save(); render();
}
function finishExam(){
  if(!EXAM) return;
  const total=EXAM.list.length, correct=EXAM.correct, score=Math.round(correct/total*100);
  S.exam.last={score,correct,total,date:Date.now()};
  S.exam.best=Math.max(S.exam.best||0,score); S.exam.attempts=(S.exam.attempts||0)+1;
  S.exam.active=null;
  const unlockedPending=Boolean(PENDING_NEXT_CURRICULUM && score>=80);
  const unlockedBuiltIn=Boolean(!PENDING_NEXT_CURRICULUM && score>=75 && canAdvanceContinuation());
  const unlockedNext=unlockedPending||unlockedBuiltIn;
  EXAM_RESULT={
    score,correct,total,unlockedNext,unlockedBuiltIn,
    nextTitle:PENDING_NEXT_CURRICULUM?.title||`מודול המשך (שלב ${Math.min(3,CURRENT_MODULE_STAGE+1)})`,
    nextLevel:PENDING_NEXT_CURRICULUM?.level||'',
  };
  addXP(Math.max(10,Math.round(score/3)),$('#ex-host'));
  checkBadges(); saveNow();
  if(cloudReady()) window.apiSync.flush();
  EXAM=null;
  confetti(score>=70?34:12);
  render();
}
function pageExam(){
  if(EXAM_RESULT){
    const {score,correct,total,unlockedNext,unlockedBuiltIn,nextTitle,nextLevel}=EXAM_RESULT;
    return `<div class="page"><div class="chat-summary"><div class="card result-hero">
      <div style="font-size:2.4rem">${score>=80?'🏆':score>=60?'🎯':'🌱'}</div>
      <div class="result-score">${score}</div>
      <h2>${score>=80?`מצוין, ${esc(S.name||'תלמידה')}!`:score>=60?'עבודה טובה':'בסיס טוב – ממשיכים'}</h2>
      <p class="muted small">${correct} מתוך ${total} נכונות · הציון נשמר בפרופיל שלך.</p>
      ${unlockedNext?`<div class="card flat" style="margin-top:12px;border-color:rgba(74,222,128,.5);background:rgba(74,222,128,.1)">
        <b>🚀 ${CURRENT_UI_LANGUAGE==='es'?'¡Nuevo módulo desbloqueado!':'מודול ההמשך נפתח עבורך!'}</b>
        <p class="small" style="margin-top:4px">${CURRENT_UI_LANGUAGE==='es'?`Con tu puntuación de ${score}/100, ya tienes acceso a:`:`בזכות ציון ${score}/100, נפתח עבורך:`} <b>${esc(nextTitle)}${nextLevel?` (${esc(nextLevel)})`:''}</b></p>
        ${unlockedBuiltIn
          ? `<button class="btn sm primary" style="margin-top:8px" data-act="advance-continuation-module">🚀 ${CURRENT_UI_LANGUAGE==='es'?'Abrir módulo siguiente':'פתח את מודול ההמשך עכשיו'}</button>`
          : `<button class="btn sm primary" style="margin-top:8px" data-go="#/learn">${CURRENT_UI_LANGUAGE==='es'?'Ir al nuevo módulo →':'למעבר למודול החדש ←'}</button>`}
      </div>`:''}
      <div class="cert"><div class="seal">🥇</div><b>תעודת מבחן</b><span>Lamda · ${esc(S.name||'')} · ${new Date().toLocaleDateString('he-IL')} · ציון ${score}/100</span></div>
      <div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-act="start-exam">🔁 נסי שוב</button><button class="btn ghost" data-go="#/stats">📈 להתקדמות</button><button class="btn ghost" data-go="#/review">🔁 לחזרה</button></div>
    </div></div></div>`;
  }
  hydrateExam();
  if(!EXAM){
    return `<div class="page"><div class="page-head"><button class="back" data-go="#/learn">→</button><div><h1 class="page-title">📝 מבחן סוף מסלול</h1></div></div>
      <div class="card center"><div style="font-size:2.6rem">🏁</div><h2 style="margin:6px 0">מוכנה למבחן?</h2>
      <p class="muted small" style="max-width:46ch;margin:0 auto">20 שאלות מכל 4 היחידות. אין לחץ זמן – ציון 75+ פותח את מודול ההמשך לשלב הבא.</p>
      ${S.exam.last?`<div class="fact" style="margin-top:12px">הציון האחרון שלך: <b>${S.exam.last.score}/100</b> · השיא: ${S.exam.best}/100</div>`:''}
      <button class="btn primary" style="margin-top:14px" data-act="start-exam">▶ התחילי מבחן</button></div>
    </div>`;
  }
  const ex=EXAM.list[EXAM.idx];
  if(!ex){ finishExam(); return ''; }
  return `<div class="page"><div class="chat-summary">
    <div class="exam-head"><button class="back" data-go="#/learn">→</button><div><h1 class="page-title" style="font-size:1.1rem">📝 מבחן מסכם</h1><div class="tiny muted">${EXAM.idx+1} מתוך ${EXAM.list.length}</div></div>
    <span class="timer" id="exam-timer" style="margin-inline-start:auto">00:00</span><span class="tag lime">${EXAM.correct} נכונות</span></div>
    <div id="ex-host"></div>
    <div class="row" style="margin-top:10px"><button class="btn sm ghost" data-act="abort-exam">צא מהמבחן</button></div>
  </div></div>`;
}
function mountExam(){
  if(!EXAM||!$('#ex-host')) return;
  const ex=EXAM.list[EXAM.idx];
  if(!ex) return;
  mountExercise($('#ex-host'),ex,{scope:'exam',index:EXAM.idx,total:EXAM.list.length});
  const t0=EXAM.start||Date.now();
  clearInterval(examTimer);
  const upd=()=>{const el=$('#exam-timer');if(!el)return;const s=Math.floor((Date.now()-t0)/1000);el.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');};
  upd(); examTimer=setInterval(upd,1000);
}

/* ================= settings / data ================= */
function utf8ToBase64Url(text){
  const bytes=new TextEncoder().encode(String(text));
  let binary='';
  for(let i=0;i<bytes.length;i++) binary+=String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function base64UrlToUtf8(b64url){
  let b64=String(b64url||'').replace(/-/g,'+').replace(/_/g,'/');
  while(b64.length%4) b64+='=';
  const binary=atob(b64);
  const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
function updateSyncBadge(state,detail=''){
  const el=document.getElementById('sync-badge');
  if(!el) return;
  const map={saved:['✅','מסונכרן בענן'],server:['💾','נשמר בשרת מקומי'],syncing:['🔄','מסנכרן…'],offline:['📴','לא מקוון'],error:['⚠️','שגיאת סנכרון'],off:['💾','מקומי בלבד']};
  const [icon,label]=map[state]||map.off;
  el.textContent=`${icon} ${label}`;
  el.className='tag '+(state==='saved'?'lime':state==='error'||state==='server'?'gold':'');
  el.title=detail|| (state==='server'
    ?'השמירה כרגע בקובץ מקומי בשרת; שירותי אירוח ללא דיסק מתמיד עלולים למחוק אותו באתחול.'
    :state==='error'?'הסנכרון נכשל. בדקי חיבור ואת הגדרות האחסון.':'');
}
function renderSyncPanel(){
  const enabled=cloudReady();
  const account=window.apiSync&&window.apiSync.user?window.apiSync.user():null;
  const storage=window.apiSync?.storage?.()||'local';
  const isCloud=storage==='netlify-blobs'||storage==='supabase';
  const badge=enabled
    ?isCloud
      ?'<span class="tag lime" id="sync-badge">✅ מסונכרן בענן</span>'
      :'<span class="tag gold" id="sync-badge">💾 נשמר בשרת</span>'
    :'<span class="tag" id="sync-badge">🔒 נדרשת כניסה</span>';
  if(enabled){
    return `<div class="field"><div class="row" style="align-items:center">
      <span style="flex:1"><b>${esc(account?.username||'תלמידה')}</b> · רמה ${esc(account?.level||S.settings.level)} · שלב ${CURRENT_MODULE_STAGE}</span>${badge}
      <button class="btn xs danger" data-act="student-logout">יציאה</button></div></div>
      <p class="tiny muted">${isCloud?'ההתקדמות נשמרת בחשבון האישי בענן ומסתנכרנת אוטומטית בין הטלפון למחשב.':'האחסון הנוכחי הוא שרת מקומי.'}</p>`;
  }
  return `<div class="field"><p class="tiny muted">יש להתחבר עם שם משתמש וסיסמה כדי לשמור את ההתקדמות בענן ולסנכרן אותה בין הטלפון למחשב.</p>
    <button class="btn primary wide" data-act="student-login-open">כניסה לחשבון תלמיד</button></div>`;
}
function openSettings(){
  const activeVoice=findBestVoice(learningSpeechLocale());
  openModal(`<button class="x" data-close>✕</button>
    <h3>⚙️ הגדרות</h3>
    <p class="small muted">ההתקדמות והרמה מוגדרות לכל תלמיד בנפרד ונשמרות בחשבון שלו.</p>

    <div class="divider"></div>
    <h3 style="font-size:1rem">👥 חשבון תלמידה</h3>
    ${renderSyncPanel()}

    <div class="divider"></div>
    <h3 style="font-size:1rem">🎙️ קול ושמע לשיחה</h3>
    <div class="row" style="justify-content:space-between;align-items:center;margin-top:6px">
      <span class="small muted">קול פעיל: <b>${esc(activeVoice?.name?.replace(/Microsoft |Google /g,'')||'בחירה אוטומטית')}</b></span>
      <button class="btn xs ghost" data-act="voice-picker">🎙️ החלפת קול</button>
    </div>

    <div class="divider"></div>
    <form data-submit-act="save-settings">
      <div class="field"><label>יעד יומי (XP)</label><input type="number" id="set-goal" min="10" max="300" step="10" value="${S.settings.goal}"></div>
      <div class="grid two">
        <div class="field"><label>גודל טקסט</label><select id="set-fs">${[['.92','קטן'],['1','רגיל'],['1.1','גדול'],['1.2','גדול מאוד']].map(([v,l])=>`<option value="${v}" ${String(S.settings.fontScale)===v?'selected':''}>${l}</option>`).join('')}</select></div>
        <div class="field"><label>מהירות השמעה</label><select id="set-rate">${[['0.82','איטי (0.82×)'],['0.95','טבעי (0.95×)'],['1.08','שוטף (1.08×)']].map(([v,l])=>`<option value="${v}" ${Math.abs((S.settings.ttsRate||0.95)-Number(v))<0.06?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="field"><label>צלילי משוב</label><label class="radio-opt"><input type="checkbox" id="set-sound" ${S.settings.sound?'checked':''}> <span><b>הפעל צלילים</b><span>צליל קצר לתשובה נכונה/שגויה</span></span></label></div>
      <div class="field"><label>תרגום אוטומטי בשיחה</label><label class="radio-opt"><input type="checkbox" id="set-tr" ${S.settings.showTr?'checked':''}> <span><b>הצג תרגום לעברית</b><span>אפשר להסתיר בכל הודעה בנפרד</span></span></label></div>
      <div class="field"><label class="radio-opt"><input type="checkbox" id="set-autospeak" ${S.settings.autoSpeak?'checked':''}> <span><b>הקראה אוטומטית של תשובות המאמנת</b><span>המאמנת תקריא כל תשובה בקול טבעי</span></span></label></div>

      <div class="divider"></div>
      <div class="row"><button type="submit" class="btn primary" style="flex:1">שמרי הגדרות</button><button type="button" class="btn ghost" data-close>סגור</button></div>
    </form>
    <div class="row" style="margin-top:12px"><button type="button" class="btn sm ghost" data-act="export">⬇️ ייצוא גיבוי</button><button type="button" class="btn sm ghost" data-act="import-file">⬆️ ייבוא</button><button type="button" class="btn sm ghost" data-act="backup-link">🔗 קישור המשך</button></div>
    <div class="row" style="margin-top:10px"><button type="button" class="btn sm danger" data-act="reset-all">🔄 איפוס כל ההתקדמות</button></div>`);
}
function readSettings(){
  S.settings.goal=clamp(Number($('#set-goal').value)||60,10,300);
  S.settings.fontScale=Number($('#set-fs').value)||1;
  S.settings.ttsRate=Number($('#set-rate').value)||0.95;
  S.settings.sound=$('#set-sound').checked;
  S.settings.showTr=$('#set-tr').checked;
  S.settings.autoSpeak=$('#set-autospeak').checked;
  applyFontScale(); saveNow(); closeModal(); toast('ההגדרות נשמרו ✓');
  if(location.hash.includes('/chat')) render();
}
function exportBackup(){
  const copy=JSON.parse(JSON.stringify(S));
  delete copy.api;
  const blob=new Blob([JSON.stringify(copy,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='lamda-progress.json';
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  toast('⬇️ הגיבוי הורד');
}
function miniState(){
  const c=JSON.parse(JSON.stringify(S));
  delete c.api; delete c.chat.messages; delete c.chat.history; delete c.chat.learned;
  return c;
}
function backupLink(){
  const json=JSON.stringify(miniState());
  const b64=utf8ToBase64Url(json);
  const url=location.origin+location.pathname+'#/import/'+b64;
  if(url.length>8000){ toast('הקישור ארוך – עדיף ייצוא קובץ'); }
  try{ navigator.clipboard.writeText(url); toast('🔗 הקישור הועתק'); }catch(e){}
  openModal(`<button class="x" data-close>✕</button><h3>🔗 קישור המשך</h3>
    <p class="small muted">פתח את הקישור הזה במכשיר אחר – ההתקדמות תיובא אחרי אישור. הקישור לא כולל את מפתח ה-API או את היסטוריית השיחות.</p>
    <textarea class="txt ltr" style="height:90px;font-size:.7rem" readonly>${escA(url)}</textarea>
    <div class="row" style="margin-top:10px"><button class="btn sm" data-copy="${escA(url)}">📋 העתקה</button><button class="btn sm primary" data-go="${escA(url)}">פתח במכשיר הזה</button></div>`);
}
function importFilePicker(){
  const input=document.createElement('input'); input.type='file'; input.accept='application/json,.json';
  input.onchange=()=>{
    const f=input.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=()=>{ try{ const obj=JSON.parse(r.result); if(!obj||typeof obj!=='object') throw 0; applyImport(obj); }catch(e){ toast('הקובץ לא תקין'); } };
    r.readAsText(f);
  };
  input.click();
}
function applyImport(obj){
  const name=S.name;
  S={...freshState(), ...obj};
  delete S.api;
  S.name=name;
  S.daily={date:todayKey(),xp:0,answers:0,reviews:0,chats:0};
  S.settings={...freshState().settings,...(obj.settings||{})};
  S.review={...freshState().review,...(obj.review||{}),queue:[],idx:0,finished:false};
  S.chat={...freshState().chat,...(obj.chat||{})};
  S.exam.active=null;
  S.updated_at=new Date().toISOString();
  hydrateExtraWords();
  persistLocal(); closeModal(); updateHeader(); toast('✅ ההתקדמות יובאה');
  cloudPush(true);
  go('#/home');
}
function openReset(){
  openModal(`<button class="x" data-close>✕</button><h3 style="color:var(--red)">לאפס הכול?</h3>
    <p class="small muted">כל הנקודות, ההתקדמות, המילים, ההישגים והשיחות בפרופיל הזה יימחקו מהמכשיר ומהענן. אין שחזור.</p>
    <div class="row" style="margin-top:14px"><button class="btn" data-close>ביטול</button><button class="btn danger" data-act="confirm-reset">כן, אפס הכול</button></div>`);
}
async function doReset(){
  const fresh=freshState();
  fresh.updated_at=new Date().toISOString();
  S=fresh;
  try{ localStorage.removeItem(stateStorageKey()); localStorage.setItem(stateStorageKey(), JSON.stringify(fresh)); }catch(e){}
  cloudPush(true);
  if(cloudReady()) await window.apiSync.flush();
  try{ history.replaceState(null,'',location.pathname); }catch(e){}
  setTimeout(()=>location.reload(), cloudReady()?900:0);
}

/* ================= modal ================= */
function openModal(html){
  const o=$('#overlay');
  o.innerHTML=`<div class="modal" role="dialog" aria-modal="true">${html}</div>`;
  personalizeVisibleText(o);
  o.hidden=false; document.body.style.overflow='hidden';
}
function closeModal(){
  const o=$('#overlay'); o.hidden=true; o.innerHTML=''; document.body.style.overflow='';
}

/* ================= chat report hooks (defined in chat.js) ================= */
function openChatReport(){ if(typeof showChatReport==='function') showChatReport(); }

/* ================= router ================= */
function parts(){ return location.hash.replace(/^#\/?/,'').split('/').filter(Boolean); }
const routeHistory=[];
let expectedHashChange=null;
function go(hash){
  if(!hash) return;
  closeModal();
  if(location.hash===hash){ render(); return; }
  routeHistory.push(location.hash||'#/home');
  if(routeHistory.length>30) routeHistory.shift();
  expectedHashChange=hash;
  location.hash=hash;
}
function routeBackFallback(){
  const [root,child]=parts();
  if(root==='unit'||root==='exam') return '#/learn';
  if(root==='review'&&child==='session') return '#/review';
  if(root==='drill'||root==='speak') return '#/review';
  if(root==='chat'&&child) return '#/chat';
  return '#/home';
}
function goBack(){
  closeModal();
  const target=routeHistory.pop()||routeBackFallback();
  if(location.hash===target){ render(); return; }
  expectedHashChange=target;
  location.hash=target;
}
function handleHashChange(){
  const current=location.hash||'#/home';
  if(expectedHashChange===current) expectedHashChange=null;
  else routeHistory.length=0;
  render();
}
function updateNav(){
  const p=parts(), root=p[0]||'home';
  const map={home:'home',learn:'learn',unit:'learn',cards:'cards',review:'review',drill:'review',exam:'review',speak:'review',chat:'chat',stats:'stats',admin:'admin'};
  const activeNav=map[root]||'home';
  $$('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.nav===activeNav));
  $$('.top-nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.nav===activeNav));
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.nav===activeNav));
  const isLearner=Boolean(window.apiSync?.user?.());
  $$('[data-nav="admin"]').forEach(button=>button.classList.toggle('hide',isLearner));
  const activeTop=$('.top-nav-tab.active');
  if(activeTop&&typeof activeTop.scrollIntoView==='function'){
    try{ activeTop.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}); }catch(e){}
  }
}
function personalizedCoursePendingHTML(){
  const isSpanish=CURRENT_UI_LANGUAGE==='es';
  const isHebrew=CURRENT_UI_LANGUAGE==='he';
  const learningLanguage=CURRENT_LEARNER_PROFILE.learningLanguage||'English';
  const languageLabel=isSpanish
    ?({English:'inglés',French:'francés',Spanish:'español'}[learningLanguage]||learningLanguage)
    :isHebrew
      ?({English:'אנגלית',French:'צרפתית',Spanish:'ספרדית'}[learningLanguage]||learningLanguage)
      :learningLanguage;
  const level=CURRENT_LEARNER_PROFILE.level||'A2';
  const target=CURRENT_LEARNER_PROFILE.targetLevel;
  const levelText=target&&target!==level?`${level} → ${target}`:level;
  const title=isSpanish
    ?`Tu curso personalizado de ${languageLabel} aún no está listo`
    :isHebrew
      ?`הקורס האישי שלך ב${languageLabel} עדיין לא מוכן`
      :`Your personalized ${learningLanguage} course is not ready yet`;
  const profile=isSpanish
    ?`Tu perfil está configurado para aprender ${languageLabel} en el nivel ${levelText}, con instrucciones en español.`
    :isHebrew
      ?`הפרופיל שלך מוגדר ללימוד ${languageLabel} ברמה ${levelText}, עם הסברים בעברית.`
      :`Your profile is set up to learn ${learningLanguage} at level ${levelText}, with instructions in English.`;
  const next=isSpanish
    ?'Pide al profesor que genere tu curso desde el panel docente. Después, vuelve a entrar para empezar.'
    :isHebrew
      ?'אפשר לבקש מהמורה ליצור את הקורס בלוח המורה. לאחר מכן, יש להתחבר מחדש כדי להתחיל.'
      :'Ask your teacher to generate your course in the teacher dashboard. Then sign in again to get started.';
  const saved=isSpanish
    ?'Tu progreso se guardará por separado en tu cuenta cuando empieces a estudiar.'
    :isHebrew
      ?'ההתקדמות שלך תישמר בחשבון שלך כשתתחיל ללמוד.'
      :'Your progress will be saved to your account as soon as you start learning.';
  const direction=isHebrew?'rtl':'ltr';
  return `<section class="page" lang="${CURRENT_UI_LANGUAGE}" dir="${direction}">
    <div class="card center" role="status" aria-live="polite">
      <div style="font-size:2.4rem" aria-hidden="true">📚</div>
      <h1 class="page-title" style="margin:8px 0 12px">${esc(title)}</h1>
      <p class="small">${esc(profile)}</p>
      <p class="small muted" style="margin-top:8px">${esc(next)}</p>
      <div class="divider"></div>
      <p class="tiny muted">${esc(saved)}</p>
    </div>
  </section>`;
}
function render(){
  clearInterval(examTimer);
  cleanupCardsTimers();
  const p=parts(), root=p[0]||'home';
  const main=$('#main'); if(!main) return;
  const personalizedCoursePending=false;
  let html='';
  try{
    if(personalizedCoursePending) html=personalizedCoursePendingHTML();
    else
    if(root==='home') html=pageHome();
    else if(root==='learn') html=pageLearn();
    else if(root==='unit') html=pageUnit(p[1],p[2]||'explain');
    else if(root==='cards') html=pageMemoryCards(p[1]);
    else if(root==='review') html=p[1]==='session'?pageReviewSession():reviewOverviewHTML();
    else if(root==='drill') html=pageDrill(p[1]||'sprint');
    else if(root==='speak') html=pageSpeak();
    else if(root==='chat') html=pageChat(p[1]||'');
    else if(root==='stats') html=pageStats();
    else if(root==='admin') html=pageAdmin();
    else if(root==='exam') html=pageExam();
    else if(root==='import'){ handleImportRoute(p.slice(1).join('/')); return; }
    else html=pageHome();
  }catch(e){
    console.error(e);
    html=`<div class="page"><div class="card"><h3>משהו נתקע 🙂</h3><p class="small muted">נסי לרענן. השגיאה לא מוחקת את ההתקדמות.</p><button class="btn primary" data-go="#/home">לבית</button></div></div>`;
  }
  const impersonated=window.adminApi?.impersonatingStudent?.();
  const banner=impersonated?`<div class="admin-impersonation-banner" role="status">
    <span>⚠️ אדמין במצב תלמידה: <b>${esc(impersonated.username||'תלמידה')}</b>. ${impersonated.activated?'הפעולות נשמרות בחשבון שלה.':'חשבון התלמידה עדיין לא הופעל; בדיקות יישמרו כהתקדמות שלה.'}</span>
    <button class="btn sm" data-act="admin-impersonation-exit">חזרה ללוח האדמין</button>
  </div>`:'';
  main.innerHTML=banner+html;
  personalizeVisibleText(main);
  updateHeader(); updateNav();
  if(!personalizedCoursePending){
    if(root==='unit' && p[2]==='practice'){ const u=UNITS.find(x=>x.id===p[1]); if(u) mountUnitPractice(u); }
    if(root==='cards') mountCards();
    if(root==='review' && p[1]==='session' && !S.review.finished) mountReview();
    if(root==='drill') mountDrill();
    if(root==='speak') {} // rendered directly
    if(root==='exam') mountExam();
    if(root==='chat' && typeof mountChat==='function') mountChat();
    if(root==='admin'&&window.adminApi?.isEnabled()&&!ADMIN_STUDENTS) loadAdminDashboard();
    if(root==='admin'&&!window.adminApi?.isEnabled()){ setTimeout(()=>$('#admin-username')?.focus(),0); }
  }
  if(root!=='admin'){ S.last.route=location.hash||'#/home'; save(); }
  window.scrollTo({top:0,behavior:'instant'});
}
function handleImportRoute(data){
  try{
    const json=base64UrlToUtf8(data);
    const obj=JSON.parse(json);
    PENDING_IMPORT=obj;
    openModal(`<button class="x" data-close>✕</button><h3>📥 ייבאי התקדמות?</h3>
      <p class="small muted">מצאתי בקישור התקדמות של Lamda. לייבא אותה למכשיר הזה? הנתונים הנוכחיים יוחלפו (מפתח ה-API נשמר).</p>
      <div class="row" style="margin-top:12px"><button class="btn ghost" data-close>ביטול</button><button class="btn primary" data-act="confirm-import">ייבאי עכשיו</button></div>`);
    history.replaceState(null,'','#/home');
    render();
  }catch(e){ toast('הקישור לא תקין'); go('#/home'); }
}
let PENDING_IMPORT=null;

let VOCAB_TOOLTIP_TIMER=null;
const VOCAB_TRANSLATION_CACHE=new Map();
function closeVocabTooltip(){
  clearTimeout(VOCAB_TOOLTIP_TIMER);
  VOCAB_TOOLTIP_TIMER=null;
  $('#vocab-tooltip')?.remove();
}
function showVocabTooltip(anchor,word,translation='טוען תרגום…'){
  closeVocabTooltip();
  const tooltip=document.createElement('div');
  tooltip.id='vocab-tooltip';
  tooltip.className='vocab-tooltip';
  tooltip.setAttribute('role','status');
  tooltip.setAttribute('aria-live','polite');
  tooltip.style.direction=CURRENT_UI_LANGUAGE==='he'?'rtl':'ltr';
  tooltip.innerHTML=`<div class="vocab-tooltip-text"><span class="vocab-tooltip-word">${esc(word)}</span><span class="vocab-tooltip-translation">${esc(translation)}</span></div><button class="iconbtn" data-vocab-say="${escA(word)}" aria-label="${escA(localizedText('השמעה'))}" title="${escA(localizedText('השמעה'))}">🔊</button>`;
  document.body.appendChild(tooltip);
  const rect=anchor.getBoundingClientRect();
  const above=rect.top>90;
  tooltip.style.left=`${Math.max(8,Math.min(rect.left,window.innerWidth-tooltip.offsetWidth-8))}px`;
  tooltip.style.top=`${Math.max(8,above?rect.top-8:rect.bottom+8)}px`;
  if(above) tooltip.style.transform='translateY(-100%)';
  VOCAB_TOOLTIP_TIMER=setTimeout(closeVocabTooltip,4000);
  return tooltip;
}
function knownWordTranslation(word){
  if(CURRENT_UI_LANGUAGE!=='he'&&!ACTIVE_CURRICULUM) return '';
  const key=word.toLowerCase();
  const found=wordByKey(key);
  if(found&&found.he&&(CURRENT_UI_LANGUAGE==='he'||ACTIVE_CURRICULUM)) return found.he;
  const learned=(S.chat&&S.chat.learned)||{};
  const learnedKey=Object.keys(learned).find(k=>k.toLowerCase()===key);
  if(learnedKey&&learned[learnedKey]) return learned[learnedKey];
  for(const message of (S.chat&&S.chat.messages)||[]){
    const match=(message.words||[]).find(w=>w.en&&w.en.toLowerCase()===key&&w.he);
    if(match) return match.he;
  }
  return '';
}
async function translateVocabWord(word){
  const known=knownWordTranslation(word);
  if(known) return known;
  const translationLanguage=CURRENT_UI_LANGUAGE==='he'?'Hebrew':CURRENT_UI_LANGUAGE==='es'?'Spanish':'English';
  const cacheKey=`${translationLanguage}:${word.toLowerCase()}`;
  if(VOCAB_TRANSLATION_CACHE.has(cacheKey)) return VOCAB_TRANSLATION_CACHE.get(cacheKey);
  if(!canUseAI()||!window.apiSync?.aiChat) return '';
  const request=window.apiSync.aiChat([
    {role:'system',content:`Translate the supplied ${CURRENT_LEARNER_PROFILE.learningLanguage||'English'} word or short phrase into natural ${translationLanguage}. Reply with only the translation; if it has several common meanings, give up to two concise meanings.`},
    {role:'user',content:word}
  ],{temperature:0,max_tokens:60}).then(data=>{
    const translation=String(data.choices?.[0]?.message?.content||'').trim().replace(/^["'“”]+|["'“”]+$/g,'').slice(0,120);
    if(!translation) throw new Error('Empty word translation');
    VOCAB_TRANSLATION_CACHE.set(cacheKey,translation);
    return translation;
  }).catch(error=>{
    VOCAB_TRANSLATION_CACHE.delete(cacheKey);
    throw error;
  });
  VOCAB_TRANSLATION_CACHE.set(cacheKey,request);
  return request;
}
async function showWordTranslation(anchor,word){
  const tooltip=showVocabTooltip(anchor,word,localizedText('טוען תרגום…'));
  try{
    const translation=await translateVocabWord(word);
    if(tooltip.isConnected) tooltip.querySelector('.vocab-tooltip-translation').textContent=
      translation||localizedText(PUBLIC_AI_STATUS.enabled?'התחברי כדי לתרגם מילים חדשות':'המילה לא נמצאה במילון המקומי');
  }catch(error){
    if(tooltip.isConnected) tooltip.querySelector('.vocab-tooltip-translation').textContent=localizedText('התרגום לא זמין כרגע. נסי שוב.');
  }
}

/* ================= global events ================= */
function handleGlobalClick(e){
  const resetLink=e.target.closest('[data-whatsapp-reset][aria-disabled="true"]');
  if(resetLink){ e.preventDefault(); toast('קישור הוואטסאפ עדיין לא הוגדר. פני למורה ישירות.'); return; }
  const readingWord=e.target.closest('[data-word-audio]');
  if(readingWord){
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.word-translation-bubble').forEach(bubble=>bubble.remove());
    clearTimeout(wordBubbleTimer);
    const bubble=document.createElement('span');
    bubble.className='word-translation-bubble';
    bubble.setAttribute('role','status');
    const translation=readingWord.dataset.wordTranslation||'';
    bubble.textContent=translation||localizedText('טוען תרגום…');
    readingWord.appendChild(bubble);
    if(!translation) translateVocabWord(readingWord.dataset.wordAudio).then(result=>{
      if(bubble.isConnected) bubble.textContent=result||localizedText('תרגום לא זמין');
    }).catch(()=>{ if(bubble.isConnected) bubble.textContent=localizedText('התרגום לא זמין כרגע. נסי שוב.'); });
    wordBubbleTimer=setTimeout(()=>bubble.remove(),4000);
    speak(readingWord.dataset.wordAudio);
    return;
  }
  const t=e.target.closest('[data-say]');
  if(t){ speak(t.dataset.say); return; }
  const vocabSay=e.target.closest('[data-vocab-say]');
  if(vocabSay){ speak(vocabSay.dataset.vocabSay); return; }
  const vocabWord=e.target.closest('[data-vocab-word]');
  if(vocabWord){ showWordTranslation(vocabWord,vocabWord.dataset.vocabWord); return; }
  const nav=e.target.closest('[data-nav]');
  if(nav){ e.preventDefault(); go(nav.getAttribute('href') || '#/'+nav.dataset.nav); 
    // Close sidebar on mobile after navigation
    const sidebar=$('#sidebar'); const overlay=$('#sidebar-overlay');
    if(sidebar && overlay){ sidebar.classList.remove('open'); overlay.classList.remove('show'); }
    return; }
  const g=e.target.closest('[data-go]');
  if(g){
    const href=g.dataset.go||'';
    if(href.startsWith('http')){
      try{
        const u=new URL(href);
        if(u.protocol==='https:') window.location.href=u.href;
      }catch(err){}
    }else go(href);
    const sidebar=$('#sidebar'); const overlay=$('#sidebar-overlay');
    if(sidebar && overlay){ sidebar.classList.remove('open'); overlay.classList.remove('show'); }
    return;
  }
  const cp=e.target.closest('[data-copy]');
  if(cp){ try{ navigator.clipboard.writeText(cp.dataset.copy); toast('📋 הועתק'); }catch(err){} return; }
  if(e.target.closest('[data-close]')){ closeModal(); return; }
  if(e.target.id==='overlay'){ closeModal(); return; }

  // Sidebar toggle
  if(e.target.id==='menu-toggle' || e.target.closest('#menu-toggle')){
    const sidebar=$('#sidebar'); const overlay=$('#sidebar-overlay'); const btn=$('#menu-toggle');
    if(sidebar && overlay){
      const isOpen=sidebar.classList.toggle('open');
      overlay.classList.toggle('show', isOpen);
      if(btn){ btn.setAttribute('aria-expanded', isOpen); btn.textContent=isOpen?'✕':'☰'; }
    }
    return;
  }
  if(e.target.id==='sidebar-overlay'){
    const sidebar=$('#sidebar'); const overlay=$('#sidebar-overlay'); const btn=$('#menu-toggle');
    if(sidebar && overlay){
      sidebar.classList.remove('open'); overlay.classList.remove('show');
      if(btn){ btn.setAttribute('aria-expanded', 'false'); btn.textContent='☰'; }
    }
    return;
  }

  const opt=e.target.closest('[data-opt]');
  if(opt && QS && !QS.answered){ chooseOption(opt.dataset.opt); return; }
  const act=e.target.closest('[data-act]');
  if(!act) return;
  const a=act.dataset.act;
  switch(a){
    case 'card-flip': flipCurrentCard(); break;
    case 'card-rate': rateCurrentCard(act.dataset.grade); break;
    case 'card-prev': navigateCard(-1); break;
    case 'card-next': navigateCard(1); break;
    case 'card-star': e.stopPropagation(); toggleCardStar(act.dataset.key); break;
    case 'card-hint': e.stopPropagation(); toggleCardHint(); break;
    case 'card-speak': e.stopPropagation(); speak(act.dataset.word); break;
    case 'card-shuffle': initCards(CARDS_STATE.unitFilter, CARDS_STATE.mode); toast('🔀 הכרטיסיות עורבבו'); renderCardsPage(); break;
    case 'card-timer-cycle': cycleCardTimer(); break;
    case 'card-autoplay-toggle': toggleAutoPlay(); break;
    case 'card-autospeak-toggle': toggleAutoSpeak(); break;
    case 'card-unit-filter-reset': initCards('all', CARDS_STATE.mode); renderCardsPage(); break;
    case 'card-restart': initCards(CARDS_STATE.unitFilter, CARDS_STATE.mode); renderCardsPage(); break;
    case 'card-mode-switch': CARDS_STATE.mode = act.dataset.mode; initCards(CARDS_STATE.unitFilter, CARDS_STATE.mode); renderCardsPage(); break;
    case 'match-tile-click': handleMatchTileClick(Number(act.dataset.idx)); break;
    case 'match-restart': initMatchGame(CARDS_STATE.unitFilter); updateMatchGridUI(); break;
    case 'toggle-practice-rule': {
      PRACTICE_RULE_OPEN = !PRACTICE_RULE_OPEN;
      const box = $('#practice-rule-box');
      const btn = $('[data-act="toggle-practice-rule"]');
      if(box) box.classList.toggle('hide', !PRACTICE_RULE_OPEN);
      if(btn) btn.textContent = PRACTICE_RULE_OPEN ? '▲ הסתר כלל' : '▼ הצג כלל ועזרה';
      break;
    }
    case 'advance-continuation-module': advanceToContinuationModule(act.dataset.stage?Number(act.dataset.stage):undefined); break;
    case 'voice-picker': openVoicePickerModal(); break;
    case 'voice-set-rate': {
      S.settings.ttsRate=Number(act.dataset.rate)||0.95;
      saveNow();
      openVoicePickerModal();
      break;
    }
    case 'voice-select': {
      S.settings.voiceName=act.dataset.voice||'';
      VOICE=findBestVoice(learningSpeechLocale());
      saveNow();
      toast(S.settings.voiceName?`🎙️ הקול עודכן`:'🎙️ בחירה אוטומטית של הקול הטבעי ביותר');
      openVoicePickerModal();
      break;
    }
    case 'voice-preview': {
      e.stopPropagation();
      const locale=learningSpeechLocale();
      const v=(speechSynthesis.getVoices()||[]).find(item=>item.name===act.dataset.voice);
      const sample=locale.startsWith('fr')?'Bonjour ! Voici ma voix pour notre conversation.':'Hi! This is how I sound during our conversation.';
      speak(sample,S.settings.ttsRate,{voice:v||undefined,locale});
      break;
    }
    case 'voice-preview-current': {
      speak(act.dataset.sample||'Hi! Ready to talk?',S.settings.ttsRate);
      break;
    }
    case 'student-login': submitStudentLogin(); break;
    case 'nav-back': goBack(); break;
    case 'student-login-open': openStudentLogin(); break;
    case 'password-setup-open': openPasswordSetup(); break;
    case 'password-setup': submitPasswordSetup(); break;
    case 'student-logout': logoutStudent(); break;
    case 'admin-login': submitAdminLogin(); break;
    case 'admin-tab': ADMIN_TAB=act.dataset.tab||'progress'; render(); break;
    case 'admin-filter': ADMIN_FILTER=act.dataset.filter||'all'; render(); break;
    case 'admin-sort': ADMIN_SORT=act.dataset.sort||'progress'; render(); break;
    case 'admin-scroll-student': {
      const el=document.getElementById('admin-card-'+(act.dataset.key||''));
      if(el){ el.scrollIntoView({behavior:'smooth',block:'center'}); el.classList.add('highlight-flash'); setTimeout(()=>el.classList.remove('highlight-flash'),1200); }
      break;
    }
    case 'admin-advance-module': adminAdvanceStudentModule(act.dataset.key); break;
    case 'admin-refresh': ADMIN_STUDENTS=null; ADMIN_AI_MODELS=null; ADMIN_AI_ERROR=''; render(); loadAdminDashboard(); break;
    case 'admin-add-ai-model': addAdminAiModel(); break;
    case 'admin-remove-ai-model': removeAdminAiModel(act.dataset.id); break;
    case 'admin-save-ai-models': saveAdminAiModels(); break;
    case 'admin-test-ai-model': testAdminAiModel(act.dataset.id,act); break;
    case 'admin-impersonate': enterAdminStudent(act.dataset.key); break;
    case 'admin-impersonation-exit': exitAdminStudent(); break;
    case 'admin-reset-code': issueStudentResetCode(act.dataset.key); break;
    case 'admin-edit-curriculum': openCurriculumEditor(act.dataset.key,'',undefined,act.dataset.mode||'replace'); break;
    case 'admin-approve-next-curriculum': approveStudentNextCurriculum(act.dataset.key); break;
    case 'admin-view-reports': showCurriculumReports(act.dataset.key); break;
    case 'admin-generate-curriculum': generateStudentCurriculum(act.dataset.key); break;
    case 'admin-logout':
      window.adminApi.logout(); ADMIN_STUDENTS=null; ADMIN_AI_MODELS=null; ADMIN_RESET_CODES={}; ADMIN_ERROR=''; ADMIN_AI_ERROR=''; render(); break;
    case 'check': checkCurrent(); break;
    case 'hint': showHint(); break;
    case 'next':
      if(QS.ctx.scope==='review') nextReview();
      else if(QS.ctx.scope==='drill') nextDrill();
      else if(QS.ctx.scope==='exam') nextExam();
      else nextInUnit();
      break;
    case 'retry': retryQuestion(); break;
    case 'listen': if(QS){ const src=QS.ex.audio||QS.ex.ans[0]; speak(src); } break;
    case 'rule': e.stopPropagation(); openRule(act.dataset.rule); break;
    case 'unit-rules': { const u=UNITS.find(x=>x.id===QS.ctx.unitId); if(u) openUnitRules(u); break; }
    case 'pick': if(QS){ QS.zone.push(Number(act.dataset.id)); renderQuestion(); } break;
    case 'unpick': if(QS){ QS.zone=QS.zone.filter(x=>x!==Number(act.dataset.id)); renderQuestion(); } break;
    case 'clear': if(QS){ QS.zone=[]; renderQuestion(); } break;
    case 'jump': if(QS&&QS.ctx.unitId) jumpExercise(act.dataset.idx); break;
    case 'toggle-map': S.seen.mapOpen=!S.seen.mapOpen; render(); break;
    case 're-practice': S.seen.retryPractice=true; S.unitPos[UNITS.find(x=>x.id===QS?.ctx.unitId)?.id||'u1']=0; render(); break;
    case 'start-review': startReview(); break;
    case 'end-review': S.review.finished=true; S.review.queue=[]; save(); go('#/review'); break;
    case 'start-drill': startDrill(act.dataset.kind); break;
    case 'adaptive-generate-open': generateAdaptiveBooster({openAfter:true}); break;
    case 'adaptive-refresh': generateAdaptiveBooster({silent:false}); break;
    case 'speak-start': startSpeak(); break;
    case 'speak-mic': speakMic(); break;
    case 'speak-next': nextSpeak(); break;
    case 'speak-self': { SPEAK.results.push(80); SPEAK.last={heard:'(אישור עצמי)',score:80}; S.stats.speak++; S.stats.speakScore+=80; addXP(4); nextSpeak(); break; }
    case 'start-exam': startExam(); break;
    case 'abort-exam': if(confirm('לצאת מהמבחן? ההתקדמות במבחן לא תישמר.')){ EXAM=null; S.exam.active=null; save(); EXAM_RESULT=null; go('#/learn'); } break;
    case 'settings': openSettings(); break;
    case 'toggle-sound': S.settings.sound=!S.settings.sound; saveNow(); updateHeader(); toast(S.settings.sound?'🔊 צליל פעיל':'🔇 צליל כבוי'); break;
    case 'save-settings': readSettings(); break;
    case 'export': exportBackup(); break;
    case 'import-file': importFilePicker(); break;
    case 'backup-link': backupLink(); break;
    case 'reset-all': openReset(); break;
    case 'confirm-reset': doReset().catch(err=>toast('איפוס הפרופיל נכשל: '+err.message)); break;
    case 'confirm-import': if(PENDING_IMPORT) applyImport(PENDING_IMPORT); break;
    case 'chat-report': openChatReport(); break;
    default: if(typeof handleChatAction==='function') handleChatAction(a,act);
  }
}
function openUnitRules(u){
  openModal(`<button class="x" data-close>✕</button><h3>📖 כללי ${u.he}</h3>
    <p class="small muted">${u.lead}</p>
    ${u.rules.map(r=>`<details class="rule" style="margin-top:10px"><summary><span class="n">📌</span>${r.title}<span class="chev">▾</span></summary><div class="rule-body"><p>${r.body}</p><div class="formula">${esc(r.formula)}</div><ul class="ex-list">${r.examples.map(ex=>`<li><span class="en">${ex.en}</span><span class="he">${ex.he}</span></li>`).join('')}</ul></div></details>`).join('')}
    <button class="btn primary wide" style="margin-top:12px" data-close>חזרה לתרגיל</button>`);
}
function handleGlobalSubmit(e){
  const form=e.target.closest('form[data-submit-act]');
  if(!form) return;
  e.preventDefault();
  const act=form.dataset.submitAct;
  if(act==='student-login') submitStudentLogin();
  else if(act==='password-setup') submitPasswordSetup();
  else if(act==='admin-login') submitAdminLogin();
  else if(act==='save-settings') readSettings();
}
function handleGlobalKeydown(e){
  if(e.defaultPrevented||e.isComposing) return;
  const overlay=$('#overlay');
  const modalOpen=Boolean(overlay && !overlay.hidden);
  const target=e.target;
  const tag=(target?.tagName||'').toUpperCase();
  const isTextarea=tag==='TEXTAREA';
  const isInput=tag==='INPUT';
  const isSelect=tag==='SELECT';
  const isButton=tag==='BUTTON'||tag==='A';

  if(e.key==='Escape'){
    if(modalOpen){ e.preventDefault(); closeModal(); return; }
    const sidebar=$('#sidebar'), sideOv=$('#sidebar-overlay');
    if(sidebar?.classList.contains('open')){
      sidebar.classList.remove('open');
      sideOv?.classList.remove('show');
      const btn=$('#menu-toggle');
      if(btn){ btn.setAttribute('aria-expanded','false'); btn.textContent='☰'; }
    }
    return;
  }

  if(e.key!=='Enter') return;
  if(e.shiftKey||e.altKey) return;

  // Inside a <textarea>: only Ctrl/Cmd+Enter submits modals/forms (chat-input has its own Enter handler)
  if(isTextarea){
    if((e.ctrlKey||e.metaKey) && modalOpen){
      const primary=$('#overlay .btn.primary:not([disabled])');
      if(primary){ e.preventDefault(); primary.click(); }
    }
    return;
  }

  // Pressing Enter on a <select> or <input> inside any semantic form submits it naturally
  if(isInput||isSelect){
    const form=target.closest('form[data-submit-act]');
    if(form){
      e.preventDefault();
      if(typeof form.requestSubmit==='function') form.requestSubmit();
      else form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));
      return;
    }
    // Pressing Enter inside Admin AI Model inputs saves model settings
    if(target.closest('[data-admin-model-provider]')){
      e.preventDefault();
      saveAdminAiModels();
      return;
    }
    // Pressing Enter inside any open modal triggers its primary action button
    if(modalOpen){
      const primary=$('#overlay .btn.primary:not([disabled])');
      if(primary){ e.preventDefault(); primary.click(); }
      return;
    }
    return;
  }

  // When a modal is open and focus is not on a specific button/link, Enter confirms the primary button
  if(modalOpen){
    if(!isButton){
      const primary=$('#overlay .btn.primary:not([disabled])');
      if(primary){ e.preventDefault(); primary.click(); }
    }
    return;
  }

  // Natural Enter during Exercises / Review / Drills / Exam (when not typing in a field or focusing another control)
  if(!isButton && typeof QS!=='undefined' && QS && $('#fb-slot')){
    if(QS.answered){
      const nextBtn=$('[data-act="next"]:not([disabled])');
      if(nextBtn){ e.preventDefault(); nextBtn.click(); }
      return;
    }
    if(QS.ex?.t==='scr' && Array.isArray(QS.zone) && QS.zone.length>0){
      e.preventDefault();
      checkCurrent();
    }
  }
}
function boot(){
  if(window.apiSync?.config){
    window.apiSync.config().then(config=>{
      TEACHER_WHATSAPP=config.teacherWhatsApp||'';
      PUBLIC_AI_STATUS=config.ai||{enabled:false,label:'מאמנת AI'};
      AI_AVAILABLE=PUBLIC_AI_STATUS.enabled!==false;
      refreshWhatsAppLinks();
      if(parts()[0]==='chat') render();
    }).catch(error=>console.warn('[config] could not load public app config:',error.message));
  }
  loadState();
  Object.keys(S.words).forEach(k=>{ if(S.words[k]) S.words[k].key=k; });
  hydrateExtraWords();
  buildData();
  initVoice();
  applyFontScale();
  if(!location.hash){
    const last=S.last.route&&S.last.route.startsWith('#/')?S.last.route:'#/home';
    history.replaceState(null,'',last);
  }
  document.addEventListener('click',handleGlobalClick);
  document.addEventListener('submit',handleGlobalSubmit);
  document.addEventListener('keydown',handleGlobalKeydown);
  document.addEventListener('change', e => {
    const unitSelect = e.target.closest('#card-unit-select');
    if(unitSelect){
      initCards(unitSelect.value, CARDS_STATE.mode);
      renderCardsPage();
    }
  });
  window.addEventListener('hashchange',handleHashChange);
  window.addEventListener('beforeunload',saveNow);
  document.addEventListener('visibilitychange',()=>{ if(document.hidden) saveNow(); else if(cloudReady()) cloudPush(); });
  watchPersonalizedText();
  render();
  initCloudSync();
  updateSyncBadge(cloudReady()?'saved':'off');
  setTimeout(updateHeader,700);
  // On fresh app open, always show the login screen so the user chooses
  // which account to open (instead of auto-signing into a saved account).
  const account=window.apiSync&&window.apiSync.user?window.apiSync.user():null;
  if(account) openStudentLogin();
  setInterval(()=>{ if(S.daily.date!==todayKey()){ S.daily={date:todayKey(),xp:0,answers:0,reviews:0,chats:0}; S.review.doneToday=0; S.review.lastDate=todayKey(); saveNow(); updateHeader(); } },60000);
  // Periodic background push keeps multi-device state fresh.
  setInterval(()=>{ if(cloudReady()) cloudPush(); }, 60000);
}
/* ============================================================
   BEERI ENGLISH COACH — the conversation coach (TalkPal style)
   Groq connection + fully usable local coach + voice + report
   ============================================================ */
let CHAT_BUSY=false;
let CHAT_INIT=false;
let SCENARIO_MAP={};
function rebuildScenarioMap(){
  SCENARIO_MAP={};
  SCENARIOS.forEach(s=>SCENARIO_MAP[s.id]=s);
}
rebuildScenarioMap();

function getScenario(id){ return SCENARIO_MAP[id]||null; }
/* The backend proxy is always available when the app is served by our server. */
let AI_AVAILABLE = true;
function canUseAI(){
  return AI_AVAILABLE&&PUBLIC_AI_STATUS.enabled&&Boolean(window.apiSync?.isEnabled?.());
}
function aiModeLabel(){
  if(!canUseAI()) return 'מאמנת מקומית';
  return PUBLIC_AI_STATUS.label||'מאמנת AI';
}
function scenarioById(id){ return SCENARIOS.find(s=>s.id===id); }

/* ================= gallery ================= */
function pageChat(scenarioId){
  if(scenarioId){
    const sc=scenarioById(scenarioId);
    if(sc){ ensureChat(sc); return chatScreenHTML(sc); }
  }
  return chatGalleryHTML();
}
function ensureChat(sc){
  if(S.chat.scenario!==sc.id || !S.chat.messages || !S.chat.messages.length){
    S.chat.scenario=sc.id;
    const learnerName=S.name||'the learner';
    const opening=String(sc.opening||'').replace(/\bGefen\b/g,learnerName);
    const openingHe=String(sc.openingHe||'').replace(/גפן/g,learnerName);
    S.chat.messages=[{role:'ai',text:opening,he:openingHe,suggestions:(sc.steps[0]&&sc.steps[0].suggestions)||[],words:sc.startWords||[],ts:Date.now()}];
    S.chat.localTurn=0; S.chat.sessionStart=Date.now(); S.chat.learned={}; S.chat.reported=false;
    (sc.startWords||[]).forEach(w=>{ S.chat.learned[w.en]=w.he; });
    saveNow();
  }
}
function chatGalleryHTML(){
  const saved=S.chat.scenario?scenarioById(S.chat.scenario):null;
  const msgs=S.chat.messages||[];
  const lastAI=[...msgs].reverse().find(m=>m.role==='ai');
  return `<div class="page">
    <div class="page-head"><h1 class="page-title">💬 המאמנת שלך</h1><p class="page-sub">שיחה אמיתית באנגלית – עם תיקון עדין, הצעות תשובה, תרגום והקראה. בחרי תרחיש, או דברי בחופשיות.</p></div>
    <div class="card" style="background:linear-gradient(135deg,rgba(255,143,199,.09),rgba(61,220,245,.05));border-color:rgba(255,143,199,.25)">
      <div class="row">
        <div class="avatar">🤖</div>
        <div style="flex:1"><b style="font-size:.95rem">${aiModeLabel()}</b><div class="tiny muted">${canUseAI()?`מודל: ${esc(PUBLIC_AI_STATUS.model||PUBLIC_AI_STATUS.label)} · רמה ${S.settings.level}`:PUBLIC_AI_STATUS.enabled?'להתחברות למאמנת המקוונת יש להיכנס לחשבון תלמיד.':'עובד גם בלי אינטרנט – מאמנת מקומית.'}</div></div>
        <button class="btn xs ghost" data-act="settings">הגדרות</button>
      </div>
      ${canUseAI()?'':`<div class="row" style="margin-top:10px"><span class="tiny muted">${PUBLIC_AI_STATUS.enabled?'אחרי הכניסה, השיחה תשתמש במודל שקבע אביב.':'המאמנת המקומית מלמדת, אבל לא מבינה כל משפט.'}</span></div>`}
      <div class="divider"></div>
      <div class="row">
        <span class="tiny muted">רמת שיחה: <b>${esc(S.settings.level)}</b> · נקבעת לפי חשבון התלמידה</span>
        <span class="tiny muted" style="margin-inline-start:auto">תיקון:</span>
        ${[['gentle','עדין'],['balanced','מאוזן'],['strict','קפדן']].map(([v,l])=>`<button class="chip ${S.settings.correction===v?'active':''}" data-set-corr="${v}">${l}</button>`).join('')}
      </div>
    </div>

    ${saved&&msgs.length>1?`<button class="continue section" data-go="#/chat/${saved.id}" style="width:100%">
      <span class="ic">${saved.icon}</span>
      <span style="flex:1"><b>המשיכי שיחה: ${saved.title}</b><span>${esc((lastAI&&lastAI.text||'').slice(0,70))}…</span></span>
      <span class="arr">←</span>
    </button>`:''}

    <div class="section-head" style="margin-top:18px"><h2>🎭 בחרי תרחיש</h2><span class="tiny muted">${SCENARIOS.length} עולמות</span></div>
    <div class="scenario-grid">
      ${SCENARIOS.map(s=>`<button class="scenario" data-go="#/chat/${s.id}">
        <div class="row"><span class="ic">${s.icon}</span><span class="tag" style="margin-inline-start:auto">${s.level}</span></div>
        <b>${s.title}</b><p>${s.desc}</p>
        <div class="meta"><span class="tag">${s.who}</span><span class="tag lime">${s.focus}</span></div>
        <div class="start">▶ פתח שיחה</div>
      </button>`).join('')}
    </div>

    <div class="card section">
      <div class="section-head"><h2>✨ מה יש כאן</h2></div>
      <div class="grid two">
        ${[['🗣️','תיקון בזמן אמת','טעית? המאמנת מראה מה נכון ולמה, בעברית פשוטה.'],
           ['💡','הצעות תשובה','תקועה? קבלי 3 דרכים לומר את מה שרצית – ברמה שלך.'],
           ['🌐','תרגום בלחיצה','לא הבנת? תרגום לעברית מתחת לכל הודעה – רק אם את רוצה.'],
           ['🎤','דיבור והקראה','דברי למיקרופון, והמאמנת מקריאה את התשובות בקול.'],
           ['🧠','מילים לחזרה','מילים חדשות מהשיחה נכנסות למעגל החזרה.'],
           ['📊','דוח סיום','בסוף שיחה: כמה דיברת, מה לתקן ומה הצעד הבא.']].map(([i,t,d])=>`<div class="stat-chip" style="text-align:start"><div style="font-size:1.2rem">${i}</div><b style="font-size:.82rem">${t}</b><div class="tiny muted">${d}</div></div>`).join('')}
      </div>
    </div>
    <div class="card section">
      <div class="section-head"><h2>📜 שיחות אחרונות</h2></div>
      ${(S.chat.history||[]).length?S.chat.history.slice(0,5).map(h=>{const sc=scenarioById(h.scenario);return `<div class="up-row"><span>${sc?sc.icon:'💬'}</span><span>${sc?sc.title:'שיחה'}</span><span class="tiny muted">${new Date(h.date).toLocaleDateString('he-IL')}</span><span class="when">${h.score}% · ${h.corrections} תיקונים</span></div>`}).join(''):'<div class="empty"><span class="big">💬</span> עוד לא הייתה שיחה. בחרי תרחיש למעלה – זה לוקח 30 שניות.</div>'}
    </div>
  </div>`;
}
let LAST_FAILED_CHAT_TEXT='';
function chatScreenHTML(sc){
  const rate=Number(S.settings.ttsRate)||0.95;
  const rateLabel=rate<=0.86?'0.82×':rate>=1.03?'1.08×':'0.95×';
  const langLabel=CURRENT_LEARNER_PROFILE.learningLanguage==='French'?'צרפתית':'אנגלית';
  return `<div class="page">
    <div class="page-head">
      <button class="back" data-go="#/chat" aria-label="כל התרחישים">→</button>
      <div><h1 class="page-title" style="font-size:1.1rem">${sc.icon} ${sc.title}</h1><div class="page-sub" style="margin:0">${sc.who} · ${sc.focus} · ${S.settings.level}</div></div>
      <div class="row" style="margin-inline-start:auto"><button class="btn xs ghost" data-act="chat-report">📊 סיום</button><button class="btn xs ghost" data-act="chat-new">✚ חדש</button></div>
    </div>
    ${canUseAI()?'':`<div class="chat-note">💡 <b>${PUBLIC_AI_STATUS.enabled?'נדרשת כניסה לחשבון':'מצב מקומי'}:</b> ${PUBLIC_AI_STATUS.enabled?'לאחר הכניסה השיחה תשתמש במודל החכם שקבע אביב.':'המאמנת המקומית עוקבת אחרי התרחיש ומתקנת טעויות נפוצות.'}</div>`}
    <div class="chat-shell" id="chat-shell">
      <div class="chat-head">
        <div class="avatar">${sc.icon}</div>
        <div class="who"><b>${sc.who}</b><span>${sc.role} · ${aiModeLabel()}</span></div>
        <div class="tools">
          <button class="iconbtn ${VOICE_HANDS_FREE?'speaking':''}" data-tool="handsfree" title="שיחה קולית רציפה (מקריא ואז מקשיב)" aria-pressed="${VOICE_HANDS_FREE?'true':'false'}">🎧</button>
          <button class="iconbtn" data-act="voice-picker" title="בחירת קול טבעי">🎙️</button>
          <button class="iconbtn tiny-speed" data-tool="speed" title="מהירות דיבור">${rateLabel}</button>
          <button class="iconbtn ${S.settings.autoSpeak?'speaking':''}" data-tool="autospeak" title="הקראה אוטומטית">🔊</button>
          <button class="iconbtn ${S.settings.showTr?'speaking':''}" data-tool="translate" title="תרגום">🌐</button>
        </div>
      </div>
      <div class="msgs" id="msgs">${chatMessagesHTML()}</div>
      <div class="composer">
        <div class="composer-tools">
          <button class="mini-chip" data-tool="hint">💡 רמז חכם</button>
          <button class="mini-chip" data-tool="fix">🛠 שפר את המשפט שלי</button>
          <button class="mini-chip" data-tool="question">❓ שאלה מעניינת</button>
          <button class="mini-chip" data-tool="phrases">📖 ביטויים</button>
          <button class="mini-chip" data-tool="translate">🌐 תרגום</button>
        </div>
        <div class="composer-row">
          <button class="mic-btn" id="chat-mic" data-act="chat-mic" title="דברי למיקרופון" aria-label="קלט קולי">🎤</button>
          <textarea id="chat-input" rows="1" placeholder="${langLabel==='צרפתית'?'Écris en français… (Enter לשליחה)':'Write in English… (Enter לשליחה)'}" aria-label="הודעה"></textarea>
          <button class="send-btn" id="chat-send" data-act="chat-send" title="שלחי" aria-label="שלחי">➤</button>
        </div>
      </div>
    </div>
  </div>`;
}
function fmt(t,clickable=false){
  const formatted=esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
  if(!clickable) return formatted;
  return formatted.split(/(<[^>]+>)/g).map(part=>part.startsWith('<')?part:part.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)*/g,word=>
    `<button class="vocab-word" type="button" data-vocab-word="${escA(word)}" aria-label="תרגום למילה ${escA(word)}">${word}</button>`
  )).join('');
}
function chatMessagesHTML(){
  const sc=scenarioById(S.chat.scenario);
  const msgs=S.chat.messages||[];
  let out=msgs.map((m,i)=>{
    if(m.role==='me'){
      return `<div class="msg me" data-mi="${i}"><div class="bubble">${fmt(m.text,true)}</div></div>`;
    }
    const retryBtn=m.canRetry&&LAST_FAILED_CHAT_TEXT?` <button class="mini-chip" data-act="chat-retry">🔄 נסה שוב עם AI</button>`:'';
    const corr=(m.error?`<div class="corr" style="border-color:rgba(255,128,128,.35);background:rgba(255,128,128,.07)">⚠️ ${esc(m.error)}${retryBtn}</div>`:'')+((m.corrections&&m.corrections.length)?`<div class="corr"><b>פידבק עדין על המשפט שלך</b>${m.corrections.map(c=>`<div class="fix">${c.wrong?`<s>${fmt(c.wrong,true)}</s> → `:''}<em>${fmt(c.right,true)}</em></div>${c.why?`<div class="tiny muted">${esc(c.why)}</div>`:''}`).join('')}</div>`:'');
    const praise=m.praise?`<div class="chat-praise">✨ ${esc(m.praise)}</div>`:'';
    const words=(m.words&&m.words.length)?`<div class="suggest" style="margin-top:5px">${m.words.slice(0,2).map(w=>`<span class="tag lime">${esc(w.en)} = ${esc(w.he)}</span>`).join('')}</div>`:'';
    const sugg=(m.suggestions&&m.suggestions.length && i===msgs.length-1 && !CHAT_BUSY)?`<div class="suggest" aria-label="הצעות לתשובה"><span class="suggest-label">💡 אפשר לענות למשל:</span>${m.suggestions.slice(0,3).map(s=>`<span class="suggestion-text"><button class="sugg-say" type="button" data-say="${escA(s)}" title="שמע/י הגייה" aria-label="השמעת הצעה">🔊</button>${fmt(s,true)}</span>`).join('')}</div>`:'';
    return `<div class="msg ai ${S.settings.showTr?'show-tr':''}" data-mi="${i}">
      ${corr}${praise}
      <div class="bubble"><span class="en">${fmt(m.text,true)}</span>${m.he?`<div class="he-tr">${esc(m.he)}</div>`:''}</div>
      <div class="bubble-actions">
        <button class="iconbtn ${SPEAKING_CHAT_INDEX===i?'speaking':''}" data-chat-say="${i}" title="השמעה" aria-label="השמעה" aria-pressed="${SPEAKING_CHAT_INDEX===i?'true':'false'}">🔊</button>
        <button class="iconbtn stop-btn ${SPEAKING_CHAT_INDEX===i?'':'hide'}" data-chat-stop="${i}" title="עצירת השמעה" aria-label="עצירת השמעה">⏹️</button>
        <button class="iconbtn" data-chat-tr="${i}" title="תרגום" aria-label="תרגום">🌐</button>
      </div>
      ${words}${sugg}
    </div>`;
  }).join('');
  if(CHAT_BUSY) out+=`<div class="msg ai"><div class="bubble typing-bubble"><span class="typing"><i></i><i></i><i></i></span><span class="tiny muted" style="margin-inline-start:8px">${esc(sc?.who||'המאמנת')} חושב/ת…</span></div></div>`;
  return out;
}
function mountChat(){
  const inp=$('#chat-input');
  if(inp){
    inp.addEventListener('input',()=>{ inp.style.height='auto'; inp.style.height=Math.min(120,inp.scrollHeight)+'px'; });
    inp.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendChat(); } });
  }
  if(!CHAT_INIT){
    CHAT_INIT=true;
    document.addEventListener('click',chatDelegatedClick);
  }
  scrollChat();
}
function scrollChat(){
  const box=$('#msgs'); if(box) box.scrollTop=box.scrollHeight;
}
function renderChatMessages(){
  const box=$('#msgs'); if(!box) return;
  box.innerHTML=chatMessagesHTML();
  personalizeVisibleText(box);
  scrollChat();
}

/* ================= sending ================= */
function speakChatReplyIfEnabled(replyText, chatIndex){
  if(!S.settings.autoSpeak && !VOICE_HANDS_FREE) return;
  speak(replyText, undefined, {
    chatIndex,
    onDone: () => {
      if(VOICE_HANDS_FREE && location.hash.startsWith('#/chat/') && !CHAT_BUSY && !RECOGNIZER){
        setTimeout(() => {
          if(VOICE_HANDS_FREE && !CHAT_BUSY && !RECOGNIZER && $('#chat-mic')) chatMic();
        }, 380);
      }
    },
  });
}
function sendChat(){
  const inp=$('#chat-input'); if(!inp) return;
  const text=inp.value.trim(); if(!text) return;
  sendText(text);
  inp.value=''; inp.style.height='auto';
}
function sendText(text, {isRetry=false, hiddenPrompt=''}={}){
  if((!text && !hiddenPrompt) || CHAT_BUSY) return;
  stopSpeaking();
  if(!isRetry && text){
    const wasFirst=!(S.chat.messages||[]).some(m=>m.role==='me');
    S.chat.messages.push({role:'me',text,ts:Date.now()});
    if(wasFirst){ S.stats.chats=(S.stats.chats||0)+1; S.chat.sessions=(S.chat.sessions||0)+1; }
    S.chat.reported=false;
    S.daily.chats=(S.daily.chats||0)+1;
    S.daily.chatXp=S.daily.chatXp||0;
    if(S.daily.chatXp<10){ addXP(2,$('#chat-shell')); S.daily.chatXp+=2; }
    markActive(); saveNow();
  }
  CHAT_BUSY=true;
  renderChatMessages();
  if(canUseAI()){
    aiTurn(text, hiddenPrompt).then(res=>{
      CHAT_BUSY=false;
      LAST_FAILED_CHAT_TEXT='';
      if(text) recordAdaptiveChatTurn(text,res);
      appendAI(res);
      speakChatReplyIfEnabled(res.reply, (S.chat.messages||[]).length-1);
    }).catch(err=>{
      CHAT_BUSY=false;
      LAST_FAILED_CHAT_TEXT=text||'';
      // Never permanently lock out AI on a single transient hiccup; gracefully fall back for this turn only.
      if(err && (err.status===503 || err.status===502 || err.name==='AbortError')){
        const fallbackRes={...localCoachReply(text||'Hello'), error:'הייתה הפרעה רגעית בחיבור ל-AI – עניתי במצב מקומי, ואפשר לנסות שוב.', canRetry:Boolean(text)};
        if(text) recordAdaptiveChatTurn(text,fallbackRes);
        appendAI(fallbackRes);
        return;
      }
      appendAI({reply:'I had a brief connection hiccup. Let\'s keep going — you can retry or send your next thought!',he:'הייתה בעיית חיבור קצרה. אפשר לנסות שוב או להמשיך!',corrections:[],suggestions:[],words:[],error:apiErrorHe(err),canRetry:Boolean(text)});
    });
  }else{
    setTimeout(()=>{
      CHAT_BUSY=false;
      const res=localCoachReply(text||'Hello');
      if(text) recordAdaptiveChatTurn(text,res);
      appendAI(res);
      speakChatReplyIfEnabled(res.reply, (S.chat.messages||[]).length-1);
    },450);
  }
}
function appendAI(res){
  const words=(res.words||[]).slice(0,2);
  words.forEach(w=>{ if(w&&w.en) S.chat.learned[w.en]=w.he||''; });
  S.chat.messages.push({
    role:'ai', text:res.reply||'…', he:res.translation||res.he||'',
    corrections:res.corrections||[], suggestions:res.suggestions||[], words,
    praise:res.praise||'', error:res.error||'', canRetry:Boolean(res.canRetry), ts:Date.now()
  });
  if(S.chat.messages.length>80) S.chat.messages=S.chat.messages.slice(-80);
  saveNow(); renderChatMessages();
}
function apiErrorHe(err){
  const c=err&&err.apiCode;
  if(err&&err.status===401) return 'צריך להתחבר לחשבון תלמיד כדי להשתמש במאמנת המקוונת.';
  if(err&&err.name==='AbortError') return 'הבקשה לקחה יותר מדי זמן. נסי שוב.';
  if(c===401||c===403) return 'המפתח לא תקין או שאין הרשאה. בדקי את המפתח בהגדרות.';
  if(c===429) return 'עומס רגעי בשירות ה-AI. המתיני שתי שניות ונסי שוב.';
  if(c===400) return 'הבקשה לא התקבלה – בדקי את הגדרת המודל.';
  if(c===0) return 'אין חיבור אינטרנט כרגע.';
  if(c===404) return 'כתובת ה-API לא נמצאה.';
  return 'הפרעת חיבור רגעית ('+(err?.status||c||'?')+'). אפשר לנסות שוב.';
}
async function aiTurn(userText, hiddenPrompt=''){
  const sc=scenarioById(S.chat.scenario)||SCENARIOS[SCENARIOS.length-1];
  const sys=buildSystemPrompt(sc);
  const msgs=[{role:'system',content:sys}];
  (S.chat.messages||[]).slice(-16).forEach(m=>{
    if(m.role==='me') msgs.push({role:'user',content:m.text});
    else msgs.push({role:'assistant',content:m.text});
  });
  if(hiddenPrompt) msgs.push({role:'user',content:hiddenPrompt});

  const data=await window.apiSync.aiChat(msgs,{temperature:0.75,max_tokens:950});
  if(!data.choices?.[0]?.message?.content) throw new Error('empty response');
  return parseAI(data.choices[0].message.content);
}
function buildSystemPrompt(sc){
  const level=S.settings.level||'A1';
  const style={gentle:'Only correct 1 clear error that affects meaning; ignore tiny slips. Keep tone extra warm.',balanced:'Correct up to 2 clear grammar or phrasing mistakes concisely, and offer a natural way to say it.',strict:'Correct up to 3 mistakes including word choice, tense, and natural phrasing.'}[S.settings.correction]||'Correct up to 2 clear mistakes concisely.';
  const target=(sc.words||[]).map(w=>w.en).join(', ');
  const learnerName=S.name||'the learner';
  const learningLanguage=CURRENT_LEARNER_PROFILE.learningLanguage||'English';
  const explanationLanguage=CURRENT_LEARNER_PROFILE.uiLanguage==='es'?'Spanish':CURRENT_LEARNER_PROFILE.uiLanguage==='en'?'English':'Hebrew';
  const levelGuidance=level==='A1'||level==='A1+'
    ? `Keep ${learningLanguage} crisp, clear, and accessible (short natural sentences, high-frequency everyday words).`
    : level==='A2'
      ? `Use natural everyday ${learningLanguage} with simple past, future, and light connectors — engaging, never childish.`
      : `Use authentic, intelligent, expressive ${learningLanguage} appropriate for CEFR ${level} with vivid vocabulary and subtle nuance.`;
  const genderGuidance=explanationLanguage==='Hebrew'
    ?(CURRENT_LEARNER_GENDER==='male'?'The learner is male. Always use masculine singular Hebrew in translation, explanations, and praise.':'The learner is female. Always use feminine singular Hebrew in translation, explanations, and praise.')
    :`Use respectful, natural forms of address in ${explanationLanguage}.`;
  const learnerInterests=CURRENT_LEARNER_PROFILE.interests.length
    ? CURRENT_LEARNER_PROFILE.interests.join(', ')
    : 'everyday life, stories, travel, and fun discoveries';
  const levelTarget=CURRENT_LEARNER_PROFILE.targetLevel&&CURRENT_LEARNER_PROFILE.targetLevel!==level
    ? `Stretch gently toward CEFR ${CURRENT_LEARNER_PROFILE.targetLevel}.`
    : '';
  const adaptiveSum=learnerAdaptiveSummary();
  const adaptiveCoachingNotes=[
    adaptiveSum.weakRules.length?`Grammar to model naturally (without lecturing): ${adaptiveSum.weakRules.map(r=>r.title).join(', ')}.`:'',
    adaptiveSum.weakWords.length?`Words to weave in naturally if relevant: ${adaptiveSum.weakWords.slice(0,4).map(w=>w.en).join(', ')}.`:'',
    adaptiveSum.discoveredInterests.length?`Interests mentioned earlier: ${adaptiveSum.discoveredInterests.join(', ')}.`:''
  ].filter(Boolean).join(' ');

  return `You are ${sc.who}, a ${sc.role}, having a lively, intelligent, genuinely human ${learningLanguage} conversation with ${learnerName}.
${genderGuidance}
Scenario: ${sc.title} — ${sc.desc}. Learner interests: ${learnerInterests}. ${levelTarget} ${adaptiveCoachingNotes}
Target vocabulary to weave in organically when it fits: ${target}.

CONVERSATIONAL INTELLIGENCE & FLOW:
1. Listen closely and react specifically to the substance, humor, or emotion of what ${learnerName} actually said! Never start with generic filler like "Great job!" or "That's interesting!" every turn.
2. Remember details ${learnerName} mentioned earlier in this chat and build continuity like a smart, attentive friend.
3. If ${learnerName} asks YOU a question, answer it thoughtfully and playfully first before asking your follow-up.
4. Use subtle conversational recasting: if they made a small mistake, echo their idea smoothly using the natural phrasing inside your reply, while logging the concrete fix in "corrections".
5. Keep your spoken reply smooth and natural for text-to-speech: 2–3 crisp, conversational sentences ending with ONE genuinely curious, open-ended question that invites a real answer (not just yes/no). Avoid markdown, bullet lists, or emojis inside "reply".
6. CEFR ${level}: ${levelGuidance}
7. Correction style: ${style}
8. If the learner writes in ${CURRENT_LEARNER_PROFILE.nativeLanguage||'Hebrew'}, understand them warmly, reply in ${learningLanguage}, and show how to express that exact thought naturally in "corrections" or "suggestions".
9. Keep everything age-appropriate, truthful (say "I'm not sure" instead of inventing facts), and encouraging.

Return ONLY one valid JSON object (no markdown fences, no text outside JSON):
{"reply":"natural spoken ${learningLanguage} reply, 2-3 sentences, ending with one engaging question","translation":"natural translation of reply into ${explanationLanguage}","corrections":[{"wrong":"learner's exact phrase","right":"natural corrected ${learningLanguage}","why":"clear, friendly 4-12 word tip in ${explanationLanguage}"}],"suggestions":["natural reply 1 in ${learningLanguage}","natural reply 2 in ${learningLanguage}","natural reply 3 in ${learningLanguage}"],"words":[{"en":"1-2 useful words/phrases from your reply","he":"accurate meaning in ${explanationLanguage}"}],"praise":"short, specific encouragement in ${explanationLanguage} (or empty string if none needed)"}

Field rules:
- "corrections": 0 to 2 real improvements from the learner's latest message. Use [] if the sentence is already natural!
- "suggestions": exactly 3 varied, natural replies at CEFR ${level} that directly answer your question (one simple, one expressive, one playful/curious).
- "words": 1 to 2 genuinely useful words/expressions from your reply.
- "reply" and "suggestions" MUST be purely in ${learningLanguage}. "translation", "why", and "praise" MUST be in ${explanationLanguage}.`;
}
function parseAI(raw){
  let t=String(raw).trim().replace(/^```(json)?/i,'').replace(/```$/,'').trim();
  let obj=null;
  const a=t.indexOf('{'), b=t.lastIndexOf('}');
  if(a>=0&&b>a){
    try{ obj=JSON.parse(t.slice(a,b+1)); }catch(e){
      try{ obj=JSON.parse(t.slice(a,b+1).replace(/,\s*}/g,'}').replace(/,\s*]/g,']')); }catch(e2){}
    }
  }
  if(!obj){
    const m=t.match(/"reply"\s*:\s*"((?:\\.|[^"\\])*)"/);
    if(m){
      try{
        const reply=JSON.parse('"'+m[1]+'"');
        const taxi=t.match(/"translation"\s*:\s*"((?:\\.|[^"\\])*)"/);
        const translation=taxi?JSON.parse('"'+taxi[1]+'"'):'';
        return {reply,translation,corrections:[],suggestions:[],words:[],praise:''};
      }catch(e){}
    }
    return {reply:t.replace(/^["']|["']$/g,'').slice(0,1200)||'Tell me more about that — what happened next?',translation:'',corrections:[],suggestions:[],words:[],praise:''};
  }
  const cleanArr=x=>Array.isArray(x)?x.filter(Boolean):[];
  const corrections=cleanArr(obj.corrections).map(c=>{
    if(typeof c==='string') return {wrong:'',right:c,why:''};
    return {wrong:String(c.wrong||c.original||''),right:String(c.right||c.correct||c.corrected||''),why:String(c.why||c.explanation||'')};
  }).filter(c=>c.right).slice(0,3);
  const suggestions=cleanArr(obj.suggestions).map(s=>typeof s==='string'?s:String(s.text||s.reply||'')).filter(Boolean).slice(0,3);
  const words=cleanArr(obj.words).map(w=>typeof w==='string'?{en:w,he:''}:{en:String(w.en||w.word||''),he:String(w.he||w.meaning||'')}).filter(w=>w.en).slice(0,2);
  return {
    reply:String(obj.reply||obj.message||'').trim()||'That sounds really interesting! What do you think about it?',
    translation:String(obj.translation||obj.hebrew||''),
    corrections,suggestions,words,praise:String(obj.praise||'')
  };
}

/* ================= local coach ================= */
function localCorrections(text){
  const found=[]; const seen=new Set();
  for(const rule of LOCAL_FIXES){
    const m=text.match(rule.re);
    if(m){
      const right=rule.fix(m);
      const wrong=m[0];
      if(!right||normEN(right)===normEN(wrong)) continue;
      const k=wrong.toLowerCase();
      if(seen.has(k)) continue;
      seen.add(k);
      found.push({wrong,right,why:rule.why});
      if(found.length>=2) break;
    }
  }
  return found;
}
function localCoachReply(text){
  const sc=scenarioById(S.chat.scenario)||SCENARIOS[SCENARIOS.length-1];
  const lower=String(text||'').toLowerCase().trim();
  const hebrew=/[\u0590-\u05FF]/.test(text);
  const words=text.trim().split(/\s+/).filter(Boolean);
  let corrections=hebrew?[]:localCorrections(text);
  let step=sc.steps[Math.min(S.chat.localTurn,sc.steps.length-1)]||{bot:'Tell me more about that!',he:'ספרי לי עוד על זה!',suggestions:[]};
  let reply, he, suggestions;
  if(S.chat.localTurn<sc.steps.length){
    reply=step.bot; he=step.he; suggestions=(step.suggestions||[]).slice();
  }else{
    const moreList=sc.more&&sc.more.length?sc.more:['Tell me more about why you think that!'];
    const more=moreList[S.chat.localTurn%moreList.length];
    reply=more; he='ספרי לי עוד על זה – מה דעתך?'; suggestions=['I think it is really interesting because it feels new.','I tried something like that recently!','What do you think about it?'];
  }
  S.chat.localTurn++;

  if(hebrew){
    const example=suggestions[0]||'I want to share my idea in English.';
    reply=`I understood what you mean! In English you can try: "${example}". ${reply}`;
    he=`הבנתי לגמרי! באנגלית אפשר לומר למשל: "${example}". ${he}`;
    corrections=[];
  }else if(/\?$/.test(lower)){
    reply=`Good question! I love when you ask back. Honestly, I think it depends on the day — ${reply}`;
    he=`שאלה מעולה! אני אוהבת שאת שואלת חזרה. ${he}`;
  }else if(/^(hi|hello|hey|bonjour|salut)\b/.test(lower) && words.length<=3){
    reply=`Hey ${S.name||''}! Great to chat with you. ${reply}`;
    he=`היי ${S.name||''}! כיף לדבר איתך. ${he}`;
  }else if(words.length<3){
    const example=suggestions[0]||'I really like it because it is fun.';
    reply=`Nice start! Try stretching it into a full sentence, like "${example}". ${reply}`;
    he=`התחלה טובה! נסי להרחיב למשפט שלם, למשל: "${example}". ${he}`;
  }
  const scWords=(sc.words||[]).filter(w=>!S.chat.learned[w.en]).slice(0,1);
  const praise=corrections.length?'כל הכבוד על הניסיון – שווה להציץ בתיקון העדין למעלה.':`יפה מאוד, ${S.name||'תלמידה'}! זרימה טבעית וברורה.`;
  return {reply,translation:he,corrections,suggestions,words:scWords,praise};
}
function askCorrection(){
  const msgs=S.chat.messages||[];
  const last=[...msgs].reverse().find(m=>m.role==='me');
  if(!last){ toast('עוד לא כתבת הודעה'); return; }
  if(canUseAI()){
    sendText('', {
      isRetry: true,
      hiddenPrompt: `The learner clicked "Improve my sentence". Review their last message ("${last.text}") warmly: show a more natural/fluent way to phrase it in "corrections" with a short explanation, compliment what worked well in "praise", and gently continue the conversation with one short question.`,
    });
    return;
  }
  const fixes=localCorrections(last.text);
  appendAI({
    reply:'Here is my feedback on your last message. Keep going — you are building real fluency!',
    translation:'הנה הפידבק שלי על ההודעה האחרונה שלך. המשיכי כך – השטף שלך משתפר!',
    corrections:fixes.length?fixes:[{wrong:'',right:last.text,why:'לא מצאתי טעות ברורה – המשפט תקין. כל הכבוד!'}],
    suggestions:[],words:[],praise:fixes.length?'':'משפט מדויק!'
  });
}

/* ================= report ================= */
function showChatReport(){
  const sc=scenarioById(S.chat.scenario);
  const msgs=S.chat.messages||[];
  const turns=msgs.filter(m=>m.role==='me').length;
  const corrections=msgs.reduce((a,m)=>a+((m.corrections&&m.corrections.length)||0),0);
  const learned=Object.entries(S.chat.learned||{});
  const score=clamp(55+turns*5-Math.min(25,corrections*2),25,100);
  if(!S.chat.reported && turns>0){
    addXP(turns>=3?20:10,$('#chat-shell'));
    S.chat.reported=true;
    S.chat.history=S.chat.history||[];
    S.chat.history.unshift({scenario:sc?sc.id:'free',date:Date.now(),turns,corrections,score,words:learned.length});
    S.chat.history=S.chat.history.slice(0,8);
    checkBadges();
  }
  saveNow();
  openModal(`<button class="x" data-close>✕</button>
    <div class="center"><span class="tag lime">דוח שיחה</span></div>
    <h3 style="text-align:center;margin-top:8px">${sc?sc.icon+' '+sc.title:'שיחה'}</h3>
    <div class="result-hero" style="padding:10px 0 4px"><div class="result-score" style="font-size:3rem">${score}</div><div class="tiny muted">ציון שיחה</div></div>
    <div class="grid three" style="text-align:center">
      <div class="stat-chip"><b>${turns}</b><br><span class="tiny">תשובות שלך</span></div>
      <div class="stat-chip"><b>${corrections}</b><br><span class="tiny">תיקונים שקיבלת</span></div>
      <div class="stat-chip"><b>${learned.length}</b><br><span class="tiny">מילים חדשות</span></div>
    </div>
    <div class="fact" style="margin-top:12px">${turns===0?'עוד לא כתבת הודעה. גם משפט קצר הוא התחלה!':score>=80?'שיחה חזקה! את משתמשת בשפה בביטחון.':'כל שיחה כזו משפרת את הזרימה. שימי לב לתיקונים – הם הזהב שלך.'}</div>
    ${learned.length?`<div class="section-head" style="margin-top:14px"><h2>📚 מילים מהשיחה</h2></div><div class="row">${learned.slice(0,8).map(([en,he])=>`<span class="tag">${esc(en)}${he?' = '+esc(he):''}</span>`).join('')}</div>`:''}
    ${corrections?`<div class="small muted" style="margin-top:10px">התיקונים מופיעים מתחת להודעות המאמנת בשיחה – אפשר לחזור אליהם בכל רגע.</div>`:''}
    <div class="row" style="margin-top:16px">
      ${learned.length?`<button class="btn primary" data-chat-learn style="flex:1">➕ הוסיפי ${learned.length} מילים לחזרה</button>`:''}
    </div>
    <div class="row" style="margin-top:8px">
      <button class="btn ghost" data-go="#/review">🔁 לחזרה</button>
      <button class="btn ghost" data-act="chat-new">✚ שיחה חדשה</button>
      <button class="btn ghost" data-close>סגור</button>
    </div>`);
}
function addChatWordsToReview(){
  const learned=S.chat.learned||{};
  let added=0;
  Object.entries(learned).forEach(([en,he])=>{
    const key=String(en).toLowerCase();
    if(!he) return;
    if(!ALL_WORDS[key]){
      const w={en,he,ex:'From your conversation: '+en+'.',exHe:'מהשיחה שלך.',pron:''};
      ALL_WORDS[key]=w; ALL_WORD_LIST.push(w);
    }
    if(!S.words[key]){
      S.words[key]={box:0,due:Date.now()+DAY,seen:1,correct:0,wrong:0,last:Date.now(),key,en,he};
      added++;
    }
    if(!S.words[key].en) S.words[key].en=en;
    if(!S.words[key].he) S.words[key].he=he;
    if(!S.words[key].key) S.words[key].key=key;
  });
  saveNow(); toast(added?`➕ ${added} מילים נכנסו למעגל החזרה`:'המילים כבר במעגל');
  closeModal();
}

/* ================= chat events ================= */
function chatDelegatedClick(e){
  const stop=e.target.closest('[data-chat-stop]');
  if(stop){ stopSpeaking(); e.stopPropagation(); return; }
  const say=e.target.closest('[data-chat-say]');
  if(say){
    const i=+say.dataset.chatSay;
    if(SPEAKING_CHAT_INDEX===i && window.speechSynthesis?.speaking){
      stopSpeaking();
    }else{
      const m=S.chat.messages[i];
      if(m) speak(m.text,undefined,{chatIndex:i});
    }
    e.stopPropagation();
    return;
  }
  const tr=e.target.closest('[data-chat-tr]');
  if(tr){ const i=+tr.dataset.chatTr; const el=document.querySelector('.msg[data-mi="'+i+'"]'); if(el) el.classList.toggle('show-tr'); e.stopPropagation(); return; }
  const corr=e.target.closest('[data-set-corr]');
  if(corr){ S.settings.correction=corr.dataset.setCorr; saveNow(); render(); return; }
  const tool=e.target.closest('[data-tool]');
  if(tool){ chatTool(tool.dataset.tool); return; }
  if(e.target.closest('[data-chat-learn]')){ addChatWordsToReview(); return; }
}
function chatTool(tool){
  if(tool==='translate'){
    S.settings.showTr=!S.settings.showTr; saveNow();
    document.querySelectorAll('.msg.ai').forEach(m=>m.classList.toggle('show-tr',S.settings.showTr));
    $('[data-tool="translate"]')?.classList.toggle('speaking',S.settings.showTr);
    toast(S.settings.showTr?'🌐 תרגום מוצג':'תרגום מוסתר');
  }else if(tool==='autospeak'){
    S.settings.autoSpeak=!S.settings.autoSpeak; saveNow();
    $('[data-tool="autospeak"]')?.classList.toggle('speaking',S.settings.autoSpeak);
    toast(S.settings.autoSpeak?'🔊 המאמנת תקריא תשובות בקול טבעי':'הקראה אוטומטית כבויה');
  }else if(tool==='handsfree'){
    VOICE_HANDS_FREE=!VOICE_HANDS_FREE;
    if(VOICE_HANDS_FREE) S.settings.autoSpeak=true;
    saveNow();
    $('[data-tool="handsfree"]')?.classList.toggle('speaking',VOICE_HANDS_FREE);
    $('[data-tool="autospeak"]')?.classList.toggle('speaking',S.settings.autoSpeak);
    toast(VOICE_HANDS_FREE?'🎧 מצב שיחה קולית רציפה פעיל — המאמנת תקריא ותאזין אוטומטית':'מצב שיחה רציפה כבוי');
  }else if(tool==='speed'){
    const rates=[0.82,0.95,1.08];
    const cur=Number(S.settings.ttsRate)||0.95;
    const nextIdx=(rates.findIndex(r=>Math.abs(r-cur)<0.06)+1)%rates.length;
    S.settings.ttsRate=rates[nextIdx];
    saveNow();
    const btn=$('[data-tool="speed"]');
    if(btn) btn.textContent=`${S.settings.ttsRate}×`;
    toast(`⚡ מהירות דיבור: ${S.settings.ttsRate}×`);
  }else if(tool==='settings'){ openSettings();
  }else if(tool==='hint'){
    if(canUseAI()){
      sendText('', {
        isRetry: true,
        hiddenPrompt: 'The learner asked for a helpful hint to answer your last question. Give a brief encouraging nudge and 3 fresh, clear example replies at their exact CEFR level in "suggestions".',
      });
      return;
    }
    const sc=scenarioById(S.chat.scenario);
    const step=sc&&sc.steps[Math.min(S.chat.localTurn,sc.steps.length-1)];
    const s=step&&step.suggestions&&step.suggestions[0];
    appendAI({reply:s?`Try saying: "${s}"`:'Take your time. Try a short sentence about what you think.',translation:s?'נסי לומר: '+s:'קחי את הזמן. נסי משפט קצר על מה שאת חושבת.',corrections:[],suggestions:step?step.suggestions:[],words:[],praise:''});
  }else if(tool==='fix'){ askCorrection();
  }else if(tool==='question'){
    const sc=scenarioById(S.chat.scenario);
    const interests=CURRENT_LEARNER_PROFILE.interests?.length
      ? CURRENT_LEARNER_PROFILE.interests.join(', ')
      : (sc?.title||'everyday life');
    if(canUseAI()){
      sendText('', {
        isRetry: true,
        hiddenPrompt: `Ask the learner one genuinely intriguing, fun, open-ended question in ${CURRENT_LEARNER_PROFILE.learningLanguage||'English'} related to the current scenario (${sc?.title||'free chat'}) or their interests (${interests}). Keep it at CEFR ${S.settings.level||'A1'}.`,
      });
    }else{
      const q=(sc&&sc.more&&sc.more[Math.floor(Math.random()*sc.more.length)])||'What is something cool you learned or enjoyed recently?';
      appendAI({reply:q,translation:'שאלה מעניינת בשבילך – עני במשפט מלא!',corrections:[],suggestions:[],words:[],praise:''});
      S.chat.localTurn++;
    }
  }else if(tool==='phrases'){
    openModal(`<button class="x" data-close>✕</button><h3>📖 ביטויים שיעזרו לך</h3><p class="small muted">קראי או האזיני לביטויים. כדי לתרגל, אמרי אותם בעצמך או הקלידי אותם.</p>
      <div class="col" style="margin-top:10px">${QUICK_PHRASES.map(q=>`<div class="word"><div class="word-main"><span class="en" style="font-weight:700">${esc(q.en)}</span><span class="word-he">${esc(q.he)}</span></div>${speakBtn(q.en)}</div>`).join('')}</div>
      <button class="btn primary wide" style="margin-top:10px" data-close>חזרה לשיחה</button>`);
  }
}
function handleChatAction(a,el){
  if(a==='chat-send') sendChat();
  else if(a==='chat-mic') chatMic();
  else if(a==='chat-report') showChatReport();
  else if(a==='chat-retry'){
    if(LAST_FAILED_CHAT_TEXT && !CHAT_BUSY){
      AI_AVAILABLE=true;
      sendText(LAST_FAILED_CHAT_TEXT, {isRetry:true});
    }
  }
  else if(a==='chat-new'){
    if((S.chat.messages||[]).length>2 || confirm('להתחיל שיחה חדשה? השיחה הנוכחית תישאר בהיסטוריה.')){
      stopSpeaking();
      closeModal();
      S.chat.scenario=''; S.chat.messages=[]; S.chat.localTurn=0; S.chat.learned={}; S.chat.reported=false;
      saveNow(); go('#/chat');
    }
  }
}
function chatMic(){
  if(RECOGNIZER){ RECOGNIZER.stop(); RECOGNIZER=null; setChatMicState(false); return; }
  stopSpeaking();
  setChatMicState(true);
  RECOGNIZER=listenOnce(learningSpeechLocale(),alts=>{
    const heard=(alts&&alts[0])||'';
    const inp=$('#chat-input');
    if(inp&&heard){
      inp.value=heard;
      inp.style.height='auto';
      inp.style.height=Math.min(120,inp.scrollHeight)+'px';
      inp.focus();
    }
    if(heard) setTimeout(()=>{ if($('#chat-input')&&$('#chat-input').value.trim()) sendChat(); },320);
  },err=>{
    if(err!=='no-speech'||!VOICE_HANDS_FREE) toast(microphoneErrorText(err));
  },()=>{
    RECOGNIZER=null;
    setChatMicState(false);
  },interim=>{
    const inp=$('#chat-input');
    if(inp&&interim){
      inp.value=interim;
      inp.style.height='auto';
      inp.style.height=Math.min(120,inp.scrollHeight)+'px';
    }
  });
}
boot();
