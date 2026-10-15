@echo off
title Solar TPC Stop Dev

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0stop-dev.ps1"

pause
