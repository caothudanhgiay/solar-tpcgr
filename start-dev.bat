@echo off
title Solar TPC Start Dev
echo =======================================================
echo     KHOI DONG DONG THOI CAC PROJECT
echo =======================================================

echo [1/3] Dang khoi dong Spring Boot Backend...
start "Spring Boot Server" cmd /k "cd solar_tpc_server && gradlew bootRun"

echo [2/3] Dang khoi dong Next.js Client...
start "Next.js Client" cmd /k "cd solar_tpc_client && npm run dev"

echo [3/3] Dang khoi dong Vue.js Admin...
start "Vue.js Admin" cmd /k "cd solar_tpc_admin && npm run dev"

echo.
echo Da phat lenh khoi dong ca 3 project trong cac cua so rieng biet!
echo Ban co the tat cua so hien tai nay di.
echo.
