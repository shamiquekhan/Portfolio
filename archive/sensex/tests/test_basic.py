# Simple test suite
import sys
sys.path.insert(0, r'c:\Project\New folder\sensex-heston-ml')

from src.heston_pricer import HestonPricer
from src.neural_network import HestonCalibrationNetwork
import torch
import numpy as np

def test_heston_pricer():
    """Test basic Heston pricing functionality."""
    pricer = HestonPricer(spot_price=77000)
    price = pricer.price_european_option(
        strike=78000, time_to_maturity=0.25, 
        v0=0.02, kappa=1.5, theta=0.03, sigma=0.4, rho=-0.5
    )
    assert not np.isnan(price), "Price should not be NaN"
    assert price > 0, "Price should be positive"
    print("✓ Heston pricer test passed")

def test_feller_condition():
    """Test Feller condition check."""
    pricer = HestonPricer()
    
    # Should pass
    assert pricer.check_feller_condition(1.5, 0.04, 0.3) == True
    
    # Should fail
    assert pricer.check_feller_condition(1.5, 0.03, 0.4) == False
    
    print("✓ Feller condition test passed")

def test_neural_network():
    """Test neural network forward pass."""
    model = HestonCalibrationNetwork()
    x = torch.randn(10, 105)
    y = model(x)
    
    assert y.shape == (10, 5), "Output shape should be (10, 5)"
    
    # Check parameter bounds
    assert torch.all(y[:, 0] >= 0.005) and torch.all(y[:, 0] <= 0.08), "v0 out of bounds"
    assert torch.all(y[:, 1] >= 0.3) and torch.all(y[:, 1] <= 2.0), "kappa out of bounds"
    assert torch.all(y[:, 2] >= 0.01) and torch.all(y[:, 2] <= 0.10), "theta out of bounds"
    assert torch.all(y[:, 3] >= 0.1) and torch.all(y[:, 3] <= 0.8), "sigma out of bounds"
    assert torch.all(y[:, 4] >= -0.95) and torch.all(y[:, 4] <= -0.05), "rho out of bounds"
    
    print("✓ Neural network test passed")

if __name__ == "__main__":
    print("Running tests...")
    print("=" * 60)
    
    test_heston_pricer()
    test_feller_condition()
    test_neural_network()
    
    print("=" * 60)
    print("✅ All tests passed!")
