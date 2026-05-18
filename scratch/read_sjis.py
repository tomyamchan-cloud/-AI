import os

files = [
    r"C:\授業づくりAI\【重要】授業づくりAIの答え方.txt",
    r"C:\授業づくりAI\応答ロジックのルール.txt"
]

for f in files:
    print(f"--- {os.path.basename(f)} ---")
    try:
        with open(f, 'r', encoding='shift-jis') as file:
            print(file.read())
    except Exception as e:
        print(f"Error: {e}")
