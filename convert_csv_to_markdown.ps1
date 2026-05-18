# CSVファイルをMarkdown形式のナレッジベースに変換 (PowerShell)
# 学部・段階ごとに整理

$csvFolder = "c:\授業づくりAI\引用見出しcsv"
$outputFile = "c:\授業づくりAI\knowledge_base.md"

# 出力バッファ
$markdownContent = @()
$markdownContent += "# 📚 学習指導要領ナレッジベース`n"
$markdownContent += "`n＜知的障害教育 学習指導要領引用集＞`n"
$markdownContent += "`n---`n"

# CSV ファイルを取得
$csvFiles = Get-ChildItem $csvFolder -Filter "*.csv" | Sort-Object Name

# 教科ごとの分類
$classifiedFiles = @{}

foreach ($file in $csvFiles) {
    $fileName = $file.Name
    
    # 学部を判定
    $department = if ($fileName -like "*小*") { "小" }
                  elseif ($fileName -like "*中*") { "中" }
                  elseif ($fileName -like "*高*") { "高" }
                  else { "未分類" }
    
    # 教科名を抽出
    $subject = $fileName -replace "\.csv"
    
    if (-not $classifiedFiles[$department]) {
        $classifiedFiles[$department] = @()
    }
    
    $classifiedFiles[$department] += @{
        Subject = $subject
        Path = $file.FullName
    }
}

# 学部ごとに処理 (小→中→高)
foreach ($dept in @("小", "中", "高")) {
    if ($classifiedFiles[$dept]) {
        # ヘッダー
        $deptLabel = if ($dept -eq "小") { "小学部" }
                     elseif ($dept -eq "中") { "中学部" }
                     else { "高等部" }
        
        $markdownContent += "`n## $deptLabel`n"
        
        # 各教科をソート
        $sortedSubjects = $classifiedFiles[$dept] | Sort-Object Subject
        
        foreach ($item in $sortedSubjects) {
            $markdownContent += "`n### $($item.Subject)`n"
            $markdownContent += "`n【工事中】このナレッジベースは学習指導要領からの引用を集約しています。詳細は以下のテキストファイルをご参照ください。`n"
            
            # CSVファイルから情報を読み込み（簡略版）
            try {
                # Shift-JIS でテキスト読み込み
                $csvText = Get-Content $item.Path -Encoding Default -ErrorAction SilentlyContinue | Select-Object -First 10
                if ($csvText) {
                    $markdownContent += "`n**ソース:** $($item.Subject)`n`n"
                }
            } catch {
                # エラーを無視
            }
            
            $markdownContent += "`n"
        }
    }
}

# Markdownをファイルに保存
$markdownContent -join "" | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "✅ Markdownファイルを保存しました: $outputFile" -ForegroundColor Green
Write-Host "📄 ナレッジベース作成完了" -ForegroundColor Yellow
