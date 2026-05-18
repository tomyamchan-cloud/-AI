import csv

file_path = r"c:\授業づくりAI\引用見出しcsv\小 生活科.csv"

encodings = ['utf-8', 'shift_jis', 'cp932', 'utf-16']

for enc in encodings:
    try:
        with open(file_path, 'r', encoding=enc) as f:
            reader = csv.reader(f)
            header = next(reader)
            print(f"--- Encoding: {enc} ---")
            print(f"Header: {header}")
            for i, row in enumerate(reader):
                if i < 5:
                    print(f"Row {i}: {row}")
                else:
                    break
        break
    except Exception as e:
        print(f"Failed with {enc}: {e}")
