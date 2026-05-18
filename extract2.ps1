Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxFile = (Get-ChildItem *.docx | Sort-Object Length -Descending)[0].FullName
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxFile)
$entry = $zip.GetEntry('word/document.xml')
if ($entry -ne $null) {
    $stream = $entry.Open()
    $reader = New-Object IO.StreamReader($stream)
    $xml = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    
    # Remove XML tags using regex
    $text = $xml -replace '<[^>]+>', ''
    Out-File -FilePath ".\extracted.txt" -InputObject $text -Encoding UTF8
}
$zip.Dispose()
