# QuantML Tools Repository

Welcome to the official QuantML Tools repository. This monorepo contains production-grade, AI-powered tools for quantitative finance, trading, and financial compliance, developed and maintained by QuantML.

## 🚀 About QuantML

QuantML delivers AI-native infrastructure for institutional quantitative trading, combining regime-aware decision making, constraint-satisfying intelligence, and explainable multi-AI consensus. Our unified research-to-execution platform accelerates quant research cycles and ensures regulatory-compliant alpha generation at scale.

**Website:** [quantml.ai](https://quantml.ai)  
**Contact:** careers@quantml.ai  
**Hiring:** ML Engineers, Quant Researchers, Infrastructure Specialists

---

## 📦 Tools in This Repository

Each tool is maintained as a separate branch for modularity and ease of deployment.

| Tool Branch | Description | Benchmark/Highlight |
|------------|-------------|---------------------|
| `fincheck`  | FinCheck - Financial Scam Detector Chrome Extension | Real-time scam/deepfake detection for financial content; all analysis local or on your server |
| `advisor`   | AI Investment Advisor Agent | Live AI stock advisor with multi-provider API, real-time news sentiment, and zero rate-limit errors |
| `nifty50`   | NIFTY50 AI Trading System | LSTM-powered trading, auto-updates every 4 hours, and full NIFTY50 coverage |
| `sensex`    | Sensex Heston-ML Calibration Tool | 300× faster Heston model calibration (<50ms inference) with 5× better accuracy (MSE <0.001) |

---

## 🏢 Professional Standards

- **Production-Ready**: All tools are designed for institutional use, with robust testing and documentation.
- **Security & Compliance**: Built to satisfy FINRA 3110/3120, MiFID II, and global regulatory requirements.
- **Open Collaboration**: Contributions are welcome. Please open issues or pull requests for improvements.

---

## 📝 Usage

To use a specific tool, check out the corresponding branch:

```sh
git checkout <branch>
# Example: git checkout fincheck
```

Each branch contains its own README and setup instructions.

---

## 👤 Maintainer

**Shamique Khan**  
[LinkedIn](https://linkedin.com/in/shamique-khan) | [GitHub](https://github.com/shamiquekhan)

---

© 2026 QuantML. All rights reserved.

Edit `.env` file with your free API keys:

```env
HUGGINGFACE_API_KEY=your_key_here
NEWS_API_KEY=your_key_here
ALPHA_VANTAGE_KEY=your_key_here
```

**Get Free API Keys:**
- [Hugging Face](https://huggingface.co/settings/tokens) - Unlimited (rate-limited)
- [NewsAPI](https://newsapi.org/) - 100 requests/day
- [Alpha Vantage](https://www.alphavantage.co/support/#api-key) - 500 requests/day

#### 4. Start Backend Server

```bash
python server.py
```

Server will start at `http://localhost:5000`

#### 5. Load Chrome Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Select the `fincheck-extension` folder
5. The FinCheck icon should appear in your toolbar!

## 📖 Usage

### Basic Usage

1. **Visit any financial content** (YouTube, Twitter, Reddit, etc.)
2. **Click the FinCheck icon** in your toolbar
3. **View the analysis** of scam risk, credibility, and authenticity
4. **Check warnings** for specific red flags

### Settings

Click the ⚙️ Settings button to:
- Toggle auto-analysis
- Enable/disable warnings
- Control notifications
- Reset statistics

## 🛠️ Development

### Project Structure

```
fincheck-extension/
├── manifest.json           # Extension configuration
├── popup.html             # Extension UI
├── popup.css              # Styles
├── popup.js               # Frontend logic
├── content.js             # Content script
├── background.js          # Service worker
├── backend/
│   ├── server.py          # Flask API server
│   ├── requirements.txt   # Python dependencies
│   ├── models/            # ML models
│   └── data/              # Blacklists and verified lists
└── icons/                 # Extension icons
```

### Backend API Endpoints

#### `POST /api/analyze`
Analyze financial content for scams

**Request:**
```json
{
  "url": "https://example.com",
  "title": "Page Title",
  "content": {
    "text": "Page text content...",
    "title": "Content title"
  }
}
```

**Response:**
```json
{
  "scam_risk": 45,
  "scam_message": "⚠️ LOW-MEDIUM RISK: Minor red flags present.",
  "influencer_credibility": {
    "score": 7,
    "message": "Verified financial advisor"
  },
  "deepfake_risk": {
    "risk": 15,
    "message": "✅ No deepfake indicators detected"
  },
  "warnings": ["Urgency tactic detected: 'act fast'"]
}
```

#### `POST /api/verify-sebi`
Check SEBI registration status

**Request:**
```json
{
  "entity": "Zerodha"
}
```

**Response:**
```json
{
  "entity": "Zerodha",
  "sebi_registered": true,
  "message": "✅ SEBI Verified"
}
```

## 🧪 Testing

### Test the Extension

1. **Load extension** in Chrome (Developer mode)
2. **Visit test pages** with financial content
3. **Check console** for any errors
4. **Verify analysis results** are displayed correctly

### Test Checklist

- [ ] Popup loads without errors
- [ ] Content analysis completes in <2 seconds
- [ ] Scam detection works on test pages
- [ ] UI displays results correctly
- [ ] Stats update after analysis
- [ ] Settings persist on reload
- [ ] Works on YouTube, Twitter, Reddit
- [ ] No console errors

## 📊 How It Works

### Scam Detection Algorithm

1. **Keyword Analysis**: Searches for pump-and-dump language
2. **Urgency Detection**: Identifies high-pressure tactics
3. **Guarantee Checks**: Flags illegal investment guarantees
4. **Blacklist Check**: Compares against known scammers
5. **Sentiment Analysis**: Uses NLP to detect suspicious patterns

### Risk Scoring

- **0-40**: ✅ Low Risk
- **40-60**: ⚠️ Low-Medium Risk
- **60-80**: ⚠️ Medium Risk
- **80-100**: 🚨 High Risk

## 🔒 Privacy Policy

**FinCheck respects your privacy:**

- ✅ **No personal data collection**
- ✅ **Analysis happens locally/on your server**
- ✅ **No tracking or user behavior monitoring**
- ✅ **URLs are never stored permanently**
- ✅ **Open source - audit the code yourself**

## 💰 Free Tier Costs

| Component | Service | Cost |
|-----------|---------|------|
| Backend | Render/Replit | $0 |
| Database | Firebase (1GB) | $0 |
| ML Models | Hugging Face | $0 |
| APIs | NewsAPI, Alpha Vantage | $0 |
| Distribution | Chrome Web Store | **$5 one-time** |
| **TOTAL** | | **$5** |

## 🚀 Deployment

### Deploy Backend (Free Options)

**Option 1: Render.com**
1. Create account at [Render.com](https://render.com)
2. Connect GitHub repository
3. Deploy as Web Service (Free tier)

**Option 2: Replit**
1. Import project to [Replit](https://replit.com)
2. Run the Flask server
3. Get free public URL

### Publish to Chrome Web Store

1. **Create Developer Account** ($5 one-time fee)
   - Visit [Chrome Web Store Developer Console](https://chrome.google.com/webstore/devconsole/)

2. **Package Extension**
   ```bash
   zip -r fincheck-v1.0.zip manifest.json popup.* background.js content.js icons/
   ```

3. **Upload & Submit**
   - Upload ZIP file
   - Add screenshots and description
   - Submit for review (24-48 hours)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugging Face** - Free ML models
- **NewsAPI** - Financial news data
- **Alpha Vantage** - Stock market data
- **SEBI** - Financial regulation data
- **Indian Retail Investors** - Target user community

## 📧 Contact

- **GitHub**: [@yshamiquekhan](https://github.com/shamiquekhan)
- **Twitter**: [@shamique_1810](https://twitter.com/shamique-1810)
- **Email**: shamiquekhan18@gmail.com

## 🗺️ Roadmap

- [ ] Video deepfake detection
- [ ] Real-time SEBI API integration
- [ ] Browser extension for Firefox/Edge
- [ ] Mobile app version
- [ ] Premium tier with advanced features
- [ ] B2B partnerships with brokers
- [ ] Expand to global markets (SEC, FCA)

---

<div align="center">

**Made with ❤️ By Shamique Khan**

[Report Bug](https://github.com/shamiquekhan/fincheck/issues) · [Request Feature](https://github.com/shamiquekhan/fincheck/issues)

</div>
