#ifndef DLFCN_H
#define DLFCN_H

#define RTLD_LAZY   1
#define RTLD_NOW    2
#define RTLD_GLOBAL 4
#define RTLD_LOCAL  8

static inline void *dlopen(const char *filename, int flags) { return 0; }
static inline int dlclose(void *handle) { return -1; }
static inline void *dlsym(void *handle, const char *symbol) { return 0; }
static inline char *dlerror(void) { return (char*)"Dynamic loading not supported on PS2"; }

#endif
