import os
import shutil

def prepare_dist():
    dist_dir = "dist_ps2"
    if not os.path.exists(dist_dir):
        os.makedirs(dist_dir)
        
    print("Preparing PS2 Distribution Folder...")
    
    # 1. Copy SYSTEM.CNF
    shutil.copy("SYSTEM.CNF", os.path.join(dist_dir, "SYSTEM.CNF"))
    
    # 2. Assets (Stub)
    asset_dir = os.path.join(dist_dir, "ASSETS")
    if not os.path.exists(asset_dir):
        os.makedirs(asset_dir)
        
    print(f"\nFolder '{dist_dir}' is ready.")
    print("Next steps:")
    print("1. Compile VSPORT.ELF using PS2SDK (make -f Makefile.ps2)")
    print(f"2. Copy VSPORT.ELF to '{dist_dir}/'")
    print(f"3. Run: mkisofs -o vsport_ps2.iso -R -J -V \"VSPORT\" {dist_dir}/")

if __name__ == "__main__":
    prepare_dist()
