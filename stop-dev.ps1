$ErrorActionPreference = 'SilentlyContinue'

Write-Host "======================================================="
Write-Host "    DUNG TAT CA CAC PROJECT FRONTEND & BACKEND"
Write-Host "======================================================="

function Stop-ByPort {
    param([int]$Port, [string]$Label)
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($conns) {
        $procIds = $conns | Select-Object -ExpandProperty OwningProcess -Unique
        foreach ($procId in $procIds) {
            Write-Host "Dang tat $Label (port $Port, PID $procId)..."
            taskkill /PID $procId /T /F | Out-Null
        }
    } else {
        Write-Host "$Label (port $Port): khong dang chay."
    }
}

function Stop-ByCommandLine {
    param([string]$Pattern, [string]$Label)
    $procs = Get-CimInstance Win32_Process -Filter "Name='cmd.exe'" |
        Where-Object { $_.CommandLine -match $Pattern }
    foreach ($p in $procs) {
        Write-Host "Dang dong cua so con lai cua $Label (PID $($p.ProcessId))..."
        taskkill /PID $p.ProcessId /T /F | Out-Null
    }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host ""
Write-Host "[1/3] Spring Boot Backend..."
# gradlew bootRun mac dinh chay qua Gradle Daemon (tien trinh nen, tach khoi cua so
# cmd goc) nen chi taskkill /T cua so cmd co the khong dung duoc app dang chay ben trong
# daemon. Goi gradlew --stop truoc de dam bao daemon dung sach.
$backendDir = Join-Path $scriptDir 'solar_tpc_server'
if (Test-Path (Join-Path $backendDir 'gradlew.bat')) {
    Push-Location $backendDir
    & .\gradlew.bat --stop 2>$null | Out-Null
    Pop-Location
}
Stop-ByPort -Port 8080 -Label "Spring Boot Backend"
Stop-ByCommandLine -Pattern 'solar_tpc_server.*gradlew' -Label "Spring Boot Server"

Write-Host ""
Write-Host "[2/3] Next.js Client..."
Stop-ByPort -Port 3000 -Label "Next.js Client"
Stop-ByCommandLine -Pattern 'solar_tpc_client.*npm run dev' -Label "Next.js Client"

Write-Host ""
Write-Host "[3/3] Vue.js Admin..."
Stop-ByPort -Port 5173 -Label "Vue.js Admin"
Stop-ByCommandLine -Pattern 'solar_tpc_admin.*npm run dev' -Label "Vue.js Admin"

Write-Host ""
Write-Host "Da tat xong tat ca cac project (neu dang chay)!"
