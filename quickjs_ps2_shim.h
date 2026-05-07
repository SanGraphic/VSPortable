#ifndef QUICKJS_PS2_SHIM_H
#define QUICKJS_PS2_SHIM_H

#include <malloc.h>
#include <time.h>

// 1. Missing malloc_usable_size
// PS2SDK malloc doesn't support this. Return 0 and hope for the best.
static inline size_t malloc_usable_size(void *ptr) {
    return 0; 
}

// 2. Missing fenv.h constants
#define FE_TONEAREST  0
#define FE_DOWNWARD   1
#define FE_UPWARD     2
#define FE_TOWARDZERO 3

// 3. Missing tm_gmtoff in struct tm
// PS2 doesn't track timezone offsets in struct tm.
#define tm_gmtoff tm_sec // Hack: map to a dummy field to prevent error, or just 0

// 4. QuickJS uses int32_t for line numbers but PS2 compiler is picky
typedef int int32_t_ps2;

#endif
