@echo off
title Solar TPC Stop Dev
echo =======================================================
echo     DUNG TAT CA CAC PROJECT FRONTEND ^& BACKEND
echo =======================================================

echo Dang tat Spring Boot Backend...
taskkill /F /FI "WINDOWTITLE eq Spring Boot Server*" /T >nul 2>&1

echo Dang tat Next.js Client...
taskkill /F /FI "WINDOWTITLE eq Next.js Client*" /T >nul 2>&1

echo Dang tat Vue.js Admin...
taskkill /F /FI "WINDOWTITLE eq Vue.js Admin*" /T >nul 2>&1

echo.
echo Da tat tat ca cac project!
pause
