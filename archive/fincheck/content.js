// content.js - Runs on web pages

console.log('FinCheck content script loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'analyzeContent') {
        const pageData = {
            text: document.body.innerText,
            title: document.title,
            url: window.location.href,
            influencers: extractInfluencers(),
            tickers: extractTickers()
        };
        sendResponse(pageData);
    }
});

function extractInfluencers() {
    // Extract influencer names (YouTube, Twitter, etc.)
    const selectors = [
        '.yt-user-name',
        '[data-channel-name]',
        '.profile-card__name',
        '.tweet-name'
    ];
    
    return selectors.flatMap(sel => 
        Array.from(document.querySelectorAll(sel)).map(el => el.textContent.trim())
    );
}

function extractTickers() {
    // Find stock tickers and crypto symbols
    const text = document.body.innerText;
    const patterns = {
        stocks: /\b[A-Z]{1,4}\b/g,
        crypto: /\b(BTC|ETH|XRP|ADA|SOL|DOGE)\b/g,
        symbols: /[$₹][\d,]+/g
    };
    
    return {
        stocks: (text.match(patterns.stocks) || []).slice(0, 10),
        crypto: (text.match(patterns.crypto) || []),
        prices: (text.match(patterns.symbols) || [])
    };
}
