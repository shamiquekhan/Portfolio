# File: src/trainer.py
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, TensorDataset
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from pathlib import Path
import pickle

class HestonCalibrationTrainer:
    def __init__(self, model, device=None, lr=0.001, batch_size=256, epochs=200):
        self.model = model
        self.device = device or ('cuda' if torch.cuda.is_available() else 'cpu')
        self.model.to(self.device)
        
        self.optimizer = torch.optim.Adam(model.parameters(), lr=lr)
        self.scaler = StandardScaler()
        self.batch_size = batch_size
        self.epochs = epochs
        
    def load_data(self, csv_path: str):
        """Load and preprocess dataset."""
        df = pd.read_csv(csv_path)
        feature_cols = [col for col in df.columns if col.startswith('price_')]
        target_cols = ['v0', 'kappa', 'theta', 'sigma', 'rho']
        
        X = df[feature_cols].values.astype(np.float32)
        y = df[target_cols].values.astype(np.float32)
        
        # Normalize features
        X = self.scaler.fit_transform(X)
        
        # Train/val split
        split = int(0.8 * len(X))
        X_train, X_val = X[:split], X[split:]
        y_train, y_val = y[:split], y[split:]
        
        train_ds = TensorDataset(torch.FloatTensor(X_train), torch.FloatTensor(y_train))
        val_ds = TensorDataset(torch.FloatTensor(X_val), torch.FloatTensor(y_val))
        
        self.train_loader = DataLoader(train_ds, batch_size=self.batch_size, shuffle=True)
        self.val_loader = DataLoader(val_ds, batch_size=self.batch_size, shuffle=False)
        
        print(f"Train: {len(train_ds)}, Val: {len(val_ds)}")
        print(f"Device: {self.device}")
        
    def train(self, csv_path: str, save_path: str = 'models/heston_calibrator.pt'):
        """Full training loop."""
        self.load_data(csv_path)
        
        best_loss = float('inf')
        patience, patience_counter = 20, 0
        
        Path(save_path).parent.mkdir(exist_ok=True, parents=True)
        
        for epoch in range(self.epochs):
            # Training
            self.model.train()
            train_loss = 0
            for X_batch, y_batch in self.train_loader:
                X_batch, y_batch = X_batch.to(self.device), y_batch.to(self.device)
                
                self.optimizer.zero_grad()
                pred = self.model(X_batch)
                loss = nn.MSELoss()(pred, y_batch)
                loss.backward()
                torch.nn.utils.clip_grad_norm_(self.model.parameters(), 1.0)
                self.optimizer.step()
                train_loss += loss.item()
            
            # Validation
            self.model.eval()
            val_loss = 0
            with torch.no_grad():
                for X_batch, y_batch in self.val_loader:
                    X_batch, y_batch = X_batch.to(self.device), y_batch.to(self.device)
                    pred = self.model(X_batch)
                    val_loss += nn.MSELoss()(pred, y_batch).item()
            
            val_loss /= len(self.val_loader)
            
            if epoch % 20 == 0:
                print(f"Epoch {epoch}: Train {train_loss/len(self.train_loader):.6f}, "
                      f"Val {val_loss:.6f}")
            
            # Early stopping
            if val_loss < best_loss:
                best_loss = val_loss
                torch.save(self.model.state_dict(), save_path)
                # Save scaler
                scaler_path = save_path.replace('.pt', '_scaler.pkl')
                with open(scaler_path, 'wb') as f:
                    pickle.dump(self.scaler, f)
                patience_counter = 0
            else:
                patience_counter += 1
                if patience_counter >= patience:
                    print(f"Early stopping at epoch {epoch}")
                    break
        
        print(f"✓ Best model saved: {save_path} (val_loss: {best_loss:.6f})")

if __name__ == "__main__":
    from src.neural_network import HestonCalibrationNetwork
    model = HestonCalibrationNetwork()
    trainer = HestonCalibrationTrainer(model, epochs=100)
    trainer.train('data/synthetic_dataset.csv')
