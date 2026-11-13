$body = @{identity="admin@gefen.local"; password="gefenadmin123"} | ConvertTo-Json
$response = Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:8087/api/admins/auth-with-password" -ContentType "application/json" -Body $body
$response.token
$response.admin