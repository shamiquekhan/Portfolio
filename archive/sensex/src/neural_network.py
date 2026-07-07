# File: src/neural_network.py
import torch
import torch.nn as nn

class HestonCalibrationNetwork(nn.Module):
    """Deep neural network for Heston parameter calibration."""
    
    def __init__(self, num_input_features: int = 105, hidden_dims: list = None):
        super().__init__()
        
        if hidden_dims is None:
            hidden_dims = [256, 128, 64]
        
        # Parameter bounds (same as training data)
        self.param_bounds = {
            'v0': (0.005, 0.08), 'kappa': (0.3, 2.0),
            'theta': (0.01, 0.10), 'sigma': (0.1, 0.8),
            'rho': (-0.95, -0.05)
        }
        
        # Network architecture
        layers = []
        prev_dim = num_input_features
        
        for hidden_dim in hidden_dims:
            layers.extend([
                nn.Linear(prev_dim, hidden_dim),
                nn.BatchNorm1d(hidden_dim),
                nn.ReLU(),
                nn.Dropout(0.1)
            ])
            prev_dim = hidden_dim
        
        layers.append(nn.Linear(prev_dim, 5))
        self.network = nn.Sequential(*layers)
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """Forward pass with parameter scaling."""
        raw_output = self.network(x)
        sigmoid_output = torch.sigmoid(raw_output)
        return self._scale_parameters(sigmoid_output)
    
    def _scale_parameters(self, raw_params: torch.Tensor) -> torch.Tensor:
        """Scale [0,1] output to valid parameter ranges."""
        bounds = list(self.param_bounds.values())
        scaled = []
        for i, (min_val, max_val) in enumerate(bounds):
            scaled_param = min_val + raw_params[:, i] * (max_val - min_val)
            scaled.append(scaled_param.unsqueeze(1))
        return torch.cat(scaled, dim=1)

if __name__ == "__main__":
    model = HestonCalibrationNetwork()
    x = torch.randn(32, 105)
    y = model(x)
    print(f"Input: {x.shape}, Output: {y.shape}")
    print(f"\nParameter ranges (batch of 32):")
    print(f"  v0: [{y[:, 0].min():.4f}, {y[:, 0].max():.4f}]")
    print(f"  kappa: [{y[:, 1].min():.4f}, {y[:, 1].max():.4f}]")
    print(f"  theta: [{y[:, 2].min():.4f}, {y[:, 2].max():.4f}]")
    print(f"  sigma: [{y[:, 3].min():.4f}, {y[:, 3].max():.4f}]")
    print(f"  rho: [{y[:, 4].min():.4f}, {y[:, 4].max():.4f}]")
    print(f"\nTotal parameters: {sum(p.numel() for p in model.parameters()):,}")
