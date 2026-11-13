$json = '{"email":"admin@gefen.local","password":"gefenadmin123"}'
curl.exe -X POST http://127.0.0.1:8087/api/admins -H "Content-Type: application/json" -d $json