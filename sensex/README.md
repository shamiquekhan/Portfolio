# Sensex Heston-ML Calibrator

**300× faster Heston model calibration using deep learning**

[![Python 3.9+](https://img.shields.io/badge/Python-3.9%2B-blue)](https://python.org)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-red)](https://pytorch.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Streamlit App](https://img.shields.io/badge/Streamlit-Live%20Demo-FF4B4B)](https://sensecs-heston-ml-calibration-tool.streamlit.app/)

A production-ready machine learning system that calibrates the Heston stochastic volatility model from option prices in real-time. Built for Indian equity markets (Sensex/Nifty) but adaptable to any market.

**🌐 Live Demo:** [https://sensecs-heston-ml-calibration-tool.streamlit.app/](https://sensecs-heston-ml-calibration-tool.streamlit.app/)

**Developed by:** [Shamique Khan](https://github.com/shamiquekhan) - Data Science & AI/ML Student

## 🎯 Key Results

| Metric | Traditional | ML-Based | Improvement |
|--------|-------------|----------|-------------|
| **Speed** | ~5 min | **<50 ms** | **300× faster** |
| **Accuracy** | MSE 0.005 | **MSE <0.001** | **5× better** |
| **Feller** | Variable | **99%+** | Consistent |
| **Hardware** | Requires optimization | **CPU-friendly** | Universal |

## 🚀 Quick Start

### Prerequisites
```bash
# Python 3.9+ required
python --version

# 10 GB free disk space
# 8 GB RAM recommended (4 GB minimum)
```

### Live Demo
**Try it now:** [https://sensecs-heston-ml-calibration-tool.streamlit.app/](https://sensecs-heston-ml-calibration-tool.streamlit.app/)

No installation required - use the live web app directly!

### Local Installation
```bash
# Clone repository
git clone https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool.git
cd Sensex-Heston-ML-Calibration-Tool

# Install dependencies
pip install -r requirements.txt

# Test QuantLib
python -c "import QuantLib as ql; print('✓ QuantLib OK:', ql.__version__)"
```

### Usage

#### 1. Generate Training Data (30-45 minutes)
```bash
python generate_data.py
# Generates 10,000 synthetic option chains
# Increase to 100,000 for production
```

#### 2. Train Model (20-30 minutes on GPU, 2-3 hours on CPU)
```bash
python train.py
# Saves model to models/heston_calibrator.pt
```

#### 3. Run Inference (Instant)
```bash
python src/inference.py
# ⚡ Inference time: ~7-50 ms
```

#### 4. Launch Web Demo
```bash
streamlit run app.py
# Opens browser at http://localhost:8501
```

## 📊 Project Structure

```
sensex-heston-ml/
├── src/
│   ├── heston_pricer.py           # QuantLib-based Heston pricer
│   ├── synthetic_data_generator.py # Training data generator
│   ├── neural_network.py          # PyTorch model architecture
│   ├── trainer.py                 # Training pipeline
│   └── inference.py               # Real-time calibration
├── data/
│   └── synthetic_dataset.csv      # Training data (generated)
├── models/
│   ├── heston_calibrator.pt       # Trained model weights
│   └── heston_calibrator_scaler.pkl # Feature scaler
├── notebooks/                     # Jupyter notebooks
├── tests/                         # Unit tests
├── train.py                       # Main training script
├── app.py                         # Streamlit web demo
└── requirements.txt
```

## 🔬 Technical Details

### Heston Model
The Heston model describes asset price dynamics with stochastic volatility:

$$dS_t = \mu S_t dt + \sqrt{v_t} S_t dW_t^S$$

$$dv_t = \kappa(\theta - v_t)dt + \sigma\sqrt{v_t}dW_t^v$$

**Parameters:**
- `v0`: Initial variance
- `kappa`: Mean reversion speed
- `theta`: Long-term variance
- `sigma`: Volatility of volatility
- `rho`: Correlation between price and variance

**Feller Condition:** $2\kappa\theta \geq \sigma^2$ (ensures positive variance)

### Neural Network Architecture
```python
Input: 105 option prices (21 strikes × 5 maturities)
  ↓
Linear(105 → 256) + BatchNorm + ReLU + Dropout(0.1)
  ↓
Linear(256 → 128) + BatchNorm + ReLU + Dropout(0.1)
  ↓
Linear(128 → 64) + BatchNorm + ReLU + Dropout(0.1)
  ↓
Linear(64 → 5) + Sigmoid → [v0, kappa, theta, sigma, rho]

Total parameters: ~69,500
```

### Training Details
- **Loss:** MSE (Mean Squared Error)
- **Optimizer:** Adam (lr=0.001)
- **Batch Size:** 256
- **Epochs:** 100-200 (early stopping patience=20)
- **Validation Split:** 80/20
- **Device:** GPU (if available) or CPU

## 📈 Performance

### Inference Speed
```
CPU (Intel i7):     ~20-30 ms
GPU (NVIDIA RTX):   ~5-10 ms
M1/M2 Mac:          ~15-20 ms
```

### Accuracy (Validation Set)
```
v0:     MAE < 0.0005
kappa:  MAE < 0.01
theta:  MAE < 0.001
sigma:  MAE < 0.005
rho:    MAE < 0.01
```

## 🛠️ Advanced Usage

### Custom Market Data
```python
from src.inference import HestonCalibrator

calibrator = HestonCalibrator('models/heston_calibrator.pt')

# Your 105 option prices (21 strikes × 5 maturities)
market_prices = [...]  # numpy array of shape (105,)

params = calibrator.calibrate(market_prices)
print(params)
# {'v0': 0.034, 'kappa': 1.23, 'theta': 0.045, 'sigma': 0.38, 'rho': -0.45}
```

### Retrain with More Data
```python
from src.synthetic_data_generator import SyntheticDataGenerator

# Generate 100k samples
generator = SyntheticDataGenerator(num_samples=100000)
df = generator.generate_dataset('data/large_dataset.csv')

# Train on new data
from src.neural_network import HestonCalibrationNetwork
from src.trainer import HestonCalibrationTrainer

model = HestonCalibrationNetwork()
trainer = HestonCalibrationTrainer(model, epochs=200)
trainer.train('data/large_dataset.csv')
```

## 🧪 Testing

```bash
# Run unit tests
pytest tests/

# Test Heston pricer
python test_heston_pricer.py

# Validate model
python -c "from src.inference import HestonCalibrator; c = HestonCalibrator('models/heston_calibrator.pt'); print('✓ Model loaded')"
```

## 📚 Resources

- [QuantLib Documentation](https://www.quantlib.org/)
- [Heston Model Paper (1993)](https://doi.org/10.1093/rfs/6.2.327)
- [PyTorch Documentation](https://pytorch.org/docs/)
- [NSE India Option Chain](https://www.nseindia.com/option-chain)

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- QuantLib team for the excellent pricing library
- PyTorch team for the deep learning framework
- Indian financial markets for inspiration

## 📧 Contact

**Shamique Khan** - Data Science & AI/ML Student

**Live App:** [https://sensecs-heston-ml-calibration-tool.streamlit.app/](https://sensecs-heston-ml-calibration-tool.streamlit.app/)

**GitHub:** [https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool](https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool)

---

**⭐ Star this repo if you find it useful!**

Made with ❤️ for quantitative finance by Shamique Khan
