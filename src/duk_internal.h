/*
 *  Top-level include file to be used for all (internal) source files.
 *
 *  Source files should not include individual header files, as they
 *  have not been designed to be individually included.
 */

#ifndef DUK_INTERNAL_H_INCLUDED
#define DUK_INTERNAL_H_INCLUDED

/*
 *  The 'duktape.h' header provides the public API, but also handles all
 *  compiler and platform specific feature detection, Duktape feature
 *  resolution, inclusion of system headers, etc.  These have been merged
 *  because the public API is also dependent on e.g. detecting appropriate
 *  C types which is quite platform/compiler specific especially for a non-C99
 *  build.  The public API is also dependent on the resolved feature set.
 *
 *  Some actions taken by the merged header (such as including system headers)
 *  are not appropriate for building a user application.  The define
 *  DUK_COMPILING_DUKTAPE allows the merged header to skip/include some
 *  sections depending on what is being built.
 */

#define DUK_COMPILING_DUKTAPE
#include "duktape.h"

/*
 *  User declarations, e.g. prototypes for user functions used by Duktape
 *  macros.  Concretely, if DUK_OPT_PANIC_HANDLER is used and the macro
 *  value calls a user function, it needs to be declared for Duktape
 *  compilation to avoid warnings.
 */

DUK_USE_USER_DECLARE()

/*
 *  Duktape includes (other than duk_features.h)
 *
 *  The header files expect to be included in an order which satisfies header
 *  dependencies correctly (the headers themselves don't include any other
 *  includes).  Forward declarations are used to break circular struct/typedef
 *  dependencies.
 */

#include "duk_replacements.h"
#include "duk_jmpbuf.h"
#include "duk_forwdecl.h"
#include "duk_builtins.h"  /* autogenerated: strings and built-in object init data */

#include "duk_errmsg.h"
#include "duk_js_bytecode.h"
#include "duk_lexer.h"
#include "duk_js_compiler.h"
#include "duk_regexp.h"
#include "duk_tval.h"
#include "duk_heaphdr.h"
#include "duk_api_internal.h"
#include "duk_hstring.h"
#include "duk_hobject.h"
#include "duk_hcompiledfunction.h"
#include "duk_hnativefunction.h"
#include "duk_hthread.h"
#include "duk_hbuffer.h"
#include "duk_heap.h"
#include "duk_debug.h"
#include "duk_error.h"
#include "duk_util.h"
#include "duk_unicode.h"
#include "duk_json.h"
#include "duk_js.h"
#include "duk_numconv.h"
#include "duk_bi_protos.h"
#include "duk_selftest.h"

#endif  /* DUK_INTERNAL_H_INCLUDED */

