$OutputEncoding = [Console]::OutputEncoding = [Text.Encoding]::UTF8
$baseDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$dataObject = @{}
$files = Get-ChildItem -Path $baseDir -Recurse -Include "*.txt", "*.md"
foreach ($file in $files) {
    if ($file.FullName -match "scratch") { continue }
    $relativePath = $file.FullName.Substring($baseDir.Length + 1).Replace('\', '/')
    try {
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::GetEncoding("shift_jis"))
    } catch {
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    }
    $dataObject[$relativePath] = $content
}
$jsonString = $dataObject | ConvertTo-Json -Depth 5 -Compress
$jsContent = "const knowledgeData = $jsonString;"
[System.IO.File]::WriteAllText((Join-Path $baseDir "knowledge_data.js"), $jsContent, [System.Text.Encoding]::UTF8)
Write-Host "Success"
