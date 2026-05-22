# File: src/synthetic_data_generator.py
import numpy as np
import pandas as pd
from src.heston_pricer import HestonPricer
from tqdm import tqdm
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SyntheticDataGenerator:
    def __init__(self, spot_price: float = 77000, num_samples: int = 100000):
        self.spot_price = spot_price
        self.num_samples = num_samples
        self.pricer = HestonPricer(spot_price)
        
        # Realistic parameter ranges for Indian markets
        self.param_ranges = {
            'v0': (0.005, 0.08),
            'kappa': (0.3, 2.0),
            'theta': (0.01, 0.10),
            'sigma': (0.1, 0.8),
            'rho': (-0.95, -0.05)
        }
        
        self.strike_range = (-0.15, 0.15)  # ±15%
        self.num_strikes = 21
        self.num_maturities = 5
        self.maturity_days = [7, 14, 30, 60, 90]
    
    def _sample_parameters(self) -> dict:
        """Sample valid Heston parameters."""
        params = {k: np.random.uniform(*v) for k, v in self.param_ranges.items()}
        
        # Enforce Feller condition
        if not self.pricer.check_feller_condition(
            params['kappa'], params['theta'], params['sigma']):
            params['kappa'], params['theta'], params['sigma'] = \
                self.pricer.enforce_feller_condition(
                    params['kappa'], params['theta'], params['sigma'])
        
        return params
    
    def _generate_option_chain(self, params: dict) -> np.ndarray:
        """Generate 105 option prices (21 strikes × 5 maturities)."""
        moneyness = np.linspace(*self.strike_range, self.num_strikes)
        strikes = self.spot_price * (1 + moneyness)
        maturities = np.array(self.maturity_days) / 365.0
        
        prices = []
        for strike in strikes:
            for maturity in maturities:
                price = self.pricer.price_european_option(
                    strike, maturity, **params)
                
                if not np.isnan(price) and price > 0:
                    # Add realistic market noise
                    noise = np.random.normal(0, abs(price) * 0.001)
                    price = max(0.01, price + noise)
                    prices.append(price)
                else:
                    # Skip invalid prices
                    return np.array([np.nan])
        
        
        return np.array(prices)
    
    def generate_dataset(self, save_path: str = 'data/synthetic_dataset.csv') -> pd.DataFrame:
        """Generate complete training dataset."""
        logger.info(f"Generating {self.num_samples} samples...")
        
        all_features, all_targets = [], []
        
        for i in tqdm(range(self.num_samples), desc="Generating samples"):
            params = self._sample_parameters()
            features = self._generate_option_chain(params)
            
            if not np.any(np.isnan(features)):
                all_features.append(features)
                all_targets.append(list(params.values()))
        
        # Create DataFrame
        num_features = self.num_strikes * self.num_maturities
        feature_cols = [f'price_{i}' for i in range(num_features)]
        target_cols = ['v0', 'kappa', 'theta', 'sigma', 'rho']
        
        df = pd.DataFrame(
            np.column_stack([all_features, all_targets]),
            columns=feature_cols + target_cols
        )
        
        df.to_csv(save_path, index=False)
        logger.info(f"✓ Dataset saved: {save_path} ({df.shape})")
        
        return df

if __name__ == "__main__":
    generator = SyntheticDataGenerator(num_samples=100000)
    df = generator.generate_dataset()
    print(df.head())
