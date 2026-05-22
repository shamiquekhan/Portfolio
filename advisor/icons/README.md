# Icon Placeholder
# This file explains how to create icons for the extension

To create icons for FinCheck, you have several options:

## Option 1: Use Online Tools (Easiest)

1. Visit https://www.favicon-generator.org/
2. Upload any image or logo
3. Download generated icons in multiple sizes
4. Rename them to:
   - icon-16.png
   - icon-48.png
   - icon-128.png
5. Place in the `icons/` folder

## Option 2: Use Python Script (Automated)

Run this Python script to generate basic icons:

```python
from PIL import Image, ImageDraw, ImageFont
import os

# Create icons directory if it doesn't exist
os.makedirs('icons', exist_ok=True)

# Create simple icons with "FC" text
sizes = [16, 48, 128]
for size in sizes:
    # Create green background
    img = Image.new('RGB', (size, size), color='#00A86B')
    draw = ImageDraw.Draw(img)
    
    # Calculate font size
    font_size = size // 2
    
    # Draw "FC" text in center (simplified - no font needed)
    text = "FC"
    text_bbox = draw.textbbox((0, 0), text)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    # Center the text
    x = (size - text_width) // 2
    y = (size - text_height) // 2
    
    draw.text((x, y), text, fill='white')
    
    # Save icon
    img.save(f'icons/icon-{size}.png')
    print(f"Created icon-{size}.png")

print("All icons created successfully!")
```

Save this as `create_icons.py` and run:
```bash
pip install Pillow
python create_icons.py
```

## Option 3: Use Design Software

Use any of these tools to create custom icons:
- Figma (free, web-based)
- Canva (free templates)
- GIMP (free, desktop)
- Adobe Illustrator (paid)

### Icon Design Guidelines

- Use green color (#00A86B) for brand consistency
- Include "FC" or shield symbol
- Keep design simple and recognizable
- Ensure good contrast at small sizes
- Export as PNG with transparency

### Required Sizes

- **16x16px**: Toolbar icon (small)
- **48x48px**: Extension management page
- **128x128px**: Chrome Web Store listing

## Temporary Placeholder

For now, you can use any 128x128 image and Chrome will auto-resize it.
Just place any PNG file named `icon-128.png` in the `icons/` folder.
