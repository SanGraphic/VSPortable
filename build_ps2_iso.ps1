# V-Native PS2 Docker Builder (Windows PowerShell)
docker run --rm -v ${PWD}:/src -w /src ps2dev/ps2dev:latest /bin/bash -c "make -f Makefile.ps2 && cp vsport_ps2.elf dist_ps2/VSPORT.ELF && apt-get update && apt-get install -y genisoimage && genisoimage -o vsport_ps2.iso -R -J -V 'VSPORT' dist_ps2/"
