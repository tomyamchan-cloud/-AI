$path = "main.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Regex to match the cleanTarget assignment block across multiple lines
$pattern = "(?s)let cleanTarget = citedText\s*\.replace\(.*?\)\s*\.replace\(.*?\)\s*\.trim\(\);"
$replacement = 'let cleanTarget = citedText.replace(/^\[.+?\]\s*\[.+?\]\s*\[.+?\]\s*/, "").trim();'

if ($content -match $pattern) {
    $content = $content -replace $pattern, $replacement
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
    Write-Host "cleanTarget patched"
} else {
    # Try a more relaxed pattern if the first one fails
    $pattern2 = "(?s)let cleanTarget = citedText\s*\.replace\(.*?\)\s*\.replace\(.*?\)\s*\.trim\(\)"
    if ($content -match $pattern2) {
        $content = $content -replace $pattern2, $replacement
        [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
        Write-Host "cleanTarget patched (pattern 2)"
    } else {
        Write-Host "cleanTarget pattern not found"
    }
}
