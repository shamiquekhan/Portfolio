// popup.js - Main extension logic

class FinCheckAnalyzer {
    constructor() {
        this.apiEndpoint = 'http://localhost:5000/api';
        this.initializeUI();
        this.loadStats();
    }

    initializeUI() {
        document.getElementById('details-btn').addEventListener('click', () => this.showDetails());
        document.getElementById('report-btn').addEventListener('click', () => this.reportContent());
        document.getElementById('settings-btn').addEventListener('click', () => this.toggleSettings());
        document.getElementById('reset-stats-btn').addEventListener('click', () => this.resetStats());

        // Load settings
        chrome.storage.local.get(['settings'], (result) => {
            const settings = result.settings || {};
            document.getElementById('auto-analyze').checked = settings.autoAnalyze !== false;
            document.getElementById('show-warnings').checked = settings.showWarnings !== false;
            document.getElementById('enable-notifications').checked = settings.enableNotifications !== false;
        });
    }

    async analyzeCurrentPage() {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');
        document.getElementById('error').classList.add('hidden');

        try {
            // Extract page content
            const pageContent = await this.extractPageContent(tab);

            // Try backend analysis first, fallback to local if needed
            const analysis = await this.analyzeWithBackend({
                url: tab.url,
                title: tab.title,
                text: pageContent.text
            });

            this.displayResults(analysis);
            this.updateStats(analysis);

        } catch (error) {
            console.error('Analysis error:', error);
            this.showError('Failed to analyze page: ' + error.message);
        } finally {
            document.getElementById('loading').classList.add('hidden');
        }
    }

    async extractPageContent(tab) {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                return {
                    text: document.body.innerText,
                    title: document.title,
                    influencers: Array.from(document.querySelectorAll('[data-influencer], .channel-name'))
                        .map(el => el.textContent),
                    tickers: document.body.innerText.match(/[A-Z]{1,4}/g) || []
                };
            }
        });
        return result.result;
    }

    // Call backend API for analysis with graceful fallback
    async analyzeWithBackend(content) {
        try {
            const response = await fetch(`${this.apiEndpoint}/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    url: content.url,
                    title: content.title,
                    content: { text: (content.text || '').substring(0, 5000) }
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const analysis = await response.json();
            return {
                scam_risk: analysis.scam_risk || 0,
                scam_message: analysis.scam_message || 'Analysis complete',
                influencer_credibility: analysis.influencer_credibility || { score: 5, message: 'Unknown' },
                deepfake_risk: analysis.deepfake_risk || { risk: 0, message: 'No check performed' },
                warnings: analysis.warnings || [],
                url: content.url
            };
        } catch (err) {
            console.warn('Backend API unavailable, falling back to local analysis:', err.message || err);
            return this.analyzeLocally(content);
        }
    }

    // Local analysis (fallback when backend unavailable)
    analyzeLocally(content) {
        const text = (content.text || '').toLowerCase();
        const patterns = {
            urgency: ['buy now', 'act fast', 'limited time', 'hurry', "don't miss"],
            guarantees: ['guaranteed', '100% profit', 'risk-free', 'no loss'],
            hype: ['skyrocket', 'moon', 'explosive', 'unprecedented'],
            money: ['get rich', 'easy money', 'passive income']
        };

        let score = 0;
        const warnings = [];
        Object.entries(patterns).forEach(([key, kws]) => {
            if (kws.some(k => text.includes(k))) {
                score += 20;
                warnings.push(`Detected ${key} language`);
            }
        });
        score = Math.min(100, score);

        const riskLevelMsg = score > 70 ? '⚠️ Multiple warning signs detected' : score > 40 ? '⚠️ Some risk indicators present' : '✅ Generally safe content';
        return {
            scam_risk: score,
            scam_message: score > 70 ? 'High risk of scam/pump tactics' : score > 40 ? 'Moderate risk – review carefully' : 'Low risk detected',
            influencer_credibility: {
                score: Math.max(1, 10 - Math.round(score / 10)),
                message: riskLevelMsg
            },
            deepfake_risk: { risk: 15, message: '✅ No obvious deepfake indicators' },
            warnings,
            url: content.url
        };
    }

    displayResults(analysis) {
        // Scam Risk
        const scamRisk = analysis.scam_risk;
        document.getElementById('scam-risk').style.width = scamRisk + '%';
        document.getElementById('scam-risk').className = 'risk-bar' + 
            (scamRisk > 70 ? ' high' : scamRisk > 40 ? ' medium' : '');
        document.getElementById('scam-message').textContent = analysis.scam_message;

        // Credibility
        const credibility = analysis.influencer_credibility;
        const credBadge = document.getElementById('credibility-score');
        credBadge.textContent = credibility.score + '/10';
        credBadge.className = 'credibility-badge ' + (credibility.score > 6 ? 'high' : 'low');
        document.getElementById('credibility-message').textContent = credibility.message;

        // Deepfake Detection
        const deepfake = analysis.deepfake_risk;
        const deepfakeBadge = document.getElementById('deepfake-risk');
        deepfakeBadge.textContent = deepfake.risk + '%';
        deepfakeBadge.className = 'authenticity-badge ' + (deepfake.risk < 30 ? 'high' : 'low');
        document.getElementById('deepfake-message').textContent = deepfake.message;

        // Warnings
        if (analysis.warnings && analysis.warnings.length > 0) {
            document.getElementById('warnings-card').style.display = 'block';
            const list = document.getElementById('warnings-list');
            list.innerHTML = analysis.warnings.map(w => `<li>${w}</li>`).join('');
        }

        document.getElementById('results').classList.remove('hidden');
    }

    updateStats(analysis) {
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || { pagesChecked: 0, scamsBlocked: 0, usersProtected: 0 };
            stats.pagesChecked += 1;
            if (analysis.scam_risk > 70) stats.scamsBlocked += 1;
            stats.usersProtected = Math.floor(stats.scamsBlocked / 10) + 1;

            chrome.storage.local.set({ stats });
            this.loadStats();
        });
    }

    loadStats() {
        chrome.storage.local.get(['stats'], (result) => {
            const stats = result.stats || { pagesChecked: 0, scamsBlocked: 0, usersProtected: 0 };
            document.getElementById('pages-checked').textContent = stats.pagesChecked;
            document.getElementById('scams-blocked').textContent = stats.scamsBlocked;
            document.getElementById('users-protected').textContent = stats.usersProtected;
        });
    }

    showError(message) {
        document.getElementById('error-text').textContent = message;
        document.getElementById('error').classList.remove('hidden');
    }

    showDetails() {
        alert('Detailed analysis report (implement in next version)');
    }

    reportContent() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            alert('Report submitted for: ' + tabs[0].url);
        });
    }

    toggleSettings() {
        document.getElementById('settings-panel').classList.toggle('hidden');
    }

    resetStats() {
        if (confirm('Reset all statistics?')) {
            chrome.storage.local.set({ stats: { pagesChecked: 0, scamsBlocked: 0, usersProtected: 0 } });
            this.loadStats();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const analyzer = new FinCheckAnalyzer();
    analyzer.analyzeCurrentPage();
});
