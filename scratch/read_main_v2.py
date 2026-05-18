
import sys

def read_lines(file_path, start, end):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        for i in range(start, min(end, len(lines))):
            print(f"{i+1}: {lines[i]}", end='')

if __name__ == "__main__":
    read_lines(r'c:\授業づくりAI\main.js', 0, 800)
