/*!  name:components/slider - STAGE - version: 1048 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(45);
var isBuffer = __webpack_require__(81);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(36);
var hide = __webpack_require__(8);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(42);
var defined = __webpack_require__(24);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65).Promise;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(83);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(46);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(46);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(30);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(70);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(99);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(101);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(56);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(40);
var hide = __webpack_require__(8);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(19);
var $iterCreate = __webpack_require__(69);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(52);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(76);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise, process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(84);
var buildURL = __webpack_require__(86);
var parseHeaders = __webpack_require__(87);
var isURLSameOrigin = __webpack_require__(88);
var createError = __webpack_require__(47);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(89);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(90);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), __webpack_require__(22)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(85);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(18);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(1);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(38)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(23);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
var global = __webpack_require__(2);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(19);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateVideoUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_amplience_sdk__ = __webpack_require__(98);





var formatContent = function formatContent(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__assets_js_amplience_sdk__["a" /* inlineContent */])(data)[0];
};

var ContentService = function () {
  function ContentService(endpoint) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ContentService);

    this.endpoint = endpoint;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ContentService, [{
    key: 'getContent',
    value: function getContent() {
      return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(this.endpoint).then(function (data) {
        return formatContent(data);
      }, function (err) {
        return err;
      });
    }
  }]);

  return ContentService;
}();

/* harmony default export */ __webpack_exports__["a"] = (ContentService);


var generateImageUrl = function generateImageUrl(_ref) {
  var defaultHost = _ref.defaultHost,
      endpoint = _ref.endpoint,
      name = _ref.name;
  return 'https://' + defaultHost + '/i/' + endpoint + '/' + name + '.jpeg';
};

var generateVideoUrl = function generateVideoUrl(_ref2) {
  var defaultHost = _ref2.defaultHost,
      endpoint = _ref2.endpoint,
      name = _ref2.name;
  return 'https://' + defaultHost + '/v/' + endpoint + '/' + name + '/mp4_720p';
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

var Computed = {
  computed: {
    hasContentUrl: function hasContentUrl() {
      return typeof this.content === 'string';
    }
  }
};

var Props = {
  props: {
    content: {
      type: [String, Object],
      required: true,
      validator: function validator(value) {
        return typeof value === 'string' || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(value).length !== 0 && value.constructor === Object;
      }
    }
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(67);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), __webpack_require__(66)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var defined = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(33);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(14);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(59);
var toAbsoluteIndex = __webpack_require__(72);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(23);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(74);
var step = __webpack_require__(75);
var Iterators = __webpack_require__(19);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(38)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

var utils = __webpack_require__(0);
var bind = __webpack_require__(45);
var Axios = __webpack_require__(82);
var defaults = __webpack_require__(29);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(49);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(48);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(97);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

var defaults = __webpack_require__(29);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(91);
var dispatchRequest = __webpack_require__(92);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(47);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

var utils = __webpack_require__(0);
var transformData = __webpack_require__(93);
var isCancel = __webpack_require__(48);
var defaults = __webpack_require__(29);
var isAbsoluteURL = __webpack_require__(94);
var combineURLs = __webpack_require__(95);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

var Cancel = __webpack_require__(49);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inlineChildContent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inlineContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);



var inlineChildContent = function inlineChildContent(parentNode, contentKeyMap) {
  var resultantNode = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, parentNode);
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(resultantNode).forEach(function (key) {
    var value = resultantNode[key];
    if (key === '@id') {
      if (!contentKeyMap[value]) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(contentKeyMap[value]).forEach(function (childKey) {
        resultantNode[childKey] = contentKeyMap[value][childKey];
      });
    }
  });
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(resultantNode).forEach(function (key) {
    var value = resultantNode[key];
    if (value && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) === 'object') {
      resultantNode[key] = inlineChildContent(resultantNode[key], contentKeyMap);
    } else if (Array.isArray(value)) {
      value.forEach(function (item, i) {
        resultantNode[key][i] = inlineChildContent(resultantNode[key][i], contentKeyMap);
      });
    }
  });
  return resultantNode;
};

var inlineContent = function inlineContent(_ref) {
  var data = _ref.data;

  var inlinedContent = [];
  var contentKeyMap = {};
  if (data) {
    data['@graph'].forEach(function (content) {
      contentKeyMap[content['@id']] = content;
    });
    data.result.forEach(function (result) {
      if (!result['@id']) {
        return;
      }
      var content = inlineChildContent({ '@id': result['@id'] }, contentKeyMap);
      if (content) {
        inlinedContent.push(content);
      }
    });
  }
  return inlinedContent;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(61);
module.exports = __webpack_require__(30).f('iterator');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
__webpack_require__(57);
__webpack_require__(108);
__webpack_require__(109);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(40);
var META = __webpack_require__(104).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(27);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(16);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(30);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(105);
var isArray = __webpack_require__(106);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(33);
var gOPNExt = __webpack_require__(107);
var $GOPD = __webpack_require__(53);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(14);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(32).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(32);
var pIE = __webpack_require__(17);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(50).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(18);
var $keys = __webpack_require__(14);

__webpack_require__(54)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(114) });


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(32);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(18);
var IObject = __webpack_require__(42);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(129)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(35);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(122);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(126);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(35);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(18);
var $getPrototypeOf = __webpack_require__(52);

__webpack_require__(54)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(4);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(125).set });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(36)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(33) });


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// ChildNode.remove
(function () {
  "use strict";

  if(!("remove" in Element.prototype)){
    Element.prototype.remove = function(){
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
})();


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_content__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placeholder_Placeholder__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_mixins__ = __webpack_require__(64);
//
//
//
//
//
//
//
//
//





var imageContent = void 0;

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__assets_js_mixins__["b" /* Props */], __WEBPACK_IMPORTED_MODULE_2__assets_js_mixins__["a" /* Computed */]],
  data: function data() {
    return {
      hasError: false,
      imageContent: {}
    };
  },

  computed: {
    href: function href() {
      if (this.imageContent.link) {
        return this.imageContent.link;
      } else {
        return '#';
      }
    },
    hasContentUrl: function hasContentUrl() {
      if (typeof this.content === 'string') {
        return true;
      } else {
        return false;
      }
    }
  },
  created: function created() {
    if (this.hasContentUrl) {
      imageContent = new __WEBPACK_IMPORTED_MODULE_0__image_content__["a" /* default */](this.content);
    }
  },
  beforeMount: function beforeMount() {
    if (this.hasContentUrl) {
      var vm = this;
      imageContent.formatImageContent().then(function () {
        vm.imageContent = imageContent.content;
      }, function () {
        vm.hasError = true;
      });
    } else {
      this.imageContent = this.content;
    }
  },

  components: {
    Placeholder: __WEBPACK_IMPORTED_MODULE_1__placeholder_Placeholder__["a" /* default */]
  }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Image_vue__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1ec3bb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Image_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(55)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f1ec3bb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1ec3bb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Image_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/image/Image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1ec3bb2", Component.options)
  } else {
    hotAPI.reload("data-v-f1ec3bb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1525c157_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Placeholder_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(55)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1525c157"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1525c157_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Placeholder_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/placeholder/Placeholder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1525c157", Component.options)
  } else {
    hotAPI.reload("data-v-1525c157", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBody;
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement__ = __webpack_require__(153);


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = __WEBPACK_IMPORTED_MODULE_0__docElement__["a" /* docElement */].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = __WEBPACK_IMPORTED_MODULE_0__docElement__["a" /* docElement */].style.overflow = 'hidden';
    __WEBPACK_IMPORTED_MODULE_0__docElement__["a" /* docElement */].appendChild(body);
  }

  return docOverflow;
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docElement__ = __webpack_require__(153);



function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    __WEBPACK_IMPORTED_MODULE_1__docElement__["a" /* docElement */].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    __WEBPACK_IMPORTED_MODULE_1__docElement__["a" /* docElement */].offsetHeight;
  }
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasClass;
function hasClass(el, str) {
  return el.className.indexOf(str) >= 0;
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAttr;
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(116)("0d17a848", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1ec3bb2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Image.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1ec3bb2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Image.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(undefined);
// imports


// module
exports.push([module.i, "\nimg[data-v-f1ec3bb2] {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeImage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_amplience_content_service__ = __webpack_require__(62);





/* eslint-disable no-param-reassign */


var makeImage = function makeImage(content) {
  return {
    type: 'image',
    url: Object(__WEBPACK_IMPORTED_MODULE_5__assets_js_amplience_content_service__["b" /* generateImageUrl */])(content.image),
    altText: content.imageAltText,
    link: content.link
  };
};

var ImageContentService = function (_ContentService) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ImageContentService, _ContentService);

  function ImageContentService() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ImageContentService);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ImageContentService.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ImageContentService)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ImageContentService, [{
    key: 'formatImageContent',
    value: function formatImageContent() {
      var _this2 = this;

      return this.getContent().then(function (formatted) {
        _this2.content = makeImage(formatted);
      });
    }
  }]);

  return ImageContentService;
}(__WEBPACK_IMPORTED_MODULE_5__assets_js_amplience_content_service__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ImageContentService);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(116)("089e56f3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1525c157\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Placeholder.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1525c157\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Placeholder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(undefined);
// imports


// module
exports.push([module.i, "\ndiv[data-v-1525c157] {\n  width: 100%;\n  height: 100%;\n}\nsvg[data-v-1525c157] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "svg",
      {
        attrs: {
          fill: "#a6a7a8",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1525c157", esExports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.hasError ? _c("placeholder") : _vm._e(),
      _vm._v(" "),
      _c("a", { attrs: { href: _vm.href } }, [
        _c("img", {
          attrs: { src: _vm.imageContent.url, alt: _vm.imageContent.altText }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f1ec3bb2", esExports)
  }
}

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_slider_src_tiny_slider_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_content__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slide__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__placeholder_Placeholder__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_mixins__ = __webpack_require__(64);

//
//
//
//
//
//
//
//
//
//
//
//








var sliderContent = void 0;
var slider = null;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Slider",
  mixins: [__WEBPACK_IMPORTED_MODULE_6__assets_js_mixins__["b" /* Props */], __WEBPACK_IMPORTED_MODULE_6__assets_js_mixins__["a" /* Computed */]],
  data: function data() {
    return {
      hasError: false,
      isLoading: true,
      sliderContent: {},
      sliderOptions: {
        container: ".tns-outer",
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        controlsText: ['<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>', '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>']
      }
    };
  },

  computed: {
    hasContentUrl: function hasContentUrl() {
      if (typeof this.content === 'string') {
        return true;
      } else {
        return false;
      }
    }
  },
  created: function created() {
    if (this.hasContentUrl) {
      sliderContent = new __WEBPACK_IMPORTED_MODULE_3__slider_content__["a" /* default */](this.content);
    }
  },
  beforeMount: function beforeMount() {
    if (this.hasContentUrl) {
      var vm = this;
      sliderContent.formatSliderContent().then(function () {
        vm.sliderContent = sliderContent.content;
        vm.sliderOptions = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, vm.sliderOptions, sliderContent.content.options);
        vm.isLoading = false;
      }, function () {
        vm.hasError = true;
      });
    } else {
      this.isLoading = false;
      this.sliderOptions = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.sliderOptions, this.content.options);
      this.sliderContent = this.content;
    }
  },
  updated: function updated() {
    if (slider === null) {
      slider = Object(__WEBPACK_IMPORTED_MODULE_1_tiny_slider_src_tiny_slider_module__["a" /* tns */])(this.sliderOptions);
    }
  },

  components: {
    Slide: __WEBPACK_IMPORTED_MODULE_4__Slide__["a" /* default */],
    Spinner: __WEBPACK_IMPORTED_MODULE_2_vue_simple_spinner___default.a,
    Placeholder: __WEBPACK_IMPORTED_MODULE_5__placeholder_Placeholder__["a" /* default */]
  }
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList__ = __webpack_require__(155);


function setAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNodeList;
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList__ = __webpack_require__(155);


function removeAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_Image__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_Banner__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_Video__ = __webpack_require__(225);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    content: {
      type: Object
    }
  },
  computed: {
    isEmpty: function isEmpty() {
      if (!this.content.type) {
        return true;
      }
    },
    isImage: function isImage() {
      if (this.content.type === 'image') {
        return true;
      }
    },
    isVideo: function isVideo() {
      if (this.content.type === 'video') {
        return true;
      }
    },
    isBanner: function isBanner() {
      if (this.content.type === 'banner') {
        return true;
      }
    }
  },
  components: {
    'image-slide': __WEBPACK_IMPORTED_MODULE_0__image_Image__["a" /* default */],
    'banner-slide': __WEBPACK_IMPORTED_MODULE_1__banner_Banner__["a" /* default */],
    'video-slide': __WEBPACK_IMPORTED_MODULE_2__video_Video__["a" /* default */]
  }
});

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_Image__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_mixins__ = __webpack_require__(64);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__assets_js_mixins__["b" /* Props */], __WEBPACK_IMPORTED_MODULE_1__assets_js_mixins__["a" /* Computed */]],
  data: function data() {
    return {};
  },

  components: {
    'banner-image': __WEBPACK_IMPORTED_MODULE_0__image_Image__["a" /* default */]
  }
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_mixins__ = __webpack_require__(64);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__assets_js_mixins__["b" /* Props */], __WEBPACK_IMPORTED_MODULE_0__assets_js_mixins__["a" /* Computed */]],
  data: function data() {
    return {};
  }
});

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider__ = __webpack_require__(189);
/* eslint-disable no-new */
/* eslint-disable no-undef */


new Vue({
  el: '#amp-ca-slider',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_0__Slider__["a" /* default */], {
      props: {
        content: this.$el.attributes['data-content'] && this.$el.attributes['data-content'].value.length > 0 ? this.$el.attributes['data-content'].value : {}
      }
    });
  }
});

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__ = __webpack_require__(152);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72eb1ae2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__ = __webpack_require__(230);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(55)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72eb1ae2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/slider/Slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72eb1ae2", Component.options)
  } else {
    hotAPI.reload("data-v-72eb1ae2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(116)("4deb249a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72eb1ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-72eb1ae2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(undefined);
// imports


// module
exports.push([module.i, "\n.spinner {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.slider-wrapper {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.tns-inner {\n  width: calc(100% + 1px);\n}\n.tns-horizontal.tns-subpixel {\n  white-space: nowrap;\n}\n.tns-horizontal.tns-subpixel > .tns-item {\n    display: inline-block;\n    vertical-align: top;\n    white-space: normal;\n}\n.tns-outer,\n.tns-outer div {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n.tns-outer {\n  overflow: hidden;\n}\n.tns-outer .tns-controls {\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    right: 0;\n    height: 0;\n}\n.tns-outer .tns-controls button {\n      background: inherit;\n      border: none;\n      padding: 0;\n}\n.tns-outer .tns-controls button:focus {\n        outline: none;\n}\n.tns-outer .tns-controls button:hover {\n        cursor: pointer;\n}\n.tns-outer .tns-nav {\n    z-index: 2;\n    position: absolute;\n    padding: 10px 0;\n    height: 0;\n    top: 0;\n    text-align: center;\n}\n.tns-outer .tns-nav button {\n      background: #d4d4d4;\n      border: none;\n      width: 14px;\n      margin: 1px;\n      height: 18px;\n      -webkit-transform: skew(-20deg);\n      -moz-transform: skew(-20deg);\n      -o-transform: skew(-20deg);\n      border-radius: 2px;\n}\n.tns-outer .tns-nav button:focus {\n        outline: none;\n}\n.tns-outer .tns-nav button:hover {\n        cursor: pointer;\n}\n.tns-outer .tns-nav .tns-nav-active {\n      background-color: #ff9718;\n}\n.tns-outer .tns-controls {\n    top: 50%;\n}\n.tns-fadeIn {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 0;\n}\n.tns-normal, .tns-fadeOut {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n.tns-gallery {\n  position: relative;\n  left: 0;\n}\n.tns-gallery > .tns-item {\n    position: absolute;\n    left: -100%;\n    -webkit-transition: opacity 0s;\n    -webkit-transition: transform 0s, opacity 0s;\n    -webkit-transition: opacity 0s, -webkit-transform 0s;\n    transition: opacity 0s, -webkit-transform 0s;\n    transition: transform 0s, opacity 0s;\n    transition: transform 0s, opacity 0s, -webkit-transform 0s;\n}\n.tns-controls button:last-child {\n  float: right;\n}\n", ""]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(63);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_keys__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helpers_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__helpers_childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_extend__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_calc__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_subpixelLayout__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_toDegree__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_getTouchDirection__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_hasClass__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_addClass__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_getAttr__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__helpers_showElement__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__helpers_isVisible__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__helpers_imageLoaded__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__helpers_getEndProperty__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_events__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_jsTransform__ = __webpack_require__(219);
// Format: ES MODULE
// Version: 2.4.0

// helper functions
































// check browser version and local storage
// if browser upgraded, 
// 1. delete browser ralated data from local storage and 
// 2. recheck these options and save them to local storage
var browserInfo = navigator.userAgent,
    localStorageAccess = true,
    tnsStorage = {};

try {
  tnsStorage = localStorage;
  if (!tnsStorage['tnsApp']) {
    tnsStorage['tnsApp'] = browserInfo;
  } else if (tnsStorage['tnsApp'] !== browserInfo) {
    tnsStorage['tnsApp'] = browserInfo;

    // tC => calc
    // tSP => subpixel
    // tMQ => mediaquery
    // tTf => transform
    // tTDu => transitionDuration
    // tTDe => transitionDelay
    // tADu => animationDuration
    // tADe => animationDelay
    // tTE => transitionEnd
    // tAE => animationEnd

    ['tC', 'tSP', 'tMQ', 'tTf', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
      tnsStorage.removeItem(item);
    })
  }
} catch(e) {
  localStorageAccess = false;
}

// get browser related data from local storage if they exist
// otherwise, run the functions again and save these data to local storage
// checkStorageValue() convert non-string value to its original value: 'true' > true
var doc = document,
    win = window,
    KEYS = {
      ENTER: 13,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },
    CALC = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tC']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tC', Object(__WEBPACK_IMPORTED_MODULE_6__helpers_calc__["a" /* calc */])(), localStorageAccess),
    SUBPIXEL = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tSP']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tSP', Object(__WEBPACK_IMPORTED_MODULE_7__helpers_subpixelLayout__["a" /* subpixelLayout */])(), localStorageAccess),
    CSSMQ = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tMQ']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tMQ', Object(__WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport__["a" /* mediaquerySupport */])(), localStorageAccess),
    TRANSFORM = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tTf']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tTf', Object(__WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__["a" /* whichProperty */])([
      'transform', 
      'WebkitTransform', 
      'MozTransform', 
      'msTransform', 
      'OTransform'
    ]), localStorageAccess),
    TRANSITIONDURATION = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tTDu']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tTDu', Object(__WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__["a" /* whichProperty */])([
      'transitionDuration', 
      'WebkitTransitionDuration', 
      'MozTransitionDuration', 
      'OTransitionDuration'
    ]), localStorageAccess),
    TRANSITIONDELAY = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tTDe']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tTDe', Object(__WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__["a" /* whichProperty */])([
      'transitionDelay', 
      'WebkitTransitionDelay', 
      'MozTransitionDelay', 
      'OTransitionDelay'
    ]), localStorageAccess),
    ANIMATIONDURATION = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tADu']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tADu', Object(__WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__["a" /* whichProperty */])([
      'animationDuration', 
      'WebkitAnimationDuration', 
      'MozAnimationDuration', 
      'OAnimationDuration'
    ]), localStorageAccess),
    ANIMATIONDELAY = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tADe']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tADe', Object(__WEBPACK_IMPORTED_MODULE_25__helpers_whichProperty__["a" /* whichProperty */])([
      'animationDelay', 
      'WebkitAnimationDelay', 
      'MozAnimationDelay', 
      'OAnimationDelay'
    ]), localStorageAccess),
    TRANSITIONEND = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tTE']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tTE', Object(__WEBPACK_IMPORTED_MODULE_26__helpers_getEndProperty__["a" /* getEndProperty */])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
    ANIMATIONEND = Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue__["a" /* checkStorageValue */])(tnsStorage['tAE']) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage__["a" /* setLocalStorage */])('tAE', Object(__WEBPACK_IMPORTED_MODULE_26__helpers_getEndProperty__["a" /* getEndProperty */])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

// reset SUBPIXEL for IE8
if (!CSSMQ) { SUBPIXEL = false; }

var tns = function(options) {
  options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend__["a" /* extend */])({
    container: doc.querySelector('.slider'),
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    nav: true,
    navContainer: false,
    // navAnimationIn: false,
    // navAnimationOut: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    // animateIn: 'tns-fadeIn',
    // animateOut: 'tns-fadeOut',
    // animateNormal: 'tns-normal',
    // animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    nested: false,
    freezable: true,
    // startIndex: 0,
    onInit: false
  }, options || {});
  
  // get element nodes from selectors
  ['container', 'controlsContainer', 'navContainer', 'autoplayButton'].forEach(function(item) {
    if (typeof options[item] === 'string') { options[item] = doc.querySelector(options[item]); }
  });

  // make sure slide container exists
  var supportConsoleWarn = win.console && typeof win.console.warn === "function";
  if (!options.container || !options.container.nodeName) {
    if (supportConsoleWarn) { console.warn('Can\'t find container element.'); }
    return;
  }

  // make sure slides are more than 2
  if (options.container.children.length < 2) {
    if (supportConsoleWarn) { console.warn('Slides less than 2.'); }
    return;
   }

  // update responsive
  // from: { 
  //    300: 2, 
  //    800: {
  //      loop: false
  //    }
  // }
  // to: {
  //    300: { 
  //      items: 2 
  //    }, 
  //    800: {
  //      loop: false
  //    }
  // }
  if (options.responsive) {
    var resTem = {}, res = options.responsive;
    for(var key in res) {
      var val = res[key];
      resTem[key] = typeof val === 'number' ? {items: val} :  val;
    }

    options.responsive = resTem;
    resTem = null;

    // apply responsive[0] to options and remove it
    if (0 in options.responsive) {
      options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend__["a" /* extend */])(options, options.responsive[0]);
      delete options.responsive[0];
    }
  }

  // === define and set variables ===
  var carousel = options.mode === 'carousel' ? true : false;

  if (!carousel) {
    options.axis = 'horizontal';
    options.rewind = false;
    options.loop = true;
    options.edgePadding = false;

    var animateIn = 'tns-fadeIn',
        animateOut = 'tns-fadeOut',
        animateDelay = false,
        animateNormal = options.animateNormal || 'tns-normal';

    if (TRANSITIONEND && ANIMATIONEND) {
      animateIn = options.animateIn || animateIn;
      animateOut = options.animateOut || animateOut;
      animateDelay = options.animateDelay || animateDelay;
    }
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      container = options.container,
      containerParent = container.parentNode,
      slideItems = container.children,
      slideCount = slideItems.length,
      vpOuter = containerParent.clientWidth,
      vpInner,
      responsive = options.responsive,
      responsiveItems = [],
      breakpoints = false,
      breakpointZone = 0,
      windowWidth = getWindowWidth();

  if (responsive) {
    breakpoints = Object.keys(responsive)
      .map(function (x) { return parseInt(x); })
      .sort(function (a, b) { return a - b; });

    // get all responsive items
    breakpoints.forEach(function(bp) {
      responsiveItems = responsiveItems.concat(Object.keys(responsive[bp]));
    });

    // remove duplicated items
    var arr = [];
    responsiveItems.forEach(function (item) { if (arr.indexOf(item) < 0) { arr.push(item); } });
    responsiveItems = arr;

    setBreakpointZone();
  } 

  var items = getOption('items'),
      slideBy = getOption('slideBy') === 'page' ? items : getOption('slideBy'),
      nested = options.nested,
      gutter = getOption('gutter'),
      edgePadding = getOption('edgePadding'),
      fixedWidth = getOption('fixedWidth'),
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      sheet = Object(__WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet__["a" /* createStyleSheet */])(),
      lazyload = options.lazyload,
      slideOffsetTops, // collection of slide offset tops
      slideItemsOut = [],
      cloneCount = loop ? slideCount * 2 : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = fixedWidth && !loop && !edgePadding ? true : false,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      index = options.startIndex ? options.startIndex : !carousel ? 0 : cloneCount,
      indexCached = index,
      indexMin = 0,
      indexMax = slideCountNew - items,
      // resize
      resizeTimer,
      touchedOrDraged,
      running = false,
      onInit = options.onInit,
      events = new __WEBPACK_IMPORTED_MODULE_29__helpers_events__["a" /* Events */](),
      // id, class
      containerIdCached = container.id,
      classContainer = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(__WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId__["a" /* getSlideId */])(),
      disable = getOption('disable'),
      freezable = options.freezable,
      freeze = disable ? true : freezable ? slideCount <= items : false,
      frozen,
      importantStr = nested === 'inner' ? ' !important' : '',
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onTouchOrMouseStart,
        'touchmove': onTouchOrMouseMove,
        'touchend': onTouchOrMouseEnd,
        'touchcancel': onTouchOrMouseEnd
      }, dragEvents = {
        'mousedown': onTouchOrMouseStart,
        'mousemove': onTouchOrMouseMove,
        'mouseup': onTouchOrMouseEnd,
        'mouseleave': onTouchOrMouseEnd
      },
      hasControls = checkOption('controls'),
      hasNav = checkOption('nav'),
      hasAutoplay = checkOption('autoplay'),
      hasTouch = checkOption('touch'),
      hasMouseDrag = checkOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active';

  // check startIndex
  if (options.startIndex) {
    index = index%slideCount;
    if (index < 0) { index += slideCount; }
    if (index > indexMax) { index = indexMax; }
  }

  // controls
  if (hasControls) {
    var controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        controlsContainer = options.controlsContainer,
        prevButton,
        nextButton,
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var nav = getOption('nav'),
        navContainer = options.navContainer,
        // navAnimationIn = options.navAnimationIn,
        // navAnimationOut = options.navAnimationOut,
        navItems,
        visibleNavIndexes = [],
        visibleNavIndexesCached = visibleNavIndexes,
        navClicked = -1,
        navCurrentIndex = 0,
        navCurrentIndexCached = 0,
        navActiveClass = 'tns-nav-active';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayButton = options.autoplayButton,
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayVisibilityPaused;
  }

  // touch
  if (hasTouch) {
    var touch = getOption('touch'),
        startX = null,
        startY = null,
        translateInit,
        moveDirectionExpected = 0,
        disX,
        disY;
  }

  // mouse drag
  if (hasMouseDrag) {
    var mouseDrag = getOption('mouseDrag'),
        isDragEvent = false;
  }

  // disable slider when slidecount <= items
  if (freeze) {
    controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';
    transformPrefix += horizontal ? 'X(' : 'Y(';
    transformPostfix = ')';
  }

  // === COMMON FUNCTIONS === //
  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function checkOption (item) {
    var result = options[item];
    if (!result && breakpoints && responsiveItems.indexOf(item) >= 0) {
      breakpoints.forEach(function (bp) {
        if (responsive[bp][item]) { result = true; }
      });
    }
    return result;
  }

  function getOption (item, viewport) {
    viewport = viewport ? viewport : windowWidth;
    
    var obj = {
          slideBy: 'page',
          edgePadding: false,
          autoHeight: true
        },
        result;

    if (!carousel && item in obj) {
      result = obj[item];
    } else {
      if (item === 'items' && getOption('fixedWidth')) {
        result = Math.floor(vpOuter / (getOption('fixedWidth') + getOption('gutter')));
      } else if (item === 'autoHeight' && nested === 'outer') {
        result = true;
      } else {
        result = options[item];

        if (breakpoints && responsiveItems.indexOf(item) >= 0) {
          for (var i = 0, len = breakpoints.length; i < len; i++) {
            var bp = breakpoints[i];
            if (viewport >= bp) {
              if (item in responsive[bp]) { result = responsive[bp][item]; }
            } else { break; }
          }
        }
      }
    }


    if (item === 'slideBy' && result === 'page') { result = getOption('items'); }

    return result;
  }

  function getSlideMarginLeft (i) {
    var str = CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
    return str;
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem) {
    var str = '';
    if (edgePaddingTem) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap += gutterTem; }
      if (fixedWidthTem) {
        str = 'margin: 0px ' + (vpOuter%(fixedWidthTem + gutterTem) + gutterTem) / 2 + 'px';
      } else {
        str = horizontal ?
          'margin: 0 ' + edgePaddingTem + 'px 0 ' + gap + 'px;' :
          'padding: ' + gap + 'px 0 ' + edgePaddingTem + 'px 0;';
      }
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    var str;

    if (fixedWidthTem) {
      str = (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      str = CALC ? 
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : 
        slideCountNew * 100 / itemsTem + '%';
    }

    return str;
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var str = '';

    if (horizontal) {
      str = 'width:';
      if (fixedWidthTem) {
        str += (fixedWidthTem + gutterTem) + 'px';
      } else {
        var dividend = carousel ? slideCountNew : itemsTem;
        str += CALC ? 
          CALC + '(100% / ' + dividend + ')' : 
          100 / dividend + '%';
      }
      str += importantStr + ';';
    }

    return str;
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  (function sliderInit () {
    // First thing first, wrap container with 'outerWrapper > innerWrapper',
    // to get the correct view width
    outerWrapper.appendChild(innerWrapper);
    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);
    vpInner = innerWrapper.clientWidth;

    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = checkOption('gutter');

    if (carousel) {
      if (horizontal) {
        if (checkOption('edgePadding') || hasGutter && !options.fixedWidth) {
          classOuter += ' tns-ovh';
        } else {
          classInner += ' tns-ovh';
        }
      } else {
        classInner += ' tns-ovh';
      }
    } else if (hasGutter) {
      classOuter += ' tns-ovh';
    }

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    innerWrapper.id = slideId + '-iw';
    if (autoHeight) {
      innerWrapper.className += ' tns-ah';
      innerWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }

    // set container properties
    if (container.id === '') { container.id = slideId; }
    classContainer += SUBPIXEL ? ' tns-subpixel' : ' tns-no-subpixel';
    classContainer += CALC ? ' tns-calc' : ' tns-no-calc';
    if (carousel) { classContainer += ' tns-' + options.axis; }
    container.className += classContainer;
    // add event
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, eve);
    }

    // delete datas after init
    classOuter = classInner = null;

    // add id, class, aria attributes 
    // before clone slides
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];
      if (!item.id) { item.id = slideId + '-item' + x; }
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, 'tns-item');
      if (!carousel && animateNormal) { Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, animateNormal); }
      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }

    // clone slides
    if (loop || edgePadding) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

    // activate visible slides
    // add aria attrs
    // set animation classes and left value for gallery slider
    // use slide count when slides are fewer than items
    for (var i = index; i < index + Math.min(slideCount, items); i++) {
      var item = slideItems[i];
      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(item, {'aria-hidden': 'false'});
      Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(item, ['tabindex']);
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, slideActiveClass);

      if (!carousel) { 
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, animateNormal);
      }
    }

    if (carousel && horizontal) {
      // set font-size rules
      // for modern browsers
      if (SUBPIXEL) {
        // set slides font-size first
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId, 'font-size:0;', Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));

      // slide left margin
      // for IE8 & webkit browsers (no subpixel)
      } else {
        [].forEach.call(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }

    if (CSSMQ) {
      // inner wrapper styles
      var str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth);
      Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId + '-iw', str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));

      // container styles
      if (carousel && horizontal) {
        str = 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items);
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId, str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
      }

      // slide styles
      if (horizontal || options.gutter) {
        str = getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) + 
              getSlideGutterStyle(options.gutter);
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
      }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);

      // container styles
      if (carousel && horizontal) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      if (horizontal || gutter) {
        var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                  getSlideGutterStyle(gutter);
        // append to the last line
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
      }
    }

    if (!horizontal && !disable) {
      getSlideOffsetTops();
      updateContentWrapperHeight();
    }

    // media queries
    if (responsive && CSSMQ) {
      breakpoints.forEach(function(bp) {
        var opts = responsive[bp],
            str = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = getOption('items', bp),
            fixedWidthBP = getOption('fixedWidth', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            gutterBP = getOption('gutter', bp);

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP) + '}';
        }

        // container string
        if (carousel && horizontal && ('fixedWidth' in opts || 'gutter' in opts || 'items' in opts)) {
          containerStr = '#' + slideId + '{' + 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + '}';
        }

        // slide string
        if ('fixedWidth' in opts || checkOption('fixedWidth') && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        if (slideStr.length > 0) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        str = innerWrapperStr + containerStr + slideStr;

        if (str.length > 0) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      });
    }


    // set container transform property
    if (carousel && !disable) {
      doContainerTransform();
    }


    // == msInit ==
    // for IE10
    if (navigator.msMaxTouchPoints) {
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(outerWrapper, 'ms-touch');
      Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(outerWrapper, {'scroll': ie10Scroll});
      setSnapInterval();
    }

 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        [].forEach.call(navItems, function (item, i) {
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-selected': 'false',
            'aria-controls': slideItems[initIndex + i].id,
          });
          // if (navAnimationOut) {
          //   addClass(item, navAnimationOut);
          // }
        });

      // generated nav 
      } else {
        var navHtml = '';
            // classStr = navAnimationOut ? 'class="' + navAnimationOut + '"' : '';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          // navHtml += '<button ' + classStr + ' data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideId + '-item' + i +'" hidden type="button"></button>';
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideItems[initIndex + i].id +'" hidden type="button"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML('afterbegin', navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;

        updateNavVisibility();
      }

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
      }

      Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(navItems[0], {'tabindex': '0', 'aria-selected': 'true'});
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(navItems[0], navActiveClass);
      // if (navAnimationOut) {
      //   removeClass(navItems[0], navAnimationOut);
      // }
      // if (navAnimationIn) {
      //   addClass(navItems[0], navAnimationIn);
      // }

      // add events
      Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(navContainer, navEvents);

      if (!nav) { Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(navContainer); }
    }


    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        innerWrapper.insertAdjacentHTML('beforebegin', '<button data-action="' + txt + '" type="button">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(autoplayButton, {'click': toggleAnimation});
      }

      if (!autoplay) {
        if (autoplayButton) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(autoplayButton);
        }
      } else {
        startAutoplay();
        if (autoplayHoverPause) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, visibilityEvent); }
      }
    }


    // == controlsInit ==
    if (hasControls) {
      if (controlsContainer) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(prevButton, {'data-controls' : 'prev'});
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(nextButton, {'data-controls' : 'next'});
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(controlsContainer.children, {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      } else {
        outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      if (!loop) { disEnableElement(prevIsButton, prevButton, true); }

      // add events
      Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(controlsContainer, controlsEvents);

      if (!controls) { Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(controlsContainer); }
    }


    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, touchEvents); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, dragEvents); }
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(doc, docmentKeydownEvent); }


    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(win, {'resize': onResize});
      if (nested === 'outer') {
        events.on('innerLoaded', runAutoHeight);
      }
    }

    lazyLoad();
    runAutoHeight();
    toggleSlideDisplayAndEdgePadding();
    updateFixedWidthInnerWrapperStyle();

    events.on('indexChanged', additionalUpdates);

    if (typeof onInit === 'function') { onInit(info()); }
    if (nested === 'inner') { events.emit('innerLoaded', info()); }

    if (disable) { disableSlider(true); }
  })();





// === ON RESIZE ===
  function onResize (e) {
    e = e || win.event;

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var newWW = getWindowWidth();
      if (windowWidth !== newWW) {
        windowWidth = newWW;

        resizeTasks();

        if (nested === 'outer') { events.emit('outerResized', info(e)); }
      }
    }, 100); // update after stop resizing for 100 ms
  }

  function resizeTasks () {
    var breakpointZoneTem = breakpointZone,
        indexTem = index, 
        itemsTem = items,
        freezeTem = freeze;

    vpOuter = outerWrapper.clientWidth;
    vpInner = innerWrapper.clientWidth;
    if (breakpoints) { setBreakpointZone(); }


    // things do when breakpoint zone change
    if (breakpointZoneTem !== breakpointZone || fixedWidth) {
      var slideByTem = slideBy,
          arrowKeysTem = arrowKeys,
          autoHeightTem = autoHeight,
          fixedWidthTem = fixedWidth,
          edgePaddingTem = edgePadding,
          gutterTem = gutter,
          disableTem = disable;

      // update variables
      items = getOption('items');
      slideBy = getOption('slideBy');
      disable = getOption('disable');
      freeze = disable ? true : freezable ? slideCount <= items : false;

      if (items !== itemsTem) {
        indexMax = slideCountNew - items;
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }

      if (disable !== disableTem) {
        disableSlider(disable);
      }
      
      if (freeze !== freezeTem) {
        // reset index to initial status
        if (freeze) { index = !carousel ? 0 : cloneCount; }

        toggleSlideDisplayAndEdgePadding();
      }
      
      if (breakpointZoneTem !== breakpointZone) {
        speed = getOption('speed');
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');

        fixedWidth = getOption('fixedWidth');
        if (!disable && fixedWidth !== fixedWidthTem) {
          doContainerTransform();
        }

        autoHeight = getOption('autoHeight');
        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) { innerWrapper.style.height = ''; }
        }
      }

      arrowKeys = freeze ? false : getOption('arrowKeys');
      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ?
          Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(doc, docmentKeydownEvent) :
          Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(doc, docmentKeydownEvent);
      }

      if (hasControls) {
        var controlsTem = controls,
            controlsTextTem = controlsText;
        controls = freeze ? false : getOption('controls');
        controlsText = getOption('controlsText');

        if (controls !== controlsTem) {
          controls ?
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(controlsContainer) :
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(controlsContainer); 
        }
        if (controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }
      }
      if (hasNav) {
        var navTem = nav;
        nav = freeze ? false : getOption('nav');

        if (nav !== navTem) {
          if (nav) {
            Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(navContainer);
            updateNavVisibility();
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(navContainer);
          }
        }
      }
      if (hasTouch) {
        var touchTem = touch;
        touch = freeze ? false : getOption('touch');

        if (touch !== touchTem && carousel) {
          touch ?
            Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, touchEvents) :
            Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, touchEvents);
        }
      }
      if (hasMouseDrag) {
        var mouseDragTem = mouseDrag;
        mouseDrag = freeze ? false : getOption('mouseDrag');

        if (mouseDrag !== mouseDragTem && carousel) {
          mouseDrag ?
            Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, dragEvents) :
            Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, dragEvents);
        }
      }
      if (hasAutoplay) {
        var autoplayTem = autoplay,
            autoplayHoverPauseTem = autoplayHoverPause,
            autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
            autoplayTextTem = autoplayText;

        if (freeze) {
          autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
        } else {
          autoplay = getOption('autoplay');
          
          if (autoplay) {
            autoplayHoverPause = getOption('autoplayHoverPause');
            autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');
          } else {
            autoplayHoverPause = autoplayResetOnVisibility = false;
          }
        }
        autoplayText = getOption('autoplayText');
        autoplayTimeout = getOption('autoplayTimeout');

        if (autoplay !== autoplayTem) {
          if (autoplay) {
            if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(autoplayButton); }
            if (!animating) { startAutoplay(); }
          } else {
            if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(autoplayButton); }
            if (animating) { stopAutoplay(); }
          }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) {
          autoplayHoverPause ?
            Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(container, hoverEvents) :
            Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, hoverEvents);
        }
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
          autoplayResetOnVisibility ?
            Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(doc, visibilityEvent) :
            Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(doc, visibilityEvent);
        }
        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;
          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      }

      // IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)
      if (!CSSMQ) {
        // inner wrapper styles
        if (!freeze && (edgePadding !== edgePaddingTem || gutter !== gutterTem)) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
        }

        // container styles
        if (carousel && horizontal && (fixedWidth !== fixedWidthTem || gutter !== gutterTem || items !== itemsTem)) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        }

        // slide styles
        if (horizontal && (items !== itemsTem || gutter !== gutterTem || fixedWidth != fixedWidthTem)) {
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          sheet.removeRule(Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet) - 1);
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_11__helpers_getCssRulesLength__["a" /* getCssRulesLength */])(sheet));
        }

        // will do transform later if index !== indexTem
        // make sure doTransform will only run once
        if (!fixedWidth && index === indexTem) { doTransform(0); }
      }

      if (index !== indexTem) { 
        events.emit('indexChanged', info());
        doTransform(0); 
        indexCached = index;
      }

      if (items !== itemsTem) { 
        additionalUpdates();
        runAutoHeight();

        if (navigator.msMaxTouchPoints) { setSnapInterval(); }
      }
    }

    // things always do regardless of breakpoint zone changing
    if (!horizontal && !disable) {
      getSlideOffsetTops();
      updateContentWrapperHeight();
      doContainerTransform();
    }

    updateFixedWidthInnerWrapperStyle(true);

    // auto height
    runAutoHeight();
  }





  // === INITIALIZATION FUNCTIONS === //
  function setBreakpointZone () {
    breakpointZone = 0;
    breakpoints.forEach(function(bp, i) {
      if (windowWidth >= bp) { breakpointZone = i + 1; }
    });
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      function () {
        var leftEdge = indexMin + slideBy, rightEdge = indexMax - slideBy;

        // adjust edges when edge padding is true
        // or fixed-width slider with extra space on the right side
        if (edgePadding) {
          leftEdge += 1;
          rightEdge -= 1;
        } else if (fixedWidth) {
          var gt = gutter ? gutter : 0;
          if (vpOuter%(fixedWidth + gt) > gt) { rightEdge -= 1; }
        }

        if (index > rightEdge) {
          while(index >= leftEdge + slideCount) { index -= slideCount; }
        } else if(index < leftEdge) {
          while(index <= rightEdge - slideCount) { index += slideCount; }
        }
      } :
      function () { index = Math.max(indexMin, Math.min(indexMax, index)); };
  })();

  function toggleSlideDisplayAndEdgePadding () {
    // if (cloneCount) {
    // if (fixedWidth && cloneCount) {
      var str = 'tns-transparent',
          innerWrapperMarginZero = innerWrapper.style.margin === '0px';

      if (freeze) {
        if (!innerWrapperMarginZero) {
          // remove edge padding from inner wrapper
          if (edgePadding) { innerWrapper.style.margin = '0px'; }

          // add class tns-transparent to cloned slides
          if (cloneCount) {
            for (var i = cloneCount; i--;) {
              Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(slideItems[i], str);
              Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(slideItems[slideCountNew - i - 1], str);
            }
          }
        }
      } else if (innerWrapperMarginZero) {
        // restore edge padding for inner wrapper
        // for mordern browsers
        if (edgePadding && !fixedWidth && CSSMQ) { innerWrapper.style.margin = ''; }

        // remove class tns-transparent to cloned slides
        if (cloneCount) {
          for (var i = cloneCount; i--;) {
            Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(slideItems[i], str);
            Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(slideItems[slideCountNew - i - 1], str);
          }
        }
      }
    // }
  }

  function updateFixedWidthInnerWrapperStyle (resize) {
    if (fixedWidth && edgePadding) {
      // remove edge padding when freeze or viewport narrower than one slide
      if (freeze || vpOuter <= (fixedWidth + gutter)) {
        if (innerWrapper.style.margin !== '0px') { innerWrapper.style.margin = '0px'; }
      // update edge padding on resize
      } else if (resize) {
        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
      }
    }
  }

  function disableSlider (disable) {
    var len = slideItems.length;
    
    if (disable) {
      sheet.disabled = true;
      container.className = container.className.replace(classContainer.substring(1), '');
      container.style = '';
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(slideItems[j]); }
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(slideItems[len - j - 1]);
        }
      }

      // vertical slider
      if (!horizontal || !carousel) { innerWrapper.style = ''; }

      // gallery
      if (!carousel) { 
        for (var i = index; i < index + slideCount; i++) {
          var item = slideItems[i];
          item.style = '';
          Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, animateIn);
          Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, animateNormal);
        }
      }
    } else {
      sheet.disabled = false;
      container.className += classContainer;

      // vertical slider: get offsetTops before container transform
      if (!horizontal) { getSlideOffsetTops(); }

      doContainerTransform();
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(slideItems[j]); }
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(slideItems[len - j - 1]);
        }
      }

      // gallery
      if (!carousel) { 
        for (var i = index; i < index + slideCount; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, classN);
        }
      }
    }
  }

  // lazyload
  function lazyLoad () {
    if (lazyload && !disable) {
      var i = index, 
          len = index + items;
          
      if (edgePadding) {
        i -=1;
        len +=1;
      }

      for(; i < len; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('.tns-lazy-img'), function (img) {
          // stop propagationl transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(img, eve);

          if (!Object(__WEBPACK_IMPORTED_MODULE_14__helpers_hasClass__["a" /* hasClass */])(img, 'loaded')) {
            img.src = Object(__WEBPACK_IMPORTED_MODULE_18__helpers_getAttr__["a" /* getAttr */])(img, 'data-src');
            Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(img, 'loaded');
          }
        });
      }
    }
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight () {
    if (autoHeight && !disable) {
      // get all images inside visible slide items
      var images = [];

      for (var i = index; i < index + items; i++) {
        [].forEach.call(slideItems[i].querySelectorAll('img'), function (img) {
          images.push(img);
        });
      }

      if (images.length === 0) {
        updateInnerWrapperHeight(); 
      } else {
        checkImagesLoaded(images);
      }
    }
  }

  function checkImagesLoaded (images) {
    images.forEach(function (img, index) {
      if (Object(__WEBPACK_IMPORTED_MODULE_24__helpers_imageLoaded__["a" /* imageLoaded */])(img)) { images.splice(index, 1); }
    });

    if (images.length === 0) {
      updateInnerWrapperHeight();
    } else {
      setTimeout(function () { 
        checkImagesLoaded(images); 
      }, 16);
    }
  } 

  function additionalUpdates () {
    lazyLoad(); 
    updateSlideStatus();
    updateControlsStatus();
    updateNavVisibility();
    updateNavStatus();
  }


  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var heights = [], maxHeight;
    for (var i = index; i < index + items; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    maxHeight = Math.max.apply(null, heights);

    if (innerWrapper.style.height !== maxHeight) {
      if (TRANSITIONDURATION) { setDurations(speed); }
      innerWrapper.style.height = maxHeight + 'px';
    }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slideOffsetTops
  function getSlideOffsetTops () {
    slideOffsetTops = [0];
    var topFirst = slideItems[0].getBoundingClientRect().top, attr;
    for (var i = 1; i < slideCountNew; i++) {
      attr = slideItems[i].getBoundingClientRect().top;
      slideOffsetTops.push(attr - topFirst);
    }
  }

  // set snapInterval (for IE10)
  function setSnapInterval () {
    outerWrapper.style.msScrollSnapPointsX = 'snapInterval(0%, ' + (100 / items) + '%)';
  }

  // update slide
  function updateSlideStatus () {
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];
      // visible slides
      if (i >= index && i < index + items) {
        if (Object(__WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__["a" /* hasAttr */])(item, 'tabindex')) {
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(item, {'aria-hidden': 'false'});
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(item, ['tabindex']);
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, slideActiveClass);
        }
      // hidden slides
      } else {
        if (!Object(__WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__["a" /* hasAttr */])(item, 'tabindex')) {
          Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_14__helpers_hasClass__["a" /* hasClass */])(item, slideActiveClass)) {
          Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, slideActiveClass);
        }
      }
    }
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked !== -1 ? navClicked : index%slideCount;
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(navPrev, {
          'tabindex': '-1',
          'aria-selected': 'false'
        });
        Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(navCurrent, {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(navPrev, navActiveClass);
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(navCurrent, navActiveClass);

        // if (navAnimationOut) {
        //   removeClass(navPrev, navAnimationIn);
        //   addClass(navPrev, navAnimationOut);
        // }
        // if (navAnimationIn) {
        //   removeClass(navCurrent, navAnimationOut);
        //   addClass(navCurrent, navAnimationIn);
        // }
      }
    }
  }

  function isButton (el) {
    return el.nodeName.toLowerCase() === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index === indexMin) ? true : false,
        disableNext = (!rewind && index === indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function setDurations (duration, target) {
    duration = !duration ? '' : duration / 1000 + 's';
    target = target || container;
    target.style[TRANSITIONDURATION] = duration;

    if (!carousel) {
      target.style[ANIMATIONDURATION] = duration;
    }
    if (!horizontal) {
      innerWrapper.style[TRANSITIONDURATION] = duration;
    }
  }

  function getContainerTransformValue () {
    var val;
    if (horizontal) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * index + 'px';
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        val = - index * 100 / denominator + '%';
      }
    } else {
      val = - slideOffsetTops[index] + 'px';
    }
    return val;
  }

  function doContainerTransform (val) {
    if (!val) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    for (var i = number, l = number + items; i < l; i++) {
      var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (TRANSITIONDURATION) { setDurations(speed, item); }
      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, classOut);
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function (duration, distance) {
        if (!distance) { distance = getContainerTransformValue(); }
        
        // constrain the distance when non-loop no-edgePadding fixedWidth reaches the right edge
        if (hasRightDeadZone && index === indexMax) {
          distance = - ((fixedWidth + gutter) * slideCountNew - vpInner) + 'px';
        }

        if (TRANSITIONDURATION || !duration) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform(distance);
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!duration || !Object(__WEBPACK_IMPORTED_MODULE_23__helpers_isVisible__["a" /* isVisible */])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_jsTransform__["a" /* jsTransform */])(container, transformAttr, transformPrefix, transformPostfix, distance, speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function (duration) {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(slideItems[indexCached], eve);
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !duration) { onTransitionEnd(); }
      };
  })();

  function doTransform (duration, distance) {
    // check duration is defined and is a number
    if (isNaN(duration)) { duration = speed; }

    // if container is hidden, set duration to 0
    if (animating && !Object(__WEBPACK_IMPORTED_MODULE_23__helpers_isVisible__["a" /* isVisible */])(container)) { duration = 0; }
    
    if (TRANSITIONDURATION) { setDurations(duration); }
    transformCore(duration, distance);
  }

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      doTransform();
    }

  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < items; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (TRANSITIONDURATION) { setDurations(0, item); }
          if (animateDelay && TRANSITIONDELAY) { 
            item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = '';
          }
          Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(item, animateOut);
          Object(__WEBPACK_IMPORTED_MODULE_15__helpers_addClass__["a" /* addClass */])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            if (TRANSITIONDURATION) { setDurations(0); }
            doContainerTransform();
          }
        } 

        runAutoHeight();

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        navCurrentIndexCached = navCurrentIndex;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else if (!running) {
      var absIndex = index%slideCount, 
          indexGap = 0;
      if (absIndex < 0) { absIndex += slideCount; }

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = slideCount - items - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }
        if (!isNaN(targetIndex)) {
          var absTargetIndex = targetIndex%slideCount;
          if (absTargetIndex < 0) { absTargetIndex += slideCount; }
          indexGap = absTargetIndex - absIndex;
        }
      }

      index += indexGap;

      // if index is changed, start rendering
      if (index%slideCount !== indexCached%slideCount) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (!running) {
      var passEventObject;

      if (!dir) {
        e = e || win.event;
        var target = e.target || e.srcElement;

        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

        var targetIn = [prevButton, nextButton].indexOf(target);
        if (targetIn >= 0) {
          passEventObject = true;
          dir = targetIn === 0 ? -1 : 1;
        }
      }

      if (dir === -1) {
        index -= slideBy;
      } else if (dir === 1) {
        // Go to the first if reach the end in rewind mode
        // Otherwise go to the next
        if (rewind && index === indexMax){
          goTo(0, e);
          return;
        } else {
          index += slideBy;
        }
      }

      // pass e when click control buttons or keydown
      render(passEventObject || e && e.type === 'keydown' ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (!running) {
      e = e || win.event;
      var target = e.target || e.srcElement,
          navIndex;

      // find the clicked nav item
      while (target !== navContainer && !Object(__WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__["a" /* hasAttr */])(target, 'data-nav')) { target = target.parentNode; }
      if (Object(__WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__["a" /* hasAttr */])(target, 'data-nav')) {
        navIndex = navClicked = [].indexOf.call(navItems, target);
        goTo(navIndex, e);
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(__WEBPACK_IMPORTED_MODULE_19__helpers_setAttrs__["a" /* setAttrs */])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  function toggleAnimation () {
    animating ? stopAutoplay() : startAutoplay();
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = e || win.event;
    switch(e.keyCode) {
      case KEYS.LEFT:
        onControlsClick(e, -1);
        break;
      case KEYS.RIGHT:
        onControlsClick(e, 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = e || win.event;
    var code = e.keyCode;

    switch (code) {
      case KEYS.LEFT:
      case KEYS.UP:
      case KEYS.PAGEUP:
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
          break;
      case KEYS.RIGHT:
      case KEYS.DOWN:
      case KEYS.PAGEDOWN:
          if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
          break;
      case KEYS.HOME:
        goTo(0, e);
        break;
      case KEYS.END:
        goTo(slideCount - 1, e);
        break;
    }
  }

  // set focus
  function setFocus (focus) {
    focus.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    var curElement = doc.activeElement;
    if (!Object(__WEBPACK_IMPORTED_MODULE_17__helpers_hasAttr__["a" /* hasAttr */])(curElement, 'data-nav')) { return; }

    e = e || win.event;
    var code = e.keyCode,
        navIndex = [].indexOf.call(navItems, curElement),
        len = visibleNavIndexes.length,
        current = visibleNavIndexes.indexOf(navIndex);

    if (options.navContainer) {
      len = slideCount;
      current = navIndex;
    }

    function getNavIndex (num) {
      return options.navContainer ? num : visibleNavIndexes[num];
    }

    switch(code) {
      case KEYS.LEFT:
      case KEYS.PAGEUP:
        if (current > 0) { setFocus(navItems[getNavIndex(current - 1)]); }
        break;

      case KEYS.UP:
      case KEYS.HOME:
        if (current > 0) { setFocus(navItems[getNavIndex(0)]); }
        break;

      case KEYS.RIGHT:
      case KEYS.PAGEDOWN:
        if (current < len - 1) { setFocus(navItems[getNavIndex(current + 1)]); }
        break;

      case KEYS.DOWN:
      case KEYS.END:
        if (current < len - 1) { setFocus(navItems[getNavIndex(len - 1)]); }
        break;

      // Can't use onNavClick here,
      // Because onNavClick require event.target as nav items
      case KEYS.ENTER:
      case KEYS.SPACE:
        navClicked = navIndex;
        goTo(navIndex, e);
        break;
    }
  }

  // IE10 scroll function
  function ie10Scroll () {
    doTransform(0, container.scrollLeft());
    indexCached = index;
  }

  function getTarget (e) {
    return e.target || e.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
  }

  function onTouchOrMouseStart (e) {
    // reset 
    moveDirectionExpected = 0;
    touchedOrDraged = false;
    startX = startY = null;

    if (!running) {
      e = e || win.event;
      var ev; 

      if (isTouchEvent(e)) {
        ev = e.changedTouches[0];
        events.emit('touchStart', info(e));
      } else {
        ev = e;
        preventDefaultBehavior(e);
        events.emit('dragStart', info(e));
      }

      startX = parseInt(ev.clientX);
      startY = parseInt(ev.clientY);
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, '').replace(transformPostfix, ''));
    }
  }

  function onTouchOrMouseMove (e) {
    // make sure touch started or mouse draged
    if (!running && startX !== null) {
      e = e || win.event;
      var ev;

      if (isTouchEvent(e)) {
        ev = e.changedTouches[0];
      } else {
        ev = e;
        preventDefaultBehavior(e);
      }

      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;

      if (moveDirectionExpected === 0) {
        moveDirectionExpected = Object(__WEBPACK_IMPORTED_MODULE_13__helpers_getTouchDirection__["a" /* getTouchDirection */])(Object(__WEBPACK_IMPORTED_MODULE_12__helpers_toDegree__["a" /* toDegree */])(disY, disX), 15) === options.axis;
      }

      if (moveDirectionExpected) {
        if (isTouchEvent(e)) {
          events.emit('touchMove', info(e));
        } else {
          // "mousemove" event after "mousedown" indecate 
          // it is "drag", not "click"
          if (!isDragEvent) { isDragEvent = true; }
          events.emit('dragMove', info(e));
        }
        if (!touchedOrDraged) { touchedOrDraged = true; }

        var x = translateInit;
        if (horizontal) {
          if (fixedWidth) {
            x += disX;
            x += 'px';
          } else {
            var percentageX = TRANSFORM ? disX * items * 100 / (vpInner * slideCountNew): disX * 100 / vpInner;
            x += percentageX;
            x += '%';
          }
        } else {
          x += disY;
          x += 'px';
        }

        if (TRANSFORM) { setDurations(0); }
        container.style[transformAttr] = transformPrefix + x + transformPostfix;
      }
    }
  }

  function onTouchOrMouseEnd (e) {
    if (!running && touchedOrDraged) {
      e = e || win.event;
      var ev;

      if (isTouchEvent(e)) {
        ev = e.changedTouches[0];
        events.emit('touchEnd', info(e));
      } else {
        ev = e;
        events.emit('dragEnd', info(e));
      }

      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;
      var sliderMoved = Boolean(horizontal ? disX : disY);

      // reset 
      moveDirectionExpected = 0;
      touchedOrDraged = false;
      startX = startY = null;

      if (horizontal) {
        var indexMoved = - disX * items / vpInner;
        indexMoved = disX > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
        index += indexMoved;
      } else {
        var moved = - (translateInit + disY);
        if (moved <= 0) {
          index = indexMin;
        } else if (moved >= slideOffsetTops[slideOffsetTops.length - 1]) {
          index = indexMax;
        } else {
          var i = 0;
          do {
            i++;
            index = disY < 0 ? i + 1 : i;
          } while (i < slideCountNew && moved >= slideOffsetTops[i + 1]);
        }
      }
      
      render(e, sliderMoved);

      // drag vs click
      if (isDragEvent) { 
        // reset isDragEvent
        isDragEvent = false;

        // prevent "click"
        var target = getTarget(e);
        Object(__WEBPACK_IMPORTED_MODULE_27__helpers_addEvents__["a" /* addEvents */])(target, {'click': function preventClick (e) {
          preventDefaultBehavior(e);
          Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(target, {'click': preventClick});
        }}); 
      } 
    }
  }

  // === RESIZE FUNCTIONS === //
  // (slideOffsetTops, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    innerWrapper.style.height = slideOffsetTops[index + items] - slideOffsetTops[index] + 'px';
  }

  /*
   * get nav item indexes per items
   * add 1 more if the nav items cann't cover all slides
   * [0, 1, 2, 3, 4] / 3 => [0, 3]
   */
  function getVisibleNavIndex () {
    // reset visibleNavIndexes
    visibleNavIndexes = [];

    var absIndexMin = index%slideCount%items;
    while (absIndexMin < slideCount) {
      if (!loop && absIndexMin + items > slideCount) { absIndexMin = slideCount - items; }
      visibleNavIndexes.push(absIndexMin);
      absIndexMin += items;
    }

    // nav count * items < slide count means
    // some slides can not be displayed only by nav clicking
    if (loop && visibleNavIndexes.length * items < slideCount ||
        !loop && visibleNavIndexes[0] > 0) {
      visibleNavIndexes.unshift(0);
    }
  }
  
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || options.navContainer) { return; }
    getVisibleNavIndex();

    if (visibleNavIndexes !== visibleNavIndexesCached) {
      [].forEach.call(navItems, function(el, i) {
        if (visibleNavIndexes.indexOf(i) < 0) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_hideElement__["a" /* hideElement */])(el);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_showElement__["a" /* showElement */])(el);
        }
      });

      // cache visible nav indexes
      visibleNavIndexesCached = visibleNavIndexes;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      visibleNavIndexes: visibleNavIndexes,
      visibleNavIndexesCached: visibleNavIndexesCached,
      event: e || {},
    };
  }

  return {
    getInfo: info,
    events: events,
    goTo: goTo,

    destroy: function () {
      // sheet
      sheet.disabled = true;

      // cloned items
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { slideItems[0].remove(); }
          slideItems[slideItems.length - 1].remove();
        }
      }

      // Slide Items
      var slideClasses = ['tns-item', slideActiveClass];
      if (!carousel) { slideClasses = slideClasses.concat('tns-normal', animateIn); }

      for (var i = slideCount; i--;) {
        var slide = slideItems[i];
        if (slide.id.indexOf(slideId + '-item') >= 0) { slide.id = ''; }

        slideClasses.forEach(function(cl) { Object(__WEBPACK_IMPORTED_MODULE_16__helpers_removeClass__["a" /* removeClass */])(slide, cl); })
      }
      Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(slideItems, ['style', 'aria-hidden', 'tabindex']);
      slideItems = slideId = slideCount = slideCountNew = cloneCount = null;

      // controls
      if (controls) {
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(controlsContainer, controlsEvents);
        if (options.controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(controlsContainer, ['aria-label', 'tabindex']);
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(controlsContainer.children, ['aria-controls', 'aria-disabled', 'tabindex']);
        }
        controlsContainer = prevButton = nextButton = null;
      }

      // nav
      if (nav) {
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(navContainer, navEvents);
        if (options.navContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(navContainer, ['aria-label']);
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
        }
        navContainer = navItems = null;
      }

      // auto
      if (autoplay) {
        clearInterval(autoplayTimer);
        if (autoplayButton) {
          Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(autoplayButton, {'click': toggleAnimation});
        }
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, hoverEvents);
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, visibilityEvent);
        if (options.autoplayButton) {
          Object(__WEBPACK_IMPORTED_MODULE_20__helpers_removeAttrs__["a" /* removeAttrs */])(autoplayButton, ['data-action'])
        }
      }

      // container
      container.id = containerIdCached || '';
      container.className = container.className.replace(classContainer, '');
      container.style = '';
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, eve);
      }
      Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, touchEvents);
      Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(container, dragEvents);

      // outerWrapper
      containerParent.insertBefore(container, outerWrapper);
      outerWrapper.remove();
      outerWrapper = innerWrapper = container = null;

      // remove arrowKeys eventlistener
      Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(doc, docmentKeydownEvent);

      // remove win event listeners
      Object(__WEBPACK_IMPORTED_MODULE_28__helpers_removeEvents__["a" /* removeEvents */])(win, {'resize': onResize});
    }
  };
};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// keys
if (!Object.keys) {
    Object.keys = function (object) {
        var keys = [];
        for (var name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
                keys.push(name);
            }
        }
        return keys;
    };
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkStorageValue;
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setLocalStorage;
function setLocalStorage(key, value, access) {
  if (access) { localStorage.setItem(key, value); }
  return value;
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSlideId;
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getBody__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setFakeBody__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetFakeBody__ = __webpack_require__(137);
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 





function calc() {
  var doc = document, 
      body = Object(__WEBPACK_IMPORTED_MODULE_1__getBody__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_2__setFakeBody__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var vals = ['calc(10px)', '-moz-calc(10px)', '-webkit-calc(10px)'], val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 10) { 
        result = val.replace('(10px)', ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_3__resetFakeBody__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subpixelLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getBody__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setFakeBody__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetFakeBody__ = __webpack_require__(137);
// get subpixel support value
// @return - boolean





function subpixelLayout() {
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_1__getBody__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_2__setFakeBody__["a" /* setFakeBody */])(body),
      parent = doc.createElement('div'),
      child1 = doc.createElement('div'),
      child2,
      supported;

  parent.style.cssText = 'width: 10px';
  child1.style.cssText = 'float: left; width: 5.5px; height: 10px;';
  child2 = child1.cloneNode(true);

  parent.appendChild(child1);
  parent.appendChild(child2);
  body.appendChild(parent);

  supported = child1.offsetTop !== child2.offsetTop;

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_3__resetFakeBody__["a" /* resetFakeBody */])(body, docOverflow) : parent.remove();

  return supported;
}

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaquerySupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__childNode_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__childNode_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getBody__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setFakeBody__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetFakeBody__ = __webpack_require__(137);





function mediaquerySupport () {
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_1__getBody__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_2__setFakeBody__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_3__resetFakeBody__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return position === "absolute";
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStyleSheet;
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addCSSRule;
// cross browsers addRule method
function addCSSRule(sheet, selector, rules, index) {
  'insertRule' in sheet ?
    sheet.insertRule(selector + '{' + rules + '}', index) :
    sheet.addRule(selector, rules, index);
}

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCssRulesLength;
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDegree;
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTouchDirection;
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(138);

function addClass(el, str) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* hasClass */])(el,  str)) {
    el.className += ' ' + str;
  }
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(138);

function removeClass(el, str) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* hasClass */])(el, str)) {
    el.className = el.className.replace(str, '');
  }
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttr;
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hideElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasAttr__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setAttrs__ = __webpack_require__(154);



function hideElement(el) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasAttr__["a" /* hasAttr */])(el, 'hidden')) {
    Object(__WEBPACK_IMPORTED_MODULE_1__setAttrs__["a" /* setAttrs */])(el, {'hidden': ''});
  }
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasAttr__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__removeAttrs__ = __webpack_require__(156);



function showElement(el) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__hasAttr__["a" /* hasAttr */])(el, 'hidden')) {
    Object(__WEBPACK_IMPORTED_MODULE_1__removeAttrs__["a" /* removeAttrs */])(el, 'hidden');
  }
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVisible;
function isVisible(el) {
  return el.offsetWidth > 0 && el.offsetHeight > 0;
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = imageLoaded;
// check if an image is loaded
// 1. See if "naturalWidth" and "naturalHeight" properties are available.
// 2. See if "complete" property is available.

function imageLoaded(img) {
  if (typeof img.complete === 'boolean') {
    return img.complete;
  } else if (typeof img.naturalWidth === 'number') {
    return img.naturalWidth !== 0;
  }
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = whichProperty;
function whichProperty(props){
  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEndProperty;
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption__ = __webpack_require__(157);


function addEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? __WEBPACK_IMPORTED_MODULE_0__passiveOption__["a" /* passiveOption */] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption__ = __webpack_require__(157);


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? __WEBPACK_IMPORTED_MODULE_0__passiveOption__["a" /* passiveOption */] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
};

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsTransform;
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-simple-spinner v1.2.8 (https://github.com/dzwillia/vue-simple-spinner)
 * (c) 2017 David Z. Williams
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSimpleSpinner"] = factory();
	else
		root["VueSimpleSpinner"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueSimpleSpinner = undefined;

var _Spinner = __webpack_require__(1);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-spinner', _Spinner2.default);
}

exports.VueSimpleSpinner = _Spinner2.default;
exports.default = _Spinner2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(2)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d89557e4", content, true);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".vue-simple-spinner{transition:all .3s linear}@keyframes vue-simple-spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var isNumber = function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.default = {
  name: 'vue-simple-spinner',
  props: {
    'size': {
      default: 32
    },
    'line-size': {
      type: Number,
      default: 3
    },
    'line-bg-color': {
      type: String,
      default: '#eee'
    },
    'line-fg-color': {
      type: String,
      default: '#2196f3' },
    'speed': {
      type: Number,
      default: 0.8
    },
    'spacing': {
      type: Number,
      default: 4
    },
    'message': {
      type: String,
      default: ''
    },
    'font-size': {
      type: Number,
      default: 13
    },
    'text-fg-color': {
      type: String,
      default: '#555'
    }
  },
  computed: {
    size_px: function size_px() {
      switch (this.size) {
        case 'tiny':
          return 12;
        case 'small':
          return 16;
        case 'medium':
          return 32;
        case 'large':
          return 48;
        case 'big':
          return 64;
        case 'huge':
          return 96;
        case 'massive':
          return 128;
      }

      return isNumber(this.size) ? this.size : 32;
    },
    line_size_px: function line_size_px() {
      switch (this.size) {
        case 'tiny':
          return 1;
        case 'small':
          return 2;
        case 'medium':
          return 3;
        case 'large':
          return 3;
        case 'big':
          return 4;
        case 'huge':
          return 4;
        case 'massive':
          return 5;
      }

      return isNumber(this.lineSize) ? this.lineSize : 4;
    },
    text_margin_top: function text_margin_top() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px / 8), 3), 12);
      }

      return isNumber(this.spacing) ? this.spacing : 4;
    },
    text_font_size: function text_font_size() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px * 0.4), 11), 32);
      }

      return isNumber(this.fontSize) ? this.fontSize : 13;
    },
    spinner_style: function spinner_style() {
      return {
        'margin': '0 auto',
        'border-radius': '100%',
        'border': this.line_size_px + 'px solid ' + this.lineBgColor,
        'border-top': this.line_size_px + 'px solid ' + this.lineFgColor,
        'width': this.size_px + 'px',
        'height': this.size_px + 'px',
        'animation': 'vue-simple-spinner-spin ' + this.speed + 's linear infinite'
      };
    },
    text_style: function text_style() {
      return {
        'margin-top': this.text_margin_top + 'px',
        'color': this.textFgColor,
        'font-size': this.text_font_size + 'px',
        'text-align': 'center'
      };
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "vue-simple-spinner",
    style: (_vm.spinner_style)
  }), _vm._v(" "), (_vm.message.length > 0) ? _c('div', {
    staticClass: "vue-simple-spinner-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ])["default"];
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeImage */
/* unused harmony export makeBanner */
/* unused harmony export makeVideo */
/* unused harmony export formatSlides */
/* unused harmony export formatOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_amplience_content_service__ = __webpack_require__(62);






/* eslint-disable no-param-reassign */


var makeImage = function makeImage(slide) {
  return {
    type: 'image',
    url: Object(__WEBPACK_IMPORTED_MODULE_6__assets_js_amplience_content_service__["b" /* generateImageUrl */])(slide.image),
    altText: slide.imageAltText,
    link: slide.link
  };
};

var makeBanner = function makeBanner(slide) {
  return {
    type: 'banner',
    url: Object(__WEBPACK_IMPORTED_MODULE_6__assets_js_amplience_content_service__["b" /* generateImageUrl */])(slide.banner.image),
    altText: slide.banner.imageAltText,
    link: slide.link
  };
};

var makeVideo = function makeVideo(slide) {
  return {
    type: 'video',
    url: Object(__WEBPACK_IMPORTED_MODULE_6__assets_js_amplience_content_service__["c" /* generateVideoUrl */])(slide.video)
  };
};

var formatSlides = function formatSlides(_ref) {
  var slides = _ref.slides;

  var newSlidesArray = [];
  var slidesArray = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(slides).map(function (key) {
    return slides[key];
  });
  slidesArray.forEach(function (slide) {
    var image = slide.image,
        banner = slide.banner,
        video = slide.video;

    if (image) {
      newSlidesArray.push(makeImage(slide));
    }
    if (banner && banner.image) {
      newSlidesArray.push(makeBanner(slide));
    }
    if (video) {
      newSlidesArray.push(makeVideo(slide));
    }
  });
  return newSlidesArray;
};

var formatOptions = function formatOptions(_ref2) {
  var loop = _ref2.loop,
      navigationDots = _ref2.navigationDots,
      speed = _ref2.speed,
      transitionType = _ref2.transitionType;
  return {
    nav: navigationDots,
    autoplay: loop,
    mode: transitionType === 'slide' ? 'carousel' : 'gallery',
    speed: speed
  };
};

var SliderContentService = function (_ContentService) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SliderContentService, _ContentService);

  function SliderContentService() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SliderContentService);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SliderContentService.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SliderContentService)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SliderContentService, [{
    key: 'formatSliderContent',
    value: function formatSliderContent() {
      var _this2 = this;

      return this.getContent().then(function (formatted) {
        _this2.content = {};
        _this2.content.options = formatOptions(formatted);
        _this2.content.slides = formatSlides(formatted);
      });
    }
  }]);

  return SliderContentService;
}(__WEBPACK_IMPORTED_MODULE_6__assets_js_amplience_content_service__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (SliderContentService);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slide_vue__ = __webpack_require__(158);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e8bc573_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slide_vue__ = __webpack_require__(229);
var disposed = false
var normalizeComponent = __webpack_require__(55)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Slide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e8bc573_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Slide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/slider/Slide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e8bc573", Component.options)
  } else {
    hotAPI.reload("data-v-0e8bc573", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Banner_vue__ = __webpack_require__(159);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62f7efa2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Banner_vue__ = __webpack_require__(224);
var disposed = false
var normalizeComponent = __webpack_require__(55)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Banner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62f7efa2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Banner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/banner/Banner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62f7efa2", Component.options)
  } else {
    hotAPI.reload("data-v-62f7efa2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("banner-image", { attrs: { content: _vm.content } })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62f7efa2", esExports)
  }
}

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Video_vue__ = __webpack_require__(160);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bed27f32_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Video_vue__ = __webpack_require__(228);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(55)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bed27f32"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Video_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bed27f32_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Video_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/video/Video.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bed27f32", Component.options)
  } else {
    hotAPI.reload("data-v-bed27f32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(116)("32e135b3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bed27f32\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Video.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bed27f32\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(undefined);
// imports


// module
exports.push([module.i, "\nvideo[data-v-bed27f32] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n", ""]);

// exports


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("video", { attrs: { controls: "" } }, [
      _c("source", { attrs: { src: _vm.content.url, type: "video/mp4" } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bed27f32", esExports)
  }
}

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isImage
        ? _c("image-slide", { attrs: { content: _vm.content } })
        : _vm._e(),
      _vm._v(" "),
      _vm.isVideo
        ? _c("video-slide", { attrs: { content: _vm.content } })
        : _vm._e(),
      _vm._v(" "),
      _vm.isBanner
        ? _c("banner-slide", { attrs: { content: _vm.content } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e8bc573", esExports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "slider-wrapper" },
    [
      _vm.isLoading && !_vm.hasError
        ? _c("spinner", {
            staticClass: "spinner",
            attrs: {
              size: 88,
              "line-size": 10,
              "line-fg-color": "#ff9718",
              "line-bg-color": "#d4d4d4"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.hasError
        ? _c("placeholder")
        : _c(
            "div",
            { staticClass: "tns-outer tns-horizontal tns-subpixel tns-item" },
            _vm._l(_vm.sliderContent.slides, function(slide) {
              return _c(
                "div",
                { key: slide.index },
                [_c("slide", { attrs: { content: slide } })],
                1
              )
            })
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72eb1ae2", esExports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmQ4MjRlM2RkYjM3NDIwZWIzMzgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlLXByb21pc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2FtcGxpZW5jZS1jb250ZW50LXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWl4aW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hbXBsaWVuY2Utc2RrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NoaWxkTm9kZS5yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2ltYWdlL0ltYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS9JbWFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxhY2Vob2xkZXIvUGxhY2Vob2xkZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRCb2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRGYWtlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVzZXRGYWtlQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UvSW1hZ2UudnVlPzNkMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UvSW1hZ2UudnVlP2E5NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGFjZWhvbGRlci9QbGFjZWhvbGRlci52dWU/ZWRmYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGFjZWhvbGRlci9QbGFjZWhvbGRlci52dWU/NmQ0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGFjZWhvbGRlci9QbGFjZWhvbGRlci52dWU/N2UyZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS9JbWFnZS52dWU/Y2E4ZCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2RvY0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEF0dHJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZW1vdmVBdHRycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcGFzc2l2ZU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYmFubmVyL0Jhbm5lci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3ZpZGVvL1ZpZGVvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZXIudnVlPzU0MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlci52dWU/NDMwZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlci5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2hlY2tTdG9yYWdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldExvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc3VicGl4ZWxMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL21lZGlhcXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jcmVhdGVTdHlsZVNoZWV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hZGRDU1NSdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRDc3NSdWxlc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvdG9EZWdyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hpZGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zaG93RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaXNWaXNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pbWFnZUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvd2hpY2hQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2pzVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc2ltcGxlLXNwaW5uZXIvZGlzdC92dWUtc2ltcGxlLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci1jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFubmVyL0Jhbm5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFubmVyL0Jhbm5lci52dWU/N2M1NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby9WaWRlby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vVmlkZW8udnVlPzBiMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vVmlkZW8udnVlPzIxMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vVmlkZW8udnVlP2E2ZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlLnZ1ZT84NmMxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZXIudnVlPzkxNmEiXSwibmFtZXMiOlsiZm9ybWF0Q29udGVudCIsImlubGluZUNvbnRlbnQiLCJkYXRhIiwiQ29udGVudFNlcnZpY2UiLCJlbmRwb2ludCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImVyciIsImdlbmVyYXRlSW1hZ2VVcmwiLCJkZWZhdWx0SG9zdCIsIm5hbWUiLCJnZW5lcmF0ZVZpZGVvVXJsIiwiQ29tcHV0ZWQiLCJjb21wdXRlZCIsImhhc0NvbnRlbnRVcmwiLCJjb250ZW50IiwiUHJvcHMiLCJwcm9wcyIsInR5cGUiLCJTdHJpbmciLCJPYmplY3QiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInZhbHVlIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJpbmxpbmVDaGlsZENvbnRlbnQiLCJwYXJlbnROb2RlIiwiY29udGVudEtleU1hcCIsInJlc3VsdGFudE5vZGUiLCJmb3JFYWNoIiwia2V5IiwiY2hpbGRLZXkiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtIiwiaSIsImlubGluZWRDb250ZW50IiwicmVzdWx0IiwicHVzaCIsIm1ha2VJbWFnZSIsInVybCIsImltYWdlIiwiYWx0VGV4dCIsImltYWdlQWx0VGV4dCIsImxpbmsiLCJJbWFnZUNvbnRlbnRTZXJ2aWNlIiwiZ2V0Q29udGVudCIsImZvcm1hdHRlZCIsIlZ1ZSIsImVsIiwicmVuZGVyIiwiaCIsIiRlbCIsImF0dHJpYnV0ZXMiLCJzbGlkZSIsIm1ha2VCYW5uZXIiLCJiYW5uZXIiLCJtYWtlVmlkZW8iLCJ2aWRlbyIsImZvcm1hdFNsaWRlcyIsInNsaWRlcyIsIm5ld1NsaWRlc0FycmF5Iiwic2xpZGVzQXJyYXkiLCJtYXAiLCJmb3JtYXRPcHRpb25zIiwibG9vcCIsIm5hdmlnYXRpb25Eb3RzIiwic3BlZWQiLCJ0cmFuc2l0aW9uVHlwZSIsIm5hdiIsImF1dG9wbGF5IiwibW9kZSIsIlNsaWRlckNvbnRlbnRTZXJ2aWNlIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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aUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7QUNIRCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBLGNBQWM7Ozs7Ozs7QUNBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7K0NDSEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7O0FDMUJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7d0RDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGOztBQUVqRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQUk7QUFDZDtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1Q0FBdUM7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEIsVUFBVSxPQUFPO0FBQ2pCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FB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O0FBQ1M7QUFDVDtBQUNBO0FBQ0c7QUFDSjtBQUNBO0FBQ0M7QUFDRztBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ0U7QUFDQztBQUNMO0FBQ0c7QUFDTjtBQUNLOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTs7QUFFbEI7QUFDQTtBQUNBLDRDQUE0QyxrREFBa0Q7QUFDOUYsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixxQ0FBcUM7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QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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L0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVMsdUJBQXVCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdDQUFnQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdFQUFnRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDLDhCQUE4QixTQUFTLGlCQUFpQixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJjb21wb25lbnRzL3NsaWRlci5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmQ4MjRlM2RkYjM3NDIwZWIzMzgiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VzNi1wcm9taXNlLXByb21pc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBpbmxpbmVDb250ZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL2FtcGxpZW5jZS1zZGsnO1xuXG5jb25zdCBmb3JtYXRDb250ZW50ID0gZGF0YSA9PiBpbmxpbmVDb250ZW50KGRhdGEpWzBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGVuZHBvaW50KSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXMuZW5kcG9pbnQpLnRoZW4oXG4gICAgICBkYXRhID0+IGZvcm1hdENvbnRlbnQoZGF0YSksXG4gICAgICBlcnIgPT4gZXJyXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUltYWdlVXJsID0gKHsgZGVmYXVsdEhvc3QsIGVuZHBvaW50LCBuYW1lIH0pID0+IGBodHRwczovLyR7ZGVmYXVsdEhvc3R9L2kvJHtlbmRwb2ludH0vJHtuYW1lfS5qcGVnYDtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVmlkZW9VcmwgPSAoeyBkZWZhdWx0SG9zdCwgZW5kcG9pbnQsIG5hbWUgfSkgPT4gYGh0dHBzOi8vJHtkZWZhdWx0SG9zdH0vdi8ke2VuZHBvaW50fS8ke25hbWV9L21wNF83MjBwYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvYW1wbGllbmNlLWNvbnRlbnQtc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiZXhwb3J0IGNvbnN0IENvbXB1dGVkID0ge1xuICBjb21wdXRlZDoge1xuICAgIGhhc0NvbnRlbnRVcmwoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUHJvcHMgPSB7XG4gIHByb3BzOiB7XG4gICAgY29udGVudDoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9taXhpbnMuanMiLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMy4xXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsLkVTNlByb21pc2UgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5cbnZhciBfaXNBcnJheSA9IHVuZGVmaW5lZDtcbmlmICghQXJyYXkuaXNBcnJheSkge1xuICBfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbn0gZWxzZSB7XG4gIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbn1cblxudmFyIGlzQXJyYXkgPSBfaXNBcnJheTtcblxudmFyIGxlbiA9IDA7XG52YXIgdmVydHhOZXh0ID0gdW5kZWZpbmVkO1xudmFyIGN1c3RvbVNjaGVkdWxlckZuID0gdW5kZWZpbmVkO1xuXG52YXIgYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICBxdWV1ZVtsZW5dID0gY2FsbGJhY2s7XG4gIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICBsZW4gKz0gMjtcbiAgaWYgKGxlbiA9PT0gMikge1xuICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICBpZiAoY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgIGN1c3RvbVNjaGVkdWxlckZuKGZsdXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xufVxuXG5mdW5jdGlvbiBzZXRBc2FwKGFzYXBGbikge1xuICBhc2FwID0gYXNhcEZuO1xufVxuXG52YXIgYnJvd3NlcldpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xudmFyIGJyb3dzZXJHbG9iYWwgPSBicm93c2VyV2luZG93IHx8IHt9O1xudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICh7fSkudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4vLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxudmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuLy8gbm9kZVxuZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG59XG5cbi8vIHZlcnR4XG5mdW5jdGlvbiB1c2VWZXJ0eFRpbWVyKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZlcnR4TmV4dChmbHVzaCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gIHZhciBpdGVyYXRpb25zID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5kYXRhID0gaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDI7XG4gIH07XG59XG5cbi8vIHdlYiB3b3JrZXJcbmZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBlczYtcHJvbWlzZSB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbiAgLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG4gIHZhciBnbG9iYWxTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU2V0VGltZW91dChmbHVzaCwgMSk7XG4gIH07XG59XG5cbnZhciBxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcblxuICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICBxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBhdHRlbXB0VmVydHgoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHIgPSByZXF1aXJlO1xuICAgIHZhciB2ZXJ0eCA9IHIoJ3ZlcnR4Jyk7XG4gICAgdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICByZXR1cm4gdXNlVmVydHhUaW1lcigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbiAgfVxufVxuXG52YXIgc2NoZWR1bGVGbHVzaCA9IHVuZGVmaW5lZDtcbi8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG5pZiAoaXNOb2RlKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VOZXh0VGljaygpO1xufSBlbHNlIGlmIChCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xufSBlbHNlIGlmIChpc1dvcmtlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTWVzc2FnZUNoYW5uZWwoKTtcbn0gZWxzZSBpZiAoYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSBhdHRlbXB0VmVydHgoKTtcbn0gZWxzZSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VTZXRUaW1lb3V0KCk7XG59XG5cbmZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cbiAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaWYgKGNoaWxkW1BST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICBtYWtlUHJvbWlzZShjaGlsZCk7XG4gIH1cblxuICB2YXIgX3N0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICBpZiAoX3N0YXRlKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IF9hcmd1bWVudHNbX3N0YXRlIC0gMV07XG4gICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrKF9zdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG4gIHBhc3NlZCBgdmFsdWVgLiBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVzb2x2ZSgxKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZXNvbHZlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHZhbHVlIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG4gIGB2YWx1ZWBcbiovXG5mdW5jdGlvbiByZXNvbHZlKG9iamVjdCkge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3Jlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDE2KTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBQRU5ESU5HID0gdm9pZCAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xuXG52YXIgR0VUX1RIRU5fRVJST1IgPSBuZXcgRXJyb3JPYmplY3QoKTtcblxuZnVuY3Rpb24gc2VsZkZ1bGZpbGxtZW50KCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG59XG5cbmZ1bmN0aW9uIGNhbm5vdFJldHVybk93bigpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbihwcm9taXNlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgIHJldHVybiBHRVRfVEhFTl9FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgdHJ5IHtcbiAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgYXNhcChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICB2YXIgZXJyb3IgPSB0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgX3JlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfVxuICB9LCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gRlVMRklMTEVEKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQpIHtcbiAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiYgdGhlbiQkID09PSB0aGVuICYmIG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gcmVzb2x2ZSkge1xuICAgIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGVuJCQgPT09IEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKHRoZW4kJCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuJCQpKSB7XG4gICAgICBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCBzZWxmRnVsZmlsbG1lbnQoKSk7XG4gIH0gZWxzZSBpZiAob2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBnZXRUaGVuKHZhbHVlKSk7XG4gIH0gZWxzZSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICB9XG5cbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG5cbiAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgIGFzYXAocHVibGlzaCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICBhc2FwKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIF9zdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gIHZhciBsZW5ndGggPSBfc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgX3N1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgUkVKRUNURURdID0gb25SZWplY3Rpb247XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwYXJlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdW5kZWZpbmVkLFxuICAgICAgY2FsbGJhY2sgPSB1bmRlZmluZWQsXG4gICAgICBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xufVxuXG5mdW5jdGlvbiBFcnJvck9iamVjdCgpIHtcbiAgdGhpcy5lcnJvciA9IG51bGw7XG59XG5cbnZhciBUUllfQ0FUQ0hfRVJST1IgPSBuZXcgRXJyb3JPYmplY3QoKTtcblxuZnVuY3Rpb24gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICByZXR1cm4gVFJZX0NBVENIX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdmFyIGhhc0NhbGxiYWNrID0gaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZCxcbiAgICAgIGVycm9yID0gdW5kZWZpbmVkLFxuICAgICAgc3VjY2VlZGVkID0gdW5kZWZpbmVkLFxuICAgICAgZmFpbGVkID0gdW5kZWZpbmVkO1xuXG4gIGlmIChoYXNDYWxsYmFjaykge1xuICAgIHZhbHVlID0gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICBpZiAodmFsdWUgPT09IFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIC8vIG5vb3BcbiAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgdHJ5IHtcbiAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIGUpO1xuICB9XG59XG5cbnZhciBpZCA9IDA7XG5mdW5jdGlvbiBuZXh0SWQoKSB7XG4gIHJldHVybiBpZCsrO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gIHByb21pc2VbUFJPTUlTRV9JRF0gPSBpZCsrO1xuICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xufVxuXG5mdW5jdGlvbiBFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoIXRoaXMucHJvbWlzZVtQUk9NSVNFX0lEXSkge1xuICAgIG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gIH1cblxuICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMubGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9yZWplY3QodGhpcy5wcm9taXNlLCB2YWxpZGF0aW9uRXJyb3IoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgdmFyIF9pbnB1dCA9IHRoaXMuX2lucHV0O1xuXG4gIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLl9lYWNoRW50cnkoX2lucHV0W2ldLCBpKTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uIChlbnRyeSwgaSkge1xuICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gIHZhciByZXNvbHZlJCQgPSBjLnJlc29sdmU7XG5cbiAgaWYgKHJlc29sdmUkJCA9PT0gcmVzb2x2ZSkge1xuICAgIHZhciBfdGhlbiA9IGdldFRoZW4oZW50cnkpO1xuXG4gICAgaWYgKF90aGVuID09PSB0aGVuICYmIGVudHJ5Ll9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgfSBlbHNlIGlmIChjID09PSBQcm9taXNlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKG5vb3ApO1xuICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgX3RoZW4pO1xuICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24gKHJlc29sdmUkJCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSQkKGVudHJ5KTtcbiAgICAgIH0pLCBpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUkJChlbnRyeSksIGkpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24gKHN0YXRlLCBpLCB2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24gKHByb21pc2UsIGkpIHtcbiAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gIHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KFJFSkVDVEVELCBpLCByZWFzb24pO1xuICB9KTtcbn07XG5cbi8qKlxuICBgUHJvbWlzZS5hbGxgIGFjY2VwdHMgYW4gYXJyYXkgb2YgcHJvbWlzZXMsIGFuZCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2hcbiAgaXMgZnVsZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzIGZvciB0aGUgcGFzc2VkIHByb21pc2VzLCBvclxuICByZWplY3RlZCB3aXRoIHRoZSByZWFzb24gb2YgdGhlIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIGJlIHJlamVjdGVkLiBJdCBjYXN0cyBhbGxcbiAgZWxlbWVudHMgb2YgdGhlIHBhc3NlZCBpdGVyYWJsZSB0byBwcm9taXNlcyBhcyBpdCBydW5zIHRoaXMgYWxnb3JpdGhtLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZXNvbHZlKDIpO1xuICBsZXQgcHJvbWlzZTMgPSByZXNvbHZlKDMpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gVGhlIGFycmF5IGhlcmUgd291bGQgYmUgWyAxLCAyLCAzIF07XG4gIH0pO1xuICBgYGBcblxuICBJZiBhbnkgb2YgdGhlIGBwcm9taXNlc2AgZ2l2ZW4gdG8gYGFsbGAgYXJlIHJlamVjdGVkLCB0aGUgZmlyc3QgcHJvbWlzZVxuICB0aGF0IGlzIHJlamVjdGVkIHdpbGwgYmUgZ2l2ZW4gYXMgYW4gYXJndW1lbnQgdG8gdGhlIHJldHVybmVkIHByb21pc2VzJ3NcbiAgcmVqZWN0aW9uIGhhbmRsZXIuIEZvciBleGFtcGxlOlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZWplY3QobmV3IEVycm9yKFwiMlwiKSk7XG4gIGxldCBwcm9taXNlMyA9IHJlamVjdChuZXcgRXJyb3IoXCIzXCIpKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zIGJlY2F1c2UgdGhlcmUgYXJlIHJlamVjdGVkIHByb21pc2VzIVxuICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgIC8vIGVycm9yLm1lc3NhZ2UgPT09IFwiMlwiXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIGFsbFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IGVudHJpZXMgYXJyYXkgb2YgcHJvbWlzZXNcbiAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIGFsbCBgcHJvbWlzZXNgIGhhdmUgYmVlblxuICBmdWxmaWxsZWQsIG9yIHJlamVjdGVkIGlmIGFueSBvZiB0aGVtIGJlY29tZSByZWplY3RlZC5cbiAgQHN0YXRpY1xuKi9cbmZ1bmN0aW9uIGFsbChlbnRyaWVzKSB7XG4gIHJldHVybiBuZXcgRW51bWVyYXRvcih0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xufVxuXG4vKipcbiAgYFByb21pc2UucmFjZWAgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoIGlzIHNldHRsZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZVxuICBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBzZXR0bGUuXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDInKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyByZXN1bHQgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgaXQgd2FzIHJlc29sdmVkIGJlZm9yZSBwcm9taXNlMVxuICAgIC8vIHdhcyByZXNvbHZlZC5cbiAgfSk7XG4gIGBgYFxuXG4gIGBQcm9taXNlLnJhY2VgIGlzIGRldGVybWluaXN0aWMgaW4gdGhhdCBvbmx5IHRoZSBzdGF0ZSBvZiB0aGUgZmlyc3RcbiAgc2V0dGxlZCBwcm9taXNlIG1hdHRlcnMuIEZvciBleGFtcGxlLCBldmVuIGlmIG90aGVyIHByb21pc2VzIGdpdmVuIHRvIHRoZVxuICBgcHJvbWlzZXNgIGFycmF5IGFyZ3VtZW50IGFyZSByZXNvbHZlZCwgYnV0IHRoZSBmaXJzdCBzZXR0bGVkIHByb21pc2UgaGFzXG4gIGJlY29tZSByZWplY3RlZCBiZWZvcmUgdGhlIG90aGVyIHByb21pc2VzIGJlY2FtZSBmdWxmaWxsZWQsIHRoZSByZXR1cm5lZFxuICBwcm9taXNlIHdpbGwgYmVjb21lIHJlamVjdGVkOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3Byb21pc2UgMicpKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVuc1xuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIHByb21pc2UgMiBiZWNhbWUgcmVqZWN0ZWQgYmVmb3JlXG4gICAgLy8gcHJvbWlzZSAxIGJlY2FtZSBmdWxmaWxsZWRcbiAgfSk7XG4gIGBgYFxuXG4gIEFuIGV4YW1wbGUgcmVhbC13b3JsZCB1c2UgY2FzZSBpcyBpbXBsZW1lbnRpbmcgdGltZW91dHM6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBQcm9taXNlLnJhY2UoW2FqYXgoJ2Zvby5qc29uJyksIHRpbWVvdXQoNTAwMCldKVxuICBgYGBcblxuICBAbWV0aG9kIHJhY2VcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyB0byBvYnNlcnZlXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHNldHRsZXMgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBmaXJzdCBwYXNzZWRcbiAgcHJvbWlzZSB0byBzZXR0bGUuXG4qL1xuZnVuY3Rpb24gcmFjZShlbnRyaWVzKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKCFpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yZWplY3RgIHJldHVybnMgYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIHBhc3NlZCBgcmVhc29uYC5cbiAgSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVqZWN0XG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHJlYXNvbiB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aC5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgZ2l2ZW4gYHJlYXNvbmAuXG4qL1xuZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xufVxuXG5mdW5jdGlvbiBuZWVkc05ldygpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbn1cblxuLyoqXG4gIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gIFRlcm1pbm9sb2d5XG4gIC0tLS0tLS0tLS0tXG5cbiAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgQmFzaWMgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLVxuXG4gIGBgYGpzXG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gb24gc3VjY2Vzc1xuICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgLy8gb24gZmFpbHVyZVxuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIEFkdmFuY2VkIFVzYWdlOlxuICAtLS0tLS0tLS0tLS0tLS1cblxuICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICBgYGBqc1xuICBQcm9taXNlLmFsbChbXG4gICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9KTtcbiAgYGBgXG5cbiAgQGNsYXNzIFByb21pc2VcbiAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAY29uc3RydWN0b3JcbiovXG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gIHRoaXNbUFJPTUlTRV9JRF0gPSBuZXh0SWQoKTtcbiAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgaWYgKG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcbiAgICB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSA/IGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IG5lZWRzTmV3KCk7XG4gIH1cbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5Qcm9taXNlLnJhY2UgPSByYWNlO1xuUHJvbWlzZS5yZXNvbHZlID0gcmVzb2x2ZTtcblByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gc2V0U2NoZWR1bGVyO1xuUHJvbWlzZS5fc2V0QXNhcCA9IHNldEFzYXA7XG5Qcm9taXNlLl9hc2FwID0gYXNhcDtcblxuUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQcm9taXNlLFxuXG4gIC8qKlxuICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIENoYWluaW5nXG4gICAgLS0tLS0tLS1cbiAgXG4gICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgfSk7XG4gIFxuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgIH0pO1xuICAgIGBgYFxuICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBBc3NpbWlsYXRpb25cbiAgICAtLS0tLS0tLS0tLS1cbiAgXG4gICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgU2ltcGxlIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICBcbiAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcmVzdWx0O1xuICBcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBFcnJiYWNrIEV4YW1wbGVcbiAgXG4gICAgYGBganNcbiAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBQcm9taXNlIEV4YW1wbGU7XG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICBcbiAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgYXV0aG9yLCBib29rcztcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gIFxuICAgIEVycmJhY2sgRXhhbXBsZVxuICBcbiAgICBgYGBqc1xuICBcbiAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG4gIFxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcbiAgXG4gICAgfVxuICBcbiAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFByb21pc2UgRXhhbXBsZTtcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRBdXRob3IoKS5cbiAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgdGhlblxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuICB0aGVuOiB0aGVuLFxuXG4gIC8qKlxuICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuICBcbiAgICBgYGBqc1xuICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgIH1cbiAgXG4gICAgLy8gc3luY2hyb25vdXNcbiAgICB0cnkge1xuICAgICAgZmluZEF1dGhvcigpO1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH1cbiAgXG4gICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQG1ldGhvZCBjYXRjaFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG4gICdjYXRjaCc6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICB2YXIgbG9jYWwgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICBpZiAoUCkge1xuICAgICAgICB2YXIgcHJvbWlzZVRvU3RyaW5nID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2VUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIHNpbGVudGx5IGlnbm9yZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlVG9TdHJpbmcgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbC5Qcm9taXNlID0gUHJvbWlzZTtcbn1cblxucG9seWZpbGwoKTtcbi8vIFN0cmFuZ2UgY29tcGF0Li5cblByb21pc2UucG9seWZpbGwgPSBwb2x5ZmlsbDtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cbnJldHVybiBQcm9taXNlO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM2LXByb21pc2UubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJleHBvcnQgY29uc3QgaW5saW5lQ2hpbGRDb250ZW50ID0gKHBhcmVudE5vZGUsIGNvbnRlbnRLZXlNYXApID0+IHtcbiAgY29uc3QgcmVzdWx0YW50Tm9kZSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudE5vZGUpO1xuICBPYmplY3Qua2V5cyhyZXN1bHRhbnROb2RlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdGFudE5vZGVba2V5XTtcbiAgICBpZiAoa2V5ID09PSAnQGlkJykge1xuICAgICAgaWYgKCFjb250ZW50S2V5TWFwW3ZhbHVlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhjb250ZW50S2V5TWFwW3ZhbHVlXSkuZm9yRWFjaCgoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgcmVzdWx0YW50Tm9kZVtjaGlsZEtleV0gPSBjb250ZW50S2V5TWFwW3ZhbHVlXVtjaGlsZEtleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhyZXN1bHRhbnROb2RlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdGFudE5vZGVba2V5XTtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0YW50Tm9kZVtrZXldID0gaW5saW5lQ2hpbGRDb250ZW50KHJlc3VsdGFudE5vZGVba2V5XSwgY29udGVudEtleU1hcCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICByZXN1bHRhbnROb2RlW2tleV1baV0gPSBpbmxpbmVDaGlsZENvbnRlbnQocmVzdWx0YW50Tm9kZVtrZXldW2ldLCBjb250ZW50S2V5TWFwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRhbnROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlubGluZUNvbnRlbnQgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgaW5saW5lZENvbnRlbnQgPSBbXTtcbiAgY29uc3QgY29udGVudEtleU1hcCA9IHt9O1xuICBpZiAoZGF0YSkge1xuICAgIGRhdGFbJ0BncmFwaCddLmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnRlbnRLZXlNYXBbY29udGVudFsnQGlkJ11dID0gY29udGVudDtcbiAgICB9KTtcbiAgICBkYXRhLnJlc3VsdC5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0WydAaWQnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZW50ID0gaW5saW5lQ2hpbGRDb250ZW50KHsgJ0BpZCc6IHJlc3VsdFsnQGlkJ10gfSwgY29udGVudEtleU1hcCk7XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICBpbmxpbmVkQ29udGVudC5wdXNoKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBpbmxpbmVkQ29udGVudDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2FtcGxpZW5jZS1zZGsuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMiLCIvLyBDaGlsZE5vZGUucmVtb3ZlXG4oZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighKFwicmVtb3ZlXCIgaW4gRWxlbWVudC5wcm90b3R5cGUpKXtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpe1xuICAgICAgaWYodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2hpbGROb2RlLnJlbW92ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cGxhY2Vob2xkZXIgdi1pZj1cImhhc0Vycm9yXCIgLz5cbiAgICA8YSA6aHJlZj1cImhyZWZcIj5cbiAgICAgIDxpbWcgOnNyYz1cImltYWdlQ29udGVudC51cmxcIiA6YWx0PVwiaW1hZ2VDb250ZW50LmFsdFRleHRcIi8+XG4gICAgPC9hPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBDb250ZW50IGZyb20gXCIuL2ltYWdlLWNvbnRlbnRcIjtcbiAgaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuLi9wbGFjZWhvbGRlci9QbGFjZWhvbGRlclwiO1xuICBpbXBvcnQgeyBQcm9wcywgQ29tcHV0ZWQgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvbWl4aW5zJztcblxuICBsZXQgaW1hZ2VDb250ZW50O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtQcm9wcywgQ29tcHV0ZWRdLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgIGltYWdlQ29udGVudDoge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBocmVmKCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvbnRlbnQubGluaykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlQ29udGVudC5saW5rXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcjJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzQ29udGVudFVybCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgaWYgKHRoaXMuaGFzQ29udGVudFVybCkge1xuICAgICAgICBpbWFnZUNvbnRlbnQgPSBuZXcgQ29udGVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5oYXNDb250ZW50VXJsKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgIGltYWdlQ29udGVudC5mb3JtYXRJbWFnZUNvbnRlbnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB2bS5pbWFnZUNvbnRlbnQgPSBpbWFnZUNvbnRlbnQuY29udGVudFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgdm0uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW1hZ2VDb250ZW50ID0gdGhpcy5jb250ZW50XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBQbGFjZWhvbGRlclxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbWFnZS9JbWFnZS52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjFlYzNiYjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXNhc3MtbG9hZGVyIXBvc3Rjc3MtbG9hZGVyP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ltYWdlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW1hZ2UudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mMWVjM2JiMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW1hZ2UudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWYxZWMzYmIyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2ltYWdlL0ltYWdlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mMWVjM2JiMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWYxZWMzYmIyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaW1hZ2UvSW1hZ2UudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTUyNWMxNTdcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXNhc3MtbG9hZGVyIXBvc3Rjc3MtbG9hZGVyP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BsYWNlaG9sZGVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IG51bGxcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTI1YzE1N1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGxhY2Vob2xkZXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTE1MjVjMTU3XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNTI1YzE1N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE1MjVjMTU3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcGxhY2Vob2xkZXIvUGxhY2Vob2xkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZnVuY3Rpb24gZ2V0Qm9keSAoKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudCxcbiAgICAgIGJvZHkgPSBkb2MuYm9keTtcblxuICBpZiAoIWJvZHkpIHtcbiAgICBib2R5ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGJvZHk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0Qm9keS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRvY0VsZW1lbnQgfSBmcm9tICcuL2RvY0VsZW1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RmFrZUJvZHkgKGJvZHkpIHtcbiAgdmFyIGRvY092ZXJmbG93ID0gJyc7XG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBkb2NPdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgLy9hdm9pZCBjcmFzaGluZyBJRTgsIGlmIGJhY2tncm91bmQgaW1hZ2UgaXMgdXNlZFxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIC8vU2FmYXJpIDUuMTMvNS4xLjQgT1NYIHN0b3BzIGxvYWRpbmcgaWYgOjotd2Via2l0LXNjcm9sbGJhciBpcyB1c2VkIGFuZCBzY3JvbGxiYXJzIGFyZSB2aXNpYmxlXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICB9XG5cbiAgcmV0dXJuIGRvY092ZXJmbG93O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3NldEZha2VCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL2NoaWxkTm9kZS5yZW1vdmUnO1xuaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZha2VCb2R5IChib2R5LCBkb2NPdmVyZmxvdykge1xuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5yZW1vdmUoKTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Jlc2V0RmFrZUJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIHN0cikge1xuICByZXR1cm4gZWwuY2xhc3NOYW1lLmluZGV4T2Yoc3RyKSA+PSAwO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2hhc0NsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0F0dHIoZWwsIGF0dHIpIHtcbiAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShhdHRyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oYXNBdHRyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjFlYzNiYjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW1hZ2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwZDE3YTg0OFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWYxZWMzYmIyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWYxZWMzYmIyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ltYWdlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWYxZWMzYmIyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9pbWFnZS9JbWFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmltZ1tkYXRhLXYtZjFlYzNiYjJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWYxZWMzYmIyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9pbWFnZS9JbWFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgQ29udGVudFNlcnZpY2UsIHsgZ2VuZXJhdGVJbWFnZVVybCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9hbXBsaWVuY2UtY29udGVudC1zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IG1ha2VJbWFnZSA9IGNvbnRlbnQgPT4gKHtcbiAgdHlwZTogJ2ltYWdlJyxcbiAgdXJsOiBnZW5lcmF0ZUltYWdlVXJsKGNvbnRlbnQuaW1hZ2UpLFxuICBhbHRUZXh0OiBjb250ZW50LmltYWdlQWx0VGV4dCxcbiAgbGluazogY29udGVudC5saW5rXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDb250ZW50U2VydmljZSBleHRlbmRzIENvbnRlbnRTZXJ2aWNlIHtcbiAgZm9ybWF0SW1hZ2VDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS50aGVuKChmb3JtYXR0ZWQpID0+IHtcbiAgICAgIHRoaXMuY29udGVudCA9IG1ha2VJbWFnZShmb3JtYXR0ZWQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbWFnZS9pbWFnZS1jb250ZW50LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTUyNWMxNTdcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGxhY2Vob2xkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwODllNTZmM1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE1MjVjMTU3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BsYWNlaG9sZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE1MjVjMTU3XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BsYWNlaG9sZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTE1MjVjMTU3XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9wbGFjZWhvbGRlci9QbGFjZWhvbGRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdltkYXRhLXYtMTUyNWMxNTddIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5zdmdbZGF0YS12LTE1MjVjMTU3XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTUyNWMxNTdcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGZpbGw6IFwiI2E2YTdhOFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyNFwiLFxuICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGF0aFwiLCB7IGF0dHJzOiB7IGQ6IFwiTTAgMGgyNHYyNEgwelwiLCBmaWxsOiBcIm5vbmVcIiB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBkOlxuICAgICAgICAgICAgICBcIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE1MjVjMTU3XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTUyNWMxNTdcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5oYXNFcnJvciA/IF9jKFwicGxhY2Vob2xkZXJcIikgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaHJlZiB9IH0sIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmltYWdlQ29udGVudC51cmwsIGFsdDogX3ZtLmltYWdlQ29udGVudC5hbHRUZXh0IH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWYxZWMzYmIyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjFlYzNiYjJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2ltYWdlL0ltYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2xpZGVyLXdyYXBwZXJcIj5cbiAgICA8c3Bpbm5lciBjbGFzcz1cInNwaW5uZXJcIiB2LWlmPVwiaXNMb2FkaW5nICYmICFoYXNFcnJvclwiIDpzaXplPVwiODhcIiA6bGluZS1zaXplPVwiMTBcIiBsaW5lLWZnLWNvbG9yPVwiI2ZmOTcxOFwiIGxpbmUtYmctY29sb3I9XCIjZDRkNGQ0XCIvPlxuICAgIDxwbGFjZWhvbGRlciB2LWlmPVwiaGFzRXJyb3JcIiAvPlxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidG5zLW91dGVyIHRucy1ob3Jpem9udGFsIHRucy1zdWJwaXhlbCB0bnMtaXRlbVwiPlxuICAgICAgPGRpdiB2LWZvcj1cInNsaWRlIGluIHNsaWRlckNvbnRlbnQuc2xpZGVzXCIgOmtleT1cInNsaWRlLmluZGV4XCI+XG4gICAgICAgIDxzbGlkZSA6Y29udGVudD1cInNsaWRlXCI+PC9zbGlkZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+IFxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyB0bnMgfSBmcm9tIFwidGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyLm1vZHVsZVwiO1xuICBpbXBvcnQgU3Bpbm5lciBmcm9tIFwidnVlLXNpbXBsZS1zcGlubmVyXCI7XG4gIGltcG9ydCBDb250ZW50IGZyb20gXCIuL3NsaWRlci1jb250ZW50XCI7XG4gIGltcG9ydCBTbGlkZSBmcm9tIFwiLi9TbGlkZVwiO1xuICBpbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL3BsYWNlaG9sZGVyL1BsYWNlaG9sZGVyXCI7XG4gIGltcG9ydCB7IFByb3BzLCBDb21wdXRlZCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9taXhpbnMnO1xuXG4gIGxldCBzbGlkZXJDb250ZW50O1xuICBsZXQgc2xpZGVyID0gbnVsbDtcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJTbGlkZXJcIixcbiAgICBtaXhpbnM6IFtQcm9wcywgQ29tcHV0ZWRdLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgc2xpZGVyQ29udGVudDoge30sXG4gICAgICAgIHNsaWRlck9wdGlvbnM6IHtcbiAgICAgICAgICBjb250YWluZXI6IFwiLnRucy1vdXRlclwiLFxuICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgICBhdXRvcGxheUJ1dHRvbk91dHB1dDogZmFsc2UsXG4gICAgICAgICAgbW91c2VEcmFnOiB0cnVlLFxuICAgICAgICAgIGNvbnRyb2xzVGV4dDogW1xuICAgICAgICAgICAgJzxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz4nLFxuICAgICAgICAgICAgJzxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCIvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PC9zdmc+J1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBoYXNDb250ZW50VXJsKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICBpZiAodGhpcy5oYXNDb250ZW50VXJsKSB7XG4gICAgICAgIHNsaWRlckNvbnRlbnQgPSBuZXcgQ29udGVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5oYXNDb250ZW50VXJsKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgIHNsaWRlckNvbnRlbnQuZm9ybWF0U2xpZGVyQ29udGVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHZtLnNsaWRlckNvbnRlbnQgPSBzbGlkZXJDb250ZW50LmNvbnRlbnRcbiAgICAgICAgICB2bS5zbGlkZXJPcHRpb25zID0gey4uLnZtLnNsaWRlck9wdGlvbnMsIC4uLnNsaWRlckNvbnRlbnQuY29udGVudC5vcHRpb25zfVxuICAgICAgICAgIHZtLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgdm0uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2xpZGVyT3B0aW9ucyA9IHsuLi50aGlzLnNsaWRlck9wdGlvbnMsIC4uLnRoaXMuY29udGVudC5vcHRpb25zfVxuICAgICAgICB0aGlzLnNsaWRlckNvbnRlbnQgPSB0aGlzLmNvbnRlbnRcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICBpZiAoc2xpZGVyID09PSBudWxsKSB7XG4gICAgICAgIHNsaWRlciA9IHRucyh0aGlzLnNsaWRlck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgU2xpZGUsXG4gICAgICBTcGlubmVyLFxuICAgICAgUGxhY2Vob2xkZXJcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIEBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMuc2Nzc1wiO1xuICBAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcblxuICAuc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxuICB9XG5cbiAgLnNsaWRlci13cmFwcGVyIHtcbiAgICBAaW5jbHVkZSBzdHJldGNoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC8vIHRucyBhZGRzIDEgcHggdW4tb3ZlcmZsb3duLiAgIFxuICAudG5zLWlubmVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxcHgpO1xuICB9XG5cbiAgLnRucy1ob3Jpem9udGFsLnRucy1zdWJwaXhlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICA+IC50bnMtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gIH1cblxuICAudG5zLW91dGVyLFxuICAudG5zLW91dGVyIGRpdiB7XG4gICAgQGluY2x1ZGUgc3RyZXRjaDtcbiAgfVxuXG4gIC50bnMtb3V0ZXIge1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC50bnMtY29udHJvbHMge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRucy1uYXYge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0yMGRlZyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0yMGRlZyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudG5zLW5hdi1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50bnMtY29udHJvbHMge1xuICAgICAgdG9wOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLnRucy1mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIC50bnMtbm9ybWFsLCAudG5zLWZhZGVPdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgLnRucy1nYWxsZXJ5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgID4gLnRucy1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDBzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDBzO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcbiAgICB9XG4gIH1cblxuICAudG5zLWNvbnRyb2xzIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9zbGlkZXIvU2xpZGVyLnZ1ZSIsImV4cG9ydCB2YXIgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9kb2NFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNOb2RlTGlzdCB9IGZyb20gXCIuL2lzTm9kZUxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJzKGVscywgYXR0cnMpIHtcbiAgZWxzID0gKGlzTm9kZUxpc3QoZWxzKSB8fCBlbHMgaW5zdGFuY2VvZiBBcnJheSkgPyBlbHMgOiBbZWxzXTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhdHRycykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7IHJldHVybjsgfVxuXG4gIGZvciAodmFyIGkgPSBlbHMubGVuZ3RoOyBpLS07KSB7XG4gICAgZm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgIGVsc1tpXS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRBdHRycy5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBpc05vZGVMaXN0KGVsKSB7XG4gIC8vIE9ubHkgTm9kZUxpc3QgaGFzIHRoZSBcIml0ZW0oKVwiIGZ1bmN0aW9uXG4gIHJldHVybiB0eXBlb2YgZWwuaXRlbSAhPT0gXCJ1bmRlZmluZWRcIjsgXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaXNOb2RlTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tIFwiLi9pc05vZGVMaXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRycyhlbHMsIGF0dHJzKSB7XG4gIGVscyA9IChpc05vZGVMaXN0KGVscykgfHwgZWxzIGluc3RhbmNlb2YgQXJyYXkpID8gZWxzIDogW2Vsc107XG4gIGF0dHJzID0gKGF0dHJzIGluc3RhbmNlb2YgQXJyYXkpID8gYXR0cnMgOiBbYXR0cnNdO1xuXG4gIHZhciBhdHRyTGVuZ3RoID0gYXR0cnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gZWxzLmxlbmd0aDsgaS0tOykge1xuICAgIGZvciAodmFyIGogPSBhdHRyTGVuZ3RoOyBqLS07KSB7XG4gICAgICBlbHNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHJzW2pdKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9yZW1vdmVBdHRycy5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWUgaWYgdGhlIHBhc3NpdmUgcHJvcGVydHkgaXMgYWNjZXNzZWRcbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuZXhwb3J0IHZhciBwYXNzaXZlT3B0aW9uID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9wYXNzaXZlT3B0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxpbWFnZS1zbGlkZSB2LWlmPVwiaXNJbWFnZVwiIDpjb250ZW50PVwiY29udGVudFwiIC8+XG4gICAgPHZpZGVvLXNsaWRlIHYtaWY9XCJpc1ZpZGVvXCIgIDpjb250ZW50PVwiY29udGVudFwiLz5cbiAgICA8YmFubmVyLXNsaWRlIHYtaWY9XCJpc0Jhbm5lclwiIDpjb250ZW50PVwiY29udGVudFwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEltYWdlIGZyb20gXCIuLi9pbWFnZS9JbWFnZVwiXG4gIGltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2Jhbm5lci9CYW5uZXJcIlxuICBpbXBvcnQgVmlkZW8gZnJvbSBcIi4uL3ZpZGVvL1ZpZGVvXCJcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgaXNFbXB0eSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQudHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpc1ZpZGVvKCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50LnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlzQmFubmVyKCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50LnR5cGUgPT09ICdiYW5uZXInKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICdpbWFnZS1zbGlkZSc6IEltYWdlLFxuICAgICAgJ2Jhbm5lci1zbGlkZSc6IEJhbm5lcixcbiAgICAgICd2aWRlby1zbGlkZSc6IFZpZGVvXG4gICAgfVxuICB9XG48L3NjcmlwdD4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9zbGlkZXIvU2xpZGUudnVlIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxiYW5uZXItaW1hZ2UgOmNvbnRlbnQ9XCJjb250ZW50XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1hZ2UvSW1hZ2UnXG4gIGltcG9ydCB7IFByb3BzLCBDb21wdXRlZCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9qcy9taXhpbnMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtQcm9wcywgQ29tcHV0ZWRdLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgJ2Jhbm5lci1pbWFnZSc6IEltYWdlXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9iYW5uZXIvQmFubmVyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8dmlkZW8gY29udHJvbHM+XG4gICAgICA8c291cmNlIDpzcmM9XCJjb250ZW50LnVybFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgIDwvdmlkZW8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgUHJvcHMsIENvbXB1dGVkIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzL21peGlucyc7XG4gIFxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbUHJvcHMsIENvbXB1dGVkXSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPDxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy92aWRlby9WaWRlby52dWUiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FtcC1jYS1zbGlkZXInLFxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKFNsaWRlciwge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY29udGVudDogKHRoaXMuJGVsLmF0dHJpYnV0ZXNbJ2RhdGEtY29udGVudCddICYmIHRoaXMuJGVsLmF0dHJpYnV0ZXNbJ2RhdGEtY29udGVudCddLnZhbHVlLmxlbmd0aCA+IDAgPyB0aGlzLiRlbC5hdHRyaWJ1dGVzWydkYXRhLWNvbnRlbnQnXS52YWx1ZSA6IHt9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXItaW5zdGFuY2UuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJlYjFhZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFzYXNzLWxvYWRlciFwb3N0Y3NzLWxvYWRlcj97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TbGlkZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2xpZGVyLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2xpZGVyLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJlYjFhZTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TbGlkZXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcyZWIxYWUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzJlYjFhZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcyZWIxYWUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TbGlkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0ZGViMjQ5YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcyZWIxYWUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TbGlkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzJlYjFhZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NsaWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MmViMWFlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NsaWRlci9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNwaW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLnNsaWRlci13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRucy1pbm5lciB7XFxuICB3aWR0aDogY2FsYygxMDAlICsgMXB4KTtcXG59XFxuLnRucy1ob3Jpem9udGFsLnRucy1zdWJwaXhlbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4udG5zLWhvcml6b250YWwudG5zLXN1YnBpeGVsID4gLnRucy1pdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udG5zLW91dGVyLFxcbi50bnMtb3V0ZXIgZGl2IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnRucy1vdXRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udG5zLW91dGVyIC50bnMtY29udHJvbHMge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4udG5zLW91dGVyIC50bnMtY29udHJvbHMgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwO1xcbn1cXG4udG5zLW91dGVyIC50bnMtY29udHJvbHMgYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi50bnMtb3V0ZXIgLnRucy1jb250cm9scyBidXR0b246aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG5zLW91dGVyIC50bnMtbmF2IHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50bnMtb3V0ZXIgLnRucy1uYXYgYnV0dG9uIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICB3aWR0aDogMTRweDtcXG4gICAgICBtYXJnaW46IDFweDtcXG4gICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTIwZGVnKTtcXG4gICAgICAtbW96LXRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xcbiAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnRucy1vdXRlciAudG5zLW5hdiBidXR0b246Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRucy1vdXRlciAudG5zLW5hdiBidXR0b246aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG5zLW91dGVyIC50bnMtbmF2IC50bnMtbmF2LWFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTcxODtcXG59XFxuLnRucy1vdXRlciAudG5zLWNvbnRyb2xzIHtcXG4gICAgdG9wOiA1MCU7XFxufVxcbi50bnMtZmFkZUluIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50bnMtbm9ybWFsLCAudG5zLWZhZGVPdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4udG5zLWdhbGxlcnkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG59XFxuLnRucy1nYWxsZXJ5ID4gLnRucy1pdGVtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDBzO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcywgLXdlYmtpdC10cmFuc2Zvcm0gMHM7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwcztcXG59XFxuLnRucy1jb250cm9scyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzJlYjFhZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRm9ybWF0OiBFUyBNT0RVTEVcbi8vIFZlcnNpb246IDIuNC4wXG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcbmltcG9ydCAnLi9oZWxwZXJzL2tleXMnO1xuaW1wb3J0ICcuL2hlbHBlcnMvY2hpbGROb2RlLnJlbW92ZSc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2hlbHBlcnMvZXh0ZW5kJztcbmltcG9ydCB7IGNoZWNrU3RvcmFnZVZhbHVlIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrU3RvcmFnZVZhbHVlJztcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vaGVscGVycy9zZXRMb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgZ2V0U2xpZGVJZCB9IGZyb20gJy4vaGVscGVycy9nZXRTbGlkZUlkJztcbmltcG9ydCB7IGNhbGMgfSBmcm9tICcuL2hlbHBlcnMvY2FsYyc7XG5pbXBvcnQgeyBzdWJwaXhlbExheW91dCB9IGZyb20gJy4vaGVscGVycy9zdWJwaXhlbExheW91dCc7XG5pbXBvcnQgeyBtZWRpYXF1ZXJ5U3VwcG9ydCB9IGZyb20gJy4vaGVscGVycy9tZWRpYXF1ZXJ5U3VwcG9ydCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSAnLi9oZWxwZXJzL2NyZWF0ZVN0eWxlU2hlZXQnO1xuaW1wb3J0IHsgYWRkQ1NTUnVsZSB9IGZyb20gJy4vaGVscGVycy9hZGRDU1NSdWxlJztcbmltcG9ydCB7IGdldENzc1J1bGVzTGVuZ3RoIH0gZnJvbSAnLi9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoJztcbmltcG9ydCB7IHRvRGVncmVlIH0gZnJvbSAnLi9oZWxwZXJzL3RvRGVncmVlJztcbmltcG9ydCB7IGdldFRvdWNoRGlyZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uJztcbmltcG9ydCB7IGhhc0NsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL2hhc0NsYXNzJztcbmltcG9ydCB7IGFkZENsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZENsYXNzJztcbmltcG9ydCB7IHJlbW92ZUNsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUNsYXNzJztcbmltcG9ydCB7IGhhc0F0dHIgfSBmcm9tICcuL2hlbHBlcnMvaGFzQXR0cic7XG5pbXBvcnQgeyBnZXRBdHRyIH0gZnJvbSAnLi9oZWxwZXJzL2dldEF0dHInO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXR0cnMnO1xuaW1wb3J0IHsgcmVtb3ZlQXR0cnMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlQXR0cnMnO1xuaW1wb3J0IHsgaGlkZUVsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMvaGlkZUVsZW1lbnQnO1xuaW1wb3J0IHsgc2hvd0VsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMvc2hvd0VsZW1lbnQnO1xuaW1wb3J0IHsgaXNWaXNpYmxlIH0gZnJvbSAnLi9oZWxwZXJzL2lzVmlzaWJsZSc7XG5pbXBvcnQgeyBpbWFnZUxvYWRlZCB9IGZyb20gJy4vaGVscGVycy9pbWFnZUxvYWRlZCc7XG5pbXBvcnQgeyB3aGljaFByb3BlcnR5IH0gZnJvbSAnLi9oZWxwZXJzL3doaWNoUHJvcGVydHknO1xuaW1wb3J0IHsgZ2V0RW5kUHJvcGVydHkgfSBmcm9tICcuL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHknO1xuaW1wb3J0IHsgYWRkRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZEV2ZW50cyc7XG5pbXBvcnQgeyByZW1vdmVFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlRXZlbnRzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9ldmVudHMnO1xuaW1wb3J0IHsganNUcmFuc2Zvcm0gfSBmcm9tICcuL2hlbHBlcnMvanNUcmFuc2Zvcm0nO1xuXG4vLyBjaGVjayBicm93c2VyIHZlcnNpb24gYW5kIGxvY2FsIHN0b3JhZ2Vcbi8vIGlmIGJyb3dzZXIgdXBncmFkZWQsIFxuLy8gMS4gZGVsZXRlIGJyb3dzZXIgcmFsYXRlZCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgXG4vLyAyLiByZWNoZWNrIHRoZXNlIG9wdGlvbnMgYW5kIHNhdmUgdGhlbSB0byBsb2NhbCBzdG9yYWdlXG52YXIgYnJvd3NlckluZm8gPSBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IHRydWUsXG4gICAgdG5zU3RvcmFnZSA9IHt9O1xuXG50cnkge1xuICB0bnNTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuICBpZiAoIXRuc1N0b3JhZ2VbJ3Ruc0FwcCddKSB7XG4gICAgdG5zU3RvcmFnZVsndG5zQXBwJ10gPSBicm93c2VySW5mbztcbiAgfSBlbHNlIGlmICh0bnNTdG9yYWdlWyd0bnNBcHAnXSAhPT0gYnJvd3NlckluZm8pIHtcbiAgICB0bnNTdG9yYWdlWyd0bnNBcHAnXSA9IGJyb3dzZXJJbmZvO1xuXG4gICAgLy8gdEMgPT4gY2FsY1xuICAgIC8vIHRTUCA9PiBzdWJwaXhlbFxuICAgIC8vIHRNUSA9PiBtZWRpYXF1ZXJ5XG4gICAgLy8gdFRmID0+IHRyYW5zZm9ybVxuICAgIC8vIHRURHUgPT4gdHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgLy8gdFREZSA9PiB0cmFuc2l0aW9uRGVsYXlcbiAgICAvLyB0QUR1ID0+IGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgLy8gdEFEZSA9PiBhbmltYXRpb25EZWxheVxuICAgIC8vIHRURSA9PiB0cmFuc2l0aW9uRW5kXG4gICAgLy8gdEFFID0+IGFuaW1hdGlvbkVuZFxuXG4gICAgWyd0QycsICd0U1AnLCAndE1RJywgJ3RUZicsICd0VER1JywgJ3RURGUnLCAndEFEdScsICd0QURlJywgJ3RURScsICd0QUUnXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB0bnNTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfSlcbiAgfVxufSBjYXRjaChlKSB7XG4gIGxvY2FsU3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xufVxuXG4vLyBnZXQgYnJvd3NlciByZWxhdGVkIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIHRoZXkgZXhpc3Rcbi8vIG90aGVyd2lzZSwgcnVuIHRoZSBmdW5jdGlvbnMgYWdhaW4gYW5kIHNhdmUgdGhlc2UgZGF0YSB0byBsb2NhbCBzdG9yYWdlXG4vLyBjaGVja1N0b3JhZ2VWYWx1ZSgpIGNvbnZlcnQgbm9uLXN0cmluZyB2YWx1ZSB0byBpdHMgb3JpZ2luYWwgdmFsdWU6ICd0cnVlJyA+IHRydWVcbnZhciBkb2MgPSBkb2N1bWVudCxcbiAgICB3aW4gPSB3aW5kb3csXG4gICAgS0VZUyA9IHtcbiAgICAgIEVOVEVSOiAxMyxcbiAgICAgIFNQQUNFOiAzMixcbiAgICAgIFBBR0VVUDogMzMsXG4gICAgICBQQUdFRE9XTjogMzQsXG4gICAgICBFTkQ6IDM1LFxuICAgICAgSE9NRTogMzYsXG4gICAgICBMRUZUOiAzNyxcbiAgICAgIFVQOiAzOCxcbiAgICAgIFJJR0hUOiAzOSxcbiAgICAgIERPV046IDQwXG4gICAgfSxcbiAgICBDQUxDID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEMnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0QycsIGNhbGMoKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBTVUJQSVhFTCA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RTUCddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RTUCcsIHN1YnBpeGVsTGF5b3V0KCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgQ1NTTVEgPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0TVEnXSkgfHwgc2V0TG9jYWxTdG9yYWdlKCd0TVEnLCBtZWRpYXF1ZXJ5U3VwcG9ydCgpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIFRSQU5TRk9STSA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RUZiddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RUZicsIHdoaWNoUHJvcGVydHkoW1xuICAgICAgJ3RyYW5zZm9ybScsIFxuICAgICAgJ1dlYmtpdFRyYW5zZm9ybScsIFxuICAgICAgJ01velRyYW5zZm9ybScsIFxuICAgICAgJ21zVHJhbnNmb3JtJywgXG4gICAgICAnT1RyYW5zZm9ybSdcbiAgICBdKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBUUkFOU0lUSU9ORFVSQVRJT04gPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VER1J10pIHx8IHNldExvY2FsU3RvcmFnZSgndFREdScsIHdoaWNoUHJvcGVydHkoW1xuICAgICAgJ3RyYW5zaXRpb25EdXJhdGlvbicsIFxuICAgICAgJ1dlYmtpdFRyYW5zaXRpb25EdXJhdGlvbicsIFxuICAgICAgJ01velRyYW5zaXRpb25EdXJhdGlvbicsIFxuICAgICAgJ09UcmFuc2l0aW9uRHVyYXRpb24nXG4gICAgXSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgVFJBTlNJVElPTkRFTEFZID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREZSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RURGUnLCB3aGljaFByb3BlcnR5KFtcbiAgICAgICd0cmFuc2l0aW9uRGVsYXknLCBcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uRGVsYXknLCBcbiAgICAgICdNb3pUcmFuc2l0aW9uRGVsYXknLCBcbiAgICAgICdPVHJhbnNpdGlvbkRlbGF5J1xuICAgIF0pLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIEFOSU1BVElPTkRVUkFUSU9OID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFEdSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RBRHUnLCB3aGljaFByb3BlcnR5KFtcbiAgICAgICdhbmltYXRpb25EdXJhdGlvbicsIFxuICAgICAgJ1dlYmtpdEFuaW1hdGlvbkR1cmF0aW9uJywgXG4gICAgICAnTW96QW5pbWF0aW9uRHVyYXRpb24nLCBcbiAgICAgICdPQW5pbWF0aW9uRHVyYXRpb24nXG4gICAgXSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgQU5JTUFUSU9OREVMQVkgPSBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QURlJ10pIHx8IHNldExvY2FsU3RvcmFnZSgndEFEZScsIHdoaWNoUHJvcGVydHkoW1xuICAgICAgJ2FuaW1hdGlvbkRlbGF5JywgXG4gICAgICAnV2Via2l0QW5pbWF0aW9uRGVsYXknLCBcbiAgICAgICdNb3pBbmltYXRpb25EZWxheScsIFxuICAgICAgJ09BbmltYXRpb25EZWxheSdcbiAgICBdKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICBUUkFOU0lUSU9ORU5EID0gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFRFJ10pIHx8IHNldExvY2FsU3RvcmFnZSgndFRFJywgZ2V0RW5kUHJvcGVydHkoVFJBTlNJVElPTkRVUkFUSU9OLCAnVHJhbnNpdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgIEFOSU1BVElPTkVORCA9IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RBRSddKSB8fCBzZXRMb2NhbFN0b3JhZ2UoJ3RBRScsIGdldEVuZFByb3BlcnR5KEFOSU1BVElPTkRVUkFUSU9OLCAnQW5pbWF0aW9uJyksIGxvY2FsU3RvcmFnZUFjY2Vzcyk7XG5cbi8vIHJlc2V0IFNVQlBJWEVMIGZvciBJRThcbmlmICghQ1NTTVEpIHsgU1VCUElYRUwgPSBmYWxzZTsgfVxuXG5leHBvcnQgdmFyIHRucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgY29udGFpbmVyOiBkb2MucXVlcnlTZWxlY3RvcignLnNsaWRlcicpLFxuICAgIG1vZGU6ICdjYXJvdXNlbCcsXG4gICAgYXhpczogJ2hvcml6b250YWwnLFxuICAgIGl0ZW1zOiAxLFxuICAgIGd1dHRlcjogMCxcbiAgICBlZGdlUGFkZGluZzogMCxcbiAgICBmaXhlZFdpZHRoOiBmYWxzZSxcbiAgICBzbGlkZUJ5OiAxLFxuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIGNvbnRyb2xzVGV4dDogWydwcmV2JywgJ25leHQnXSxcbiAgICBjb250cm9sc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgbmF2OiB0cnVlLFxuICAgIG5hdkNvbnRhaW5lcjogZmFsc2UsXG4gICAgLy8gbmF2QW5pbWF0aW9uSW46IGZhbHNlLFxuICAgIC8vIG5hdkFuaW1hdGlvbk91dDogZmFsc2UsXG4gICAgYXJyb3dLZXlzOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgYXV0b3BsYXlEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICBhdXRvcGxheVRleHQ6IFsnc3RhcnQnLCAnc3RvcCddLFxuICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogZmFsc2UsXG4gICAgYXV0b3BsYXlCdXR0b246IGZhbHNlLFxuICAgIGF1dG9wbGF5QnV0dG9uT3V0cHV0OiB0cnVlLFxuICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHk6IHRydWUsXG4gICAgLy8gYW5pbWF0ZUluOiAndG5zLWZhZGVJbicsXG4gICAgLy8gYW5pbWF0ZU91dDogJ3Rucy1mYWRlT3V0JyxcbiAgICAvLyBhbmltYXRlTm9ybWFsOiAndG5zLW5vcm1hbCcsXG4gICAgLy8gYW5pbWF0ZURlbGF5OiBmYWxzZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIHJld2luZDogZmFsc2UsXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgbGF6eWxvYWQ6IGZhbHNlLFxuICAgIHRvdWNoOiB0cnVlLFxuICAgIG1vdXNlRHJhZzogZmFsc2UsXG4gICAgbmVzdGVkOiBmYWxzZSxcbiAgICBmcmVlemFibGU6IHRydWUsXG4gICAgLy8gc3RhcnRJbmRleDogMCxcbiAgICBvbkluaXQ6IGZhbHNlXG4gIH0sIG9wdGlvbnMgfHwge30pO1xuICBcbiAgLy8gZ2V0IGVsZW1lbnQgbm9kZXMgZnJvbSBzZWxlY3RvcnNcbiAgWydjb250YWluZXInLCAnY29udHJvbHNDb250YWluZXInLCAnbmF2Q29udGFpbmVyJywgJ2F1dG9wbGF5QnV0dG9uJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW2l0ZW1dID09PSAnc3RyaW5nJykgeyBvcHRpb25zW2l0ZW1dID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uc1tpdGVtXSk7IH1cbiAgfSk7XG5cbiAgLy8gbWFrZSBzdXJlIHNsaWRlIGNvbnRhaW5lciBleGlzdHNcbiAgdmFyIHN1cHBvcnRDb25zb2xlV2FybiA9IHdpbi5jb25zb2xlICYmIHR5cGVvZiB3aW4uY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCI7XG4gIGlmICghb3B0aW9ucy5jb250YWluZXIgfHwgIW9wdGlvbnMuY29udGFpbmVyLm5vZGVOYW1lKSB7XG4gICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZmluZCBjb250YWluZXIgZWxlbWVudC4nKTsgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSBzbGlkZXMgYXJlIG1vcmUgdGhhbiAyXG4gIGlmIChvcHRpb25zLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XG4gICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ1NsaWRlcyBsZXNzIHRoYW4gMi4nKTsgfVxuICAgIHJldHVybjtcbiAgIH1cblxuICAvLyB1cGRhdGUgcmVzcG9uc2l2ZVxuICAvLyBmcm9tOiB7IFxuICAvLyAgICAzMDA6IDIsIFxuICAvLyAgICA4MDA6IHtcbiAgLy8gICAgICBsb29wOiBmYWxzZVxuICAvLyAgICB9XG4gIC8vIH1cbiAgLy8gdG86IHtcbiAgLy8gICAgMzAwOiB7IFxuICAvLyAgICAgIGl0ZW1zOiAyIFxuICAvLyAgICB9LCBcbiAgLy8gICAgODAwOiB7XG4gIC8vICAgICAgbG9vcDogZmFsc2VcbiAgLy8gICAgfVxuICAvLyB9XG4gIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICB2YXIgcmVzVGVtID0ge30sIHJlcyA9IG9wdGlvbnMucmVzcG9uc2l2ZTtcbiAgICBmb3IodmFyIGtleSBpbiByZXMpIHtcbiAgICAgIHZhciB2YWwgPSByZXNba2V5XTtcbiAgICAgIHJlc1RlbVtrZXldID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyB7aXRlbXM6IHZhbH0gOiAgdmFsO1xuICAgIH1cblxuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHJlc1RlbTtcbiAgICByZXNUZW0gPSBudWxsO1xuXG4gICAgLy8gYXBwbHkgcmVzcG9uc2l2ZVswXSB0byBvcHRpb25zIGFuZCByZW1vdmUgaXRcbiAgICBpZiAoMCBpbiBvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgb3B0aW9ucy5yZXNwb25zaXZlWzBdKTtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLnJlc3BvbnNpdmVbMF07XG4gICAgfVxuICB9XG5cbiAgLy8gPT09IGRlZmluZSBhbmQgc2V0IHZhcmlhYmxlcyA9PT1cbiAgdmFyIGNhcm91c2VsID0gb3B0aW9ucy5tb2RlID09PSAnY2Fyb3VzZWwnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGlmICghY2Fyb3VzZWwpIHtcbiAgICBvcHRpb25zLmF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgb3B0aW9ucy5yZXdpbmQgPSBmYWxzZTtcbiAgICBvcHRpb25zLmxvb3AgPSB0cnVlO1xuICAgIG9wdGlvbnMuZWRnZVBhZGRpbmcgPSBmYWxzZTtcblxuICAgIHZhciBhbmltYXRlSW4gPSAndG5zLWZhZGVJbicsXG4gICAgICAgIGFuaW1hdGVPdXQgPSAndG5zLWZhZGVPdXQnLFxuICAgICAgICBhbmltYXRlRGVsYXkgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZU5vcm1hbCA9IG9wdGlvbnMuYW5pbWF0ZU5vcm1hbCB8fCAndG5zLW5vcm1hbCc7XG5cbiAgICBpZiAoVFJBTlNJVElPTkVORCAmJiBBTklNQVRJT05FTkQpIHtcbiAgICAgIGFuaW1hdGVJbiA9IG9wdGlvbnMuYW5pbWF0ZUluIHx8IGFuaW1hdGVJbjtcbiAgICAgIGFuaW1hdGVPdXQgPSBvcHRpb25zLmFuaW1hdGVPdXQgfHwgYW5pbWF0ZU91dDtcbiAgICAgIGFuaW1hdGVEZWxheSA9IG9wdGlvbnMuYW5pbWF0ZURlbGF5IHx8IGFuaW1hdGVEZWxheTtcbiAgICB9XG4gIH1cblxuICB2YXIgaG9yaXpvbnRhbCA9IG9wdGlvbnMuYXhpcyA9PT0gJ2hvcml6b250YWwnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgb3V0ZXJXcmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgaW5uZXJXcmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIsXG4gICAgICBjb250YWluZXJQYXJlbnQgPSBjb250YWluZXIucGFyZW50Tm9kZSxcbiAgICAgIHNsaWRlSXRlbXMgPSBjb250YWluZXIuY2hpbGRyZW4sXG4gICAgICBzbGlkZUNvdW50ID0gc2xpZGVJdGVtcy5sZW5ndGgsXG4gICAgICB2cE91dGVyID0gY29udGFpbmVyUGFyZW50LmNsaWVudFdpZHRoLFxuICAgICAgdnBJbm5lcixcbiAgICAgIHJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUsXG4gICAgICByZXNwb25zaXZlSXRlbXMgPSBbXSxcbiAgICAgIGJyZWFrcG9pbnRzID0gZmFsc2UsXG4gICAgICBicmVha3BvaW50Wm9uZSA9IDAsXG4gICAgICB3aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICBicmVha3BvaW50cyA9IE9iamVjdC5rZXlzKHJlc3BvbnNpdmUpXG4gICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBwYXJzZUludCh4KTsgfSlcbiAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XG5cbiAgICAvLyBnZXQgYWxsIHJlc3BvbnNpdmUgaXRlbXNcbiAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKGJwKSB7XG4gICAgICByZXNwb25zaXZlSXRlbXMgPSByZXNwb25zaXZlSXRlbXMuY29uY2F0KE9iamVjdC5rZXlzKHJlc3BvbnNpdmVbYnBdKSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgZHVwbGljYXRlZCBpdGVtc1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICByZXNwb25zaXZlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkgeyBpZiAoYXJyLmluZGV4T2YoaXRlbSkgPCAwKSB7IGFyci5wdXNoKGl0ZW0pOyB9IH0pO1xuICAgIHJlc3BvbnNpdmVJdGVtcyA9IGFycjtcblxuICAgIHNldEJyZWFrcG9pbnRab25lKCk7XG4gIH0gXG5cbiAgdmFyIGl0ZW1zID0gZ2V0T3B0aW9uKCdpdGVtcycpLFxuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpID09PSAncGFnZScgPyBpdGVtcyA6IGdldE9wdGlvbignc2xpZGVCeScpLFxuICAgICAgbmVzdGVkID0gb3B0aW9ucy5uZXN0ZWQsXG4gICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpLFxuICAgICAgZWRnZVBhZGRpbmcgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyksXG4gICAgICBmaXhlZFdpZHRoID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJyksXG4gICAgICBhcnJvd0tleXMgPSBnZXRPcHRpb24oJ2Fycm93S2V5cycpLFxuICAgICAgc3BlZWQgPSBnZXRPcHRpb24oJ3NwZWVkJyksXG4gICAgICByZXdpbmQgPSBvcHRpb25zLnJld2luZCxcbiAgICAgIGxvb3AgPSByZXdpbmQgPyBmYWxzZSA6IG9wdGlvbnMubG9vcCxcbiAgICAgIGF1dG9IZWlnaHQgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnKSxcbiAgICAgIHNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgpLFxuICAgICAgbGF6eWxvYWQgPSBvcHRpb25zLmxhenlsb2FkLFxuICAgICAgc2xpZGVPZmZzZXRUb3BzLCAvLyBjb2xsZWN0aW9uIG9mIHNsaWRlIG9mZnNldCB0b3BzXG4gICAgICBzbGlkZUl0ZW1zT3V0ID0gW10sXG4gICAgICBjbG9uZUNvdW50ID0gbG9vcCA/IHNsaWRlQ291bnQgKiAyIDogMCxcbiAgICAgIHNsaWRlQ291bnROZXcgPSAhY2Fyb3VzZWwgPyBzbGlkZUNvdW50ICsgY2xvbmVDb3VudCA6IHNsaWRlQ291bnQgKyBjbG9uZUNvdW50ICogMixcbiAgICAgIGhhc1JpZ2h0RGVhZFpvbmUgPSBmaXhlZFdpZHRoICYmICFsb29wICYmICFlZGdlUGFkZGluZyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gIWNhcm91c2VsIHx8ICFsb29wID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgLy8gdHJhbnNmb3JtXG4gICAgICB0cmFuc2Zvcm1BdHRyID0gaG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnLFxuICAgICAgdHJhbnNmb3JtUHJlZml4ID0gJycsXG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJycsXG4gICAgICAvLyBpbmRleFxuICAgICAgaW5kZXggPSBvcHRpb25zLnN0YXJ0SW5kZXggPyBvcHRpb25zLnN0YXJ0SW5kZXggOiAhY2Fyb3VzZWwgPyAwIDogY2xvbmVDb3VudCxcbiAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXgsXG4gICAgICBpbmRleE1pbiA9IDAsXG4gICAgICBpbmRleE1heCA9IHNsaWRlQ291bnROZXcgLSBpdGVtcyxcbiAgICAgIC8vIHJlc2l6ZVxuICAgICAgcmVzaXplVGltZXIsXG4gICAgICB0b3VjaGVkT3JEcmFnZWQsXG4gICAgICBydW5uaW5nID0gZmFsc2UsXG4gICAgICBvbkluaXQgPSBvcHRpb25zLm9uSW5pdCxcbiAgICAgIGV2ZW50cyA9IG5ldyBFdmVudHMoKSxcbiAgICAgIC8vIGlkLCBjbGFzc1xuICAgICAgY29udGFpbmVySWRDYWNoZWQgPSBjb250YWluZXIuaWQsXG4gICAgICBjbGFzc0NvbnRhaW5lciA9ICcgdG5zLXNsaWRlciB0bnMtJyArIG9wdGlvbnMubW9kZSxcbiAgICAgIHNsaWRlSWQgPSBjb250YWluZXIuaWQgfHwgZ2V0U2xpZGVJZCgpLFxuICAgICAgZGlzYWJsZSA9IGdldE9wdGlvbignZGlzYWJsZScpLFxuICAgICAgZnJlZXphYmxlID0gb3B0aW9ucy5mcmVlemFibGUsXG4gICAgICBmcmVlemUgPSBkaXNhYmxlID8gdHJ1ZSA6IGZyZWV6YWJsZSA/IHNsaWRlQ291bnQgPD0gaXRlbXMgOiBmYWxzZSxcbiAgICAgIGZyb3plbixcbiAgICAgIGltcG9ydGFudFN0ciA9IG5lc3RlZCA9PT0gJ2lubmVyJyA/ICcgIWltcG9ydGFudCcgOiAnJyxcbiAgICAgIGNvbnRyb2xzRXZlbnRzID0ge1xuICAgICAgICAnY2xpY2snOiBvbkNvbnRyb2xzQ2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25Db250cm9sc0tleWRvd25cbiAgICAgIH0sXG4gICAgICBuYXZFdmVudHMgPSB7XG4gICAgICAgICdjbGljayc6IG9uTmF2Q2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25OYXZLZXlkb3duXG4gICAgICB9LFxuICAgICAgaG92ZXJFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZW92ZXInOiBtb3VzZW92ZXJQYXVzZSxcbiAgICAgICAgJ21vdXNlb3V0JzogbW91c2VvdXRSZXN0YXJ0XG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eUV2ZW50ID0geyd2aXNpYmlsaXR5Y2hhbmdlJzogb25WaXNpYmlsaXR5Q2hhbmdlfSxcbiAgICAgIGRvY21lbnRLZXlkb3duRXZlbnQgPSB7J2tleWRvd24nOiBvbkRvY3VtZW50S2V5ZG93bn0sXG4gICAgICB0b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgJ3RvdWNoc3RhcnQnOiBvblRvdWNoT3JNb3VzZVN0YXJ0LFxuICAgICAgICAndG91Y2htb3ZlJzogb25Ub3VjaE9yTW91c2VNb3ZlLFxuICAgICAgICAndG91Y2hlbmQnOiBvblRvdWNoT3JNb3VzZUVuZCxcbiAgICAgICAgJ3RvdWNoY2FuY2VsJzogb25Ub3VjaE9yTW91c2VFbmRcbiAgICAgIH0sIGRyYWdFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZWRvd24nOiBvblRvdWNoT3JNb3VzZVN0YXJ0LFxuICAgICAgICAnbW91c2Vtb3ZlJzogb25Ub3VjaE9yTW91c2VNb3ZlLFxuICAgICAgICAnbW91c2V1cCc6IG9uVG91Y2hPck1vdXNlRW5kLFxuICAgICAgICAnbW91c2VsZWF2ZSc6IG9uVG91Y2hPck1vdXNlRW5kXG4gICAgICB9LFxuICAgICAgaGFzQ29udHJvbHMgPSBjaGVja09wdGlvbignY29udHJvbHMnKSxcbiAgICAgIGhhc05hdiA9IGNoZWNrT3B0aW9uKCduYXYnKSxcbiAgICAgIGhhc0F1dG9wbGF5ID0gY2hlY2tPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBoYXNUb3VjaCA9IGNoZWNrT3B0aW9uKCd0b3VjaCcpLFxuICAgICAgaGFzTW91c2VEcmFnID0gY2hlY2tPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgc2xpZGVBY3RpdmVDbGFzcyA9ICd0bnMtc2xpZGUtYWN0aXZlJztcblxuICAvLyBjaGVjayBzdGFydEluZGV4XG4gIGlmIChvcHRpb25zLnN0YXJ0SW5kZXgpIHtcbiAgICBpbmRleCA9IGluZGV4JXNsaWRlQ291bnQ7XG4gICAgaWYgKGluZGV4IDwgMCkgeyBpbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgaWYgKGluZGV4ID4gaW5kZXhNYXgpIHsgaW5kZXggPSBpbmRleE1heDsgfVxuICB9XG5cbiAgLy8gY29udHJvbHNcbiAgaWYgKGhhc0NvbnRyb2xzKSB7XG4gICAgdmFyIGNvbnRyb2xzID0gZ2V0T3B0aW9uKCdjb250cm9scycpLFxuICAgICAgICBjb250cm9sc1RleHQgPSBnZXRPcHRpb24oJ2NvbnRyb2xzVGV4dCcpLFxuICAgICAgICBjb250cm9sc0NvbnRhaW5lciA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIsXG4gICAgICAgIHByZXZCdXR0b24sXG4gICAgICAgIG5leHRCdXR0b24sXG4gICAgICAgIHByZXZJc0J1dHRvbixcbiAgICAgICAgbmV4dElzQnV0dG9uO1xuICB9XG5cbiAgLy8gbmF2XG4gIGlmIChoYXNOYXYpIHtcbiAgICB2YXIgbmF2ID0gZ2V0T3B0aW9uKCduYXYnKSxcbiAgICAgICAgbmF2Q29udGFpbmVyID0gb3B0aW9ucy5uYXZDb250YWluZXIsXG4gICAgICAgIC8vIG5hdkFuaW1hdGlvbkluID0gb3B0aW9ucy5uYXZBbmltYXRpb25JbixcbiAgICAgICAgLy8gbmF2QW5pbWF0aW9uT3V0ID0gb3B0aW9ucy5uYXZBbmltYXRpb25PdXQsXG4gICAgICAgIG5hdkl0ZW1zLFxuICAgICAgICB2aXNpYmxlTmF2SW5kZXhlcyA9IFtdLFxuICAgICAgICB2aXNpYmxlTmF2SW5kZXhlc0NhY2hlZCA9IHZpc2libGVOYXZJbmRleGVzLFxuICAgICAgICBuYXZDbGlja2VkID0gLTEsXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleCA9IDAsXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IDAsXG4gICAgICAgIG5hdkFjdGl2ZUNsYXNzID0gJ3Rucy1uYXYtYWN0aXZlJztcbiAgfVxuXG4gIC8vIGF1dG9wbGF5XG4gIGlmIChoYXNBdXRvcGxheSkge1xuICAgIHZhciBhdXRvcGxheSA9IGdldE9wdGlvbignYXV0b3BsYXknKSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRpbWVvdXQnKSxcbiAgICAgICAgYXV0b3BsYXlEaXJlY3Rpb24gPSBvcHRpb25zLmF1dG9wbGF5RGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyAxIDogLTEsXG4gICAgICAgIGF1dG9wbGF5VGV4dCA9IGdldE9wdGlvbignYXV0b3BsYXlUZXh0JyksXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA9IGdldE9wdGlvbignYXV0b3BsYXlIb3ZlclBhdXNlJyksXG4gICAgICAgIGF1dG9wbGF5QnV0dG9uID0gb3B0aW9ucy5hdXRvcGxheUJ1dHRvbixcbiAgICAgICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGdldE9wdGlvbignYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eScpLFxuICAgICAgICBhdXRvcGxheUh0bWxTdHJpbmdzID0gWyc8c3BhbiBjbGFzcz1cXCd0bnMtdmlzdWFsbHktaGlkZGVuXFwnPicsICcgYW5pbWF0aW9uPC9zcGFuPiddLFxuICAgICAgICBhdXRvcGxheVRpbWVyLFxuICAgICAgICBhbmltYXRpbmcsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQsXG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZDtcbiAgfVxuXG4gIC8vIHRvdWNoXG4gIGlmIChoYXNUb3VjaCkge1xuICAgIHZhciB0b3VjaCA9IGdldE9wdGlvbigndG91Y2gnKSxcbiAgICAgICAgc3RhcnRYID0gbnVsbCxcbiAgICAgICAgc3RhcnRZID0gbnVsbCxcbiAgICAgICAgdHJhbnNsYXRlSW5pdCxcbiAgICAgICAgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gMCxcbiAgICAgICAgZGlzWCxcbiAgICAgICAgZGlzWTtcbiAgfVxuXG4gIC8vIG1vdXNlIGRyYWdcbiAgaWYgKGhhc01vdXNlRHJhZykge1xuICAgIHZhciBtb3VzZURyYWcgPSBnZXRPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgICBpc0RyYWdFdmVudCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gZGlzYWJsZSBzbGlkZXIgd2hlbiBzbGlkZWNvdW50IDw9IGl0ZW1zXG4gIGlmIChmcmVlemUpIHtcbiAgICBjb250cm9scyA9IG5hdiA9IHRvdWNoID0gbW91c2VEcmFnID0gYXJyb3dLZXlzID0gYXV0b3BsYXkgPSBhdXRvcGxheUhvdmVyUGF1c2UgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoVFJBTlNGT1JNKSB7XG4gICAgdHJhbnNmb3JtQXR0ciA9IFRSQU5TRk9STTtcbiAgICB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlJztcbiAgICB0cmFuc2Zvcm1QcmVmaXggKz0gaG9yaXpvbnRhbCA/ICdYKCcgOiAnWSgnO1xuICAgIHRyYW5zZm9ybVBvc3RmaXggPSAnKSc7XG4gIH1cblxuICAvLyA9PT0gQ09NTU9OIEZVTkNUSU9OUyA9PT0gLy9cbiAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGggKCkge1xuICAgIHJldHVybiB3aW4uaW5uZXJXaWR0aCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvYy5ib2R5LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tPcHRpb24gKGl0ZW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gb3B0aW9uc1tpdGVtXTtcbiAgICBpZiAoIXJlc3VsdCAmJiBicmVha3BvaW50cyAmJiByZXNwb25zaXZlSXRlbXMuaW5kZXhPZihpdGVtKSA+PSAwKSB7XG4gICAgICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChicCkge1xuICAgICAgICBpZiAocmVzcG9uc2l2ZVticF1baXRlbV0pIHsgcmVzdWx0ID0gdHJ1ZTsgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb24gKGl0ZW0sIHZpZXdwb3J0KSB7XG4gICAgdmlld3BvcnQgPSB2aWV3cG9ydCA/IHZpZXdwb3J0IDogd2luZG93V2lkdGg7XG4gICAgXG4gICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICBzbGlkZUJ5OiAncGFnZScsXG4gICAgICAgICAgZWRnZVBhZGRpbmc6IGZhbHNlLFxuICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKCFjYXJvdXNlbCAmJiBpdGVtIGluIG9iaikge1xuICAgICAgcmVzdWx0ID0gb2JqW2l0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbSA9PT0gJ2l0ZW1zJyAmJiBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKSkge1xuICAgICAgICByZXN1bHQgPSBNYXRoLmZsb29yKHZwT3V0ZXIgLyAoZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJykgKyBnZXRPcHRpb24oJ2d1dHRlcicpKSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdhdXRvSGVpZ2h0JyAmJiBuZXN0ZWQgPT09ICdvdXRlcicpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IG9wdGlvbnNbaXRlbV07XG5cbiAgICAgICAgaWYgKGJyZWFrcG9pbnRzICYmIHJlc3BvbnNpdmVJdGVtcy5pbmRleE9mKGl0ZW0pID49IDApIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnJlYWtwb2ludHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBicCA9IGJyZWFrcG9pbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHZpZXdwb3J0ID49IGJwKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtIGluIHJlc3BvbnNpdmVbYnBdKSB7IHJlc3VsdCA9IHJlc3BvbnNpdmVbYnBdW2l0ZW1dOyB9XG4gICAgICAgICAgICB9IGVsc2UgeyBicmVhazsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKGl0ZW0gPT09ICdzbGlkZUJ5JyAmJiByZXN1bHQgPT09ICdwYWdlJykgeyByZXN1bHQgPSBnZXRPcHRpb24oJ2l0ZW1zJyk7IH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZU1hcmdpbkxlZnQgKGkpIHtcbiAgICB2YXIgc3RyID0gQ0FMQyA/IFxuICAgICAgQ0FMQyArICcoJyArIGkgKiAxMDAgKyAnJSAvICcgKyBzbGlkZUNvdW50TmV3ICsgJyknIDogXG4gICAgICBpICogMTAwIC8gc2xpZGVDb3VudE5ldyArICclJztcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzIChlZGdlUGFkZGluZ1RlbSwgZ3V0dGVyVGVtLCBmaXhlZFdpZHRoVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGlmIChlZGdlUGFkZGluZ1RlbSkge1xuICAgICAgdmFyIGdhcCA9IGVkZ2VQYWRkaW5nVGVtO1xuICAgICAgaWYgKGd1dHRlclRlbSkgeyBnYXAgKz0gZ3V0dGVyVGVtOyB9XG4gICAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgICBzdHIgPSAnbWFyZ2luOiAwcHggJyArICh2cE91dGVyJShmaXhlZFdpZHRoVGVtICsgZ3V0dGVyVGVtKSArIGd1dHRlclRlbSkgLyAyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGhvcml6b250YWwgP1xuICAgICAgICAgICdtYXJnaW46IDAgJyArIGVkZ2VQYWRkaW5nVGVtICsgJ3B4IDAgJyArIGdhcCArICdweDsnIDpcbiAgICAgICAgICAncGFkZGluZzogJyArIGdhcCArICdweCAwICcgKyBlZGdlUGFkZGluZ1RlbSArICdweCAwOyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChndXR0ZXJUZW0gJiYgIWZpeGVkV2lkdGhUZW0pIHtcbiAgICAgIHZhciBndXR0ZXJUZW1Vbml0ID0gJy0nICsgZ3V0dGVyVGVtICsgJ3B4JyxcbiAgICAgICAgICBkaXIgPSBob3Jpem9udGFsID8gZ3V0dGVyVGVtVW5pdCArICcgMCAwJyA6ICcwICcgKyBndXR0ZXJUZW1Vbml0ICsgJyAwJztcbiAgICAgIHN0ciA9ICdtYXJnaW46IDAgJyArIGRpciArICc7J1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250YWluZXJXaWR0aCAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIHZhciBzdHI7XG5cbiAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgc3RyID0gKGZpeGVkV2lkdGhUZW0gKyBndXR0ZXJUZW0pICogc2xpZGVDb3VudE5ldyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IENBTEMgPyBcbiAgICAgICAgQ0FMQyArICcoJyArIHNsaWRlQ291bnROZXcgKiAxMDAgKyAnJSAvICcgKyBpdGVtc1RlbSArICcpJyA6IFxuICAgICAgICBzbGlkZUNvdW50TmV3ICogMTAwIC8gaXRlbXNUZW0gKyAnJSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlV2lkdGhTdHlsZSAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBzdHIgPSAnd2lkdGg6JztcbiAgICAgIGlmIChmaXhlZFdpZHRoVGVtKSB7XG4gICAgICAgIHN0ciArPSAoZml4ZWRXaWR0aFRlbSArIGd1dHRlclRlbSkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRpdmlkZW5kID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50TmV3IDogaXRlbXNUZW07XG4gICAgICAgIHN0ciArPSBDQUxDID8gXG4gICAgICAgICAgQ0FMQyArICcoMTAwJSAvICcgKyBkaXZpZGVuZCArICcpJyA6IFxuICAgICAgICAgIDEwMCAvIGRpdmlkZW5kICsgJyUnO1xuICAgICAgfVxuICAgICAgc3RyICs9IGltcG9ydGFudFN0ciArICc7JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVHdXR0ZXJTdHlsZSAoZ3V0dGVyVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZ3V0dGVyIG1heWJlIGludGVyZ2VyIHx8IDBcbiAgICAvLyBzbyBjYW4ndCB1c2UgJ2lmIChndXR0ZXIpJ1xuICAgIGlmIChndXR0ZXJUZW0gIT09IGZhbHNlKSB7XG4gICAgICB2YXIgcHJvcCA9IGhvcml6b250YWwgPyAncGFkZGluZy0nIDogJ21hcmdpbi0nLFxuICAgICAgICAgIGRpciA9IGhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgICBzdHIgPSBwcm9wICsgIGRpciArICc6ICcgKyBndXR0ZXJUZW0gKyAncHg7JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgKGZ1bmN0aW9uIHNsaWRlckluaXQgKCkge1xuICAgIC8vIEZpcnN0IHRoaW5nIGZpcnN0LCB3cmFwIGNvbnRhaW5lciB3aXRoICdvdXRlcldyYXBwZXIgPiBpbm5lcldyYXBwZXInLFxuICAgIC8vIHRvIGdldCB0aGUgY29ycmVjdCB2aWV3IHdpZHRoXG4gICAgb3V0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcik7XG4gICAgY29udGFpbmVyUGFyZW50Lmluc2VydEJlZm9yZShvdXRlcldyYXBwZXIsIGNvbnRhaW5lcik7XG4gICAgaW5uZXJXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgdnBJbm5lciA9IGlubmVyV3JhcHBlci5jbGllbnRXaWR0aDtcblxuICAgIHZhciBjbGFzc091dGVyID0gJ3Rucy1vdXRlcicsXG4gICAgICAgIGNsYXNzSW5uZXIgPSAndG5zLWlubmVyJyxcbiAgICAgICAgaGFzR3V0dGVyID0gY2hlY2tPcHRpb24oJ2d1dHRlcicpO1xuXG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBpZiAoY2hlY2tPcHRpb24oJ2VkZ2VQYWRkaW5nJykgfHwgaGFzR3V0dGVyICYmICFvcHRpb25zLmZpeGVkV2lkdGgpIHtcbiAgICAgICAgICBjbGFzc091dGVyICs9ICcgdG5zLW92aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NJbm5lciArPSAnIHRucy1vdmgnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0lubmVyICs9ICcgdG5zLW92aCc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNHdXR0ZXIpIHtcbiAgICAgIGNsYXNzT3V0ZXIgKz0gJyB0bnMtb3ZoJztcbiAgICB9XG5cbiAgICBvdXRlcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NPdXRlcjtcbiAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NJbm5lcjtcbiAgICBpbm5lcldyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1pdyc7XG4gICAgaWYgKGF1dG9IZWlnaHQpIHtcbiAgICAgIGlubmVyV3JhcHBlci5jbGFzc05hbWUgKz0gJyB0bnMtYWgnO1xuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlW1RSQU5TSVRJT05EVVJBVElPTl0gPSBzcGVlZCAvIDEwMDAgKyAncyc7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNvbnRhaW5lciBwcm9wZXJ0aWVzXG4gICAgaWYgKGNvbnRhaW5lci5pZCA9PT0gJycpIHsgY29udGFpbmVyLmlkID0gc2xpZGVJZDsgfVxuICAgIGNsYXNzQ29udGFpbmVyICs9IFNVQlBJWEVMID8gJyB0bnMtc3VicGl4ZWwnIDogJyB0bnMtbm8tc3VicGl4ZWwnO1xuICAgIGNsYXNzQ29udGFpbmVyICs9IENBTEMgPyAnIHRucy1jYWxjJyA6ICcgdG5zLW5vLWNhbGMnO1xuICAgIGlmIChjYXJvdXNlbCkgeyBjbGFzc0NvbnRhaW5lciArPSAnIHRucy0nICsgb3B0aW9ucy5heGlzOyB9XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBjbGFzc0NvbnRhaW5lcjtcbiAgICAvLyBhZGQgZXZlbnRcbiAgICBpZiAoY2Fyb3VzZWwgJiYgVFJBTlNJVElPTkVORCkge1xuICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gb25UcmFuc2l0aW9uRW5kO1xuICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgZXZlKTtcbiAgICB9XG5cbiAgICAvLyBkZWxldGUgZGF0YXMgYWZ0ZXIgaW5pdFxuICAgIGNsYXNzT3V0ZXIgPSBjbGFzc0lubmVyID0gbnVsbDtcblxuICAgIC8vIGFkZCBpZCwgY2xhc3MsIGFyaWEgYXR0cmlidXRlcyBcbiAgICAvLyBiZWZvcmUgY2xvbmUgc2xpZGVzXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBzbGlkZUNvdW50OyB4KyspIHtcbiAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1t4XTtcbiAgICAgIGlmICghaXRlbS5pZCkgeyBpdGVtLmlkID0gc2xpZGVJZCArICctaXRlbScgKyB4OyB9XG4gICAgICBhZGRDbGFzcyhpdGVtLCAndG5zLWl0ZW0nKTtcbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgYW5pbWF0ZU5vcm1hbCkgeyBhZGRDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTsgfVxuICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsb25lIHNsaWRlc1xuICAgIGlmIChsb29wIHx8IGVkZ2VQYWRkaW5nKSB7XG4gICAgICB2YXIgZnJhZ21lbnRCZWZvcmUgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBcbiAgICAgICAgICBmcmFnbWVudEFmdGVyID0gZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgdmFyIG51bSA9IGolc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGNsb25lRmlyc3QgPSBzbGlkZUl0ZW1zW251bV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICByZW1vdmVBdHRycyhjbG9uZUZpcnN0LCAnaWQnKTtcbiAgICAgICAgZnJhZ21lbnRBZnRlci5pbnNlcnRCZWZvcmUoY2xvbmVGaXJzdCwgZnJhZ21lbnRBZnRlci5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICB2YXIgY2xvbmVMYXN0ID0gc2xpZGVJdGVtc1tzbGlkZUNvdW50IC0gMSAtIG51bV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGNsb25lTGFzdCwgJ2lkJyk7XG4gICAgICAgICAgZnJhZ21lbnRCZWZvcmUuYXBwZW5kQ2hpbGQoY2xvbmVMYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGZyYWdtZW50QmVmb3JlLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnRBZnRlcik7XG4gICAgICBzbGlkZUl0ZW1zID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIHZpc2libGUgc2xpZGVzXG4gICAgLy8gYWRkIGFyaWEgYXR0cnNcbiAgICAvLyBzZXQgYW5pbWF0aW9uIGNsYXNzZXMgYW5kIGxlZnQgdmFsdWUgZm9yIGdhbGxlcnkgc2xpZGVyXG4gICAgLy8gdXNlIHNsaWRlIGNvdW50IHdoZW4gc2xpZGVzIGFyZSBmZXdlciB0aGFuIGl0ZW1zXG4gICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBNYXRoLm1pbihzbGlkZUNvdW50LCBpdGVtcyk7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgc2V0QXR0cnMoaXRlbSwgeydhcmlhLWhpZGRlbic6ICdmYWxzZSd9KTtcbiAgICAgIHJlbW92ZUF0dHJzKGl0ZW0sIFsndGFiaW5kZXgnXSk7XG4gICAgICBhZGRDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcblxuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhcm91c2VsICYmIGhvcml6b250YWwpIHtcbiAgICAgIC8vIHNldCBmb250LXNpemUgcnVsZXNcbiAgICAgIC8vIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgIGlmIChTVUJQSVhFTCkge1xuICAgICAgICAvLyBzZXQgc2xpZGVzIGZvbnQtc2l6ZSBmaXJzdFxuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbScsICdmb250LXNpemU6JyArIHdpbi5nZXRDb21wdXRlZFN0eWxlKHNsaWRlSXRlbXNbMF0pLmZvbnRTaXplICsgJzsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkLCAnZm9udC1zaXplOjA7JywgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcblxuICAgICAgLy8gc2xpZGUgbGVmdCBtYXJnaW5cbiAgICAgIC8vIGZvciBJRTggJiB3ZWJraXQgYnJvd3NlcnMgKG5vIHN1YnBpeGVsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNsaWRlSXRlbXMsIGZ1bmN0aW9uIChzbGlkZSwgaSkge1xuICAgICAgICAgIHNsaWRlLnN0eWxlLm1hcmdpbkxlZnQgPSBnZXRTbGlkZU1hcmdpbkxlZnQoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChDU1NNUSkge1xuICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgIHZhciBzdHIgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMob3B0aW9ucy5lZGdlUGFkZGluZywgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuZml4ZWRXaWR0aCk7XG4gICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJy1pdycsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcblxuICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgaWYgKGNhcm91c2VsICYmIGhvcml6b250YWwpIHtcbiAgICAgICAgc3RyID0gJ3dpZHRoOicgKyBnZXRDb250YWluZXJXaWR0aChvcHRpb25zLmZpeGVkV2lkdGgsIG9wdGlvbnMuZ3V0dGVyLCBvcHRpb25zLml0ZW1zKTtcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCwgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgIGlmIChob3Jpem9udGFsIHx8IG9wdGlvbnMuZ3V0dGVyKSB7XG4gICAgICAgIHN0ciA9IGdldFNsaWRlV2lkdGhTdHlsZShvcHRpb25zLmZpeGVkV2lkdGgsIG9wdGlvbnMuZ3V0dGVyLCBvcHRpb25zLml0ZW1zKSArIFxuICAgICAgICAgICAgICBnZXRTbGlkZUd1dHRlclN0eWxlKG9wdGlvbnMuZ3V0dGVyKTtcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAvLyBub24gQ1NTIG1lZGlhcXVlcmllczogSUU4XG4gICAgLy8gIyMgdXBkYXRlIGlubmVyIHdyYXBwZXIsIGNvbnRhaW5lciwgc2xpZGVzIGlmIG5lZWRlZFxuICAgIC8vIHNldCBpbmxpbmUgc3R5bGVzIGZvciBpbm5lciB3cmFwcGVyICYgY29udGFpbmVyXG4gICAgLy8gaW5zZXJ0IHN0eWxlc2hlZXQgKG9uZSBsaW5lKSBmb3Igc2xpZGVzIG9ubHkgKHNpbmNlIHNsaWRlcyBhcmUgbWFueSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgpO1xuXG4gICAgICAvLyBjb250YWluZXIgc3R5bGVzXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2xpZGUgc3R5bGVzXG4gICAgICBpZiAoaG9yaXpvbnRhbCB8fCBndXR0ZXIpIHtcbiAgICAgICAgdmFyIHN0ciA9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKSArXG4gICAgICAgICAgICAgICAgICBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7XG4gICAgICAgIC8vIGFwcGVuZCB0byB0aGUgbGFzdCBsaW5lXG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaG9yaXpvbnRhbCAmJiAhZGlzYWJsZSkge1xuICAgICAgZ2V0U2xpZGVPZmZzZXRUb3BzKCk7XG4gICAgICB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCgpO1xuICAgIH1cblxuICAgIC8vIG1lZGlhIHF1ZXJpZXNcbiAgICBpZiAocmVzcG9uc2l2ZSAmJiBDU1NNUSkge1xuICAgICAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbihicCkge1xuICAgICAgICB2YXIgb3B0cyA9IHJlc3BvbnNpdmVbYnBdLFxuICAgICAgICAgICAgc3RyID0gJycsXG4gICAgICAgICAgICBpbm5lcldyYXBwZXJTdHIgPSAnJyxcbiAgICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICcnLFxuICAgICAgICAgICAgc2xpZGVTdHIgPSAnJyxcbiAgICAgICAgICAgIGl0ZW1zQlAgPSBnZXRPcHRpb24oJ2l0ZW1zJywgYnApLFxuICAgICAgICAgICAgZml4ZWRXaWR0aEJQID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJywgYnApLFxuICAgICAgICAgICAgZWRnZVBhZGRpbmdCUCA9IGdldE9wdGlvbignZWRnZVBhZGRpbmcnLCBicCksXG4gICAgICAgICAgICBndXR0ZXJCUCA9IGdldE9wdGlvbignZ3V0dGVyJywgYnApO1xuXG4gICAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3RyaW5nXG4gICAgICAgIGlmICgnZWRnZVBhZGRpbmcnIGluIG9wdHMgfHwgJ2d1dHRlcicgaW4gb3B0cykge1xuICAgICAgICAgIGlubmVyV3JhcHBlclN0ciA9ICcjJyArIHNsaWRlSWQgKyAnLWl3eycgKyBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmdCUCwgZ3V0dGVyQlAsIGZpeGVkV2lkdGhCUCkgKyAnfSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb250YWluZXIgc3RyaW5nXG4gICAgICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsICYmICgnZml4ZWRXaWR0aCcgaW4gb3B0cyB8fCAnZ3V0dGVyJyBpbiBvcHRzIHx8ICdpdGVtcycgaW4gb3B0cykpIHtcbiAgICAgICAgICBjb250YWluZXJTdHIgPSAnIycgKyBzbGlkZUlkICsgJ3snICsgJ3dpZHRoOicgKyBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKSArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNsaWRlIHN0cmluZ1xuICAgICAgICBpZiAoJ2ZpeGVkV2lkdGgnIGluIG9wdHMgfHwgY2hlY2tPcHRpb24oJ2ZpeGVkV2lkdGgnKSAmJiAnZ3V0dGVyJyBpbiBvcHRzIHx8ICFjYXJvdXNlbCAmJiAnaXRlbXMnIGluIG9wdHMpIHtcbiAgICAgICAgICBzbGlkZVN0ciArPSBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aEJQLCBndXR0ZXJCUCwgaXRlbXNCUCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdndXR0ZXInIGluIG9wdHMpIHtcbiAgICAgICAgICBzbGlkZVN0ciArPSBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlckJQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVTdHIubGVuZ3RoID4gMCkgeyBzbGlkZVN0ciA9ICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVteycgKyBzbGlkZVN0ciArICd9JzsgfVxuXG4gICAgICAgIHN0ciA9IGlubmVyV3JhcHBlclN0ciArIGNvbnRhaW5lclN0ciArIHNsaWRlU3RyO1xuXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoJ0BtZWRpYSAobWluLXdpZHRoOiAnICsgYnAgLyAxNiArICdlbSkgeycgKyBzdHIgKyAnfScsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gc2V0IGNvbnRhaW5lciB0cmFuc2Zvcm0gcHJvcGVydHlcbiAgICBpZiAoY2Fyb3VzZWwgJiYgIWRpc2FibGUpIHtcbiAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKCk7XG4gICAgfVxuXG5cbiAgICAvLyA9PSBtc0luaXQgPT1cbiAgICAvLyBmb3IgSUUxMFxuICAgIGlmIChuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cykge1xuICAgICAgYWRkQ2xhc3Mob3V0ZXJXcmFwcGVyLCAnbXMtdG91Y2gnKTtcbiAgICAgIGFkZEV2ZW50cyhvdXRlcldyYXBwZXIsIHsnc2Nyb2xsJzogaWUxMFNjcm9sbH0pO1xuICAgICAgc2V0U25hcEludGVydmFsKCk7XG4gICAgfVxuXG4gXG4gICAgLy8gPT0gbmF2SW5pdCA9PVxuICAgIGlmIChoYXNOYXYpIHtcbiAgICAgIHZhciBpbml0SW5kZXggPSAhY2Fyb3VzZWwgPyAwIDogY2xvbmVDb3VudDtcbiAgICAgIC8vIGN1c3RvbWl6ZWQgbmF2XG4gICAgICAvLyB3aWxsIG5vdCBoaWRlIHRoZSBuYXZzIGluIGNhc2UgdGhleSdyZSB0aHVtYm5haWxzXG4gICAgICBpZiAobmF2Q29udGFpbmVyKSB7XG4gICAgICAgIHNldEF0dHJzKG5hdkNvbnRhaW5lciwgeydhcmlhLWxhYmVsJzogJ0Nhcm91c2VsIFBhZ2luYXRpb24nfSk7XG4gICAgICAgIG5hdkl0ZW1zID0gbmF2Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobmF2SXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAgICAgJ2RhdGEtbmF2JzogaSxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZScsXG4gICAgICAgICAgICAnYXJpYS1jb250cm9scyc6IHNsaWRlSXRlbXNbaW5pdEluZGV4ICsgaV0uaWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gaWYgKG5hdkFuaW1hdGlvbk91dCkge1xuICAgICAgICAgIC8vICAgYWRkQ2xhc3MoaXRlbSwgbmF2QW5pbWF0aW9uT3V0KTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBnZW5lcmF0ZWQgbmF2IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5hdkh0bWwgPSAnJztcbiAgICAgICAgICAgIC8vIGNsYXNzU3RyID0gbmF2QW5pbWF0aW9uT3V0ID8gJ2NsYXNzPVwiJyArIG5hdkFuaW1hdGlvbk91dCArICdcIicgOiAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAvLyBoaWRlIG5hdiBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICAgLy8gbmF2SHRtbCArPSAnPGJ1dHRvbiAnICsgY2xhc3NTdHIgKyAnIGRhdGEtbmF2PVwiJyArIGkgKydcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUlkICsgJy1pdGVtJyArIGkgKydcIiBoaWRkZW4gdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPic7XG4gICAgICAgICAgbmF2SHRtbCArPSAnPGJ1dHRvbiBkYXRhLW5hdj1cIicgKyBpICsnXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJdGVtc1tpbml0SW5kZXggKyBpXS5pZCArJ1wiIGhpZGRlbiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+JztcbiAgICAgICAgfVxuICAgICAgICBuYXZIdG1sID0gJzxkaXYgY2xhc3M9XCJ0bnMtbmF2XCIgYXJpYS1sYWJlbD1cIkNhcm91c2VsIFBhZ2luYXRpb25cIj4nICsgbmF2SHRtbCArICc8L2Rpdj4nO1xuICAgICAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbmF2SHRtbCk7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtbmF2Jyk7XG4gICAgICAgIG5hdkl0ZW1zID0gbmF2Q29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIHRyYW5zaXRpb25cbiAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IFRSQU5TSVRJT05EVVJBVElPTi5zdWJzdHJpbmcoMCwgVFJBTlNJVElPTkRVUkFUSU9OLmxlbmd0aCAtIDE4KS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgc3RyID0gJ3RyYW5zaXRpb246IGFsbCAnICsgc3BlZWQgLyAxMDAwICsgJ3MnO1xuXG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICBzdHIgPSAnLScgKyBwcmVmaXggKyAnLScgKyBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnW2FyaWEtY29udHJvbHNePScgKyBzbGlkZUlkICsgJy1pdGVtXScsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cnMobmF2SXRlbXNbMF0sIHsndGFiaW5kZXgnOiAnMCcsICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnfSk7XG4gICAgICBhZGRDbGFzcyhuYXZJdGVtc1swXSwgbmF2QWN0aXZlQ2xhc3MpO1xuICAgICAgLy8gaWYgKG5hdkFuaW1hdGlvbk91dCkge1xuICAgICAgLy8gICByZW1vdmVDbGFzcyhuYXZJdGVtc1swXSwgbmF2QW5pbWF0aW9uT3V0KTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmIChuYXZBbmltYXRpb25Jbikge1xuICAgICAgLy8gICBhZGRDbGFzcyhuYXZJdGVtc1swXSwgbmF2QW5pbWF0aW9uSW4pO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBhZGQgZXZlbnRzXG4gICAgICBhZGRFdmVudHMobmF2Q29udGFpbmVyLCBuYXZFdmVudHMpO1xuXG4gICAgICBpZiAoIW5hdikgeyBoaWRlRWxlbWVudChuYXZDb250YWluZXIpOyB9XG4gICAgfVxuXG5cbiAgICAvLyA9PSBhdXRvcGxheUluaXQgPT1cbiAgICBpZiAoaGFzQXV0b3BsYXkpIHtcbiAgICAgIHZhciB0eHQgPSBhdXRvcGxheSA/ICdzdG9wJyA6ICdzdGFydCc7XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgc2V0QXR0cnMoYXV0b3BsYXlCdXR0b24sIHsnZGF0YS1hY3Rpb24nOiB0eHR9KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hdXRvcGxheUJ1dHRvbk91dHB1dCkge1xuICAgICAgICBpbm5lcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsICc8YnV0dG9uIGRhdGEtYWN0aW9uPVwiJyArIHR4dCArICdcIiB0eXBlPVwiYnV0dG9uXCI+JyArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMF0gKyB0eHQgKyBhdXRvcGxheUh0bWxTdHJpbmdzWzFdICsgYXV0b3BsYXlUZXh0WzBdICsgJzwvYnV0dG9uPicpO1xuICAgICAgICBhdXRvcGxheUJ1dHRvbiA9IG91dGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3Rpb25dJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBldmVudFxuICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7XG4gICAgICAgIGFkZEV2ZW50cyhhdXRvcGxheUJ1dHRvbiwgeydjbGljayc6IHRvZ2dsZUFuaW1hdGlvbn0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikge1xuICAgICAgICAgIGhpZGVFbGVtZW50KGF1dG9wbGF5QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlKSB7IGFkZEV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTsgfVxuICAgICAgICBpZiAoYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpOyB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyA9PSBjb250cm9sc0luaXQgPT1cbiAgICBpZiAoaGFzQ29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBwcmV2QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMF07XG4gICAgICAgIG5leHRCdXR0b24gPSBjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlblsxXTtcbiAgICAgICAgc2V0QXR0cnMoY29udHJvbHNDb250YWluZXIsIHtcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdDYXJvdXNlbCBOYXZpZ2F0aW9uJyxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEF0dHJzKHByZXZCdXR0b24sIHsnZGF0YS1jb250cm9scycgOiAncHJldid9KTtcbiAgICAgICAgc2V0QXR0cnMobmV4dEJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICduZXh0J30pO1xuICAgICAgICBzZXRBdHRycyhjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlbiwge1xuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc2xpZGVJZCxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnPGRpdiBjbGFzcz1cInRucy1jb250cm9sc1wiIGFyaWEtbGFiZWw9XCJDYXJvdXNlbCBOYXZpZ2F0aW9uXCIgdGFiaW5kZXg9XCIwXCI+PGJ1dHRvbiBkYXRhLWNvbnRyb2xzPVwicHJldlwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKydcIiB0eXBlPVwiYnV0dG9uXCI+JyArIGNvbnRyb2xzVGV4dFswXSArICc8L2J1dHRvbj48YnV0dG9uIGRhdGEtY29udHJvbHM9XCJuZXh0XCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArJ1wiIHR5cGU9XCJidXR0b25cIj4nICsgY29udHJvbHNUZXh0WzFdICsgJzwvYnV0dG9uPjwvZGl2PicpO1xuXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtY29udHJvbHMnKTtcbiAgICAgICAgcHJldkJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBuZXh0QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMV07XG4gICAgICB9XG5cbiAgICAgIHByZXZJc0J1dHRvbiA9IGlzQnV0dG9uKHByZXZCdXR0b24pO1xuICAgICAgbmV4dElzQnV0dG9uID0gaXNCdXR0b24obmV4dEJ1dHRvbik7XG5cbiAgICAgIGlmICghbG9vcCkgeyBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7IH1cblxuICAgICAgLy8gYWRkIGV2ZW50c1xuICAgICAgYWRkRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7XG5cbiAgICAgIGlmICghY29udHJvbHMpIHsgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpOyB9XG4gICAgfVxuXG5cbiAgICBpZiAodG91Y2gpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyBhZGRFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuICAgIGlmIChhcnJvd0tleXMpIHsgYWRkRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cblxuXG4gICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykge1xuICAgICAgZXZlbnRzLm9uKCdvdXRlclJlc2l6ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2l6ZVRhc2tzKCk7XG4gICAgICAgIGV2ZW50cy5lbWl0KCdpbm5lckxvYWRlZCcsIGluZm8oKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnRzKHdpbiwgeydyZXNpemUnOiBvblJlc2l6ZX0pO1xuICAgICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykge1xuICAgICAgICBldmVudHMub24oJ2lubmVyTG9hZGVkJywgcnVuQXV0b0hlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGF6eUxvYWQoKTtcbiAgICBydW5BdXRvSGVpZ2h0KCk7XG4gICAgdG9nZ2xlU2xpZGVEaXNwbGF5QW5kRWRnZVBhZGRpbmcoKTtcbiAgICB1cGRhdGVGaXhlZFdpZHRoSW5uZXJXcmFwcGVyU3R5bGUoKTtcblxuICAgIGV2ZW50cy5vbignaW5kZXhDaGFuZ2VkJywgYWRkaXRpb25hbFVwZGF0ZXMpO1xuXG4gICAgaWYgKHR5cGVvZiBvbkluaXQgPT09ICdmdW5jdGlvbicpIHsgb25Jbml0KGluZm8oKSk7IH1cbiAgICBpZiAobmVzdGVkID09PSAnaW5uZXInKSB7IGV2ZW50cy5lbWl0KCdpbm5lckxvYWRlZCcsIGluZm8oKSk7IH1cblxuICAgIGlmIChkaXNhYmxlKSB7IGRpc2FibGVTbGlkZXIodHJ1ZSk7IH1cbiAgfSkoKTtcblxuXG5cblxuXG4vLyA9PT0gT04gUkVTSVpFID09PVxuICBmdW5jdGlvbiBvblJlc2l6ZSAoZSkge1xuICAgIGUgPSBlIHx8IHdpbi5ldmVudDtcblxuICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gICAgcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXdXVyA9IGdldFdpbmRvd1dpZHRoKCk7XG4gICAgICBpZiAod2luZG93V2lkdGggIT09IG5ld1dXKSB7XG4gICAgICAgIHdpbmRvd1dpZHRoID0gbmV3V1c7XG5cbiAgICAgICAgcmVzaXplVGFza3MoKTtcblxuICAgICAgICBpZiAobmVzdGVkID09PSAnb3V0ZXInKSB7IGV2ZW50cy5lbWl0KCdvdXRlclJlc2l6ZWQnLCBpbmZvKGUpKTsgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7IC8vIHVwZGF0ZSBhZnRlciBzdG9wIHJlc2l6aW5nIGZvciAxMDAgbXNcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhc2tzICgpIHtcbiAgICB2YXIgYnJlYWtwb2ludFpvbmVUZW0gPSBicmVha3BvaW50Wm9uZSxcbiAgICAgICAgaW5kZXhUZW0gPSBpbmRleCwgXG4gICAgICAgIGl0ZW1zVGVtID0gaXRlbXMsXG4gICAgICAgIGZyZWV6ZVRlbSA9IGZyZWV6ZTtcblxuICAgIHZwT3V0ZXIgPSBvdXRlcldyYXBwZXIuY2xpZW50V2lkdGg7XG4gICAgdnBJbm5lciA9IGlubmVyV3JhcHBlci5jbGllbnRXaWR0aDtcbiAgICBpZiAoYnJlYWtwb2ludHMpIHsgc2V0QnJlYWtwb2ludFpvbmUoKTsgfVxuXG5cbiAgICAvLyB0aGluZ3MgZG8gd2hlbiBicmVha3BvaW50IHpvbmUgY2hhbmdlXG4gICAgaWYgKGJyZWFrcG9pbnRab25lVGVtICE9PSBicmVha3BvaW50Wm9uZSB8fCBmaXhlZFdpZHRoKSB7XG4gICAgICB2YXIgc2xpZGVCeVRlbSA9IHNsaWRlQnksXG4gICAgICAgICAgYXJyb3dLZXlzVGVtID0gYXJyb3dLZXlzLFxuICAgICAgICAgIGF1dG9IZWlnaHRUZW0gPSBhdXRvSGVpZ2h0LFxuICAgICAgICAgIGZpeGVkV2lkdGhUZW0gPSBmaXhlZFdpZHRoLFxuICAgICAgICAgIGVkZ2VQYWRkaW5nVGVtID0gZWRnZVBhZGRpbmcsXG4gICAgICAgICAgZ3V0dGVyVGVtID0gZ3V0dGVyLFxuICAgICAgICAgIGRpc2FibGVUZW0gPSBkaXNhYmxlO1xuXG4gICAgICAvLyB1cGRhdGUgdmFyaWFibGVzXG4gICAgICBpdGVtcyA9IGdldE9wdGlvbignaXRlbXMnKTtcbiAgICAgIHNsaWRlQnkgPSBnZXRPcHRpb24oJ3NsaWRlQnknKTtcbiAgICAgIGRpc2FibGUgPSBnZXRPcHRpb24oJ2Rpc2FibGUnKTtcbiAgICAgIGZyZWV6ZSA9IGRpc2FibGUgPyB0cnVlIDogZnJlZXphYmxlID8gc2xpZGVDb3VudCA8PSBpdGVtcyA6IGZhbHNlO1xuXG4gICAgICBpZiAoaXRlbXMgIT09IGl0ZW1zVGVtKSB7XG4gICAgICAgIGluZGV4TWF4ID0gc2xpZGVDb3VudE5ldyAtIGl0ZW1zO1xuICAgICAgICAvLyBjaGVjayBpbmRleCBiZWZvcmUgdHJhbnNmb3JtIGluIGNhc2VcbiAgICAgICAgLy8gc2xpZGVyIHJlYWNoIHRoZSByaWdodCBlZGdlIHRoZW4gaXRlbXMgYmVjb21lIGJpZ2dlclxuICAgICAgICB1cGRhdGVJbmRleCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlzYWJsZSAhPT0gZGlzYWJsZVRlbSkge1xuICAgICAgICBkaXNhYmxlU2xpZGVyKGRpc2FibGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZnJlZXplICE9PSBmcmVlemVUZW0pIHtcbiAgICAgICAgLy8gcmVzZXQgaW5kZXggdG8gaW5pdGlhbCBzdGF0dXNcbiAgICAgICAgaWYgKGZyZWV6ZSkgeyBpbmRleCA9ICFjYXJvdXNlbCA/IDAgOiBjbG9uZUNvdW50OyB9XG5cbiAgICAgICAgdG9nZ2xlU2xpZGVEaXNwbGF5QW5kRWRnZVBhZGRpbmcoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGJyZWFrcG9pbnRab25lVGVtICE9PSBicmVha3BvaW50Wm9uZSkge1xuICAgICAgICBzcGVlZCA9IGdldE9wdGlvbignc3BlZWQnKTtcbiAgICAgICAgZWRnZVBhZGRpbmcgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyk7XG4gICAgICAgIGd1dHRlciA9IGdldE9wdGlvbignZ3V0dGVyJyk7XG5cbiAgICAgICAgZml4ZWRXaWR0aCA9IGdldE9wdGlvbignZml4ZWRXaWR0aCcpO1xuICAgICAgICBpZiAoIWRpc2FibGUgJiYgZml4ZWRXaWR0aCAhPT0gZml4ZWRXaWR0aFRlbSkge1xuICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhdXRvSGVpZ2h0ID0gZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0Jyk7XG4gICAgICAgIGlmIChhdXRvSGVpZ2h0ICE9PSBhdXRvSGVpZ2h0VGVtKSB7XG4gICAgICAgICAgaWYgKCFhdXRvSGVpZ2h0KSB7IGlubmVyV3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnJzsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFycm93S2V5cyA9IGZyZWV6ZSA/IGZhbHNlIDogZ2V0T3B0aW9uKCdhcnJvd0tleXMnKTtcbiAgICAgIGlmIChhcnJvd0tleXMgIT09IGFycm93S2V5c1RlbSkge1xuICAgICAgICBhcnJvd0tleXMgP1xuICAgICAgICAgIGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpIDpcbiAgICAgICAgICByZW1vdmVFdmVudHMoZG9jLCBkb2NtZW50S2V5ZG93bkV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0NvbnRyb2xzKSB7XG4gICAgICAgIHZhciBjb250cm9sc1RlbSA9IGNvbnRyb2xzLFxuICAgICAgICAgICAgY29udHJvbHNUZXh0VGVtID0gY29udHJvbHNUZXh0O1xuICAgICAgICBjb250cm9scyA9IGZyZWV6ZSA/IGZhbHNlIDogZ2V0T3B0aW9uKCdjb250cm9scycpO1xuICAgICAgICBjb250cm9sc1RleHQgPSBnZXRPcHRpb24oJ2NvbnRyb2xzVGV4dCcpO1xuXG4gICAgICAgIGlmIChjb250cm9scyAhPT0gY29udHJvbHNUZW0pIHtcbiAgICAgICAgICBjb250cm9scyA/XG4gICAgICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcikgOlxuICAgICAgICAgICAgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpOyBcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbHNUZXh0ICE9PSBjb250cm9sc1RleHRUZW0pIHtcbiAgICAgICAgICBwcmV2QnV0dG9uLmlubmVySFRNTCA9IGNvbnRyb2xzVGV4dFswXTtcbiAgICAgICAgICBuZXh0QnV0dG9uLmlubmVySFRNTCA9IGNvbnRyb2xzVGV4dFsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc05hdikge1xuICAgICAgICB2YXIgbmF2VGVtID0gbmF2O1xuICAgICAgICBuYXYgPSBmcmVlemUgPyBmYWxzZSA6IGdldE9wdGlvbignbmF2Jyk7XG5cbiAgICAgICAgaWYgKG5hdiAhPT0gbmF2VGVtKSB7XG4gICAgICAgICAgaWYgKG5hdikge1xuICAgICAgICAgICAgc2hvd0VsZW1lbnQobmF2Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlkZUVsZW1lbnQobmF2Q29udGFpbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChoYXNUb3VjaCkge1xuICAgICAgICB2YXIgdG91Y2hUZW0gPSB0b3VjaDtcbiAgICAgICAgdG91Y2ggPSBmcmVlemUgPyBmYWxzZSA6IGdldE9wdGlvbigndG91Y2gnKTtcblxuICAgICAgICBpZiAodG91Y2ggIT09IHRvdWNoVGVtICYmIGNhcm91c2VsKSB7XG4gICAgICAgICAgdG91Y2ggP1xuICAgICAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpIDpcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIHRvdWNoRXZlbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc01vdXNlRHJhZykge1xuICAgICAgICB2YXIgbW91c2VEcmFnVGVtID0gbW91c2VEcmFnO1xuICAgICAgICBtb3VzZURyYWcgPSBmcmVlemUgPyBmYWxzZSA6IGdldE9wdGlvbignbW91c2VEcmFnJyk7XG5cbiAgICAgICAgaWYgKG1vdXNlRHJhZyAhPT0gbW91c2VEcmFnVGVtICYmIGNhcm91c2VsKSB7XG4gICAgICAgICAgbW91c2VEcmFnID9cbiAgICAgICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpIDpcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaGFzQXV0b3BsYXkpIHtcbiAgICAgICAgdmFyIGF1dG9wbGF5VGVtID0gYXV0b3BsYXksXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VUZW0gPSBhdXRvcGxheUhvdmVyUGF1c2UsXG4gICAgICAgICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSxcbiAgICAgICAgICAgIGF1dG9wbGF5VGV4dFRlbSA9IGF1dG9wbGF5VGV4dDtcblxuICAgICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgICAgYXV0b3BsYXkgPSBhdXRvcGxheUhvdmVyUGF1c2UgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXV0b3BsYXkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2UgPSBnZXRPcHRpb24oJ2F1dG9wbGF5SG92ZXJQYXVzZScpO1xuICAgICAgICAgICAgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGdldE9wdGlvbignYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2UgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF1dG9wbGF5VGV4dCA9IGdldE9wdGlvbignYXV0b3BsYXlUZXh0Jyk7XG4gICAgICAgIGF1dG9wbGF5VGltZW91dCA9IGdldE9wdGlvbignYXV0b3BsYXlUaW1lb3V0Jyk7XG5cbiAgICAgICAgaWYgKGF1dG9wbGF5ICE9PSBhdXRvcGxheVRlbSkge1xuICAgICAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHNob3dFbGVtZW50KGF1dG9wbGF5QnV0dG9uKTsgfVxuICAgICAgICAgICAgaWYgKCFhbmltYXRpbmcpIHsgc3RhcnRBdXRvcGxheSgpOyB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyBoaWRlRWxlbWVudChhdXRvcGxheUJ1dHRvbik7IH1cbiAgICAgICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSAhPT0gYXV0b3BsYXlIb3ZlclBhdXNlVGVtKSB7XG4gICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlID9cbiAgICAgICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKSA6XG4gICAgICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgIT09IGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0pIHtcbiAgICAgICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID9cbiAgICAgICAgICAgIGFkZEV2ZW50cyhkb2MsIHZpc2liaWxpdHlFdmVudCkgOlxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgdmlzaWJpbGl0eUV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24gJiYgYXV0b3BsYXlUZXh0ICE9PSBhdXRvcGxheVRleHRUZW0pIHtcbiAgICAgICAgICB2YXIgaSA9IGF1dG9wbGF5ID8gMSA6IDAsXG4gICAgICAgICAgICAgIGh0bWwgPSBhdXRvcGxheUJ1dHRvbi5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIGxlbiA9IGh0bWwubGVuZ3RoIC0gYXV0b3BsYXlUZXh0VGVtW2ldLmxlbmd0aDtcbiAgICAgICAgICBpZiAoaHRtbC5zdWJzdHJpbmcobGVuKSA9PT0gYXV0b3BsYXlUZXh0VGVtW2ldKSB7XG4gICAgICAgICAgICBhdXRvcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBodG1sLnN1YnN0cmluZygwLCBsZW4pICsgYXV0b3BsYXlUZXh0W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJRThcbiAgICAgIC8vICMjIHVwZGF0ZSBpbm5lciB3cmFwcGVyLCBjb250YWluZXIsIHNsaWRlcyBpZiBuZWVkZWRcbiAgICAgIC8vIHNldCBpbmxpbmUgc3R5bGVzIGZvciBpbm5lciB3cmFwcGVyICYgY29udGFpbmVyXG4gICAgICAvLyBpbnNlcnQgc3R5bGVzaGVldCAob25lIGxpbmUpIGZvciBzbGlkZXMgb25seSAoc2luY2Ugc2xpZGVzIGFyZSBtYW55KVxuICAgICAgaWYgKCFDU1NNUSkge1xuICAgICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgICBpZiAoIWZyZWV6ZSAmJiAoZWRnZVBhZGRpbmcgIT09IGVkZ2VQYWRkaW5nVGVtIHx8IGd1dHRlciAhPT0gZ3V0dGVyVGVtKSkge1xuICAgICAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCAmJiAoZml4ZWRXaWR0aCAhPT0gZml4ZWRXaWR0aFRlbSB8fCBndXR0ZXIgIT09IGd1dHRlclRlbSB8fCBpdGVtcyAhPT0gaXRlbXNUZW0pKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzbGlkZSBzdHlsZXNcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgKGl0ZW1zICE9PSBpdGVtc1RlbSB8fCBndXR0ZXIgIT09IGd1dHRlclRlbSB8fCBmaXhlZFdpZHRoICE9IGZpeGVkV2lkdGhUZW0pKSB7XG4gICAgICAgICAgdmFyIHN0ciA9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKSArIFxuICAgICAgICAgICAgICAgICAgICBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7XG5cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgbGluZSBhbmRcbiAgICAgICAgICAvLyBhZGQgbmV3IHN0eWxlc1xuICAgICAgICAgIHNoZWV0LnJlbW92ZVJ1bGUoZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpIC0gMSk7XG4gICAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3aWxsIGRvIHRyYW5zZm9ybSBsYXRlciBpZiBpbmRleCAhPT0gaW5kZXhUZW1cbiAgICAgICAgLy8gbWFrZSBzdXJlIGRvVHJhbnNmb3JtIHdpbGwgb25seSBydW4gb25jZVxuICAgICAgICBpZiAoIWZpeGVkV2lkdGggJiYgaW5kZXggPT09IGluZGV4VGVtKSB7IGRvVHJhbnNmb3JtKDApOyB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gaW5kZXhUZW0pIHsgXG4gICAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuICAgICAgICBkb1RyYW5zZm9ybSgwKTsgXG4gICAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtcyAhPT0gaXRlbXNUZW0pIHsgXG4gICAgICAgIGFkZGl0aW9uYWxVcGRhdGVzKCk7XG4gICAgICAgIHJ1bkF1dG9IZWlnaHQoKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpIHsgc2V0U25hcEludGVydmFsKCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGluZ3MgYWx3YXlzIGRvIHJlZ2FyZGxlc3Mgb2YgYnJlYWtwb2ludCB6b25lIGNoYW5naW5nXG4gICAgaWYgKCFob3Jpem9udGFsICYmICFkaXNhYmxlKSB7XG4gICAgICBnZXRTbGlkZU9mZnNldFRvcHMoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7XG4gICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZpeGVkV2lkdGhJbm5lcldyYXBwZXJTdHlsZSh0cnVlKTtcblxuICAgIC8vIGF1dG8gaGVpZ2h0XG4gICAgcnVuQXV0b0hlaWdodCgpO1xuICB9XG5cblxuXG5cblxuICAvLyA9PT0gSU5JVElBTElaQVRJT04gRlVOQ1RJT05TID09PSAvL1xuICBmdW5jdGlvbiBzZXRCcmVha3BvaW50Wm9uZSAoKSB7XG4gICAgYnJlYWtwb2ludFpvbmUgPSAwO1xuICAgIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24oYnAsIGkpIHtcbiAgICAgIGlmICh3aW5kb3dXaWR0aCA+PSBicCkgeyBicmVha3BvaW50Wm9uZSA9IGkgKyAxOyB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAoc2xpZGVCeSwgaW5kZXhNaW4sIGluZGV4TWF4KSA9PiBpbmRleFxuICB2YXIgdXBkYXRlSW5kZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb29wID8gXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZWZ0RWRnZSA9IGluZGV4TWluICsgc2xpZGVCeSwgcmlnaHRFZGdlID0gaW5kZXhNYXggLSBzbGlkZUJ5O1xuXG4gICAgICAgIC8vIGFkanVzdCBlZGdlcyB3aGVuIGVkZ2UgcGFkZGluZyBpcyB0cnVlXG4gICAgICAgIC8vIG9yIGZpeGVkLXdpZHRoIHNsaWRlciB3aXRoIGV4dHJhIHNwYWNlIG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgIGlmIChlZGdlUGFkZGluZykge1xuICAgICAgICAgIGxlZnRFZGdlICs9IDE7XG4gICAgICAgICAgcmlnaHRFZGdlIC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZml4ZWRXaWR0aCkge1xuICAgICAgICAgIHZhciBndCA9IGd1dHRlciA/IGd1dHRlciA6IDA7XG4gICAgICAgICAgaWYgKHZwT3V0ZXIlKGZpeGVkV2lkdGggKyBndCkgPiBndCkgeyByaWdodEVkZ2UgLT0gMTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID4gcmlnaHRFZGdlKSB7XG4gICAgICAgICAgd2hpbGUoaW5kZXggPj0gbGVmdEVkZ2UgKyBzbGlkZUNvdW50KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgfSBlbHNlIGlmKGluZGV4IDwgbGVmdEVkZ2UpIHtcbiAgICAgICAgICB3aGlsZShpbmRleCA8PSByaWdodEVkZ2UgLSBzbGlkZUNvdW50KSB7IGluZGV4ICs9IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgfVxuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiAoKSB7IGluZGV4ID0gTWF0aC5tYXgoaW5kZXhNaW4sIE1hdGgubWluKGluZGV4TWF4LCBpbmRleCkpOyB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNsaWRlRGlzcGxheUFuZEVkZ2VQYWRkaW5nICgpIHtcbiAgICAvLyBpZiAoY2xvbmVDb3VudCkge1xuICAgIC8vIGlmIChmaXhlZFdpZHRoICYmIGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JyxcbiAgICAgICAgICBpbm5lcldyYXBwZXJNYXJnaW5aZXJvID0gaW5uZXJXcmFwcGVyLnN0eWxlLm1hcmdpbiA9PT0gJzBweCc7XG5cbiAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgaWYgKCFpbm5lcldyYXBwZXJNYXJnaW5aZXJvKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIGVkZ2UgcGFkZGluZyBmcm9tIGlubmVyIHdyYXBwZXJcbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHsgaW5uZXJXcmFwcGVyLnN0eWxlLm1hcmdpbiA9ICcwcHgnOyB9XG5cbiAgICAgICAgICAvLyBhZGQgY2xhc3MgdG5zLXRyYW5zcGFyZW50IHRvIGNsb25lZCBzbGlkZXNcbiAgICAgICAgICBpZiAoY2xvbmVDb3VudCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNsb25lQ291bnQ7IGktLTspIHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3Moc2xpZGVJdGVtc1tpXSwgc3RyKTtcbiAgICAgICAgICAgICAgYWRkQ2xhc3Moc2xpZGVJdGVtc1tzbGlkZUNvdW50TmV3IC0gaSAtIDFdLCBzdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbm5lcldyYXBwZXJNYXJnaW5aZXJvKSB7XG4gICAgICAgIC8vIHJlc3RvcmUgZWRnZSBwYWRkaW5nIGZvciBpbm5lciB3cmFwcGVyXG4gICAgICAgIC8vIGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gICAgICAgIGlmIChlZGdlUGFkZGluZyAmJiAhZml4ZWRXaWR0aCAmJiBDU1NNUSkgeyBpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luID0gJyc7IH1cblxuICAgICAgICAvLyByZW1vdmUgY2xhc3MgdG5zLXRyYW5zcGFyZW50IHRvIGNsb25lZCBzbGlkZXNcbiAgICAgICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gY2xvbmVDb3VudDsgaS0tOykge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVJdGVtc1tpXSwgc3RyKTtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVGaXhlZFdpZHRoSW5uZXJXcmFwcGVyU3R5bGUgKHJlc2l6ZSkge1xuICAgIGlmIChmaXhlZFdpZHRoICYmIGVkZ2VQYWRkaW5nKSB7XG4gICAgICAvLyByZW1vdmUgZWRnZSBwYWRkaW5nIHdoZW4gZnJlZXplIG9yIHZpZXdwb3J0IG5hcnJvd2VyIHRoYW4gb25lIHNsaWRlXG4gICAgICBpZiAoZnJlZXplIHx8IHZwT3V0ZXIgPD0gKGZpeGVkV2lkdGggKyBndXR0ZXIpKSB7XG4gICAgICAgIGlmIChpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luICE9PSAnMHB4JykgeyBpbm5lcldyYXBwZXIuc3R5bGUubWFyZ2luID0gJzBweCc7IH1cbiAgICAgIC8vIHVwZGF0ZSBlZGdlIHBhZGRpbmcgb24gcmVzaXplXG4gICAgICB9IGVsc2UgaWYgKHJlc2l6ZSkge1xuICAgICAgICBpbm5lcldyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZywgZ3V0dGVyLCBmaXhlZFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyIChkaXNhYmxlKSB7XG4gICAgdmFyIGxlbiA9IHNsaWRlSXRlbXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChkaXNhYmxlKSB7XG4gICAgICBzaGVldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzQ29udGFpbmVyLnN1YnN0cmluZygxKSwgJycpO1xuICAgICAgY29udGFpbmVyLnN0eWxlID0gJyc7XG4gICAgICBpZiAobG9vcCkge1xuICAgICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICAgIGlmIChjYXJvdXNlbCkgeyBoaWRlRWxlbWVudChzbGlkZUl0ZW1zW2pdKTsgfVxuICAgICAgICAgIGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbbGVuIC0gaiAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB2ZXJ0aWNhbCBzbGlkZXJcbiAgICAgIGlmICghaG9yaXpvbnRhbCB8fCAhY2Fyb3VzZWwpIHsgaW5uZXJXcmFwcGVyLnN0eWxlID0gJyc7IH1cblxuICAgICAgLy8gZ2FsbGVyeVxuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBzbGlkZUNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG4gICAgICAgICAgaXRlbS5zdHlsZSA9ICcnO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hlZXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gY2xhc3NDb250YWluZXI7XG5cbiAgICAgIC8vIHZlcnRpY2FsIHNsaWRlcjogZ2V0IG9mZnNldFRvcHMgYmVmb3JlIGNvbnRhaW5lciB0cmFuc2Zvcm1cbiAgICAgIGlmICghaG9yaXpvbnRhbCkgeyBnZXRTbGlkZU9mZnNldFRvcHMoKTsgfVxuXG4gICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgICBpZiAoY2Fyb3VzZWwpIHsgc2hvd0VsZW1lbnQoc2xpZGVJdGVtc1tqXSk7IH1cbiAgICAgICAgICBzaG93RWxlbWVudChzbGlkZUl0ZW1zW2xlbiAtIGogLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZ2FsbGVyeVxuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBzbGlkZUNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV0sXG4gICAgICAgICAgICAgIGNsYXNzTiA9IGkgPCBpbmRleCArIGl0ZW1zID8gYW5pbWF0ZUluIDogYW5pbWF0ZU5vcm1hbDtcbiAgICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAoaSAtIGluZGV4KSAqIDEwMCAvIGl0ZW1zICsgJyUnO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIGNsYXNzTik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBsYXp5bG9hZFxuICBmdW5jdGlvbiBsYXp5TG9hZCAoKSB7XG4gICAgaWYgKGxhenlsb2FkICYmICFkaXNhYmxlKSB7XG4gICAgICB2YXIgaSA9IGluZGV4LCBcbiAgICAgICAgICBsZW4gPSBpbmRleCArIGl0ZW1zO1xuICAgICAgICAgIFxuICAgICAgaWYgKGVkZ2VQYWRkaW5nKSB7XG4gICAgICAgIGkgLT0xO1xuICAgICAgICBsZW4gKz0xO1xuICAgICAgfVxuXG4gICAgICBmb3IoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHNsaWRlSXRlbXNbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnRucy1sYXp5LWltZycpLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgLy8gc3RvcCBwcm9wYWdhdGlvbmwgdHJhbnNpdGlvbmVuZCBldmVudCB0byBjb250YWluZXJcbiAgICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfTtcbiAgICAgICAgICBhZGRFdmVudHMoaW1nLCBldmUpO1xuXG4gICAgICAgICAgaWYgKCFoYXNDbGFzcyhpbWcsICdsb2FkZWQnKSkge1xuICAgICAgICAgICAgaW1nLnNyYyA9IGdldEF0dHIoaW1nLCAnZGF0YS1zcmMnKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGltZywgJ2xvYWRlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2sgaWYgYWxsIHZpc2libGUgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgLy8gYW5kIHVwZGF0ZSBjb250YWluZXIgaGVpZ2h0IGlmIGl0J3MgZG9uZVxuICBmdW5jdGlvbiBydW5BdXRvSGVpZ2h0ICgpIHtcbiAgICBpZiAoYXV0b0hlaWdodCAmJiAhZGlzYWJsZSkge1xuICAgICAgLy8gZ2V0IGFsbCBpbWFnZXMgaW5zaWRlIHZpc2libGUgc2xpZGUgaXRlbXNcbiAgICAgIHZhciBpbWFnZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpIDwgaW5kZXggKyBpdGVtczsgaSsrKSB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChzbGlkZUl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLCBmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goaW1nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHVwZGF0ZUlubmVyV3JhcHBlckhlaWdodCgpOyBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrSW1hZ2VzTG9hZGVkKGltYWdlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJbWFnZXNMb2FkZWQgKGltYWdlcykge1xuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcsIGluZGV4KSB7XG4gICAgICBpZiAoaW1hZ2VMb2FkZWQoaW1nKSkgeyBpbWFnZXMuc3BsaWNlKGluZGV4LCAxKTsgfVxuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVwZGF0ZUlubmVyV3JhcHBlckhlaWdodCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgXG4gICAgICAgIGNoZWNrSW1hZ2VzTG9hZGVkKGltYWdlcyk7IFxuICAgICAgfSwgMTYpO1xuICAgIH1cbiAgfSBcblxuICBmdW5jdGlvbiBhZGRpdGlvbmFsVXBkYXRlcyAoKSB7XG4gICAgbGF6eUxvYWQoKTsgXG4gICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcbiAgICB1cGRhdGVDb250cm9sc1N0YXR1cygpO1xuICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICB1cGRhdGVOYXZTdGF0dXMoKTtcbiAgfVxuXG5cbiAgLy8gdXBkYXRlIGlubmVyIHdyYXBwZXIgaGVpZ2h0XG4gIC8vIDEuIGdldCB0aGUgbWF4LWhlaWdodCBvZiB0aGUgdmlzaWJsZSBzbGlkZXNcbiAgLy8gMi4gc2V0IHRyYW5zaXRpb25EdXJhdGlvbiB0byBzcGVlZFxuICAvLyAzLiB1cGRhdGUgaW5uZXIgd3JhcHBlciBoZWlnaHQgdG8gbWF4LWhlaWdodFxuICAvLyA0LiBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uIHRvIDBzIGFmdGVyIHRyYW5zaXRpb24gZG9uZVxuICBmdW5jdGlvbiB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQgKCkge1xuICAgIHZhciBoZWlnaHRzID0gW10sIG1heEhlaWdodDtcbiAgICBmb3IgKHZhciBpID0gaW5kZXg7IGkgPCBpbmRleCArIGl0ZW1zOyBpKyspIHtcbiAgICAgIGhlaWdodHMucHVzaChzbGlkZUl0ZW1zW2ldLm9mZnNldEhlaWdodCk7XG4gICAgfVxuICAgIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuXG4gICAgaWYgKGlubmVyV3JhcHBlci5zdHlsZS5oZWlnaHQgIT09IG1heEhlaWdodCkge1xuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzZXREdXJhdGlvbnMoc3BlZWQpOyB9XG4gICAgICBpbm5lcldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBlZGdlIG9mIHRoZSBmaXJzdCBzbGlkZSB0byBlYWNoIHNsaWRlXG4gIC8vIChpbml0KSA9PiBzbGlkZU9mZnNldFRvcHNcbiAgZnVuY3Rpb24gZ2V0U2xpZGVPZmZzZXRUb3BzICgpIHtcbiAgICBzbGlkZU9mZnNldFRvcHMgPSBbMF07XG4gICAgdmFyIHRvcEZpcnN0ID0gc2xpZGVJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGF0dHI7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBzbGlkZUNvdW50TmV3OyBpKyspIHtcbiAgICAgIGF0dHIgPSBzbGlkZUl0ZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIHNsaWRlT2Zmc2V0VG9wcy5wdXNoKGF0dHIgLSB0b3BGaXJzdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IHNuYXBJbnRlcnZhbCAoZm9yIElFMTApXG4gIGZ1bmN0aW9uIHNldFNuYXBJbnRlcnZhbCAoKSB7XG4gICAgb3V0ZXJXcmFwcGVyLnN0eWxlLm1zU2Nyb2xsU25hcFBvaW50c1ggPSAnc25hcEludGVydmFsKDAlLCAnICsgKDEwMCAvIGl0ZW1zKSArICclKSc7XG4gIH1cblxuICAvLyB1cGRhdGUgc2xpZGVcbiAgZnVuY3Rpb24gdXBkYXRlU2xpZGVTdGF0dXMgKCkge1xuICAgIGZvciAodmFyIGkgPSBzbGlkZUNvdW50TmV3OyBpLS07KSB7XG4gICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG4gICAgICAvLyB2aXNpYmxlIHNsaWRlc1xuICAgICAgaWYgKGkgPj0gaW5kZXggJiYgaSA8IGluZGV4ICsgaXRlbXMpIHtcbiAgICAgICAgaWYgKGhhc0F0dHIoaXRlbSwgJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICBzZXRBdHRycyhpdGVtLCB7J2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ30pO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGl0ZW0sIFsndGFiaW5kZXgnXSk7XG4gICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIC8vIGhpZGRlbiBzbGlkZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzQXR0cihpdGVtLCAndGFiaW5kZXgnKSkge1xuICAgICAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ2xhc3MoaXRlbSwgc2xpZGVBY3RpdmVDbGFzcykpIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldCB0YWJpbmRleCAmIGFyaWEtc2VsZWN0ZWQgb24gTmF2XG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdlN0YXR1cyAoKSB7XG4gICAgLy8gZ2V0IGN1cnJlbnQgbmF2XG4gICAgaWYgKG5hdikge1xuICAgICAgbmF2Q3VycmVudEluZGV4ID0gbmF2Q2xpY2tlZCAhPT0gLTEgPyBuYXZDbGlja2VkIDogaW5kZXglc2xpZGVDb3VudDtcbiAgICAgIG5hdkNsaWNrZWQgPSAtMTtcblxuICAgICAgaWYgKG5hdkN1cnJlbnRJbmRleCAhPT0gbmF2Q3VycmVudEluZGV4Q2FjaGVkKSB7XG4gICAgICAgIHZhciBuYXZQcmV2ID0gbmF2SXRlbXNbbmF2Q3VycmVudEluZGV4Q2FjaGVkXSxcbiAgICAgICAgICAgIG5hdkN1cnJlbnQgPSBuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHNldEF0dHJzKG5hdlByZXYsIHtcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0QXR0cnMobmF2Q3VycmVudCwge1xuICAgICAgICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MobmF2UHJldiwgbmF2QWN0aXZlQ2xhc3MpO1xuICAgICAgICBhZGRDbGFzcyhuYXZDdXJyZW50LCBuYXZBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgLy8gaWYgKG5hdkFuaW1hdGlvbk91dCkge1xuICAgICAgICAvLyAgIHJlbW92ZUNsYXNzKG5hdlByZXYsIG5hdkFuaW1hdGlvbkluKTtcbiAgICAgICAgLy8gICBhZGRDbGFzcyhuYXZQcmV2LCBuYXZBbmltYXRpb25PdXQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChuYXZBbmltYXRpb25Jbikge1xuICAgICAgICAvLyAgIHJlbW92ZUNsYXNzKG5hdkN1cnJlbnQsIG5hdkFuaW1hdGlvbk91dCk7XG4gICAgICAgIC8vICAgYWRkQ2xhc3MobmF2Q3VycmVudCwgbmF2QW5pbWF0aW9uSW4pO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNCdXR0b24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcmlhRGlzYWJsZWQgKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNFbmFibGVFbGVtZW50IChpc0J1dHRvbiwgZWwsIHZhbCkge1xuICAgIGlmIChpc0J1dHRvbikge1xuICAgICAgZWwuZGlzYWJsZWQgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHZhbC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgJ2Rpc2FibGVkJyB0byB0cnVlIG9uIGNvbnRyb2xzIHdoZW4gcmVhY2ggdGhlIGVkZ2VzXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzU3RhdHVzICgpIHtcbiAgICBpZiAoIWNvbnRyb2xzIHx8IGxvb3ApIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgcHJldkRpc2FibGVkID0gKHByZXZJc0J1dHRvbikgPyBwcmV2QnV0dG9uLmRpc2FibGVkIDogaXNBcmlhRGlzYWJsZWQocHJldkJ1dHRvbiksXG4gICAgICAgIG5leHREaXNhYmxlZCA9IChuZXh0SXNCdXR0b24pID8gbmV4dEJ1dHRvbi5kaXNhYmxlZCA6IGlzQXJpYURpc2FibGVkKG5leHRCdXR0b24pLFxuICAgICAgICBkaXNhYmxlUHJldiA9IChpbmRleCA9PT0gaW5kZXhNaW4pID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlTmV4dCA9ICghcmV3aW5kICYmIGluZGV4ID09PSBpbmRleE1heCkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAoZGlzYWJsZVByZXYgJiYgIXByZXZEaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChwcmV2SXNCdXR0b24sIHByZXZCdXR0b24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVQcmV2ICYmIHByZXZEaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChwcmV2SXNCdXR0b24sIHByZXZCdXR0b24sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGRpc2FibGVOZXh0ICYmICFuZXh0RGlzYWJsZWQpIHtcbiAgICAgIGRpc0VuYWJsZUVsZW1lbnQobmV4dElzQnV0dG9uLCBuZXh0QnV0dG9uLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKCFkaXNhYmxlTmV4dCAmJiBuZXh0RGlzYWJsZWQpIHtcbiAgICAgIGRpc0VuYWJsZUVsZW1lbnQobmV4dElzQnV0dG9uLCBuZXh0QnV0dG9uLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGR1cmF0aW9uXG4gIGZ1bmN0aW9uIHNldER1cmF0aW9ucyAoZHVyYXRpb24sIHRhcmdldCkge1xuICAgIGR1cmF0aW9uID0gIWR1cmF0aW9uID8gJycgOiBkdXJhdGlvbiAvIDEwMDAgKyAncyc7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGNvbnRhaW5lcjtcbiAgICB0YXJnZXQuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IGR1cmF0aW9uO1xuXG4gICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgdGFyZ2V0LnN0eWxlW0FOSU1BVElPTkRVUkFUSU9OXSA9IGR1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgIGlubmVyV3JhcHBlci5zdHlsZVtUUkFOU0lUSU9ORFVSQVRJT05dID0gZHVyYXRpb247XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUgKCkge1xuICAgIHZhciB2YWw7XG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgIHZhbCA9IC0gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogaW5kZXggKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gVFJBTlNGT1JNID8gc2xpZGVDb3VudE5ldyA6IGl0ZW1zO1xuICAgICAgICB2YWwgPSAtIGluZGV4ICogMTAwIC8gZGVub21pbmF0b3IgKyAnJSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IC0gc2xpZGVPZmZzZXRUb3BzW2luZGV4XSArICdweCc7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBkb0NvbnRhaW5lclRyYW5zZm9ybSAodmFsKSB7XG4gICAgaWYgKCF2YWwpIHsgdmFsID0gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKTsgfVxuICAgIGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXSA9IHRyYW5zZm9ybVByZWZpeCArIHZhbCArIHRyYW5zZm9ybVBvc3RmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlU2xpZGUgKG51bWJlciwgY2xhc3NPdXQsIGNsYXNzSW4sIGlzT3V0KSB7XG4gICAgZm9yICh2YXIgaSA9IG51bWJlciwgbCA9IG51bWJlciArIGl0ZW1zOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG5cbiAgICAgIC8vIHNldCBpdGVtIHBvc2l0aW9uc1xuICAgICAgaWYgKCFpc091dCkgeyBpdGVtLnN0eWxlLmxlZnQgPSAoaSAtIGluZGV4KSAqIDEwMCAvIGl0ZW1zICsgJyUnOyB9XG5cbiAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2V0RHVyYXRpb25zKHNwZWVkLCBpdGVtKTsgfVxuICAgICAgaWYgKGFuaW1hdGVEZWxheSAmJiBUUkFOU0lUSU9OREVMQVkpIHtcbiAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gaXRlbS5zdHlsZVtBTklNQVRJT05ERUxBWV0gPSBhbmltYXRlRGVsYXkgKiAoaSAtIG51bWJlcikgLyAxMDAwICsgJ3MnO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgY2xhc3NPdXQpO1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NJbik7XG4gICAgICBcbiAgICAgIGlmIChpc091dCkgeyBzbGlkZUl0ZW1zT3V0LnB1c2goaXRlbSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBtYWtlIHRyYW5zZmVyIGFmdGVyIGNsaWNrL2RyYWc6XG4gIC8vIDEuIGNoYW5nZSAndHJhbnNmb3JtJyBwcm9wZXJ0eSBmb3IgbW9yZGVybiBicm93c2Vyc1xuICAvLyAyLiBjaGFuZ2UgJ2xlZnQnIHByb3BlcnR5IGZvciBsZWdhY3kgYnJvd3NlcnNcbiAgdmFyIHRyYW5zZm9ybUNvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYXJvdXNlbCA/XG4gICAgICBmdW5jdGlvbiAoZHVyYXRpb24sIGRpc3RhbmNlKSB7XG4gICAgICAgIGlmICghZGlzdGFuY2UpIHsgZGlzdGFuY2UgPSBnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZSgpOyB9XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdHJhaW4gdGhlIGRpc3RhbmNlIHdoZW4gbm9uLWxvb3Agbm8tZWRnZVBhZGRpbmcgZml4ZWRXaWR0aCByZWFjaGVzIHRoZSByaWdodCBlZGdlXG4gICAgICAgIGlmIChoYXNSaWdodERlYWRab25lICYmIGluZGV4ID09PSBpbmRleE1heCkge1xuICAgICAgICAgIGRpc3RhbmNlID0gLSAoKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudE5ldyAtIHZwSW5uZXIpICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gfHwgIWR1cmF0aW9uKSB7XG4gICAgICAgICAgLy8gZm9yIG1vcmRlbiBicm93c2VycyB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uIG9yIFxuICAgICAgICAgIC8vIHplcm8gZHVyYXRpb24gZm9yIGFsbCBicm93c2Vyc1xuICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKGRpc3RhbmNlKTtcbiAgICAgICAgICAvLyBydW4gZmFsbGJhY2sgZnVuY3Rpb24gbWFudWFsbHkgXG4gICAgICAgICAgLy8gd2hlbiBkdXJhdGlvbiBpcyAwIC8gY29udGFpbmVyIGlzIGhpZGRlblxuICAgICAgICAgIGlmICghZHVyYXRpb24gfHwgIWlzVmlzaWJsZShjb250YWluZXIpKSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBmb3Igb2xkIGJyb3dzZXIgd2l0aCBub24temVybyBkdXJhdGlvblxuICAgICAgICAgIGpzVHJhbnNmb3JtKGNvbnRhaW5lciwgdHJhbnNmb3JtQXR0ciwgdHJhbnNmb3JtUHJlZml4LCB0cmFuc2Zvcm1Qb3N0Zml4LCBkaXN0YW5jZSwgc3BlZWQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhvcml6b250YWwpIHsgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTsgfVxuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgc2xpZGVJdGVtc091dCA9IFtdO1xuXG4gICAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gZXZlW0FOSU1BVElPTkVORF0gPSBvblRyYW5zaXRpb25FbmQ7XG4gICAgICAgIHJlbW92ZUV2ZW50cyhzbGlkZUl0ZW1zW2luZGV4Q2FjaGVkXSwgZXZlKTtcbiAgICAgICAgYWRkRXZlbnRzKHNsaWRlSXRlbXNbaW5kZXhdLCBldmUpO1xuXG4gICAgICAgIGFuaW1hdGVTbGlkZShpbmRleENhY2hlZCwgYW5pbWF0ZUluLCBhbmltYXRlT3V0LCB0cnVlKTtcbiAgICAgICAgYW5pbWF0ZVNsaWRlKGluZGV4LCBhbmltYXRlTm9ybWFsLCBhbmltYXRlSW4pO1xuXG4gICAgICAgIC8vIHJ1biBmYWxsYmFjayBmdW5jdGlvbiBtYW51YWxseSBcbiAgICAgICAgLy8gd2hlbiB0cmFuc2l0aW9uIG9yIGFuaW1hdGlvbiBub3Qgc3VwcG9ydGVkIC8gZHVyYXRpb24gaXMgMFxuICAgICAgICBpZiAoIVRSQU5TSVRJT05FTkQgfHwgIUFOSU1BVElPTkVORCB8fCAhZHVyYXRpb24pIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICAgIH07XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gZG9UcmFuc2Zvcm0gKGR1cmF0aW9uLCBkaXN0YW5jZSkge1xuICAgIC8vIGNoZWNrIGR1cmF0aW9uIGlzIGRlZmluZWQgYW5kIGlzIGEgbnVtYmVyXG4gICAgaWYgKGlzTmFOKGR1cmF0aW9uKSkgeyBkdXJhdGlvbiA9IHNwZWVkOyB9XG5cbiAgICAvLyBpZiBjb250YWluZXIgaXMgaGlkZGVuLCBzZXQgZHVyYXRpb24gdG8gMFxuICAgIGlmIChhbmltYXRpbmcgJiYgIWlzVmlzaWJsZShjb250YWluZXIpKSB7IGR1cmF0aW9uID0gMDsgfVxuICAgIFxuICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2V0RHVyYXRpb25zKGR1cmF0aW9uKTsgfVxuICAgIHRyYW5zZm9ybUNvcmUoZHVyYXRpb24sIGRpc3RhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSwgc2xpZGVyTW92ZWQpIHtcbiAgICBpZiAodXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0pIHsgdXBkYXRlSW5kZXgoKTsgfVxuXG4gICAgLy8gcmVuZGVyIHdoZW4gc2xpZGVyIHdhcyBtb3ZlZCAodG91Y2ggb3IgZHJhZykgZXZlbiB0aG91Z2ggaW5kZXggbWF5IG5vdCBjaGFuZ2VcbiAgICBpZiAoaW5kZXggIT09IGluZGV4Q2FjaGVkIHx8IHNsaWRlck1vdmVkKSB7XG4gICAgICAvLyBldmVudHNcbiAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuICAgICAgZXZlbnRzLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcsIGluZm8oKSk7XG5cbiAgICAgIC8vIHBhdXNlIGF1dG9wbGF5IHdoZW4gY2xpY2sgb3Iga2V5ZG93biBmcm9tIHVzZXJcbiAgICAgIGlmIChhbmltYXRpbmcgJiYgZSAmJiBbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmRleE9mKGUudHlwZSkgPj0gMCkgeyBzdG9wQXV0b3BsYXkoKTsgfVxuXG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgIGRvVHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gIH1cblxuICAvKlxuICAgKiBUcmFuc2ZlciBwcmVmaXhlZCBwcm9wZXJ0aWVzIHRvIHRoZSBzYW1lIGZvcm1hdFxuICAgKiBDU1M6IC1XZWJraXQtVHJhbnNmb3JtID0+IHdlYmtpdHRyYW5zZm9ybVxuICAgKiBKUzogV2Via2l0VHJhbnNmb3JtID0+IHdlYmtpdHRyYW5zZm9ybVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gcHJvcGVydHlcbiAgICpcbiAgICovXG4gIGZ1bmN0aW9uIHN0clRyYW5zIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnJyk7XG4gIH1cblxuICAvLyBBRlRFUiBUUkFOU0ZPUk1cbiAgLy8gVGhpbmdzIG5lZWQgdG8gYmUgZG9uZSBhZnRlciBhIHRyYW5zZmVyOlxuICAvLyAxLiBjaGVjayBpbmRleFxuICAvLyAyLiBhZGQgY2xhc3NlcyB0byB2aXNpYmxlIHNsaWRlXG4gIC8vIDMuIGRpc2FibGUgY29udHJvbHMgYnV0dG9ucyB3aGVuIHJlYWNoIHRoZSBmaXJzdC9sYXN0IHNsaWRlIGluIG5vbi1sb29wIHNsaWRlclxuICAvLyA0LiB1cGRhdGUgbmF2IHN0YXR1c1xuICAvLyA1LiBsYXp5bG9hZCBpbWFnZXNcbiAgLy8gNi4gdXBkYXRlIGNvbnRhaW5lciBoZWlnaHRcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kIChldmVudCkge1xuICAgIC8vIGNoZWNrIHJ1bm5pbmcgb24gZ2FsbGVyeSBtb2RlXG4gICAgLy8gbWFrZSBzdXJlIHRyYW50aW9uZW5kL2FuaW1hdGlvbmVuZCBldmVudHMgcnVuIG9ubHkgb25jZVxuICAgIGlmIChjYXJvdXNlbCB8fCBydW5uaW5nKSB7XG4gICAgICBldmVudHMuZW1pdCgndHJhbnNpdGlvbkVuZCcsIGluZm8oZXZlbnQpKTtcblxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiBzbGlkZUl0ZW1zT3V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtczsgaSsrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zT3V0W2ldO1xuICAgICAgICAgIC8vIHNldCBpdGVtIHBvc2l0aW9uc1xuICAgICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9ICcnO1xuXG4gICAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzZXREdXJhdGlvbnMoMCwgaXRlbSk7IH1cbiAgICAgICAgICBpZiAoYW5pbWF0ZURlbGF5ICYmIFRSQU5TSVRJT05ERUxBWSkgeyBcbiAgICAgICAgICAgIGl0ZW0uc3R5bGVbVFJBTlNJVElPTkRFTEFZXSA9IGl0ZW0uc3R5bGVbQU5JTUFUSU9OREVMQVldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVPdXQpO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIHVwZGF0ZSBzbGlkZXMsIG5hdiwgY29udHJvbHMgYWZ0ZXIgY2hlY2tpbmcgLi4uXG4gICAgICAgKiA9PiBsZWdhY3kgYnJvd3NlcnMgd2hvIGRvbid0IHN1cHBvcnQgJ2V2ZW50JyBcbiAgICAgICAqICAgIGhhdmUgdG8gY2hlY2sgZXZlbnQgZmlyc3QsIG90aGVyd2lzZSBldmVudC50YXJnZXQgd2lsbCBjYXVzZSBhbiBlcnJvciBcbiAgICAgICAqID0+IG9yICdnYWxsZXJ5JyBtb2RlOiBcbiAgICAgICAqICAgKyBldmVudCB0YXJnZXQgaXMgc2xpZGUgaXRlbVxuICAgICAgICogPT4gb3IgJ2Nhcm91c2VsJyBtb2RlOiBcbiAgICAgICAqICAgKyBldmVudCB0YXJnZXQgaXMgY29udGFpbmVyLCBcbiAgICAgICAqICAgKyBldmVudC5wcm9wZXJ0eSBpcyB0aGUgc2FtZSB3aXRoIHRyYW5zZm9ybSBhdHRyaWJ1dGVcbiAgICAgICAqL1xuICAgICAgaWYgKCFldmVudCB8fCBcbiAgICAgICAgICAhY2Fyb3VzZWwgJiYgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lciB8fCBcbiAgICAgICAgICBldmVudC50YXJnZXQgPT09IGNvbnRhaW5lciAmJiBzdHJUcmFucyhldmVudC5wcm9wZXJ0eU5hbWUpID09PSBzdHJUcmFucyh0cmFuc2Zvcm1BdHRyKSkge1xuXG4gICAgICAgIGlmICghdXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0pIHsgXG4gICAgICAgICAgdmFyIGluZGV4VGVtID0gaW5kZXg7XG4gICAgICAgICAgdXBkYXRlSW5kZXgoKTtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IGluZGV4VGVtKSB7IFxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoJ2luZGV4Q2hhbmdlZCcsIGluZm8oKSk7XG5cbiAgICAgICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2V0RHVyYXRpb25zKDApOyB9XG4gICAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBydW5BdXRvSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykgeyBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpOyB9XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgbmF2Q3VycmVudEluZGV4Q2FjaGVkID0gbmF2Q3VycmVudEluZGV4O1xuICAgICAgICBpbmRleENhY2hlZCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLy8gIyBBQ1RJT05TXG4gIGZ1bmN0aW9uIGdvVG8gKHRhcmdldEluZGV4LCBlKSB7XG4gICAgaWYgKGZyZWV6ZSkgeyByZXR1cm47IH1cblxuICAgIC8vIHByZXYgc2xpZGVCeVxuICAgIGlmICh0YXJnZXRJbmRleCA9PT0gJ3ByZXYnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpO1xuXG4gICAgLy8gbmV4dCBzbGlkZUJ5XG4gICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ25leHQnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgMSk7XG5cbiAgICAvLyBnbyB0byBleGFjdCBzbGlkZVxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgIHZhciBhYnNJbmRleCA9IGluZGV4JXNsaWRlQ291bnQsIFxuICAgICAgICAgIGluZGV4R2FwID0gMDtcbiAgICAgIGlmIChhYnNJbmRleCA8IDApIHsgYWJzSW5kZXggKz0gc2xpZGVDb3VudDsgfVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdmaXJzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSAtIGFic0luZGV4O1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4R2FwID0gc2xpZGVDb3VudCAtIGl0ZW1zIC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldEluZGV4ICE9PSAnbnVtYmVyJykgeyB0YXJnZXRJbmRleCA9IHBhcnNlSW50KHRhcmdldEluZGV4KTsgfVxuICAgICAgICBpZiAoIWlzTmFOKHRhcmdldEluZGV4KSkge1xuICAgICAgICAgIHZhciBhYnNUYXJnZXRJbmRleCA9IHRhcmdldEluZGV4JXNsaWRlQ291bnQ7XG4gICAgICAgICAgaWYgKGFic1RhcmdldEluZGV4IDwgMCkgeyBhYnNUYXJnZXRJbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgICAgICAgaW5kZXhHYXAgPSBhYnNUYXJnZXRJbmRleCAtIGFic0luZGV4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZGV4ICs9IGluZGV4R2FwO1xuXG4gICAgICAvLyBpZiBpbmRleCBpcyBjaGFuZ2VkLCBzdGFydCByZW5kZXJpbmdcbiAgICAgIGlmIChpbmRleCVzbGlkZUNvdW50ICE9PSBpbmRleENhY2hlZCVzbGlkZUNvdW50KSB7XG4gICAgICAgIHJlbmRlcihlKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8vIG9uIGNvbnRyb2xzIGNsaWNrXG4gIGZ1bmN0aW9uIG9uQ29udHJvbHNDbGljayAoZSwgZGlyKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICB2YXIgcGFzc0V2ZW50T2JqZWN0O1xuXG4gICAgICBpZiAoIWRpcikge1xuICAgICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY29udHJvbHNDb250YWluZXIgJiYgW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KSA8IDApIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cblxuICAgICAgICB2YXIgdGFyZ2V0SW4gPSBbcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbl0uaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICBpZiAodGFyZ2V0SW4gPj0gMCkge1xuICAgICAgICAgIHBhc3NFdmVudE9iamVjdCA9IHRydWU7XG4gICAgICAgICAgZGlyID0gdGFyZ2V0SW4gPT09IDAgPyAtMSA6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpciA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggLT0gc2xpZGVCeTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSAxKSB7XG4gICAgICAgIC8vIEdvIHRvIHRoZSBmaXJzdCBpZiByZWFjaCB0aGUgZW5kIGluIHJld2luZCBtb2RlXG4gICAgICAgIC8vIE90aGVyd2lzZSBnbyB0byB0aGUgbmV4dFxuICAgICAgICBpZiAocmV3aW5kICYmIGluZGV4ID09PSBpbmRleE1heCl7XG4gICAgICAgICAgZ29UbygwLCBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kZXggKz0gc2xpZGVCeTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBwYXNzIGUgd2hlbiBjbGljayBjb250cm9sIGJ1dHRvbnMgb3Iga2V5ZG93blxuICAgICAgcmVuZGVyKHBhc3NFdmVudE9iamVjdCB8fCBlICYmIGUudHlwZSA9PT0gJ2tleWRvd24nID8gZSA6IG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uIG5hdiBjbGlja1xuICBmdW5jdGlvbiBvbk5hdkNsaWNrIChlKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50LFxuICAgICAgICAgIG5hdkluZGV4O1xuXG4gICAgICAvLyBmaW5kIHRoZSBjbGlja2VkIG5hdiBpdGVtXG4gICAgICB3aGlsZSAodGFyZ2V0ICE9PSBuYXZDb250YWluZXIgJiYgIWhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkgeyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTsgfVxuICAgICAgaWYgKGhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkge1xuICAgICAgICBuYXZJbmRleCA9IG5hdkNsaWNrZWQgPSBbXS5pbmRleE9mLmNhbGwobmF2SXRlbXMsIHRhcmdldCk7XG4gICAgICAgIGdvVG8obmF2SW5kZXgsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGF1dG9wbGF5IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBzZXRBdXRvcGxheVRpbWVyICgpIHtcbiAgICBhdXRvcGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db250cm9sc0NsaWNrKG51bGwsIGF1dG9wbGF5RGlyZWN0aW9uKTtcbiAgICB9LCBhdXRvcGxheVRpbWVvdXQpO1xuXG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvcGxheVRpbWVyICgpIHtcbiAgICBjbGVhckludGVydmFsKGF1dG9wbGF5VGltZXIpO1xuICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQXV0b3BsYXlCdXR0b24gKGFjdGlvbiwgdHh0KSB7XG4gICAgc2V0QXR0cnMoYXV0b3BsYXlCdXR0b24sIHsnZGF0YS1hY3Rpb24nOiBhY3Rpb259KTtcbiAgICBhdXRvcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBhdXRvcGxheUh0bWxTdHJpbmdzWzBdICsgYWN0aW9uICsgYXV0b3BsYXlIdG1sU3RyaW5nc1sxXSArIHR4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QXV0b3BsYXkgKCkge1xuICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgdXBkYXRlQXV0b3BsYXlCdXR0b24oJ3N0b3AnLCBhdXRvcGxheVRleHRbMV0pOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQXV0b3BsYXkgKCkge1xuICAgIHN0b3BBdXRvcGxheVRpbWVyKCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHVwZGF0ZUF1dG9wbGF5QnV0dG9uKCdzdGFydCcsIGF1dG9wbGF5VGV4dFswXSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGlvbiAoKSB7XG4gICAgYW5pbWF0aW5nID8gc3RvcEF1dG9wbGF5KCkgOiBzdGFydEF1dG9wbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UgKCkge1xuICAgIGlmIChkb2MuaGlkZGVuKSB7XG4gICAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheVRpbWVyKCk7XG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQpIHtcbiAgICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3ZlclBhdXNlICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7IFxuICAgICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0UmVzdGFydCAoKSB7XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZWQpIHsgXG4gICAgICBzZXRBdXRvcGxheVRpbWVyKCk7XG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5ZG93biBldmVudHMgb24gZG9jdW1lbnQgXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlkb3duIChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgS0VZUy5MRUZUOlxuICAgICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5SSUdIVDpcbiAgICAgICAgb25Db250cm9sc0NsaWNrKGUsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uIGtleSBjb250cm9sXG4gIGZ1bmN0aW9uIG9uQ29udHJvbHNLZXlkb3duIChlKSB7XG4gICAgZSA9IGUgfHwgd2luLmV2ZW50O1xuICAgIHZhciBjb2RlID0gZS5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIEtFWVMuTEVGVDpcbiAgICAgIGNhc2UgS0VZUy5VUDpcbiAgICAgIGNhc2UgS0VZUy5QQUdFVVA6XG4gICAgICAgICAgaWYgKCFwcmV2QnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5SSUdIVDpcbiAgICAgIGNhc2UgS0VZUy5ET1dOOlxuICAgICAgY2FzZSBLRVlTLlBBR0VET1dOOlxuICAgICAgICAgIGlmICghbmV4dEJ1dHRvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgb25Db250cm9sc0NsaWNrKGUsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5IT01FOlxuICAgICAgICBnb1RvKDAsIGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZUy5FTkQ6XG4gICAgICAgIGdvVG8oc2xpZGVDb3VudCAtIDEsIGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZm9jdXNcbiAgZnVuY3Rpb24gc2V0Rm9jdXMgKGZvY3VzKSB7XG4gICAgZm9jdXMuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIG9uIGtleSBuYXZcbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChlKSB7XG4gICAgdmFyIGN1ckVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoIWhhc0F0dHIoY3VyRWxlbWVudCwgJ2RhdGEtbmF2JykpIHsgcmV0dXJuOyB9XG5cbiAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgdmFyIGNvZGUgPSBlLmtleUNvZGUsXG4gICAgICAgIG5hdkluZGV4ID0gW10uaW5kZXhPZi5jYWxsKG5hdkl0ZW1zLCBjdXJFbGVtZW50KSxcbiAgICAgICAgbGVuID0gdmlzaWJsZU5hdkluZGV4ZXMubGVuZ3RoLFxuICAgICAgICBjdXJyZW50ID0gdmlzaWJsZU5hdkluZGV4ZXMuaW5kZXhPZihuYXZJbmRleCk7XG5cbiAgICBpZiAob3B0aW9ucy5uYXZDb250YWluZXIpIHtcbiAgICAgIGxlbiA9IHNsaWRlQ291bnQ7XG4gICAgICBjdXJyZW50ID0gbmF2SW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmF2SW5kZXggKG51bSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubmF2Q29udGFpbmVyID8gbnVtIDogdmlzaWJsZU5hdkluZGV4ZXNbbnVtXTtcbiAgICB9XG5cbiAgICBzd2l0Y2goY29kZSkge1xuICAgICAgY2FzZSBLRVlTLkxFRlQ6XG4gICAgICBjYXNlIEtFWVMuUEFHRVVQOlxuICAgICAgICBpZiAoY3VycmVudCA+IDApIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoY3VycmVudCAtIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS0VZUy5VUDpcbiAgICAgIGNhc2UgS0VZUy5IT01FOlxuICAgICAgICBpZiAoY3VycmVudCA+IDApIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoMCldKTsgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBLRVlTLlJJR0hUOlxuICAgICAgY2FzZSBLRVlTLlBBR0VET1dOOlxuICAgICAgICBpZiAoY3VycmVudCA8IGxlbiAtIDEpIHsgc2V0Rm9jdXMobmF2SXRlbXNbZ2V0TmF2SW5kZXgoY3VycmVudCArIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS0VZUy5ET1dOOlxuICAgICAgY2FzZSBLRVlTLkVORDpcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBsZW4gLSAxKSB7IHNldEZvY3VzKG5hdkl0ZW1zW2dldE5hdkluZGV4KGxlbiAtIDEpXSk7IH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIENhbid0IHVzZSBvbk5hdkNsaWNrIGhlcmUsXG4gICAgICAvLyBCZWNhdXNlIG9uTmF2Q2xpY2sgcmVxdWlyZSBldmVudC50YXJnZXQgYXMgbmF2IGl0ZW1zXG4gICAgICBjYXNlIEtFWVMuRU5URVI6XG4gICAgICBjYXNlIEtFWVMuU1BBQ0U6XG4gICAgICAgIG5hdkNsaWNrZWQgPSBuYXZJbmRleDtcbiAgICAgICAgZ29UbyhuYXZJbmRleCwgZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElFMTAgc2Nyb2xsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGllMTBTY3JvbGwgKCkge1xuICAgIGRvVHJhbnNmb3JtKDAsIGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkpO1xuICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXJnZXQgKGUpIHtcbiAgICByZXR1cm4gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUb3VjaEV2ZW50IChlKSB7XG4gICAgcmV0dXJuIGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yIChlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoT3JNb3VzZVN0YXJ0IChlKSB7XG4gICAgLy8gcmVzZXQgXG4gICAgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gMDtcbiAgICB0b3VjaGVkT3JEcmFnZWQgPSBmYWxzZTtcbiAgICBzdGFydFggPSBzdGFydFkgPSBudWxsO1xuXG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgICB2YXIgZXY7IFxuXG4gICAgICBpZiAoaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgIGV2ID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgZXZlbnRzLmVtaXQoJ3RvdWNoU3RhcnQnLCBpbmZvKGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ID0gZTtcbiAgICAgICAgcHJldmVudERlZmF1bHRCZWhhdmlvcihlKTtcbiAgICAgICAgZXZlbnRzLmVtaXQoJ2RyYWdTdGFydCcsIGluZm8oZSkpO1xuICAgICAgfVxuXG4gICAgICBzdGFydFggPSBwYXJzZUludChldi5jbGllbnRYKTtcbiAgICAgIHN0YXJ0WSA9IHBhcnNlSW50KGV2LmNsaWVudFkpO1xuICAgICAgdHJhbnNsYXRlSW5pdCA9IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybUF0dHJdLnJlcGxhY2UodHJhbnNmb3JtUHJlZml4LCAnJykucmVwbGFjZSh0cmFuc2Zvcm1Qb3N0Zml4LCAnJykpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hPck1vdXNlTW92ZSAoZSkge1xuICAgIC8vIG1ha2Ugc3VyZSB0b3VjaCBzdGFydGVkIG9yIG1vdXNlIGRyYWdlZFxuICAgIGlmICghcnVubmluZyAmJiBzdGFydFggIT09IG51bGwpIHtcbiAgICAgIGUgPSBlIHx8IHdpbi5ldmVudDtcbiAgICAgIHZhciBldjtcblxuICAgICAgaWYgKGlzVG91Y2hFdmVudChlKSkge1xuICAgICAgICBldiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldiA9IGU7XG4gICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICB9XG5cbiAgICAgIGRpc1ggPSBwYXJzZUludChldi5jbGllbnRYKSAtIHN0YXJ0WDtcbiAgICAgIGRpc1kgPSBwYXJzZUludChldi5jbGllbnRZKSAtIHN0YXJ0WTtcblxuICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gMCkge1xuICAgICAgICBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSBnZXRUb3VjaERpcmVjdGlvbih0b0RlZ3JlZShkaXNZLCBkaXNYKSwgMTUpID09PSBvcHRpb25zLmF4aXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQpIHtcbiAgICAgICAgaWYgKGlzVG91Y2hFdmVudChlKSkge1xuICAgICAgICAgIGV2ZW50cy5lbWl0KCd0b3VjaE1vdmUnLCBpbmZvKGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBcIm1vdXNlbW92ZVwiIGV2ZW50IGFmdGVyIFwibW91c2Vkb3duXCIgaW5kZWNhdGUgXG4gICAgICAgICAgLy8gaXQgaXMgXCJkcmFnXCIsIG5vdCBcImNsaWNrXCJcbiAgICAgICAgICBpZiAoIWlzRHJhZ0V2ZW50KSB7IGlzRHJhZ0V2ZW50ID0gdHJ1ZTsgfVxuICAgICAgICAgIGV2ZW50cy5lbWl0KCdkcmFnTW92ZScsIGluZm8oZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG91Y2hlZE9yRHJhZ2VkKSB7IHRvdWNoZWRPckRyYWdlZCA9IHRydWU7IH1cblxuICAgICAgICB2YXIgeCA9IHRyYW5zbGF0ZUluaXQ7XG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgICAgIHggKz0gZGlzWDtcbiAgICAgICAgICAgIHggKz0gJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2VYID0gVFJBTlNGT1JNID8gZGlzWCAqIGl0ZW1zICogMTAwIC8gKHZwSW5uZXIgKiBzbGlkZUNvdW50TmV3KTogZGlzWCAqIDEwMCAvIHZwSW5uZXI7XG4gICAgICAgICAgICB4ICs9IHBlcmNlbnRhZ2VYO1xuICAgICAgICAgICAgeCArPSAnJSc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHggKz0gZGlzWTtcbiAgICAgICAgICB4ICs9ICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVFJBTlNGT1JNKSB7IHNldER1cmF0aW9ucygwKTsgfVxuICAgICAgICBjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0gPSB0cmFuc2Zvcm1QcmVmaXggKyB4ICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoT3JNb3VzZUVuZCAoZSkge1xuICAgIGlmICghcnVubmluZyAmJiB0b3VjaGVkT3JEcmFnZWQpIHtcbiAgICAgIGUgPSBlIHx8IHdpbi5ldmVudDtcbiAgICAgIHZhciBldjtcblxuICAgICAgaWYgKGlzVG91Y2hFdmVudChlKSkge1xuICAgICAgICBldiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGV2ZW50cy5lbWl0KCd0b3VjaEVuZCcsIGluZm8oZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXYgPSBlO1xuICAgICAgICBldmVudHMuZW1pdCgnZHJhZ0VuZCcsIGluZm8oZSkpO1xuICAgICAgfVxuXG4gICAgICBkaXNYID0gcGFyc2VJbnQoZXYuY2xpZW50WCkgLSBzdGFydFg7XG4gICAgICBkaXNZID0gcGFyc2VJbnQoZXYuY2xpZW50WSkgLSBzdGFydFk7XG4gICAgICB2YXIgc2xpZGVyTW92ZWQgPSBCb29sZWFuKGhvcml6b250YWwgPyBkaXNYIDogZGlzWSk7XG5cbiAgICAgIC8vIHJlc2V0IFxuICAgICAgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gMDtcbiAgICAgIHRvdWNoZWRPckRyYWdlZCA9IGZhbHNlO1xuICAgICAgc3RhcnRYID0gc3RhcnRZID0gbnVsbDtcblxuICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgdmFyIGluZGV4TW92ZWQgPSAtIGRpc1ggKiBpdGVtcyAvIHZwSW5uZXI7XG4gICAgICAgIGluZGV4TW92ZWQgPSBkaXNYID4gMCA/IE1hdGguZmxvb3IoaW5kZXhNb3ZlZCkgOiBNYXRoLmNlaWwoaW5kZXhNb3ZlZCk7XG4gICAgICAgIGluZGV4ICs9IGluZGV4TW92ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW92ZWQgPSAtICh0cmFuc2xhdGVJbml0ICsgZGlzWSk7XG4gICAgICAgIGlmIChtb3ZlZCA8PSAwKSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleE1pbjtcbiAgICAgICAgfSBlbHNlIGlmIChtb3ZlZCA+PSBzbGlkZU9mZnNldFRvcHNbc2xpZGVPZmZzZXRUb3BzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleE1heDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaW5kZXggPSBkaXNZIDwgMCA/IGkgKyAxIDogaTtcbiAgICAgICAgICB9IHdoaWxlIChpIDwgc2xpZGVDb3VudE5ldyAmJiBtb3ZlZCA+PSBzbGlkZU9mZnNldFRvcHNbaSArIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByZW5kZXIoZSwgc2xpZGVyTW92ZWQpO1xuXG4gICAgICAvLyBkcmFnIHZzIGNsaWNrXG4gICAgICBpZiAoaXNEcmFnRXZlbnQpIHsgXG4gICAgICAgIC8vIHJlc2V0IGlzRHJhZ0V2ZW50XG4gICAgICAgIGlzRHJhZ0V2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcHJldmVudCBcImNsaWNrXCJcbiAgICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChlKTtcbiAgICAgICAgYWRkRXZlbnRzKHRhcmdldCwgeydjbGljayc6IGZ1bmN0aW9uIHByZXZlbnRDbGljayAoZSkge1xuICAgICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRzKHRhcmdldCwgeydjbGljayc6IHByZXZlbnRDbGlja30pO1xuICAgICAgICB9fSk7IFxuICAgICAgfSBcbiAgICB9XG4gIH1cblxuICAvLyA9PT0gUkVTSVpFIEZVTkNUSU9OUyA9PT0gLy9cbiAgLy8gKHNsaWRlT2Zmc2V0VG9wcywgaW5kZXgsIGl0ZW1zKSA9PiB2ZXJ0aWNhbF9jb25lbnRXcmFwcGVyLmhlaWdodFxuICBmdW5jdGlvbiB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCAoKSB7XG4gICAgaW5uZXJXcmFwcGVyLnN0eWxlLmhlaWdodCA9IHNsaWRlT2Zmc2V0VG9wc1tpbmRleCArIGl0ZW1zXSAtIHNsaWRlT2Zmc2V0VG9wc1tpbmRleF0gKyAncHgnO1xuICB9XG5cbiAgLypcbiAgICogZ2V0IG5hdiBpdGVtIGluZGV4ZXMgcGVyIGl0ZW1zXG4gICAqIGFkZCAxIG1vcmUgaWYgdGhlIG5hdiBpdGVtcyBjYW5uJ3QgY292ZXIgYWxsIHNsaWRlc1xuICAgKiBbMCwgMSwgMiwgMywgNF0gLyAzID0+IFswLCAzXVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmlzaWJsZU5hdkluZGV4ICgpIHtcbiAgICAvLyByZXNldCB2aXNpYmxlTmF2SW5kZXhlc1xuICAgIHZpc2libGVOYXZJbmRleGVzID0gW107XG5cbiAgICB2YXIgYWJzSW5kZXhNaW4gPSBpbmRleCVzbGlkZUNvdW50JWl0ZW1zO1xuICAgIHdoaWxlIChhYnNJbmRleE1pbiA8IHNsaWRlQ291bnQpIHtcbiAgICAgIGlmICghbG9vcCAmJiBhYnNJbmRleE1pbiArIGl0ZW1zID4gc2xpZGVDb3VudCkgeyBhYnNJbmRleE1pbiA9IHNsaWRlQ291bnQgLSBpdGVtczsgfVxuICAgICAgdmlzaWJsZU5hdkluZGV4ZXMucHVzaChhYnNJbmRleE1pbik7XG4gICAgICBhYnNJbmRleE1pbiArPSBpdGVtcztcbiAgICB9XG5cbiAgICAvLyBuYXYgY291bnQgKiBpdGVtcyA8IHNsaWRlIGNvdW50IG1lYW5zXG4gICAgLy8gc29tZSBzbGlkZXMgY2FuIG5vdCBiZSBkaXNwbGF5ZWQgb25seSBieSBuYXYgY2xpY2tpbmdcbiAgICBpZiAobG9vcCAmJiB2aXNpYmxlTmF2SW5kZXhlcy5sZW5ndGggKiBpdGVtcyA8IHNsaWRlQ291bnQgfHxcbiAgICAgICAgIWxvb3AgJiYgdmlzaWJsZU5hdkluZGV4ZXNbMF0gPiAwKSB7XG4gICAgICB2aXNpYmxlTmF2SW5kZXhlcy51bnNoaWZ0KDApO1xuICAgIH1cbiAgfVxuICBcbiAgLypcbiAgICogMS4gdXBkYXRlIHZpc2libGUgbmF2IGl0ZW1zIGxpc3RcbiAgICogMi4gYWRkIFwiaGlkZGVuXCIgYXR0cmlidXRlcyB0byBwcmV2aW91cyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKiAzLiByZW1vdmUgXCJoaWRkZW5cIiBhdHRydWJ1dGVzIHRvIG5ldyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlTmF2VmlzaWJpbGl0eSAoKSB7XG4gICAgaWYgKCFuYXYgfHwgb3B0aW9ucy5uYXZDb250YWluZXIpIHsgcmV0dXJuOyB9XG4gICAgZ2V0VmlzaWJsZU5hdkluZGV4KCk7XG5cbiAgICBpZiAodmlzaWJsZU5hdkluZGV4ZXMgIT09IHZpc2libGVOYXZJbmRleGVzQ2FjaGVkKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobmF2SXRlbXMsIGZ1bmN0aW9uKGVsLCBpKSB7XG4gICAgICAgIGlmICh2aXNpYmxlTmF2SW5kZXhlcy5pbmRleE9mKGkpIDwgMCkge1xuICAgICAgICAgIGhpZGVFbGVtZW50KGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93RWxlbWVudChlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBjYWNoZSB2aXNpYmxlIG5hdiBpbmRleGVzXG4gICAgICB2aXNpYmxlTmF2SW5kZXhlc0NhY2hlZCA9IHZpc2libGVOYXZJbmRleGVzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluZm8gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzbGlkZUl0ZW1zOiBzbGlkZUl0ZW1zLFxuICAgICAgbmF2Q29udGFpbmVyOiBuYXZDb250YWluZXIsXG4gICAgICBuYXZJdGVtczogbmF2SXRlbXMsXG4gICAgICBjb250cm9sc0NvbnRhaW5lcjogY29udHJvbHNDb250YWluZXIsXG4gICAgICBoYXNDb250cm9sczogaGFzQ29udHJvbHMsXG4gICAgICBwcmV2QnV0dG9uOiBwcmV2QnV0dG9uLFxuICAgICAgbmV4dEJ1dHRvbjogbmV4dEJ1dHRvbixcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIHNsaWRlQnk6IHNsaWRlQnksXG4gICAgICBjbG9uZUNvdW50OiBjbG9uZUNvdW50LFxuICAgICAgc2xpZGVDb3VudDogc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlQ291bnROZXc6IHNsaWRlQ291bnROZXcsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBpbmRleENhY2hlZDogaW5kZXhDYWNoZWQsXG4gICAgICBuYXZDdXJyZW50SW5kZXg6IG5hdkN1cnJlbnRJbmRleCxcbiAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZDogbmF2Q3VycmVudEluZGV4Q2FjaGVkLFxuICAgICAgdmlzaWJsZU5hdkluZGV4ZXM6IHZpc2libGVOYXZJbmRleGVzLFxuICAgICAgdmlzaWJsZU5hdkluZGV4ZXNDYWNoZWQ6IHZpc2libGVOYXZJbmRleGVzQ2FjaGVkLFxuICAgICAgZXZlbnQ6IGUgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0SW5mbzogaW5mbyxcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBnb1RvOiBnb1RvLFxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc2hlZXRcbiAgICAgIHNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgLy8gY2xvbmVkIGl0ZW1zXG4gICAgICBpZiAobG9vcCkge1xuICAgICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICAgIGlmIChjYXJvdXNlbCkgeyBzbGlkZUl0ZW1zWzBdLnJlbW92ZSgpOyB9XG4gICAgICAgICAgc2xpZGVJdGVtc1tzbGlkZUl0ZW1zLmxlbmd0aCAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNsaWRlIEl0ZW1zXG4gICAgICB2YXIgc2xpZGVDbGFzc2VzID0gWyd0bnMtaXRlbScsIHNsaWRlQWN0aXZlQ2xhc3NdO1xuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBzbGlkZUNsYXNzZXMgPSBzbGlkZUNsYXNzZXMuY29uY2F0KCd0bnMtbm9ybWFsJywgYW5pbWF0ZUluKTsgfVxuXG4gICAgICBmb3IgKHZhciBpID0gc2xpZGVDb3VudDsgaS0tOykge1xuICAgICAgICB2YXIgc2xpZGUgPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgICBpZiAoc2xpZGUuaWQuaW5kZXhPZihzbGlkZUlkICsgJy1pdGVtJykgPj0gMCkgeyBzbGlkZS5pZCA9ICcnOyB9XG5cbiAgICAgICAgc2xpZGVDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24oY2wpIHsgcmVtb3ZlQ2xhc3Moc2xpZGUsIGNsKTsgfSlcbiAgICAgIH1cbiAgICAgIHJlbW92ZUF0dHJzKHNsaWRlSXRlbXMsIFsnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFiaW5kZXgnXSk7XG4gICAgICBzbGlkZUl0ZW1zID0gc2xpZGVJZCA9IHNsaWRlQ291bnQgPSBzbGlkZUNvdW50TmV3ID0gY2xvbmVDb3VudCA9IG51bGw7XG5cbiAgICAgIC8vIGNvbnRyb2xzXG4gICAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyKSB7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoY29udHJvbHNDb250YWluZXIsIFsnYXJpYS1sYWJlbCcsICd0YWJpbmRleCddKTtcbiAgICAgICAgICByZW1vdmVBdHRycyhjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlbiwgWydhcmlhLWNvbnRyb2xzJywgJ2FyaWEtZGlzYWJsZWQnLCAndGFiaW5kZXgnXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbHNDb250YWluZXIgPSBwcmV2QnV0dG9uID0gbmV4dEJ1dHRvbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIG5hdlxuICAgICAgaWYgKG5hdikge1xuICAgICAgICByZW1vdmVFdmVudHMobmF2Q29udGFpbmVyLCBuYXZFdmVudHMpO1xuICAgICAgICBpZiAob3B0aW9ucy5uYXZDb250YWluZXIpIHtcbiAgICAgICAgICByZW1vdmVBdHRycyhuYXZDb250YWluZXIsIFsnYXJpYS1sYWJlbCddKTtcbiAgICAgICAgICByZW1vdmVBdHRycyhuYXZJdGVtcywgWydhcmlhLXNlbGVjdGVkJywgJ2FyaWEtY29udHJvbHMnLCAndGFiaW5kZXgnXSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2Q29udGFpbmVyID0gbmF2SXRlbXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBhdXRvXG4gICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTtcbiAgICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRzKGF1dG9wbGF5QnV0dG9uLCB7J2NsaWNrJzogdG9nZ2xlQW5pbWF0aW9ufSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgaG92ZXJFdmVudHMpO1xuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpO1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvcGxheUJ1dHRvbikge1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGF1dG9wbGF5QnV0dG9uLCBbJ2RhdGEtYWN0aW9uJ10pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29udGFpbmVyXG4gICAgICBjb250YWluZXIuaWQgPSBjb250YWluZXJJZENhY2hlZCB8fCAnJztcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NDb250YWluZXIsICcnKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZSA9ICcnO1xuICAgICAgaWYgKGNhcm91c2VsICYmIFRSQU5TSVRJT05FTkQpIHtcbiAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBvblRyYW5zaXRpb25FbmQ7XG4gICAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGV2ZSk7XG4gICAgICB9XG4gICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cyk7XG4gICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTtcblxuICAgICAgLy8gb3V0ZXJXcmFwcGVyXG4gICAgICBjb250YWluZXJQYXJlbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgb3V0ZXJXcmFwcGVyKTtcbiAgICAgIG91dGVyV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIG91dGVyV3JhcHBlciA9IGlubmVyV3JhcHBlciA9IGNvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIC8vIHJlbW92ZSBhcnJvd0tleXMgZXZlbnRsaXN0ZW5lclxuICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7XG5cbiAgICAgIC8vIHJlbW92ZSB3aW4gZXZlbnQgbGlzdGVuZXJzXG4gICAgICByZW1vdmVFdmVudHMod2luLCB7J3Jlc2l6ZSc6IG9uUmVzaXplfSk7XG4gICAgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXIubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8ga2V5c1xuaWYgKCFPYmplY3Qua2V5cykge1xuICAgIE9iamVjdC5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciBvYmosIG5hbWUsIGNvcHksXG4gICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICBpID0gMSxcbiAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgob2JqID0gYXJndW1lbnRzW2ldKSAhPT0gbnVsbCkge1xuICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICBjb3B5ID0gb2JqW25hbWVdO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IGNvcHkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXh0ZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RvcmFnZVZhbHVlICh2YWx1ZSkge1xuICByZXR1cm4gWyd0cnVlJywgJ2ZhbHNlJ10uaW5kZXhPZih2YWx1ZSkgPj0gMCA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2hlY2tTdG9yYWdlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleSwgdmFsdWUsIGFjY2Vzcykge1xuICBpZiAoYWNjZXNzKSB7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpOyB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9zZXRMb2NhbFN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2xpZGVJZCgpIHtcbiAgdmFyIGlkID0gd2luZG93LnRuc0lkO1xuICB3aW5kb3cudG5zSWQgPSAhaWQgPyAxIDogaWQgKyAxO1xuICBcbiAgcmV0dXJuICd0bnMnICsgd2luZG93LnRuc0lkO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFNsaWRlSWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXQgY3NzLWNhbGMgXG4vLyBAcmV0dXJuIC0gZmFsc2UgfCBjYWxjIHwgLXdlYmtpdC1jYWxjIHwgLW1vei1jYWxjXG4vLyBAdXNhZ2UgLSB2YXIgY2FsYyA9IGdldENhbGMoKTsgXG5pbXBvcnQgJy4vY2hpbGROb2RlLnJlbW92ZSc7XG5pbXBvcnQgeyBnZXRCb2R5IH0gZnJvbSAnLi9nZXRCb2R5JztcbmltcG9ydCB7IHNldEZha2VCb2R5IH0gZnJvbSAnLi9zZXRGYWtlQm9keSc7XG5pbXBvcnQgeyByZXNldEZha2VCb2R5IH0gZnJvbSAnLi9yZXNldEZha2VCb2R5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGMoKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudCwgXG4gICAgICBib2R5ID0gZ2V0Qm9keSgpLFxuICAgICAgZG9jT3ZlcmZsb3cgPSBzZXRGYWtlQm9keShib2R5KSxcbiAgICAgIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSwgXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIHRyeSB7XG4gICAgdmFyIHZhbHMgPSBbJ2NhbGMoMTBweCknLCAnLW1vei1jYWxjKDEwcHgpJywgJy13ZWJraXQtY2FsYygxMHB4KSddLCB2YWw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHZhbCA9IHZhbHNbaV07XG4gICAgICBkaXYuc3R5bGUud2lkdGggPSB2YWw7XG4gICAgICBpZiAoZGl2Lm9mZnNldFdpZHRoID09PSAxMCkgeyBcbiAgICAgICAgcmVzdWx0ID0gdmFsLnJlcGxhY2UoJygxMHB4KScsICcnKTsgXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cbiAgXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY2FsYy5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldCBzdWJwaXhlbCBzdXBwb3J0IHZhbHVlXG4vLyBAcmV0dXJuIC0gYm9vbGVhblxuaW1wb3J0ICcuL2NoaWxkTm9kZS5yZW1vdmUnO1xuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keSc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHknO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJwaXhlbExheW91dCgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBwYXJlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjaGlsZDEgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjaGlsZDIsXG4gICAgICBzdXBwb3J0ZWQ7XG5cbiAgcGFyZW50LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDEwcHgnO1xuICBjaGlsZDEuc3R5bGUuY3NzVGV4dCA9ICdmbG9hdDogbGVmdDsgd2lkdGg6IDUuNXB4OyBoZWlnaHQ6IDEwcHg7JztcbiAgY2hpbGQyID0gY2hpbGQxLmNsb25lTm9kZSh0cnVlKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQxKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkMik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocGFyZW50KTtcblxuICBzdXBwb3J0ZWQgPSBjaGlsZDEub2Zmc2V0VG9wICE9PSBjaGlsZDIub2Zmc2V0VG9wO1xuXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogcGFyZW50LnJlbW92ZSgpO1xuXG4gIHJldHVybiBzdXBwb3J0ZWQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc3VicGl4ZWxMYXlvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vY2hpbGROb2RlLnJlbW92ZSc7XG5pbXBvcnQgeyBnZXRCb2R5IH0gZnJvbSAnLi9nZXRCb2R5JztcbmltcG9ydCB7IHNldEZha2VCb2R5IH0gZnJvbSAnLi9zZXRGYWtlQm9keSc7XG5pbXBvcnQgeyByZXNldEZha2VCb2R5IH0gZnJvbSAnLi9yZXNldEZha2VCb2R5JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhcXVlcnlTdXBwb3J0ICgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgICAgcnVsZSA9ICdAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOjFweCl7LnRucy1tcS10ZXN0e3Bvc2l0aW9uOmFic29sdXRlfX0nLFxuICAgICAgcG9zaXRpb247XG5cbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIGRpdi5jbGFzc05hbWUgPSAndG5zLW1xLXRlc3QnO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gIH1cblxuICBwb3NpdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KS5wb3NpdGlvbiA6IGRpdi5jdXJyZW50U3R5bGVbJ3Bvc2l0aW9uJ107XG5cbiAgYm9keS5mYWtlID8gcmVzZXRGYWtlQm9keShib2R5LCBkb2NPdmVyZmxvdykgOiBkaXYucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09PSBcImFic29sdXRlXCI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvbWVkaWFxdWVyeVN1cHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjcmVhdGUgYW5kIGFwcGVuZCBzdHlsZSBzaGVldFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQgKG1lZGlhKSB7XG4gIC8vIENyZWF0ZSB0aGUgPHN0eWxlPiB0YWdcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG5cbiAgLy8gQWRkIGEgbWVkaWEgKGFuZC9vciBtZWRpYSBxdWVyeSkgaGVyZSBpZiB5b3UnZCBsaWtlIVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcInNjcmVlblwiKVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTAyNHB4KVwiKVxuICBpZiAobWVkaWEpIHsgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpOyB9XG5cbiAgLy8gV2ViS2l0IGhhY2sgOihcbiAgLy8gc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuXG4gIC8vIEFkZCB0aGUgPHN0eWxlPiBlbGVtZW50IHRvIHRoZSBwYWdlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgcmV0dXJuIHN0eWxlLnNoZWV0ID8gc3R5bGUuc2hlZXQgOiBzdHlsZS5zdHlsZVNoZWV0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jcmVhdGVTdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY3Jvc3MgYnJvd3NlcnMgYWRkUnVsZSBtZXRob2RcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NSdWxlKHNoZWV0LCBzZWxlY3RvciwgcnVsZXMsIGluZGV4KSB7XG4gICdpbnNlcnRSdWxlJyBpbiBzaGVldCA/XG4gICAgc2hlZXQuaW5zZXJ0UnVsZShzZWxlY3RvciArICd7JyArIHJ1bGVzICsgJ30nLCBpbmRleCkgOlxuICAgIHNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ1NTUnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkge1xuICB2YXIgcnVsZSA9ICgnaW5zZXJ0UnVsZScgaW4gc2hlZXQpID8gc2hlZXQuY3NzUnVsZXMgOiBzaGVldC5ydWxlcztcbiAgcmV0dXJuIHJ1bGUubGVuZ3RoO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlICh5LCB4KSB7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpICogKDE4MCAvIE1hdGguUEkpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3RvRGVncmVlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoRGlyZWN0aW9uKGFuZ2xlLCByYW5nZSkge1xuICB2YXIgZGlyZWN0aW9uID0gZmFsc2UsXG4gICAgICBnYXAgPSBNYXRoLmFicyg5MCAtIE1hdGguYWJzKGFuZ2xlKSk7XG4gICAgICBcbiAgaWYgKGdhcCA+PSA5MCAtIHJhbmdlKSB7XG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICB9IGVsc2UgaWYgKGdhcCA8PSByYW5nZSkge1xuICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaGFzQ2xhc3MgfSBmcm9tICcuL2hhc0NsYXNzJztcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgc3RyKSB7XG4gIGlmICghaGFzQ2xhc3MoZWwsICBzdHIpKSB7XG4gICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIHN0cjtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZENsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaGFzQ2xhc3MgfSBmcm9tICcuL2hhc0NsYXNzJztcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgc3RyKSB7XG4gIGlmIChoYXNDbGFzcyhlbCwgc3RyKSkge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHN0ciwgJycpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cihlbCwgYXR0cikge1xuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEF0dHIuanNcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBoYXNBdHRyIH0gZnJvbSAnLi9oYXNBdHRyJztcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSAnLi9zZXRBdHRycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudChlbCkge1xuICBpZiAoIWhhc0F0dHIoZWwsICdoaWRkZW4nKSkge1xuICAgIHNldEF0dHJzKGVsLCB7J2hpZGRlbic6ICcnfSk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oaWRlRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGhhc0F0dHIgfSBmcm9tICcuL2hhc0F0dHInO1xuaW1wb3J0IHsgcmVtb3ZlQXR0cnMgfSBmcm9tICcuL3JlbW92ZUF0dHJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsKSB7XG4gIGlmIChoYXNBdHRyKGVsLCAnaGlkZGVuJykpIHtcbiAgICByZW1vdmVBdHRycyhlbCwgJ2hpZGRlbicpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2hvd0VsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHJldHVybiBlbC5vZmZzZXRXaWR0aCA+IDAgJiYgZWwub2Zmc2V0SGVpZ2h0ID4gMDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc1Zpc2libGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBpZiBhbiBpbWFnZSBpcyBsb2FkZWRcbi8vIDEuIFNlZSBpZiBcIm5hdHVyYWxXaWR0aFwiIGFuZCBcIm5hdHVyYWxIZWlnaHRcIiBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUuXG4vLyAyLiBTZWUgaWYgXCJjb21wbGV0ZVwiIHByb3BlcnR5IGlzIGF2YWlsYWJsZS5cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlTG9hZGVkKGltZykge1xuICBpZiAodHlwZW9mIGltZy5jb21wbGV0ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGltZy5jb21wbGV0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW1nLm5hdHVyYWxXaWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gaW1nLm5hdHVyYWxXaWR0aCAhPT0gMDtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2ltYWdlTG9hZGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIHdoaWNoUHJvcGVydHkocHJvcHMpe1xuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpLFxuICAgICAgbGVuID0gcHJvcHMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspe1xuICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgaWYoIGVsLnN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQgKXsgcmV0dXJuIHByb3A7IH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTsgLy8gZXhwbGljaXQgZm9yIGllOS1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3doaWNoUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXQgdHJhbnNpdGlvbmVuZCwgYW5pbWF0aW9uZW5kIGJhc2VkIG9uIHRyYW5zaXRpb25EdXJhdGlvblxuLy8gQHByb3Bpbjogc3RyaW5nXG4vLyBAcHJvcE91dDogc3RyaW5nLCBmaXJzdC1sZXR0ZXIgdXBwZXJjYXNlXG4vLyBVc2FnZTogZ2V0RW5kUHJvcGVydHkoJ1dlYmtpdFRyYW5zaXRpb25EdXJhdGlvbicsICdUcmFuc2l0aW9uJykgPT4gd2Via2l0VHJhbnNpdGlvbkVuZFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuZFByb3BlcnR5KHByb3BJbiwgcHJvcE91dCkge1xuICB2YXIgZW5kUHJvcCA9IGZhbHNlO1xuICBpZiAoL15XZWJraXQvLnRlc3QocHJvcEluKSkge1xuICAgIGVuZFByb3AgPSAnd2Via2l0JyArIHByb3BPdXQgKyAnRW5kJztcbiAgfSBlbHNlIGlmICgvXk8vLnRlc3QocHJvcEluKSkge1xuICAgIGVuZFByb3AgPSAnbycgKyBwcm9wT3V0ICsgJ0VuZCc7XG4gIH0gZWxzZSBpZiAocHJvcEluKSB7XG4gICAgZW5kUHJvcCA9IHByb3BPdXQudG9Mb3dlckNhc2UoKSArICdlbmQnO1xuICB9XG4gIHJldHVybiBlbmRQcm9wO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEVuZFByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcGFzc2l2ZU9wdGlvbiB9IGZyb20gJy4vcGFzc2l2ZU9wdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudHMoZWwsIG9iaikge1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHZhciBvcHRpb24gPSAocHJvcCA9PT0gJ3RvdWNoc3RhcnQnIHx8IHByb3AgPT09ICd0b3VjaG1vdmUnKSA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHByb3AsIG9ialtwcm9wXSwgb3B0aW9uKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZEV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHBhc3NpdmVPcHRpb24gfSBmcm9tICcuL3Bhc3NpdmVPcHRpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKGVsLCBvYmopIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICB2YXIgb3B0aW9uID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZSddLmluZGV4T2YocHJvcCkgPj0gMCA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHByb3AsIG9ialtwcm9wXSwgb3B0aW9uKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBFdmVudHMoKSB7XG4gIHJldHVybiB7XG4gICAgdG9waWNzOiB7fSxcbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIHRoaXMudG9waWNzW2V2ZW50TmFtZV0gPSB0aGlzLnRvcGljc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvcGljc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm4oZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGpzVHJhbnNmb3JtKGVsZW1lbnQsIGF0dHIsIHByZWZpeCwgcG9zdGZpeCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgdGljayA9IE1hdGgubWluKGR1cmF0aW9uLCAxMCksXG4gICAgICB1bml0ID0gKHRvLmluZGV4T2YoJyUnKSA+PSAwKSA/ICclJyA6ICdweCcsXG4gICAgICB0byA9IHRvLnJlcGxhY2UodW5pdCwgJycpLFxuICAgICAgZnJvbSA9IE51bWJlcihlbGVtZW50LnN0eWxlW2F0dHJdLnJlcGxhY2UocHJlZml4LCAnJykucmVwbGFjZShwb3N0Zml4LCAnJykucmVwbGFjZSh1bml0LCAnJykpLFxuICAgICAgcG9zaXRpb25UaWNrID0gKHRvIC0gZnJvbSkgLyBkdXJhdGlvbiAqIHRpY2ssXG4gICAgICBydW5uaW5nO1xuXG4gIHNldFRpbWVvdXQobW92ZUVsZW1lbnQsIHRpY2spO1xuICBmdW5jdGlvbiBtb3ZlRWxlbWVudCgpIHtcbiAgICBkdXJhdGlvbiAtPSB0aWNrO1xuICAgIGZyb20gKz0gcG9zaXRpb25UaWNrO1xuICAgIGVsZW1lbnQuc3R5bGVbYXR0cl0gPSBwcmVmaXggKyBmcm9tICsgdW5pdCArIHBvc3RmaXg7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkgeyBcbiAgICAgIHNldFRpbWVvdXQobW92ZUVsZW1lbnQsIHRpY2spOyBcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9qc1RyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogdnVlLXNpbXBsZS1zcGlubmVyIHYxLjIuOCAoaHR0cHM6Ly9naXRodWIuY29tL2R6d2lsbGlhL3Z1ZS1zaW1wbGUtc3Bpbm5lcilcbiAqIChjKSAyMDE3IERhdmlkIFouIFdpbGxpYW1zXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZVNpbXBsZVNwaW5uZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlU2ltcGxlU3Bpbm5lclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVnVlU2ltcGxlU3Bpbm5lciA9IHVuZGVmaW5lZDtcblxudmFyIF9TcGlubmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9TcGlubmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NwaW5uZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICBWdWUuY29tcG9uZW50KCd2dWUtc2ltcGxlLXNwaW5uZXInLCBfU3Bpbm5lcjIuZGVmYXVsdCk7XG59XG5cbmV4cG9ydHMuVnVlU2ltcGxlU3Bpbm5lciA9IF9TcGlubmVyMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX1NwaW5uZXIyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbi8qIHN0eWxlcyAqL1xuX193ZWJwYWNrX3JlcXVpcmVfXygyKVxuXG52YXIgQ29tcG9uZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KShcbiAgLyogc2NyaXB0ICovXG4gIF9fd2VicGFja19yZXF1aXJlX18oOCksXG4gIC8qIHRlbXBsYXRlICovXG4gIF9fd2VicGFja19yZXF1aXJlX18oOSksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KShcImQ4OTU1N2U0XCIsIGNvbnRlbnQsIHRydWUpO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCIudnVlLXNpbXBsZS1zcGlubmVye3RyYW5zaXRpb246YWxsIC4zcyBsaW5lYXJ9QGtleWZyYW1lcyB2dWUtc2ltcGxlLXNwaW5uZXItc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgbmFtZTogJ3Z1ZS1zaW1wbGUtc3Bpbm5lcicsXG4gIHByb3BzOiB7XG4gICAgJ3NpemUnOiB7XG4gICAgICBkZWZhdWx0OiAzMlxuICAgIH0sXG4gICAgJ2xpbmUtc2l6ZSc6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDNcbiAgICB9LFxuICAgICdsaW5lLWJnLWNvbG9yJzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyNlZWUnXG4gICAgfSxcbiAgICAnbGluZS1mZy1jb2xvcic6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcjMjE5NmYzJyB9LFxuICAgICdzcGVlZCc6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAuOFxuICAgIH0sXG4gICAgJ3NwYWNpbmcnOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA0XG4gICAgfSxcbiAgICAnbWVzc2FnZSc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICAnZm9udC1zaXplJzoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTNcbiAgICB9LFxuICAgICd0ZXh0LWZnLWNvbG9yJzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyM1NTUnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNpemVfcHg6IGZ1bmN0aW9uIHNpemVfcHgoKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICBjYXNlICd0aW55JzpcbiAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICByZXR1cm4gMTY7XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgcmV0dXJuIDMyO1xuICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgICBjYXNlICdiaWcnOlxuICAgICAgICAgIHJldHVybiA2NDtcbiAgICAgICAgY2FzZSAnaHVnZSc6XG4gICAgICAgICAgcmV0dXJuIDk2O1xuICAgICAgICBjYXNlICdtYXNzaXZlJzpcbiAgICAgICAgICByZXR1cm4gMTI4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5zaXplKSA/IHRoaXMuc2l6ZSA6IDMyO1xuICAgIH0sXG4gICAgbGluZV9zaXplX3B4OiBmdW5jdGlvbiBsaW5lX3NpemVfcHgoKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICBjYXNlICd0aW55JzpcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgJ2JpZyc6XG4gICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIGNhc2UgJ2h1Z2UnOlxuICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICBjYXNlICdtYXNzaXZlJzpcbiAgICAgICAgICByZXR1cm4gNTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMubGluZVNpemUpID8gdGhpcy5saW5lU2l6ZSA6IDQ7XG4gICAgfSxcbiAgICB0ZXh0X21hcmdpbl90b3A6IGZ1bmN0aW9uIHRleHRfbWFyZ2luX3RvcCgpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ3RpbnknOlxuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgY2FzZSAnYmlnJzpcbiAgICAgICAgY2FzZSAnaHVnZSc6XG4gICAgICAgIGNhc2UgJ21hc3NpdmUnOlxuICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwodGhpcy5zaXplX3B4IC8gOCksIDMpLCAxMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc051bWJlcih0aGlzLnNwYWNpbmcpID8gdGhpcy5zcGFjaW5nIDogNDtcbiAgICB9LFxuICAgIHRleHRfZm9udF9zaXplOiBmdW5jdGlvbiB0ZXh0X2ZvbnRfc2l6ZSgpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ3RpbnknOlxuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgY2FzZSAnYmlnJzpcbiAgICAgICAgY2FzZSAnaHVnZSc6XG4gICAgICAgIGNhc2UgJ21hc3NpdmUnOlxuICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwodGhpcy5zaXplX3B4ICogMC40KSwgMTEpLCAzMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc051bWJlcih0aGlzLmZvbnRTaXplKSA/IHRoaXMuZm9udFNpemUgOiAxMztcbiAgICB9LFxuICAgIHNwaW5uZXJfc3R5bGU6IGZ1bmN0aW9uIHNwaW5uZXJfc3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWFyZ2luJzogJzAgYXV0bycsXG4gICAgICAgICdib3JkZXItcmFkaXVzJzogJzEwMCUnLFxuICAgICAgICAnYm9yZGVyJzogdGhpcy5saW5lX3NpemVfcHggKyAncHggc29saWQgJyArIHRoaXMubGluZUJnQ29sb3IsXG4gICAgICAgICdib3JkZXItdG9wJzogdGhpcy5saW5lX3NpemVfcHggKyAncHggc29saWQgJyArIHRoaXMubGluZUZnQ29sb3IsXG4gICAgICAgICd3aWR0aCc6IHRoaXMuc2l6ZV9weCArICdweCcsXG4gICAgICAgICdoZWlnaHQnOiB0aGlzLnNpemVfcHggKyAncHgnLFxuICAgICAgICAnYW5pbWF0aW9uJzogJ3Z1ZS1zaW1wbGUtc3Bpbm5lci1zcGluICcgKyB0aGlzLnNwZWVkICsgJ3MgbGluZWFyIGluZmluaXRlJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHRleHRfc3R5bGU6IGZ1bmN0aW9uIHRleHRfc3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWFyZ2luLXRvcCc6IHRoaXMudGV4dF9tYXJnaW5fdG9wICsgJ3B4JyxcbiAgICAgICAgJ2NvbG9yJzogdGhpcy50ZXh0RmdDb2xvcixcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6IHRoaXMudGV4dF9mb250X3NpemUgKyAncHgnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXNpbXBsZS1zcGlubmVyXCIsXG4gICAgc3R5bGU6IChfdm0uc3Bpbm5lcl9zdHlsZSlcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0ubWVzc2FnZS5sZW5ndGggPiAwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXNpbXBsZS1zcGlubmVyLXRleHRcIixcbiAgICBzdHlsZTogKF92bS50ZXh0X3N0eWxlKVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVtcImRlZmF1bHRcIl07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc2ltcGxlLXNwaW5uZXIvZGlzdC92dWUtc2ltcGxlLXNwaW5uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IENvbnRlbnRTZXJ2aWNlLCB7IGdlbmVyYXRlSW1hZ2VVcmwsIGdlbmVyYXRlVmlkZW9VcmwgfSBmcm9tICcuLi8uLi9hc3NldHMvanMvYW1wbGllbmNlLWNvbnRlbnQtc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBtYWtlSW1hZ2UgPSBzbGlkZSA9PiAoe1xuICB0eXBlOiAnaW1hZ2UnLFxuICB1cmw6IGdlbmVyYXRlSW1hZ2VVcmwoc2xpZGUuaW1hZ2UpLFxuICBhbHRUZXh0OiBzbGlkZS5pbWFnZUFsdFRleHQsXG4gIGxpbms6IHNsaWRlLmxpbmtcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFrZUJhbm5lciA9IHNsaWRlID0+ICh7XG4gIHR5cGU6ICdiYW5uZXInLFxuICB1cmw6IGdlbmVyYXRlSW1hZ2VVcmwoc2xpZGUuYmFubmVyLmltYWdlKSxcbiAgYWx0VGV4dDogc2xpZGUuYmFubmVyLmltYWdlQWx0VGV4dCxcbiAgbGluazogc2xpZGUubGlua1xufSk7XG5cbmV4cG9ydCBjb25zdCBtYWtlVmlkZW8gPSBzbGlkZSA9PiAoe1xuICB0eXBlOiAndmlkZW8nLFxuICB1cmw6IGdlbmVyYXRlVmlkZW9Vcmwoc2xpZGUudmlkZW8pXG59KTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFNsaWRlcyA9ICh7IHNsaWRlcyB9KSA9PiB7XG4gIGNvbnN0IG5ld1NsaWRlc0FycmF5ID0gW107XG4gIGNvbnN0IHNsaWRlc0FycmF5ID0gT2JqZWN0LmtleXMoc2xpZGVzKS5tYXAoa2V5ID0+IHNsaWRlc1trZXldKTtcbiAgc2xpZGVzQXJyYXkuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICBjb25zdCB7IGltYWdlLCBiYW5uZXIsIHZpZGVvIH0gPSBzbGlkZTtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIG5ld1NsaWRlc0FycmF5LnB1c2gobWFrZUltYWdlKHNsaWRlKSk7XG4gICAgfVxuICAgIGlmIChiYW5uZXIgJiYgYmFubmVyLmltYWdlKSB7XG4gICAgICBuZXdTbGlkZXNBcnJheS5wdXNoKG1ha2VCYW5uZXIoc2xpZGUpKTtcbiAgICB9XG4gICAgaWYgKHZpZGVvKSB7XG4gICAgICBuZXdTbGlkZXNBcnJheS5wdXNoKG1ha2VWaWRlbyhzbGlkZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdTbGlkZXNBcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRPcHRpb25zID0gKHsgbG9vcCwgbmF2aWdhdGlvbkRvdHMsIHNwZWVkLCB0cmFuc2l0aW9uVHlwZSB9KSA9PiAoe1xuICBuYXY6IG5hdmlnYXRpb25Eb3RzLFxuICBhdXRvcGxheTogbG9vcCxcbiAgbW9kZTogdHJhbnNpdGlvblR5cGUgPT09ICdzbGlkZScgPyAnY2Fyb3VzZWwnIDogJ2dhbGxlcnknLFxuICBzcGVlZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckNvbnRlbnRTZXJ2aWNlIGV4dGVuZHMgQ29udGVudFNlcnZpY2Uge1xuICBmb3JtYXRTbGlkZXJDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS50aGVuKChmb3JtYXR0ZWQpID0+IHtcbiAgICAgIHRoaXMuY29udGVudCA9IHt9O1xuICAgICAgdGhpcy5jb250ZW50Lm9wdGlvbnMgPSBmb3JtYXRPcHRpb25zKGZvcm1hdHRlZCk7XG4gICAgICB0aGlzLmNvbnRlbnQuc2xpZGVzID0gZm9ybWF0U2xpZGVzKGZvcm1hdHRlZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXItY29udGVudC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2xpZGUudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TbGlkZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBlOGJjNTczXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2xpZGUudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZThiYzU3M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBlOGJjNTczXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQmFubmVyLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQmFubmVyLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjJmN2VmYTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9CYW5uZXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvYmFubmVyL0Jhbm5lci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjJmN2VmYTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02MmY3ZWZhMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jhbm5lci9CYW5uZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJiYW5uZXItaW1hZ2VcIiwgeyBhdHRyczogeyBjb250ZW50OiBfdm0uY29udGVudCB9IH0pXSwgMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTYyZjdlZmEyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjJmN2VmYTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvQmFubmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iZWQyN2YzMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hc2Fzcy1sb2FkZXIhcG9zdGNzcy1sb2FkZXI/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW8udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVmlkZW8udnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlby52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWJlZDI3ZjMyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WaWRlby52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtYmVkMjdmMzJcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvdmlkZW8vVmlkZW8udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWJlZDI3ZjMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmVkMjdmMzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby9WaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iZWQyN2YzMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WaWRlby52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMyZTEzNWIzXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmVkMjdmMzJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW8udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmVkMjdmMzJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1xcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW8udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYmVkMjdmMzJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3ZpZGVvL1ZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnZpZGVvW2RhdGEtdi1iZWQyN2YzMl0ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYmVkMjdmMzJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wic291cmNlTWFwXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3ZpZGVvL1ZpZGVvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwidmlkZW9cIiwgeyBhdHRyczogeyBjb250cm9sczogXCJcIiB9IH0sIFtcbiAgICAgIF9jKFwic291cmNlXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uY29udGVudC51cmwsIHR5cGU6IFwidmlkZW8vbXA0XCIgfSB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iZWQyN2YzMlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJlZDI3ZjMyXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy92aWRlby9WaWRlby52dWVcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmlzSW1hZ2VcbiAgICAgICAgPyBfYyhcImltYWdlLXNsaWRlXCIsIHsgYXR0cnM6IHsgY29udGVudDogX3ZtLmNvbnRlbnQgfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc1ZpZGVvXG4gICAgICAgID8gX2MoXCJ2aWRlby1zbGlkZVwiLCB7IGF0dHJzOiB7IGNvbnRlbnQ6IF92bS5jb250ZW50IH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNCYW5uZXJcbiAgICAgICAgPyBfYyhcImJhbm5lci1zbGlkZVwiLCB7IGF0dHJzOiB7IGNvbnRlbnQ6IF92bS5jb250ZW50IH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wZThiYzU3M1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBlOGJjNTczXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL1NsaWRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNsaWRlci13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfdm0uaXNMb2FkaW5nICYmICFfdm0uaGFzRXJyb3JcbiAgICAgICAgPyBfYyhcInNwaW5uZXJcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lclwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2l6ZTogODgsXG4gICAgICAgICAgICAgIFwibGluZS1zaXplXCI6IDEwLFxuICAgICAgICAgICAgICBcImxpbmUtZmctY29sb3JcIjogXCIjZmY5NzE4XCIsXG4gICAgICAgICAgICAgIFwibGluZS1iZy1jb2xvclwiOiBcIiNkNGQ0ZDRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgID8gX2MoXCJwbGFjZWhvbGRlclwiKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG5zLW91dGVyIHRucy1ob3Jpem9udGFsIHRucy1zdWJwaXhlbCB0bnMtaXRlbVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnNsaWRlckNvbnRlbnQuc2xpZGVzLCBmdW5jdGlvbihzbGlkZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IGtleTogc2xpZGUuaW5kZXggfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzbGlkZVwiLCB7IGF0dHJzOiB7IGNvbnRlbnQ6IHNsaWRlIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTcyZWIxYWUyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzJlYjFhZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=