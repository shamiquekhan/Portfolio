# FinCheck - Quick Reference

## 🚀 Quick Start Commands

### Start Backend Server

**Windows:**
```bash
# Double-click start-server.bat
# OR run in terminal:
start-server.bat
```

**Mac/Linux:**
```bash
chmod +x start-server.sh
./start-server.sh
```

**Manual Start:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
python server.py
```

### Load Extension in Chrome

1. Open `chrome://extensions/`
2. Enable "Developer mode" (top-right)
3. Click "Load unpacked"
4. Select the project folder

## 📝 File Structure Quick Reference

```
fincheck-extension/
├── manifest.json          # Extension config
├── popup.html            # UI layout
├── popup.css             # Styles
├── popup.js              # Frontend logic
├── content.js            # Page content extraction
├── background.js         # Background tasks
├── .env                  # API keys (create this!)
├── backend/
│   ├── server.py         # Main API server
│   ├── requirements.txt  # Python deps
│   ├── models/          # ML models
│   └── data/            # Data files
└── icons/               # Extension icons
```

## 🔑 API Keys Required

Get free keys from:
- Hugging Face: https://huggingface.co/settings/tokens
- NewsAPI: https://newsapi.org/register
- Alpha Vantage: https://www.alphavantage.co/support/#api-key

Add to `.env` file in project root.

## 🧪 Testing URLs

Test the extension on:
- https://www.youtube.com/results?search_query=stock+trading
- https://twitter.com/search?q=stocks
- https://www.reddit.com/r/investing/
- Any financial blog or news site

## 🛠️ Common Tasks

### Add a Scammer to Blacklist
Edit `backend/data/blacklist.json`:
```json
{
  "scammers": [
    {
      "name": "ScammerName",
      "reason": "Reason",
      "reports": 100
    }
  ]
}
```

### Add SEBI Verified Entity
Edit `backend/data/sebi_verified.json`:
```json
[
  "EntityName1",
  "EntityName2"
]
```

### Customize Scam Detection
Edit keywords in `backend/server.py` → `AnalysisEngine` class

### Change Server Port
Edit `.env`:
```env
PORT=5001
```

## 📊 API Endpoints

### Analyze Content
```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "title": "Title",
    "content": {"text": "Content here"}
  }'
```

### Verify SEBI
```bash
curl -X POST http://localhost:5000/api/verify-sebi \
  -H "Content-Type: application/json" \
  -d '{"entity": "Zerodha"}'
```

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000  # Windows
lsof -ti:5000  # Mac/Linux

# Kill process
taskkill /PID <pid> /F  # Windows
kill <pid>  # Mac/Linux
```

### Extension not loading
- Check `chrome://extensions/` for errors
- Ensure `manifest.json` is in root folder
- Reload extension after changes

### Analysis fails
- Verify backend is running: http://localhost:5000
- Check browser console (F12)
- Check backend terminal for errors

### Dependencies fail to install
```bash
# Upgrade pip
python -m pip install --upgrade pip

# Install one by one
pip install Flask
pip install Flask-CORS
pip install python-dotenv
pip install transformers
# etc.
```

## 📚 Documentation

- **Full Setup**: [SETUP.md](SETUP.md)
- **Privacy**: [PRIVACY.md](PRIVACY.md)
- **Main Guide**: [README.md](README.md)
- **Original Build Guide**: [FinCheck-Build-Guide.md](FinCheck-Build-Guide.md)

## 🔗 Useful Links

- Chrome Extension Docs: https://developer.chrome.com/docs/extensions/
- Flask Docs: https://flask.palletsprojects.com/
- Hugging Face: https://huggingface.co/docs
- Transformers: https://huggingface.co/docs/transformers/

## 💡 Tips

1. **Keep server running** while using extension
2. **Reload extension** after code changes (`chrome://extensions/` → reload)
3. **Check console** (F12) for errors
4. **Test locally** before deploying
5. **Use mock data** for testing without API calls

## 🚀 Next Steps

1. ✅ Start backend server
2. ✅ Load extension in Chrome
3. ✅ Test on financial websites
4. ✅ Customize detection rules
5. ✅ Add your own data sources
6. ✅ Deploy to production (optional)

## 📧 Get Help

- GitHub Issues: Create an issue
- Documentation: Read SETUP.md
- Community: Join discussions
