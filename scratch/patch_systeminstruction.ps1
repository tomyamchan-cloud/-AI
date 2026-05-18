$path = "main.js"
$scratch = "C:\Users\miyak\.gemini\antigravity\brain\83f76cd6-b8fc-4d66-9dc0-d95b08a9efa4\scratch"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$newPrompt = [System.IO.File]::ReadAllText("$scratch\new_prompt.txt", [System.Text.Encoding]::UTF8)

# Regex to find the systemInstruction block
# Note: we need to escape the backtick for PowerShell regex
$pattern = "(?s)const systemInstruction = `.*?`;"

if ($content -match $pattern) {
    # We use Replace because -replace might have issues with $ in the replacement string
    $startIdx = $content.IndexOf("const systemInstruction = `")
    if ($startIdx -ge 0) {
        $endIdx = $content.IndexOf("`;", $startIdx)
        if ($endIdx -ge 0) {
            $result = $content.Substring(0, $startIdx) + $newPrompt + $content.Substring($endIdx + 2)
            [System.IO.File]::WriteAllText($path, $result, [System.Text.Encoding]::UTF8)
            Write-Host "systemInstruction patched"
        }
    }
} else {
    Write-Host "systemInstruction pattern not found"
}
