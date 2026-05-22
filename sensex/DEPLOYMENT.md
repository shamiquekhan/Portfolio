# Deployment Guide

## Streamlit Cloud Deployment

This app is ready for deployment on Streamlit Cloud. The trained model files are included in the repository.

### Quick Deploy

1. **Fork or Clone** this repository
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Click "New app"
4. Select this repository
5. Set main file: `app.py`
6. Click "Deploy"

### Local Deployment

```bash
# Clone the repository
git clone https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool.git
cd Sensex-Heston-ML-Calibration-Tool

# Install dependencies
pip install -r requirements.txt

# Run the app
streamlit run app.py
```

### Requirements

- Python 3.9+
- All dependencies listed in `requirements.txt`
- Pre-trained model files (included in repository)

### Model Files

The following files are required and included:
- `models/heston_calibrator.pt` - Trained PyTorch model
- `models/heston_calibrator_scaler.pkl` - Feature scaler

### Configuration

Streamlit Cloud configuration is in `.streamlit/config.toml` with optimized settings for the purple gradient theme.

### Troubleshooting

**Model not found error:**
- Ensure model files are committed to repository
- Check `.gitignore` doesn't exclude `models/*.pt`
- Verify paths in `app.py` use absolute path resolution

**Memory issues:**
- The model is only 280 KB
- Should run on free Streamlit Cloud tier
- If issues persist, check Streamlit Cloud logs

### Author

Developed by **Shamique Khan** - Data Science & AI/ML Student

### Repository

https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool
