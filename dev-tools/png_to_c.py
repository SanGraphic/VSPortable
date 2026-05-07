import sys
from PIL import Image

def convert_to_header(img_path, header_path):
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    with open(header_path, "w") as f:
        f.write(f"#define SPRITE_WIDTH {width}\n")
        f.write(f"#define SPRITE_HEIGHT {height}\n")
        f.write("unsigned char sprite_data[] = {\n")
        
        data = list(img.getdata())
        for r, g, b, a in data:
            f.write(f"{r},{g},{b},{a},")
        
        f.write("\n};\n")

if __name__ == "__main__":
    convert_to_header(sys.argv[1], sys.argv[2])
