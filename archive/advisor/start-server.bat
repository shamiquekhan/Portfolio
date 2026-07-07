@echo off
echo ====================================
echo    FinCheck Backend Server Startup
echo ====================================
echo.

cd backend

echo Checking for virtual environment...
if not exist "venv\" (
    echo Creating virtual environment...
    python -m venv venv
    echo Virtual environment created.
    echo.
)

echo Activating virtual environment...
call venv\Scripts\activate

echo.
echo Checking dependencies...
pip show flask >nul 2>&1
if errorlevel 1 (
    echo Installing dependencies...
    pip install -r requirements.txt
    echo Dependencies installed.
) else (
    echo Dependencies already installed.
)

echo.
echo ====================================
echo    Starting FinCheck Server
echo ====================================
echo.
echo Server will be available at: http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo.

python server.py

pause
