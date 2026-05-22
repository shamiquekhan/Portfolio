#!/usr/bin/env python3
import sys
sys.path.insert(0, r'c:\Project\New folder\sensex-heston-ml')

from src.neural_network import HestonCalibrationNetwork
from src.trainer import HestonCalibrationTrainer

print("🚀 Starting Sensex Heston-ML Training...")
print("=" * 60)

model = HestonCalibrationNetwork()
trainer = HestonCalibrationTrainer(model, epochs=100)
trainer.train('data/synthetic_dataset.csv')

print("\n✅ Training complete!")
print("=" * 60)
