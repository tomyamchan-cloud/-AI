import io
import os

path = r'c:\授業づくりAI\main.js'

def patch():
    if not os.path.exists(path):
        print("File not found")
        return

    with io.open(path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()

    new_lines = []
    in_system_prompt = False
    prompt_updated = False

    for line in lines:
        if 'const systemInstruction =' in line:
            in_system_prompt = True
            new_lines.append('    const systemInstruction = `\n')
            new_lines.append('【授業づくりAI：運用・応答マニュアルV4（教育課程論理統合版）】\n')
            new_lines.append('╔══════════════════════════════════════════════════╗\n')
            new_lines.append('║ 第0条：思考の憲法（前提知識1～3 ＋ NotebookLM） ║\n')
            new_lines.append('║ 回答生成前に必ずこの論理を照合し、提示形式を守れ ║\n')
            new_lines.append('╚══════════════════════════════════════════════════╝\n')
            new_lines.append('【憲法第0条・補足：教科の「名前」と「中身」の完全分離】\n')
            new_lines.append('制度としての教育課程を正しく守りつつ、実体としての実効性を担保するため、以下の論理を厳守せよ。\n')
            new_lines.append('1. 教科の名前（在籍学部優先）：\n')
            new_lines.append('   - 教科名は、児童生徒が「実際に在籍している学部」の設置科目に準じる。\n')
            new_lines.append('   - 高等部在籍なら「職業」「家庭」等。中学部在籍なら「職業・家庭」。小学部在籍なら「生活」。\n')
            new_lines.append('   - 高等部の生徒に対して、主教科を「生活科」と呼ぶのは教育課程編成上、不適切である。\n')
            new_lines.append('2. 教科の中身（発達段階優先）：\n')
            new_lines.append('   - 実際に引用する目標・内容は、その生徒の「発達段階」に合わせて下位学部のものを引用する。\n')
            new_lines.append('   - 例：高等部2年だが発達が小学部3段階なら、「教科の名前（在籍学部優先）：職業」「教科の中身（発達段階優先）：生活科（小学部）」となる。\n')
            new_lines.append('この2つ（教科の名前と中身）を、すべての回答の冒頭で必ず明記すること。\n\n')
            new_lines.append('【絶対ルール：ハイライトの絶対開通（一言一句引用）】\n')
            new_lines.append('data-cited に渡す引用文は、原本のファイルから「一言一句」抽出したテキストを渡せ。\n')
            new_lines.append('- 絶対に要約するな。要約するとハイライト機能が機能しなくなる。\n')
            new_lines.append('- 句読点、改行、助詞の一つまで、原本の通りにコピー＆ペーストせよ。\n\n')
            new_lines.append('1. 応答フロー（名前と中身の明記）\n')
            new_lines.append('   全回答の冒頭で以下を必ず出力すること。\n')
            new_lines.append('   教科の名前（在籍学部優先）：[学部に基づいた名前]\n')
            new_lines.append('   教科の中身（発達段階優先）：[発達段階に基づいた内容の出典]\n\n')
            new_lines.append('2. 引用フォーマット（厳守）\n')
            new_lines.append('[学部・教科名] [段階] [目標/内容の該当箇所] [引用原文を一言一句そのまま] 【引用：ファイル名｜引用原文を一言一句そのままコピー】\n')
            prompt_updated = True
            continue

        if in_system_prompt:
            if '`;' in line:
                in_system_prompt = False
                new_lines.append('`;\n')
            continue # Skip old prompt lines
        
        # Patch data-cited logic
        if 'const blockCited =' in line and '.replace(/"/g, \'&quot;\')' in line:
            new_lines.append('                    const blockCited = (citationMatches[0]?.citedText || structCitedText);\n')
            continue

        # Patch cleanTarget logic
        if 'cleanTarget = citedText' in line:
            new_lines.append('            cleanTarget = citedText.replace(/^\\[.+?\\]\\s*\\[.+?\\]\\s*\\[.+?\\]\\s*/, "").trim();\n')
            # Skip the next few lines of the old multi-line replace
            continue
        if in_system_prompt == False and ('.replace(' in line or '.trim()' in line) and len(new_lines) > 0 and 'cleanTarget =' in new_lines[-1]:
             continue

        new_lines.append(line)

    with io.open(path, 'w', encoding='utf-8') as f:
        for line in new_lines:
            f.write(line)
    
    print("Patch applied")

if __name__ == "__main__":
    patch()
