$path = "c:\授業づくりAI\main.js"
$lines = Get-Content -Path $path -Encoding utf8

$newLines = New-Object System.Collections.Generic.List[string]
$inSystemPrompt = $false

foreach ($line in $lines) {
    if ($line.Contains("const systemInstruction =")) {
        $inSystemPrompt = $true
        $newLines.Add("    const systemInstruction = ``")
        $newLines.Add("【授業づくりAI：運用・応答マニュアルV4（教育課程論理統合版）】")
        $newLines.Add("╔══════════════════════════════════════════════════╗")
        $newLines.Add("║ 第0条：思考の憲法（前提知識1～3 ＋ NotebookLM） ║")
        $newLines.Add("║ 回答生成前に必ずこの論理を照合し、提示形式を守れ ║")
        $newLines.Add("╚══════════════════════════════════════════════════╝")
        $newLines.Add("【憲法第0条・補足：教科の「名前」と「中身」の完全分離】")
        $newLines.Add("制度としての教育課程を正しく守りつつ、実体としての実効性を担保するため、以下の論理を厳守せよ。")
        $newLines.Add("1. 教科の名前（在籍学部優先）：")
        $newLines.Add("   - 教科名は、児童生徒が「実際に在籍している学部」の設置科目に準じる。")
        $newLines.Add("   - 高等部在籍なら「職業」「家庭」等。中学部在籍なら「職業・家庭」。小学部在籍なら「生活」。")
        $newLines.Add("   - 高等部の生徒に対して、主教科を「生活科」と呼ぶのは教育課程編成上、不適切である。")
        $newLines.Add("2. 教科の中身（発達段階優先）：")
        $newLines.Add("   - 実際に引用する目標・内容は、その生徒の「発達段階」に合わせて下位学部のものを引用する。")
        $newLines.Add("   - 例：高等部2年だが発達が小学部3段階なら、「教科の名前（在籍学部優先）：職業」「教科の中身（発達段階優先）：生活科（小学部）」となる。")
        $newLines.Add("この2つ（教科の名前と中身）を、すべての回答の冒頭で必ず明記すること。")
        $newLines.Add("")
        $newLines.Add("【絶対ルール：ハイライトの絶対開通（一言一句引用）】")
        $newLines.Add("data-cited に渡す引用文は、原本のファイルから「一言一句」抽出したテキストを渡せ。")
        $newLines.Add("- 絶対に要約するな。要約するとハイライト機能が機能しなくなる。")
        $newLines.Add("- 句読点、改行、助詞の一つまで、原本の通りにコピー＆ペーストせよ。")
        $newLines.Add("")
        $newLines.Add("1. 応答フロー（名前と中身の明記）")
        $newLines.Add("   全回答の冒頭で以下を必ず出力すること。")
        $newLines.Add("   教科の名前（在籍学部優先）：[学部に基づいた名前]")
        $newLines.Add("   教科の中身（発達段階優先）：[発達段階に基づいた内容の出典]")
        $newLines.Add("")
        $newLines.Add("2. 引用フォーマット（厳守）")
        $newLines.Add("[学部・教科名] [段階] [目標/内容の該当箇所] [引用原文を一言一句そのまま] 【引用：ファイル名｜引用原文を一言一句そのままコピー】")
        continue
    }

    if ($inSystemPrompt) {
        if ($line.Contains("`;")) {
            $inSystemPrompt = $false
            $newLines.Add("`;")
        }
        continue
    }

    if ($line.Contains("const blockCited =") -and $line.Contains(".replace(")) {
        $newLines.Add("                    const blockCited = (citationMatches[0]?.citedText || structCitedText);")
        continue
    }

    if ($line.Contains("cleanTarget = citedText")) {
        $newLines.Add("            cleanTarget = citedText.replace(/^\[.+?\]\s*\[.+?\]\s*\[.+?\]\s*/, '''').trim();")
        $skipReplace = $true
        continue
    }
    
    if ($skipReplace -and ($line.Contains(".replace(") -or $line.Contains(".trim()"))) {
        if ($line.Contains(";")) { $skipReplace = $false }
        continue
    }
    $skipReplace = $false

    $newLines.Add($line)
}

$newLines | Set-Content -Path $path -Encoding utf8
Write-Host "Patch applied"
