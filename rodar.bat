@echo off
title blessy-bio - servidor local
cd /d "%~dp0"
echo ============================================
echo  Instalando dependencias (pode demorar)...
echo ============================================
call npm install
if errorlevel 1 (
  echo.
  echo FALHOU o npm install. Node/npm instalado?
  pause
  exit /b 1
)
echo.
echo ============================================
echo  Subindo o servidor em http://localhost:3000
echo ============================================
call npm run dev
pause
