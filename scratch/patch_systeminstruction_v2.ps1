$path = "main.js"
$scratch = "C:\Users\miyak\.gemini\antigravity\brain\83f76cd6-b8fc-4d66-9dc0-d95b08a9efa4\scratch"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$newPrompt = [System.IO.File]::ReadAllText("$scratch\new_prompt.txt", [System.Text.Encoding]::UTF8)

# Use [char]96 for backtick to avoid PS parser issues
$startTag = "const systemInstruction = " + [char]96
$endTag = [char]96 + ";"

$sIdx = $content.IndexOf($startTag)
if ($sIdx -ge 0) {
    $eIdx = $content.IndexOf($endTag, $sIdx)
    if ($eIdx -ge 0) {
        $result = $content.Substring(0, $sIdx) + $newPrompt + $content.Substring($eIdx + 2)
        [System.IO.File]::WriteAllText($path, $result, [System.Text.Encoding]::UTF8)
        Write-Host "systemInstruction patched"
    } else {
        Write-Host "End tag not found"
    }
} else {
    Write-Host "Start tag not found"
}
