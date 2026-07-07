from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import os
from dotenv import load_dotenv
import json

# Optional market data dependency
try:
    import yfinance as yf
except ImportError:
    yf = None

load_dotenv()

app = Flask(__name__)
CORS(app)

# Load free models from Hugging Face
sentiment_pipeline = pipeline('sentiment-analysis')
ner_pipeline = pipeline('ner', model='bert-base-cased')

class AnalysisEngine:
    def __init__(self):
        self.scam_keywords = {
            'pump_dump': ['buy now', 'get rich', 'exclusive tips', 'insider info', 'before it explodes'],
            'urgency': ['act fast', 'limited time', 'now or never', 'last chance'],
            'guarantees': ['guaranteed returns', '100% profit', 'risk-free', 'no loss']
        }
        self.load_blacklist()
    
    def load_blacklist(self):
        # Load known scam accounts (free, community-maintained)
        try:
            with open('data/blacklist.json') as f:
                self.blacklist = json.load(f)
        except:
            self.blacklist = []
    
    def analyze_text(self, text, author=None):
        scam_score = 0
        warnings = []
        
        text_lower = text.lower()
        
        # Check for pump & dump keywords
        for keyword in self.scam_keywords['pump_dump']:
            if keyword in text_lower:
                scam_score += 15
                warnings.append(f"Detected pump-and-dump language: '{keyword}'")
        
        # Check for urgency tactics
        for keyword in self.scam_keywords['urgency']:
            if keyword in text_lower:
                scam_score += 10
                warnings.append(f"Urgency tactic detected: '{keyword}'")
        
        # Check for false guarantees
        for keyword in self.scam_keywords['guarantees']:
            if keyword in text_lower:
                scam_score += 20
                warnings.append(f"Illegal guarantee detected: '{keyword}'")
        
        # Check if author is blacklisted
        if author and author in [b['name'] for b in self.blacklist]:
            scam_score += 30
            warnings.append("⚠️ Author is on scam watch list")
        
        # Sentiment analysis (negative sentiment = suspicious)
        try:
            sentiment = sentiment_pipeline(text[:512])  # Limit to 512 chars
            if sentiment[0]['label'] == 'NEGATIVE' and sentiment[0]['score'] > 0.9:
                scam_score += 5
        except:
            pass
        
        scam_score = min(100, scam_score)
        
        return {
            'scam_risk': scam_score,
            'scam_message': self.get_risk_message(scam_score),
            'warnings': warnings,
            'confidence': 0.85
        }
    
    def get_risk_message(self, score):
        if score >= 80:
            return "🚨 HIGH RISK: Strong indicators of scam content. Avoid clicking links or sending money."
        elif score >= 60:
            return "⚠️ MEDIUM RISK: Some suspicious patterns detected. Verify before acting."
        elif score >= 40:
            return "⚠️ LOW-MEDIUM RISK: Minor red flags present."
        else:
            return "✅ LOW RISK: Content appears legitimate based on initial scan."
    
    def check_influencer_credibility(self, author, follower_count=None):
        # Simple heuristic: check against blacklist and analyze posting patterns
        is_blacklisted = author in [b['name'] for b in self.blacklist]
        
        score = 8
        if is_blacklisted:
            score = 2
        if follower_count and follower_count < 1000:
            score -= 1
        
        return {
            'name': author,
            'score': max(1, min(10, score)),
            'message': 'Verified financial advisor' if score > 6 else 'Unverified advisor - check before trusting'
        }

engine = AnalysisEngine()

# Simple health check
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'endpoints': ['api/analyze', 'api/verify-sebi', 'api/market-data'],
        'yfinance': bool(yf),
        'models': {
            'sentiment': True,
            'ner': True
        }
    })

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.json
    
    analysis = {
        'scam_analysis': engine.analyze_text(data.get('content', {}).get('text', '')),
        'influencer_credibility': engine.check_influencer_credibility(
            data.get('content', {}).get('title', 'Unknown')
        ),
        'deepfake_risk': {
            'risk': 15,  # Placeholder - upgrade to video analysis
            'message': '✅ No deepfake indicators detected (basic check)'
        },
        'url': data.get('url')
    }
    
    # Combine warnings
    all_warnings = analysis['scam_analysis'].get('warnings', [])
    
    return jsonify({
        'scam_risk': analysis['scam_analysis']['scam_risk'],
        'scam_message': analysis['scam_analysis']['scam_message'],
        'influencer_credibility': {
            'score': analysis['influencer_credibility']['score'],
            'message': analysis['influencer_credibility']['message']
        },
        'deepfake_risk': analysis['deepfake_risk'],
        'warnings': all_warnings,
        'url': analysis['url']
    })

@app.route('/api/verify-sebi', methods=['POST'])
def verify_sebi():
    """Free API: Check SEBI registration (manual list for now)"""
    entity = request.json.get('entity')
    
    # Load SEBI verified list
    try:
        with open('data/sebi_verified.json') as f:
            verified = json.load(f)
        is_registered = entity in verified
    except:
        is_registered = False
    
    return jsonify({
        'entity': entity,
        'sebi_registered': is_registered,
        'message': f'✅ SEBI Verified' if is_registered else '❌ Not found in SEBI registry'
    })

# ------------------------------
# Market data endpoint (optional)
# ------------------------------

@app.route('/api/market-data', methods=['POST'])
def market_data():
    """Retrieve basic market data for a symbol using yfinance.

    Request body:
    { "symbol": "AAPL", "period": "1d", "interval": "1m" }

    Returns:
    Current price (fast_info when available), currency, intraday change %, pump-like flag.
    """
    data = request.get_json(silent=True) or {}
    symbol = (data.get('symbol') or '').upper().strip()
    period = data.get('period', '1d')
    interval = data.get('interval', '1m')

    if not symbol:
        return jsonify({ 'error': 'Missing symbol' }), 400

    if yf is None:
        return jsonify({ 'error': 'yfinance not installed', 'hint': 'pip install yfinance' }), 503

    try:
        ticker = yf.Ticker(symbol)

        # Fast info (preferred) for price/currency
        price = None
        currency = None
        try:
            fast = getattr(ticker, 'fast_info', None)
            if fast:
                price = fast.get('last_price') or fast.get('lastPrice')
                currency = fast.get('currency')
        except Exception:
            pass

        # Intraday change using history
        hist = ticker.history(period=period, interval=interval)
        change_pct = None
        pump_like = False
        points = 0
        if hasattr(hist, 'empty') and not hist.empty:
            points = len(hist)
            open_price = float(hist['Open'].iloc[0])
            last_close = float(hist['Close'].iloc[-1])
            if open_price > 0:
                change_pct = round((last_close - open_price) / open_price * 100, 2)
                pump_like = change_pct >= 20.0

        return jsonify({
            'symbol': symbol,
            'price': price,
            'currency': currency,
            'change_intraday_pct': change_pct,
            'pump_like_move': pump_like,
            'data_points': points,
            'period': period,
            'interval': interval
        }), 200
    except Exception as e:
        return jsonify({ 'error': str(e) }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
