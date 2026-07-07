// background.js - Background tasks

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        // Auto-analyze if enabled
        chrome.storage.local.get(['settings'], (result) => {
            if (result.settings?.autoAnalyze !== false) {
                chrome.tabs.sendMessage(tabId, { action: 'analyzeContent' });
            }
        });
    }
});

// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getAnalysis') {
        // Forward to API
        fetch('http://localhost:5000/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request.data)
        })
        .then(r => r.json())
        .then(data => sendResponse(data))
        .catch(err => sendResponse({ error: err.message }));
        return true;
    }
});

// Badge updates
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'updateBadge') {
        chrome.action.setBadgeText({ text: request.text });
        chrome.action.setBadgeBackgroundColor({ color: request.color });
    }
});
