# FinCheck Setup Guide

Complete step-by-step instructions to get FinCheck running on your machine.

## Prerequisites Installation

### 1. Install Python 3.9+

**Windows:**
1. Download from https://python.org/downloads/
2. Run installer
3. ✅ Check "Add Python to PATH"
4. Click "Install Now"

**Verify:**
```bash
python --version
# Should show: Python 3.9.x or higher
```

### 2. Install Chrome Browser

Download from https://www.google.com/chrome/ if not already installed.

### 3. Install Git (Optional)

Download from https://git-scm.com/downloads

## Project Setup

### Step 1: Download Project

**Option A: Clone with Git**
```bash
git clone https://github.com/yourusername/fincheck.git
cd fincheck
```

**Option B: Download ZIP**
1. Download project ZIP file
2. Extract to desired location
3. Open terminal in extracted folder

### Step 2: Set Up Python Virtual Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows (Command Prompt):
venv\Scripts\activate

# On Windows (PowerShell):
venv\Scripts\Activate.ps1

# On Mac/Linux:
source venv/bin/activate

# Your prompt should now show (venv)
```

### Step 3: Install Python Dependencies

```bash
# Make sure you're in the backend directory with venv activated
pip install -r requirements.txt

# This will install:
# - Flask (web framework)
# - transformers (NLP models)
# - torch (ML backend)
# - And other dependencies
```

**Note:** First installation may take 5-10 minutes as it downloads ML models.

### Step 4: Configure API Keys

1. Open `.env` file in the project root
2. Replace placeholder values with your actual API keys

**Get Your Free API Keys:**

#### Hugging Face
1. Visit https://huggingface.co/join
2. Create free account
3. Go to https://huggingface.co/settings/tokens
4. Click "New token"
5. Copy token to `.env` file

#### NewsAPI (Optional - for news features)
1. Visit https://newsapi.org/register
2. Create free account
3. Copy API key to `.env` file
4. Free tier: 100 requests/day

#### Alpha Vantage (Optional - for stock data)
1. Visit https://www.alphavantage.co/support/#api-key
2. Get free API key
3. Copy to `.env` file
4. Free tier: 500 requests/day

**Example .env file:**
```env
HUGGINGFACE_API_KEY=hf_abcd1234efgh5678ijkl
NEWS_API_KEY=abc123def456ghi789
ALPHA_VANTAGE_KEY=XYZ789ABC123
FLASK_ENV=development
DEBUG=True
PORT=5000
```

### Step 5: Start the Backend Server

```bash
# Make sure you're in backend directory with venv activated
python server.py

# You should see:
# * Running on http://127.0.0.1:5000
# * Restarting with stat
```

**Keep this terminal window open!** The server needs to run while using the extension.

### Step 6: Load Chrome Extension

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked** button
5. Navigate to your `fincheck-extension` folder
6. Select the folder (not a file inside it)
7. Click "Select Folder"

✅ The FinCheck icon should now appear in your Chrome toolbar!

## Testing Your Installation

### Test 1: Backend API

Open a new terminal and run:

```bash
curl http://localhost:5000/api/verify-sebi -X POST -H "Content-Type: application/json" -d "{\"entity\":\"Zerodha\"}"
```

Expected response:
```json
{
  "entity": "Zerodha",
  "sebi_registered": true,
  "message": "✅ SEBI Verified"
}
```

### Test 2: Extension Popup

1. Click the FinCheck icon in Chrome toolbar
2. You should see the popup interface
3. Visit any webpage with text
4. Click FinCheck icon again
5. The extension should analyze the page

### Test 3: Content Analysis

Visit these test pages:
1. https://www.youtube.com (any finance video)
2. https://twitter.com (search for stock tickers)
3. Any financial blog or article

Click the FinCheck icon on each page and verify analysis appears.

## Troubleshooting

### Backend Won't Start

**Error: "No module named 'flask'"**
```bash
# Make sure virtual environment is activated
# You should see (venv) in your prompt
# If not, activate it:
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Then reinstall dependencies
pip install -r requirements.txt
```

**Error: "Port 5000 already in use"**
```bash
# Change port in .env file
PORT=5001

# Or kill process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <process_id> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

### Extension Not Loading

**Error: "Manifest file is missing or unreadable"**
- Make sure you selected the folder containing `manifest.json`
- Don't select a parent folder or subfolder

**Error: "This extension is not trusted"**
- This is normal in Developer mode
- Continue anyway

**Popup is blank**
- Check Chrome console (F12) for errors
- Make sure backend server is running
- Verify `http://localhost:5000` is accessible

### Analysis Not Working

**Error: "Failed to analyze page"**
1. Verify backend is running: Open http://localhost:5000
2. Check browser console for errors (F12 → Console)
3. Check backend terminal for error messages

**No results appearing**
1. Refresh the page you want to analyze
2. Click FinCheck icon
3. Wait 2-3 seconds for analysis
4. Check if backend server is responding

## Running on Startup (Optional)

### Windows - Create Batch File

Create `start-fincheck.bat`:
```batch
@echo off
cd C:\path\to\fincheck\backend
call venv\Scripts\activate
python server.py
pause
```

Double-click to start backend server.

### Mac/Linux - Create Shell Script

Create `start-fincheck.sh`:
```bash
#!/bin/bash
cd /path/to/fincheck/backend
source venv/bin/activate
python server.py
```

Make executable:
```bash
chmod +x start-fincheck.sh
./start-fincheck.sh
```

## Next Steps

1. ✅ Customize blacklist in `backend/data/blacklist.json`
2. ✅ Add more SEBI verified entities to `backend/data/sebi_verified.json`
3. ✅ Test on various financial websites
4. ✅ Adjust scam detection keywords in `server.py`
5. ✅ Deploy backend to Render/Replit for 24/7 availability

## Getting Help

- **Issues**: https://github.com/yourusername/fincheck/issues
- **Discussions**: https://github.com/yourusername/fincheck/discussions
- **Email**: support@fincheck.com

## Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for instructions on:
- Deploying backend to Render.com (free)
- Publishing to Chrome Web Store
- Setting up custom domain
- Monitoring and analytics
