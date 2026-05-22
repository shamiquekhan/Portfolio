# File: src/heston_pricer.py
import numpy as np
import QuantLib as ql
from typing import List, Tuple
import warnings
warnings.filterwarnings('ignore')

class HestonPricer:
    """Heston option pricer using QuantLib FFT."""
    
    def __init__(self, spot_price: float = 77000, risk_free_rate: float = 0.06, 
                 dividend_yield: float = 0.0):
        self.spot_price = spot_price
        self.risk_free_rate = risk_free_rate
        self.dividend_yield = dividend_yield
        
    def price_european_option(self, strike: float, time_to_maturity: float,
                            v0: float, kappa: float, theta: float, 
                            sigma: float, rho: float, option_type: str = 'call') -> float:
        """Price European call/put using Heston model."""
        
        # QuantLib setup
        calculation_date = ql.Date().todaysDate()
        ql.Settings.instance().evaluationDate = calculation_date
        
        day_count = ql.Actual365Fixed()
        risk_free_ts = ql.YieldTermStructureHandle(
            ql.FlatForward(calculation_date, self.risk_free_rate, day_count)
        )
        dividend_ts = ql.YieldTermStructureHandle(
            ql.FlatForward(calculation_date, self.dividend_yield, day_count)
        )
        
        spot_handle = ql.QuoteHandle(ql.SimpleQuote(self.spot_price))
        heston_process = ql.HestonProcess(risk_free_ts, dividend_ts, spot_handle,
                                        v0, kappa, theta, sigma, rho)
        
        # Option setup
        maturity_date = calculation_date + ql.Period(int(time_to_maturity * 365), ql.Days)
        option_type_ql = ql.Option.Call if option_type == 'call' else ql.Option.Put
        
        european_option = ql.VanillaOption(
            ql.PlainVanillaPayoff(option_type_ql, strike),
            ql.EuropeanExercise(maturity_date)
        )
        
        # Pricing engine
        engine = ql.AnalyticHestonEngine(ql.HestonModel(heston_process), 0.01, 1000)
        european_option.setPricingEngine(engine)
        
        try:
            return european_option.NPV()
        except:
            return np.nan
    
    def generate_price_grid(self, strikes: List[float], maturities: List[float],
                          v0: float, kappa: float, theta: float, 
                          sigma: float, rho: float) -> np.ndarray:
        """Generate 2D price grid (strikes x maturities)."""
        price_grid = np.zeros((len(strikes), len(maturities)))
        for i, strike in enumerate(strikes):
            for j, maturity in enumerate(maturities):
                price_grid[i, j] = self.price_european_option(
                    strike, maturity, v0, kappa, theta, sigma, rho
                )
        return price_grid
    
    @staticmethod
    def check_feller_condition(kappa: float, theta: float, sigma: float) -> bool:
        """Check 2κθ ≥ σ² (Feller condition)."""
        return 2 * kappa * theta >= sigma ** 2
    
    @staticmethod
    def enforce_feller_condition(kappa: float, theta: float, sigma: float) -> Tuple[float, float, float]:
        """Adjust sigma to satisfy Feller condition."""
        min_sigma = np.sqrt(2 * kappa * theta) * 0.99
        return kappa, theta, min(min_sigma, sigma)

# Test the pricer
if __name__ == "__main__":
    pricer = HestonPricer(spot_price=77000)
    price = pricer.price_european_option(
        strike=78000, time_to_maturity=0.25, v0=0.02, kappa=1.5, 
        theta=0.03, sigma=0.4, rho=-0.5
    )
    print(f"Test price: {price:.2f}")
    print(f"Feller OK: {pricer.check_feller_condition(1.5, 0.03, 0.4)}")
