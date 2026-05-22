"""
Deepfake detection module (basic text-based version)
For video deepfake detection, upgrade to use computer vision models
"""

class DeepfakeDetector:
    def __init__(self):
        self.suspicious_indicators = [
            'unrealistic claims',
            'AI generated',
            'voice over',
            'face swap'
        ]
    
    def analyze_text(self, text):
        """
        Basic text-based deepfake detection
        For production, use video analysis models
        """
        risk_score = 0
        indicators = []
        
        text_lower = text.lower()
        
        for indicator in self.suspicious_indicators:
            if indicator in text_lower:
                risk_score += 20
                indicators.append(indicator)
        
        return {
            'risk': min(100, risk_score),
            'indicators': indicators,
            'message': self.get_message(risk_score)
        }
    
    def get_message(self, score):
        if score > 60:
            return "⚠️ HIGH RISK: Potential deepfake content detected"
        elif score > 30:
            return "⚠️ MEDIUM RISK: Some suspicious indicators"
        else:
            return "✅ No deepfake indicators detected (basic check)"
