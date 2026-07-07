# Quick dataset generation script
from src.synthetic_data_generator import SyntheticDataGenerator

# Start with 10k samples for faster testing (increase to 100k later)
generator = SyntheticDataGenerator(num_samples=10000)
df = generator.generate_dataset()
print("\nDataset Summary:")
print(f"Shape: {df.shape}")
print(f"\nFirst few rows:")
print(df.head())
print(f"\nParameter statistics:")
print(df[['v0', 'kappa', 'theta', 'sigma', 'rho']].describe())
