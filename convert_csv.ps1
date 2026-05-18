$enc = [System.Text.Encoding]::GetEncoding(932)
$path = "c:\授業づくりAI\引用見出しcsv\小 生活科.csv"
$text = [System.IO.File]::ReadAllText($path, $enc)
[System.IO.File]::WriteAllText("c:\授業づくりAI\temp_csv_utf8.txt", $text, [System.Text.Encoding]::UTF8)
