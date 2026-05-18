import os
import glob
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

folder = r"c:\Users\miyak\OneDrive\デスクトップ\授業づくりAI"
files = glob.glob(os.path.join(folder, "*.txt"))

for f in files:
    print(f"========== {os.path.basename(f)} ==========")
    for enc in ['utf-8', 'cp932', 'euc_jp']:
        try:
            with open(f, 'r', encoding=enc) as file:
                content = file.read()
            print(f"Encoded as: {enc}")
            print(content)
            break
        except UnicodeDecodeError:
            pass
    print("\n")
