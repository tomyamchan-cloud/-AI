import os

keywords = ['買', '金銭', '店', '支払', '買物', '買い物']
files = ['小 生活科.txt', '小 国語.txt']
encodings = ['utf-8', 'cp932', 'shift_jis']

for f in files:
    for enc in encodings:
        try:
            with open(f, 'r', encoding=enc) as file:
                lines = file.readlines()
            print(f'--- {f} ({enc}) ---')
            for i, line in enumerate(lines):
                if any(k in line for k in keywords):
                    print(f'Line {i+1}: {line.strip()}')
            break
        except Exception:
            pass
