/* ============================================================
   LAMDA — Built-in Continuation Modules (Stage 2 & Stage 3)
   Unlocks seamlessly when a learner completes all units/tasks
   or passes the module exam, keeping progress moving forward.
   ============================================================ */
(function () {
  'use strict';

  function makeUnit(cfg) {
    return {
      id: cfg.id,
      n: cfg.n,
      icon: cfg.icon,
      color: cfg.color,
      cefr: cfg.cefr,
      title: cfg.title,
      he: cfg.he,
      lead: cfg.lead,
      canDo: cfg.canDo,
      fact: cfg.fact,
      rules: cfg.rules,
      words: cfg.words,
      reading: cfg.reading,
      grammar: cfg.grammar,
      scenario: cfg.scenario,
    };
  }

  /* ---------------- English A1+ (Continuation Stage 2 for A1 learners) ---------------- */
  const EN_STAGE2_A1P = {
    stage: 2,
    level: 'A1+',
    title: 'מודול המשך 1 · סיפורים, עבר ותוכניות (A1+)',
    subtitle: 'עליית שלב ראשונה: מספרים על מה שקרה, מתכננים קדימה ומשווים בין דברים.',
    units: [
      makeUnit({
        id: 'm2u1', n: 1, icon: '🕰️', color: 'pink', cefr: 'A1+',
        title: 'Yesterday & Stories (Past Simple)',
        he: 'מה קרה אתמול? · Past Simple',
        lead: 'לומדים לספר על סוף השבוע ועל חוויות מהעבר בעזרת פעלים רגילים (-ed) ופעלים שימושיים כמו went, saw, had.',
        canDo: ['לספר מה עשית אתמול ובסוף השבוע', 'להשתמש ב-ed ובפעלים נפוצים בעבר', 'לשאול שאלות בעבר עם Did you...?'],
        fact: 'באנגלית, אותם פעלים בעבר נשארים זהים לכל הגופים: I went, she went, they went — בלי s!',
        rules: [
          {
            id: 'm2-past-reg',
            title: 'עבר פשוט – Past Simple (+ed ופעלים נפוצים)',
            short: 'פועל + ed / went, saw, had, played',
            formula: 'I / You / He / She / We / They + Verb-ed\nשאלה: Did + גוף + פועל בסיסי?\nשלילה: didn\'t + פועל בסיסי',
            body: 'כדי לספר על פעולה שהסתיימה בעבר (אתמול, בשבוע שעבר), מוסיפים <b>-ed</b> לפעלים רגילים (played, jumped, visited). יש גם פעלים יוצאי דופן חשובים שכדאי להכיר: <b>go → went</b>, <b>see → saw</b>, <b>have → had</b>.',
            examples: [
              { en: 'Yesterday I played a funny game with my friends.', he: 'אתמול שיחקתי במשחק מצחיק עם החברים שלי.' },
              { en: 'We went to the park and saw two cute dogs.', he: 'הלכנו לפארק וראינו שני כלבים חמודים.' },
              { en: 'Did you enjoy the movie?', he: 'האם נהנית מהסרט?' },
            ],
            mistake: 'Did you <b>went</b>? → Did you <b>go</b>? (אחרי Did הפועל חוזר לצורת הבסיס!)',
            hook: 'Did גונב את העבר מהפועל — לכן הפועל שאחריו תמיד נשאר נקי.',
          },
        ],
        words: [
          { en: 'yesterday', he: 'אתמול', pron: 'YES-ter-day', ex: 'Yesterday we walked by the beach.', exHe: 'אתמול טיילנו ליד החוף.' },
          { en: 'weekend', he: 'סוף שבוע', pron: 'WEEK-end', ex: 'My weekend was relaxing and fun.', exHe: 'סוף השבוע שלי היה רגוע וכיפי.' },
          { en: 'visited', he: 'ביקרתי / ביקר', pron: 'VIZ-it-id', ex: 'We visited a small nature reserve.', exHe: 'ביקרנו בשמורת טבע קטנה.' },
          { en: 'enjoyed', he: 'נהניתי / נהנה', pron: 'en-JOYD', ex: 'I really enjoyed the music class.', exHe: 'ממש נהניתי משיעור המוזיקה.' },
          { en: 'adventure', he: 'הרפתקה', pron: 'ad-VEN-cher', ex: 'Our trip felt like a big adventure.', exHe: 'הטיול שלנו הרגיש כמו הרפתקה גדולה.' },
          { en: 'memory', he: 'זיכרון', pron: 'MEM-uh-ree', ex: 'That day is my favorite memory.', exHe: 'היום הזה הוא הזיכרון האהוב עליי.' },
        ],
        reading: {
          title: 'A Surprise Saturday',
          passage: 'Last Saturday, Maya and her brother went to a nature park near the hills. The weather was sunny and cool. They walked along a green path, watched colorful birds, and took funny photos. At noon, they had a picnic under a huge tree. Maya enjoyed the adventure so much that she wrote about it in her notebook.',
          vocabulary: [
            { en: 'Saturday', he: 'יום שבת' }, { en: 'nature', he: 'טבע' }, { en: 'weather', he: 'מזג אוויר' },
            { en: 'path', he: 'שביל' }, { en: 'birds', he: 'ציפורים' }, { en: 'picnic', he: 'פיקניק' },
            { en: 'huge', he: 'ענק' }, { en: 'adventure', he: 'הרפתקה' }, { en: 'notebook', he: 'מחברת' },
          ],
          questions: [
            { q: 'Where did Maya go last Saturday?', opts: ['To a nature park', 'To a shopping mall', 'To a library'], ans: 'To a nature park', why: 'בפסקה כתוב: went to a nature park near the hills.' },
            { q: 'What did they do at noon?', opts: ['They had a picnic', 'They watched a movie', 'They went home early'], ans: 'They had a picnic', why: 'כתוב: At noon, they had a picnic under a huge tree.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2u1.x1', skill: 'grammar', rule: 'm2-past-reg', q: 'Yesterday we ___ to the park together.', opts: ['went', 'go', 'going'], ans: 'went', why: 'Yesterday מציין עבר, והעבר של go הוא went.', hint: 'העבר של go.' },
          { t: 'gap', id: 'm2u1.x2', skill: 'grammar', rule: 'm2-past-reg', q: 'השלימי את השאלה בעבר:', sentence: '___ you watch the show yesterday?', ans: ['Did'], why: 'שאלות ב-Past Simple מתחילות ב-Did.', hint: 'מילת עזר לשאלה בעבר.' },
          { t: 'type', id: 'm2u1.x3', skill: 'grammar', rule: 'm2-past-reg', q: 'הטי לעבר: I ___ (enjoy) the weekend.', ans: ['enjoyed'], why: 'פועל רגיל בעבר מקבל -ed.', hint: 'enjoy + ed.' },
          { t: 'scr', id: 'm2u1.x4', skill: 'grammar', rule: 'm2-past-reg', q: 'סדרי את המשפט: ראינו ציפורים צבעוניות אתמול.', sentence: 'We saw colorful birds yesterday.', ans: ['We saw colorful birds yesterday.'], why: 'נושא + פועל בעבר + מושא + זמן.', hint: 'מתחילים ב-We saw.' },
          { t: 'mcq', id: 'm2u1.x5', skill: 'grammar', rule: 'm2-past-reg', q: 'איזה משפט שלילה נכון בעבר?', opts: ['She didn\'t go to school.', 'She didn\'t went to school.', 'She not went to school.'], ans: 'She didn\'t go to school.', why: 'אחרי didn\'t הפועל תמיד חוזר לצורת הבסיס (go).', hint: 'didn\'t + פועל בסיסי.' },
        ],
        scenario: {
          title: 'סיפור מסוף השבוע', en: 'Weekend Catch-Up', who: 'Maya', role: 'חברה סקרנית שאוהבת לשמוע סיפורים',
          desc: 'ספרי למאיה מה עשית אתמול או בסוף השבוע, ותתרגלי Past Simple בכיף.', focus: 'Past Simple',
          opening: 'Hey! I missed you! Tell me one fun thing you did over the weekend.',
          openingHe: 'היי! התגעגעתי! ספרי לי דבר אחד כיפי שעשית בסוף השבוע.',
          steps: [
            { bot: 'That sounds awesome! Who did you go with?', he: 'זה נשמע אדיר! עם מי הלכת?', suggestions: ['I went with my family.', 'I met my best friend.', 'I stayed home and relaxed.'] },
            { bot: 'What was your favorite moment from that day?', he: 'מה היה הרגע האהוב עלייך באותו יום?', suggestions: ['My favorite moment was the music.', 'I really enjoyed the food.', 'We laughed a lot together.'] },
            { bot: 'Would you do it again next weekend?', he: 'היית עושה את זה שוב בסוף השבוע הבא?', suggestions: ['Yes, I definitely want to go again!', 'Maybe next month.', 'Yes, it was a great memory.'] },
          ],
          more: ['What did you eat yesterday?', 'Did you watch anything interesting lately?', 'What made you smile this week?'],
        },
      }),
      makeUnit({
        id: 'm2u2', n: 2, icon: '🚀', color: 'purple', cefr: 'A1+',
        title: 'Future Plans (Going To)',
        he: 'תוכניות לעתיד · Going To',
        lead: 'מדברים על מה שמתכננים לעשות מחר, השבוע ובחופשה הקרובה עם am/is/are going to.',
        canDo: ['לספר על תוכניות קרובות באנגלית', 'לשאול חברים מה התוכניות שלהם', 'להשתמש בביטויי זמן לעתיד (tomorrow, next week)'],
        fact: 'באנגלית מדוברת, "going to" נשמע לעיתים קרובות כמו "gonna", אבל בכתיבה תמיד כותבים going to.',
        rules: [
          {
            id: 'm2-going-to',
            title: 'עתיד מתוכנן – be + going to + פועל',
            short: 'am / is / are + going to + verb',
            formula: 'I am going to + פועל\nHe / She / It is going to + פועל\nYou / We / They are going to + פועל',
            body: 'כשיש לנו תוכנית או כוונה לעתיד, משתמשים בפועל <b>to be</b> (am/is/are), מוסיפים <b>going to</b>, ואז את הפועל בצורת הבסיס.',
            examples: [
              { en: 'Tomorrow I am going to try a fun new challenge.', he: 'מחר אני מתכוונת לנסות אתגר חדש וכיפי.' },
              { en: 'We are going to visit the zoo next Friday.', he: 'אנחנו הולכים לבקר בגן החיות ביום שישי הבא.' },
              { en: 'Are you going to join us?', he: 'האם את מתכוונת להצטרף אלינו?' },
            ],
            mistake: 'I <b>going to</b> study. → I <b>am going to</b> study. (לא לשכוח am/is/are!)',
            hook: 'שלישיית הקסם לעתיד: be + going to + פועל.',
          },
        ],
        words: [
          { en: 'tomorrow', he: 'מחר', pron: 'tuh-MOR-oh', ex: 'Tomorrow I am going to wake up early.', exHe: 'מחר אני מתכוונת לקום מוקדם.' },
          { en: 'plan', he: 'תוכנית', pron: 'plan', ex: 'What is your plan for Friday?', exHe: 'מה התוכנית שלך ליום שישי?' },
          { en: 'excited', he: 'מתרגשת / נרגש', pron: 'ik-SY-tid', ex: 'I am so excited about the trip!', exHe: 'אני כל כך מתרגשת מהטיול!' },
          { en: 'invite', he: 'להזמין', pron: 'in-VYT', ex: 'I am going to invite three friends.', exHe: 'אני הולכת להזמין שלוש חברות.' },
          { en: 'prepare', he: 'להכין / להתכונן', pron: 'pri-PAIR', ex: 'We need to prepare snacks and water.', exHe: 'אנחנו צריכים להכין חטיפים ומים.' },
          { en: 'soon', he: 'בקרוב', pron: 'soon', ex: 'Summer vacation is coming soon.', exHe: 'החופש הגדול מגיע בקרוב.' },
        ],
        reading: {
          title: 'Planning the Perfect Day',
          passage: 'Next week is a school holiday, and Tom has a big plan. On Tuesday morning, he is going to invite his two best friends over. First, they are going to bake chocolate cookies together. Then, they are going to walk to the park and play a funny treasure hunt game. Tom is super excited because everyone is going to help prepare.',
          vocabulary: [
            { en: 'holiday', he: 'חופשה / חג' }, { en: 'invite', he: 'להזמין' }, { en: 'bake', he: 'לאפות' },
            { en: 'together', he: 'ביחד' }, { en: 'treasure', he: 'אוצר' }, { en: 'excited', he: 'נרגש' }, { en: 'prepare', he: 'להכין' },
          ],
          questions: [
            { q: 'What are Tom and his friends going to do first?', opts: ['Bake chocolate cookies', 'Go to the beach', 'Study math'], ans: 'Bake chocolate cookies', why: 'כתוב: First, they are going to bake chocolate cookies together.' },
            { q: 'Why is Tom excited?', opts: ['Everyone is going to help prepare', 'He bought a new phone', 'It is raining outside'], ans: 'Everyone is going to help prepare', why: 'כתוב: because everyone is going to help prepare.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2u2.x1', skill: 'grammar', rule: 'm2-going-to', q: 'We ___ going to invite our friends.', opts: ['are', 'is', 'am'], ans: 'are', why: 'עם We משתמשים ב-are.', hint: 'We → are.' },
          { t: 'gap', id: 'm2u2.x2', skill: 'grammar', rule: 'm2-going-to', q: 'השלימי:', sentence: 'She is going ___ prepare a surprise.', ans: ['to'], why: 'התבנית היא be + going to + פועל.', hint: 'מילה קצרה לפני הפועל.' },
          { t: 'scr', id: 'm2u2.x3', skill: 'grammar', rule: 'm2-going-to', q: 'סדרי את המשפט: מחר אני הולכת לתרגל אנגלית.', sentence: 'Tomorrow I am going to practice English.', ans: ['Tomorrow I am going to practice English.'], why: 'זמן + נושא + am going to + פועל.', hint: 'מתחילים ב-Tomorrow I am.' },
          { t: 'type', id: 'm2u2.x4', skill: 'grammar', rule: 'm2-going-to', q: 'השלימי: I ___ (be) going to visit my cousin soon.', ans: ['am'], why: 'I → am.', hint: 'I am.' },
          { t: 'mcq', id: 'm2u2.x5', skill: 'grammar', rule: 'm2-going-to', q: 'איך שואלים "מה את מתכוונת לעשות מחר?"', opts: ['What are you going to do tomorrow?', 'What you going to do tomorrow?', 'What is you going to do tomorrow?'], ans: 'What are you going to do tomorrow?', why: 'בשאלה are בא לפני you.', hint: 'What are you going to...?' },
        ],
        scenario: {
          title: 'תכנון יום חופש מושלם', en: 'Planning a Fun Day', who: 'Liam', role: 'מארגן פעילויות יצירתי',
          desc: 'תכנני עם ליאם יום חופש חלומי באמצעות going to.', focus: 'Going To (Future)',
          opening: 'Imagine we have a free day tomorrow with no homework! What are you going to do first?',
          openingHe: 'דמייני שיש לנו יום חופשי מחר בלי שיעורי בית! מה את הולכת לעשות קודם?',
          steps: [
            { bot: 'Love that idea! Who are you going to invite?', he: 'אוהב את הרעיון! את מי את מתכוונת להזמין?', suggestions: ['I am going to invite my best friend.', 'I am going to go with my family.', 'I am going to invite everyone!'] },
            { bot: 'What snacks or gear are we going to prepare?', he: 'אילו חטיפים או ציוד אנחנו הולכים להכין?', suggestions: ['We are going to prepare fruit and water.', 'I am going to bring music.', 'We are going to buy ice cream there.'] },
            { bot: 'How are we going to finish the day?', he: 'איך אנחנו הולכים לסיים את היום?', suggestions: ['We are going to watch the sunset.', 'We are going to play a game.', 'We are going to eat pizza together.'] },
          ],
          more: ['Are you going to travel anywhere soon?', 'What new skill are you going to learn this year?'],
        },
      }),
      makeUnit({
        id: 'm2u3', n: 3, icon: '⚖️', color: 'cyan', cefr: 'A1+',
        title: 'Comparisons & Favorites',
        he: 'השוואות והעדפות · Bigger & More Fun',
        lead: 'לומדים להשוות בין חיות, סרטים, מקומות ומאכלים עם -er than ו-more ... than.',
        canDo: ['להשוות בין שני דברים באנגלית', 'להסביר מה עדיף ולמה', 'להשתמש ב-better ו-the best'],
        fact: 'הברדלס (cheetah) מהיר יותר מכל חיה יבשתית אחרת — faster than a car on a city street!',
        rules: [
          {
            id: 'm2-comp',
            title: 'השוואה – Comparatives (-er than / more ... than)',
            short: 'תואר קצר + er than · תואר ארוך: more + תואר + than',
            formula: 'קצר: fast → faster than | big → bigger than\nארוך: interesting → more interesting than\nמיוחד: good → better than',
            body: 'כשמשווים בין שני דברים: לתואר קצר מוסיפים <b>-er</b> ואחריו <b>than</b>. לתואר ארוך (2 הברות ומעלה) שמים לפניו <b>more</b> ואחריו <b>than</b>.',
            examples: [
              { en: 'A dolphin is faster than a turtle.', he: 'דולפין מהיר יותר מצב.' },
              { en: 'This book is more exciting than the movie.', he: 'הספר הזה מרגש יותר מהסרט.' },
              { en: 'Summer is better than winter for swimming.', he: 'הקיץ טוב יותר מהחורף לשחייה.' },
            ],
            mistake: 'more <b>bigger</b> than → <b>bigger</b> than (לא שמים גם more וגם -er יחד!).',
            hook: 'קצר מקבל זנב (-er), ארוך מקבל קידומת (more) — ואחריהם תמיד than.',
          },
        ],
        words: [
          { en: 'faster', he: 'מהיר יותר', pron: 'FAS-ter', ex: 'A cheetah is faster than a horse.', exHe: 'ברדלס מהיר יותר מסוס.' },
          { en: 'stronger', he: 'חזק יותר', pron: 'STRON-ger', ex: 'Practice makes you stronger every day.', exHe: 'תרגול הופך אותך לחזק יותר כל יום.' },
          { en: 'better', he: 'טוב יותר', pron: 'BET-er', ex: 'Fresh fruit is better than candy.', exHe: 'פרי טרי טוב יותר מממתקים.' },
          { en: 'exciting', he: 'מרגש / מלהיב', pron: 'ik-SY-ting', ex: 'Live music is more exciting than TV.', exHe: 'מוזיקה חיה מרגשת יותר מטלוויזיה.' },
          { en: 'quiet', he: 'שקט', pron: 'KWY-it', ex: 'The forest is quieter than the city.', exHe: 'היער שקט יותר מהעיר.' },
          { en: 'prefer', he: 'להעדיף', pron: 'pri-FER', ex: 'I prefer dogs because they are friendly.', exHe: 'אני מעדיפה כלבים כי הם ידידותיים.' },
        ],
        reading: {
          title: 'City or Nature?',
          passage: 'Some people love the big city, while others prefer quiet nature. The city is louder and busier than a small village, and it has bigger shops and more restaurants. However, nature is calmer and greener than the city. Many kids think the beach is better than a mall because you can swim, run, and watch the sunset.',
          vocabulary: [
            { en: 'prefer', he: 'מעדיפים' }, { en: 'quiet', he: 'שקט' }, { en: 'louder', he: 'רועש יותר' },
            { en: 'village', he: 'כפר' }, { en: 'calmer', he: 'רגוע יותר' }, { en: 'beach', he: 'חוף ים' }, { en: 'sunset', he: 'שקיעה' },
          ],
          questions: [
            { q: 'How is nature different from the city?', opts: ['It is calmer and greener', 'It has bigger shops', 'It is louder'], ans: 'It is calmer and greener', why: 'כתוב: nature is calmer and greener than the city.' },
            { q: 'Why do many kids think the beach is better than a mall?', opts: ['You can swim and watch the sunset', 'It is closer to school', 'It has more homework'], ans: 'You can swim and watch the sunset', why: 'כתוב: because you can swim, run, and watch the sunset.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2u3.x1', skill: 'grammar', rule: 'm2-comp', q: 'A lion is ___ than a cat.', opts: ['stronger', 'more strong', 'strongest'], ans: 'stronger', why: 'strong הוא תואר קצר → stronger than.', hint: 'strong + er.' },
          { t: 'mcq', id: 'm2u3.x2', skill: 'grammar', rule: 'm2-comp', q: 'Playing sports is ___ than sitting on the sofa.', opts: ['more exciting', 'excitinger', 'most exciting'], ans: 'more exciting', why: 'exciting הוא תואר ארוך → more exciting.', hint: 'תואר ארוך מקבל more.' },
          { t: 'gap', id: 'm2u3.x3', skill: 'grammar', rule: 'm2-comp', q: 'השלימי את מילת ההשוואה:', sentence: 'Summer is hotter ___ winter.', ans: ['than'], why: 'אחרי השוואה משתמשים ב-than.', hint: 'than.' },
          { t: 'type', id: 'm2u3.x4', skill: 'grammar', rule: 'm2-comp', q: 'מה ההשוואה של good? This song is ___ than the old one.', ans: ['better'], why: 'good → better (יוצא דופן חשוב).', hint: 'מתחיל ב-b.' },
          { t: 'scr', id: 'm2u3.x5', skill: 'grammar', rule: 'm2-comp', q: 'סדרי את המשפט: היער שקט יותר מהעיר.', sentence: 'The forest is quieter than the city.', ans: ['The forest is quieter than the city.'], why: 'The forest is + quieter than + the city.', hint: 'מתחילים ב-The forest is.' },
        ],
        scenario: {
          title: 'משחק "מה עדיף?"', en: 'This or That Challenge', who: 'Zoe', role: 'מנחת משחקים כיפית',
          desc: 'שחקי עם זואי במשחק ההשוואות והסבירי מה עדיף בעינייך ולמה.', focus: 'Comparatives',
          opening: 'Welcome to This or That! First round: which is better — the beach or the mountains, and why?',
          openingHe: 'ברוכה הבאה למשחק זה או זה! סיבוב ראשון: מה עדיף — חוף הים או ההרים, ולמה?',
          steps: [
            { bot: 'Great point! Next: are cats or dogs funnier to live with?', he: 'נקודה מעולה! הבא: חתולים או כלבים מצחיקים יותר לגור איתם?', suggestions: ['Dogs are funnier than cats.', 'Cats are quieter than dogs.', 'I prefer dogs because they love to play.'] },
            { bot: 'Nice! What about mornings vs. nights — which is better for you?', he: 'יפה! ומה לגבי בקרים מול ערבים — מה טוב יותר בשבילך?', suggestions: ['Nights are more relaxing than mornings.', 'Mornings are better because I have energy.', 'I prefer afternoons!'] },
            { bot: 'Final round: is learning with games more exciting than reading a textbook?', he: 'סיבוב אחרון: האם ללמוד עם משחקים מרגש יותר מספר לימוד?', suggestions: ['Yes, games are much more exciting!', 'Both are good, but games are faster.', 'I prefer talking with a coach.'] },
          ],
          more: ['Which animal is faster — a wolf or a cheetah?', 'What is more fun: watching a movie or going outside?'],
        },
      }),
      makeUnit({
        id: 'm2u4', n: 4, icon: '🧭', color: 'gold', cefr: 'A1+',
        title: 'Around Town & Helpful Advice',
        he: 'בעיר, בטיול ומתן עצות · Can / Should',
        lead: 'לומדים לשאול כיוונים, לבקש עזרה בנימוס ולתת עצות שימושיות עם can ו-should.',
        canDo: ['לשאול איך מגיעים למקום בנימוס', 'להמליץ ולתת עצות עם should', 'להסתדר בבית קפה, חנות או טיול בחו"ל'],
        fact: 'מילת הקסם "Excuse me" לפני שאלה הופכת כל פנייה באנגלית למנומסת ונעימה מיד.',
        rules: [
          {
            id: 'm2-should',
            title: 'עצות והמלצות – should / shouldn\'t',
            short: 'should + פועל בסיסי (כדאי ש...)',
            formula: 'You should + פועל בסיסי\nYou shouldn\'t + פועל בסיסי\nWhat should I + פועל בסיסי?',
            body: 'כדי להמליץ או לתת עצה ידידותית, משתמשים ב-<b>should</b> (כדאי) או <b>shouldn\'t</b> (לא כדאי). הפועל שאחריו תמיד בצורת הבסיס בלי to ובלי s.',
            examples: [
              { en: 'You should visit the aquarium — it is amazing!', he: 'כדאי לך לבקר באקווריום — הוא מדהים!' },
              { en: 'We should take water and a hat.', he: 'כדאי שניקח מים וכובע.' },
              { en: 'You shouldn\'t forget your ticket.', he: 'לא כדאי שתשכחי את הכרטיס שלך.' },
            ],
            mistake: 'You should <b>to go</b>. → You should <b>go</b>. (בלי to אחרי should!)',
            hook: 'should הוא כמו can — ישר אחריו בא הפועל הנקי, בלי to.',
          },
        ],
        words: [
          { en: 'corner', he: 'פינה', pron: 'KOR-ner', ex: 'The bakery is right around the corner.', exHe: 'המאפייה ממש מעבר לפינה.' },
          { en: 'straight', he: 'ישר', pron: 'strayt', ex: 'Go straight for two blocks.', exHe: 'לכי ישר שני רחובות.' },
          { en: 'ticket', he: 'כרטיס', pron: 'TIK-it', ex: 'Keep your ticket in a safe pocket.', exHe: 'שמרי את הכרטיס בכיס בטוח.' },
          { en: 'recommend', he: 'להמליץ', pron: 'rek-uh-MEND', ex: 'Can you recommend a good cafe?', exHe: 'את יכולה להמליץ על בית קפה טוב?' },
          { en: 'helpful', he: 'מועיל / עוזר', pron: 'HELP-ful', ex: 'The guide was very kind and helpful.', exHe: 'המדריך היה מאוד נחמד ועוזר.' },
          { en: 'explore', he: 'לחקור / לטייל', pron: 'ik-SPLOR', ex: 'Let\'s explore the old market today.', exHe: 'בואו נטייל בשוק העתיק היום.' },
        ],
        reading: {
          title: 'Exploring London',
          passage: 'Tom is visiting London for the first time. He asks a friendly guide, "Excuse me, what should I explore today?" The guide smiles and says, "You should go straight to the big park and then visit the science museum. It is right around the corner! You shouldn\'t rush — take your time and enjoy the view."',
          vocabulary: [
            { en: 'visiting', he: 'מבקר' }, { en: 'guide', he: 'מדריך' }, { en: 'explore', he: 'לחקור / לטייל' },
            { en: 'straight', he: 'ישר' }, { en: 'corner', he: 'פינה' }, { en: 'rush', he: 'למהר' }, { en: 'view', he: 'נוף' },
          ],
          questions: [
            { q: 'Where does the guide recommend Tom go?', opts: ['The big park and science museum', 'The airport', 'A shoe factory'], ans: 'The big park and science museum', why: 'המדריך ממליץ: go straight to the big park and then visit the science museum.' },
            { q: 'What advice does the guide give at the end?', opts: ['He shouldn\'t rush', 'He should run fast', 'He should leave early'], ans: 'He shouldn\'t rush', why: 'כתוב: You shouldn\'t rush — take your time.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2u4.x1', skill: 'grammar', rule: 'm2-should', q: 'It is very sunny. You ___ wear a hat.', opts: ['should', 'should to', 'shoulds'], ans: 'should', why: 'אחרי should בא הפועל בצורת הבסיס בלי to ובלי s.', hint: 'should + פועל.' },
          { t: 'gap', id: 'm2u4.x2', skill: 'grammar', rule: 'm2-should', q: 'השלימי שלילה:', sentence: 'You ___ forget your water bottle.', ans: ["shouldn't", 'should not'], why: 'לא כדאי = shouldn\'t.', hint: 'shouldn\'t.' },
          { t: 'scr', id: 'm2u4.x3', skill: 'grammar', rule: 'm2-should', q: 'סדרי את המשפט: כדאי לנו לחקור את השוק.', sentence: 'We should explore the market.', ans: ['We should explore the market.'], why: 'We should + פועל + מושא.', hint: 'מתחילים ב-We should.' },
          { t: 'mcq', id: 'm2u4.x4', skill: 'grammar', rule: 'm2-should', q: 'איך מבקשים המלצה בנימוס?', opts: ['Can you recommend a nice place?', 'Recommend me now.', 'You recommending a place?'], ans: 'Can you recommend a nice place?', why: 'Can you recommend...? היא בקשה טבעית ומנומסת.', hint: 'מתחיל ב-Can you.' },
          { t: 'type', id: 'm2u4.x5', skill: 'grammar', rule: 'm2-should', q: 'השלימי: Go ___ (ישר) and turn left at the corner.', ans: ['straight'], why: 'ישר בכיוונים = straight.', hint: 'מתחיל ב-str.' },
        ],
        scenario: {
          title: 'מדריכת הטיולים בעיר', en: 'City Explorer Guide', who: 'Clara', role: 'מדריכת טיולים ידידותית',
          desc: 'את מבקרת בעיר חדשה ושואלת את קלרה לאן כדאי ללכת ואיך להגיע.', focus: 'Can / Should & Directions',
          opening: 'Welcome to Sunshine City! I am Clara, your local guide. What kind of places would you like to explore today?',
          openingHe: 'ברוכה הבאה לעיר השמש! אני קלרה, המדריכה המקומית. אילו מקומות תרצי לחקור היום?',
          steps: [
            { bot: 'Oh, you should definitely go there! Do you need directions on how to get there?', he: 'או, בהחלט כדאי לך ללכת לשם! צריכה הכוונה איך להגיע?', suggestions: ['Yes, please! Is it far?', 'Can you tell me how to get there?', 'Should I walk or take a bus?'] },
            { bot: 'Just go straight for two blocks and turn left at the corner. What should we recommend for lunch?', he: 'פשוט לכי ישר שני רחובות ופני שמאלה בפינה. מה כדאי להמליץ לארוחת צהריים?', suggestions: ['Can you recommend a good cafe?', 'I prefer something healthy.', 'I love pizza or pasta!'] },
            { bot: 'Before you go, do you have any advice for other travelers?', he: 'לפני שתצאי לדרך, יש לך עצה למטיילים אחרים?', suggestions: ['You should bring water and comfortable shoes.', 'You should take lots of photos!', 'You shouldn\'t rush!'] },
          ],
          more: ['Where would you love to travel next?', 'What should someone pack for a beach trip?'],
        },
      }),
    ],
  };

  /* ---------------- English A2/B1 (Continuation Stage 3 for A1 / Stage 2 for A2 learners) ---------------- */
  const EN_STAGE_B1 = {
    stage: 2,
    level: 'B1',
    title: 'מודול המשך · חשיבה, חוויות ושיח חופשי (B1)',
    subtitle: 'עולים לרמת שטף וביטחון: Present Perfect, תנאים, דעות מנומקות וסיפורים מרתקים.',
    units: [
      makeUnit({
        id: 'm3u1', n: 1, icon: '🏆', color: 'pink', cefr: 'B1',
        title: 'Achievements & Experiences (Present Perfect)',
        he: 'חוויות והישגים · Present Perfect',
        lead: 'מדברים על חוויות חיים והישגים עד היום עם have/has + V3 (ever, never, already, yet).',
        canDo: ['לספר על חוויות והישגים בלי לציין זמן מדויק', 'לשאול Have you ever...?', 'להבדיל בין Past Simple ל-Present Perfect'],
        fact: 'כאשר הזמן המדויק לא חשוב ("כבר הייתי שם"), באנגלית בוחרים ב-Present Perfect; כשמציינים מתי ("בשנה שעברה"), חוזרים ל-Past Simple.',
        rules: [
          {
            id: 'm3-pres-perf',
            title: 'Present Perfect – חוויות עד הרגע הזה',
            short: 'have / has + V3 (done, seen, tried, been)',
            formula: 'I / You / We / They + have + V3\nHe / She / It + has + V3\nשאלה: Have you ever + V3?',
            body: 'משתמשים ב-<b>Present Perfect</b> כדי לדבר על חוויות חיים ("האם אי פעם...?"), שינויים, או פעולות שקרו ומשפיעות על ההווה.',
            examples: [
              { en: 'Have you ever watched a match live in a stadium?', he: 'האם אי פעם צפית במשחק חי באצטדיון?' },
              { en: 'I have already finished all four units!', he: 'כבר סיימתי את כל ארבע היחידות!' },
              { en: 'She has never tried rock climbing yet.', he: 'היא עדיין לא ניסתה טיפוס קירות.' },
            ],
            mistake: 'I <b>have saw</b> that movie. → I <b>have seen</b> that movie. (צורת V3 אחרי have/has!)',
            hook: 'חוויה פתוחה בלי תאריך = have/has + V3.',
          },
        ],
        words: [
          { en: 'achieve', he: 'להשיג / להגשים', pron: 'uh-CHEEV', ex: 'You can achieve big goals step by step.', exHe: 'אפשר להשיג מטרות גדולות צעד אחר צעד.' },
          { en: 'challenge', he: 'אתגר', pron: 'CHAL-inj', ex: 'Every new level is a fun challenge.', exHe: 'כל רמה חדשה היא אתגר כיפי.' },
          { en: 'curious', he: 'סקרן / סקרנית', pron: 'KYOOR-ee-us', ex: 'Curious learners improve much faster.', exHe: 'לומדים סקרנים משתפרים הרבה יותר מהר.' },
          { en: 'discover', he: 'לגלות', pron: 'dis-KUV-er', ex: 'Scientists discover new species every year.', exHe: 'מדענים מגלים מינים חדשים בכל שנה.' },
          { en: 'proud', he: 'גאה', pron: 'prowd', ex: 'I am proud of how much I have learned.', exHe: 'אני גאה בכמה שלמדתי.' },
          { en: 'already', he: 'כבר', pron: 'awl-RED-ee', ex: 'We have already completed the first stage.', exHe: 'כבר השלמנו את השלב הראשון.' },
        ],
        reading: {
          title: 'Young Explorers Around the World',
          passage: 'Have you ever wondered how young people make big discoveries? In recent years, curious students have built solar-powered robots, protected local wildlife, and even spotted rare stars using small telescopes. Many of them say the hardest part is starting. Once you accept a challenge and practice every week, you realize how much you can achieve.',
          vocabulary: [
            { en: 'wondered', he: 'תהית' }, { en: 'discoveries', he: 'תגליות' }, { en: 'curious', he: 'סקרנים' },
            { en: 'wildlife', he: 'חיות בר' }, { en: 'rare', he: 'נדיר' }, { en: 'challenge', he: 'אתגר' }, { en: 'achieve', he: 'להשיג' },
          ],
          questions: [
            { q: 'What have curious students done in recent years?', opts: ['Built robots and protected wildlife', 'Stopped going to school', 'Written only comic books'], ans: 'Built robots and protected wildlife', why: 'בפסקה: have built solar-powered robots, protected local wildlife.' },
            { q: 'According to the text, what is the hardest part?', opts: ['Starting', 'Buying expensive gear', 'Working alone'], ans: 'Starting', why: 'כתוב: the hardest part is starting.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm3u1.x1', skill: 'grammar', rule: 'm3-pres-perf', q: 'Have you ever ___ a shooting star?', opts: ['seen', 'saw', 'see'], ans: 'seen', why: 'אחרי Have משתמשים ב-V3 → seen.', hint: 'see → saw → seen.' },
          { t: 'gap', id: 'm3u1.x2', skill: 'grammar', rule: 'm3-pres-perf', q: 'השלימי:', sentence: 'She ___ already finished her project.', ans: ['has'], why: 'עם She משתמשים ב-has.', hint: 'She → has.' },
          { t: 'scr', id: 'm3u1.x3', skill: 'grammar', rule: 'm3-pres-perf', q: 'סדרי את השאלה: האם אי פעם ניסית גלישה?', sentence: 'Have you ever tried surfing?', ans: ['Have you ever tried surfing?'], why: 'Have + you + ever + V3?', hint: 'מתחילים ב-Have you ever.' },
          { t: 'type', id: 'm3u1.x4', skill: 'grammar', rule: 'm3-pres-perf', q: 'השלימי עם V3: We have ___ (discover) a great trail.', ans: ['discovered'], why: 'discover + ed → discovered.', hint: 'פועל רגיל + ed.' },
          { t: 'mcq', id: 'm3u1.x5', skill: 'grammar', rule: 'm3-pres-perf', q: 'איזה משפט מדויק?', opts: ['I went there last year.', 'I have gone there last year.', 'I have went there last year.'], ans: 'I went there last year.', why: 'כשמציינים זמן מדויק בעבר (last year), משתמשים ב-Past Simple.', hint: 'last year = Past Simple.' },
        ],
        scenario: {
          title: 'ראיון חוויות והישגים', en: 'Bucket List & Achievements', who: 'Sam', role: 'עיתונאי סקרן ומעורר השראה',
          desc: 'דברו עם סאם על דברים מגניבים שכבר חוויתם ועל אתגרים שהייתם רוצים לנסות.', focus: 'Present Perfect',
          opening: 'Hey! I love hearing about cool experiences. What is something you have tried recently that made you feel proud?',
          openingHe: 'היי! אני אוהב לשמוע על חוויות מגניבות. מה משהו שניסית לאחרונה שגרם לך להרגיש גאווה?',
          steps: [
            { bot: 'That is seriously impressive! Have you ever wanted to try an extreme sport or a totally new hobby?', he: 'זה באמת מרשים! האם אי פעם רצית לנסות ספורט אתגרי או תחביב חדש לגמרי?', suggestions: ['I have always wanted to try surfing.', 'I have never tried climbing, but I am curious!', 'I want to learn how to play guitar.'] },
            { bot: 'What is one challenge you have already overcome this year?', he: 'מהו אתגר אחד שכבר התגברת עליו השנה?', suggestions: ['I have improved my English a lot.', 'I learned a difficult skill with practice.', 'I spoke in front of people without fear.'] },
            { bot: 'If you could discover one new place in the world, where would you go?', he: 'אם היית יכול/ה לגלות מקום חדש אחד בעולם, לאן היית נוסע/ת?', suggestions: ['I would love to explore Japan.', 'I want to visit the rainforest.', 'I would go to see the Northern Lights.'] },
          ],
          more: ['Have you ever met someone who inspired you?', 'What skill have you practiced the most?'],
        },
      }),
      makeUnit({
        id: 'm3u2', n: 2, icon: '🌍', color: 'purple', cefr: 'B1',
        title: 'What If? (First Conditional)',
        he: 'מה יקרה אם? · First Conditional',
        lead: 'מחברים סיבה ותוצאה לעתיד עם If + Present Simple, ... will + פועל.',
        canDo: ['לדבר על תוצאות אפשריות בעתיד', 'להסביר תוכניות גיבוי והחלטות', 'לחשוב יצירתית על תרחישים'],
        fact: 'באנגלית לעולם לא שמים will בחלק של ה-If! אומרים "If it rains, we will stay inside" (ולא If it will rain).',
        rules: [
          {
            id: 'm3-cond1',
            title: 'תנאי ראשון – First Conditional',
            short: 'If + הווה פשוט, ... will + פועל בסיסי',
            formula: 'If + Present Simple, subject + will / won\'t + verb\nדוגמה: If we train hard, we will win.',
            body: 'תנאי ראשון מתאר מצב אמיתי ואפשרי בעתיד. בחלק של <b>If</b> משתמשים ב-<b>Present Simple</b>, ובחלק של התוצאה משתמשים ב-<b>will</b>.',
            examples: [
              { en: 'If you practice ten minutes a day, your English will sound natural.', he: 'אם תתרגל/י עשר דקות ביום, האנגלית שלך תישמע טבעית.' },
              { en: 'If it rains tomorrow, we will play indoor games.', he: 'אם ירד גשם מחר, נשחק משחקים בתוך הבית.' },
            ],
            mistake: 'If it <b>will rain</b>, I stay home. → If it <b>rains</b>, I <b>will stay</b> home.',
            hook: 'If אוהב הווה; התוצאה מקבלת will.',
          },
        ],
        words: [
          { en: 'decision', he: 'החלטה', pron: 'di-SIZH-un', ex: 'Good habits start with one small decision.', exHe: 'הרגלים טובים מתחילים בהחלטה קטנה אחת.' },
          { en: 'result', he: 'תוצאה', pron: 'ri-ZULT', ex: 'You will see a great result if you keep trying.', exHe: 'תראה/י תוצאה נהדרת אם תמשיכ/י לנסות.' },
          { en: 'predict', he: 'לחזות / לנבא', pron: 'pri-DIKT', ex: 'Can you predict who will win the tournament?', exHe: 'את/ה יכול/ה לנבא מי ינצח בטורניר?' },
          { en: 'solution', he: 'פתרון', pron: 'suh-LOO-shun', ex: 'If we work together, we will find a solution.', exHe: 'אם נעבוד ביחד, נמצא פתרון.' },
          { en: 'protect', he: 'להגן', pron: 'pruh-TEKT', ex: 'If we recycle, we will protect the ocean.', exHe: 'אם נמחזר, נגן על האוקיינוס.' },
          { en: 'improve', he: 'להשתפר / לשפר', pron: 'im-PROOV', ex: 'Your speaking will improve every week.', exHe: 'הדיבור שלך ישתפר בכל שבוע.' },
        ],
        reading: {
          title: 'Smart Choices for Our Planet',
          passage: 'Small daily choices can shape the future. If more neighborhoods plant trees, cities will become cooler and cleaner. If families use reusable bottles, less plastic will reach the ocean. Scientists say that if young people stay informed and share creative solutions, they will protect wildlife and build a healthier planet for everyone.',
          vocabulary: [
            { en: 'choices', he: 'בחירות' }, { en: 'neighborhoods', he: 'שכונות' }, { en: 'reusable', he: 'רב-פעמי' },
            { en: 'reach', he: 'להגיע' }, { en: 'informed', he: 'מעודכנים' }, { en: 'solutions', he: 'פתרונות' }, { en: 'protect', he: 'להגן' },
          ],
          questions: [
            { q: 'What will happen if neighborhoods plant more trees?', opts: ['Cities will become cooler and cleaner', 'Plastic will disappear instantly', 'Winters will stop'], ans: 'Cities will become cooler and cleaner', why: 'כתוב: If more neighborhoods plant trees, cities will become cooler and cleaner.' },
            { q: 'How can families reduce plastic in the ocean?', opts: ['By using reusable bottles', 'By driving faster', 'By turning off lights'], ans: 'By using reusable bottles', why: 'כתוב: If families use reusable bottles, less plastic will reach the ocean.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm3u2.x1', skill: 'grammar', rule: 'm3-cond1', q: 'If you practice every day, you ___ improve quickly.', opts: ['will', 'would', 'are'], ans: 'will', why: 'בתנאי ראשון חלק התוצאה מקבל will + פועל.', hint: 'will.' },
          { t: 'mcq', id: 'm3u2.x2', skill: 'grammar', rule: 'm3-cond1', q: 'If it ___ tomorrow, we will stay inside.', opts: ['rains', 'will rain', 'rained'], ans: 'rains', why: 'אחרי If שמים Present Simple (it → rains).', hint: 'בלי will אחרי If!' },
          { t: 'gap', id: 'm3u2.x3', skill: 'grammar', rule: 'm3-cond1', q: 'השלימי:', sentence: 'If we work together, we ___ find a solution.', ans: ['will'], why: 'חלק התוצאה בעתיד → will.', hint: 'will.' },
          { t: 'scr', id: 'm3u2.x4', skill: 'grammar', rule: 'm3-cond1', q: 'סדרי את המשפט: אם נמחזר, נגן על הטבע.', sentence: 'If we recycle, we will protect nature.', ans: ['If we recycle, we will protect nature.'], why: 'If + הווה, נושא + will + פועל.', hint: 'מתחילים ב-If we recycle,' },
          { t: 'type', id: 'm3u2.x5', skill: 'grammar', rule: 'm3-cond1', q: 'השלימי: If he ___ (study), he will pass the test.', ans: ['studies'], why: 'he ב-Present Simple → studies.', hint: 'study → studies.' },
        ],
        scenario: {
          title: 'מעבדת העתיד · What If?', en: 'Future Lab', who: 'Dr. Nova', role: 'חוקרת עתידנות יצירתית',
          desc: 'שחקי עם ד"ר נובה בפתרון בעיות עתידיות באמצעות תנאי ראשון.', focus: 'First Conditional',
          opening: 'Welcome to the Future Lab! If you could invent one smart gadget to help people every day, what will it do?',
          openingHe: 'ברוכים הבאים למעבדת העתיד! אם תוכלי להמציא גאדג\'ט חכם אחד שיעזור לאנשים כל יום, מה הוא יעשה?',
          steps: [
            { bot: 'Brilliant invention! If everyone uses it, how will daily life change?', he: 'המצאה מבריקה! אם כולם ישתמשו בזה, איך חיי היומיום ישתנו?', suggestions: ['If everyone uses it, people will save time.', 'Cities will become much cleaner.', 'Students will learn faster and have more fun.'] },
            { bot: 'What if there is a tricky problem — how will we find a solution?', he: 'ומה אם תהיה בעיה מאתגרת — איך נמצא פתרון?', suggestions: ['If we work as a team, we will solve it.', 'We will test new ideas until it works.', 'We will ask experts for advice.'] },
            { bot: 'Last question: if you keep practicing English this month, what will you be able to do?', he: 'שאלה אחרונה: אם תמשיכי לתרגל אנגלית החודש, מה תוכלי לעשות?', suggestions: ['I will speak with much more confidence!', 'I will understand movies without subtitles.', 'I will chat easily with friends abroad.'] },
          ],
          more: ['What will happen if robots do all homework?', 'How can we protect animals if cities grow bigger?'],
        },
      }),
      makeUnit({
        id: 'm3u3', n: 3, icon: '💬', color: 'cyan', cefr: 'B1',
        title: 'Opinions, Reasons & Debate',
        he: 'להביע דעה ולנמק · Because / Although',
        lead: 'לומדים להביע דעה ברורה, לחבר רעיונות עם because, however, although ולשכנע באנגלית.',
        canDo: ['להביע דעה במבנים טבעיים (In my opinion, I believe)', 'לנמק טענה עם because ו-for example', 'להציג ניגוד עם although ו-however'],
        fact: 'שימוש במילות קישור כמו "In my opinion", "For example", ו-"However" מקפיץ את רמת הדיבור מיד לרמת B1!',
        rules: [
          {
            id: 'm3-connectors',
            title: 'מילות קישור לנימוק וניגוד – because / although / however',
            short: 'סיבה (because) · ניגוד (although / however)',
            formula: 'Opinion + because + reason\nAlthough + עובדה מפתיעה, + תוצאה\nSentence 1. However, + ניגוד.',
            body: 'כדי שהאנגלית שלך תישמע בוגרת וקולחת, מחברים משפטים קצרים בעזרת מילות קישור: <b>because</b> לסיבה, <b>although</b> ("למרות ש...") ו-<b>however</b> ("עם זאת / אבל").',
            examples: [
              { en: 'In my opinion, team sports are great because they teach cooperation.', he: 'לדעתי, ספורט קבוצתי הוא נהדר כי הוא מלמד שיתוף פעולה.' },
              { en: 'Although it was difficult at first, she never gave up.', he: 'למרות שזה היה קשה בהתחלה, היא לא ויתרה.' },
            ],
            mistake: '<b>Although</b> it was hard, <b>but</b> I tried. → <b>Although</b> it was hard, I tried. (לא שמים גם although וגם but!)',
            hook: 'Although ו-but לא יושבים באותו משפט — בוחרים רק אחד.',
          },
        ],
        words: [
          { en: 'opinion', he: 'דעה', pron: 'uh-PIN-yun', ex: 'In my opinion, music helps people focus.', exHe: 'לדעתי, מוזיקה עוזרת לאנשים להתרכז.' },
          { en: 'reason', he: 'סיבה', pron: 'REE-zun', ex: 'Give one clear reason for your answer.', exHe: 'תן/תני סיבה ברורה אחת לתשובה שלך.' },
          { en: 'although', he: 'למרות ש...', pron: 'awl-THOH', ex: 'Although he was tired, he finished the race.', exHe: 'למרות שהוא היה עייף, הוא סיים את המרוץ.' },
          { en: 'however', he: 'עם זאת / אולם', pron: 'how-EV-er', ex: 'The task was long; however, it was fun.', exHe: 'המשימה הייתה ארוכה; עם זאת, היא הייתה כיפית.' },
          { en: 'agree', he: 'להסכים', pron: 'uh-GREE', ex: 'I completely agree with your point.', exHe: 'אני מסכים/מסכימה לגמרי עם הנקודה שלך.' },
          { en: 'creative', he: 'יצירתי / יצירתית', pron: 'kree-AY-tiv', ex: 'That is a very creative perspective.', exHe: 'זו נקודת מבט מאוד יצירתית.' },
        ],
        reading: {
          title: 'Should Schools Have Shorter Days?',
          passage: 'Many students debate whether school days should be shorter. In some people\'s opinion, shorter days give kids more time for sports, art, and rest. Although shorter hours sound wonderful, teachers point out that students still need enough time to ask questions and practice. However, most experts agree that active, creative lessons matter more than sitting for long hours.',
          vocabulary: [
            { en: 'debate', he: 'דנים / מתווכחים' }, { en: 'opinion', he: 'דעה' }, { en: 'although', he: 'למרות ש' },
            { en: 'enough', he: 'מספיק' }, { en: 'however', he: 'עם זאת' }, { en: 'agree', he: 'מסכימים' }, { en: 'creative', he: 'יצירתיים' },
          ],
          questions: [
            { q: 'Why do some people support shorter school days?', opts: ['More time for sports, art, and rest', 'Less need for books', 'Longer exams'], ans: 'More time for sports, art, and rest', why: 'כתוב: give kids more time for sports, art, and rest.' },
            { q: 'What do most experts agree on?', opts: ['Active, creative lessons matter more than long hours', 'Schools should be open on weekends', 'Homework should be doubled'], ans: 'Active, creative lessons matter more than long hours', why: 'כתוב: active, creative lessons matter more than sitting for long hours.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm3u3.x1', skill: 'grammar', rule: 'm3-connectors', q: '___ it rained all morning, we still enjoyed the trip.', opts: ['Although', 'Because', 'For example'], ans: 'Although', why: 'יש כאן ניגוד ("למרות שירד גשם, נהנינו") → Although.', hint: 'מילת קישור של ניגוד.' },
          { t: 'mcq', id: 'm3u3.x2', skill: 'grammar', rule: 'm3-connectors', q: 'I love learning languages ___ they connect people.', opts: ['because', 'although', 'however'], ans: 'because', why: 'מציגים סיבה → because.', hint: 'כי / מפני ש.' },
          { t: 'gap', id: 'm3u3.x3', skill: 'grammar', rule: 'm3-connectors', q: 'השלימי ביטוי דעה:', sentence: 'In my ___, practice should feel like a game.', ans: ['opinion'], why: 'In my opinion = לדעתי.', hint: 'מתחיל ב-o.' },
          { t: 'scr', id: 'm3u3.x4', skill: 'grammar', rule: 'm3-connectors', q: 'סדרי את המשפט: אני מסכימה עם הנקודה שלך.', sentence: 'I agree with your point.', ans: ['I agree with your point.'], why: 'I agree with + your point.', hint: 'I agree...' },
          { t: 'type', id: 'm3u3.x5', skill: 'grammar', rule: 'm3-connectors', q: 'השלימי מילת ניגוד: The game was hard. ___, we won!', ans: ['However'], why: 'בתחילת משפט חדש לניגוד → However.', hint: 'עם זאת (מתחיל ב-H).' },
        ],
        scenario: {
          title: 'מועדון הדיבייט הידידותי', en: 'Friendly Debate Club', who: 'Jordan', role: 'מנחה דיבייט חד ומצחיק',
          desc: 'הביעו דעה מנומקת מול ג\'ורדן על נושאים יומיומיים מפתיעים.', focus: 'Opinions & Connectors',
          opening: 'Welcome to Debate Club! Here is today\'s fun topic: is it better to have one superpower like flying, or to speak every language on Earth?',
          openingHe: 'ברוכים הבאים למועדון הדיבייט! הנושא להיום: האם עדיף כוח-על כמו תעופה, או לדעת לדבר בכל שפה בעולם?',
          steps: [
            { bot: 'Interesting argument! What is your strongest reason for choosing that?', he: 'טיעון מעניין! מה הסיבה הכי חזקה שלך לבחירה הזו?', suggestions: ['In my opinion, it is better because you can connect with everyone.', 'Although flying is cool, languages are more useful.', 'Because you could travel anywhere without fear!'] },
            { bot: 'Fair point! However, can you think of one downside to your choice?', he: 'נקודה הוגנת! עם זאת, אפשר לחשוב על חיסרון אחד לבחירה שלך?', suggestions: ['However, it might get tiring sometimes.', 'Although it is amazing, people might ask for favors.', 'Maybe flying in the rain would be freezing!'] },
            { bot: 'You make a strong case! Do you enjoy debating different viewpoints?', he: 'טיעון חזק! את/ה נהנה/נהנית להתווכח בכיף על נקודות מבט שונות?', suggestions: ['Yes, because it helps me think clearly.', 'I agree — it is a creative way to practice.', 'Definitely! Give me another topic!'] },
          ],
          more: ['Should homework be replaced by creative projects?', 'Is reading a book better than watching the film?'],
        },
      }),
      makeUnit({
        id: 'm3u4', n: 4, icon: '🌟', color: 'gold', cefr: 'B1',
        title: 'Natural Fluency & Storytelling',
        he: 'שטף טבעי וסיפורים חיים · Past Continuous',
        lead: 'מספרים סיפור כמו דוברי שפת אם: משלבים תיאור רקע (was/were + ing) עם אירוע פתאומי.',
        canDo: ['לתאר סצנה חיה בסיפור עם was/were + ing', 'לחבר בין while ו-when בצורה טבעית', 'לנהל שיחה זורמת ובטוחה'],
        fact: 'בסיפורים, Past Continuous הוא "תפאורת הרקע" (מה היה באמצע לקרות), ו-Past Simple הוא "האקשן" (מה שקרה פתאום).',
        rules: [
          {
            id: 'm3-past-cont',
            title: 'עבר ממושך – Past Continuous (was/were + V-ing)',
            short: 'was / were + פועל-ing · תפאורה מול אקשן',
            formula: 'I / He / She / It + was + verb-ing\nYou / We / They + were + verb-ing\nWhile I was walking, I saw a fox!',
            body: 'כשמתארים פעולה שהייתה באמצע להתרחש בעבר כשמשהו אחר קרה, משתמשים ב-<b>was/were + ing</b> לפעולה הארוכה, וב-<b>Past Simple</b> לאירוע הקצר.',
            examples: [
              { en: 'While we were walking home, the sky turned bright orange.', he: 'בזמן שהלכנו הביתה, השמיים הפכו לכתום בוהק.' },
              { en: 'I was listening to music when my friend called.', he: 'הקשבתי למוזיקה כשהחברה שלי התקשרה.' },
            ],
            mistake: 'We <b>was</b> playing. → We <b>were</b> playing. (we/you/they → were!)',
            hook: 'While = פעולה מתמשכת (ing); When = רגע פתאומי!',
          },
        ],
        words: [
          { en: 'suddenly', he: 'לפתע / פתאום', pron: 'SUD-un-lee', ex: 'Suddenly, a dolphin jumped out of the water!', exHe: 'לפתע, דולפין קפץ מהמים!' },
          { en: 'while', he: 'בזמן ש...', pron: 'wyl', ex: 'While I was reading, my dog fell asleep.', exHe: 'בזמן שקראתי, הכלב שלי נרדם.' },
          { en: 'notice', he: 'לשים לב / להבחין', pron: 'NOH-tis', ex: 'Did you notice the rainbow outside?', exHe: 'שמת לב לקשת שבחוץ?' },
          { en: 'unforgettable', he: 'בלתי נשכח', pron: 'un-fer-GET-uh-bul', ex: 'That sunset was truly unforgettable.', exHe: 'השקיעה הזו הייתה באמת בלתי נשכחת.' },
          { en: 'confidence', he: 'ביטחון עצמי', pron: 'KON-fi-duns', ex: 'Speaking often builds real confidence.', exHe: 'דיבור תדיר בונה ביטחון עצמי אמיתי.' },
          { en: 'fluent', he: 'שוטף / קולח', pron: 'FLOO-unt', ex: 'Step by step, you are becoming more fluent.', exHe: 'צעד אחר צעד, את/ה הופכ/ת ליותר שוטפ/ת.' },
        ],
        reading: {
          title: 'The Unforgettable Match',
          passage: 'It was the final minute of a rainy evening match. While the crowd was cheering loudly, the youngest player on the field noticed an open space near the right corner. He was running at full speed when his teammate passed the ball. Suddenly, he took a calm, confident shot — and scored! Everyone agreed it was an unforgettable moment.',
          vocabulary: [
            { en: 'crowd', he: 'קהל' }, { en: 'cheering', he: 'מעודד' }, { en: 'noticed', he: 'הבחין' },
            { en: 'teammate', he: 'חבר לקבוצה' }, { en: 'suddenly', he: 'לפתע' }, { en: 'confident', he: 'בטוח בעצמו' }, { en: 'unforgettable', he: 'בלתי נשכח' },
          ],
          questions: [
            { q: 'What was the crowd doing during the final minute?', opts: ['Cheering loudly', 'Leaving the stadium', 'Sitting quietly'], ans: 'Cheering loudly', why: 'כתוב: While the crowd was cheering loudly.' },
            { q: 'What happened while he was running at full speed?', opts: ['His teammate passed the ball', 'The referee stopped the game', 'He lost his shoe'], ans: 'His teammate passed the ball', why: 'כתוב: when his teammate passed the ball.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm3u4.x1', skill: 'grammar', rule: 'm3-past-cont', q: 'While we ___ walking in the park, we saw a squirrel.', opts: ['were', 'was', 'are'], ans: 'were', why: 'עם we משתמשים ב-were + ing.', hint: 'we → were.' },
          { t: 'gap', id: 'm3u4.x2', skill: 'grammar', rule: 'm3-past-cont', q: 'השלימי:', sentence: 'I ___ studying when you called me.', ans: ['was'], why: 'I → was + studying.', hint: 'I was.' },
          { t: 'scr', id: 'm3u4.x3', skill: 'grammar', rule: 'm3-past-cont', q: 'סדרי את המשפט: לפתע שמתי לב לקשת.', sentence: 'Suddenly I noticed a rainbow.', ans: ['Suddenly I noticed a rainbow.', 'Suddenly, I noticed a rainbow.'], why: 'Suddenly + נושא + פועל בעבר + מושא.', hint: 'מתחילים ב-Suddenly.' },
          { t: 'type', id: 'm3u4.x4', skill: 'grammar', rule: 'm3-past-cont', q: 'השלימי עם ing: She was ___ (listen) to music.', ans: ['listening'], why: 'was + listen + ing.', hint: 'listening.' },
          { t: 'mcq', id: 'm3u4.x5', skill: 'grammar', rule: 'm3-past-cont', q: 'איזה משפט משלב נכון תפאורה ואקשן?', opts: ['While I was cooking, the phone rang.', 'While I cooked, the phone was ringing always.', 'I was cook when phone ring.'], ans: 'While I was cooking, the phone rang.', why: 'פעולה מתמשכת (was cooking) + אירוע קצר (rang).', hint: 'While + was/were -ing.' },
        ],
        scenario: {
          title: 'סטודיו לסיפורים חיים', en: 'Live Storytelling Studio', who: 'Elena', role: 'מספרת סיפורים מרתקת',
          desc: 'בנו יחד סיפור קצר ומותח עם Past Continuous ו-Suddenly.', focus: 'Storytelling & Fluency',
          opening: 'Let\'s create a mini-story together! Picture this: it was a sunny afternoon, and I was walking near the sea when suddenly... what happened next?',
          openingHe: 'בואו ניצור יחד סיפור קצר! דמייני: היה אחר צהריים שמשי, וטיילתי ליד הים כשלפתע... מה קרה אז?',
          steps: [
            { bot: 'Whoa, what a twist! What were the people around us doing while that happened?', he: 'וואו, איזה טוויסט! מה עשו האנשים מסביבנו בזמן שזה קרה?', suggestions: ['Everyone was staring in amazement!', 'Kids were laughing and taking photos.', 'Nobody noticed at first except us!'] },
            { bot: 'Love the detail! How did the hero react with confidence?', he: 'אוהבת את הפרטים! איך הגיבור/ה הגיב/ה בביטחון?', suggestions: ['She stayed calm and smiled.', 'He quickly thought of a clever plan.', 'They worked together to help.'] },
            { bot: 'Give our story an unforgettable ending in one or two sentences!', he: 'תני לסיפור שלנו סוף בלתי נשכח במשפט או שניים!', suggestions: ['In the end, we became best friends forever.', 'It turned out to be the most unforgettable day of the year.', 'And from that moment, everything changed for the better.'] },
          ],
          more: ['Tell me about a funny surprise that happened to you.', 'What makes a story truly unforgettable?'],
        },
      }),
    ],
  };

  /* ---------------- Spanish UI English Continuation (B1+ / B2 for Yuli) ---------------- */
  const ES_EN_STAGE2 = {
    stage: 2,
    level: 'B1+',
    title: 'Módulo de Continuación · Estrategia, Diseño y Fluidez (B1+)',
    subtitle: 'Siguiente nivel: inglés profesional y expresivo sobre negocios, gastronomía, arquitectura y moda.',
    units: [
      makeUnit({
        id: 'm2es1', n: 1, icon: '🏛️', color: 'pink', cefr: 'B1+',
        title: 'Pitching Ideas & Design Vision',
        he: 'Presentar ideas y visión creativa',
        lead: 'Aprende a presentar un proyecto de arquitectura, moda o negocios con claridad, conectores naturales y seguridad.',
        canDo: ['Presentar un concepto creativo en inglés', 'Usar conectores de contraste y resultado (whereas, therefore)', 'Responder preguntas de clientes con diplomacia'],
        fact: 'En presentaciones en inglés, estructurar tu idea en 3 partes (Vision → Benefit → Next Step) transmite autoridad inmediata.',
        rules: [
          {
            id: 'm2es-pitch',
            title: 'Conectores profesionales: whereas, therefore & in addition',
            short: 'Contraste (whereas) · Resultado (therefore) · Suma (in addition)',
            formula: 'Option A is bold, whereas Option B is timeless.\nThe space gets natural light; therefore, it feels larger.',
            body: 'Para pasar de un inglés intermedio a un nivel <b>B1+/B2</b>, reemplaza repeticiones de "but" y "so" por conectores precisos como <b>whereas</b> (mientras que), <b>therefore</b> (por lo tanto) e <b>in addition</b> (además).',
            examples: [
              { en: 'Warm oak adds comfort, whereas brushed steel creates a modern edge.', he: 'El roble cálido aporta calidez, mientras que el acero cepillado crea un toque moderno.' },
              { en: 'The menu is seasonal; therefore, every dish tastes fresh.', he: 'El menú es de temporada; por lo tanto, cada plato sabe fresco.' },
            ],
            mistake: 'It is modern, <b>therefore</b> warm. → It is modern, <b>yet</b> warm. (therefore expresa consecuencia, no contraste).',
            hook: 'whereas = contraste elegante · therefore = consecuencia lógica.',
          },
        ],
        words: [
          { en: 'aesthetic', he: 'estética / estético', pron: 'es-THET-ik', ex: 'The boutique has a minimalist, warm aesthetic.', exHe: 'La boutique tiene una estética minimalista y cálida.' },
          { en: 'sustainable', he: 'sostenible', pron: 'suh-STAY-nuh-bul', ex: 'Clients increasingly look for sustainable fabrics.', exHe: 'Los clientes buscan cada vez más telas sostenibles.' },
          { en: 'concept', he: 'concepto / propuesta', pron: 'KON-sept', ex: 'Let me walk you through the main concept.', exHe: 'Permíteme guiarte por el concepto principal.' },
          { en: 'highlight', he: 'destacar / punto fuerte', pron: 'HY-lyt', ex: 'Large windows highlight the natural texture of the stone.', exHe: 'Los ventanales destacan la textura natural de la piedra.' },
          { en: 'refined', he: 'refinado / elegante', pron: 'ri-FYND', ex: 'Her presentation was clear and refined.', exHe: 'Su presentación fue clara y refinada.' },
          { en: 'feedback', he: 'comentarios / retroalimentación', pron: 'FEED-bak', ex: 'We adjusted the layout based on client feedback.', exHe: 'Ajustamos la distribución según los comentarios del cliente.' },
        ],
        reading: {
          title: 'Designing a Modern Bistro',
          passage: 'When architect Sofia redesigned a small neighborhood bistro, she wanted the space to reflect the chef\'s seasonal menu. She chose handmade ceramic tiles and warm lighting, whereas the kitchen remained open behind sleek glass. In addition, every table was crafted from sustainable wood. Therefore, guests felt both inspired by the refined aesthetic and welcomed like family.',
          vocabulary: [
            { en: 'reflect', he: 'reflejar' }, { en: 'seasonal', he: 'de temporada' }, { en: 'whereas', he: 'mientras que' },
            { en: 'sleek', he: 'elegante / pulido' }, { en: 'sustainable', he: 'sostenible' }, { en: 'refined', he: 'refinado' }, { en: 'aesthetic', he: 'estética' },
          ],
          questions: [
            { q: 'Why did Sofia choose warm lighting and handmade tiles?', opts: ['To reflect the chef\'s seasonal menu', 'To reduce the kitchen size', 'To copy a fast-food chain'], ans: 'To reflect the chef\'s seasonal menu', why: 'El texto dice: she wanted the space to reflect the chef\'s seasonal menu.' },
            { q: 'What material was used for the tables?', opts: ['Sustainable wood', 'Plastic', 'Dark marble'], ans: 'Sustainable wood', why: 'Dice: every table was crafted from sustainable wood.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2es1.x1', skill: 'grammar', rule: 'm2es-pitch', q: 'Silk feels light, ___ wool keeps you warm in winter.', opts: ['whereas', 'therefore', 'because of'], ans: 'whereas', why: 'Se contrastan dos materiales → whereas.', hint: 'Contraste entre dos cosas.' },
          { t: 'gap', id: 'm2es1.x2', skill: 'grammar', rule: 'm2es-pitch', q: 'Completa con el conector de resultado:', sentence: 'The studio is downtown; ___, it is easy to reach.', ans: ['therefore'], why: 'Expresa una consecuencia lógica → therefore.', hint: 'por lo tanto.' },
          { t: 'scr', id: 'm2es1.x3', skill: 'grammar', rule: 'm2es-pitch', q: 'Ordena la frase:', sentence: 'Let me walk you through the concept.', ans: ['Let me walk you through the concept.'], why: 'Expresión muy natural para iniciar una presentación.', hint: 'Empieza con Let me.' },
          { t: 'type', id: 'm2es1.x4', skill: 'grammar', rule: 'm2es-pitch', q: 'Traduce "sostenible" al inglés:', ans: ['sustainable'], why: 'sustainable = sostenible.', hint: 'Empieza por sus...' },
          { t: 'mcq', id: 'm2es1.x5', skill: 'grammar', rule: 'm2es-pitch', q: '¿Qué frase suena más profesional ante un cliente?', opts: ['We refined the concept based on your feedback.', 'We changed it because you said.', 'It is different now maybe better.'], ans: 'We refined the concept based on your feedback.', why: 'Usa vocabulario preciso (refined, concept, feedback).', hint: 'Busca refined y feedback.' },
        ],
        scenario: {
          title: 'Presentación de concepto creativo', en: 'Creative Pitch Meeting', who: 'Claire', role: 'directora creativa exigente pero amable',
          desc: 'Presenta a Claire tu visión para un restaurante, marca de moda o proyecto arquitectónico.', focus: 'B1+ Pitching & Connectors',
          opening: 'Hi! Thanks for meeting me today. Tell me about the concept you are working on — what makes its aesthetic unique?',
          openingHe: '¡Hola! Gracias por reunirte conmigo hoy. Cuéntame sobre el concepto en el que trabajas: ¿qué hace única su estética?',
          steps: [
            { bot: 'I love that direction! How does it balance practicality with style?', he: '¡Me encanta esa dirección! ¿Cómo equilibra lo práctico con el estilo?', suggestions: ['The layout is practical, whereas the materials add warmth.', 'We focused on sustainable materials without losing elegance.', 'Natural light highlights the refined details.'] },
            { bot: 'Smart thinking. If a client asks for a faster timeline, how would you respond?', he: 'Muy inteligente. Si un cliente pide un plazo más corto, ¿cómo responderías?', suggestions: ['We can prioritize the key highlights first.', 'Let\'s review the schedule together and agree on milestones.', 'Quality takes care; therefore, I\'d suggest phasing the launch.'] },
            { bot: 'What is the very next step you recommend for this project?', he: '¿Cuál es el siguiente paso que recomiendas para este proyecto?', suggestions: ['Let\'s gather initial feedback on two mood boards.', 'We should finalize the budget and timeline.', 'Let\'s test the prototype with a small group.'] },
          ],
          more: ['Which architectural style inspires you most?', 'How do fashion and interior design influence each other?'],
        },
      }),
      makeUnit({
        id: 'm2es2', n: 2, icon: '🍽️', color: 'purple', cefr: 'B1+',
        title: 'Culinary Nuance & Storytelling',
        he: 'Gastronomía, sabores y matices',
        lead: 'Describe recetas, texturas y experiencias culinarias con precisión y riqueza expresiva.',
        canDo: ['Describir sabores y texturas en inglés natural', 'Explicar pasos culinarios con claridad', 'Recomendar platos como una experta'],
        fact: 'En inglés culinario, palabras sensoriales como "crisp", "velvety", "zesty" y "savory" hacen que tu descripción cobre vida.',
        rules: [
          {
            id: 'm2es-passive',
            title: 'Voz pasiva en recetas y diseño (is made with / is crafted from)',
            short: 'be + participio pasado (V3)',
            formula: 'This sauce is simmered slowly.\nThe dough is made with olive oil and sea salt.',
            body: 'Al describir platos, técnicas o piezas de diseño, la <b>voz pasiva</b> (is/are + V3) centra la atención en el resultado y suena muy natural en inglés.',
            examples: [
              { en: 'The bread is baked fresh every morning.', he: 'El pan se hornea fresco cada mañana.' },
              { en: 'The dish is finished with fresh herbs and lemon zest.', he: 'El plato se termina con hierbas frescas y ralladura de limón.' },
            ],
            mistake: 'It <b>is make</b> with basil. → It <b>is made</b> with basil.',
            hook: 'is / are + V3 = cómo está hecho o preparado algo.',
          },
        ],
        words: [
          { en: 'savory', he: 'salado / sabroso', pron: 'SAY-vuh-ree', ex: 'I prefer savory pastries over sweet ones.', exHe: 'Prefiero los hojaldres salados a los dulces.' },
          { en: 'crisp', he: 'crujiente / fresco', pron: 'krisp', ex: 'Roast the vegetables until the edges are crisp.', exHe: 'Asa las verduras hasta que los bordes estén crujientes.' },
          { en: 'velvety', he: 'aterciopelado / cremoso', pron: 'VEL-vi-tee', ex: 'Blending gives the soup a velvety texture.', exHe: 'Licuar le da a la sopa una textura aterciopelada.' },
          { en: 'balance', he: 'equilibrio / equilibrar', pron: 'BAL-uns', ex: 'A squeeze of lemon balances rich flavors.', exHe: 'Un toque de limón equilibra los sabores intensos.' },
          { en: 'signature', he: 'insignia / especialidad', pron: 'SIG-nuh-cher', ex: 'What is your signature dish at dinner parties?', exHe: '¿Cuál es tu plato estrella en las cenas?' },
          { en: 'pair', he: 'maridar / combinar', pron: 'pair', ex: 'This salad pairs beautifully with grilled fish.', exHe: 'Esta ensalada combina de maravilla con pescado a la parrilla.' },
        ],
        reading: {
          title: 'The Secret of a Signature Dish',
          passage: 'Great cooking is rarely about complicated ingredients. Often, a signature dish is built on contrast: something crisp paired with something velvety, or rich olive oil balanced by bright citrus. When simple ingredients are treated with patience and care, the final plate tells a story before the very first bite.',
          vocabulary: [
            { en: 'rarely', he: 'raramente' }, { en: 'signature', he: 'insignia / estrella' }, { en: 'contrast', he: 'contraste' },
            { en: 'crisp', he: 'crujiente' }, { en: 'velvety', he: 'aterciopelado' }, { en: 'balanced', he: 'equilibrado' }, { en: 'bite', he: 'bocado' },
          ],
          questions: [
            { q: 'What is a signature dish often built on?', opts: ['Contrast of textures and flavors', 'At least twenty rare spices', 'Cooking as fast as possible'], ans: 'Contrast of textures and flavors', why: 'El texto señala: a signature dish is built on contrast.' },
            { q: 'What balances rich olive oil according to the passage?', opts: ['Bright citrus', 'Heavy cream', 'Extra salt'], ans: 'Bright citrus', why: 'Dice: rich olive oil balanced by bright citrus.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2es2.x1', skill: 'grammar', rule: 'm2es-passive', q: 'The tart ___ with roasted figs and honey.', opts: ['is topped', 'is top', 'topping'], ans: 'is topped', why: 'Voz pasiva: is + participio (topped).', hint: 'is + V3.' },
          { t: 'gap', id: 'm2es2.x2', skill: 'grammar', rule: 'm2es-passive', q: 'Completa en pasiva:', sentence: 'These pastries are ___ fresh every morning.', ans: ['baked', 'made'], why: 'are + V3 (baked / made).', hint: 'baked o made.' },
          { t: 'scr', id: 'm2es2.x3', skill: 'grammar', rule: 'm2es-passive', q: 'Ordena la frase:', sentence: 'A squeeze of lemon balances rich flavors.', ans: ['A squeeze of lemon balances rich flavors.'], why: 'Sujeto + verbo + complemento.', hint: 'Empieza por A squeeze.' },
          { t: 'type', id: 'm2es2.x4', skill: 'grammar', rule: 'm2es-passive', q: 'Escribe la palabra para "salado / sabroso" (empieza por s):', ans: ['savory', 'savoury'], why: 'savory describe platos salados con sabor profundo.', hint: 'sav...' },
          { t: 'mcq', id: 'm2es2.x5', skill: 'grammar', rule: 'm2es-passive', q: 'This crisp salad ___ wonderfully with salmon.', opts: ['pairs', 'pair', 'pairing'], ans: 'pairs', why: 'This salad (it) → pairs.', hint: 'Tercera persona singular.' },
        ],
        scenario: {
          title: 'Entrevista gastronómica', en: 'Culinary Magazine Interview', who: 'Marco', role: 'editor de revista gastronómica',
          desc: 'Describe tu plato favorito o menú ideal con vocabulario sensorial en inglés.', focus: 'Passive Voice & Sensory Words',
          opening: 'Welcome to our culinary feature! If you were hosting an intimate dinner tonight, what would your signature dish be?',
          openingHe: '¡Bienvenida a nuestra sección gastronómica! Si organizaras una cena íntima esta noche, ¿cuál sería tu plato estrella?',
          steps: [
            { bot: 'My mouth is watering already! How is it prepared, and what gives it that special balance?', he: '¡Se me hace agua la boca! ¿Cómo se prepara y qué le da ese equilibrio especial?', suggestions: ['It is cooked slowly with fresh herbs and olive oil.', 'A touch of lemon balances the savory flavors.', 'It combines a crisp topping with a velvety sauce.'] },
            { bot: 'What would you pair with it for drinks or dessert?', he: '¿Con qué lo combinarías para beber o de postre?', suggestions: ['It pairs beautifully with a light citrus dessert.', 'I would serve sparkling water with mint and a dark chocolate tart.', 'A crisp green salad on the side keeps it fresh.'] },
            { bot: 'What is one kitchen tip you always share with friends?', he: '¿Cuál es un consejo de cocina que siempre compartes con amigos?', suggestions: ['Always taste as you go to balance seasoning.', 'Simple seasonal ingredients make the biggest difference.', 'Prepare everything before you turn on the heat.'] },
          ],
          more: ['Do you prefer sweet or savory breakfasts?', 'What restaurant atmosphere makes a meal unforgettable?'],
        },
      }),
      makeUnit({
        id: 'm2es3', n: 3, icon: '💼', color: 'cyan', cefr: 'B1+',
        title: 'Negotiation & Diplomatic English',
        he: 'Negociación y comunicación diplomática',
        lead: 'Aprende a proponer cambios, negociar plazos y discrepar con tacto usando estructuras con would y could.',
        canDo: ['Expresar desacuerdo con elegancia', 'Proponer alternativas con could / might', 'Confirmar acuerdos por escrito y de palabra'],
        fact: 'Usar "softeners" como "I see your point, though..." o "Would it be possible to..." hace que cualquier negociación fluya mucho mejor.',
        rules: [
          {
            id: 'm2es-diplo',
            title: 'Inglés diplomático: Would / Could / Might',
            short: 'Suavizar peticiones y propuestas',
            formula: 'Would it be possible to + verb?\nI see your point; however, we might consider + -ing.',
            body: 'En entornos de negocios y diseño, sonar directo puede parecer brusco. Usar <b>would</b>, <b>could</b> y <b>might</b> mantiene firmeza con cortesía.',
            examples: [
              { en: 'Would it be possible to move the deadline to Thursday?', he: '¿Sería posible mover la fecha límite al jueves?' },
              { en: 'I see your point, though we might save time with a simpler layout.', he: 'Entiendo tu punto, aunque podríamos ahorrar tiempo con un diseño más simple.' },
            ],
            mistake: 'You <b>must change</b> the price. → <b>Could we review</b> the budget together?',
            hook: 'Would / Could = firmeza elegante sin fricción.',
          },
        ],
        words: [
          { en: 'deadline', he: 'fecha límite', pron: 'DED-lyn', ex: 'We are right on track to meet the deadline.', exHe: 'Vamos justo a tiempo para cumplir la fecha límite.' },
          { en: 'compromise', he: 'acuerdo / punto medio', pron: 'KOM-pruh-myz', ex: 'Let\'s find a fair compromise for both sides.', exHe: 'Encontremos un punto medio justo para ambas partes.' },
          { en: 'priority', he: 'prioridad', pron: 'pry-OR-i-tee', ex: 'Quality remains our top priority.', exHe: 'La calidad sigue siendo nuestra máxima prioridad.' },
          { en: 'clarify', he: 'aclarar', pron: 'KLAR-i-fy', ex: 'Could you clarify the scope of the project?', exHe: '¿Podrías aclarar el alcance del proyecto?' },
          { en: 'feasible', he: 'viable / factible', pron: 'FEE-zuh-bul', ex: 'That timeline looks completely feasible.', exHe: 'Ese cronograma parece totalmente viable.' },
          { en: 'confirm', he: 'confirmar', pron: 'kun-FERM', ex: 'I will send a short note to confirm our agreement.', exHe: 'Enviaré una nota breve para confirmar nuestro acuerdo.' },
        ],
        reading: {
          title: 'Turning Friction into Partnership',
          passage: 'Strong negotiators rarely raise their voices. Instead, they listen closely, clarify priorities, and propose feasible options. When a client requested a major redesign two days before launch, the team did not say no immediately. They replied, "We would love to include that feature; could we launch the core version on Friday and release the upgrade next week?" Both sides smiled and confirmed the compromise.',
          vocabulary: [
            { en: 'clarify', he: 'aclarar' }, { en: 'priorities', he: 'prioridades' }, { en: 'feasible', he: 'viable' },
            { en: 'requested', he: 'solicitó' }, { en: 'upgrade', he: 'mejora' }, { en: 'confirmed', he: 'confirmaron' }, { en: 'compromise', he: 'punto medio' },
          ],
          questions: [
            { q: 'How did the team handle the last-minute request?', opts: ['They proposed launching in two phases', 'They canceled the project', 'They ignored the client'], ans: 'They proposed launching in two phases', why: 'Propusieron lanzar la versión principal el viernes y la mejora la semana siguiente.' },
            { q: 'What do strong negotiators do first?', opts: ['Listen closely and clarify priorities', 'Speak as fast as possible', 'Refuse every change'], ans: 'Listen closely and clarify priorities', why: 'Dice: they listen closely, clarify priorities, and propose feasible options.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2es3.x1', skill: 'grammar', rule: 'm2es-diplo', q: '___ it be possible to review the samples tomorrow?', opts: ['Would', 'Does', 'Are'], ans: 'Would', why: 'Would it be possible to...? es la fórmula diplomática estándar.', hint: 'Would.' },
          { t: 'gap', id: 'm2es3.x2', skill: 'grammar', rule: 'm2es-diplo', q: 'Completa la petición cortés:', sentence: '___ you clarify the budget for this phase?', ans: ['Could', 'Would'], why: 'Could / Would you clarify...?', hint: 'Could o Would.' },
          { t: 'scr', id: 'm2es3.x3', skill: 'grammar', rule: 'm2es-diplo', q: 'Ordena la frase:', sentence: 'Quality remains our top priority.', ans: ['Quality remains our top priority.'], why: 'Frase clave de negocios.', hint: 'Quality remains...' },
          { t: 'type', id: 'm2es3.x4', skill: 'grammar', rule: 'm2es-diplo', q: 'Escribe la palabra para "fecha límite":', ans: ['deadline'], why: 'deadline = fecha límite.', hint: 'dead + line.' },
          { t: 'mcq', id: 'm2es3.x5', skill: 'grammar', rule: 'm2es-diplo', q: 'We might ___ a phased launch to meet the deadline.', opts: ['consider', 'considering', 'to consider'], ans: 'consider', why: 'Después de might el verbo va en infinitivo sin to.', hint: 'might + verbo base.' },
        ],
        scenario: {
          title: 'Negociación con un proveedor', en: 'Smart Business Negotiation', who: 'Daniel', role: 'proveedor de materiales de diseño',
          desc: 'Negocia con Daniel tiempos de entrega y presupuesto manteniendo un tono cordial y firme.', focus: 'Diplomatic Business English',
          opening: 'Hi Yuli! I reviewed your order. Our standard delivery is three weeks, which is a bit tight for your launch. How would you like to proceed?',
          openingHe: '¡Hola Yuli! Revisé tu pedido. Nuestra entrega estándar es de tres semanas, un poco justa para tu lanzamiento. ¿Cómo te gustaría proceder?',
          steps: [
            { bot: 'I understand your deadline. Would it be feasible to split the delivery into two batches?', he: 'Entiendo tu fecha límite. ¿Sería viable dividir la entrega en dos lotes?', suggestions: ['That sounds like a great compromise!', 'Could you clarify what arrives in the first batch?', 'Yes, as long as the main pieces arrive first.'] },
            { bot: 'Good question. The main pieces would arrive next Friday. How does that fit your priorities?', he: 'Buena pregunta. Las piezas principales llegarían el próximo viernes. ¿Cómo encaja con tus prioridades?', suggestions: ['That works well — quality is our top priority.', 'Would it be possible to confirm that in writing?', 'Perfect, that gives our team enough time to prepare.'] },
            { bot: 'Deal! Anything else you would like me to double-check before we confirm?', he: '¡Trato hecho! ¿Algo más que quieras que verifique antes de confirmar?', suggestions: ['Please confirm the color samples before shipping.', 'Everything is clear, thank you for your flexibility!', 'Let\'s touch base on Wednesday to check progress.'] },
          ],
          more: ['How do you stay calm during a tough negotiation?', 'What makes a business partnership last?'],
        },
      }),
      makeUnit({
        id: 'm2es4', n: 4, icon: '✨', color: 'gold', cefr: 'B1+',
        title: 'Second Conditional & Creative Vision',
        he: 'Imaginación y visión de futuro · Second Conditional',
        lead: 'Imagina escenarios ideales y proyectos soñados usando If + Past Simple, ... would + verbo.',
        canDo: ['Hablar de proyectos soñados e hipótesis', 'Usar If I had / If I were con soltura', 'Expresar ambiciones creativas con fluidez'],
        fact: 'Con "Second Conditional" se suele usar "If I were" para todos los pronombres en inglés cuidado: "If I were launching a brand..."',
        rules: [
          {
            id: 'm2es-cond2',
            title: 'Second Conditional – escenarios imaginarios y visión',
            short: 'If + pasado simple, ... would + verbo',
            formula: 'If I launched a boutique, I would design a calm lounge.\nIf I were you, I would showcase the natural light.',
            body: 'Usamos el <b>Second Conditional</b> para hablar de sueños, hipótesis creativas y consejos elegantes ("Si yo estuviera en tu lugar...").',
            examples: [
              { en: 'If I opened a studio in Madrid, I would combine fashion and coffee.', he: 'Si abriera un estudio en Madrid, combinaría moda y café.' },
              { en: 'If I were you, I would trust your creative instinct.', he: 'Si yo fuera tú, confiaría en tu instinto creativo.' },
            ],
            mistake: 'If I <b>would have</b> time, I would travel. → If I <b>had</b> time, I would travel.',
            hook: 'Pasado en la cláusula If, would en el resultado.',
          },
        ],
        words: [
          { en: 'ambitious', he: 'ambicioso / audaz', pron: 'am-BISH-us', ex: 'It is an ambitious yet realistic vision.', exHe: 'Es una visión ambiciosa pero realista.' },
          { en: 'curate', he: 'curar / seleccionar con criterio', pron: 'KYOOR-ayt', ex: 'She loves to curate timeless pieces.', exHe: 'Le encanta seleccionar piezas atemporales.' },
          { en: 'timeless', he: 'atemporal', pron: 'TYM-lis', ex: 'Great architecture feels effortless and timeless.', exHe: 'La gran arquitectura se siente natural y atemporal.' },
          { en: 'atmosphere', he: 'ambiente / atmósfera', pron: 'AT-mus-feer', ex: 'Warm music transforms the whole atmosphere.', exHe: 'La música cálida transforma todo el ambiente.' },
          { en: 'inspire', he: 'inspirar', pron: 'in-SPYR', ex: 'Travel continues to inspire her collections.', exHe: 'Los viajes siguen inspirando sus colecciones.' },
          { en: 'bold', he: 'audaz / atrevido', pron: 'bohld', ex: 'Sometimes a bold detail makes the whole room shine.', exHe: 'A veces un detalle audaz hace brillar toda la habitación.' },
        ],
        reading: {
          title: 'If You Built Your Dream Space',
          passage: 'Imagine what you would create if you had complete creative freedom. Some designers would curate a bright concept store where guests sip espresso while browsing timeless clothes. Others would renovate a historic courtyard into an open kitchen studio. Even when ideas start as bold dreams, imagining them clearly is often the first step to making them real.',
          vocabulary: [
            { en: 'freedom', he: 'libertad' }, { en: 'curate', he: 'seleccionar' }, { en: 'browsing', he: 'explorando' },
            { en: 'timeless', he: 'atemporal' }, { en: 'courtyard', he: 'patio interior' }, { en: 'bold', he: 'audaz' },
          ],
          questions: [
            { q: 'What would some designers curate with complete freedom?', opts: ['A bright concept store with coffee and timeless clothes', 'A noisy warehouse', 'A strict office building'], ans: 'A bright concept store with coffee and timeless clothes', why: 'Dice: a bright concept store where guests sip espresso while browsing timeless clothes.' },
            { q: 'Why is imagining bold dreams useful?', opts: ['It is often the first step to making them real', 'It replaces all planning', 'It saves money automatically'], ans: 'It is often the first step to making them real', why: 'Dice: imagining them clearly is often the first step to making them real.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2es4.x1', skill: 'grammar', rule: 'm2es-cond2', q: 'If I ___ my own brand, I would focus on timeless style.', opts: ['launched', 'would launch', 'launch'], ans: 'launched', why: 'En Second Conditional la parte de If va en pasado simple.', hint: 'Pasado simple después de If.' },
          { t: 'gap', id: 'm2es4.x2', skill: 'grammar', rule: 'm2es-cond2', q: 'Completa el consejo elegante:', sentence: 'If I ___ you, I would go for the bolder option.', ans: ['were', 'was'], why: 'If I were you = si yo fuera tú.', hint: 'were.' },
          { t: 'scr', id: 'm2es4.x3', skill: 'grammar', rule: 'm2es-cond2', q: 'Ordena la frase:', sentence: 'I would curate a warm, timeless atmosphere.', ans: ['I would curate a warm, timeless atmosphere.'], why: 'I would + verbo + complemento.', hint: 'I would curate...' },
          { t: 'type', id: 'm2es4.x4', skill: 'grammar', rule: 'm2es-cond2', q: 'Completa: If we had a courtyard, we ___ (host) summer dinners.', ans: ['would host'], why: 'Resultado en Second Conditional → would + verbo.', hint: 'would + host.' },
          { t: 'mcq', id: 'm2es4.x5', skill: 'grammar', rule: 'm2es-cond2', q: '¿Qué significa "timeless"?', opts: ['Que nunca pasa de moda', 'Que dura poco', 'Que llega tarde'], ans: 'Que nunca pasa de moda', why: 'timeless = atemporal, clásico.', hint: 'Sin límite de tiempo.' },
        ],
        scenario: {
          title: 'Diseña tu proyecto soñado', en: 'Dream Project Studio', who: 'Elena', role: 'mentora de marcas creativas',
          desc: 'Explora con Elena cómo sería tu espacio o negocio soñado usando Second Conditional.', focus: 'Second Conditional',
          opening: 'Let\'s dream big for a moment! If you could open your dream space anywhere in the world, what would it look and feel like?',
          openingHe: '¡Soñemos en grande por un momento! Si pudieras abrir tu espacio soñado en cualquier lugar del mundo, ¿cómo se vería y sentiría?',
          steps: [
            { bot: 'I can picture it already! What bold detail would immediately catch a visitor\'s eye?', he: '¡Ya me lo imagino! ¿Qué detalle audaz llamaría la atención al instante?', suggestions: ['A sunlit courtyard with olive trees would welcome guests.', 'I would curate a mix of vintage and modern textures.', 'The aroma of fresh pastries would set the atmosphere.'] },
            { bot: 'If you invited three inspiring people to the opening night, what would you serve?', he: 'Si invitaras a tres personas inspiradoras a la inauguración, ¿qué servirías?', suggestions: ['I would serve seasonal tapas and signature mocktails.', 'Simple, refined dishes made with local produce.', 'Artisanal bread, olive oil, and warm conversations.'] },
            { bot: 'What small step could turn part of that dream into reality this year?', he: '¿Qué pequeño paso podría hacer realidad parte de ese sueño este año?', suggestions: ['I could start by building a visual portfolio.', 'I would test the idea with a pop-up event.', 'I could collaborate with a friend who shares my vision.'] },
          ],
          more: ['Which city inspires your sense of style the most?', 'If you could redesign one everyday object, what would it be?'],
        },
      }),
    ],
  };

  /* ---------------- French B1 Continuation (Hebrew UI for Aviv) ---------------- */
  const FR_STAGE2 = {
    stage: 2,
    level: 'B1',
    title: 'מודול המשך · סיפור בעבר, טיולים ודעות (צרפתית B1)',
    subtitle: 'עולים לרמת B1 בצרפתית: Passé composé מול Imparfait, נימוס מתקדם והבעת דעה טבעית.',
    units: [
      makeUnit({
        id: 'm2fr1', n: 1, icon: '🎞️', color: 'pink', cefr: 'B1',
        title: 'Raconter un souvenir (Passé composé & Imparfait)',
        he: 'לספר זיכרון · Passé composé ו-Imparfait',
        lead: 'לומדים לשלב בין תיאור רקע בעבר (Imparfait) לבין פעולות שקרו פתאום (Passé composé).',
        canDo: ['לתאר אווירה ומזג אוויר בעבר עם Imparfait', 'לספר מה קרה ברצף עם Passé composé', 'לשתף חוויות מטיול בצורה טבעית'],
        fact: 'בצרפתית, Imparfait הוא "התמונה" (Il faisait beau) ו-Passé composé הוא "האירוע" (Nous avons visité le Louvre).',
        rules: [
          {
            id: 'm2fr-past',
            title: 'Imparfait (רקע ותיאור) מול Passé composé (אירוע מוגדר)',
            short: 'תפאורה: -ais / -ait · פעולה: ai + participe passé',
            formula: 'Imparfait: Il faisait beau, j\'étais content.\nPassé composé: Soudain, j\'ai rencontré un ami.',
            body: 'כשמספרים סיפור בצרפתית, ה-<b>Imparfait</b> מתאר את המצב, הזמן או ההרגל בעבר, ואילו ה-<b>Passé composé</b> מקדם את העלילה עם אירוע חד-פעמי שהסתיים.',
            examples: [
              { en: 'Il pleuvait quand nous sommes arrivés à Lyon.', he: 'ירד גשם כשהגענו לליון.' },
              { en: 'Pendant que je marchais dans le quartier, j\'ai découvert un café incroyable.', he: 'בזמן שטיילתי בשכונה, גיליתי בית קפה מדהים.' },
            ],
            mistake: 'J\'ai <b>être</b> fatigué. → J\'<b>étais</b> fatigué (מצב ותיאור רגשי לרוב ב-Imparfait).',
            hook: 'תפאורה ותחושה = Imparfait · פעולה חדה שקרתה = Passé composé.',
          },
        ],
        words: [
          { en: 'souvenir', he: 'זיכרון', pron: 'soo-vuh-NEER', ex: 'C\'est un souvenir inoubliable.', exHe: 'זה זיכרון בלתי נשכח.' },
          { en: 'soudain', he: 'לפתע / פתאום', pron: 'soo-DAN', ex: 'Soudain, la musique a commencé.', exHe: 'לפתע, המוזיקה התחילה.' },
          { en: 'découvrir', he: 'לגלות', pron: 'day-koo-VREER', ex: 'J\'adore découvrir de petites ruelles.', exHe: 'אני אוהב לגלות סמטאות קטנות.' },
          { en: 'ambiance', he: 'אווירה', pron: 'ahm-BYAHNS', ex: 'L\'ambiance du marché était chaleureuse.', exHe: 'האווירה בשוק הייתה חמימה.' },
          { en: 'pendant que', he: 'בזמן ש...', pron: 'pahn-DAHN kuh', ex: 'Pendant que nous parlions, le soleil s\'est couché.', exHe: 'בזמן שדיברנו, השמש שקעה.', skipGap: true },
          { en: 'inoubliable', he: 'בלתי נשכח', pron: 'ee-noo-blee-AH-bl', ex: 'Ce voyage reste inoubliable.', exHe: 'הטיול הזה נשאר בלתי נשכח.' },
        ],
        reading: {
          title: 'Un soir d\'automne à Lyon',
          passage: 'L\'automne dernier, il faisait frais et les rues brillaient sous les lumières dorées. Pendant que je cherchais une librairie, j\'ai entendu un violoniste près de la place. L\'ambiance était si chaleureuse que je me suis arrêté pour écouter. Ce simple moment est devenu mon meilleur souvenir du voyage.',
          vocabulary: [
            { en: 'automne', he: 'סתיו' }, { en: 'frais', he: 'קריר' }, { en: 'lumières', he: 'אורות' },
            { en: 'librairie', he: 'חנות ספרים' }, { en: 'ambiance', he: 'אווירה' }, { en: 'souvenir', he: 'זיכרון' },
          ],
          questions: [
            { q: 'איך היה מזג האוויר בליון באותו ערב?', opts: ['קריר עם רחובות מוארים', 'חם מאוד וגשום', 'מושלג וסוער'], ans: 'קריר עם רחובות מוארים', why: 'כתוב: il faisait frais et les rues brillaient.' },
            { q: 'למה המספר עצר ליד הכיכר?', opts: ['כדי להאזין לכנר באווירה החמימה', 'כדי לחכות לאוטובוס', 'כי חנות הספרים הייתה סגורה'], ans: 'כדי להאזין לכנר באווירה החמימה', why: 'כתוב: j\'ai entendu un violoniste... je me suis arrêté pour écouter.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2fr1.x1', skill: 'grammar', rule: 'm2fr-past', q: 'תיאור מזג אוויר בעבר: Il ___ très beau ce matin-là.', opts: ['faisait', 'a fait', 'fait'], ans: 'faisait', why: 'תיאור רקע ומזג אוויר בעבר → Imparfait (faisait).', hint: 'Imparfait של faire.' },
          { t: 'gap', id: 'm2fr1.x2', skill: 'grammar', rule: 'm2fr-past', q: 'השלם פעולה שהסתיימה:', sentence: 'Soudain, j\'___ découvert un petit bistrot.', ans: ['ai'], why: 'Passé composé עם avoir → j\'ai découvert.', hint: 'j\'ai.' },
          { t: 'scr', id: 'm2fr1.x3', skill: 'grammar', rule: 'm2fr-past', q: 'סדר את המשפט: האווירה הייתה חמימה.', sentence: 'L\'ambiance était très chaleureuse.', ans: ["L'ambiance était très chaleureuse."], why: 'נושא + était + תואר.', hint: 'מתחיל ב-L\'ambiance.' },
          { t: 'type', id: 'm2fr1.x4', skill: 'grammar', rule: 'm2fr-past', q: 'תרגם "זיכרון" לצרפתית:', ans: ['souvenir'], why: 'souvenir = זיכרון.', hint: 'מתחיל ב-souv.' },
          { t: 'mcq', id: 'm2fr1.x5', skill: 'grammar', rule: 'm2fr-past', q: 'Pendant que je ___ dans le parc, il a commencé à pleuvoir.', opts: ['marchais', 'ai marché', 'marche'], ans: 'marchais', why: 'אחרי pendant que פעולה מתמשכת בעבר → Imparfait (marchais).', hint: 'Imparfait.' },
        ],
        scenario: {
          title: 'שיחה על זיכרון מטיול', en: 'Souvenir de voyage', who: 'Camille', role: 'חברה פריזאית שאוהבת לטייל',
          desc: 'ספר לקאמי על רגע יפה מטיול ושלב בין תיאור רקע לסיפור.', focus: 'Passé composé & Imparfait',
          opening: 'Salut Aviv ! J\'adore les histoires de voyage. Quel est un souvenir inoubliable d\'un endroit que tu as visité ?',
          openingHe: 'היי אביב! אני אוהבת סיפורי טיולים. מהו זיכרון בלתי נשכח ממקום שביקרת בו?',
          steps: [
            { bot: 'Quelle belle image ! Quel temps faisait-il et comment était l\'ambiance ?', he: 'איזו תמונה יפה! איך היה מזג האוויר ואיך הייתה האווירה?', suggestions: ['Il faisait beau et l\'ambiance était calme.', 'Il faisait frais mais les rues étaient magnifiques.', 'Tout le monde souriait autour de nous.'] },
            { bot: 'Et qu\'est-ce qui s\'est passé ensuite ?', he: 'ומה קרה אחר כך?', suggestions: ['Nous avons découvert un petit café local.', 'Soudain, nous avons rencontré des gens très sympas.', 'J\'ai pris plein de photos.'] },
            { bot: 'Tu aimerais y retourner un jour ?', he: 'היית רוצה לחזור לשם יום אחד?', suggestions: ['Oui, j\'aimerais beaucoup y retourner bientôt !', 'Absolument, c\'est un endroit spécial.', 'Peut-être l\'année prochaine en automne.'] },
          ],
          more: ['Tu préfères la mer ou la montagne ?', 'Quel plat français as-tu envie de goûter ?'],
        },
      }),
      makeUnit({
        id: 'm2fr2', n: 2, icon: '☕', color: 'purple', cefr: 'B1',
        title: 'Politesse & Souhaits (Le Conditionnel)',
        he: 'נימוס, בקשות ומשאלות · Conditionnel présent',
        lead: 'מדברים בצרפתית מעודנת עם je voudrais, j\'aimerais, pourriez-vous — המפתח לשיחה טבעית בצרפת.',
        canDo: ['לבקש בנימוס בבית קפה, מלון ועבודה', 'להביע משאלות והצעות עם j\'aimerais ו-on pourrait', 'לתת עצות עדינות עם tu devrais'],
        fact: 'בצרפת, פתיחה ב-"Bonjour, excusez-moi, est-ce que je pourrais..." פותחת כמעט כל דלת בחיוך.',
        rules: [
          {
            id: 'm2fr-cond',
            title: 'התנאי המנומס – Le Conditionnel présent',
            short: 'je voudrais · j\'aimerais · pourriez-vous · tu devrais',
            formula: 'Je voudrais + שם עצם / פועל במקור\nJ\'aimerais + פועל במקור\nPourriez-vous + פועל במקור?',
            body: 'ה-<b>Conditionnel</b> משמש בצרפתית לנימוס ("הייתי רוצה"), הצעות ("אפשר ש...") ועצות ("כדאי לך"). זו אחת הצורות השימושיות ביותר בשיחה אמיתית.',
            examples: [
              { en: 'J\'aimerais réserver une table près de la fenêtre.', he: 'הייתי רוצה להזמין שולחן ליד החלון.' },
              { en: 'Pourriez-vous m\'indiquer le chemin du musée ?', he: 'האם תוכל/י להראות לי את הדרך למוזיאון?' },
            ],
            mistake: 'Je <b>veux</b> un café (ישיר מדי). → <b>Je voudrais</b> un café, s\'il vous plaît.',
            hook: 'בצרפתית מנומסת: תמיד עדיף je voudrais / j\'aimerais על je veux.',
          },
        ],
        words: [
          { en: 'réserver', he: 'להזמין מקום', pron: 'ray-zer-VAY', ex: 'Je voudrais réserver pour deux personnes.', exHe: 'הייתי רוצה להזמין לשני אנשים.' },
          { en: 'conseiller', he: 'להמליץ / לייעץ', pron: 'kohn-say-YAY', ex: 'Qu\'est-ce que vous me conseillez ?', exHe: 'על מה אתה ממליץ לי?' },
          { en: 'volontiers', he: 'בשמחה', pron: 'voh-lohn-TYAY', ex: 'Oui, volontiers !', exHe: 'כן, בשמחה!' },
          { en: 'profiter', he: 'ליהנות מ / לנצל לטובה', pron: 'proh-fee-TAY', ex: 'J\'aimerais profiter du soleil en terrasse.', exHe: 'הייתי רוצה ליהנות מהשמש במרפסת.' },
          { en: 'idéal', he: 'אידיאלי', pron: 'ee-day-AHL', ex: 'Ce serait idéal pour notre réunion.', exHe: 'זה יהיה אידיאלי לפגישה שלנו.' },
          { en: 'suggérer', he: 'להציע', pron: 'soo-zhay-RAY', ex: 'On pourrait suggérer une autre heure.', exHe: 'אפשר להציע שעה אחרת.' },
        ],
        reading: {
          title: 'À la terrasse du Marais',
          passage: 'En arrivant au café dans le Marais, Aviv sourit au serveur : « Bonjour ! Nous aimerions une table en terrasse, si possible. » Le serveur répond volontiers et propose une petite table au soleil. Ensuite, Aviv demande : « Qu\'est-ce que vous nous conseillez comme plat du jour ? » Grâce à sa politesse naturelle, la conversation devient immédiatement chaleureuse.',
          vocabulary: [
            { en: 'terrasse', he: 'מרפסת / ישיבה בחוץ' }, { en: 'serveur', he: 'מלצר' }, { en: 'volontiers', he: 'בשמחה' },
            { en: 'conseillez', he: 'ממליץ' }, { en: 'plat du jour', he: 'מנת היום' }, { en: 'politesse', he: 'נימוס' },
          ],
          questions: [
            { q: 'איפה אביב מבקש לשבת?', opts: ['במרפסת בחוץ (en terrasse)', 'ליד המטבח', 'בקומה השנייה'], ans: 'במרפסת בחוץ (en terrasse)', why: 'כתוב: Nous aimerions une table en terrasse.' },
            { q: 'מה אביב שואל את המלצר?', opts: ['מה הוא ממליץ כמנת היום', 'מתי בית הקפה נסגר', 'איפה תחנת המטרו'], ans: 'מה הוא ממליץ כמנת היום', why: 'כתוב: Qu\'est-ce que vous nous conseillez comme plat du jour ?' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2fr2.x1', skill: 'grammar', rule: 'm2fr-cond', q: 'איך מבקשים בנימוס "הייתי רוצה להזמין שולחן"?', opts: ['J\'aimerais réserver une table.', 'Je veux table.', 'J\'aime réserver une table.'], ans: 'J\'aimerais réserver une table.', why: 'J\'aimerais + מקור היא צורה מנומסת ונעימה.', hint: 'J\'aimerais.' },
          { t: 'gap', id: 'm2fr2.x2', skill: 'grammar', rule: 'm2fr-cond', q: 'השלם בקשה מנומסת:', sentence: '___-vous m\'aider, s\'il vous plaît ?', ans: ['Pourriez'], why: 'Pourriez-vous = האם תוכל/י בבקשה?', hint: 'Conditionnel של pouvoir.' },
          { t: 'scr', id: 'm2fr2.x3', skill: 'grammar', rule: 'm2fr-cond', q: 'סדר את השאלה: על מה אתה ממליץ לי?', sentence: 'Qu\'est-ce que vous me conseillez ?', ans: ["Qu'est-ce que vous me conseillez ?"], why: 'שאלה שימושית במסעדה או בחנות.', hint: 'מתחיל ב-Qu\'est-ce que.' },
          { t: 'type', id: 'm2fr2.x4', skill: 'grammar', rule: 'm2fr-cond', q: 'איך אומרים "בשמחה" בצרפתית?', ans: ['volontiers'], why: 'volontiers = בשמחה.', hint: 'מתחיל ב-vol.' },
          { t: 'mcq', id: 'm2fr2.x5', skill: 'grammar', rule: 'm2fr-cond', q: 'להציע רעיון ביחד: On ___ aller au cinéma ce soir.', opts: ['pourrait', 'peut-être', 'voulons'], ans: 'pourrait', why: 'On pourrait + מקור = יכולנו / אולי נלך...', hint: 'Conditionnel של pouvoir.' },
        ],
        scenario: {
          title: 'הזמנה והמלצות בביסטרו', en: 'Au bistrot parisien', who: 'Julien', role: 'מלצר פריזאי אדיב',
          desc: 'הזמן שולחן, בקש המלצה והתנהל בצרפתית מנומסת וקולחת.', focus: 'Conditionnel & Politesse',
          opening: 'Bonjour Monsieur ! Bienvenue au Bistrot de la Seine. Vous aimeriez une table à l\'intérieur ou en terrasse ?',
          openingHe: 'שלום אדוני! ברוך הבא לביסטרו דה לה סן. תרצה שולחן בפנים או במרפסת?',
          steps: [
            { bot: 'Avec plaisir ! Suivez-moi. Est-ce que je pourrais vous apporter quelque chose à boire ?', he: 'בשמחה! בוא אחריי. אוכל להביא לך משהו לשתות?', suggestions: ['Je voudrais une carafe d\'eau et un café, s\'il vous plaît.', 'Qu\'est-ce que vous me conseillez ?', 'Oui, volontiers ! Un jus frais, s\'il vous plaît.'] },
            { bot: 'Aujourd\'hui notre chef recommande la tarte aux légumes de saison. Ça vous tente ?', he: 'היום השף ממליץ על טארט ירקות עונתיים. בא לך?', suggestions: ['Ça a l\'air délicieux, je vais prendre ça !', 'Oui, volontiers, avec une petite salade.', 'Pourriez-vous me dire ce qu\'il y a dedans ?'] },
            { bot: 'Parfait ! Vous souhaiteriez voir la carte des desserts plus tard ?', he: 'מושלם! תרצה לראות את תפריט הקינוחים מאוחר יותר?', suggestions: ['Oui, ce serait idéal, merci beaucoup !', 'Peut-être un café après le repas.', 'Avec plaisir, j\'adore les desserts français.'] },
          ],
          more: ['Qu\'est-ce que tu aimerais visiter à Paris ?', 'Tu préfères dîner tôt ou tard ?'],
        },
      }),
      makeUnit({
        id: 'm2fr3', n: 3, icon: '🗣️', color: 'cyan', cefr: 'B1',
        title: 'Donner son avis et débattre',
        he: 'להביע דעה ולנמק · À mon avis / Parce que',
        lead: 'לומדים להביע עמדה ברורה בצרפתית, להסכים או לחלוק בנימוס ולהשתמש במילות קישור של B1.',
        canDo: ['לפתוח דעה עם À mon avis / Je pense que', 'לחבר רעיונות עם cependant, donc, car', 'לנהל שיחה עמוקה על תרבות וטכנולוגיה'],
        fact: 'בצרפתית, ניהול דיון ערני ומנומס על רעיונות נחשב לאמנות שיחה אהובה מאוד!',
        rules: [
          {
            id: 'm2fr-opinion',
            title: 'הבעת דעה ומילות קישור – À mon avis / Cependant / Donc',
            short: 'À mon avis · Je trouve que · Cependant (עם זאת) · Donc (לכן)',
            formula: 'À mon avis, + משפט\nJe pense que + משפט\nC\'est utile ; cependant, il faut faire attention.',
            body: 'כדי להישמע טבעי ברמת B1, פותחים עם <b>À mon avis</b> (לדעתי) או <b>Je trouve que</b> (אני מוצא ש...), ומחברים נימוקים עם <b>parce que / car</b> (כי) ו-<b>donc</b> (לכן).',
            examples: [
              { en: 'À mon avis, apprendre une langue ouvre l\'esprit.', he: 'לדעתי, לימוד שפה פותח את הראש.' },
              { en: 'Le travail à distance est pratique ; cependant, le contact humain reste essentiel.', he: 'עבודה מרחוק נוחה; עם זאת, קשר אנושי נשאר חיוני.' },
            ],
            mistake: 'Je pense <b>de</b> c\'est bien. → Je pense <b>que</b> c\'est bien.',
            hook: 'תמיד que אחרי je pense / je trouve!',
          },
        ],
        words: [
          { en: 'avis', he: 'דעה', pron: 'ah-VEE', ex: 'À mon avis, cette idée est excellente.', exHe: 'לדעתי, הרעיון הזה מצוין.' },
          { en: 'cependant', he: 'עם זאת', pron: 'suh-pahn-DAHN', ex: 'C\'est rapide ; cependant, c\'est moins personnel.', exHe: 'זה מהיר; עם זאת, זה פחות אישי.' },
          { en: 'essentiel', he: 'חיוני / מהותי', pron: 'eh-sahn-SYEL', ex: 'La pratique régulière est essentielle.', exHe: 'תרגול קבוע הוא חיוני.' },
          { en: 'avantage', he: 'יתרון', pron: 'ah-vahn-TAHZH', ex: 'Quel est le principal avantage ?', exHe: 'מהו היתרון העיקרי?' },
          { en: 'partager', he: 'לשתף / לחלוק', pron: 'par-tah-ZHAY', ex: 'Je partage ton point de vue.', exHe: 'אני חולק את נקודת המבט שלך.' },
          { en: 'progrès', he: 'התקדמות', pron: 'proh-GREH', ex: 'On voit de vrais progrès chaque semaine.', exHe: 'רואים התקדמות אמיתית בכל שבוע.' },
        ],
        reading: {
          title: 'Apprendre avec l\'IA aujourd\'hui',
          passage: 'À mon avis, les outils numériques changent positivement l\'apprentissage des langues. Le grand avantage, c\'est qu\'on peut pratiquer dix minutes par jour sans stress. Cependant, la technologie ne remplace pas la curiosité humaine. Donc, la meilleure méthode combine des exercices intelligents et de vraies conversations.',
          vocabulary: [
            { en: 'outils', he: 'כלים' }, { en: 'apprentissage', he: 'למידה' }, { en: 'avantage', he: 'יתרון' },
            { en: 'cependant', he: 'עם זאת' }, { en: 'remplace', he: 'מחליפה' }, { en: 'donc', he: 'לכן' },
          ],
          questions: [
            { q: 'מה היתרון הגדול של כלים דיגיטליים לפי הטקסט?', opts: ['אפשר לתרגל 10 דקות ביום בלי לחץ', 'לא צריך ללמוד אוצר מילים', 'לומדים ביום אחד'], ans: 'אפשר לתרגל 10 דקות ביום בלי לחץ', why: 'כתוב: on peut pratiquer dix minutes par jour sans stress.' },
            { q: 'מהי השיטה הטובה ביותר לפי המסקנה?', opts: ['שילוב של תרגול חכם ושיחות אמיתיות', 'רק קריאת מילון', 'רק צפייה בסרטים'], ans: 'שילוב של תרגול חכם ושיחות אמיתיות', why: 'כתוב: combine des exercices intelligents et de vraies conversations.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2fr3.x1', skill: 'grammar', rule: 'm2fr-opinion', q: 'Je pense ___ le français est une belle langue.', opts: ['que', 'de', 'qui'], ans: 'que', why: 'אחרי je pense משתמשים ב-que.', hint: 'que.' },
          { t: 'gap', id: 'm2fr3.x2', skill: 'grammar', rule: 'm2fr-opinion', q: 'השלם ביטוי דעה:', sentence: 'À mon ___, il faut pratiquer chaque jour.', ans: ['avis'], why: 'À mon avis = לדעתי.', hint: 'avis.' },
          { t: 'scr', id: 'm2fr3.x3', skill: 'grammar', rule: 'm2fr-opinion', q: 'סדר את המשפט:', sentence: 'Je partage ton point de vue.', ans: ['Je partage ton point de vue.'], why: 'ביטוי טבעי להסכמה.', hint: 'Je partage...' },
          { t: 'type', id: 'm2fr3.x4', skill: 'grammar', rule: 'm2fr-opinion', q: 'איך אומרים "יתרון" בצרפתית?', ans: ['avantage'], why: 'avantage = יתרון.', hint: 'מתחיל ב-av.' },
          { t: 'mcq', id: 'm2fr3.x5', skill: 'grammar', rule: 'm2fr-opinion', q: 'השלם מילת ניגוד: C\'est pratique ; ___, je préfère parler en vrai.', opts: ['cependant', 'donc', 'parce que'], ans: 'cependant', why: 'cependant = עם זאת (ניגוד).', hint: 'ניגוד.' },
        ],
        scenario: {
          title: 'דיון קפה אינטליגנטי', en: 'Débat au café', who: 'Sophie', role: 'עיתונאית תרבות סקרנית',
          desc: 'דון עם סופי על שפות, עבודה וטכנולוגיה בצרפתית קולחת.', focus: 'Opinions B1',
          opening: 'Salut Aviv ! À ton avis, quel est le plus grand avantage de parler plusieurs langues aujourd\'hui ?',
          openingHe: 'היי אביב! לדעתך, מהו היתרון הגדול ביותר של לדבר כמה שפות היום?',
          steps: [
            { bot: 'Je partage tout à fait ton avis ! Cependant, qu\'est-ce qui est le plus difficile quand on apprend ?', he: 'אני לגמרי מסכימה איתך! עם זאת, מה הכי מאתגר כשלומדים?', suggestions: ['À mon avis, c\'est de parler vite sans hésiter.', 'Je trouve que la prononciation demande de la pratique.', 'Cependant, plus on parle, plus ça devient naturel.'] },
            { bot: 'C\'est vrai ! Qu\'est-ce qui t\'aide à voir de vrais progrès ?', he: 'זה נכון! מה עוזר לך לראות התקדמות אמיתית?', suggestions: ['Les conversations régulières sont essentielles.', 'J\'aime écouter et répéter des phrases utiles.', 'Dix minutes par jour font une grande différence.'] },
            { bot: 'Quel sujet aimerais-tu maîtriser ensuite en français ?', he: 'באיזה נושא תרצה לשלוט אחר כך בצרפתית?', suggestions: ['J\'aimerais parler plus librement du travail et des projets.', 'Je voudrais comprendre les films français sans sous-titres.', 'J\'aimerais voyager en France en toute aisance.'] },
          ],
          more: ['Tu préfères travailler au bureau ou à distance ?', 'Quel livre ou film recommandes-tu ?'],
        },
      }),
      makeUnit({
        id: 'm2fr4', n: 4, icon: '🗼', color: 'gold', cefr: 'B1',
        title: 'Aisance et expressions vivantes',
        he: 'שטף וביטויים אותנטיים בצרפתית',
        lead: 'ביטויים שצרפתים באמת משתמשים בהם ביומיום כדי להישמע טבעי, שנון ובטוח.',
        canDo: ['להשתמש בביטויים יומיומיים כמו ça vaut le coup ו-avoir hâte', 'להבין קיצורים טבעיים בדיבור', 'לנהל שיחה זורמת ללא תרגום מילולי'],
        fact: 'הביטוי "Ça vaut le coup" ("זה שווה את זה") הוא אחד הביטויים הכי אהובים בצרפתית יומיומית!',
        rules: [
          {
            id: 'm2fr-idioms',
            title: 'ביטויים שמקפיצים את הצרפתית לרמת שטף',
            short: 'avoir hâte de · ça vaut le coup · en fait · du coup',
            formula: 'J\'ai hâte de + פועל (אני ממש מצפה ל...)\nÇa vaut le coup ! (זה שווה את זה!)\nEn fait, ... (למעשה...)',
            body: 'שילוב של ביטויים קטנים כמו <b>en fait</b> (למעשה), <b>avoir hâte de</b> (לצפות בקוצר רוח) ו-<b>ça vaut le coup</b> הופך את הצרפתית שלך לטבעית וזורמת מיד.',
            examples: [
              { en: 'J\'ai vraiment hâte de visiter la Provence.', he: 'אני ממש מצפה לבקר בפרובאנס.' },
              { en: 'Le trajet est long, mais ça vaut le coup !', he: 'הנסיעה ארוכה, אבל זה שווה את זה!' },
            ],
            mistake: 'Je suis hâte de... → <b>J\'ai</b> hâte de... (משתמשים בפועל avoir!).',
            hook: 'avoir hâte = לצפות בקוצר רוח (תמיד עם avoir).',
          },
        ],
        words: [
          { en: 'avoir hâte', he: 'לצפות בקוצר רוח', pron: 'ah-vwar AHT', ex: 'J\'ai hâte de commencer la suite.', exHe: 'אני מצפה בקוצר רוח להתחיל את ההמשך.', skipGap: true },
          { en: 'en fait', he: 'למעשה / בעצם', pron: 'ahn FET', ex: 'En fait, c\'est plus simple que je pensais.', exHe: 'למעשה, זה פשוט יותר ממה שחשבתי.', skipGap: true },
          { en: 'aisance', he: 'קלות / שטף טבעי', pron: 'eh-ZAHNS', ex: 'Tu parles avec beaucoup plus d\'aisance.', exHe: 'אתה מדבר בהרבה יותר שטף.' },
          { en: 'ravi', he: 'שמח מאוד / נלהב', pron: 'rah-VEE', ex: 'Je suis ravi de te revoir.', exHe: 'אני שמח מאוד לראות אותך שוב.' },
          { en: 'incroyable', he: 'מדהים / לא ייאמן', pron: 'an-krwa-YAH-bl', ex: 'La vue depuis la tour est incroyable.', exHe: 'הנוף מהמגדל מדהים.' },
          { en: 'quotidien', he: 'יומיום', pron: 'ko-tee-DYEN', ex: 'Ces expressions servent au quotidien.', exHe: 'הביטויים האלה שימושיים ביומיום.' },
        ],
        reading: {
          title: 'Parler comme un vrai local',
          passage: 'Quand on discute avec des amis en France, on remarque vite que les manuels ne disent pas tout. En fait, les gens utilisent souvent de petites expressions vivantes : « ça vaut le coup », « j\'ai hâte » ou « pas de souci ». Les intégrer peu à peu donne une vraie aisance et rend chaque échange plus naturel.',
          vocabulary: [
            { en: 'discute', he: 'משוחחים' }, { en: 'manuels', he: 'ספרי לימוד' }, { en: 'en fait', he: 'למעשה' },
            { en: 'souci', he: 'דאגה / בעיה' }, { en: 'aisance', he: 'שטף' }, { en: 'échange', he: 'שיחה / חילופי דברים' },
          ],
          questions: [
            { q: 'מה מגלים כשמשוחחים עם חברים בצרפת?', opts: ['שמשתמשים הרבה בביטויים חיים וטבעיים', 'שמדברים רק כמו בספרי לימוד', 'שלא משתמשים בברכות'], ans: 'שמשתמשים הרבה בביטויים חיים וטבעיים', why: 'כתוב: les gens utilisent souvent de petites expressions vivantes.' },
            { q: 'מה נותן שילוב הביטויים האלה?', opts: ['שטף אמיתי ושיחה טבעית יותר', 'מבטא אנגלי', 'האטה בדיבור'], ans: 'שטף אמיתי ושיחה טבעית יותר', why: 'כתוב: donne une vraie aisance et rend chaque échange plus naturel.' },
          ],
        },
        grammar: [
          { t: 'mcq', id: 'm2fr4.x1', skill: 'grammar', rule: 'm2fr-idioms', q: 'השלם: J\'___ hâte de partir en vacances !', opts: ['ai', 'suis', 'vais'], ans: 'ai', why: 'הביטוי הוא avoir hâte → J\'ai hâte.', hint: 'avoir.' },
          { t: 'gap', id: 'm2fr4.x2', skill: 'grammar', rule: 'm2fr-idioms', q: 'השלם את הביטוי "זה שווה את זה":', sentence: 'C\'est un peu loin, mais ça ___ le coup !', ans: ['vaut'], why: 'Ça vaut le coup.', hint: 'vaut.' },
          { t: 'scr', id: 'm2fr4.x3', skill: 'grammar', rule: 'm2fr-idioms', q: 'סדר את המשפט:', sentence: 'En fait, c\'est très simple.', ans: ["En fait, c'est très simple."], why: 'En fait + פסיק + משפט.', hint: 'En fait...' },
          { t: 'type', id: 'm2fr4.x4', skill: 'grammar', rule: 'm2fr-idioms', q: 'תרגם "מדהים" לצרפתית:', ans: ['incroyable'], why: 'incroyable = מדהים.', hint: 'מתחיל ב-inc.' },
          { t: 'mcq', id: 'm2fr4.x5', skill: 'grammar', rule: 'm2fr-idioms', q: 'מה פירוש "Pas de souci" ?', opts: ['אין בעיה / בכיף', 'יש לי בעיה', 'אל תלך'], ans: 'אין בעיה / בכיף', why: 'ביטוי יומיומי נפוץ מאוד בצרפתית.', hint: 'souci = דאגה.' },
        ],
        scenario: {
          title: 'שיחה חופשית בפריז', en: 'Conversation libre à Paris', who: 'Lucas', role: 'חבר פריזאי שנון',
          desc: 'שוחח בחופשיות עם לוקאס ושלב ביטויים אותנטיים בצרפתית.', focus: 'Expressions vivantes',
          opening: 'Salut Aviv ! Ravi de te retrouver ! Alors, qu\'est-ce que tu as hâte de faire cette semaine ?',
          openingHe: 'היי אביב! שמח מאוד לפגוש אותך שוב! אז למה אתה מצפה בקוצר רוח השבוע?',
          steps: [
            { bot: 'Génial ! Et en fait, tu trouves que ton français progresse avec plus d\'aisance ?', he: 'מעולה! ולמעשה, אתה מרגיש שהצרפתית שלך מתקדמת ביותר שטף?', suggestions: ['Oui, en fait je me sens beaucoup plus à l\'aise !', 'Ça vaut vraiment le coup de pratiquer un peu chaque jour.', 'Pas de souci pour les phrases courtes maintenant !'] },
            { bot: 'Ça vaut vraiment le coup ! Si on se retrouvait à Paris demain, où irions-nous ?', he: 'זה לגמרי שווה את זה! אם היינו נפגשים בפריז מחר, לאן היינו הולכים?', suggestions: ['On pourrait marcher le long de la Seine.', 'J\'aimerais découvrir un café dans le Marais.', 'Un bon restaurant et une exposition, ce serait incroyable !'] },
            { bot: 'Marché conclu ! Je suis ravi de voir ton niveau B1 !', he: 'סגור! אני נלהב לראות את רמת ה-B1 שלך!', suggestions: ['Merci beaucoup, j\'ai hâte de continuer !', 'On garde le rythme ensemble !', 'À très bientôt pour la prochaine conversation !'] },
          ],
          more: ['Quelle est ton expression française préférée ?', 'Un film français qui vaut le coup selon toi ?'],
        },
      }),
    ],
  };

  function buildScenariosFromUnits(units, level) {
    return units.map((unit) => ({
      id: `scenario-${unit.id}`,
      icon: unit.icon || '📘',
      title: unit.scenario.title,
      en: unit.scenario.en,
      who: unit.scenario.who,
      role: unit.scenario.role,
      level: level || unit.cefr || 'A2',
      focus: unit.scenario.focus,
      unit: unit.id,
      desc: unit.scenario.desc,
      opening: unit.scenario.opening,
      openingHe: unit.scenario.openingHe,
      startWords: (unit.words || []).slice(0, 2).map((w) => ({ en: w.en, he: w.he })),
      steps: unit.scenario.steps,
      more: unit.scenario.more,
      words: (unit.words || []).slice(0, 3).map((w) => ({ en: w.en, he: w.he })),
    }));
  }

  function cloneModule(mod, stageNum, overrideTitle, overrideLevel) {
    const copy = JSON.parse(JSON.stringify(mod));
    copy.stage = stageNum;
    if (overrideTitle) copy.title = overrideTitle;
    if (overrideLevel) {
      copy.level = overrideLevel;
      copy.units.forEach((u) => { u.cefr = overrideLevel; });
    }
    // Ensure distinct unit IDs per stage so progress never collides across stages
    if (stageNum === 3) {
      copy.units.forEach((u, idx) => {
        if (!u.id.startsWith('m3')) {
          const oldId = u.id;
          const newId = `m3u${idx + 1}`;
          u.id = newId;
          (u.grammar || []).forEach((g) => {
            g.id = g.id.replace(oldId, newId);
          });
        }
      });
    }
    copy.scenarios = buildScenariosFromUnits(copy.units, copy.level);
    return copy;
  }

  window.getContinuationModule = function getContinuationModule(profile, stage) {
    const st = Math.max(2, Math.min(3, Number(stage) || 2));
    const lang = (profile?.learningLanguage || 'English').toLowerCase();
    const ui = (profile?.uiLanguage || 'he').toLowerCase();
    const baseLevel = String(profile?.level || 'A1').toUpperCase();

    if (lang === 'french') {
      if (st === 2) return cloneModule(FR_STAGE2, 2);
      return cloneModule(FR_STAGE2, 3, 'מודול המשך 2 · שטף מתקדם (צרפתית B1+)', 'B1+');
    }
    if (ui === 'es') {
      if (st === 2) return cloneModule(ES_EN_STAGE2, 2);
      return cloneModule(ES_EN_STAGE2, 3, 'Módulo de Continuación 2 · Maestría y Liderazgo (B2)', 'B2');
    }
    // Hebrew-UI English learners
    const startsAtA2Plus = ['A2', 'B1', 'B1+', 'B2', 'C1', 'C2'].includes(baseLevel);
    if (startsAtA2Plus) {
      if (st === 2) return cloneModule(EN_STAGE_B1, 2, 'מודול המשך 1 · חשיבה, חוויות ושיח חופשי (B1)', 'B1');
      return cloneModule(EN_STAGE_B1, 3, 'מודול המשך 2 · שטף, נימוק ואתגרים (B1+)', 'B1+');
    }
    if (st === 2) return cloneModule(EN_STAGE2_A1P, 2);
    return cloneModule(EN_STAGE_B1, 3, 'מודול המשך 2 · קפיצה ל-A2/B1 ושטף בשיחה', 'A2');
  };

  window.getModuleStageInfo = function getModuleStageInfo(profile, currentStage) {
    const stage = Math.max(1, Number(currentStage) || 1);
    const ui = (profile?.uiLanguage || 'he').toLowerCase();
    if (ui === 'es') {
      return {
        currentStage: stage,
        maxBuiltInStage: 3,
        stages: [
          { n: 1, label: 'Módulo 1', desc: 'Base y fluidez' },
          { n: 2, label: 'Continuación 1', desc: 'Estrategia y matices' },
          { n: 3, label: 'Continuación 2', desc: 'Maestría B2' },
        ],
      };
    }
    return {
      currentStage: stage,
      maxBuiltInStage: 3,
      stages: [
        { n: 1, label: 'מודול 1', desc: 'מסלול יסוד' },
        { n: 2, label: 'המשך 1', desc: 'קפיצת מדרגה' },
        { n: 3, label: 'המשך 2', desc: 'שטף ואלופים' },
      ],
    };
  };
})();
