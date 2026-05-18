import os

bat_content = """@echo off
chcp 932 > nul
title 授業づくりAI ローカルサーバー
echo ===================================================
echo 授業づくりAI ローカルサーバーを起動しています...
echo ===================================================

:: Pythonの実行パスを探索
set PYTHON_CMD=python
python --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    set PYTHON_CMD=py
    py --version >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        :: フルパスでの検索を試みる
        if exist "%LOCALAPPDATA%\\Programs\\Python\\Python311\\python.exe" (
            set PYTHON_CMD="%LOCALAPPDATA%\\Programs\\Python\\Python311\\python.exe"
        ) else if exist "%LOCALAPPDATA%\\Programs\\Python\\Python312\\python.exe" (
            set PYTHON_CMD="%LOCALAPPDATA%\\Programs\\Python\\Python312\\python.exe"
        ) else if exist "%LOCALAPPDATA%\\Programs\\Python\\Python310\\python.exe" (
            set PYTHON_CMD="%LOCALAPPDATA%\\Programs\\Python\\Python310\\python.exe"
        ) else (
            echo.
            echo ---------------------------------------------------
            echo 【エラー】Pythonが見つかりません。
            echo 授業づくりAIを動かすにはPythonが必要です。
            echo.
            echo お手数ですが、Microsoft Storeが開いた場合は
            echo そこから「Python」を入手（インストール）してください。
            echo インストール完了後、再度このファイルをダブルクリックしてください。
            echo ---------------------------------------------------
            echo.
            :: Microsoft Store版Pythonのトリガーを引く
            python
            pause
            exit /b 1
        )
    )
)

%PYTHON_CMD% app_server.py

if %ERRORLEVEL% neq 0 (
    echo.
    echo ---------------------------------------------------
    echo エラーが発生しました。サーバーが正常に起動できませんでした。
    echo ---------------------------------------------------
    pause
)
"""

with open("c:\\授業づくりAI\\授業づくりAIを起動.bat", "w", encoding="cp932") as f:
    f.write(bat_content)

print("BAT file created successfully.")
