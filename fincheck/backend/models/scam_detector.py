"""
Scam detection module using keyword matching and pattern recognition
"""

import re

class ScamDetector:
    def __init__(self):
        self.patterns = {
            'pump_dump': [
                r'buy now',
                r'get rich (quick|fast)',
                r'exclusive tips?',
                r'insider (info|information)',
                r'before it explodes',
                r'going to moon',
                r'100x returns?'
            ],
            'urgency': [
                r'act (fast|now)',
                r'limited time',
                r'now or never',
                r'last chance',
                r'expire[sd]? (soon|today)',
                r'don\'?t miss (out|this)'
            ],
            'guarantees': [
                r'guaranteed? returns?',
                r'100%\s+profit',
                r'risk-?free',
                r'no (loss|risk)',
                r'sure (shot|thing)',
                r'can\'?t lose'
            ],
            'investment_fraud': [
                r'send money',
                r'wire transfer',
                r'deposit (now|immediately)',
                r'upfront (fee|payment)',
                r'registration fee'
            ]
        }
    
    def detect(self, text):
        """
        Detect scam patterns in text
        Returns: dict with risk score and detected patterns
        """
        text_lower = text.lower()
        score = 0
        detected = []
        
        for category, patterns in self.patterns.items():
            for pattern in patterns:
                matches = re.findall(pattern, text_lower)
                if matches:
                    score += 15
                    detected.append({
                        'category': category,
                        'pattern': pattern,
                        'matches': matches
                    })
        
        return {
            'scam_score': min(100, score),
            'detected_patterns': detected,
            'risk_level': self.get_risk_level(score)
        }
    
    def get_risk_level(self, score):
        if score >= 80:
            return 'HIGH'
        elif score >= 50:
            return 'MEDIUM'
        elif score >= 30:
            return 'LOW-MEDIUM'
        else:
            return 'LOW'
