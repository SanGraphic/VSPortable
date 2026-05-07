#ifndef QUICKJS_PS2_SHIM_H
#define QUICKJS_PS2_SHIM_H

#include <malloc.h>
#include <time.h>

// 1. Missing fenv.h constants
#ifndef FE_TONEAREST
#define FE_TONEAREST  0
#define FE_DOWNWARD   1
#define FE_UPWARD     2
#define FE_TOWARDZERO 3
#endif

// 2. Missing tm_gmtoff in struct tm
#define tm_gmtoff tm_sec 

// 3. malloc_usable_size is declared in PS2SDK but might not be defined.
// We provide a weak definition if needed, or just let it link if it exists.
// To avoid conflicts with the extern declaration in malloc.h, we don't redeclare it here.

#endif
