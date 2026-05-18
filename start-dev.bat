@echo off
title Solar TPC Start Dev
echo =======================================================
echo     KHOI DONG DONG THOI FRONTEND ^& BACKEND
echo =======================================================

echo [1/2] Dang khoi dong Spring Boot Backend...
start "Spring Boot Server" cmd /k "cd solar_tpc_server && gradlew bootRun"

echo [2/2] Dang khoi dong Next.js Frontend...
start "Next.js Frontend" cmd /k "cd solar_tpc_client && npm run dev"

echo.
echo Da phat lenh khoi dong ca 2 project trong cac cua so rieng biet!
echo Ban co the tat cua so hien tai nay di.
echo.
