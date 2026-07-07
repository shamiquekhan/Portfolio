"""
Simple icon generator for FinCheck extension
Creates basic placeholder icons if you don't have custom ones
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
    
    def create_icons():
        """Create simple placeholder icons"""
        # Ensure icons directory exists
        icon_dir = 'icons'
        if not os.path.exists(icon_dir):
            os.makedirs(icon_dir)
        
        # Icon sizes required
        sizes = [16, 48, 128]
        
        # Brand color (green)
        bg_color = '#00A86B'
        text_color = 'white'
        
        for size in sizes:
            # Create image with green background
            img = Image.new('RGB', (size, size), color=bg_color)
            draw = ImageDraw.Draw(img)
            
            # Draw "FC" text
            text = "FC"
            
            # Try to use a font, fallback to default
            try:
                font_size = size // 2
                font = ImageFont.truetype("arial.ttf", font_size)
            except:
                font = ImageFont.load_default()
            
            # Get text bounding box
            bbox = draw.textbbox((0, 0), text, font=font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            
            # Calculate center position
            x = (size - text_width) // 2
            y = (size - text_height) // 2
            
            # Draw text
            draw.text((x, y), text, fill=text_color, font=font)
            
            # Save icon
            filename = f'{icon_dir}/icon-{size}.png'
            img.save(filename)
            print(f"✓ Created {filename}")
        
        print("\n✅ All icons created successfully!")
        print("\nNote: These are placeholder icons.")
        print("For production, create custom icons using:")
        print("  - Figma, Canva, or Adobe Illustrator")
        print("  - Online tools like favicon-generator.org")
        print("\nSee icons/README.md for more details.")
    
    if __name__ == '__main__':
        create_icons()

except ImportError:
    print("❌ Pillow library not installed.")
    print("\nInstall it with:")
    print("  pip install Pillow")
    print("\nOr manually create three PNG files:")
    print("  - icons/icon-16.png (16x16 pixels)")
    print("  - icons/icon-48.png (48x48 pixels)")
    print("  - icons/icon-128.png (128x128 pixels)")
