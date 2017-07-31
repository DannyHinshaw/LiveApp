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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(19)('wks')
  , uid        = __webpack_require__(12)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(10);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(32)
  , toPrimitive    = __webpack_require__(23)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(33)
  , enumBugKeys = __webpack_require__(20);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(19)('keys')
  , uid    = __webpack_require__(12);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(7)
  , ctx       = __webpack_require__(26)
  , hide      = __webpack_require__(3)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(35);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(42)
  , enumBugKeys = __webpack_require__(20)
  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(25)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(37).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(21)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(34)
  , hide           = __webpack_require__(3)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(13)
  , $iterCreate    = __webpack_require__(48)
  , setToStringTag = __webpack_require__(18)
  , getPrototypeOf = __webpack_require__(49)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(7)
  , LIBRARY        = __webpack_require__(21)
  , wksExt         = __webpack_require__(29)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(4)
  , arrayIndexOf = __webpack_require__(44)(false)
  , IE_PROTO     = __webpack_require__(17)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(28)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(33)
  , hiddenKeys = __webpack_require__(20).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(14);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4)
  , toLength  = __webpack_require__(36)
  , toIndex   = __webpack_require__(45);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(27)
  , descriptor     = __webpack_require__(10)
  , setToStringTag = __webpack_require__(18)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(39)
  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(3)
  , Iterators     = __webpack_require__(13)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(52)
  , step             = __webpack_require__(53)
  , Iterators        = __webpack_require__(13)
  , toIObject        = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(28)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

//
// Extension messaging system.
//
//
// This module, when used, allows communication among any extension-related
// contexts (background script, content scripts, development tools scripts, any
// JS code running in extension-related HTML pages, such as popups, options,
// ...).
//
// To start using the system, one needs to invoke exported `init` function from
// background script (once), passing 'bg' as the name of the context, optionally
// providing message handling functions. This will install onConnect listener
// for incoming Port connections from all other context.
//
// Any other context (with arbitrary name and (optional) message handlers) also
// invokes the `init` function. In this case, Port is created and connected to
// background script.
//
// Note: due to bug https://code.google.com/p/chromium/issues/detail?id=356133
// we also have dedicated name for developer tools context: 'dt'. Once this bug
// is fixed, the only reserved context name will be 'bg' for background again.
//
// To avoid race conditions, make sure that your background script calls `init`
// function after it is started, so it doesn't miss any Port connections
// attempts.
//
// To be able to handle commands (or associated messages) in contexts (both
// background and non-background), one must pass message handling functions in
// `handlers` object when invoking respective `init` function for given context.
// The `handlers` object is a function lookup table, i.e. object with function
// names as its keys and functions (code) as corresponding values. The function
// will be invoked, when given context is requested to handle message
// representing command with name that can be found as a key of the `handlers`
// object. Its return value (passed in callback, see below) will be treated as
// value that should be passed back to the requestor.
//
// Each message handling function can take any number of parameters, but MUST
// take callback as its last argument and invoke this callback when the message
// handler is done with processing of the message (regardless if synchronous or
// asynchronous). The callback takes one argument, this argument is treated as
// return value of the message handler. The callback function MUST be invoked
// once and only once.
//
// The `init` function returns (for any context it is invoked in) messaging
// object with two function: `cmd` and `bcast`, both used for sending messages
// to different contexts (or same context in different windows / tabs).
//
// Both functions behave the same way and have also the same arguments, the only
// difference is that the `cmd` callback (its last argument, if provided) is
// invoked with only one response value from all collected responses, while to
// the `bcast` callback (if provided) we pass array with all valid responses we
// collected while broadcasting given request.
//
// `cmd` and `bcast` functions arguments:
//
// (optional) [int] tabId: if not specified, broadcasted to all tabs,
//      if specified, sent only to given tab, can use SAME_TAB value here
//      (exported from this module, too)
//
// (optional) [array] contexts: if not specified, broadcasted to all contexts,
//      if specified, sent only to listed contexts (context name is provided
//      as the first argument when invoking the `init` function)
//
// (required) [string] command: name of the command to be executed
//
// (optional) [any type] arguments: any number of aruments that follow command
//      name are passed to execution handler when it is invoked
//
// (optional) [function(result)] callback: if provided (as last argument to
//      `cmd` or `bcast`), this function will be invoked when the response(s)
//      is/are received
//
// The `cmd` and `bcast` functions return `true` if the processing of the
// request was successful (i.e. if all the arguments were recognized properly),
// otherwise it returns `false`.
//
// When `cmd` or `bcast` function is invoked from background context, a set of
// context instances, to which the message will be sent to, is created based on
// provided arguments (tab id and context names). The set is NOT filtered by
// provided command name, as background context doesn't know what message
// handlers are used in all the contexts (i.e. it doesn't know the function
// names in message handling lookup function tables of non-background contexts).
//
// When tab id or context names are NOT provided, the command is broadcasted to
// all possible context instances, which the background knows about, and that
// may require a lot of messaging... So for performance reasons it is wise to
// provide tab-id and / or context name(s) whenever possible to reduce the size
// of the context instances set as much as it gets.
//
// When message corresponding to command is then received in non-background
// context, the handler lookup table is checked if it contains handler for
// requested command name. If so, the handler is invokend and its "return value"
// (passed in callback, to allow asynchronous message handling) is then sent
// back to background. If there is no corresponding handler (for requested
// command name), message indicating that is sent back instead.
//
// When background collects all the responses back from all the context
// instances it sent the message to, it invokes the `cmd` or `bcast` callback,
// passing the response value(s). If there was no callback provided, the
// collected response values are simply dropped.
//
// When `cmd` or `bcast` function is invoked from non-background context, the
// request message is sent to background. Background then dispatches the request
// to all relevant context instances that match provided filters (again, based on
// passed tab id and / or context names), and dispatches the request in favor of
// the context instance that sent the original request to background. The
// dispatching logic is described above (i.e. it is the same as if the request
// was sent by background).
//
// There is one difference though: if background has corresponding handler for
// requested command name (and background context is not filtered out when
// creating the set of contexts), this handler is invoked (in background
// context) and the "return value" is also part of the collected set of
// responses.
//
// When all the processing in all the context instances (including background
// context, if applicable) is finished and responses are collected, the
// responses are sent back to the original context instance that initiated the
// message processing.
//
//
// EXAMPLE:
//
// background script:
// -----
//
// var msg = require('msg').init('bg', {
//   square: function(what, done) { done(what*what); }
// });
//
// setInterval(function() {
//   msg.bcast(/* ['ct'] */, 'ping', function(responses) {
//     console.log(responses);  // --->  ['pong','pong',...]
//   });
// }, 1000);  // broadcast 'ping' each second
//
//
// content script:
// -----
//
// var msg = require('msg').init('ct', {
//   ping: function(done) { done('pong'); }
// });
//
// msg.cmd(/* ['bg'] */, 'square', 5, function(res) {
//   console.log(res);  // ---> 25
// });
//
// ----------
//
// For convenient sending requests from non-background contexts to
// background-only (as this is most common case: non-bg context needs some info
// from background), there is one more function in the messaging object returned
// by the init() function. The function is called 'bg' and it prepends the list
// of passed arguments with ['bg'] array, so that means the reuqest is targeted
// to background-only. The 'bg' function does NOT take 'tabId' or 'contexts'
// parameters, the first argument must be the command name.
//
// EXAMPLE:
//
// background script
// -----
//
// ( ... as above ... )
//
// content script:
// -----
//
// var msg = require('msg').init('ct', {
//   ping: function(done) { done('pong'); }
// });
//
// msg.bg('square', 5, function(res) {
//   console.log(res);  // ---> 25
// });
//
// ----------
//
// There are two dedicated background handlers that, when provided in `handlers`
// object for `bg` context in `init` function, are invoked by the messaging
// system itself. These handlers are:
//
// + onConnect: function(contextName, tabId),
// + onDisconnect: function(contextName, tabId)
//
// These two special handlers, if provided, are invoked when new Port is
// connected (i.e. when `init` function is invoked in non-bg context), and
// then when they are closed (disconnected) later on. This notification system
// allows to maintain some state about connected contexts in extension
// backround.
//
// Please note that unlike all other handlers passed as the `handlers` object to
// `init` function, these two special handlers do NOT take callback as their
// last arguments. Any return value these handlers may return is ignored.
//
// The `contextName` parameter is value provided to non-background `init`
// function, while the `tabId` is provided by the browser. If tabId is not
// provided by the browser, the `tabId` will be `Infinity`.
//


// constant for "same tab as me"
var SAME_TAB = -1000; // was -Infinity, but JSON.stringify() + JSON.parse() don't like that value

// run-time API:
// variable + exported function to change it, so it can be mocked in unit tests
/* global chrome */
var runtime = (typeof chrome === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(chrome)) === 'object' && chrome.runtime;
// the same for devtools API:
var devtools = (typeof chrome === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(chrome)) === 'object' && chrome.devtools;

// utility function for looping through object's own keys
// callback: function(key, value, obj) ... doesn't need to use all 3 parameters
// returns object with same keys as the callback was invoked on, values are the
//   callback returned values ... can be of course ignored by the caller, too
function forOwnProps(obj, callback) {
  if (typeof callback !== 'function') {
    return null;
  }
  var res = {};
  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (obj.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      res[key] = callback(key, obj[key], obj);
    }
  }
  return res;
}

// we wrap the whole module functionality into isolated scope, so that later we
// can instantiate multiple parallel scopes for unit testing.
// The module will still seem to hold singleton object, because we'll create
// this singleton and will export its methods as (whole) module methods.

function Messaging() {
  // handlers available in given context (function lookup table), set in `init()`
  // format:
  // {
  //   (string)<functioName>: (function)<code>,
  //   ...
  // }
  this.handlers = {};

  // id assigned by background, used in non-background contexts only
  // in background set to 'bg'
  this.id = null;

  // port used for communication with background (i.e. not used in background)
  // type: (chrome.runtime) Port
  this.port = null;

  // map of ports for connected extensions
  // key = extension id, value = port
  this.extPorts = {};

  // callback lookup table: if request waits for response, this table holds
  // the callback function that will be invoke upon response
  // format:
  // {
  //   (int)<requestId>: (function)<callback code>,
  //   ...
  // }
  this.cbTable = {};

  // background table of pending requests
  // format:
  // {
  //   (string)<portId>: [ { id: (int)<requestId>, cb: (function)<callback> }, ...],
  //   ...
  // }
  this.pendingReqs = {};

  // unique context id, used by background
  this.uId = 1;

  // request id, used by all contexts
  this.requestId = 1;

  // mapping non-background context names to objects indexed by name of the context
  // instances, holding { tab-id, (chrome.runtime.)Port } pairs,
  // used for message dispatching
  // format:
  // {
  //   (string)<category>: {
  //     (string)<id>: { tabId: (optional)<int>, port: <chrome.runtime.Port> },
  //     ...
  //   },
  //   ...
  // }
  // background-only variable
  this.portMap = {};

  // runetime and devtools references, so that we can change it in unit tests
  this.runtime = runtime;
  this.devtools = devtools;
}

// background function for selecting target ports to which we broadcast the request
// fromBg: is the request to collect targets from bacground, or based on message?
// targ*: filter for target ports
// src*: information about source port
// returns array of { port: (chrome.runtime.Port), id: (string) }
Messaging.prototype.selectTargets = function selectTargets(fromBg, targTabId, targCategories, srcCategory, srcPortId) {
  var res = [];
  // eslint-disable-next-line no-underscore-dangle
  var _port = this.portMap[srcCategory] && this.portMap[srcCategory][srcPortId];
  if (!fromBg && !_port) {
    // this should never happen, we just got request from this port!
    return [];
  }
  if (!fromBg && targTabId === SAME_TAB) {
    targTabId = _port.tabId; // eslint-disable-line no-param-reassign
  }
  // iterate through portMap, pick targets:
  forOwnProps(this.portMap, function (categ, portGroup) {
    if (targCategories && targCategories.indexOf(categ) === -1) {
      // we are interested only in specified contexts,
      // and this category is not on the list
      return;
    }
    forOwnProps(portGroup, function (id, _ref) {
      if (targTabId && targTabId !== _ref.tabId) {
        // we are interested in specified tab id,
        // and this id doesn't match
        return;
      }
      if (fromBg || _port.port !== _ref.port) {
        // do not ask me back, ask only different ports
        res.push({ port: _ref.port, id: id });
      }
    });
  });
  return res;
};

// message handler (useb by both background and non-backound)
Messaging.prototype.onCustomMsg = function onCustomMsg(message) {
  /* eslint-disable no-underscore-dangle */
  var _port = void 0;
  var _arr = void 0;
  var _localHandler = void 0;
  var _ref = void 0;
  var i = void 0;
  /* eslint-enable */

  // helper functions:

  // send response on result (non-background):
  function sendResultCb(result) {
    if (message.sendResponse) {
      this.port.postMessage({
        cmd: 'response',
        portId: this.id,
        reqId: message.reqId,
        resultValid: true,
        result: result
      });
    }
  }

  // create callback waiting for N results, then send response (background):
  function createCbForMoreResults(N) {
    var _this = this;

    var results = [];
    var myId = this.runtime.id;
    return function (result, resultValid) {
      if (resultValid !== false) {
        // can be either `true` or `undefined`
        results.push(result);
      }
      N -= 1; // eslint-disable-line no-param-reassign
      if (!N && message.sendResponse && ( // eslint-disable-line no-cond-assign
      (_port = _this.extPorts[message.extensionId]) || _this.portMap[message.category] && (_port = _this.portMap[message.category][message.portId]))) {
        var response = {
          cmd: 'response',
          reqId: message.reqId,
          result: message.broadcast ? results : results[0]
        };

        if (message.extensionId) {
          response.extensionId = myId;
        }
        _port.port.postMessage(response);
      }
    }; // .bind(this);
  }

  // main message processing:
  if (!message || !message.cmd) {
    return;
  }
  if (message.cmd === 'setName') {
    this.id = message.name;
    return;
  }
  if (this.id === 'bg') {
    // background
    if (message.cmd === 'request') {
      var targetPorts = this.selectTargets(false, message.tabId, message.contexts, message.category, message.portId);
      var responsesNeeded = targetPorts.length;
      if (message.tabId === undefined && (!message.contexts || message.contexts.indexOf('bg') !== -1)) {
        // we are also interested in response from background itself
        if ( // eslint-disable-line no-cond-assign
        (_ref = this.handlers[message.cmdName]) && typeof _ref === 'function') {
          _localHandler = _ref;
          responsesNeeded += 1;
        }
      }
      if (!responsesNeeded) {
        // no one to answer that now
        if ( // eslint-disable-line no-cond-assign
        message.sendResponse && ((_port = this.extPorts[message.extensionId]) || this.portMap[message.category] && (_port = this.portMap[message.category][message.portId]))) {
          var response = {
            cmd: 'response',
            reqId: message.reqId,
            resultValid: false,
            result: message.broadcast ? [] : undefined
          };
          if (message.extensionId) {
            response.extensionId = this.runtime.id;
          }
          _port.port.postMessage(response);
        }
      } else {
        // some responses needed
        var cb = createCbForMoreResults.call(this, responsesNeeded);
        // send to target ports
        for (i = 0; i < targetPorts.length; i += 1) {
          _port = targetPorts[i];
          _port.port.postMessage({
            cmd: 'request',
            cmdName: message.cmdName,
            sendResponse: true,
            args: message.args,
            reqId: this.requestId
          });
          _arr = this.pendingReqs[_port.id] || [];
          _arr.push({ id: this.requestId, cb: cb });
          this.pendingReqs[_port.id] = _arr;
          this.requestId += 1;
        }
        // get local response (if background can provide it)
        if (_localHandler) {
          message.args.push(cb);
          _localHandler.apply(this.handlers, message.args);
        }
      }
    } else if (message.cmd === 'response') {
      var id = message.portId || message.extensionId;
      _arr = this.pendingReqs[id]; // warning: IE creates a copy here!
      if (_arr) {
        // some results from given port expected, find the callback for reqId
        i = 0;
        while (i < _arr.length && _arr[i].id !== message.reqId) {
          i += 1;
        }
        if (i < _arr.length) {
          // callback found
          _arr[i].cb(message.result, message.resultValid);
          this.pendingReqs[id].splice(i, 1); // need to use orig array (IE problem)
          if (!this.pendingReqs[id].length) {
            // ... same here
            delete this.pendingReqs[id];
          }
        }
      }
    } else if (message.cmd === 'updateTabId') {
      var context = message.context;
      var portId = message.portId;
      if ( // eslint-disable-line no-cond-assign
      (_port = this.portMap[context]) && (_port = _port[portId])) {
        if (typeof this.handlers.onDisconnect === 'function') {
          this.handlers.onDisconnect(context, _port.tabId);
        }
        _port.tabId = message.tabId;
        if (typeof this.handlers.onConnect === 'function') {
          this.handlers.onConnect(context, _port.tabId);
        }
      }
    }
  } else if (message.cmd === 'request') {
    // non-background
    _localHandler = this.handlers[message.cmdName];
    if (typeof _localHandler !== 'function') {
      if (message.sendResponse) {
        this.port.postMessage({
          cmd: 'response',
          portId: this.id,
          reqId: message.reqId,
          resultValid: false
        });
      }
    } else {
      message.args.push(sendResultCb.bind(this));
      _localHandler.apply(this.handlers, message.args);
    }
  } else if (message.cmd === 'response') {
    if (this.cbTable[message.reqId]) {
      this.cbTable[message.reqId](message.result);
      delete this.cbTable[message.reqId];
    }
  }
};

// invoke callbacks for pending requests and remove the requests from the structure
Messaging.prototype.closePendingReqs = function closePendingReqs(portId) {
  var arr = void 0;
  if (arr = this.pendingReqs[portId]) {
    // eslint-disable-line no-cond-assign
    for (var i = 0; i < arr.length; i += 1) {
      arr[i].cb(undefined, false);
    }
    delete this.pendingReqs[portId];
  }
};

Messaging.prototype.registerExternalConnection = function regExternalConnection(extensionId, port) {
  this.extPorts[extensionId] = { port: port };

  var onCustomMsg = void 0;
  var onDisconnect = void 0;

  // on disconnect: remove listeners and delete from port map
  function onDisconnectFn() {
    // listeners:
    port.onDisconnect.removeListener(onDisconnect);
    port.onMessage.removeListener(onCustomMsg);
    delete this.extPorts[extensionId];
    // close all pending requests:
    this.closePendingReqs(extensionId);
    // invoke custom onDisconnect handler
    if (typeof this.handlers.onExtensionDisconnect === 'function') {
      this.handlers.onExtensionDisconnect(extensionId);
    }
  }

  // install port handlers
  port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
  port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
  // invoke custom onConnect handler
  if (typeof this.handlers.onExtensionConnect === 'function') {
    this.handlers.onExtensionConnect(extensionId);
  }
};

Messaging.prototype.onConnectExternal = function onConnectExternal(port) {
  if (this.extPorts[port.sender.id]) {
    return;
  }

  this.registerExternalConnection(port.sender.id, port);
};

// backround onConnect handler
Messaging.prototype.onConnect = function onConnect(port) {
  // add to port map
  var categName = port.name || 'unknown';
  var portId = categName + '-' + this.uId;
  this.uId += 1;
  var portCateg = this.portMap[categName] || {};
  var tabId = port.sender && port.sender.tab && port.sender.tab.id || Infinity;
  portCateg[portId] = { port: port, tabId: tabId };
  this.portMap[categName] = portCateg;
  var onCustomMsg = void 0;
  var onDisconnect = void 0;
  // on disconnect: remove listeners and delete from port map
  function onDisconnectFn() {
    // listeners:
    port.onDisconnect.removeListener(onDisconnect);
    port.onMessage.removeListener(onCustomMsg);
    // port map:
    portCateg = this.portMap[categName];
    var _port = void 0; // eslint-disable-line no-underscore-dangle
    if (portCateg && (_port = portCateg[portId])) {
      // eslint-disable-line no-cond-assign
      tabId = _port.tabId;
      delete portCateg[portId];
    }
    // close all pending requests:
    this.closePendingReqs(portId);
    // invoke custom onDisconnect handler
    if (typeof this.handlers.onDisconnect === 'function') {
      this.handlers.onDisconnect(categName, tabId);
    }
  }
  // install port handlers
  port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
  port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
  // ask counter part to set its id
  port.postMessage({ cmd: 'setName', name: portId });
  // invoke custom onConnect handler
  if (typeof this.handlers.onConnect === 'function') {
    this.handlers.onConnect(categName, tabId);
  }
};

// create main messaging object, hiding all the complexity from the user
// it takes name of local context `myContextName`
//
// the returned object has two main functions: cmd and bcast
//
// they behave the same way and have also the same arguments, the only
// difference is that to `cmd` callback (if provided) is invoked with only one
// response value from all possible responses, while to `bcast` callback (if
// provided) we pass array with all valid responses we collected while
// broadcasting given request.
//
// functions arguments:
//
// (optional) [int] tabId: if not specified, broadcasted to all tabs,
//      if specified, sent only to given tab, can use SAME_TAB value here
//
// (optional) [array] contexts: if not specified, broadcasted to all contexts,
//      if specified, sent only to listed contexts
//
// (required) [string] command: name of the command to be executed
//
// (optional) [any type] arguments: any number of aruments that follow command
//      name are passed to execution handler when it is invoked
//
// (optional) [function(result)] callback: if provided (as last argument to
//      `cmd` or `bcast`) this function will be invoked when the response(s)
//      is/are received
//
// the functions return `true` if the processing of the request was successful
// (i.e. if all the arguments were recognized properly), otherwise it returns
// `false`.
//
// for non-bg contexts there is one more function in the messaging object
// available: 'bg' function, that is the same as 'cmd', but prepends the list of
// arguments with ['bg'], so that the user doesn't have to write it when
// requesting some info in non-bg context from background.
//
Messaging.prototype.createMsgObject = function createMsgObject(myContextName) {
  // generator for functions `cmd` and `bcast`
  function createFn(broadcast) {
    // helper function for invoking provided callback in background
    function createCbForMoreResults(N, callback) {
      var results = [];
      return function (result, resultValid) {
        if (resultValid) {
          results.push(result);
        }
        N -= 1; // eslint-disable-line no-param-reassign
        if (N <= 0 && callback) {
          callback(broadcast ? results : results[0]);
        }
      };
    }
    // generated function:
    return function _msg() {
      // process arguments:
      if (!arguments.length) {
        // at least command name must be provided
        return false;
      }
      if (!this.id) {
        // since we learn our id of non-background context in asynchronous
        // message, we may need to wait for it...
        var _ctx = this;
        var _args = arguments;
        setTimeout(function () {
          _msg.apply(_ctx, _args);
        }, 1);
        return true;
      }
      var tabId = void 0;
      var contexts = void 0;
      var cmdName = void 0;
      var args = [];
      var callback = void 0;
      var curArg = 0;
      var argsLimit = arguments.length;
      // check if we have callback:
      if (typeof arguments[argsLimit - 1] === 'function') {
        argsLimit -= 1;
        callback = arguments[argsLimit];
      }
      // other arguments:
      while (curArg < argsLimit) {
        var arg = arguments[curArg];
        curArg += 1;
        if (cmdName !== undefined) {
          args.push(arg);
        } else {
          // we don't have command name yet...
          switch (typeof arg === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(arg)) {
            // tab id
            case 'number':
              if (tabId !== undefined) {
                return false; // we already have tab id --> invalid args
              }
              tabId = arg;
              break;
            // contexts  (array)
            case 'object':
              if (typeof arg.length === 'undefined' || contexts !== undefined) {
                return false; // we either have it, or it is not array-like object
              }
              contexts = arg;
              break;
            // command name
            case 'string':
              cmdName = arg;
              break;
            // anything else --> error
            default:
              return false;
          }
        }
      }
      if (cmdName === undefined) {
        return false; // command name is mandatory
      }
      // store the callback and issue the request (message)
      if ('bg' === this.id) {
        var targetPorts = this.selectTargets(true, tabId, contexts);
        var responsesNeeded = targetPorts.length;
        var cb = createCbForMoreResults.call(this, responsesNeeded, callback);
        // send to target ports
        for (var i = 0; i < targetPorts.length; i += 1) {
          var _port = targetPorts[i];
          _port.port.postMessage({
            cmd: 'request',
            cmdName: cmdName,
            sendResponse: true,
            args: args,
            reqId: this.requestId
          });
          var _arr = this.pendingReqs[_port.id] || [];
          _arr.push({ id: this.requestId, cb: cb });
          this.pendingReqs[_port.id] = _arr;
          this.requestId += 1;
        }
        if (!targetPorts.length) {
          // no one to respond, invoke the callback (if provided) right away
          cb(null, false);
        }
      } else {
        if (callback) {
          this.cbTable[this.requestId] = callback;
        }
        this.port.postMessage({
          cmd: 'request',
          cmdName: cmdName,
          reqId: this.requestId,
          sendResponse: callback !== undefined,
          broadcast: broadcast,
          category: myContextName,
          portId: this.id,
          tabId: tabId,
          contexts: contexts,
          args: args
        });
        this.requestId += 1;
      }
      // everything went OK
      return true;
    }.bind(this);
  }

  function createCmdExtFn() {
    return function _msg(extensionId, commandName) {
      // process arguments:
      if (arguments.length < 2) {
        // at least extension id and command name must be provided
        return false;
      }

      if (this.id !== 'bg') {
        return false; // only background can send messagess to another extensions
      }

      var args = Array.prototype.slice.call(arguments, 2);
      var callback = void 0;
      if (typeof args[args.length - 1] === 'function') {
        callback = args.pop();
      }

      var _port = this.extPorts[extensionId];
      if (!_port) {
        // no one to respond, invoke the callback (if provided) right away
        if (callback) {
          callback();
        }

        return true;
      }

      _port.port.postMessage({
        cmd: 'request',
        cmdName: commandName,
        sendResponse: true,
        args: args,
        reqId: this.requestId,
        extensionId: this.runtime.id
      });

      var _arr = this.pendingReqs[extensionId] || [];
      _arr.push({ id: this.requestId,
        cb: function cb(result /* , resultValid/**/) {
          // ignore 'resultValid' because it is not applicable here
          if (callback) {
            callback(result);
          }
        }
      });
      this.pendingReqs[extensionId] = _arr;
      this.requestId += 1;

      // everything went OK
      return true;
    }.bind(this);
  }

  // returned object:
  var res = {
    cmd: createFn.call(this, false),
    bcast: createFn.call(this, true)
  };

  // for more convenience (when sending request from non-bg to background only)
  // adding 'bg(<cmdName>, ...)' function, that is equivalent to "cmd(['bg'], <cmdName>, ...)"
  if (myContextName !== 'bg') {
    res.bg = function bg() {
      if (0 === arguments.length || 'string' !== typeof arguments[0]) {
        return false;
      }
      var args = [['bg']];
      for (var i = 0; i < arguments.length; i += 1) {
        args.push(arguments[i]);
      }
      return res.cmd.apply(res, args);
    };
  } else {
    res.connectExt = function connectExt(id) {
      if (this.extPorts[id]) {
        // already connected
        return true;
      }
      var port = this.runtime.connect(id);
      this.registerExternalConnection(id, port);
      return undefined;
    }.bind(this);
    res.cmdExt = createCmdExtFn.call(this);
  }

  return res;
};

// init function, exported
//
// takes mandatory `context`, it is any string (e.g. 'ct', 'popup', ...),
// only one value is of special meaning: 'bg' ... must be used for initializing
// of the background part, any other context is considered non-background
//
// optionally takes `handlers`, which is object mapping function names to
// function codes, that is used as function lookup table. each message handling
// function MUST take callback as its last argument and invoke this callback
// when the message handler is done with processing of the message (regardless
// if synchronous or asynchronous). the callback takes one argument, this
// argument is treated as return value of the message handler.
//
// for background (`context` is 'bg'): installs onConnect listener
// for non-background context it connects to background
//
Messaging.prototype.init = function init(context, handlers) {
  // set message handlers (optional)
  this.handlers = handlers || {};

  // listener references
  var onDisconnect = void 0;
  var onCustomMsg = void 0;

  // helper function:
  function onDisconnectFn() {
    this.port.onDisconnect.removeListener(onDisconnect);
    this.port.onMessage.removeListener(onCustomMsg);
  }

  var tabId = void 0;
  function updateTabId() {
    if (!this.id) {
      setTimeout(updateTabId.bind(this), 1);
      return;
    }
    this.port.postMessage({
      cmd: 'updateTabId',
      context: context,
      portId: this.id,
      tabId: tabId
    });
  }

  if (context === 'bg') {
    // background
    this.id = 'bg';
    this.runtime.onConnect.addListener(this.onConnect.bind(this));
    this.runtime.onConnectExternal.addListener(this.onConnectExternal.bind(this));
  } else {
    // anything else than background
    this.port = this.runtime.connect({ name: context });
    this.port.onMessage.addListener(onCustomMsg = this.onCustomMsg.bind(this));
    this.port.onDisconnect.addListener(onDisconnect = onDisconnectFn.bind(this));
    // tabId update for developer tools
    // unfortunately we need dedicated name for developer tools context, due to
    // this bug: https://code.google.com/p/chromium/issues/detail?id=356133
    // ... we are not able to tell if we are in DT context otherwise :(
    if ( // eslint-disable-line no-cond-assign
    context === 'dt' && this.devtools && (tabId = this.devtools.inspectedWindow) && typeof (tabId = tabId.tabId) === 'number') {
      updateTabId.call(this);
    }
  }

  return this.createMsgObject(context);
};

// singleton representing this module
var singleton = new Messaging();

// helper function to install methods used for unit tests
function installUnitTestMethods(target, delegate) {
  /* eslint-disable no-underscore-dangle, no-param-reassign */
  // setters
  target.__setRuntime = function (rt) {
    delegate.runtime = rt;return target;
  };
  target.__setDevTools = function (dt) {
    delegate.devtools = dt;return target;
  };
  // getters
  target.__getId = function () {
    return delegate.id;
  };
  target.__getPort = function () {
    return delegate.port;
  };
  target.__getPortMap = function () {
    return delegate.portMap;
  };
  target.__getHandlers = function () {
    return delegate.handlers;
  };
  target.__getPendingReqs = function () {
    return delegate.pendingReqs;
  };
  /* eslint-enable */
}

/* harmony default export */ __webpack_exports__["a"] = ({
  // same tab id
  SAME_TAB: SAME_TAB,
  // see description for init function above
  init: singleton.init.bind(singleton),
  // --- for unit tests ---
  // allow unit testing of the main module:
  __allowUnitTests: function __allowUnitTests() {
    installUnitTestMethods(this, singleton);
  },

  // context cloning
  __createClone: function __createClone() {
    var clone = new Messaging();
    clone.SAME_TAB = SAME_TAB;
    installUnitTestMethods(clone, clone);
    return clone;
  }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// create handler module for given `context`.
// handles `random`, `randomAsync`, and `echo` commands.
// both `random` function log the invocation information to console and return
// random number 0 - 999. `randomAsync` returns the value with 15 second delay.
// `echo` function doesn't return anything, just logs the input parameter
// `what`.

function log() {
  var _console;

  (_console = console).log.apply(_console, arguments); // eslint-disable-line no-console
}

var handlers = {};

handlers.create = function (context) {
  return {
    random: function random(done) {
      log('--->' + context + '::random() invoked');
      var r = Math.floor(1000 * Math.random());
      log('<--- returns: ' + r);
      done(r);
    },
    randomAsync: function randomAsync(done) {
      log('--->' + context + '::randomAsync() invoked (15 sec delay)');
      setTimeout(function () {
        var r = Math.floor(1000 * Math.random());
        log('<--- returns: ' + r);
        done(r);
      }, 15 * 1000);
    },
    echo: function echo(what, done) {
      log('---> ' + context + '::echo("' + what + '") invoked');
      log('<--- (no return value)');
      done();
    }
  };
};

// for surpressing console.log output in unit tests:
handlers.__resetLog = function () {
  // eslint-disable-line no-underscore-dangle
  log = function log() {}; // eslint-disable-line no-func-assign
};

/* harmony default export */ __webpack_exports__["a"] = (handlers);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(57);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(59);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(50);
module.exports = __webpack_require__(29).f('iterator');

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(46);
__webpack_require__(68);
__webpack_require__(69);
module.exports = __webpack_require__(7).Symbol;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(34)
  , META           = __webpack_require__(62).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(19)
  , setToStringTag = __webpack_require__(18)
  , uid            = __webpack_require__(12)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(29)
  , wksDefine      = __webpack_require__(30)
  , keyOf          = __webpack_require__(63)
  , enumKeys       = __webpack_require__(64)
  , isArray        = __webpack_require__(65)
  , anObject       = __webpack_require__(8)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(23)
  , createDesc     = __webpack_require__(10)
  , _create        = __webpack_require__(27)
  , gOPNExt        = __webpack_require__(66)
  , $GOPD          = __webpack_require__(67)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(14)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(41).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f  = $propertyIsEnumerable;
  __webpack_require__(40).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(21)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(12)('meta')
  , isObject = __webpack_require__(9)
  , has      = __webpack_require__(2)
  , setDesc  = __webpack_require__(5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(14)
  , toIObject = __webpack_require__(4);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14)
  , gOPS    = __webpack_require__(40)
  , pIE     = __webpack_require__(31);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4)
  , gOPN      = __webpack_require__(41).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(31)
  , createDesc     = __webpack_require__(10)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(23)
  , has            = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(32)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_handlers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_msg__ = __webpack_require__(54);



// here we use SHARED message handlers, so all the contexts support the same
// commands. but this is NOT typical messaging system usage, since you usually
// want each context to handle different commands. for this you don't need
// handlers factory as used below. simply create individual `handlers` object
// for each context and pass it to msg.init() call. in case you don't need the
// context to support any commands, but want the context to cooperate with the
// rest of the extension via messaging system (you want to know when new
// instance of given context is created / destroyed, or you want to be able to
// issue command requests from this context), you may simply omit the
// `handlers` parameter for good when invoking msg.init()

__WEBPACK_IMPORTED_MODULE_1__modules_msg__["a" /* default */].init('dt', __WEBPACK_IMPORTED_MODULE_0__modules_handlers__["a" /* default */].create('dt'));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWEwMTY0YmIwZGYwZWZlZDk0ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tc2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RldlRvb2xzLmpzIl0sIm5hbWVzIjpbIlNBTUVfVEFCIiwicnVudGltZSIsImNocm9tZSIsImRldnRvb2xzIiwiZm9yT3duUHJvcHMiLCJvYmoiLCJjYWxsYmFjayIsInJlcyIsImtleSIsImhhc093blByb3BlcnR5IiwiTWVzc2FnaW5nIiwiaGFuZGxlcnMiLCJpZCIsInBvcnQiLCJleHRQb3J0cyIsImNiVGFibGUiLCJwZW5kaW5nUmVxcyIsInVJZCIsInJlcXVlc3RJZCIsInBvcnRNYXAiLCJwcm90b3R5cGUiLCJzZWxlY3RUYXJnZXRzIiwiZnJvbUJnIiwidGFyZ1RhYklkIiwidGFyZ0NhdGVnb3JpZXMiLCJzcmNDYXRlZ29yeSIsInNyY1BvcnRJZCIsIl9wb3J0IiwidGFiSWQiLCJjYXRlZyIsInBvcnRHcm91cCIsImluZGV4T2YiLCJfcmVmIiwicHVzaCIsIm9uQ3VzdG9tTXNnIiwibWVzc2FnZSIsIl9hcnIiLCJfbG9jYWxIYW5kbGVyIiwiaSIsInNlbmRSZXN1bHRDYiIsInJlc3VsdCIsInNlbmRSZXNwb25zZSIsInBvc3RNZXNzYWdlIiwiY21kIiwicG9ydElkIiwicmVxSWQiLCJyZXN1bHRWYWxpZCIsImNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMiLCJOIiwicmVzdWx0cyIsIm15SWQiLCJleHRlbnNpb25JZCIsImNhdGVnb3J5IiwicmVzcG9uc2UiLCJicm9hZGNhc3QiLCJuYW1lIiwidGFyZ2V0UG9ydHMiLCJjb250ZXh0cyIsInJlc3BvbnNlc05lZWRlZCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNtZE5hbWUiLCJjYiIsImNhbGwiLCJhcmdzIiwiYXBwbHkiLCJzcGxpY2UiLCJjb250ZXh0Iiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiYmluZCIsImNsb3NlUGVuZGluZ1JlcXMiLCJhcnIiLCJyZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbiIsInJlZ0V4dGVybmFsQ29ubmVjdGlvbiIsIm9uRGlzY29ubmVjdEZuIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJvbkV4dGVuc2lvbkRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lciIsIm9uRXh0ZW5zaW9uQ29ubmVjdCIsIm9uQ29ubmVjdEV4dGVybmFsIiwic2VuZGVyIiwiY2F0ZWdOYW1lIiwicG9ydENhdGVnIiwidGFiIiwiSW5maW5pdHkiLCJjcmVhdGVNc2dPYmplY3QiLCJteUNvbnRleHROYW1lIiwiY3JlYXRlRm4iLCJfbXNnIiwiYXJndW1lbnRzIiwiX2N0eCIsIl9hcmdzIiwic2V0VGltZW91dCIsImN1ckFyZyIsImFyZ3NMaW1pdCIsImFyZyIsImNyZWF0ZUNtZEV4dEZuIiwiY29tbWFuZE5hbWUiLCJBcnJheSIsInNsaWNlIiwicG9wIiwiYmNhc3QiLCJiZyIsImNvbm5lY3RFeHQiLCJjb25uZWN0IiwiY21kRXh0IiwiaW5pdCIsInVwZGF0ZVRhYklkIiwiaW5zcGVjdGVkV2luZG93Iiwic2luZ2xldG9uIiwiaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyIsInRhcmdldCIsImRlbGVnYXRlIiwiX19zZXRSdW50aW1lIiwicnQiLCJfX3NldERldlRvb2xzIiwiZHQiLCJfX2dldElkIiwiX19nZXRQb3J0IiwiX19nZXRQb3J0TWFwIiwiX19nZXRIYW5kbGVycyIsIl9fZ2V0UGVuZGluZ1JlcXMiLCJfX2FsbG93VW5pdFRlc3RzIiwiX19jcmVhdGVDbG9uZSIsImNsb25lIiwibG9nIiwiY3JlYXRlIiwicmFuZG9tIiwiZG9uZSIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb21Bc3luYyIsImVjaG8iLCJ3aGF0IiwiX19yZXNldExvZyIsIm1zZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBLEU7Ozs7OztBQ2ZBLHlDOzs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBQStILENBQUk5QixJQUFKLENBQVMsSUFBVCxFQUFlLGtFQUFBakcsQ0FBU3FILE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBZixFIiwiZmlsZSI6Ii4vanMvZGV2VG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhMDE2NGJiMGRmMGVmZWQ5NGVjIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy9cbi8vIEV4dGVuc2lvbiBtZXNzYWdpbmcgc3lzdGVtLlxuLy9cbi8vXG4vLyBUaGlzIG1vZHVsZSwgd2hlbiB1c2VkLCBhbGxvd3MgY29tbXVuaWNhdGlvbiBhbW9uZyBhbnkgZXh0ZW5zaW9uLXJlbGF0ZWRcbi8vIGNvbnRleHRzIChiYWNrZ3JvdW5kIHNjcmlwdCwgY29udGVudCBzY3JpcHRzLCBkZXZlbG9wbWVudCB0b29scyBzY3JpcHRzLCBhbnlcbi8vIEpTIGNvZGUgcnVubmluZyBpbiBleHRlbnNpb24tcmVsYXRlZCBIVE1MIHBhZ2VzLCBzdWNoIGFzIHBvcHVwcywgb3B0aW9ucyxcbi8vIC4uLikuXG4vL1xuLy8gVG8gc3RhcnQgdXNpbmcgdGhlIHN5c3RlbSwgb25lIG5lZWRzIHRvIGludm9rZSBleHBvcnRlZCBgaW5pdGAgZnVuY3Rpb24gZnJvbVxuLy8gYmFja2dyb3VuZCBzY3JpcHQgKG9uY2UpLCBwYXNzaW5nICdiZycgYXMgdGhlIG5hbWUgb2YgdGhlIGNvbnRleHQsIG9wdGlvbmFsbHlcbi8vIHByb3ZpZGluZyBtZXNzYWdlIGhhbmRsaW5nIGZ1bmN0aW9ucy4gVGhpcyB3aWxsIGluc3RhbGwgb25Db25uZWN0IGxpc3RlbmVyXG4vLyBmb3IgaW5jb21pbmcgUG9ydCBjb25uZWN0aW9ucyBmcm9tIGFsbCBvdGhlciBjb250ZXh0LlxuLy9cbi8vIEFueSBvdGhlciBjb250ZXh0ICh3aXRoIGFyYml0cmFyeSBuYW1lIGFuZCAob3B0aW9uYWwpIG1lc3NhZ2UgaGFuZGxlcnMpIGFsc29cbi8vIGludm9rZXMgdGhlIGBpbml0YCBmdW5jdGlvbi4gSW4gdGhpcyBjYXNlLCBQb3J0IGlzIGNyZWF0ZWQgYW5kIGNvbm5lY3RlZCB0b1xuLy8gYmFja2dyb3VuZCBzY3JpcHQuXG4vL1xuLy8gTm90ZTogZHVlIHRvIGJ1ZyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzU2MTMzXG4vLyB3ZSBhbHNvIGhhdmUgZGVkaWNhdGVkIG5hbWUgZm9yIGRldmVsb3BlciB0b29scyBjb250ZXh0OiAnZHQnLiBPbmNlIHRoaXMgYnVnXG4vLyBpcyBmaXhlZCwgdGhlIG9ubHkgcmVzZXJ2ZWQgY29udGV4dCBuYW1lIHdpbGwgYmUgJ2JnJyBmb3IgYmFja2dyb3VuZCBhZ2Fpbi5cbi8vXG4vLyBUbyBhdm9pZCByYWNlIGNvbmRpdGlvbnMsIG1ha2Ugc3VyZSB0aGF0IHlvdXIgYmFja2dyb3VuZCBzY3JpcHQgY2FsbHMgYGluaXRgXG4vLyBmdW5jdGlvbiBhZnRlciBpdCBpcyBzdGFydGVkLCBzbyBpdCBkb2Vzbid0IG1pc3MgYW55IFBvcnQgY29ubmVjdGlvbnNcbi8vIGF0dGVtcHRzLlxuLy9cbi8vIFRvIGJlIGFibGUgdG8gaGFuZGxlIGNvbW1hbmRzIChvciBhc3NvY2lhdGVkIG1lc3NhZ2VzKSBpbiBjb250ZXh0cyAoYm90aFxuLy8gYmFja2dyb3VuZCBhbmQgbm9uLWJhY2tncm91bmQpLCBvbmUgbXVzdCBwYXNzIG1lc3NhZ2UgaGFuZGxpbmcgZnVuY3Rpb25zIGluXG4vLyBgaGFuZGxlcnNgIG9iamVjdCB3aGVuIGludm9raW5nIHJlc3BlY3RpdmUgYGluaXRgIGZ1bmN0aW9uIGZvciBnaXZlbiBjb250ZXh0LlxuLy8gVGhlIGBoYW5kbGVyc2Agb2JqZWN0IGlzIGEgZnVuY3Rpb24gbG9va3VwIHRhYmxlLCBpLmUuIG9iamVjdCB3aXRoIGZ1bmN0aW9uXG4vLyBuYW1lcyBhcyBpdHMga2V5cyBhbmQgZnVuY3Rpb25zIChjb2RlKSBhcyBjb3JyZXNwb25kaW5nIHZhbHVlcy4gVGhlIGZ1bmN0aW9uXG4vLyB3aWxsIGJlIGludm9rZWQsIHdoZW4gZ2l2ZW4gY29udGV4dCBpcyByZXF1ZXN0ZWQgdG8gaGFuZGxlIG1lc3NhZ2Vcbi8vIHJlcHJlc2VudGluZyBjb21tYW5kIHdpdGggbmFtZSB0aGF0IGNhbiBiZSBmb3VuZCBhcyBhIGtleSBvZiB0aGUgYGhhbmRsZXJzYFxuLy8gb2JqZWN0LiBJdHMgcmV0dXJuIHZhbHVlIChwYXNzZWQgaW4gY2FsbGJhY2ssIHNlZSBiZWxvdykgd2lsbCBiZSB0cmVhdGVkIGFzXG4vLyB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgYmFjayB0byB0aGUgcmVxdWVzdG9yLlxuLy9cbi8vIEVhY2ggbWVzc2FnZSBoYW5kbGluZyBmdW5jdGlvbiBjYW4gdGFrZSBhbnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMsIGJ1dCBNVVNUXG4vLyB0YWtlIGNhbGxiYWNrIGFzIGl0cyBsYXN0IGFyZ3VtZW50IGFuZCBpbnZva2UgdGhpcyBjYWxsYmFjayB3aGVuIHRoZSBtZXNzYWdlXG4vLyBoYW5kbGVyIGlzIGRvbmUgd2l0aCBwcm9jZXNzaW5nIG9mIHRoZSBtZXNzYWdlIChyZWdhcmRsZXNzIGlmIHN5bmNocm9ub3VzIG9yXG4vLyBhc3luY2hyb25vdXMpLiBUaGUgY2FsbGJhY2sgdGFrZXMgb25lIGFyZ3VtZW50LCB0aGlzIGFyZ3VtZW50IGlzIHRyZWF0ZWQgYXNcbi8vIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVzc2FnZSBoYW5kbGVyLiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gTVVTVCBiZSBpbnZva2VkXG4vLyBvbmNlIGFuZCBvbmx5IG9uY2UuXG4vL1xuLy8gVGhlIGBpbml0YCBmdW5jdGlvbiByZXR1cm5zIChmb3IgYW55IGNvbnRleHQgaXQgaXMgaW52b2tlZCBpbikgbWVzc2FnaW5nXG4vLyBvYmplY3Qgd2l0aCB0d28gZnVuY3Rpb246IGBjbWRgIGFuZCBgYmNhc3RgLCBib3RoIHVzZWQgZm9yIHNlbmRpbmcgbWVzc2FnZXNcbi8vIHRvIGRpZmZlcmVudCBjb250ZXh0cyAob3Igc2FtZSBjb250ZXh0IGluIGRpZmZlcmVudCB3aW5kb3dzIC8gdGFicykuXG4vL1xuLy8gQm90aCBmdW5jdGlvbnMgYmVoYXZlIHRoZSBzYW1lIHdheSBhbmQgaGF2ZSBhbHNvIHRoZSBzYW1lIGFyZ3VtZW50cywgdGhlIG9ubHlcbi8vIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgYGNtZGAgY2FsbGJhY2sgKGl0cyBsYXN0IGFyZ3VtZW50LCBpZiBwcm92aWRlZCkgaXNcbi8vIGludm9rZWQgd2l0aCBvbmx5IG9uZSByZXNwb25zZSB2YWx1ZSBmcm9tIGFsbCBjb2xsZWN0ZWQgcmVzcG9uc2VzLCB3aGlsZSB0b1xuLy8gdGhlIGBiY2FzdGAgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3ZSBwYXNzIGFycmF5IHdpdGggYWxsIHZhbGlkIHJlc3BvbnNlcyB3ZVxuLy8gY29sbGVjdGVkIHdoaWxlIGJyb2FkY2FzdGluZyBnaXZlbiByZXF1ZXN0LlxuLy9cbi8vIGBjbWRgIGFuZCBgYmNhc3RgIGZ1bmN0aW9ucyBhcmd1bWVudHM6XG4vL1xuLy8gKG9wdGlvbmFsKSBbaW50XSB0YWJJZDogaWYgbm90IHNwZWNpZmllZCwgYnJvYWRjYXN0ZWQgdG8gYWxsIHRhYnMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGdpdmVuIHRhYiwgY2FuIHVzZSBTQU1FX1RBQiB2YWx1ZSBoZXJlXG4vLyAgICAgIChleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlLCB0b28pXG4vL1xuLy8gKG9wdGlvbmFsKSBbYXJyYXldIGNvbnRleHRzOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgY29udGV4dHMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGxpc3RlZCBjb250ZXh0cyAoY29udGV4dCBuYW1lIGlzIHByb3ZpZGVkXG4vLyAgICAgIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB3aGVuIGludm9raW5nIHRoZSBgaW5pdGAgZnVuY3Rpb24pXG4vL1xuLy8gKHJlcXVpcmVkKSBbc3RyaW5nXSBjb21tYW5kOiBuYW1lIG9mIHRoZSBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXG4vL1xuLy8gKG9wdGlvbmFsKSBbYW55IHR5cGVdIGFyZ3VtZW50czogYW55IG51bWJlciBvZiBhcnVtZW50cyB0aGF0IGZvbGxvdyBjb21tYW5kXG4vLyAgICAgIG5hbWUgYXJlIHBhc3NlZCB0byBleGVjdXRpb24gaGFuZGxlciB3aGVuIGl0IGlzIGludm9rZWRcbi8vXG4vLyAob3B0aW9uYWwpIFtmdW5jdGlvbihyZXN1bHQpXSBjYWxsYmFjazogaWYgcHJvdmlkZWQgKGFzIGxhc3QgYXJndW1lbnQgdG9cbi8vICAgICAgYGNtZGAgb3IgYGJjYXN0YCksIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHJlc3BvbnNlKHMpXG4vLyAgICAgIGlzL2FyZSByZWNlaXZlZFxuLy9cbi8vIFRoZSBgY21kYCBhbmQgYGJjYXN0YCBmdW5jdGlvbnMgcmV0dXJuIGB0cnVlYCBpZiB0aGUgcHJvY2Vzc2luZyBvZiB0aGVcbi8vIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwgKGkuZS4gaWYgYWxsIHRoZSBhcmd1bWVudHMgd2VyZSByZWNvZ25pemVkIHByb3Blcmx5KSxcbi8vIG90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4vL1xuLy8gV2hlbiBgY21kYCBvciBgYmNhc3RgIGZ1bmN0aW9uIGlzIGludm9rZWQgZnJvbSBiYWNrZ3JvdW5kIGNvbnRleHQsIGEgc2V0IG9mXG4vLyBjb250ZXh0IGluc3RhbmNlcywgdG8gd2hpY2ggdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvLCBpcyBjcmVhdGVkIGJhc2VkIG9uXG4vLyBwcm92aWRlZCBhcmd1bWVudHMgKHRhYiBpZCBhbmQgY29udGV4dCBuYW1lcykuIFRoZSBzZXQgaXMgTk9UIGZpbHRlcmVkIGJ5XG4vLyBwcm92aWRlZCBjb21tYW5kIG5hbWUsIGFzIGJhY2tncm91bmQgY29udGV4dCBkb2Vzbid0IGtub3cgd2hhdCBtZXNzYWdlXG4vLyBoYW5kbGVycyBhcmUgdXNlZCBpbiBhbGwgdGhlIGNvbnRleHRzIChpLmUuIGl0IGRvZXNuJ3Qga25vdyB0aGUgZnVuY3Rpb25cbi8vIG5hbWVzIGluIG1lc3NhZ2UgaGFuZGxpbmcgbG9va3VwIGZ1bmN0aW9uIHRhYmxlcyBvZiBub24tYmFja2dyb3VuZCBjb250ZXh0cykuXG4vL1xuLy8gV2hlbiB0YWIgaWQgb3IgY29udGV4dCBuYW1lcyBhcmUgTk9UIHByb3ZpZGVkLCB0aGUgY29tbWFuZCBpcyBicm9hZGNhc3RlZCB0b1xuLy8gYWxsIHBvc3NpYmxlIGNvbnRleHQgaW5zdGFuY2VzLCB3aGljaCB0aGUgYmFja2dyb3VuZCBrbm93cyBhYm91dCwgYW5kIHRoYXRcbi8vIG1heSByZXF1aXJlIGEgbG90IG9mIG1lc3NhZ2luZy4uLiBTbyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBpdCBpcyB3aXNlIHRvXG4vLyBwcm92aWRlIHRhYi1pZCBhbmQgLyBvciBjb250ZXh0IG5hbWUocykgd2hlbmV2ZXIgcG9zc2libGUgdG8gcmVkdWNlIHRoZSBzaXplXG4vLyBvZiB0aGUgY29udGV4dCBpbnN0YW5jZXMgc2V0IGFzIG11Y2ggYXMgaXQgZ2V0cy5cbi8vXG4vLyBXaGVuIG1lc3NhZ2UgY29ycmVzcG9uZGluZyB0byBjb21tYW5kIGlzIHRoZW4gcmVjZWl2ZWQgaW4gbm9uLWJhY2tncm91bmRcbi8vIGNvbnRleHQsIHRoZSBoYW5kbGVyIGxvb2t1cCB0YWJsZSBpcyBjaGVja2VkIGlmIGl0IGNvbnRhaW5zIGhhbmRsZXIgZm9yXG4vLyByZXF1ZXN0ZWQgY29tbWFuZCBuYW1lLiBJZiBzbywgdGhlIGhhbmRsZXIgaXMgaW52b2tlbmQgYW5kIGl0cyBcInJldHVybiB2YWx1ZVwiXG4vLyAocGFzc2VkIGluIGNhbGxiYWNrLCB0byBhbGxvdyBhc3luY2hyb25vdXMgbWVzc2FnZSBoYW5kbGluZykgaXMgdGhlbiBzZW50XG4vLyBiYWNrIHRvIGJhY2tncm91bmQuIElmIHRoZXJlIGlzIG5vIGNvcnJlc3BvbmRpbmcgaGFuZGxlciAoZm9yIHJlcXVlc3RlZFxuLy8gY29tbWFuZCBuYW1lKSwgbWVzc2FnZSBpbmRpY2F0aW5nIHRoYXQgaXMgc2VudCBiYWNrIGluc3RlYWQuXG4vL1xuLy8gV2hlbiBiYWNrZ3JvdW5kIGNvbGxlY3RzIGFsbCB0aGUgcmVzcG9uc2VzIGJhY2sgZnJvbSBhbGwgdGhlIGNvbnRleHRcbi8vIGluc3RhbmNlcyBpdCBzZW50IHRoZSBtZXNzYWdlIHRvLCBpdCBpbnZva2VzIHRoZSBgY21kYCBvciBgYmNhc3RgIGNhbGxiYWNrLFxuLy8gcGFzc2luZyB0aGUgcmVzcG9uc2UgdmFsdWUocykuIElmIHRoZXJlIHdhcyBubyBjYWxsYmFjayBwcm92aWRlZCwgdGhlXG4vLyBjb2xsZWN0ZWQgcmVzcG9uc2UgdmFsdWVzIGFyZSBzaW1wbHkgZHJvcHBlZC5cbi8vXG4vLyBXaGVuIGBjbWRgIG9yIGBiY2FzdGAgZnVuY3Rpb24gaXMgaW52b2tlZCBmcm9tIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHQsIHRoZVxuLy8gcmVxdWVzdCBtZXNzYWdlIGlzIHNlbnQgdG8gYmFja2dyb3VuZC4gQmFja2dyb3VuZCB0aGVuIGRpc3BhdGNoZXMgdGhlIHJlcXVlc3Rcbi8vIHRvIGFsbCByZWxldmFudCBjb250ZXh0IGluc3RhbmNlcyB0aGF0IG1hdGNoIHByb3ZpZGVkIGZpbHRlcnMgKGFnYWluLCBiYXNlZCBvblxuLy8gcGFzc2VkIHRhYiBpZCBhbmQgLyBvciBjb250ZXh0IG5hbWVzKSwgYW5kIGRpc3BhdGNoZXMgdGhlIHJlcXVlc3QgaW4gZmF2b3Igb2Zcbi8vIHRoZSBjb250ZXh0IGluc3RhbmNlIHRoYXQgc2VudCB0aGUgb3JpZ2luYWwgcmVxdWVzdCB0byBiYWNrZ3JvdW5kLiBUaGVcbi8vIGRpc3BhdGNoaW5nIGxvZ2ljIGlzIGRlc2NyaWJlZCBhYm92ZSAoaS5lLiBpdCBpcyB0aGUgc2FtZSBhcyBpZiB0aGUgcmVxdWVzdFxuLy8gd2FzIHNlbnQgYnkgYmFja2dyb3VuZCkuXG4vL1xuLy8gVGhlcmUgaXMgb25lIGRpZmZlcmVuY2UgdGhvdWdoOiBpZiBiYWNrZ3JvdW5kIGhhcyBjb3JyZXNwb25kaW5nIGhhbmRsZXIgZm9yXG4vLyByZXF1ZXN0ZWQgY29tbWFuZCBuYW1lIChhbmQgYmFja2dyb3VuZCBjb250ZXh0IGlzIG5vdCBmaWx0ZXJlZCBvdXQgd2hlblxuLy8gY3JlYXRpbmcgdGhlIHNldCBvZiBjb250ZXh0cyksIHRoaXMgaGFuZGxlciBpcyBpbnZva2VkIChpbiBiYWNrZ3JvdW5kXG4vLyBjb250ZXh0KSBhbmQgdGhlIFwicmV0dXJuIHZhbHVlXCIgaXMgYWxzbyBwYXJ0IG9mIHRoZSBjb2xsZWN0ZWQgc2V0IG9mXG4vLyByZXNwb25zZXMuXG4vL1xuLy8gV2hlbiBhbGwgdGhlIHByb2Nlc3NpbmcgaW4gYWxsIHRoZSBjb250ZXh0IGluc3RhbmNlcyAoaW5jbHVkaW5nIGJhY2tncm91bmRcbi8vIGNvbnRleHQsIGlmIGFwcGxpY2FibGUpIGlzIGZpbmlzaGVkIGFuZCByZXNwb25zZXMgYXJlIGNvbGxlY3RlZCwgdGhlXG4vLyByZXNwb25zZXMgYXJlIHNlbnQgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBpbnN0YW5jZSB0aGF0IGluaXRpYXRlZCB0aGVcbi8vIG1lc3NhZ2UgcHJvY2Vzc2luZy5cbi8vXG4vL1xuLy8gRVhBTVBMRTpcbi8vXG4vLyBiYWNrZ3JvdW5kIHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2JnJywge1xuLy8gICBzcXVhcmU6IGZ1bmN0aW9uKHdoYXQsIGRvbmUpIHsgZG9uZSh3aGF0KndoYXQpOyB9XG4vLyB9KTtcbi8vXG4vLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgbXNnLmJjYXN0KC8qIFsnY3QnXSAqLywgJ3BpbmcnLCBmdW5jdGlvbihyZXNwb25zZXMpIHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZXMpOyAgLy8gLS0tPiAgWydwb25nJywncG9uZycsLi4uXVxuLy8gICB9KTtcbi8vIH0sIDEwMDApOyAgLy8gYnJvYWRjYXN0ICdwaW5nJyBlYWNoIHNlY29uZFxuLy9cbi8vXG4vLyBjb250ZW50IHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2N0Jywge1xuLy8gICBwaW5nOiBmdW5jdGlvbihkb25lKSB7IGRvbmUoJ3BvbmcnKTsgfVxuLy8gfSk7XG4vL1xuLy8gbXNnLmNtZCgvKiBbJ2JnJ10gKi8sICdzcXVhcmUnLCA1LCBmdW5jdGlvbihyZXMpIHtcbi8vICAgY29uc29sZS5sb2cocmVzKTsgIC8vIC0tLT4gMjVcbi8vIH0pO1xuLy9cbi8vIC0tLS0tLS0tLS1cbi8vXG4vLyBGb3IgY29udmVuaWVudCBzZW5kaW5nIHJlcXVlc3RzIGZyb20gbm9uLWJhY2tncm91bmQgY29udGV4dHMgdG9cbi8vIGJhY2tncm91bmQtb25seSAoYXMgdGhpcyBpcyBtb3N0IGNvbW1vbiBjYXNlOiBub24tYmcgY29udGV4dCBuZWVkcyBzb21lIGluZm9cbi8vIGZyb20gYmFja2dyb3VuZCksIHRoZXJlIGlzIG9uZSBtb3JlIGZ1bmN0aW9uIGluIHRoZSBtZXNzYWdpbmcgb2JqZWN0IHJldHVybmVkXG4vLyBieSB0aGUgaW5pdCgpIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gaXMgY2FsbGVkICdiZycgYW5kIGl0IHByZXBlbmRzIHRoZSBsaXN0XG4vLyBvZiBwYXNzZWQgYXJndW1lbnRzIHdpdGggWydiZyddIGFycmF5LCBzbyB0aGF0IG1lYW5zIHRoZSByZXVxZXN0IGlzIHRhcmdldGVkXG4vLyB0byBiYWNrZ3JvdW5kLW9ubHkuIFRoZSAnYmcnIGZ1bmN0aW9uIGRvZXMgTk9UIHRha2UgJ3RhYklkJyBvciAnY29udGV4dHMnXG4vLyBwYXJhbWV0ZXJzLCB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSB0aGUgY29tbWFuZCBuYW1lLlxuLy9cbi8vIEVYQU1QTEU6XG4vL1xuLy8gYmFja2dyb3VuZCBzY3JpcHRcbi8vIC0tLS0tXG4vL1xuLy8gKCAuLi4gYXMgYWJvdmUgLi4uIClcbi8vXG4vLyBjb250ZW50IHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2N0Jywge1xuLy8gICBwaW5nOiBmdW5jdGlvbihkb25lKSB7IGRvbmUoJ3BvbmcnKTsgfVxuLy8gfSk7XG4vL1xuLy8gbXNnLmJnKCdzcXVhcmUnLCA1LCBmdW5jdGlvbihyZXMpIHtcbi8vICAgY29uc29sZS5sb2cocmVzKTsgIC8vIC0tLT4gMjVcbi8vIH0pO1xuLy9cbi8vIC0tLS0tLS0tLS1cbi8vXG4vLyBUaGVyZSBhcmUgdHdvIGRlZGljYXRlZCBiYWNrZ3JvdW5kIGhhbmRsZXJzIHRoYXQsIHdoZW4gcHJvdmlkZWQgaW4gYGhhbmRsZXJzYFxuLy8gb2JqZWN0IGZvciBgYmdgIGNvbnRleHQgaW4gYGluaXRgIGZ1bmN0aW9uLCBhcmUgaW52b2tlZCBieSB0aGUgbWVzc2FnaW5nXG4vLyBzeXN0ZW0gaXRzZWxmLiBUaGVzZSBoYW5kbGVycyBhcmU6XG4vL1xuLy8gKyBvbkNvbm5lY3Q6IGZ1bmN0aW9uKGNvbnRleHROYW1lLCB0YWJJZCksXG4vLyArIG9uRGlzY29ubmVjdDogZnVuY3Rpb24oY29udGV4dE5hbWUsIHRhYklkKVxuLy9cbi8vIFRoZXNlIHR3byBzcGVjaWFsIGhhbmRsZXJzLCBpZiBwcm92aWRlZCwgYXJlIGludm9rZWQgd2hlbiBuZXcgUG9ydCBpc1xuLy8gY29ubmVjdGVkIChpLmUuIHdoZW4gYGluaXRgIGZ1bmN0aW9uIGlzIGludm9rZWQgaW4gbm9uLWJnIGNvbnRleHQpLCBhbmRcbi8vIHRoZW4gd2hlbiB0aGV5IGFyZSBjbG9zZWQgKGRpc2Nvbm5lY3RlZCkgbGF0ZXIgb24uIFRoaXMgbm90aWZpY2F0aW9uIHN5c3RlbVxuLy8gYWxsb3dzIHRvIG1haW50YWluIHNvbWUgc3RhdGUgYWJvdXQgY29ubmVjdGVkIGNvbnRleHRzIGluIGV4dGVuc2lvblxuLy8gYmFja3JvdW5kLlxuLy9cbi8vIFBsZWFzZSBub3RlIHRoYXQgdW5saWtlIGFsbCBvdGhlciBoYW5kbGVycyBwYXNzZWQgYXMgdGhlIGBoYW5kbGVyc2Agb2JqZWN0IHRvXG4vLyBgaW5pdGAgZnVuY3Rpb24sIHRoZXNlIHR3byBzcGVjaWFsIGhhbmRsZXJzIGRvIE5PVCB0YWtlIGNhbGxiYWNrIGFzIHRoZWlyXG4vLyBsYXN0IGFyZ3VtZW50cy4gQW55IHJldHVybiB2YWx1ZSB0aGVzZSBoYW5kbGVycyBtYXkgcmV0dXJuIGlzIGlnbm9yZWQuXG4vL1xuLy8gVGhlIGBjb250ZXh0TmFtZWAgcGFyYW1ldGVyIGlzIHZhbHVlIHByb3ZpZGVkIHRvIG5vbi1iYWNrZ3JvdW5kIGBpbml0YFxuLy8gZnVuY3Rpb24sIHdoaWxlIHRoZSBgdGFiSWRgIGlzIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyLiBJZiB0YWJJZCBpcyBub3Rcbi8vIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyLCB0aGUgYHRhYklkYCB3aWxsIGJlIGBJbmZpbml0eWAuXG4vL1xuXG5cbi8vIGNvbnN0YW50IGZvciBcInNhbWUgdGFiIGFzIG1lXCJcbmNvbnN0IFNBTUVfVEFCID0gLTEwMDA7ICAvLyB3YXMgLUluZmluaXR5LCBidXQgSlNPTi5zdHJpbmdpZnkoKSArIEpTT04ucGFyc2UoKSBkb24ndCBsaWtlIHRoYXQgdmFsdWVcblxuLy8gcnVuLXRpbWUgQVBJOlxuLy8gdmFyaWFibGUgKyBleHBvcnRlZCBmdW5jdGlvbiB0byBjaGFuZ2UgaXQsIHNvIGl0IGNhbiBiZSBtb2NrZWQgaW4gdW5pdCB0ZXN0c1xuLyogZ2xvYmFsIGNocm9tZSAqL1xuY29uc3QgcnVudGltZSA9ICh0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0JykgJiYgY2hyb21lLnJ1bnRpbWU7XG4vLyB0aGUgc2FtZSBmb3IgZGV2dG9vbHMgQVBJOlxuY29uc3QgZGV2dG9vbHMgPSAodHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCcpICYmIGNocm9tZS5kZXZ0b29scztcblxuLy8gdXRpbGl0eSBmdW5jdGlvbiBmb3IgbG9vcGluZyB0aHJvdWdoIG9iamVjdCdzIG93biBrZXlzXG4vLyBjYWxsYmFjazogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb2JqKSAuLi4gZG9lc24ndCBuZWVkIHRvIHVzZSBhbGwgMyBwYXJhbWV0ZXJzXG4vLyByZXR1cm5zIG9iamVjdCB3aXRoIHNhbWUga2V5cyBhcyB0aGUgY2FsbGJhY2sgd2FzIGludm9rZWQgb24sIHZhbHVlcyBhcmUgdGhlXG4vLyAgIGNhbGxiYWNrIHJldHVybmVkIHZhbHVlcyAuLi4gY2FuIGJlIG9mIGNvdXJzZSBpZ25vcmVkIGJ5IHRoZSBjYWxsZXIsIHRvb1xuZnVuY3Rpb24gZm9yT3duUHJvcHMob2JqLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcmVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICByZXNba2V5XSA9IGNhbGxiYWNrKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8vIHdlIHdyYXAgdGhlIHdob2xlIG1vZHVsZSBmdW5jdGlvbmFsaXR5IGludG8gaXNvbGF0ZWQgc2NvcGUsIHNvIHRoYXQgbGF0ZXIgd2Vcbi8vIGNhbiBpbnN0YW50aWF0ZSBtdWx0aXBsZSBwYXJhbGxlbCBzY29wZXMgZm9yIHVuaXQgdGVzdGluZy5cbi8vIFRoZSBtb2R1bGUgd2lsbCBzdGlsbCBzZWVtIHRvIGhvbGQgc2luZ2xldG9uIG9iamVjdCwgYmVjYXVzZSB3ZSdsbCBjcmVhdGVcbi8vIHRoaXMgc2luZ2xldG9uIGFuZCB3aWxsIGV4cG9ydCBpdHMgbWV0aG9kcyBhcyAod2hvbGUpIG1vZHVsZSBtZXRob2RzLlxuXG5mdW5jdGlvbiBNZXNzYWdpbmcoKSB7XG4gIC8vIGhhbmRsZXJzIGF2YWlsYWJsZSBpbiBnaXZlbiBjb250ZXh0IChmdW5jdGlvbiBsb29rdXAgdGFibGUpLCBzZXQgaW4gYGluaXQoKWBcbiAgLy8gZm9ybWF0OlxuICAvLyB7XG4gIC8vICAgKHN0cmluZyk8ZnVuY3Rpb05hbWU+OiAoZnVuY3Rpb24pPGNvZGU+LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMuaGFuZGxlcnMgPSB7fTtcblxuICAvLyBpZCBhc3NpZ25lZCBieSBiYWNrZ3JvdW5kLCB1c2VkIGluIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHRzIG9ubHlcbiAgLy8gaW4gYmFja2dyb3VuZCBzZXQgdG8gJ2JnJ1xuICB0aGlzLmlkID0gbnVsbDtcblxuICAvLyBwb3J0IHVzZWQgZm9yIGNvbW11bmljYXRpb24gd2l0aCBiYWNrZ3JvdW5kIChpLmUuIG5vdCB1c2VkIGluIGJhY2tncm91bmQpXG4gIC8vIHR5cGU6IChjaHJvbWUucnVudGltZSkgUG9ydFxuICB0aGlzLnBvcnQgPSBudWxsO1xuXG4gIC8vIG1hcCBvZiBwb3J0cyBmb3IgY29ubmVjdGVkIGV4dGVuc2lvbnNcbiAgLy8ga2V5ID0gZXh0ZW5zaW9uIGlkLCB2YWx1ZSA9IHBvcnRcbiAgdGhpcy5leHRQb3J0cyA9IHt9O1xuXG4gIC8vIGNhbGxiYWNrIGxvb2t1cCB0YWJsZTogaWYgcmVxdWVzdCB3YWl0cyBmb3IgcmVzcG9uc2UsIHRoaXMgdGFibGUgaG9sZHNcbiAgLy8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2UgdXBvbiByZXNwb25zZVxuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoaW50KTxyZXF1ZXN0SWQ+OiAoZnVuY3Rpb24pPGNhbGxiYWNrIGNvZGU+LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMuY2JUYWJsZSA9IHt9O1xuXG4gIC8vIGJhY2tncm91bmQgdGFibGUgb2YgcGVuZGluZyByZXF1ZXN0c1xuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoc3RyaW5nKTxwb3J0SWQ+OiBbIHsgaWQ6IChpbnQpPHJlcXVlc3RJZD4sIGNiOiAoZnVuY3Rpb24pPGNhbGxiYWNrPiB9LCAuLi5dLFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMucGVuZGluZ1JlcXMgPSB7fTtcblxuICAvLyB1bmlxdWUgY29udGV4dCBpZCwgdXNlZCBieSBiYWNrZ3JvdW5kXG4gIHRoaXMudUlkID0gMTtcblxuICAvLyByZXF1ZXN0IGlkLCB1c2VkIGJ5IGFsbCBjb250ZXh0c1xuICB0aGlzLnJlcXVlc3RJZCA9IDE7XG5cbiAgLy8gbWFwcGluZyBub24tYmFja2dyb3VuZCBjb250ZXh0IG5hbWVzIHRvIG9iamVjdHMgaW5kZXhlZCBieSBuYW1lIG9mIHRoZSBjb250ZXh0XG4gIC8vIGluc3RhbmNlcywgaG9sZGluZyB7IHRhYi1pZCwgKGNocm9tZS5ydW50aW1lLilQb3J0IH0gcGFpcnMsXG4gIC8vIHVzZWQgZm9yIG1lc3NhZ2UgZGlzcGF0Y2hpbmdcbiAgLy8gZm9ybWF0OlxuICAvLyB7XG4gIC8vICAgKHN0cmluZyk8Y2F0ZWdvcnk+OiB7XG4gIC8vICAgICAoc3RyaW5nKTxpZD46IHsgdGFiSWQ6IChvcHRpb25hbCk8aW50PiwgcG9ydDogPGNocm9tZS5ydW50aW1lLlBvcnQ+IH0sXG4gIC8vICAgICAuLi5cbiAgLy8gICB9LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIC8vIGJhY2tncm91bmQtb25seSB2YXJpYWJsZVxuICB0aGlzLnBvcnRNYXAgPSB7fTtcblxuICAvLyBydW5ldGltZSBhbmQgZGV2dG9vbHMgcmVmZXJlbmNlcywgc28gdGhhdCB3ZSBjYW4gY2hhbmdlIGl0IGluIHVuaXQgdGVzdHNcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5kZXZ0b29scyA9IGRldnRvb2xzO1xufVxuXG4vLyBiYWNrZ3JvdW5kIGZ1bmN0aW9uIGZvciBzZWxlY3RpbmcgdGFyZ2V0IHBvcnRzIHRvIHdoaWNoIHdlIGJyb2FkY2FzdCB0aGUgcmVxdWVzdFxuLy8gZnJvbUJnOiBpcyB0aGUgcmVxdWVzdCB0byBjb2xsZWN0IHRhcmdldHMgZnJvbSBiYWNncm91bmQsIG9yIGJhc2VkIG9uIG1lc3NhZ2U/XG4vLyB0YXJnKjogZmlsdGVyIGZvciB0YXJnZXQgcG9ydHNcbi8vIHNyYyo6IGluZm9ybWF0aW9uIGFib3V0IHNvdXJjZSBwb3J0XG4vLyByZXR1cm5zIGFycmF5IG9mIHsgcG9ydDogKGNocm9tZS5ydW50aW1lLlBvcnQpLCBpZDogKHN0cmluZykgfVxuTWVzc2FnaW5nLnByb3RvdHlwZS5zZWxlY3RUYXJnZXRzID1cbiAgZnVuY3Rpb24gc2VsZWN0VGFyZ2V0cyhmcm9tQmcsIHRhcmdUYWJJZCwgdGFyZ0NhdGVnb3JpZXMsIHNyY0NhdGVnb3J5LCBzcmNQb3J0SWQpIHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBjb25zdCBfcG9ydCA9IHRoaXMucG9ydE1hcFtzcmNDYXRlZ29yeV0gJiYgdGhpcy5wb3J0TWFwW3NyY0NhdGVnb3J5XVtzcmNQb3J0SWRdO1xuICAgIGlmICghZnJvbUJnICYmICFfcG9ydCkge1xuICAgICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCB3ZSBqdXN0IGdvdCByZXF1ZXN0IGZyb20gdGhpcyBwb3J0IVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoIWZyb21CZyAmJiAodGFyZ1RhYklkID09PSBTQU1FX1RBQikpIHtcbiAgICAgIHRhcmdUYWJJZCA9IF9wb3J0LnRhYklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBwb3J0TWFwLCBwaWNrIHRhcmdldHM6XG4gICAgZm9yT3duUHJvcHModGhpcy5wb3J0TWFwLCAoY2F0ZWcsIHBvcnRHcm91cCkgPT4ge1xuICAgICAgaWYgKHRhcmdDYXRlZ29yaWVzICYmICh0YXJnQ2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnKSA9PT0gLTEpKSB7XG4gICAgICAgIC8vIHdlIGFyZSBpbnRlcmVzdGVkIG9ubHkgaW4gc3BlY2lmaWVkIGNvbnRleHRzLFxuICAgICAgICAvLyBhbmQgdGhpcyBjYXRlZ29yeSBpcyBub3Qgb24gdGhlIGxpc3RcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yT3duUHJvcHMocG9ydEdyb3VwLCAoaWQsIF9yZWYpID0+IHtcbiAgICAgICAgaWYgKHRhcmdUYWJJZCAmJiAodGFyZ1RhYklkICE9PSBfcmVmLnRhYklkKSkge1xuICAgICAgICAgIC8vIHdlIGFyZSBpbnRlcmVzdGVkIGluIHNwZWNpZmllZCB0YWIgaWQsXG4gICAgICAgICAgLy8gYW5kIHRoaXMgaWQgZG9lc24ndCBtYXRjaFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbUJnIHx8IChfcG9ydC5wb3J0ICE9PSBfcmVmLnBvcnQpKSB7XG4gICAgICAgICAgLy8gZG8gbm90IGFzayBtZSBiYWNrLCBhc2sgb25seSBkaWZmZXJlbnQgcG9ydHNcbiAgICAgICAgICByZXMucHVzaCh7IHBvcnQ6IF9yZWYucG9ydCwgaWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbi8vIG1lc3NhZ2UgaGFuZGxlciAodXNlYiBieSBib3RoIGJhY2tncm91bmQgYW5kIG5vbi1iYWNrb3VuZClcbk1lc3NhZ2luZy5wcm90b3R5cGUub25DdXN0b21Nc2cgPSBmdW5jdGlvbiBvbkN1c3RvbU1zZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4gIGxldCBfcG9ydDtcbiAgbGV0IF9hcnI7XG4gIGxldCBfbG9jYWxIYW5kbGVyO1xuICBsZXQgX3JlZjtcbiAgbGV0IGk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAvLyBoZWxwZXIgZnVuY3Rpb25zOlxuXG4gIC8vIHNlbmQgcmVzcG9uc2Ugb24gcmVzdWx0IChub24tYmFja2dyb3VuZCk6XG4gIGZ1bmN0aW9uIHNlbmRSZXN1bHRDYihyZXN1bHQpIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgICByZXFJZDogbWVzc2FnZS5yZXFJZCxcbiAgICAgICAgcmVzdWx0VmFsaWQ6IHRydWUsXG4gICAgICAgIHJlc3VsdFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIGNhbGxiYWNrIHdhaXRpbmcgZm9yIE4gcmVzdWx0cywgdGhlbiBzZW5kIHJlc3BvbnNlIChiYWNrZ3JvdW5kKTpcbiAgZnVuY3Rpb24gY3JlYXRlQ2JGb3JNb3JlUmVzdWx0cyhOKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IG15SWQgPSB0aGlzLnJ1bnRpbWUuaWQ7XG4gICAgcmV0dXJuIChyZXN1bHQsIHJlc3VsdFZhbGlkKSA9PiB7XG4gICAgICBpZiAocmVzdWx0VmFsaWQgIT09IGZhbHNlKSB7ICAvLyBjYW4gYmUgZWl0aGVyIGB0cnVlYCBvciBgdW5kZWZpbmVkYFxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIE4gLT0gMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgaWYgKCFOICYmIG1lc3NhZ2Uuc2VuZFJlc3BvbnNlICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgKFxuICAgICAgICAgIChfcG9ydCA9IHRoaXMuZXh0UG9ydHNbbWVzc2FnZS5leHRlbnNpb25JZF0pIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgdGhpcy5wb3J0TWFwW21lc3NhZ2UuY2F0ZWdvcnldICYmXG4gICAgICAgICAgICAoX3BvcnQgPSB0aGlzLnBvcnRNYXBbbWVzc2FnZS5jYXRlZ29yeV1bbWVzc2FnZS5wb3J0SWRdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICByZXFJZDogbWVzc2FnZS5yZXFJZCxcbiAgICAgICAgICByZXN1bHQ6IG1lc3NhZ2UuYnJvYWRjYXN0ID8gcmVzdWx0cyA6IHJlc3VsdHNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWVzc2FnZS5leHRlbnNpb25JZCkge1xuICAgICAgICAgIHJlc3BvbnNlLmV4dGVuc2lvbklkID0gbXlJZDtcbiAgICAgICAgfVxuICAgICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9OyAvLyAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIG1haW4gbWVzc2FnZSBwcm9jZXNzaW5nOlxuICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UuY21kKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3NldE5hbWUnKSB7XG4gICAgdGhpcy5pZCA9IG1lc3NhZ2UubmFtZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRoaXMuaWQgPT09ICdiZycpIHtcbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgaWYgKG1lc3NhZ2UuY21kID09PSAncmVxdWVzdCcpIHtcbiAgICAgIGNvbnN0IHRhcmdldFBvcnRzID0gdGhpcy5zZWxlY3RUYXJnZXRzKFxuICAgICAgICBmYWxzZSwgbWVzc2FnZS50YWJJZCwgbWVzc2FnZS5jb250ZXh0cywgbWVzc2FnZS5jYXRlZ29yeSwgbWVzc2FnZS5wb3J0SWRcbiAgICAgICk7XG4gICAgICBsZXQgcmVzcG9uc2VzTmVlZGVkID0gdGFyZ2V0UG9ydHMubGVuZ3RoO1xuICAgICAgaWYgKChtZXNzYWdlLnRhYklkID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgICghbWVzc2FnZS5jb250ZXh0cyB8fCAobWVzc2FnZS5jb250ZXh0cy5pbmRleE9mKCdiZycpICE9PSAtMSkpKSB7XG4gICAgICAgIC8vIHdlIGFyZSBhbHNvIGludGVyZXN0ZWQgaW4gcmVzcG9uc2UgZnJvbSBiYWNrZ3JvdW5kIGl0c2VsZlxuICAgICAgICBpZiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgICAoX3JlZiA9IHRoaXMuaGFuZGxlcnNbbWVzc2FnZS5jbWROYW1lXSkgJiZcbiAgICAgICAgICAodHlwZW9mIF9yZWYgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICkge1xuICAgICAgICAgIF9sb2NhbEhhbmRsZXIgPSBfcmVmO1xuICAgICAgICAgIHJlc3BvbnNlc05lZWRlZCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3BvbnNlc05lZWRlZCkge1xuICAgICAgICAvLyBubyBvbmUgdG8gYW5zd2VyIHRoYXQgbm93XG4gICAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZFJlc3BvbnNlICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgKF9wb3J0ID0gdGhpcy5leHRQb3J0c1ttZXNzYWdlLmV4dGVuc2lvbklkXSkgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgdGhpcy5wb3J0TWFwW21lc3NhZ2UuY2F0ZWdvcnldICYmXG4gICAgICAgICAgICAgIChfcG9ydCA9IHRoaXMucG9ydE1hcFttZXNzYWdlLmNhdGVnb3J5XVttZXNzYWdlLnBvcnRJZF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICAgICAgcmVzdWx0VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0OiBtZXNzYWdlLmJyb2FkY2FzdCA/IFtdIDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVzc2FnZS5leHRlbnNpb25JZCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW5zaW9uSWQgPSB0aGlzLnJ1bnRpbWUuaWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9wb3J0LnBvcnQucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzb21lIHJlc3BvbnNlcyBuZWVkZWRcbiAgICAgICAgY29uc3QgY2IgPSBjcmVhdGVDYkZvck1vcmVSZXN1bHRzLmNhbGwodGhpcywgcmVzcG9uc2VzTmVlZGVkKTtcbiAgICAgICAgLy8gc2VuZCB0byB0YXJnZXQgcG9ydHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRhcmdldFBvcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgX3BvcnQgPSB0YXJnZXRQb3J0c1tpXTtcbiAgICAgICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgY21kTmFtZTogbWVzc2FnZS5jbWROYW1lLFxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICAgICAgYXJnczogbWVzc2FnZS5hcmdzLFxuICAgICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX2FyciA9IHRoaXMucGVuZGluZ1JlcXNbX3BvcnQuaWRdIHx8IFtdO1xuICAgICAgICAgIF9hcnIucHVzaCh7IGlkOiB0aGlzLnJlcXVlc3RJZCwgY2IgfSk7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gPSBfYXJyO1xuICAgICAgICAgIHRoaXMucmVxdWVzdElkICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IGxvY2FsIHJlc3BvbnNlIChpZiBiYWNrZ3JvdW5kIGNhbiBwcm92aWRlIGl0KVxuICAgICAgICBpZiAoX2xvY2FsSGFuZGxlcikge1xuICAgICAgICAgIG1lc3NhZ2UuYXJncy5wdXNoKGNiKTtcbiAgICAgICAgICBfbG9jYWxIYW5kbGVyLmFwcGx5KHRoaXMuaGFuZGxlcnMsIG1lc3NhZ2UuYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY21kID09PSAncmVzcG9uc2UnKSB7XG4gICAgICBjb25zdCBpZCA9IG1lc3NhZ2UucG9ydElkIHx8IG1lc3NhZ2UuZXh0ZW5zaW9uSWQ7XG4gICAgICBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tpZF07ICAvLyB3YXJuaW5nOiBJRSBjcmVhdGVzIGEgY29weSBoZXJlIVxuICAgICAgaWYgKF9hcnIpIHtcbiAgICAgICAgLy8gc29tZSByZXN1bHRzIGZyb20gZ2l2ZW4gcG9ydCBleHBlY3RlZCwgZmluZCB0aGUgY2FsbGJhY2sgZm9yIHJlcUlkXG4gICAgICAgIGkgPSAwO1xuICAgICAgICB3aGlsZSAoKGkgPCBfYXJyLmxlbmd0aCkgJiYgKF9hcnJbaV0uaWQgIT09IG1lc3NhZ2UucmVxSWQpKSB7IGkgKz0gMTsgfVxuICAgICAgICBpZiAoaSA8IF9hcnIubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gY2FsbGJhY2sgZm91bmRcbiAgICAgICAgICBfYXJyW2ldLmNiKG1lc3NhZ2UucmVzdWx0LCBtZXNzYWdlLnJlc3VsdFZhbGlkKTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdSZXFzW2lkXS5zcGxpY2UoaSwgMSk7ICAgLy8gbmVlZCB0byB1c2Ugb3JpZyBhcnJheSAoSUUgcHJvYmxlbSlcbiAgICAgICAgICBpZiAoIXRoaXMucGVuZGluZ1JlcXNbaWRdLmxlbmd0aCkgeyAgLy8gLi4uIHNhbWUgaGVyZVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1JlcXNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jbWQgPT09ICd1cGRhdGVUYWJJZCcpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBtZXNzYWdlLmNvbnRleHQ7XG4gICAgICBjb25zdCBwb3J0SWQgPSBtZXNzYWdlLnBvcnRJZDtcbiAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAoX3BvcnQgPSB0aGlzLnBvcnRNYXBbY29udGV4dF0pICYmXG4gICAgICAgIChfcG9ydCA9IF9wb3J0W3BvcnRJZF0pXG4gICAgICApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlcnMub25EaXNjb25uZWN0KGNvbnRleHQsIF9wb3J0LnRhYklkKTtcbiAgICAgICAgfVxuICAgICAgICBfcG9ydC50YWJJZCA9IG1lc3NhZ2UudGFiSWQ7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVycy5vbkNvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZXJzLm9uQ29ubmVjdChjb250ZXh0LCBfcG9ydC50YWJJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5jbWQgPT09ICdyZXF1ZXN0JykgeyAvLyBub24tYmFja2dyb3VuZFxuICAgIF9sb2NhbEhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzW21lc3NhZ2UuY21kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBfbG9jYWxIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAobWVzc2FnZS5zZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBjbWQ6ICdyZXNwb25zZScsXG4gICAgICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICAgIHJlc3VsdFZhbGlkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hcmdzLnB1c2goc2VuZFJlc3VsdENiLmJpbmQodGhpcykpO1xuICAgICAgX2xvY2FsSGFuZGxlci5hcHBseSh0aGlzLmhhbmRsZXJzLCBtZXNzYWdlLmFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3Jlc3BvbnNlJykge1xuICAgIGlmICh0aGlzLmNiVGFibGVbbWVzc2FnZS5yZXFJZF0pIHtcbiAgICAgIHRoaXMuY2JUYWJsZVttZXNzYWdlLnJlcUlkXShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICBkZWxldGUgdGhpcy5jYlRhYmxlW21lc3NhZ2UucmVxSWRdO1xuICAgIH1cbiAgfVxufTtcblxuLy8gaW52b2tlIGNhbGxiYWNrcyBmb3IgcGVuZGluZyByZXF1ZXN0cyBhbmQgcmVtb3ZlIHRoZSByZXF1ZXN0cyBmcm9tIHRoZSBzdHJ1Y3R1cmVcbk1lc3NhZ2luZy5wcm90b3R5cGUuY2xvc2VQZW5kaW5nUmVxcyA9IGZ1bmN0aW9uIGNsb3NlUGVuZGluZ1JlcXMocG9ydElkKSB7XG4gIGxldCBhcnI7XG4gIGlmIChhcnIgPSB0aGlzLnBlbmRpbmdSZXFzW3BvcnRJZF0pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhcnJbaV0uY2IodW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdSZXFzW3BvcnRJZF07XG4gIH1cbn07XG5cbk1lc3NhZ2luZy5wcm90b3R5cGUucmVnaXN0ZXJFeHRlcm5hbENvbm5lY3Rpb24gPSBmdW5jdGlvbiByZWdFeHRlcm5hbENvbm5lY3Rpb24oZXh0ZW5zaW9uSWQsIHBvcnQpIHtcbiAgdGhpcy5leHRQb3J0c1tleHRlbnNpb25JZF0gPSB7IHBvcnQgfTtcblxuICBsZXQgb25DdXN0b21Nc2c7XG4gIGxldCBvbkRpc2Nvbm5lY3Q7XG5cbiAgLy8gb24gZGlzY29ubmVjdDogcmVtb3ZlIGxpc3RlbmVycyBhbmQgZGVsZXRlIGZyb20gcG9ydCBtYXBcbiAgZnVuY3Rpb24gb25EaXNjb25uZWN0Rm4oKSB7XG4gICAgLy8gbGlzdGVuZXJzOlxuICAgIHBvcnQub25EaXNjb25uZWN0LnJlbW92ZUxpc3RlbmVyKG9uRGlzY29ubmVjdCk7XG4gICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25DdXN0b21Nc2cpO1xuICAgIGRlbGV0ZSB0aGlzLmV4dFBvcnRzW2V4dGVuc2lvbklkXTtcbiAgICAvLyBjbG9zZSBhbGwgcGVuZGluZyByZXF1ZXN0czpcbiAgICB0aGlzLmNsb3NlUGVuZGluZ1JlcXMoZXh0ZW5zaW9uSWQpO1xuICAgIC8vIGludm9rZSBjdXN0b20gb25EaXNjb25uZWN0IGhhbmRsZXJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25EaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLm9uRXh0ZW5zaW9uRGlzY29ubmVjdChleHRlbnNpb25JZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFsbCBwb3J0IGhhbmRsZXJzXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uQ3VzdG9tTXNnID0gdGhpcy5vbkN1c3RvbU1zZy5iaW5kKHRoaXMpKTtcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIob25EaXNjb25uZWN0ID0gb25EaXNjb25uZWN0Rm4uYmluZCh0aGlzKSk7XG4gIC8vIGludm9rZSBjdXN0b20gb25Db25uZWN0IGhhbmRsZXJcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRXh0ZW5zaW9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25Db25uZWN0KGV4dGVuc2lvbklkKTtcbiAgfVxufTtcblxuTWVzc2FnaW5nLnByb3RvdHlwZS5vbkNvbm5lY3RFeHRlcm5hbCA9IGZ1bmN0aW9uIG9uQ29ubmVjdEV4dGVybmFsKHBvcnQpIHtcbiAgaWYgKHRoaXMuZXh0UG9ydHNbcG9ydC5zZW5kZXIuaWRdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbihwb3J0LnNlbmRlci5pZCwgcG9ydCk7XG59O1xuXG4vLyBiYWNrcm91bmQgb25Db25uZWN0IGhhbmRsZXJcbk1lc3NhZ2luZy5wcm90b3R5cGUub25Db25uZWN0ID0gZnVuY3Rpb24gb25Db25uZWN0KHBvcnQpIHtcbiAgLy8gYWRkIHRvIHBvcnQgbWFwXG4gIGNvbnN0IGNhdGVnTmFtZSA9IHBvcnQubmFtZSB8fCAndW5rbm93bic7XG4gIGNvbnN0IHBvcnRJZCA9IGAke2NhdGVnTmFtZX0tJHt0aGlzLnVJZH1gO1xuICB0aGlzLnVJZCArPSAxO1xuICBsZXQgcG9ydENhdGVnID0gdGhpcy5wb3J0TWFwW2NhdGVnTmFtZV0gfHwge307XG4gIGxldCB0YWJJZCA9IChwb3J0LnNlbmRlciAmJiBwb3J0LnNlbmRlci50YWIgJiYgcG9ydC5zZW5kZXIudGFiLmlkKSB8fCBJbmZpbml0eTtcbiAgcG9ydENhdGVnW3BvcnRJZF0gPSB7IHBvcnQsIHRhYklkIH07XG4gIHRoaXMucG9ydE1hcFtjYXRlZ05hbWVdID0gcG9ydENhdGVnO1xuICBsZXQgb25DdXN0b21Nc2c7XG4gIGxldCBvbkRpc2Nvbm5lY3Q7XG4gIC8vIG9uIGRpc2Nvbm5lY3Q6IHJlbW92ZSBsaXN0ZW5lcnMgYW5kIGRlbGV0ZSBmcm9tIHBvcnQgbWFwXG4gIGZ1bmN0aW9uIG9uRGlzY29ubmVjdEZuKCkge1xuICAgIC8vIGxpc3RlbmVyczpcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5yZW1vdmVMaXN0ZW5lcihvbkRpc2Nvbm5lY3QpO1xuICAgIHBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG9uQ3VzdG9tTXNnKTtcbiAgICAvLyBwb3J0IG1hcDpcbiAgICBwb3J0Q2F0ZWcgPSB0aGlzLnBvcnRNYXBbY2F0ZWdOYW1lXTtcbiAgICBsZXQgX3BvcnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBpZiAocG9ydENhdGVnICYmIChfcG9ydCA9IHBvcnRDYXRlZ1twb3J0SWRdKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICB0YWJJZCA9IF9wb3J0LnRhYklkO1xuICAgICAgZGVsZXRlIHBvcnRDYXRlZ1twb3J0SWRdO1xuICAgIH1cbiAgICAvLyBjbG9zZSBhbGwgcGVuZGluZyByZXF1ZXN0czpcbiAgICB0aGlzLmNsb3NlUGVuZGluZ1JlcXMocG9ydElkKTtcbiAgICAvLyBpbnZva2UgY3VzdG9tIG9uRGlzY29ubmVjdCBoYW5kbGVyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5oYW5kbGVycy5vbkRpc2Nvbm5lY3QoY2F0ZWdOYW1lLCB0YWJJZCk7XG4gICAgfVxuICB9XG4gIC8vIGluc3RhbGwgcG9ydCBoYW5kbGVyc1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbkN1c3RvbU1zZyA9IHRoaXMub25DdXN0b21Nc2cuYmluZCh0aGlzKSk7XG4gIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKG9uRGlzY29ubmVjdCA9IG9uRGlzY29ubmVjdEZuLmJpbmQodGhpcykpO1xuICAvLyBhc2sgY291bnRlciBwYXJ0IHRvIHNldCBpdHMgaWRcbiAgcG9ydC5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldE5hbWUnLCBuYW1lOiBwb3J0SWQgfSk7XG4gIC8vIGludm9rZSBjdXN0b20gb25Db25uZWN0IGhhbmRsZXJcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlcnMub25Db25uZWN0KGNhdGVnTmFtZSwgdGFiSWQpO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgbWFpbiBtZXNzYWdpbmcgb2JqZWN0LCBoaWRpbmcgYWxsIHRoZSBjb21wbGV4aXR5IGZyb20gdGhlIHVzZXJcbi8vIGl0IHRha2VzIG5hbWUgb2YgbG9jYWwgY29udGV4dCBgbXlDb250ZXh0TmFtZWBcbi8vXG4vLyB0aGUgcmV0dXJuZWQgb2JqZWN0IGhhcyB0d28gbWFpbiBmdW5jdGlvbnM6IGNtZCBhbmQgYmNhc3Rcbi8vXG4vLyB0aGV5IGJlaGF2ZSB0aGUgc2FtZSB3YXkgYW5kIGhhdmUgYWxzbyB0aGUgc2FtZSBhcmd1bWVudHMsIHRoZSBvbmx5XG4vLyBkaWZmZXJlbmNlIGlzIHRoYXQgdG8gYGNtZGAgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBpcyBpbnZva2VkIHdpdGggb25seSBvbmVcbi8vIHJlc3BvbnNlIHZhbHVlIGZyb20gYWxsIHBvc3NpYmxlIHJlc3BvbnNlcywgd2hpbGUgdG8gYGJjYXN0YCBjYWxsYmFjayAoaWZcbi8vIHByb3ZpZGVkKSB3ZSBwYXNzIGFycmF5IHdpdGggYWxsIHZhbGlkIHJlc3BvbnNlcyB3ZSBjb2xsZWN0ZWQgd2hpbGVcbi8vIGJyb2FkY2FzdGluZyBnaXZlbiByZXF1ZXN0LlxuLy9cbi8vIGZ1bmN0aW9ucyBhcmd1bWVudHM6XG4vL1xuLy8gKG9wdGlvbmFsKSBbaW50XSB0YWJJZDogaWYgbm90IHNwZWNpZmllZCwgYnJvYWRjYXN0ZWQgdG8gYWxsIHRhYnMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGdpdmVuIHRhYiwgY2FuIHVzZSBTQU1FX1RBQiB2YWx1ZSBoZXJlXG4vL1xuLy8gKG9wdGlvbmFsKSBbYXJyYXldIGNvbnRleHRzOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgY29udGV4dHMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGxpc3RlZCBjb250ZXh0c1xuLy9cbi8vIChyZXF1aXJlZCkgW3N0cmluZ10gY29tbWFuZDogbmFtZSBvZiB0aGUgY29tbWFuZCB0byBiZSBleGVjdXRlZFxuLy9cbi8vIChvcHRpb25hbCkgW2FueSB0eXBlXSBhcmd1bWVudHM6IGFueSBudW1iZXIgb2YgYXJ1bWVudHMgdGhhdCBmb2xsb3cgY29tbWFuZFxuLy8gICAgICBuYW1lIGFyZSBwYXNzZWQgdG8gZXhlY3V0aW9uIGhhbmRsZXIgd2hlbiBpdCBpcyBpbnZva2VkXG4vL1xuLy8gKG9wdGlvbmFsKSBbZnVuY3Rpb24ocmVzdWx0KV0gY2FsbGJhY2s6IGlmIHByb3ZpZGVkIChhcyBsYXN0IGFyZ3VtZW50IHRvXG4vLyAgICAgIGBjbWRgIG9yIGBiY2FzdGApIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHJlc3BvbnNlKHMpXG4vLyAgICAgIGlzL2FyZSByZWNlaXZlZFxuLy9cbi8vIHRoZSBmdW5jdGlvbnMgcmV0dXJuIGB0cnVlYCBpZiB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bFxuLy8gKGkuZS4gaWYgYWxsIHRoZSBhcmd1bWVudHMgd2VyZSByZWNvZ25pemVkIHByb3Blcmx5KSwgb3RoZXJ3aXNlIGl0IHJldHVybnNcbi8vIGBmYWxzZWAuXG4vL1xuLy8gZm9yIG5vbi1iZyBjb250ZXh0cyB0aGVyZSBpcyBvbmUgbW9yZSBmdW5jdGlvbiBpbiB0aGUgbWVzc2FnaW5nIG9iamVjdFxuLy8gYXZhaWxhYmxlOiAnYmcnIGZ1bmN0aW9uLCB0aGF0IGlzIHRoZSBzYW1lIGFzICdjbWQnLCBidXQgcHJlcGVuZHMgdGhlIGxpc3Qgb2Zcbi8vIGFyZ3VtZW50cyB3aXRoIFsnYmcnXSwgc28gdGhhdCB0aGUgdXNlciBkb2Vzbid0IGhhdmUgdG8gd3JpdGUgaXQgd2hlblxuLy8gcmVxdWVzdGluZyBzb21lIGluZm8gaW4gbm9uLWJnIGNvbnRleHQgZnJvbSBiYWNrZ3JvdW5kLlxuLy9cbk1lc3NhZ2luZy5wcm90b3R5cGUuY3JlYXRlTXNnT2JqZWN0ID0gZnVuY3Rpb24gY3JlYXRlTXNnT2JqZWN0KG15Q29udGV4dE5hbWUpIHtcbiAgLy8gZ2VuZXJhdG9yIGZvciBmdW5jdGlvbnMgYGNtZGAgYW5kIGBiY2FzdGBcbiAgZnVuY3Rpb24gY3JlYXRlRm4oYnJvYWRjYXN0KSB7XG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBpbnZva2luZyBwcm92aWRlZCBjYWxsYmFjayBpbiBiYWNrZ3JvdW5kXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2JGb3JNb3JlUmVzdWx0cyhOLCBjYWxsYmFjaykge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgcmV0dXJuIChyZXN1bHQsIHJlc3VsdFZhbGlkKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRWYWxpZCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIE4gLT0gMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBpZiAoKE4gPD0gMCkgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhicm9hZGNhc3QgPyByZXN1bHRzIDogcmVzdWx0c1swXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGdlbmVyYXRlZCBmdW5jdGlvbjpcbiAgICByZXR1cm4gZnVuY3Rpb24gX21zZygpIHtcbiAgICAgIC8vIHByb2Nlc3MgYXJndW1lbnRzOlxuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGF0IGxlYXN0IGNvbW1hbmQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgICAvLyBzaW5jZSB3ZSBsZWFybiBvdXIgaWQgb2Ygbm9uLWJhY2tncm91bmQgY29udGV4dCBpbiBhc3luY2hyb25vdXNcbiAgICAgICAgLy8gbWVzc2FnZSwgd2UgbWF5IG5lZWQgdG8gd2FpdCBmb3IgaXQuLi5cbiAgICAgICAgY29uc3QgX2N0eCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgX21zZy5hcHBseShfY3R4LCBfYXJncyk7IH0sIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCB0YWJJZDtcbiAgICAgIGxldCBjb250ZXh0cztcbiAgICAgIGxldCBjbWROYW1lO1xuICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgbGV0IGN1ckFyZyA9IDA7XG4gICAgICBsZXQgYXJnc0xpbWl0ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgY2FsbGJhY2s6XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmdzTGltaXQgLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzTGltaXQgLT0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbYXJnc0xpbWl0XTtcbiAgICAgIH1cbiAgICAgIC8vIG90aGVyIGFyZ3VtZW50czpcbiAgICAgIHdoaWxlIChjdXJBcmcgPCBhcmdzTGltaXQpIHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJndW1lbnRzW2N1ckFyZ107XG4gICAgICAgIGN1ckFyZyArPSAxO1xuICAgICAgICBpZiAoY21kTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgaGF2ZSBjb21tYW5kIG5hbWUgeWV0Li4uXG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgKGFyZykpIHtcbiAgICAgICAgICAgIC8vIHRhYiBpZFxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgaWYgKHRhYklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHdlIGFscmVhZHkgaGF2ZSB0YWIgaWQgLS0+IGludmFsaWQgYXJnc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYklkID0gYXJnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNvbnRleHRzICAoYXJyYXkpXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICBpZiAoKHR5cGVvZiAoYXJnLmxlbmd0aCkgPT09ICd1bmRlZmluZWQnKSB8fCAoY29udGV4dHMgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHdlIGVpdGhlciBoYXZlIGl0LCBvciBpdCBpcyBub3QgYXJyYXktbGlrZSBvYmplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0cyA9IGFyZztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjb21tYW5kIG5hbWVcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIGNtZE5hbWUgPSBhcmc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgZWxzZSAtLT4gZXJyb3JcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjbWROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjb21tYW5kIG5hbWUgaXMgbWFuZGF0b3J5XG4gICAgICB9XG4gICAgICAvLyBzdG9yZSB0aGUgY2FsbGJhY2sgYW5kIGlzc3VlIHRoZSByZXF1ZXN0IChtZXNzYWdlKVxuICAgICAgaWYgKCdiZycgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9ydHMgPSB0aGlzLnNlbGVjdFRhcmdldHModHJ1ZSwgdGFiSWQsIGNvbnRleHRzKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzTmVlZGVkID0gdGFyZ2V0UG9ydHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjYiA9IGNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMuY2FsbCh0aGlzLCByZXNwb25zZXNOZWVkZWQsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gc2VuZCB0byB0YXJnZXQgcG9ydHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRQb3J0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IF9wb3J0ID0gdGFyZ2V0UG9ydHNbaV07XG4gICAgICAgICAgX3BvcnQucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBjbWQ6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIGNtZE5hbWUsXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2U6IHRydWUsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgX2FyciA9IHRoaXMucGVuZGluZ1JlcXNbX3BvcnQuaWRdIHx8IFtdO1xuICAgICAgICAgIF9hcnIucHVzaCh7IGlkOiB0aGlzLnJlcXVlc3RJZCwgY2IgfSk7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gPSBfYXJyO1xuICAgICAgICAgIHRoaXMucmVxdWVzdElkICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXRQb3J0cy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBubyBvbmUgdG8gcmVzcG9uZCwgaW52b2tlIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHJpZ2h0IGF3YXlcbiAgICAgICAgICBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuY2JUYWJsZVt0aGlzLnJlcXVlc3RJZF0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICAgIGNtZE5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkLFxuICAgICAgICAgIHNlbmRSZXNwb25zZTogKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIGJyb2FkY2FzdCxcbiAgICAgICAgICBjYXRlZ29yeTogbXlDb250ZXh0TmFtZSxcbiAgICAgICAgICBwb3J0SWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgY29udGV4dHMsXG4gICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGV2ZXJ5dGhpbmcgd2VudCBPS1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ21kRXh0Rm4oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9tc2coZXh0ZW5zaW9uSWQsIGNvbW1hbmROYW1lKSB7XG4gICAgICAvLyBwcm9jZXNzIGFyZ3VtZW50czpcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAvLyBhdCBsZWFzdCBleHRlbnNpb24gaWQgYW5kIGNvbW1hbmQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaWQgIT09ICdiZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGJhY2tncm91bmQgY2FuIHNlbmQgbWVzc2FnZXNzIHRvIGFub3RoZXIgZXh0ZW5zaW9uc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgIGlmICh0eXBlb2YgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfcG9ydCA9IHRoaXMuZXh0UG9ydHNbZXh0ZW5zaW9uSWRdO1xuICAgICAgaWYgKCFfcG9ydCkge1xuICAgICAgICAvLyBubyBvbmUgdG8gcmVzcG9uZCwgaW52b2tlIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHJpZ2h0IGF3YXlcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgX3BvcnQucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICBjbWROYW1lOiBjb21tYW5kTmFtZSxcbiAgICAgICAgc2VuZFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICBhcmdzLFxuICAgICAgICByZXFJZDogdGhpcy5yZXF1ZXN0SWQsXG4gICAgICAgIGV4dGVuc2lvbklkOiB0aGlzLnJ1bnRpbWUuaWRcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tleHRlbnNpb25JZF0gfHwgW107XG4gICAgICBfYXJyLnB1c2goeyBpZDogdGhpcy5yZXF1ZXN0SWQsXG4gICAgICAgIGNiKHJlc3VsdC8qICwgcmVzdWx0VmFsaWQvKiovKSB7IC8vIGlnbm9yZSAncmVzdWx0VmFsaWQnIGJlY2F1c2UgaXQgaXMgbm90IGFwcGxpY2FibGUgaGVyZVxuICAgICAgICAgIGlmIChjYWxsYmFjaykgeyBjYWxsYmFjayhyZXN1bHQpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wZW5kaW5nUmVxc1tleHRlbnNpb25JZF0gPSBfYXJyO1xuICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcblxuICAgICAgLy8gZXZlcnl0aGluZyB3ZW50IE9LXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyByZXR1cm5lZCBvYmplY3Q6XG4gIGNvbnN0IHJlcyA9IHtcbiAgICBjbWQ6IGNyZWF0ZUZuLmNhbGwodGhpcywgZmFsc2UpLFxuICAgIGJjYXN0OiBjcmVhdGVGbi5jYWxsKHRoaXMsIHRydWUpXG4gIH07XG5cbiAgLy8gZm9yIG1vcmUgY29udmVuaWVuY2UgKHdoZW4gc2VuZGluZyByZXF1ZXN0IGZyb20gbm9uLWJnIHRvIGJhY2tncm91bmQgb25seSlcbiAgLy8gYWRkaW5nICdiZyg8Y21kTmFtZT4sIC4uLiknIGZ1bmN0aW9uLCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gXCJjbWQoWydiZyddLCA8Y21kTmFtZT4sIC4uLilcIlxuICBpZiAobXlDb250ZXh0TmFtZSAhPT0gJ2JnJykge1xuICAgIHJlcy5iZyA9IGZ1bmN0aW9uIGJnKCkge1xuICAgICAgaWYgKDAgPT09IGFyZ3VtZW50cy5sZW5ndGggfHwgJ3N0cmluZycgIT09IHR5cGVvZiAoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBhcmdzID0gW1snYmcnXV07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgICAgcmV0dXJuIHJlcy5jbWQoLi4uYXJncyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXMuY29ubmVjdEV4dCA9IGZ1bmN0aW9uIGNvbm5lY3RFeHQoaWQpIHtcbiAgICAgIGlmICh0aGlzLmV4dFBvcnRzW2lkXSkgeyAvLyBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnJ1bnRpbWUuY29ubmVjdChpZCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRXh0ZXJuYWxDb25uZWN0aW9uKGlkLCBwb3J0KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIHJlcy5jbWRFeHQgPSBjcmVhdGVDbWRFeHRGbi5jYWxsKHRoaXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8vIGluaXQgZnVuY3Rpb24sIGV4cG9ydGVkXG4vL1xuLy8gdGFrZXMgbWFuZGF0b3J5IGBjb250ZXh0YCwgaXQgaXMgYW55IHN0cmluZyAoZS5nLiAnY3QnLCAncG9wdXAnLCAuLi4pLFxuLy8gb25seSBvbmUgdmFsdWUgaXMgb2Ygc3BlY2lhbCBtZWFuaW5nOiAnYmcnIC4uLiBtdXN0IGJlIHVzZWQgZm9yIGluaXRpYWxpemluZ1xuLy8gb2YgdGhlIGJhY2tncm91bmQgcGFydCwgYW55IG90aGVyIGNvbnRleHQgaXMgY29uc2lkZXJlZCBub24tYmFja2dyb3VuZFxuLy9cbi8vIG9wdGlvbmFsbHkgdGFrZXMgYGhhbmRsZXJzYCwgd2hpY2ggaXMgb2JqZWN0IG1hcHBpbmcgZnVuY3Rpb24gbmFtZXMgdG9cbi8vIGZ1bmN0aW9uIGNvZGVzLCB0aGF0IGlzIHVzZWQgYXMgZnVuY3Rpb24gbG9va3VwIHRhYmxlLiBlYWNoIG1lc3NhZ2UgaGFuZGxpbmdcbi8vIGZ1bmN0aW9uIE1VU1QgdGFrZSBjYWxsYmFjayBhcyBpdHMgbGFzdCBhcmd1bWVudCBhbmQgaW52b2tlIHRoaXMgY2FsbGJhY2tcbi8vIHdoZW4gdGhlIG1lc3NhZ2UgaGFuZGxlciBpcyBkb25lIHdpdGggcHJvY2Vzc2luZyBvZiB0aGUgbWVzc2FnZSAocmVnYXJkbGVzc1xuLy8gaWYgc3luY2hyb25vdXMgb3IgYXN5bmNocm9ub3VzKS4gdGhlIGNhbGxiYWNrIHRha2VzIG9uZSBhcmd1bWVudCwgdGhpc1xuLy8gYXJndW1lbnQgaXMgdHJlYXRlZCBhcyByZXR1cm4gdmFsdWUgb2YgdGhlIG1lc3NhZ2UgaGFuZGxlci5cbi8vXG4vLyBmb3IgYmFja2dyb3VuZCAoYGNvbnRleHRgIGlzICdiZycpOiBpbnN0YWxscyBvbkNvbm5lY3QgbGlzdGVuZXJcbi8vIGZvciBub24tYmFja2dyb3VuZCBjb250ZXh0IGl0IGNvbm5lY3RzIHRvIGJhY2tncm91bmRcbi8vXG5NZXNzYWdpbmcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KGNvbnRleHQsIGhhbmRsZXJzKSB7XG4gIC8vIHNldCBtZXNzYWdlIGhhbmRsZXJzIChvcHRpb25hbClcbiAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzIHx8IHt9O1xuXG4gIC8vIGxpc3RlbmVyIHJlZmVyZW5jZXNcbiAgbGV0IG9uRGlzY29ubmVjdDtcbiAgbGV0IG9uQ3VzdG9tTXNnO1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbjpcbiAgZnVuY3Rpb24gb25EaXNjb25uZWN0Rm4oKSB7XG4gICAgdGhpcy5wb3J0Lm9uRGlzY29ubmVjdC5yZW1vdmVMaXN0ZW5lcihvbkRpc2Nvbm5lY3QpO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25DdXN0b21Nc2cpO1xuICB9XG5cbiAgbGV0IHRhYklkO1xuICBmdW5jdGlvbiB1cGRhdGVUYWJJZCgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHNldFRpbWVvdXQodXBkYXRlVGFiSWQuYmluZCh0aGlzKSwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBjbWQ6ICd1cGRhdGVUYWJJZCcsXG4gICAgICBjb250ZXh0LFxuICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgdGFiSWRcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250ZXh0ID09PSAnYmcnKSB7XG4gICAgLy8gYmFja2dyb3VuZFxuICAgIHRoaXMuaWQgPSAnYmcnO1xuICAgIHRoaXMucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIodGhpcy5vbkNvbm5lY3QuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ydW50aW1lLm9uQ29ubmVjdEV4dGVybmFsLmFkZExpc3RlbmVyKHRoaXMub25Db25uZWN0RXh0ZXJuYWwuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYW55dGhpbmcgZWxzZSB0aGFuIGJhY2tncm91bmRcbiAgICB0aGlzLnBvcnQgPSB0aGlzLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGNvbnRleHQgfSk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbkN1c3RvbU1zZyA9IHRoaXMub25DdXN0b21Nc2cuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihvbkRpc2Nvbm5lY3QgPSBvbkRpc2Nvbm5lY3RGbi5iaW5kKHRoaXMpKTtcbiAgICAvLyB0YWJJZCB1cGRhdGUgZm9yIGRldmVsb3BlciB0b29sc1xuICAgIC8vIHVuZm9ydHVuYXRlbHkgd2UgbmVlZCBkZWRpY2F0ZWQgbmFtZSBmb3IgZGV2ZWxvcGVyIHRvb2xzIGNvbnRleHQsIGR1ZSB0b1xuICAgIC8vIHRoaXMgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzU2MTMzXG4gICAgLy8gLi4uIHdlIGFyZSBub3QgYWJsZSB0byB0ZWxsIGlmIHdlIGFyZSBpbiBEVCBjb250ZXh0IG90aGVyd2lzZSA6KFxuICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgKGNvbnRleHQgPT09ICdkdCcpICYmIHRoaXMuZGV2dG9vbHMgJiZcbiAgICAgICh0YWJJZCA9IHRoaXMuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93KSAmJlxuICAgICAgICAgKHR5cGVvZiAodGFiSWQgPSB0YWJJZC50YWJJZCkgPT09ICdudW1iZXInKVxuICAgICkge1xuICAgICAgdXBkYXRlVGFiSWQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGVNc2dPYmplY3QoY29udGV4dCk7XG59O1xuXG5cbi8vIHNpbmdsZXRvbiByZXByZXNlbnRpbmcgdGhpcyBtb2R1bGVcbmNvbnN0IHNpbmdsZXRvbiA9IG5ldyBNZXNzYWdpbmcoKTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGluc3RhbGwgbWV0aG9kcyB1c2VkIGZvciB1bml0IHRlc3RzXG5mdW5jdGlvbiBpbnN0YWxsVW5pdFRlc3RNZXRob2RzKHRhcmdldCwgZGVsZWdhdGUpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gIC8vIHNldHRlcnNcbiAgdGFyZ2V0Ll9fc2V0UnVudGltZSA9IChydCkgPT4geyBkZWxlZ2F0ZS5ydW50aW1lID0gcnQ7IHJldHVybiB0YXJnZXQ7IH07XG4gIHRhcmdldC5fX3NldERldlRvb2xzID0gKGR0KSA9PiB7IGRlbGVnYXRlLmRldnRvb2xzID0gZHQ7IHJldHVybiB0YXJnZXQ7IH07XG4gIC8vIGdldHRlcnNcbiAgdGFyZ2V0Ll9fZ2V0SWQgPSAoKSA9PiBkZWxlZ2F0ZS5pZDtcbiAgdGFyZ2V0Ll9fZ2V0UG9ydCA9ICgpID0+IGRlbGVnYXRlLnBvcnQ7XG4gIHRhcmdldC5fX2dldFBvcnRNYXAgPSAoKSA9PiBkZWxlZ2F0ZS5wb3J0TWFwO1xuICB0YXJnZXQuX19nZXRIYW5kbGVycyA9ICgpID0+IGRlbGVnYXRlLmhhbmRsZXJzO1xuICB0YXJnZXQuX19nZXRQZW5kaW5nUmVxcyA9ICgpID0+IGRlbGVnYXRlLnBlbmRpbmdSZXFzO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gc2FtZSB0YWIgaWRcbiAgU0FNRV9UQUIsXG4gIC8vIHNlZSBkZXNjcmlwdGlvbiBmb3IgaW5pdCBmdW5jdGlvbiBhYm92ZVxuICBpbml0OiBzaW5nbGV0b24uaW5pdC5iaW5kKHNpbmdsZXRvbiksXG4gIC8vIC0tLSBmb3IgdW5pdCB0ZXN0cyAtLS1cbiAgLy8gYWxsb3cgdW5pdCB0ZXN0aW5nIG9mIHRoZSBtYWluIG1vZHVsZTpcbiAgX19hbGxvd1VuaXRUZXN0cygpIHsgaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyh0aGlzLCBzaW5nbGV0b24pOyB9LFxuICAvLyBjb250ZXh0IGNsb25pbmdcbiAgX19jcmVhdGVDbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBNZXNzYWdpbmcoKTtcbiAgICBjbG9uZS5TQU1FX1RBQiA9IFNBTUVfVEFCO1xuICAgIGluc3RhbGxVbml0VGVzdE1ldGhvZHMoY2xvbmUsIGNsb25lKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9tc2cuanMiLCIvLyBjcmVhdGUgaGFuZGxlciBtb2R1bGUgZm9yIGdpdmVuIGBjb250ZXh0YC5cbi8vIGhhbmRsZXMgYHJhbmRvbWAsIGByYW5kb21Bc3luY2AsIGFuZCBgZWNob2AgY29tbWFuZHMuXG4vLyBib3RoIGByYW5kb21gIGZ1bmN0aW9uIGxvZyB0aGUgaW52b2NhdGlvbiBpbmZvcm1hdGlvbiB0byBjb25zb2xlIGFuZCByZXR1cm5cbi8vIHJhbmRvbSBudW1iZXIgMCAtIDk5OS4gYHJhbmRvbUFzeW5jYCByZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIDE1IHNlY29uZCBkZWxheS5cbi8vIGBlY2hvYCBmdW5jdGlvbiBkb2Vzbid0IHJldHVybiBhbnl0aGluZywganVzdCBsb2dzIHRoZSBpbnB1dCBwYXJhbWV0ZXJcbi8vIGB3aGF0YC5cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgY29uc29sZS5sb2coLi4uYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxufVxuXG5jb25zdCBoYW5kbGVycyA9IHt9O1xuXG5oYW5kbGVycy5jcmVhdGUgPSBjb250ZXh0ID0+ICh7XG4gIHJhbmRvbTogKGRvbmUpID0+IHtcbiAgICBsb2coYC0tLT4ke2NvbnRleHR9OjpyYW5kb20oKSBpbnZva2VkYCk7XG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IoMTAwMCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIGxvZyhgPC0tLSByZXR1cm5zOiAke3J9YCk7XG4gICAgZG9uZShyKTtcbiAgfSxcbiAgcmFuZG9tQXN5bmM6IChkb25lKSA9PiB7XG4gICAgbG9nKGAtLS0+JHtjb250ZXh0fTo6cmFuZG9tQXN5bmMoKSBpbnZva2VkICgxNSBzZWMgZGVsYXkpYCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByID0gTWF0aC5mbG9vcigxMDAwICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBsb2coYDwtLS0gcmV0dXJuczogJHtyfWApO1xuICAgICAgZG9uZShyKTtcbiAgICB9LCAxNSAqIDEwMDApO1xuICB9LFxuICBlY2hvOiAod2hhdCwgZG9uZSkgPT4ge1xuICAgIGxvZyhgLS0tPiAke2NvbnRleHR9OjplY2hvKFwiJHt3aGF0fVwiKSBpbnZva2VkYCk7XG4gICAgbG9nKCc8LS0tIChubyByZXR1cm4gdmFsdWUpJyk7XG4gICAgZG9uZSgpO1xuICB9XG59KTtcblxuLy8gZm9yIHN1cnByZXNzaW5nIGNvbnNvbGUubG9nIG91dHB1dCBpbiB1bml0IHRlc3RzOlxuaGFuZGxlcnMuX19yZXNldExvZyA9ICgpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICBsb2cgPSAoKSA9PiB7fTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1mdW5jLWFzc2lnblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9oYW5kbGVycy5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyIsImltcG9ydCBoYW5kbGVycyBmcm9tICcuL21vZHVsZXMvaGFuZGxlcnMnO1xuaW1wb3J0IG1zZyBmcm9tICcuL21vZHVsZXMvbXNnJztcblxuLy8gaGVyZSB3ZSB1c2UgU0hBUkVEIG1lc3NhZ2UgaGFuZGxlcnMsIHNvIGFsbCB0aGUgY29udGV4dHMgc3VwcG9ydCB0aGUgc2FtZVxuLy8gY29tbWFuZHMuIGJ1dCB0aGlzIGlzIE5PVCB0eXBpY2FsIG1lc3NhZ2luZyBzeXN0ZW0gdXNhZ2UsIHNpbmNlIHlvdSB1c3VhbGx5XG4vLyB3YW50IGVhY2ggY29udGV4dCB0byBoYW5kbGUgZGlmZmVyZW50IGNvbW1hbmRzLiBmb3IgdGhpcyB5b3UgZG9uJ3QgbmVlZFxuLy8gaGFuZGxlcnMgZmFjdG9yeSBhcyB1c2VkIGJlbG93LiBzaW1wbHkgY3JlYXRlIGluZGl2aWR1YWwgYGhhbmRsZXJzYCBvYmplY3Rcbi8vIGZvciBlYWNoIGNvbnRleHQgYW5kIHBhc3MgaXQgdG8gbXNnLmluaXQoKSBjYWxsLiBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIHRoZVxuLy8gY29udGV4dCB0byBzdXBwb3J0IGFueSBjb21tYW5kcywgYnV0IHdhbnQgdGhlIGNvbnRleHQgdG8gY29vcGVyYXRlIHdpdGggdGhlXG4vLyByZXN0IG9mIHRoZSBleHRlbnNpb24gdmlhIG1lc3NhZ2luZyBzeXN0ZW0gKHlvdSB3YW50IHRvIGtub3cgd2hlbiBuZXdcbi8vIGluc3RhbmNlIG9mIGdpdmVuIGNvbnRleHQgaXMgY3JlYXRlZCAvIGRlc3Ryb3llZCwgb3IgeW91IHdhbnQgdG8gYmUgYWJsZSB0b1xuLy8gaXNzdWUgY29tbWFuZCByZXF1ZXN0cyBmcm9tIHRoaXMgY29udGV4dCksIHlvdSBtYXkgc2ltcGx5IG9taXQgdGhlXG4vLyBgaGFuZGxlcnNgIHBhcmFtZXRlciBmb3IgZ29vZCB3aGVuIGludm9raW5nIG1zZy5pbml0KClcblxubXNnLmluaXQoJ2R0JywgaGFuZGxlcnMuY3JlYXRlKCdkdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kZXZUb29scy5qcyJdLCJzb3VyY2VSb290IjoiIn0=