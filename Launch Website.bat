@echo off
cd /d "%~dp0"
call "C:\Program Files\nodejs\npm.cmd" run build
if errorlevel 1 (
  echo Build failed.
  pause
  exit /b 1
)
start "" powershell -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:4173'"
echo Starting local website server on http://127.0.0.1:4173
echo Keep this window open while using the site.
node "%~dp0serve-dist.cjs"
