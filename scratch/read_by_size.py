
import os

sizes = [2173, 4812, 9895]
dir_path = r'c:\授業づくりAI'
for filename in os.listdir(dir_path):
    stat = os.stat(os.path.join(dir_path, filename))
    if stat.st_size in sizes:
        print(f"--- FILE: {filename} (Size: {stat.st_size}) ---")
        try:
            with open(os.path.join(dir_path, filename), 'r', encoding='utf-8', errors='ignore') as f:
                print(f.read())
        except Exception as e:
            print(f"Error reading {filename}: {e}")
        print("\n")
