from src.heston_pricer import HestonPricer
pricer = HestonPricer()
price = pricer.price_european_option(78000, 0.25, 0.02, 1.5, 0.03, 0.4, -0.5)
print(f"✓ Heston price: {price:.2f}")
print(f"✓ Feller check: {pricer.check_feller_condition(1.5, 0.03, 0.4)}")
