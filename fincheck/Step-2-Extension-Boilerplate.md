# FinCheck Build: STEP 2 - Create Extension Boilerplate
Extension Configuration & UI Files (45 minutes)

## WHAT IS STEP 2?
Creating the basic structure and files for your Chrome extension. You'll create:

- **manifest.json** - Extension configuration file (tells Chrome how your extension works)
- **popup.html** - The popup window users see when they click your extension
- **popup.css** - Styling for the popup (colors, layout, fonts)
- **Backend folder structure** - Organize your Python files
- **Extension icons** - Visual branding (16px, 48px, 128px)

Think of it as building the skeleton of your extension before adding functionality.

## PREREQUISITES
From Step 1, you should have:

✅ Virtual environment activated (`(venv)` in your prompt)  
✅ Python packages installed  
✅ `.env` file with API keys  
✅ Current folder: `fincheck-extension`

**If not, go back to Step 1!**

## STEP 2.1: CREATE PROJECT FOLDER STRUCTURE
Organize your files before creating them.

### Create Folders:

#### Windows (Command Prompt):
```bash
# Make sure you're in fincheck-extension folder
cd fincheck-extension

# Create folders
mkdir backend
mkdir icons
mkdir js
mkdir css

# Verify
dir
```

#### Mac/Linux (Terminal):
```bash
# Make sure you're in fincheck-extension folder
cd fincheck-extension

# Create folders
mkdir -p backend/{models,data}
mkdir -p icons
mkdir -p js
mkdir -p css

# Verify
ls -la
```

### Expected Folder Structure:
```text
fincheck-extension/
├── backend/
│   ├── models/
│   ├── data/
│   └── (server.py will go here later)
├── icons/
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
├── js/
│   ├── popup.js
│   ├── background.js
│   └── content.js
├── css/
│   └── popup.css
├── popup.html
├── manifest.json
├── .git/
├── .env
├── requirements.txt
└── venv/
```

## STEP 2.2: CREATE manifest.json
This is the most important file - it tells Chrome everything about your extension.

### Create the File:

#### Windows (Command Prompt):
```bash
# Create empty manifest.json
type nul > manifest.json

# Edit with Notepad
notepad manifest.json

# OR use VS Code
code manifest.json
```

#### Mac/Linux (Terminal):
```bash
# Create and edit manifest.json
cat > manifest.json << 'EOF'
{
  "manifest_version": 3,
  "name": "FinCheck - Financial Scam Detector",
  "version": "1.0.0",
  "description": "Real-time detection of financial scams, deepfakes, and pump-and-dump schemes",
  "permissions": [
    "storage",
    "activeTab",
    "scripting",
    "tabs"
  ],
  "host_permissions": [
    "https://*.youtube.com/*",
    "https://*.twitter.com/*",
    "https://*.reddit.com/*",
    "https://*.telegram.org/*"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_title": "FinCheck - Verify Financial Content"
  },
  "icons": {
    "16": "icons/icon-16.png",
    "48": "icons/icon-48.png",
    "128": "icons/icon-128.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*.youtube.com/*", "https://*.twitter.com/*"],
      "js": ["content.js"]
    }
  ],
  "web_accessible_resources": []
}
EOF

# Verify
cat manifest.json
```

### File Contents to Add:
Copy this exactly into your `manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "FinCheck - Financial Scam Detector",
  "version": "1.0.0",
  "description": "Real-time detection of financial scams, deepfakes, and pump-and-dump schemes",
  "permissions": [
    "storage",
    "activeTab",
    "scripting",
    "tabs"
  ],
  "host_permissions": [
    "https://*.youtube.com/*",
    "https://*.twitter.com/*",
    "https://*.reddit.com/*",
    "https://*.telegram.org/*"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_title": "FinCheck - Verify Financial Content"
  },
  "icons": {
    "16": "icons/icon-16.png",
    "48": "icons/icon-48.png",
    "128": "icons/icon-128.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*.youtube.com/*", "https://*.twitter.com/*"],
      "js": ["content.js"]
    }
  ],
  "web_accessible_resources": []
}
```

### What Each Part Does:

| Section | Purpose |
|---------|---------|
| `manifest_version` | Chrome requirement (always 3) |
| `name` | Extension name in Chrome Store |
| `version` | Current version (1.0.0 = first release) |
| `description` | What appears in Chrome Store |
| `permissions` | What the extension is allowed to do |
| `host_permissions` | Which websites it can access |
| `action` | The popup that appears when clicked |
| `icons` | Extension icon at different sizes |
| `background` | Background worker script |
| `content_scripts` | Scripts that run on web pages |

✅ **Verification:**
```bash
# Test if JSON is valid
python -c "import json; json.load(open('manifest.json')); print('✅ manifest.json is valid')"
```

## STEP 2.3: CREATE popup.html
This is the HTML file for the popup window users see.

### Create the File:

#### Windows (Command Prompt):
```bash
notepad popup.html
```

#### Mac/Linux (Terminal):
```bash
cat > popup.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinCheck - Scam Detector</title>
    <link rel="stylesheet" href="popup.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>FinCheck</h1>
            <p class="subtitle">Financial Content Verifier</p>
        </header>

        <main id="main-content">
            <!-- Content Analysis Section -->
            <section class="analysis-section">
                <h2>Current Page Analysis</h2>
                <div id="loading" class="loading hidden">
                    <div class="spinner"></div>
                    <p>Analyzing content...</p>
                </div>
                
                <div id="results" class="hidden">
                    <!-- Scam Risk -->
                    <div class="result-card">
                        <h3>Scam Risk</h3>
                        <div class="risk-meter">
                            <div id="scam-risk" class="risk-bar"></div>
                        </div>
                        <p id="scam-message" class="risk-message"></p>
                    </div>

                    <!-- Influencer Credibility -->
                    <div class="result-card">
                        <h3>Influencer Credibility</h3>
                        <div id="credibility-score" class="credibility-badge"></div>
                        <p id="credibility-message"></p>
                    </div>

                    <!-- Deepfake Detection -->
                    <div class="result-card">
                        <h3>Content Authenticity</h3>
                        <div id="deepfake-risk" class="authenticity-badge"></div>
                        <p id="deepfake-message"></p>
                    </div>

                    <!-- Key Warnings -->
                    <div class="result-card warning-card" id="warnings-card" style="display:none;">
                        <h3>⚠️ Warnings Detected</h3>
                        <ul id="warnings-list"></ul>
                    </div>

                    <!-- Action Buttons -->
                    <div class="action-buttons">
                        <button id="report-btn" class="btn btn-primary">Report Content</button>
                        <button id="details-btn" class="btn btn-secondary">View Details</button>
                    </div>
                </div>

                <div id="error" class="error-message hidden">
                    <p id="error-text"></p>
                </div>
            </section>

            <!-- Quick Stats -->
            <section class="stats-section">
                <h2>Your Protection</h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number" id="pages-checked">0</span>
                        <span class="stat-label">Pages Checked</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="scams-blocked">0</span>
                        <span class="stat-label">Scams Blocked</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="users-protected">0</span>
                        <span class="stat-label">Users Protected</span>
                    </div>
                </div>
            </section>

            <!-- Settings -->
            <section class="settings-section">
                <button id="settings-btn" class="btn-settings">⚙️ Settings</button>
                <div id="settings-panel" class="hidden">
                    <label class="checkbox-label">
                        <input type="checkbox" id="auto-analyze" checked>
                        Auto-analyze pages
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="show-warnings" checked>
                        Show all warnings
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" id="enable-notifications" checked>
                        Enable notifications
                    </label>
                    <button id="reset-stats-btn" class="btn btn-danger">Reset Statistics</button>
                </div>
            </section>
        </main>

        <footer>
            <p>Made with ❤️ for Indian investors</p>
            <p class="footer-links">
                <a href="https://github.com" target="_blank">GitHub</a> | 
                <a href="https://twitter.com" target="_blank">Twitter</a> | 
                <a href="#" id="feedback-btn">Feedback</a>
            </p>
        </footer>
    </div>

    <script src="popup.js"></script>
</body>
</html>
EOF

cat popup.html
```

### What This HTML Does:

- **Header** - Shows "FinCheck" title and subtitle
- **Analysis Section** - Displays scam risk, influencer credibility, deepfake detection
- **Stats Section** - Shows how many pages checked and scams blocked
- **Settings Section** - User preferences (auto-analyze, warnings, notifications)
- **Footer** - Links to GitHub, Twitter, feedback
- **JavaScript** - References popup.js (will create in Step 3)

✅ **Verification:**
```bash
# Check if HTML is valid
python -c "from html.parser import HTMLParser; HTMLParser().feed(open('popup.html').read()); print('✅ popup.html is valid')"
```

## STEP 2.4: CREATE popup.css
This file styles the popup to look beautiful and professional.

### Create the File:

#### Windows:
```bash
mkdir css
notepad css\popup.css
```

#### Mac/Linux:
```bash
mkdir -p css
cat > css/popup.css << 'EOF'
(See below for complete CSS content)
EOF
```

### File Contents:
Copy this entire CSS file (already exists at `c:\Project\Fincheck\popup.css` - you'll move it):

The CSS file is already created in your project. You can reference it from the `css/` folder.

### What This CSS Does:

| Section | Purpose |
|---------|---------|
| `:root` | Defines color variables used throughout |
| `header` | Green gradient background with white text |
| `.result-card` | White boxes with left border for each result |
| `.risk-meter` | Progress bar showing scam risk level |
| `.stats-grid` | 3-column layout for statistics |
| `.btn*` | Button styles (primary, secondary, danger) |
| `@keyframes spin` | Spinning animation for loading indicator |
| `.hidden` | Hides elements with `display: none` |

## STEP 2.5: CREATE EXTENSION ICONS
Create the visual icons for your extension.

### Option A: Generate Icons with Python (Automatic)

#### Windows/Mac/Linux (All the same):
```bash
# Make sure you're in the fincheck-extension folder
# and virtual environment is activated

# Run this Python script to create icons
python << 'EOF'
from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs('icons', exist_ok=True)

# Create icons with text "FC" (FinCheck)
sizes = [16, 48, 128]
for size in sizes:
    img = Image.new('RGB', (size, size), color='#00A86B')  # Green background
    draw = ImageDraw.Draw(img)
    # Draw white text (simplified - just squares)
    # For 16px, very small text
    # For 48px and 128px, can add text
    if size >= 48:
        # Draw "FC" with a simple approach
        # This is very basic - just white area
        draw.rectangle([(size//4, size//4), (3*size//4, 3*size//4)], fill='white')
    img.save(f'icons/icon-{size}.png')
    print(f"✅ Created icons/icon-{size}.png")

print("\n✅ All icons created successfully!")
EOF
```

Verify icons were created:
```bash
# Windows
dir icons

# Mac/Linux
ls -la icons

# Should show:
# icon-16.png
# icon-48.png
# icon-128.png
```

### Option B: Use Online Icon Generator
If Python fails, create icons manually:

1. Go to: https://www.favicon-generator.org/
2. Upload a green image or create one
3. Set size to 16x16, download `icon-16.png`
4. Repeat for 48x48 and 128x128
5. Save all to `icons/` folder

**Or use this simple approach:**

1. Go to: https://www.canva.com/
2. Create 3 designs (16x16, 48x48, 128x128)
3. Add text "FC" in white on green background
4. Download as PNG
5. Save to `icons/` folder

## STEP 2.6: CREATE EMPTY JavaScript FILES
Create placeholder JS files (we'll add code in Step 3).

### Create popup.js:

#### Windows:
```bash
notepad js\popup.js
```

#### Mac/Linux:
```bash
cat > js/popup.js << 'EOF'
// popup.js - Main extension logic
// This file will be populated in Step 3

console.log('popup.js loaded');

class FinCheckAnalyzer {
    constructor() {
        this.apiEndpoint = 'http://localhost:5000/api';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('FinCheck popup initialized');
});
EOF
```

### Create background.js:

#### Windows:
```bash
notepad js\background.js
```

#### Mac/Linux:
```bash
cat > js/background.js << 'EOF'
// background.js - Background service worker
// This file will be populated in Step 3

console.log('background.js loaded');
EOF
```

### Create content.js:

#### Windows:
```bash
notepad js\content.js
```

#### Mac/Linux:
```bash
cat > js/content.js << 'EOF'
// content.js - Runs on web pages
// This file will be populated in Step 3

console.log('FinCheck content script loaded');
EOF
```

Verify all files created:
```bash
# Windows
dir js

# Mac/Linux
ls -la js

# Should show:
# popup.js
# background.js
# content.js
```

## STEP 2.7: CREATE BACKEND FOLDER STRUCTURE
Prepare folders for Python backend.

### Create Backend Files:

#### Windows:
```bash
mkdir backend\models
mkdir backend\data

# Create empty __init__.py files
type nul > backend\__init__.py
type nul > backend\models\__init__.py
type nul > backend\data\__init__.py
```

#### Mac/Linux:
```bash
mkdir -p backend/models
mkdir -p backend/data

# Create __init__.py files
touch backend/__init__.py
touch backend/models/__init__.py
touch backend/data/__init__.py
```

### Create Data Files:

#### Create blacklist.json:

**Windows:**
```bash
notepad backend\data\blacklist.json
```

**Mac/Linux:**
```bash
cat > backend/data/blacklist.json << 'EOF'
{
  "scammers": [
    {"name": "FakeGuru_Finance", "reason": "Pump and dump", "reports": 150},
    {"name": "CryptoScamBot", "reason": "Deepfake promoter", "reports": 200}
  ]
}
EOF
```

#### Create sebi_verified.json:

**Windows:**
```bash
notepad backend\data\sebi_verified.json
```

**Mac/Linux:**
```bash
cat > backend/data/sebi_verified.json << 'EOF'
{
  "verified_entities": [
    "HDFC Securities",
    "ICICI Direct",
    "Zerodha",
    "Angel Broking",
    "Motilal Oswal"
  ]
}
EOF
```

## STEP 2.8: CREATE README.md
Documentation file explaining your project.

#### Windows:
```bash
notepad README.md
```

#### Mac/Linux:
```bash
cat > README.md << 'EOF'
# FinCheck - Financial Scam Detector Chrome Extension

## Overview
FinCheck is a Chrome extension that detects financial scams, pump-and-dump schemes, and deepfaked content in real-time.

## Features
- 🚨 Scam Detection - Identifies pump & dump language and financial fraud patterns
- 👤 Influencer Credibility - Verifies financial advisor credentials
- 🎬 Deepfake Detection - Identifies AI-generated or manipulated videos
- 📊 SEBI Registration Check - Verifies broker/advisor registration
- ⚠️ Real-time Warnings - Instant alerts on suspicious content

## Installation
1. Clone this repository
2. Open Chrome Extensions: `chrome://extensions/`
3. Enable "Developer mode" (top-right)
4. Click "Load unpacked"
5. Select fincheck-extension folder

## Getting Started
1. Install dependencies: `pip install -r requirements.txt`
2. Start backend: `python backend/server.py`
3. Load extension in Chrome
4. Test on YouTube, Twitter, Reddit

## Project Structure
```
fincheck-extension/
├── manifest.json          # Extension configuration
├── popup.html             # UI popup
├── css/popup.css          # Styles
├── js/
│   ├── popup.js           # Popup logic
│   ├── background.js      # Service worker
│   └── content.js         # Content script
├── backend/
│   ├── server.py          # Flask API
│   ├── models/            # ML models
│   └── data/              # Data files
└── icons/                 # Extension icons
```

## Development
- Frontend: HTML, CSS, JavaScript
- Backend: Flask, Python
- AI/ML: Transformers, PyTorch
- APIs: NewsAPI, Alpha Vantage, Hugging Face

## License
MIT License

## Contributing
Contributions welcome! Please fork and submit pull requests.

## Support
- Issues: GitHub Issues
- Email: your.email@gmail.com
- Twitter: @fincheck_detect
EOF

cat README.md
```

## STEP 2 FINAL VERIFICATION
Check your folder structure:

```bash
# List everything
tree  # Mac/Linux (if installed)
# or
dir /s  # Windows

# Should show complete structure
```

### Expected Final Structure:
```text
fincheck-extension/
│
├── manifest.json                 # ✅ Created
├── popup.html                    # ✅ Created
├── README.md                     # ✅ Created
│
├── css/
│   └── popup.css                 # ✅ Created
│
├── js/
│   ├── popup.js                  # ✅ Created (empty)
│   ├── background.js             # ✅ Created (empty)
│   └── content.js                # ✅ Created (empty)
│
├── icons/
│   ├── icon-16.png               # ✅ Created
│   ├── icon-48.png               # ✅ Created
│   └── icon-128.png              # ✅ Created
│
├── backend/
│   ├── __init__.py
│   ├── models/
│   │   └── __init__.py
│   └── data/
│       ├── __init__.py
│       ├── blacklist.json        # ✅ Created
│       └── sebi_verified.json    # ✅ Created
│
├── .git/                         # From Step 1
├── .gitignore                    # From Step 1
├── .env                          # From Step 1
├── requirements.txt              # From Step 1
└── venv/                         # From Step 1
```

## STEP 2 CHECKLIST ✅
```text
☐ Created backend/, icons/, js/, css/ folders
☐ Created manifest.json with correct structure
☐ Created popup.html with all UI elements
☐ Created css/popup.css with all styling
☐ Created icons (icon-16.png, 48, 128)
☐ Created js/popup.js (placeholder)
☐ Created js/background.js (placeholder)
☐ Created js/content.js (placeholder)
☐ Created backend/data/blacklist.json
☐ Created backend/data/sebi_verified.json
☐ Created README.md
☐ Verified all files exist
☐ Verified folder structure

Ready for STEP 3! ✅
```

## TESTING MANIFEST.json
Validate your manifest before proceeding:

```bash
# Python validation
python -c "import json; json.load(open('manifest.json')); print('✅ manifest.json is valid')"

# If error, check:
# - No trailing commas
# - All quotes are correct (" not ')
# - All braces match { }
```

## COMMON PROBLEMS & SOLUTIONS

| Problem | Solution |
|---------|----------|
| `FileNotFoundError` when creating files | Make sure you're in fincheck-extension folder |
| Icons won't generate | Run with Python activated: `python` command should work |
| JSON validation fails | Open in VS Code - it highlights syntax errors |
| Can't create folders | Make sure you have write permissions (try `sudo` on Mac/Linux) |

## NEXT STEPS
**Congratulations! Step 2 is complete!** 🎉

### What's Next:

1. Your extension structure is ready ✅
2. Move to **STEP 3: IMPLEMENT CORE LOGIC**
   - Add JavaScript to popup.js
   - Add code to background.js
   - Add code to content.js
   - Time estimate: 60 minutes
   - Difficulty: Medium

### To Continue:

- Keep virtual environment activated
- Proceed to Step 3: Implement Core Logic
- Start writing JavaScript code

---

**Time taken:** 45 minutes  
**Difficulty:** ⭐⭐ (2/5 stars)  
**Next:** STEP 3 (60 minutes, ⭐⭐⭐ difficulty)

Great progress! 🚀
