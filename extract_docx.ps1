Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("c:\Users\miyak\OneDrive\デスクトップ\授業づくりAI\各教科等を合わせて指導を行う場合 各教科等を合わせて指導を行う場合とは.docx")
$entry = $zip.GetEntry('word/document.xml')
if ($entry -ne $null) {
    $stream = $entry.Open()
    $reader = New-Object IO.StreamReader($stream)
    $xml = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    
    # Remove XML tags
    $text = $xml -replace '<[^>]+>', ''
    Out-File -FilePath "c:\Users\miyak\OneDrive\デスクトップ\授業づくりAI\extracted.txt" -InputObject $text -Encoding UTF8
}
$zip.Dispose()
