#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CSVファイルをMarkdown形式のナレッジベースに変換するスクリプト
学部（小学部、中学部、高等部）と段階（1段階、2段階、3段階）ごとに整理
"""

import csv
import os
import glob
import sys
import io
from collections import defaultdict
from pathlib import Path

# UTF-8出力を設定
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# CSVフォルダのパス
csv_folder = r"c:\授業づくりAI\引用見出しcsv"
output_file = r"c:\授業づくりAI\knowledge_base.md"

# 学部マッピング
DEPARTMENT_MAP = {
    '小学部': '小',
    '小学部（小）': '小',
    '中学部': '中',
    '中学部（中）': '中',
    '高等部': '高',
    '高等部（高）': '高',
    '高': '高',
    '中': '中',
    '小': '小',
}

# CSVファイルのナレッジベース
knowledge_base = {}

def detect_encoding(file_path):
    """ファイルのエンコーディングを検出"""
    encodings = ['utf-8', 'cp932', 'shift_jis', 'euc_jp']
    for enc in encodings:
        try:
            with open(file_path, 'r', encoding=enc) as f:
                f.read(100)
            return enc
        except (UnicodeDecodeError, UnicodeError):
            continue
    return 'utf-8'  # デフォルト

def parse_csv_file(file_path):
    """CSVファイルを解析"""
    file_name = os.path.basename(file_path)
    print(f"📖 読み込み中: {file_name}")
    
    encoding = detect_encoding(file_path)
    print(f"   エンコーディング: {encoding}")
    
    data = []
    try:
        with open(file_path, 'r', encoding=encoding) as f:
            reader = csv.reader(f)
            for row_num, row in enumerate(reader):
                # 空行をスキップ
                if not any(row) or all(not cell.strip() for cell in row):
                    continue
                # ヘッダーなど最初の数行をスキップか確認
                if row_num < 5:
                    # ヘッダー判定
                    if any(keyword in str(row) for keyword in ['学習指導要領', '段階', '引用見出し']):
                        continue
                data.append(row)
    except Exception as e:
        print(f"   ⚠️  エラー: {e}")
    
    return data

def extract_subject_and_department(file_name):
    """ファイル名から教科と学部を抽出"""
    # ファイル名の`.csv`を削除
    base_name = file_name.replace('.csv', '')
    
    # マッピング
    if '情報科' in base_name:
        subject = '情報科'
        department = '高'
    elif '職業' in base_name and '家庭' in base_name:
        subject = '職業・家庭科'
        department = '中' if '中学部' in base_name else '高'
    elif '体育' in base_name or '保健体育' in base_name:
        subject = '体育・保健体育科'
        department = '小' if '国語' not in base_name else '中'
    elif '図画' in base_name or '美術' in base_name:
        subject = '図画工作・美術科'
        department = '小' if '図化' in base_name else ('中' if '美術' in base_name and '中' not in base_name else '中')
    elif '外国' in base_name:
        subject = '外国語科・外国語活動'
        department = '小' if '小' in base_name else '中'
    elif base_name == '生活科':
        subject = '生活科'
        department = '小'
    elif base_name == '社会科':
        subject = '社会科'
        department = '中'
    elif base_name == '理科':
        subject = '理科'
        department = '中'
    elif base_name == '国語科':
        subject = '国語科'
        department = '小'
    elif base_name == '算数、数学科':
        subject = '算数・数学科'
        department = '小'
    elif base_name == '音楽科':
        subject = '音楽科'
        department = '小'
    else:
        subject = base_name
        department = '未分類'
    
    return subject, department

def create_markdown_from_csv(csv_files):
    """複数のCSVファイルをMarkdownに変換"""
    md_content = []
    md_content.append("# 📚 学習指導要領ナレッジベース\n")
    md_content.append("＜知的障害教育 学習指導要領引用集＞\n")
    md_content.append("---\n\n")
    
    # 学部別のグループ化
    by_department = defaultdict(list)
    
    for csv_file in csv_files:
        file_name = os.path.basename(csv_file)
        subject, department = extract_subject_and_department(file_name)
        by_department[department].append((subject, csv_file))
    
    # 学部順（小→中→高）で処理
    dept_order = ['小', '中', '高']
    
    for dept in dept_order:
        if dept not in by_department:
            continue
        
        if dept == '小':
            dept_label = "## 小学部\n"
        elif dept == '中':
            dept_label = "## 中学部\n"
        else:
            dept_label = "## 高等部\n"
        
        md_content.append(dept_label)
        
        for subject, csv_file in by_department[dept]:
            md_content.append(f"\n### {subject}\n")
            
            data = parse_csv_file(csv_file)
            
            if not data:
                md_content.append("*データなし*\n")
                continue
            
            # CSVのヘッダー行を推測（最初の行が見出しの可能性）
            md_content.append("| | |\n")
            md_content.append("|---|---|\n")
            
            for row in data[:20]:  # 最初の20行を抽出
                if len(row) >= 2:
                    cell1 = row[0].strip() if row[0] else ""
                    cell2 = ' '.join([cell.strip() for cell in row[1:] if cell.strip()])
                    if cell1 or cell2:
                        md_content.append(f"| {cell1} | {cell2[:100]}... |\n" if len(cell2) > 100 else f"| {cell1} | {cell2} |\n")
            
            md_content.append("\n")
    
    return ''.join(md_content)

def main():
    # CSV ファイルを取得
    csv_files = glob.glob(os.path.join(csv_folder, "*.csv"))
    
    if not csv_files:
        print("❌ CSVファイルが見つかりません")
        return
    
    print(f"✅ 見つかったCSVファイル: {len(csv_files)}個\n")
    
    # Markdownに変換
    markdown = create_markdown_from_csv(sorted(csv_files))
    
    # ファイルに保存
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown)
    
    print(f"\n✅ Markdownファイルを保存しました: {output_file}")
    print(f"📄 ファイルサイズ: {len(markdown)} 文字")

if __name__ == "__main__":
    main()
