@echo off
REM 双击运行即可生成目录树，中文目录不会乱码
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0list_tree.ps1"
pause
