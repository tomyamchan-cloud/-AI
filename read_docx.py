import zipfile
import xml.etree.ElementTree as ET
import glob

files = glob.glob('*.docx')
for file_path in files:
    if '各教科等を合わせて指導' in file_path:
        with zipfile.ZipFile(file_path, 'r') as zf:
            xml_content = zf.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        text = [node.text for node in tree.findall('.//w:t', ns) if node.text]
        print(''.join(text))
