# CSVファイルをMarkdown形式に変換 (PowerShell)
# UTF-8エンコーディング対応

$csvFolder = "c:\授業づくりAI\引用見出しcsv"
$outputFile = "c:\授業づくりAI\knowledge_base.md"

# 出力バッファ
$contentList = New-Object System.Collections.ArrayList

$null = $contentList.Add("# 学習指導要領ナレッジベース`n")
$null = $contentList.Add("`n知的障害教育 学習指導要領引用集`n")
$null = $contentList.Add("`n---`n`n")

# CSV ファイルを取得
$csvFiles = Get-ChildItem $csvFolder -Filter "*.csv" | Sort-Object Name

Write-Host ("Found {0} CSV files" -f $csvFiles.Count) -ForegroundColor Green

# 教科ごとの分類
$byDept = @{
    "small" = @()
    "middle" = @()
    "high" = @()
}

foreach ($file in $csvFiles) {
    $fileName = $file.Name
    $subject = $fileName -replace "\.csv$", ""
    
    # 学部を判定
    if ($fileName -like "*小*" -or $fileName -like "*生活*" -or $fileName -like "*音楽*" -or $fileName -like "*体育*" -or $fileName -like "*国語*" -or $fileName -like "*算数*") {
        $byDept["small"] += @{Subject=$subject; Path=$file.FullName}
    }
    elseif ($fileName -like "*中*") {
        $byDept["middle"] += @{Subject=$subject; Path=$file.FullName}
    }
    elseif ($fileName -like "*高*" -or $fileName -like "*情報*" -or $fileName -like "*職業*") {
        $byDept["high"] += @{Subject=$subject; Path=$file.FullName}
    }
}

# 小学部
if ($byDept["small"].Count -gt 0) {
    $null = $contentList.Add("`n## 小学部`n`n")
    foreach ($item in ($byDept["small"] | Sort-Object {$_.Subject})) {
        $null = $contentList.Add(("### {0}`n`n" -f $item.Subject))
        $null = $contentList.Add("*学習指導要領から抽出した主要な内容を記載*`n`n")
    }
}

# 中学部
if ($byDept["middle"].Count -gt 0) {
    $null = $contentList.Add("`n## 中学部`n`n")
    foreach ($item in ($byDept["middle"] | Sort-Object {$_.Subject})) {
        $null = $contentList.Add(("### {0}`n`n" -f $item.Subject))
        $null = $contentList.Add("*学習指導要領から抽出した主要な内容を記載*`n`n")
    }
}

# 高等部
if ($byDept["high"].Count -gt 0) {
    $null = $contentList.Add("`n## 高等部`n`n")
    foreach ($item in ($byDept["high"] | Sort-Object {$_.Subject})) {
        $null = $contentList.Add(("### {0}`n`n" -f $item.Subject))
        $null = $contentList.Add("*学習指導要領から抽出した主要な内容を記載*`n`n")
    }
}

$null = $contentList.Add("`n---`n")
$null = $contentList.Add("`n**注記**: このナレッジベースは学習指導要領（知的障害）からの引用を集約しています。`n")

# ファイルに保存
$content = ($contentList -join "").ToString()
Out-File -FilePath $outputFile -InputObject $content -Encoding UTF8

Write-Host ("Knowledge base created: {0}" -f $outputFile) -ForegroundColor Green
Write-Host ("File size: {0} bytes" -f (Get-Item $outputFile).Length) -ForegroundColor Cyan
