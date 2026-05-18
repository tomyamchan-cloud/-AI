$Content = @"
@echo off
title 授業づくりAI ローカルサーバー
echo ===================================================
echo 授業づくりAI ローカルサーバーを起動しています...
echo ===================================================

python app_server.py
if %ERRORLEVEL% equ 0 exit /b

py app_server.py
if %ERRORLEVEL% equ 0 exit /b

python3 app_server.py
if %ERRORLEVEL% equ 0 exit /b

echo.
echo ---------------------------------------------------
echo 【エラー】Pythonがインストールされていません。
echo ---------------------------------------------------
echo サーバーを起動するには Python が必要です。
echo ブラウザでダウンロードページを開きます。
echo ダウンロードしてインストール後に、もう一度このファイルを起動してください。
echo ---------------------------------------------------
start https://www.python.org/downloads/windows/
pause
"@
[IO.File]::WriteAllText("c:\授業づくりAI\授業づくりAIを起動.bat", $Content, [Text.Encoding]::GetEncoding(932))
