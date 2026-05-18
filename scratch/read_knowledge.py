
import os

dir_path = r'c:\授業づくりAI'
for filename in os.listdir(dir_path):
    if filename.startswith('txt.') and filename.endswith('.txt'):
        print(f"--- FILE: {filename} ---")
        try:
            with open(os.path.join(dir_path, filename), 'r', encoding='utf-8') as f:
                print(f.read())
        except Exception as e:
            print(f"Error reading {filename}: {e}")
        print("\n")
