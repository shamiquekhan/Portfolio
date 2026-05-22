"""
Sentiment analysis module for financial content
"""

from transformers import pipeline

class SentimentAnalyzer:
    def __init__(self):
        # Using FinBERT for financial sentiment analysis
        self.analyzer = pipeline('sentiment-analysis')
    
    def analyze(self, text):
        """
        Analyze sentiment of financial text
        Returns: dict with sentiment label and score
        """
        try:
            result = self.analyzer(text[:512])  # Limit to 512 chars
            return {
                'sentiment': result[0]['label'],
                'confidence': result[0]['score']
            }
        except Exception as e:
            return {
                'sentiment': 'NEUTRAL',
                'confidence': 0.0,
                'error': str(e)
            }
