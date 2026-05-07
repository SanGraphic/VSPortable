# V-Native PS2 Docker Builder
# Run this to compile the ELF and build the ISO

docker run --rm -v $(pwd):/src -w /src ps2dev/ps2dev:latest /bin/bash -c " \
    make -f Makefile.ps2 && \
    cp vsport_ps2.elf dist_ps2/VSPORT.ELF && \
    apt-get update && apt-get install -y genisoimage && \
    genisoimage -o vsport_ps2.iso -R -J -V \"VSPORT\" dist_ps2/ \
"
