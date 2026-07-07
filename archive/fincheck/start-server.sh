#!/bin/bash

echo "===================================="
echo "   FinCheck Backend Server Startup"
echo "===================================="
echo ""

cd backend

echo "Checking for virtual environment..."
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "Virtual environment created."
    echo ""
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo ""
echo "Checking dependencies..."
if ! pip show flask > /dev/null 2>&1; then
    echo "Installing dependencies..."
    pip install -r requirements.txt
    echo "Dependencies installed."
else
    echo "Dependencies already installed."
fi

echo ""
echo "===================================="
echo "   Starting FinCheck Server"
echo "===================================="
echo ""
echo "Server will be available at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python server.py
