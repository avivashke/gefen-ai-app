$content = Get-Content 'G:\My Drive\OneDrive\עסק פרטי\שיעורים פרטיים\חופית\AI\gefen-ai-app\index.html' -Raw
$idx = $content.IndexOf('עשר דקות אנגלית כל יום מנצחות שעה אחת פעם בשבוע')
$snippet = $content.Substring($idx, 300)
$snippet