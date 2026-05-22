# File: src/inference.py
import torch
import numpy as np
import pickle
from pathlib import Path
import sys
sys.path.insert(0, r'c:\Project\New folder\sensex-heston-ml')

from src.neural_network import HestonCalibrationNetwork
from src.heston_pricer import HestonPricer

class HestonCalibrator:
    def __init__(self, model_path: str, scaler_path: str = None):
        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'
        self.model = HestonCalibrationNetwork()
        
        # Handle both absolute and relative paths
        if not Path(model_path).exists():
            # Try relative to script directory
            script_dir = Path(__file__).parent.parent
            alt_model_path = script_dir / model_path
            if alt_model_path.exists():
                model_path = str(alt_model_path)
            else:
                raise FileNotFoundError(f"Model file not found at {model_path} or {alt_model_path}")
        
        self.model.load_state_dict(torch.load(model_path, map_location=self.device))
        self.model.to(self.device)
        self.model.eval()
        self.pricer = HestonPricer()
        
        # Load scaler if available
        if scaler_path is None:
            scaler_path = str(Path(model_path).with_suffix('')) + '_scaler.pkl'
        
        if Path(scaler_path).exists():
            with open(scaler_path, 'rb') as f:
                self.scaler = pickle.load(f)
        else:
            self.scaler = None
            print("Warning: No scaler found. Using basic normalization.")
    
    def calibrate(self, option_prices: np.ndarray) -> dict:
        """Calibrate from 105 option prices."""
        if len(option_prices) != 105:
            raise ValueError(f"Expected 105 prices, got {len(option_prices)}")
        
        # Normalize
        if self.scaler is not None:
            prices_norm = self.scaler.transform(option_prices.reshape(1, -1))
        else:
            prices_norm = option_prices / (np.max(np.abs(option_prices)) + 1e-8)
            prices_norm = prices_norm.reshape(1, -1)
        
        input_tensor = torch.FloatTensor(prices_norm).to(self.device)
        
        with torch.no_grad():
            params = self.model(input_tensor).cpu().numpy()[0]
        
        result = {
            'v0': float(params[0]),
            'kappa': float(params[1]),
            'theta': float(params[2]),
            'sigma': float(params[3]),
            'rho': float(params[4]),
            'feller_ok': self.pricer.check_feller_condition(params[1], params[2], params[3])
        }
        
        return result

if __name__ == "__main__":
    import time
    
    calibrator = HestonCalibrator('models/heston_calibrator.pt')
    
    # Test with random prices
    test_prices = np.random.lognormal(mean=np.log(2000), sigma=0.5, size=105)
    
    print("Testing calibration speed...")
    start = time.time()
    params = calibrator.calibrate(test_prices)
    elapsed = (time.time() - start) * 1000
    
    print("\n" + "=" * 60)
    print("Calibrated parameters:")
    print("=" * 60)
    for k, v in params.items():
        if k == 'feller_ok':
            print(f"  {k:12s}: {'✓ Yes' if v else '✗ No'}")
        else:
            print(f"  {k:12s}: {v:.6f}")
    print("=" * 60)
    print(f"\n⚡ Inference time: {elapsed:.2f} ms")
