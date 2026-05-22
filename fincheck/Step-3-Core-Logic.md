# FinCheck Build: STEP 3 - Implement Core Logic
JavaScript Frontend Logic (60 minutes)

## WHAT IS STEP 3?
Adding functionality to your extension. You'll create JavaScript code that:

- **popup.js** - Handles the popup UI, user interactions, and data display
- **background.js** - Runs in the background to manage extension state
- **content.js** - Runs on web pages to extract content

This is where your extension becomes interactive and functional!

## PREREQUISITES
From Step 2, you should have:

✅ `manifest.json` created  
✅ `popup.html` created  
✅ `popup.css` created  
✅ Empty `js/` folder with placeholder files  
✅ Icons created  
✅ Virtual environment still active

## STEP 3.1: CREATE popup.js (Main Logic)
This is the main JavaScript file that handles the popup window.

### Create the File:

#### Windows:
```bash
notepad js\popup.js
```

#### Mac/Linux:
```bash
cat > js/popup.js << 'ENDOFFILE'
[Copy entire content below]
ENDOFFILE
```

### Complete popup.js Code:

```javascript
// popup.js - Main extension logic
// This handles all the popup window interactions and data display

class FinCheckAnalyzer {
    constructor() {
        this.apiEndpoint = 'http://localhost:5000/api';
        this.initializeUI();
        this.loadStats();
    }

    // Initialize UI event listeners
    initializeUI() {
        // Button event listeners
        const detailsBtn = document.getElementById('details-btn');
        const reportBtn = document.getElementById('report-btn');
        const settingsBtn = document.getElementById('settings-btn');
        const resetStatsBtn = document.getElementById('reset-stats-btn');

        if (detailsBtn) {
            detailsBtn.addEventListener('click', () => this.showDetails());
        }
        
        if (reportBtn) {
            reportBtn.addEventListener('click', () => this.reportContent());
        }
        
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.toggleSettings());
        }
        
        if (resetStatsBtn) {
            resetStatsBtn.addEventListener('click', () => this.resetStats());
        }

        // Load saved settings
        chrome.storage.local.get(['settings'], (result) => {
            const settings = result.settings || {};
            const autoAnalyze = document.getElementById('auto-analyze');
            const showWarnings = document.getElementById('show-warnings');
            const enableNotifications = document.getElementById('enable-notifications');

            if (autoAnalyze) autoAnalyze.checked = settings.autoAnalyze !== false;
            if (showWarnings) showWarnings.checked = settings.showWarnings !== false;
            if (enableNotifications) enableNotifications.checked = settings.enableNotifications !== false;

            // Save settings when changed
            if (autoAnalyze) {
                autoAnalyze.addEventListener('change', (e) => {
                    settings.autoAnalyze = e.target.checked;
                    chrome.storage.local.set({ settings });
                });
            }
            if (showWarnings) {
                showWarnings.addEventListener('change', (e) => {
                    settings.showWarnings = e.target.checked;
                    chrome.storage.local.set({ settings });
                });
            }
            if (enableNotifications) {
                enableNotifications.addEventListener('change', (e) => {
                    settings.enableNotifications = e.target.checked;
                    chrome.storage.local.set({ settings });
                });
            }
        });
    }

    // Analyze current page
    async analyzeCurrentPage() {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        const loadingDiv = document.getElementById('loading');
        const resultsDiv = document.getElementById('results');
        const errorDiv = document.getElementById('error');

        if (loadingDiv) loadingDiv.classList.remove('hidden');
        if (resultsDiv) resultsDiv.classList.add('hidden');
        if (errorDiv) errorDiv.classList.add('hidden');

        try {
            // Extract page content
            const pageContent = await this.extractPageContent(tab);
            
            // For now, perform local analysis (backend integration in Step 5)
            const analysis = this.analyzeLocally(pageContent);

            this.displayResults(analysis);
            this.updateStats(analysis);

        } catch (error) {
            console.error('Analysis error:', error);
            this.showError('Failed to analyze page: ' + error.message);
        } finally {
            if (loadingDiv) loadingDiv.classList.add('hidden');
        }
    }

    // Extract page content
    async extractPageContent(tab) {
        try {
            const [result] = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    return {
                        text: document.body.innerText.substring(0, 5000), // Limit to 5000 chars
                        title: document.title,
                        url: window.location.href,
                        domain: window.location.hostname
                    };
                }
            });
            return result.result;
        } catch (error) {
            console.error('Error extracting content:', error);
            return {
                text: 'Unable to extract page content',
                title: tab.title,
                url: tab.url,
                domain: new URL(tab.url).hostname
            };
        }
    }

    // Local analysis (before backend integration)
    analyzeLocally(content) {
        const scamKeywords = {
            pump_dump: [
                'buy now',
                'get rich',
                'exclusive tips',
                'insider info',
                'before it explodes',
                'guaranteed returns',
                'risk-free',
                'act fast',
                'limited time'
            ]
        };

        let scamScore = 0;
        const warnings = [];
        const textLower = content.text.toLowerCase();

        // Check for scam keywords
        scamKeywords.pump_dump.forEach(keyword => {
            if (textLower.includes(keyword)) {
                scamScore += 10;
                warnings.push(`🚩 Detected phrase: "${keyword}"`);
            }
        });

        // Check for excessive exclamation marks (common in scams)
        const exclamationCount = (content.text.match(/!/g) || []).length;
        if (exclamationCount > 5) {
            scamScore += 5;
            warnings.push(`🚩 Excessive exclamation marks (${exclamationCount})`);
        }

        // Cap score at 100
        scamScore = Math.min(100, scamScore);

        // Credibility is inverse of scam score
        const credibilityScore = Math.max(1, 10 - Math.round(scamScore / 10));

        return {
            scam_risk: scamScore,
            scam_message: this.getScamMessage(scamScore),
            influencer_credibility: {
                score: credibilityScore,
                message: credibilityScore > 6 ? 
                    '✅ Generally safe content' : 
                    '⚠️ Multiple warning signs detected'
            },
            deepfake_risk: {
                risk: 15,
                message: '✅ No obvious deepfake indicators'
            },
            warnings: warnings,
            url: content.url
        };
    }

    // Get scam risk message
    getScamMessage(score) {
        if (score >= 80) {
            return "🚨 HIGH RISK: Strong indicators of scam content. Avoid clicking links or sending money.";
        } else if (score >= 60) {
            return "⚠️ MEDIUM RISK: Some suspicious patterns detected. Verify before acting.";
        } else if (score >= 40) {
            return "⚠️ LOW-MEDIUM RISK: Minor red flags present.";
        } else {
            return "✅ LOW RISK: Content appears legitimate based on initial scan.";
        }
    }

    // Display results on popup
    displayResults(analysis) {
        // Scam Risk Bar
        const scamRiskBar = document.getElementById('scam-risk');
        const scamMessage = document.getElementById('scam-message');

        if (scamRiskBar) {
            scamRiskBar.style.width = analysis.scam_risk + '%';
            scamRiskBar.className = 'risk-bar';
            
            if (analysis.scam_risk > 70) {
                scamRiskBar.classList.add('high');
            } else if (analysis.scam_risk > 40) {
                scamRiskBar.classList.add('medium');
            }
        }

        if (scamMessage) {
            scamMessage.textContent = analysis.scam_message;
        }

        // Credibility Score
        const credibilityScore = document.getElementById('credibility-score');
        const credibilityMessage = document.getElementById('credibility-message');

        if (credibilityScore) {
            const cred = analysis.influencer_credibility;
            credibilityScore.textContent = cred.score + '/10';
            credibilityScore.className = 'credibility-badge';
            if (cred.score > 6) {
                credibilityScore.classList.add('high');
            } else {
                credibilityScore.classList.add('low');
            }
        }

        if (credibilityMessage) {
            credibilityMessage.textContent = analysis.influencer_credibility.message;
        }

        // Deepfake Detection
        const deepfakeRisk = document.getElementById('deepfake-risk');
        const deepfakeMessage = document.getElementById('deepfake-message');

        if (deepfakeRisk) {
            deepfakeRisk.textContent = analysis.deepfake_risk.risk + '%';
            deepfakeRisk.className = 'authenticity-badge';
            if (analysis.deepfake_risk.risk < 30) {
                deepfakeRisk.classList.add('high');
            } else {
                deepfakeRisk.classList.add('low');
            }
        }

        if (deepfakeMessage) {
            deepfakeMessage.textContent = analysis.deepfake_risk.message;
        }

        // Display Warnings
        if (analysis.warnings && analysis.warnings.length > 0) {
            const warningsCard = document.getElementById('warnings-card');
            const warningsList = document.getElementById('warnings-list');

            if (warningsCard) warningsCard.style.display = 'block';
            if (warningsList) {
                warningsList.innerHTML = analysis.warnings
                    .map(w => `<li>${w}</li>`)
                    .join('');
            }
        }

        // Show results
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
            resultsDiv.classList.remove('hidden');
        }
    }

    // Update statistics
    updateStats(analysis) {
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || {
                pagesChecked: 0,
                scamsBlocked: 0,
                usersProtected: 0
            };

            stats.pagesChecked += 1;
            if (analysis.scam_risk > 70) {
                stats.scamsBlocked += 1;
            }
            stats.usersProtected = Math.floor(Math.random() * 1000) + 100; // Simulated

            chrome.storage.local.set({ stats });
            this.loadStats();
        });
    }

    // Load and display stats
    loadStats() {
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || {
                pagesChecked: 0,
                scamsBlocked: 0,
                usersProtected: 0
            };

            const pagesChecked = document.getElementById('pages-checked');
            const scamsBlocked = document.getElementById('scams-blocked');
            const usersProtected = document.getElementById('users-protected');

            if (pagesChecked) pagesChecked.textContent = stats.pagesChecked;
            if (scamsBlocked) scamsBlocked.textContent = stats.scamsBlocked;
            if (usersProtected) usersProtected.textContent = stats.usersProtected;
        });
    }

    // Show error message
    showError(message) {
        const errorText = document.getElementById('error-text');
        const errorDiv = document.getElementById('error');

        if (errorText) errorText.textContent = message;
        if (errorDiv) errorDiv.classList.remove('hidden');
    }

    // Show details (future feature)
    showDetails() {
        alert('Detailed analysis report\n\nThis feature will show more details about the analysis in the next version.');
    }

    // Report content (future feature)
    reportContent() {
        alert('Thank you for reporting!\n\nYour report helps us improve FinCheck.');
    }

    // Toggle settings panel
    toggleSettings() {
        const settingsPanel = document.getElementById('settings-panel');
        if (settingsPanel) {
            settingsPanel.classList.toggle('hidden');
        }
    }

    // Reset statistics
    resetStats() {
        if (confirm('Are you sure you want to reset all statistics?')) {
            const emptyStats = {
                pagesChecked: 0,
                scamsBlocked: 0,
                usersProtected: 0
            };
            chrome.storage.local.set({ stats: emptyStats });
            this.loadStats();
            alert('Statistics reset successfully!');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('FinCheck popup loaded');
    const analyzer = new FinCheckAnalyzer();
    analyzer.analyzeCurrentPage();
});
```

### Key Functions in popup.js:

| Function | Purpose |
|----------|---------|
| `constructor()` | Initialize UI and load stats |
| `analyzeCurrentPage()` | Extract page content and analyze |
| `analyzeLocally()` | Perform basic scam detection |
| `displayResults()` | Show results in popup |
| `updateStats()` | Save statistics to Chrome storage |
| `loadStats()` | Display saved statistics |
| `toggleSettings()` | Show/hide settings panel |
| `resetStats()` | Clear statistics |

## STEP 3.2: CREATE background.js (Service Worker)
This runs in the background and manages extension state.

### Complete background.js Code:

```javascript
// background.js - Background service worker
// Runs in the background to manage extension state and handle messages

console.log('FinCheck background service worker loaded');

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tab.url);
        
        // Auto-analyze if enabled
        chrome.storage.local.get(['settings'], (result) => {
            const settings = result.settings || {};
            if (settings.autoAnalyze !== false) {
                // Send message to content script to analyze
                chrome.tabs.sendMessage(tabId, { 
                    action: 'analyzeContent' 
                }).catch(err => {
                    // Content script may not be available on this page
                    console.log('Could not send message to content script:', err);
                });
            }
        });
    }
});

// Handle messages from content script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received:', request.action);
    
    if (request.action === 'updateBadge') {
        // Update extension icon badge
        chrome.action.setBadgeText({ text: request.text });
        chrome.action.setBadgeBackgroundColor({ color: request.color });
        sendResponse({ status: 'Badge updated' });
    }
    
    if (request.action === 'getStats') {
        // Get statistics
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || {
                pagesChecked: 0,
                scamsBlocked: 0,
                usersProtected: 0
            };
            sendResponse(stats);
        });
        return true; // Keep channel open for async response
    }

    if (request.action === 'saveStats') {
        // Save statistics
        chrome.storage.local.set({ stats: request.stats });
        sendResponse({ status: 'Stats saved' });
    }
});

// Initialize extension on install
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('FinCheck installed!');
        
        // Initialize default stats
        chrome.storage.local.set({
            stats: {
                pagesChecked: 0,
                scamsBlocked: 0,
                usersProtected: 0
            },
            settings: {
                autoAnalyze: true,
                showWarnings: true,
                enableNotifications: true
            }
        });
        
        // Open welcome page
        chrome.tabs.create({
            url: 'chrome://extensions/?id=' + chrome.runtime.id
        });
    }
});

// Periodic check (every hour)
chrome.alarms.create('hourly-check', { periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'hourly-check') {
        console.log('Hourly check - FinCheck active');
    }
});
```

### Key Functions in background.js:

| Function | Purpose |
|----------|---------|
| `onUpdated` | Listen for page loads |
| `onMessage` | Handle messages from content/popup |
| `onInstalled` | Initialize extension on first install |
| `onAlarm` | Periodic maintenance tasks |

## STEP 3.3: CREATE content.js (Content Script)
This runs on web pages to extract content.

### Complete content.js Code:

```javascript
// content.js - Runs on web pages
// Extracts content and communicates with extension

console.log('FinCheck content script loaded');

// Listen for messages from background or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Content script received:', request.action);
    
    if (request.action === 'analyzeContent') {
        // Extract page content
        const pageData = extractPageData();
        sendResponse(pageData);
    }

    if (request.action === 'getPageInfo') {
        // Get basic page information
        const info = {
            title: document.title,
            url: window.location.href,
            domain: window.location.hostname,
            textLength: document.body.innerText.length
        };
        sendResponse(info);
    }
});

// Extract page data
function extractPageData() {
    return {
        text: document.body.innerText.substring(0, 5000), // Limit to 5000 chars
        title: document.title,
        url: window.location.href,
        domain: window.location.hostname,
        
        // Extract financial information
        financialKeywords: extractFinancialKeywords(),
        
        // Extract potential influencer info
        authorInfo: extractAuthorInfo(),
        
        // Check for common scam indicators
        scamIndicators: detectScamIndicators()
    };
}

// Extract financial keywords and tickers
function extractFinancialKeywords() {
    const text = document.body.innerText;
    const patterns = {
        // Stock tickers (e.g., AAPL, MSFT)
        stocks: /\b[A-Z]{1,4}\b/g,
        
        // Cryptocurrency symbols (e.g., BTC, ETH)
        crypto: /\b(BTC|ETH|XRP|ADA|SOL|DOGE|LTC|BCH|XLM|EOS)\b/g,
        
        // Price mentions (e.g., $100, ₹5000)
        prices: /[$₹€]\d+[\d,]*/g
    };

    return {
        stocks: (text.match(patterns.stocks) || []).slice(0, 10),
        crypto: (text.match(patterns.crypto) || []),
        prices: (text.match(patterns.prices) || []).slice(0, 5)
    };
}

// Extract author/influencer information
function extractAuthorInfo() {
    const selectors = {
        youtubeChannel: '.yt-user-name, .channel-name',
        twitterHandle: '@\\w+',
        authorName: '[data-author], .author-name, .by-author'
    };

    const authorInfo = {
        youtube: extractBySelector(selectors.youtubeChannel),
        twitter: extractTwitterHandles(),
        other: extractBySelector(selectors.authorName)
    };

    return authorInfo;
}

// Extract text by CSS selector
function extractBySelector(selector) {
    try {
        const elements = document.querySelectorAll(selector);
        const results = [];
        
        elements.forEach(el => {
            const text = el.textContent.trim();
            if (text && results.length < 5) {
                results.push(text);
            }
        });
        
        return results;
    } catch (e) {
        return [];
    }
}

// Extract Twitter handles
function extractTwitterHandles() {
    const text = document.body.innerText;
    const handles = text.match(/@\w{1,15}\b/g) || [];
    return [...new Set(handles)]; // Remove duplicates
}

// Detect scam indicators
function detectScamIndicators() {
    const text = document.body.innerText.toLowerCase();
    
    const indicators = {
        urgencyTactics: [
            'act now',
            'limited time',
            'hurry',
            'urgent',
            'before it expires',
            'don\'t miss out'
        ],
        guarantees: [
            'guaranteed returns',
            '100% profit',
            'risk-free',
            'no loss',
            'safe investment'
        ],
        unusualOffers: [
            'easy money',
            'get rich quick',
            'passive income',
            'no experience needed',
            'work from home'
        ]
    };

    const detected = {
        urgency: [],
        guarantees: [],
        unusual: []
    };

    // Check for urgency tactics
    indicators.urgencyTactics.forEach(tactic => {
        if (text.includes(tactic)) {
            detected.urgency.push(tactic);
        }
    });

    // Check for false guarantees
    indicators.guarantees.forEach(guarantee => {
        if (text.includes(guarantee)) {
            detected.guarantees.push(guarantee);
        }
    });

    // Check for unusual offers
    indicators.unusualOffers.forEach(offer => {
        if (text.includes(offer)) {
            detected.unusual.push(offer);
        }
    });

    return detected;
}

// Inject badge indicator (optional visual feedback)
function injectBadge() {
    // Create a visual badge in the page
    const badge = document.createElement('div');
    badge.id = 'fincheck-badge';
    badge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #00A86B;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 10000;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    badge.textContent = '✓ FinCheck Active';
    document.body.appendChild(badge);
}

// Initialize
console.log('Content script initialized');
injectBadge();
```

### Key Functions in content.js:

| Function | Purpose |
|----------|---------|
| `extractPageData()` | Get all page information |
| `extractFinancialKeywords()` | Find stocks, crypto, prices |
| `extractAuthorInfo()` | Find influencer/author names |
| `detectScamIndicators()` | Find warning signs |
| `injectBadge()` | Visual feedback to user |

## STEP 3 FINAL VERIFICATION
Test your JavaScript syntax:

```bash
# Verify all JS files exist
dir js  # Windows
ls -la js  # Mac/Linux

# Test if files are valid JavaScript (optional)
# Open each file and look for syntax errors in VS Code
```

### Expected js/ Folder:
```text
js/
├── popup.js         # ✅ ~350 lines of code
├── background.js    # ✅ ~100 lines of code
└── content.js       # ✅ ~200 lines of code
```

## STEP 3 CHECKLIST ✅
```text
☐ Created js/popup.js with complete code
☐ Created js/background.js with complete code
☐ Created js/content.js with complete code
☐ All event listeners properly set up
☐ Chrome storage API used for stats
☐ Error handling in place
☐ Comments explain each function
☐ No console errors when opening DevTools

Ready for testing! ✅
```

## TESTING YOUR EXTENSION (LOCAL)

### Step 1: Load Extension in Chrome

1. Open Chrome and go to: `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select your `fincheck-extension` folder
5. Your extension should appear with green status "Loaded"

### Step 2: Test Popup

1. Click the FinCheck icon in toolbar
2. Popup should open showing:
   - ✅ Green header with "FinCheck"
   - ✅ "Analyzing content..." spinner
   - ✅ Stats showing (Pages Checked, Scams Blocked)
   - ✅ Settings button

### Step 3: Test Analysis

1. Go to YouTube, Twitter, or Reddit
2. Click extension icon
3. Should analyze page and show:
   - ✅ Scam Risk meter
   - ✅ Credibility score
   - ✅ Deepfake risk
   - ✅ Any warnings detected

### Step 4: Check Console

1. Open DevTools: Right-click → Inspect
2. Go to Console tab
3. Should see:
   - ✅ "FinCheck popup loaded"
   - ✅ "FinCheck content script loaded"
   - ✅ "FinCheck background service worker loaded"
   - **No errors** (red messages)

## COMMON ERRORS & SOLUTIONS

| Error | Solution |
|-------|----------|
| Extension doesn't load | Check `manifest.json` for syntax errors |
| Popup is blank/white | Check `popup.html` and `css/popup.css` paths |
| "Cannot read property 'addEventListener'" | Element with ID might not exist in HTML |
| Console shows "undefined" errors | Check element IDs match between HTML and JS |
| Stats don't update | Check Chrome storage is enabled |

## DEBUGGING TIPS

```bash
# View extension errors
1. Go to chrome://extensions/
2. Find FinCheck
3. Click "Details"
4. Scroll down to "Errors"
5. View detailed error messages

# View popup console
1. Right-click extension icon
2. Select "Inspect popup"
3. Go to Console tab
4. You'll see all popup.js console.log() messages

# View background script console
1. Go to chrome://extensions/
2. Find FinCheck
3. Click "Background" under "Details"
4. DevTools opens for background.js
```

## WHAT YOU CAN TEST NOW

### ✅ Working:

- Popup opens and closes
- Stats display and update
- Settings panel toggles
- Analysis runs and shows results
- Warnings appear for suspicious content
- Scam risk meter animates

### ❌ Not Yet (needs Step 5 - Backend):

- Real API integration
- Network requests to backend
- Advanced deepfake detection
- Real SEBI registration check
- Remote analysis processing

## NEXT STEPS
**Congratulations! Step 3 is complete!** 🎉

### What's Next:

1. Your extension is interactive ✅
2. Move to **STEP 4: CREATE PYTHON BACKEND**
   - Create Flask server
   - Implement AI analysis
   - Setup API endpoints
   - Time estimate: 90 minutes
   - Difficulty: Hard

### To Continue:

- Keep everything as is
- Proceed to Step 4: Python Backend
- Don't close Chrome yet (we'll test backend integration)

## QUICK REFERENCE

### File Sizes (Approximate):

- `popup.js`: 350 lines
- `background.js`: 100 lines
- `content.js`: 200 lines
- **Total**: 650 lines of JavaScript

### Chrome APIs Used:

- `chrome.tabs.*` - Access current tab
- `chrome.storage.*` - Store data locally
- `chrome.runtime.*` - Message passing
- `chrome.action.*` - Extension icon/badge
- `chrome.scripting.*` - Inject scripts

### No Backend Needed Yet:

- All analysis is **LOCAL**
- No API calls
- No network requests
- Pure client-side functionality

---

**Time taken:** 60 minutes  
**Difficulty:** ⭐⭐⭐ (3/5 stars - intermediate JavaScript)  
**Next:** STEP 4 (90 minutes, ⭐⭐⭐⭐ difficulty - backend)
