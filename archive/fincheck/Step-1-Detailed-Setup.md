# FinCheck Build: STEP 1 - Complete Detailed Setup
Development Environment Setup (30-45 minutes)

## WHAT IS STEP 1?
Setting up your development machine with all necessary tools before writing code. Think of it as preparing your kitchen before cooking - you need the right equipment, ingredients, and workspace organized.

## PREREQUISITES (5 minutes - Check These FIRST)

### Check if Python is Installed:
```bash
# Open Terminal (Mac/Linux) or Command Prompt (Windows) and type:
python --version

# Should show something like:
Python 3.11.0
# or
Python 3.10.5
```

**If you don't have Python:**

1. Go to: https://www.python.org/downloads/
2. Download Python 3.11 or 3.12 (NOT 2.7!)
3. **IMPORTANT**: Check the box "Add Python to PATH" during installation
4. Restart your terminal/command prompt
5. Verify with `python --version` again

### Check if Git is Installed:
```bash
git --version

# Should show:
git version 2.40.0
# or similar
```

**If you don't have Git:**

1. Go to: https://git-scm.com/downloads
2. Download and install
3. Restart terminal
4. Verify with `git --version`

## STEP 1.1: CREATE PROJECT DIRECTORY
Your project folder is where ALL your code will live.

### Windows (Using Command Prompt):

**1. Open Command Prompt:**
- Press `Win + R`
- Type `cmd`
- Press Enter

**2. Navigate to Documents folder:**
```bash
cd Documents
```

**3. Create project folder:**
```bash
mkdir fincheck-extension
```

**4. Enter the folder:**
```bash
cd fincheck-extension
```

**5. Verify you're in the right place:**
```bash
cd
```

Output should look like:
```text
C:\Users\YourName\Documents\fincheck-extension>
```

### Mac/Linux (Using Terminal):

**1. Open Terminal:**
- Mac: Press `Cmd + Space`, type "Terminal", press Enter
- Linux: Right-click desktop, select "Open Terminal Here"

**2. Create and navigate:**
```bash
mkdir ~/fincheck-extension
cd ~/fincheck-extension
```

**3. Verify location:**
```bash
pwd
```

Output should show:
```text
/Users/YourName/fincheck-extension
```

✅ **Check**: You should see your terminal prompt change to show the new folder path.

## STEP 1.2: INITIALIZE GIT (VERSION CONTROL)
Git tracks all your code changes. This is crucial for:
- Saving backups
- Undoing mistakes
- Uploading to GitHub
- Collaborating with others

### Initialize Git Repository:
```bash
# All operating systems:
git init

# Output should show:
Initialized empty Git repository in C:\Users\YourName\Documents\fincheck-extension\.git
# or
Initialized empty Git repository in /Users/YourName/fincheck-extension/.git
```

### Create .gitignore File:
This tells Git which files to IGNORE (not save/backup).

#### Windows (Command Prompt):
```bash
# Create empty .gitignore file
type nul > .gitignore

# Open it with Notepad
notepad .gitignore

# OR Open with VS Code (if installed)
code .gitignore
```

Then paste these lines:
```text
node_modules/
.env
__pycache__/
*.pyc
.DS_Store
venv/
*.sqlite
.pytest_cache/
dist/
build/
*.egg-info/
```

Save the file.

#### Mac/Linux (Terminal):
```bash
# Create .gitignore with content
cat > .gitignore << 'EOF'
node_modules/
.env
__pycache__/
*.pyc
.DS_Store
venv/
*.sqlite
.pytest_cache/
dist/
build/
*.egg-info/
EOF

# Verify it was created
cat .gitignore
```

### Configure Git (One-time):
```bash
# Set your name (use your real name or GitHub username)
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@gmail.com"

# Verify
git config --global user.name
git config --global user.email
```

✅ **Verification:**
```bash
# List all files including hidden ones
dir /a  # Windows
# or
ls -la  # Mac/Linux

# Should show:
.git/
.gitignore
```

## STEP 1.3: INSTALL PYTHON DEPENDENCIES
You need to set up a Python environment with all required libraries.

### Create Virtual Environment:
A virtual environment is like a sandboxed Python installation for your project only. It keeps dependencies separate from your system Python.

#### Windows:
```bash
# Create virtual environment named "venv"
python -m venv venv

# Activate it
venv\Scripts\activate

# Your prompt should now show:
(venv) C:\Users\YourName\Documents\fincheck-extension>
```

#### Mac/Linux:
```bash
# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate

# Your prompt should now show:
(venv) ~/fincheck-extension $
```

**Important**: You'll need to activate this virtual environment every time you work on the project!

✅ **Verification:**
```bash
# Check Python version (should match your installed version)
python --version

# Check which Python is being used (should be in venv folder)
which python  # Mac/Linux
# or
where python  # Windows
```

### Create requirements.txt:
This file lists all Python packages your project needs.

#### Windows:
```bash
# Create file
type nul > requirements.txt

# Edit with Notepad
notepad requirements.txt
```

#### Mac/Linux:
```bash
# Create with content using cat
cat > requirements.txt << 'EOF'
Flask==2.3.3
Flask-CORS==4.0.0
python-dotenv==1.0.0
transformers==4.30.0
torch==2.0.0
requests==2.31.0
numpy==1.24.0
Pillow==10.0.0
EOF

# Verify
cat requirements.txt
```

#### File Contents to Add:
```text
Flask==2.3.3
Flask-CORS==4.0.0
python-dotenv==1.0.0
transformers==4.30.0
torch==2.0.0
requests==2.31.0
numpy==1.24.0
Pillow==10.0.0
```

#### What Each Package Does:

| Package | Purpose | Why Needed |
|---------|---------|------------|
| Flask | Web framework | Runs your backend API server |
| Flask-CORS | Cross-origin requests | Allows frontend to talk to backend |
| python-dotenv | Read .env files | Loads API keys safely |
| transformers | NLP models | Sentiment analysis, text processing |
| torch | Deep learning framework | Required by transformers |
| requests | HTTP requests | Fetches data from external APIs |
| numpy | Numerical computing | Used by ML libraries |
| Pillow | Image processing | Creates your extension icons |

### Install All Dependencies:
⚠️ **Warning**: This downloads ~2GB of files and takes 5-10 minutes. Make sure you have good internet.

```bash
# Make sure (venv) is active in your prompt!

# Install all packages
pip install -r requirements.txt

# You'll see output like:
# Collecting Flask==2.3.3
# Downloading Flask-2.3.3-py3-none-any.whl (101 kB)
# Collecting Flask-CORS==4.0.0
# ...
# Successfully installed ...
```

✅ **Verification:**
```bash
# List all installed packages
pip list

# Should show (among others):
# Flask                2.3.3
# Pillow               10.0.0
# Requests             2.31.0
# torch                2.0.0
# transformers         4.30.0

# Test import
python -c "import flask; print('Flask version:', flask.__version__)"
# Should output: Flask version: 2.3.3
```

#### If Installation Fails:
```bash
# Clear pip cache and retry
pip install --no-cache-dir -r requirements.txt

# If torch fails (M1/M2 Mac), use CPU-only:
pip install torch --index-url https://download.pytorch.org/whl/cpu

# Then install rest:
pip install Flask Flask-CORS python-dotenv transformers requests numpy Pillow
```

## STEP 1.4: CREATE .env FILE (API KEYS)
Environment variables store your API keys securely without hardcoding them in code.

### Create .env File:

#### Windows (Command Prompt):
```bash
# Create empty file
type nul > .env

# Edit with Notepad
notepad .env

# OR with VS Code
code .env
```

#### Mac/Linux (Terminal):
```bash
# Create .env with initial content
cat > .env << 'EOF'
# Hugging Face (free tier)
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxx

# NewsAPI (free: 100 req/day)
NEWS_API_KEY=xxxxxxxxxxxxxxxxxx

# Alpha Vantage (free: 5/min, 500/day)
ALPHA_VANTAGE_KEY=xxxxxxxxxxxxxxxxxx

# Firebase (optional, for future)
FIREBASE_API_KEY=xxxxxxxxxxx
FIREBASE_PROJECT_ID=fincheck-xxxxxxxx

# Server config
FLASK_ENV=development
DEBUG=True
PORT=5000
EOF

# Verify
cat .env
```

### Get Your API Keys (15 minutes):

#### 1️⃣ Hugging Face API Key:
```text
Step 1: Open https://huggingface.co/settings/tokens
Step 2: Click "Sign Up" (free account)
Step 3: Verify your email
Step 4: Go back to settings/tokens
Step 5: Click "New token"
Step 6: Name: "fincheck"
Step 7: Access: "Read"
Step 8: Create and copy (starts with "hf_")
Step 9: Paste in .env file
```

#### 2️⃣ NewsAPI Key:
```text
Step 1: Open https://newsapi.org/
Step 2: Click "Get API Key"
Step 3: Sign up (free with email)
Step 4: Verify email
Step 5: Dashboard shows your API key
Step 6: Copy and paste in .env
```

#### 3️⃣ Alpha Vantage Key:
```text
Step 1: Open https://www.alphavantage.co/api/
Step 2: Enter your email in the form
Step 3: Check your email
Step 4: Click verification link
Step 5: You'll see your API key
Step 6: Copy and paste in .env
```

### Updated .env Example:
```text
# Hugging Face (free tier)
HUGGINGFACE_API_KEY=hf_aBcDeFgHiJkLmNoPqRsTuVwXyZ

# NewsAPI (free: 100 req/day)
NEWS_API_KEY=abc123def456ghi789jkl

# Alpha Vantage (free: 5/min, 500/day)
ALPHA_VANTAGE_KEY=XYZ789ABC456DEF123GHI

# Firebase (optional, for future)
FIREBASE_API_KEY=AIzaSyDxxxxxxxxxxxxxxxx
FIREBASE_PROJECT_ID=fincheck-2024

# Server config
FLASK_ENV=development
DEBUG=True
PORT=5000
```

### Test .env Loading:
```bash
# Create test script to verify .env works
python -c "from dotenv import load_dotenv; import os; load_dotenv(); print('✅ .env loaded'); print('HF Key loaded:', bool(os.getenv('HUGGINGFACE_API_KEY')))"

# Output should show:
# ✅ .env loaded
# HF Key loaded: True
```

### ⚠️ SECURITY REMINDER:
```text
CRITICAL - NEVER:
❌ Share .env file with anyone
❌ Commit .env to Git (.gitignore prevents this)
❌ Paste API keys in code/comments
❌ Upload .env to GitHub

ALWAYS:
✅ Keep .env in .gitignore
✅ Use environment variables in code
✅ Create template: .env.example (with xxxxx)
✅ Share only template with team
```

## STEP 1 FINAL VERIFICATION
Run this checklist to confirm everything is set up correctly:

```bash
# 1. Check you're in the right folder
pwd  # Mac/Linux
cd   # Windows
# Should show: fincheck-extension path

# 2. Check Git is initialized
git status
# Should show: On branch master/main

# 3. Check virtual environment is active
python --version
# Should show: Python 3.x.x (your version)

# 4. Check dependencies are installed
pip list | grep Flask
# Should show: Flask  2.3.3

# 5. Check .env exists and loads
ls -la .env  # Mac/Linux
dir .env     # Windows
# Should exist

# 6. Verify .env is loaded
python -c "from dotenv import load_dotenv; load_dotenv(); import os; keys = ['HUGGINGFACE_API_KEY', 'NEWS_API_KEY', 'ALPHA_VANTAGE_KEY']; loaded = [k for k in keys if os.getenv(k)]; print(f'✅ Loaded {len(loaded)}/3 API keys')"
```

## FOLDER STRUCTURE AT END OF STEP 1
```text
fincheck-extension/
│
├── .git/                  # Git version control (hidden folder)
├── .gitignore             # Git ignore rules
├── .env                   # Your API keys (SECRET!)
├── requirements.txt       # Python dependencies list
│
└── venv/                  # Virtual environment folder
    ├── bin/              # Python executables (Mac/Linux)
    ├── Scripts/          # Python executables (Windows)
    ├── lib/              # Installed packages
    └── pyvenv.cfg        # Configuration
```

## STEP 1 CHECKLIST ✅
Print this and check off as you go:

```text
☐ Installed Python 3.9+ (verified with python --version)
☐ Installed Git (verified with git --version)
☐ Created fincheck-extension/ folder
☐ Navigated into the folder
☐ Ran: git init
☐ Created .gitignore file with content
☐ Configured Git username and email
☐ Created venv/ virtual environment
☐ Activated venv (see (venv) in prompt)
☐ Created requirements.txt
☐ Ran: pip install -r requirements.txt (and waited 5-10 minutes)
☐ Verified installations with: pip list
☐ Created .env file
☐ Got API keys from Hugging Face, NewsAPI, Alpha Vantage
☐ Added API keys to .env
☐ Tested .env loading with Python script
☐ Verified final folder structure

Ready for STEP 2! ✅
```

## COMMON PROBLEMS & SOLUTIONS

| Problem | Cause | Solution |
|---------|-------|----------|
| `python: command not found` | Python not in PATH | Reinstall Python with "Add to PATH" checked |
| `pip install` is slow | Large files downloading | Normal (5-10 min), be patient or use `--no-cache-dir` |
| `(venv)` not showing | Virtual env not active | Run: `source venv/bin/activate` (Mac/Linux) or `venv\Scripts\activate` (Windows) |
| `ModuleNotFoundError: flask` | Venv not active | See above - activate venv |
| `.env` not loading | Wrong location | Ensure .env is in fincheck-extension root folder |
| `torch` won't install | Mac M1/M2 chip | Use: `pip install torch::cpu` |
| Permission denied on Mac | File permissions | Run: `chmod +x venv/bin/activate` |
| Git not working | Git not installed | Download from git-scm.com |

## NEXT STEPS
**Congratulations! You've completed Step 1.** 🎉

### What's Next:

1. Your environment is ready ✅
2. Move to **STEP 2: CREATE EXTENSION BOILERPLATE**
   - Create manifest.json
   - Create popup.html
   - Create popup.css
   - Create backend folder structure
   - Time estimate: 45 minutes
   - Difficulty: Low

### To Continue:

- Keep virtual environment activated: `(venv)` should be in your prompt
- Proceed to Step 2 documentation
- Create manifest.json, popup files, etc.

## SUPPORT
Stuck? Try:

1. Read the specific problem in "Common Problems & Solutions"
2. Check if virtual environment is activated (see `(venv)` in prompt)
3. Make sure all files are in the right locations
4. Try restarting terminal/command prompt
5. Search error message on Google (usually solve most issues)

---

**Time taken:** 30-45 minutes  
**Difficulty:** ⭐⭐ (2/5 stars)  
**Next:** STEP 2 (45 minutes, ⭐⭐ difficulty)

Good luck! 🚀
