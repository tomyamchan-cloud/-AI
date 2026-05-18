
$files = Get-ChildItem -Path "c:\授業づくりAI" -Filter "txt.*.txt"
foreach ($f in $files) {
    Write-Host "--- FILE: $($f.Name) ---"
    Get-Content -Path $f.FullName -Encoding UTF8
    Write-Host "`n"
}
