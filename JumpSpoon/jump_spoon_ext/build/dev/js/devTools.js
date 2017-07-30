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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
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
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(18)('wks')
  , uid        = __webpack_require__(12)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41)
  , defined = __webpack_require__(14);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(30)
  , toPrimitive    = __webpack_require__(21)
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
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

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
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(31)
  , enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(18)('keys')
  , uid    = __webpack_require__(12);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f
  , has = __webpack_require__(1)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(34)
  , hide      = __webpack_require__(4)
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(7)
  , dPs         = __webpack_require__(40)
  , enumBugKeys = __webpack_require__(19)
  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(24)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
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
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(22)
  , wksExt         = __webpack_require__(27)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(1)
  , toIObject    = __webpack_require__(3)
  , arrayIndexOf = __webpack_require__(42)(false)
  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(22)
  , $export        = __webpack_require__(23)
  , redefine       = __webpack_require__(33)
  , hide           = __webpack_require__(4)
  , has            = __webpack_require__(1)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(47)
  , setToStringTag = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(48)
  , ITERATOR       = __webpack_require__(2)('iterator')
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(31)
  , hiddenKeys = __webpack_require__(19).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(7)
  , getKeys  = __webpack_require__(13);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(3)
  , toLength  = __webpack_require__(35)
  , toIndex   = __webpack_require__(43);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(46)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(32)(String, 'String', function(iterated){
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , defined   = __webpack_require__(14);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(25)
  , descriptor     = __webpack_require__(10)
  , setToStringTag = __webpack_require__(20)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(1)
  , toObject    = __webpack_require__(36)
  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(51);
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(52);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(58);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(54);
module.exports = __webpack_require__(27).f('iterator');

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(4)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(56)
  , step             = __webpack_require__(57)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(32)(Array, 'Array', function(iterated, kind){
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
/* 56 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
module.exports = __webpack_require__(8).Symbol;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(1)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(23)
  , redefine       = __webpack_require__(33)
  , META           = __webpack_require__(61).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(18)
  , setToStringTag = __webpack_require__(20)
  , uid            = __webpack_require__(12)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(27)
  , wksDefine      = __webpack_require__(28)
  , keyOf          = __webpack_require__(62)
  , enumKeys       = __webpack_require__(63)
  , isArray        = __webpack_require__(64)
  , anObject       = __webpack_require__(7)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(21)
  , createDesc     = __webpack_require__(10)
  , _create        = __webpack_require__(25)
  , gOPNExt        = __webpack_require__(65)
  , $GOPD          = __webpack_require__(66)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(13)
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
  __webpack_require__(38).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f  = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(22)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(4)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(12)('meta')
  , isObject = __webpack_require__(9)
  , has      = __webpack_require__(1)
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(13)
  , toIObject = __webpack_require__(3);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13)
  , gOPS    = __webpack_require__(37)
  , pIE     = __webpack_require__(29);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(26);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3)
  , gOPN      = __webpack_require__(38).f
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(29)
  , createDesc     = __webpack_require__(10)
  , toIObject      = __webpack_require__(3)
  , toPrimitive    = __webpack_require__(21)
  , has            = __webpack_require__(1)
  , IE8_DOM_DEFINE = __webpack_require__(30)
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
/* 67 */
/***/ (function(module, exports) {



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');

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
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_handlers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_msg__ = __webpack_require__(49);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmMyMTRmODA0YTA4ZGE0ZjdkNTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbXNnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2hhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RldlRvb2xzLmpzIl0sIm5hbWVzIjpbIlNBTUVfVEFCIiwicnVudGltZSIsImNocm9tZSIsImRldnRvb2xzIiwiZm9yT3duUHJvcHMiLCJvYmoiLCJjYWxsYmFjayIsInJlcyIsImtleSIsImhhc093blByb3BlcnR5IiwiTWVzc2FnaW5nIiwiaGFuZGxlcnMiLCJpZCIsInBvcnQiLCJleHRQb3J0cyIsImNiVGFibGUiLCJwZW5kaW5nUmVxcyIsInVJZCIsInJlcXVlc3RJZCIsInBvcnRNYXAiLCJwcm90b3R5cGUiLCJzZWxlY3RUYXJnZXRzIiwiZnJvbUJnIiwidGFyZ1RhYklkIiwidGFyZ0NhdGVnb3JpZXMiLCJzcmNDYXRlZ29yeSIsInNyY1BvcnRJZCIsIl9wb3J0IiwidGFiSWQiLCJjYXRlZyIsInBvcnRHcm91cCIsImluZGV4T2YiLCJfcmVmIiwicHVzaCIsIm9uQ3VzdG9tTXNnIiwibWVzc2FnZSIsIl9hcnIiLCJfbG9jYWxIYW5kbGVyIiwiaSIsInNlbmRSZXN1bHRDYiIsInJlc3VsdCIsInNlbmRSZXNwb25zZSIsInBvc3RNZXNzYWdlIiwiY21kIiwicG9ydElkIiwicmVxSWQiLCJyZXN1bHRWYWxpZCIsImNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMiLCJOIiwicmVzdWx0cyIsIm15SWQiLCJleHRlbnNpb25JZCIsImNhdGVnb3J5IiwicmVzcG9uc2UiLCJicm9hZGNhc3QiLCJuYW1lIiwidGFyZ2V0UG9ydHMiLCJjb250ZXh0cyIsInJlc3BvbnNlc05lZWRlZCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNtZE5hbWUiLCJjYiIsImNhbGwiLCJhcmdzIiwiYXBwbHkiLCJzcGxpY2UiLCJjb250ZXh0Iiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiYmluZCIsImNsb3NlUGVuZGluZ1JlcXMiLCJhcnIiLCJyZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbiIsInJlZ0V4dGVybmFsQ29ubmVjdGlvbiIsIm9uRGlzY29ubmVjdEZuIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJvbkV4dGVuc2lvbkRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lciIsIm9uRXh0ZW5zaW9uQ29ubmVjdCIsIm9uQ29ubmVjdEV4dGVybmFsIiwic2VuZGVyIiwiY2F0ZWdOYW1lIiwicG9ydENhdGVnIiwidGFiIiwiSW5maW5pdHkiLCJjcmVhdGVNc2dPYmplY3QiLCJteUNvbnRleHROYW1lIiwiY3JlYXRlRm4iLCJfbXNnIiwiYXJndW1lbnRzIiwiX2N0eCIsIl9hcmdzIiwic2V0VGltZW91dCIsImN1ckFyZyIsImFyZ3NMaW1pdCIsImFyZyIsImNyZWF0ZUNtZEV4dEZuIiwiY29tbWFuZE5hbWUiLCJBcnJheSIsInNsaWNlIiwicG9wIiwiYmNhc3QiLCJiZyIsImNvbm5lY3RFeHQiLCJjb25uZWN0IiwiY21kRXh0IiwiaW5pdCIsInVwZGF0ZVRhYklkIiwiaW5zcGVjdGVkV2luZG93Iiwic2luZ2xldG9uIiwiaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyIsInRhcmdldCIsImRlbGVnYXRlIiwiX19zZXRSdW50aW1lIiwicnQiLCJfX3NldERldlRvb2xzIiwiZHQiLCJfX2dldElkIiwiX19nZXRQb3J0IiwiX19nZXRQb3J0TWFwIiwiX19nZXRIYW5kbGVycyIsIl9fZ2V0UGVuZGluZ1JlcXMiLCJfX2FsbG93VW5pdFRlc3RzIiwiX19jcmVhdGVDbG9uZSIsImNsb25lIiwibG9nIiwiY3JlYXRlIiwicmFuZG9tIiwiZG9uZSIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb21Bc3luYyIsImVjaG8iLCJ3aGF0IiwiX19yZXNldExvZyIsIm1zZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2ZBLHlDOzs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBQStILENBQUk5QixJQUFKLENBQVMsSUFBVCxFQUFlLGtFQUFBakcsQ0FBU3FILE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBZixFIiwiZmlsZSI6Ii4vanMvZGV2VG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmMyMTRmODA0YTA4ZGE0ZjdkNTEiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy9cbi8vIEV4dGVuc2lvbiBtZXNzYWdpbmcgc3lzdGVtLlxuLy9cbi8vXG4vLyBUaGlzIG1vZHVsZSwgd2hlbiB1c2VkLCBhbGxvd3MgY29tbXVuaWNhdGlvbiBhbW9uZyBhbnkgZXh0ZW5zaW9uLXJlbGF0ZWRcbi8vIGNvbnRleHRzIChiYWNrZ3JvdW5kIHNjcmlwdCwgY29udGVudCBzY3JpcHRzLCBkZXZlbG9wbWVudCB0b29scyBzY3JpcHRzLCBhbnlcbi8vIEpTIGNvZGUgcnVubmluZyBpbiBleHRlbnNpb24tcmVsYXRlZCBIVE1MIHBhZ2VzLCBzdWNoIGFzIHBvcHVwcywgb3B0aW9ucyxcbi8vIC4uLikuXG4vL1xuLy8gVG8gc3RhcnQgdXNpbmcgdGhlIHN5c3RlbSwgb25lIG5lZWRzIHRvIGludm9rZSBleHBvcnRlZCBgaW5pdGAgZnVuY3Rpb24gZnJvbVxuLy8gYmFja2dyb3VuZCBzY3JpcHQgKG9uY2UpLCBwYXNzaW5nICdiZycgYXMgdGhlIG5hbWUgb2YgdGhlIGNvbnRleHQsIG9wdGlvbmFsbHlcbi8vIHByb3ZpZGluZyBtZXNzYWdlIGhhbmRsaW5nIGZ1bmN0aW9ucy4gVGhpcyB3aWxsIGluc3RhbGwgb25Db25uZWN0IGxpc3RlbmVyXG4vLyBmb3IgaW5jb21pbmcgUG9ydCBjb25uZWN0aW9ucyBmcm9tIGFsbCBvdGhlciBjb250ZXh0LlxuLy9cbi8vIEFueSBvdGhlciBjb250ZXh0ICh3aXRoIGFyYml0cmFyeSBuYW1lIGFuZCAob3B0aW9uYWwpIG1lc3NhZ2UgaGFuZGxlcnMpIGFsc29cbi8vIGludm9rZXMgdGhlIGBpbml0YCBmdW5jdGlvbi4gSW4gdGhpcyBjYXNlLCBQb3J0IGlzIGNyZWF0ZWQgYW5kIGNvbm5lY3RlZCB0b1xuLy8gYmFja2dyb3VuZCBzY3JpcHQuXG4vL1xuLy8gTm90ZTogZHVlIHRvIGJ1ZyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzU2MTMzXG4vLyB3ZSBhbHNvIGhhdmUgZGVkaWNhdGVkIG5hbWUgZm9yIGRldmVsb3BlciB0b29scyBjb250ZXh0OiAnZHQnLiBPbmNlIHRoaXMgYnVnXG4vLyBpcyBmaXhlZCwgdGhlIG9ubHkgcmVzZXJ2ZWQgY29udGV4dCBuYW1lIHdpbGwgYmUgJ2JnJyBmb3IgYmFja2dyb3VuZCBhZ2Fpbi5cbi8vXG4vLyBUbyBhdm9pZCByYWNlIGNvbmRpdGlvbnMsIG1ha2Ugc3VyZSB0aGF0IHlvdXIgYmFja2dyb3VuZCBzY3JpcHQgY2FsbHMgYGluaXRgXG4vLyBmdW5jdGlvbiBhZnRlciBpdCBpcyBzdGFydGVkLCBzbyBpdCBkb2Vzbid0IG1pc3MgYW55IFBvcnQgY29ubmVjdGlvbnNcbi8vIGF0dGVtcHRzLlxuLy9cbi8vIFRvIGJlIGFibGUgdG8gaGFuZGxlIGNvbW1hbmRzIChvciBhc3NvY2lhdGVkIG1lc3NhZ2VzKSBpbiBjb250ZXh0cyAoYm90aFxuLy8gYmFja2dyb3VuZCBhbmQgbm9uLWJhY2tncm91bmQpLCBvbmUgbXVzdCBwYXNzIG1lc3NhZ2UgaGFuZGxpbmcgZnVuY3Rpb25zIGluXG4vLyBgaGFuZGxlcnNgIG9iamVjdCB3aGVuIGludm9raW5nIHJlc3BlY3RpdmUgYGluaXRgIGZ1bmN0aW9uIGZvciBnaXZlbiBjb250ZXh0LlxuLy8gVGhlIGBoYW5kbGVyc2Agb2JqZWN0IGlzIGEgZnVuY3Rpb24gbG9va3VwIHRhYmxlLCBpLmUuIG9iamVjdCB3aXRoIGZ1bmN0aW9uXG4vLyBuYW1lcyBhcyBpdHMga2V5cyBhbmQgZnVuY3Rpb25zIChjb2RlKSBhcyBjb3JyZXNwb25kaW5nIHZhbHVlcy4gVGhlIGZ1bmN0aW9uXG4vLyB3aWxsIGJlIGludm9rZWQsIHdoZW4gZ2l2ZW4gY29udGV4dCBpcyByZXF1ZXN0ZWQgdG8gaGFuZGxlIG1lc3NhZ2Vcbi8vIHJlcHJlc2VudGluZyBjb21tYW5kIHdpdGggbmFtZSB0aGF0IGNhbiBiZSBmb3VuZCBhcyBhIGtleSBvZiB0aGUgYGhhbmRsZXJzYFxuLy8gb2JqZWN0LiBJdHMgcmV0dXJuIHZhbHVlIChwYXNzZWQgaW4gY2FsbGJhY2ssIHNlZSBiZWxvdykgd2lsbCBiZSB0cmVhdGVkIGFzXG4vLyB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgYmFjayB0byB0aGUgcmVxdWVzdG9yLlxuLy9cbi8vIEVhY2ggbWVzc2FnZSBoYW5kbGluZyBmdW5jdGlvbiBjYW4gdGFrZSBhbnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMsIGJ1dCBNVVNUXG4vLyB0YWtlIGNhbGxiYWNrIGFzIGl0cyBsYXN0IGFyZ3VtZW50IGFuZCBpbnZva2UgdGhpcyBjYWxsYmFjayB3aGVuIHRoZSBtZXNzYWdlXG4vLyBoYW5kbGVyIGlzIGRvbmUgd2l0aCBwcm9jZXNzaW5nIG9mIHRoZSBtZXNzYWdlIChyZWdhcmRsZXNzIGlmIHN5bmNocm9ub3VzIG9yXG4vLyBhc3luY2hyb25vdXMpLiBUaGUgY2FsbGJhY2sgdGFrZXMgb25lIGFyZ3VtZW50LCB0aGlzIGFyZ3VtZW50IGlzIHRyZWF0ZWQgYXNcbi8vIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVzc2FnZSBoYW5kbGVyLiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gTVVTVCBiZSBpbnZva2VkXG4vLyBvbmNlIGFuZCBvbmx5IG9uY2UuXG4vL1xuLy8gVGhlIGBpbml0YCBmdW5jdGlvbiByZXR1cm5zIChmb3IgYW55IGNvbnRleHQgaXQgaXMgaW52b2tlZCBpbikgbWVzc2FnaW5nXG4vLyBvYmplY3Qgd2l0aCB0d28gZnVuY3Rpb246IGBjbWRgIGFuZCBgYmNhc3RgLCBib3RoIHVzZWQgZm9yIHNlbmRpbmcgbWVzc2FnZXNcbi8vIHRvIGRpZmZlcmVudCBjb250ZXh0cyAob3Igc2FtZSBjb250ZXh0IGluIGRpZmZlcmVudCB3aW5kb3dzIC8gdGFicykuXG4vL1xuLy8gQm90aCBmdW5jdGlvbnMgYmVoYXZlIHRoZSBzYW1lIHdheSBhbmQgaGF2ZSBhbHNvIHRoZSBzYW1lIGFyZ3VtZW50cywgdGhlIG9ubHlcbi8vIGRpZmZlcmVuY2UgaXMgdGhhdCB0aGUgYGNtZGAgY2FsbGJhY2sgKGl0cyBsYXN0IGFyZ3VtZW50LCBpZiBwcm92aWRlZCkgaXNcbi8vIGludm9rZWQgd2l0aCBvbmx5IG9uZSByZXNwb25zZSB2YWx1ZSBmcm9tIGFsbCBjb2xsZWN0ZWQgcmVzcG9uc2VzLCB3aGlsZSB0b1xuLy8gdGhlIGBiY2FzdGAgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3ZSBwYXNzIGFycmF5IHdpdGggYWxsIHZhbGlkIHJlc3BvbnNlcyB3ZVxuLy8gY29sbGVjdGVkIHdoaWxlIGJyb2FkY2FzdGluZyBnaXZlbiByZXF1ZXN0LlxuLy9cbi8vIGBjbWRgIGFuZCBgYmNhc3RgIGZ1bmN0aW9ucyBhcmd1bWVudHM6XG4vL1xuLy8gKG9wdGlvbmFsKSBbaW50XSB0YWJJZDogaWYgbm90IHNwZWNpZmllZCwgYnJvYWRjYXN0ZWQgdG8gYWxsIHRhYnMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGdpdmVuIHRhYiwgY2FuIHVzZSBTQU1FX1RBQiB2YWx1ZSBoZXJlXG4vLyAgICAgIChleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlLCB0b28pXG4vL1xuLy8gKG9wdGlvbmFsKSBbYXJyYXldIGNvbnRleHRzOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgY29udGV4dHMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGxpc3RlZCBjb250ZXh0cyAoY29udGV4dCBuYW1lIGlzIHByb3ZpZGVkXG4vLyAgICAgIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB3aGVuIGludm9raW5nIHRoZSBgaW5pdGAgZnVuY3Rpb24pXG4vL1xuLy8gKHJlcXVpcmVkKSBbc3RyaW5nXSBjb21tYW5kOiBuYW1lIG9mIHRoZSBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXG4vL1xuLy8gKG9wdGlvbmFsKSBbYW55IHR5cGVdIGFyZ3VtZW50czogYW55IG51bWJlciBvZiBhcnVtZW50cyB0aGF0IGZvbGxvdyBjb21tYW5kXG4vLyAgICAgIG5hbWUgYXJlIHBhc3NlZCB0byBleGVjdXRpb24gaGFuZGxlciB3aGVuIGl0IGlzIGludm9rZWRcbi8vXG4vLyAob3B0aW9uYWwpIFtmdW5jdGlvbihyZXN1bHQpXSBjYWxsYmFjazogaWYgcHJvdmlkZWQgKGFzIGxhc3QgYXJndW1lbnQgdG9cbi8vICAgICAgYGNtZGAgb3IgYGJjYXN0YCksIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHJlc3BvbnNlKHMpXG4vLyAgICAgIGlzL2FyZSByZWNlaXZlZFxuLy9cbi8vIFRoZSBgY21kYCBhbmQgYGJjYXN0YCBmdW5jdGlvbnMgcmV0dXJuIGB0cnVlYCBpZiB0aGUgcHJvY2Vzc2luZyBvZiB0aGVcbi8vIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwgKGkuZS4gaWYgYWxsIHRoZSBhcmd1bWVudHMgd2VyZSByZWNvZ25pemVkIHByb3Blcmx5KSxcbi8vIG90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4vL1xuLy8gV2hlbiBgY21kYCBvciBgYmNhc3RgIGZ1bmN0aW9uIGlzIGludm9rZWQgZnJvbSBiYWNrZ3JvdW5kIGNvbnRleHQsIGEgc2V0IG9mXG4vLyBjb250ZXh0IGluc3RhbmNlcywgdG8gd2hpY2ggdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvLCBpcyBjcmVhdGVkIGJhc2VkIG9uXG4vLyBwcm92aWRlZCBhcmd1bWVudHMgKHRhYiBpZCBhbmQgY29udGV4dCBuYW1lcykuIFRoZSBzZXQgaXMgTk9UIGZpbHRlcmVkIGJ5XG4vLyBwcm92aWRlZCBjb21tYW5kIG5hbWUsIGFzIGJhY2tncm91bmQgY29udGV4dCBkb2Vzbid0IGtub3cgd2hhdCBtZXNzYWdlXG4vLyBoYW5kbGVycyBhcmUgdXNlZCBpbiBhbGwgdGhlIGNvbnRleHRzIChpLmUuIGl0IGRvZXNuJ3Qga25vdyB0aGUgZnVuY3Rpb25cbi8vIG5hbWVzIGluIG1lc3NhZ2UgaGFuZGxpbmcgbG9va3VwIGZ1bmN0aW9uIHRhYmxlcyBvZiBub24tYmFja2dyb3VuZCBjb250ZXh0cykuXG4vL1xuLy8gV2hlbiB0YWIgaWQgb3IgY29udGV4dCBuYW1lcyBhcmUgTk9UIHByb3ZpZGVkLCB0aGUgY29tbWFuZCBpcyBicm9hZGNhc3RlZCB0b1xuLy8gYWxsIHBvc3NpYmxlIGNvbnRleHQgaW5zdGFuY2VzLCB3aGljaCB0aGUgYmFja2dyb3VuZCBrbm93cyBhYm91dCwgYW5kIHRoYXRcbi8vIG1heSByZXF1aXJlIGEgbG90IG9mIG1lc3NhZ2luZy4uLiBTbyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBpdCBpcyB3aXNlIHRvXG4vLyBwcm92aWRlIHRhYi1pZCBhbmQgLyBvciBjb250ZXh0IG5hbWUocykgd2hlbmV2ZXIgcG9zc2libGUgdG8gcmVkdWNlIHRoZSBzaXplXG4vLyBvZiB0aGUgY29udGV4dCBpbnN0YW5jZXMgc2V0IGFzIG11Y2ggYXMgaXQgZ2V0cy5cbi8vXG4vLyBXaGVuIG1lc3NhZ2UgY29ycmVzcG9uZGluZyB0byBjb21tYW5kIGlzIHRoZW4gcmVjZWl2ZWQgaW4gbm9uLWJhY2tncm91bmRcbi8vIGNvbnRleHQsIHRoZSBoYW5kbGVyIGxvb2t1cCB0YWJsZSBpcyBjaGVja2VkIGlmIGl0IGNvbnRhaW5zIGhhbmRsZXIgZm9yXG4vLyByZXF1ZXN0ZWQgY29tbWFuZCBuYW1lLiBJZiBzbywgdGhlIGhhbmRsZXIgaXMgaW52b2tlbmQgYW5kIGl0cyBcInJldHVybiB2YWx1ZVwiXG4vLyAocGFzc2VkIGluIGNhbGxiYWNrLCB0byBhbGxvdyBhc3luY2hyb25vdXMgbWVzc2FnZSBoYW5kbGluZykgaXMgdGhlbiBzZW50XG4vLyBiYWNrIHRvIGJhY2tncm91bmQuIElmIHRoZXJlIGlzIG5vIGNvcnJlc3BvbmRpbmcgaGFuZGxlciAoZm9yIHJlcXVlc3RlZFxuLy8gY29tbWFuZCBuYW1lKSwgbWVzc2FnZSBpbmRpY2F0aW5nIHRoYXQgaXMgc2VudCBiYWNrIGluc3RlYWQuXG4vL1xuLy8gV2hlbiBiYWNrZ3JvdW5kIGNvbGxlY3RzIGFsbCB0aGUgcmVzcG9uc2VzIGJhY2sgZnJvbSBhbGwgdGhlIGNvbnRleHRcbi8vIGluc3RhbmNlcyBpdCBzZW50IHRoZSBtZXNzYWdlIHRvLCBpdCBpbnZva2VzIHRoZSBgY21kYCBvciBgYmNhc3RgIGNhbGxiYWNrLFxuLy8gcGFzc2luZyB0aGUgcmVzcG9uc2UgdmFsdWUocykuIElmIHRoZXJlIHdhcyBubyBjYWxsYmFjayBwcm92aWRlZCwgdGhlXG4vLyBjb2xsZWN0ZWQgcmVzcG9uc2UgdmFsdWVzIGFyZSBzaW1wbHkgZHJvcHBlZC5cbi8vXG4vLyBXaGVuIGBjbWRgIG9yIGBiY2FzdGAgZnVuY3Rpb24gaXMgaW52b2tlZCBmcm9tIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHQsIHRoZVxuLy8gcmVxdWVzdCBtZXNzYWdlIGlzIHNlbnQgdG8gYmFja2dyb3VuZC4gQmFja2dyb3VuZCB0aGVuIGRpc3BhdGNoZXMgdGhlIHJlcXVlc3Rcbi8vIHRvIGFsbCByZWxldmFudCBjb250ZXh0IGluc3RhbmNlcyB0aGF0IG1hdGNoIHByb3ZpZGVkIGZpbHRlcnMgKGFnYWluLCBiYXNlZCBvblxuLy8gcGFzc2VkIHRhYiBpZCBhbmQgLyBvciBjb250ZXh0IG5hbWVzKSwgYW5kIGRpc3BhdGNoZXMgdGhlIHJlcXVlc3QgaW4gZmF2b3Igb2Zcbi8vIHRoZSBjb250ZXh0IGluc3RhbmNlIHRoYXQgc2VudCB0aGUgb3JpZ2luYWwgcmVxdWVzdCB0byBiYWNrZ3JvdW5kLiBUaGVcbi8vIGRpc3BhdGNoaW5nIGxvZ2ljIGlzIGRlc2NyaWJlZCBhYm92ZSAoaS5lLiBpdCBpcyB0aGUgc2FtZSBhcyBpZiB0aGUgcmVxdWVzdFxuLy8gd2FzIHNlbnQgYnkgYmFja2dyb3VuZCkuXG4vL1xuLy8gVGhlcmUgaXMgb25lIGRpZmZlcmVuY2UgdGhvdWdoOiBpZiBiYWNrZ3JvdW5kIGhhcyBjb3JyZXNwb25kaW5nIGhhbmRsZXIgZm9yXG4vLyByZXF1ZXN0ZWQgY29tbWFuZCBuYW1lIChhbmQgYmFja2dyb3VuZCBjb250ZXh0IGlzIG5vdCBmaWx0ZXJlZCBvdXQgd2hlblxuLy8gY3JlYXRpbmcgdGhlIHNldCBvZiBjb250ZXh0cyksIHRoaXMgaGFuZGxlciBpcyBpbnZva2VkIChpbiBiYWNrZ3JvdW5kXG4vLyBjb250ZXh0KSBhbmQgdGhlIFwicmV0dXJuIHZhbHVlXCIgaXMgYWxzbyBwYXJ0IG9mIHRoZSBjb2xsZWN0ZWQgc2V0IG9mXG4vLyByZXNwb25zZXMuXG4vL1xuLy8gV2hlbiBhbGwgdGhlIHByb2Nlc3NpbmcgaW4gYWxsIHRoZSBjb250ZXh0IGluc3RhbmNlcyAoaW5jbHVkaW5nIGJhY2tncm91bmRcbi8vIGNvbnRleHQsIGlmIGFwcGxpY2FibGUpIGlzIGZpbmlzaGVkIGFuZCByZXNwb25zZXMgYXJlIGNvbGxlY3RlZCwgdGhlXG4vLyByZXNwb25zZXMgYXJlIHNlbnQgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBpbnN0YW5jZSB0aGF0IGluaXRpYXRlZCB0aGVcbi8vIG1lc3NhZ2UgcHJvY2Vzc2luZy5cbi8vXG4vL1xuLy8gRVhBTVBMRTpcbi8vXG4vLyBiYWNrZ3JvdW5kIHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2JnJywge1xuLy8gICBzcXVhcmU6IGZ1bmN0aW9uKHdoYXQsIGRvbmUpIHsgZG9uZSh3aGF0KndoYXQpOyB9XG4vLyB9KTtcbi8vXG4vLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgbXNnLmJjYXN0KC8qIFsnY3QnXSAqLywgJ3BpbmcnLCBmdW5jdGlvbihyZXNwb25zZXMpIHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZXMpOyAgLy8gLS0tPiAgWydwb25nJywncG9uZycsLi4uXVxuLy8gICB9KTtcbi8vIH0sIDEwMDApOyAgLy8gYnJvYWRjYXN0ICdwaW5nJyBlYWNoIHNlY29uZFxuLy9cbi8vXG4vLyBjb250ZW50IHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2N0Jywge1xuLy8gICBwaW5nOiBmdW5jdGlvbihkb25lKSB7IGRvbmUoJ3BvbmcnKTsgfVxuLy8gfSk7XG4vL1xuLy8gbXNnLmNtZCgvKiBbJ2JnJ10gKi8sICdzcXVhcmUnLCA1LCBmdW5jdGlvbihyZXMpIHtcbi8vICAgY29uc29sZS5sb2cocmVzKTsgIC8vIC0tLT4gMjVcbi8vIH0pO1xuLy9cbi8vIC0tLS0tLS0tLS1cbi8vXG4vLyBGb3IgY29udmVuaWVudCBzZW5kaW5nIHJlcXVlc3RzIGZyb20gbm9uLWJhY2tncm91bmQgY29udGV4dHMgdG9cbi8vIGJhY2tncm91bmQtb25seSAoYXMgdGhpcyBpcyBtb3N0IGNvbW1vbiBjYXNlOiBub24tYmcgY29udGV4dCBuZWVkcyBzb21lIGluZm9cbi8vIGZyb20gYmFja2dyb3VuZCksIHRoZXJlIGlzIG9uZSBtb3JlIGZ1bmN0aW9uIGluIHRoZSBtZXNzYWdpbmcgb2JqZWN0IHJldHVybmVkXG4vLyBieSB0aGUgaW5pdCgpIGZ1bmN0aW9uLiBUaGUgZnVuY3Rpb24gaXMgY2FsbGVkICdiZycgYW5kIGl0IHByZXBlbmRzIHRoZSBsaXN0XG4vLyBvZiBwYXNzZWQgYXJndW1lbnRzIHdpdGggWydiZyddIGFycmF5LCBzbyB0aGF0IG1lYW5zIHRoZSByZXVxZXN0IGlzIHRhcmdldGVkXG4vLyB0byBiYWNrZ3JvdW5kLW9ubHkuIFRoZSAnYmcnIGZ1bmN0aW9uIGRvZXMgTk9UIHRha2UgJ3RhYklkJyBvciAnY29udGV4dHMnXG4vLyBwYXJhbWV0ZXJzLCB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSB0aGUgY29tbWFuZCBuYW1lLlxuLy9cbi8vIEVYQU1QTEU6XG4vL1xuLy8gYmFja2dyb3VuZCBzY3JpcHRcbi8vIC0tLS0tXG4vL1xuLy8gKCAuLi4gYXMgYWJvdmUgLi4uIClcbi8vXG4vLyBjb250ZW50IHNjcmlwdDpcbi8vIC0tLS0tXG4vL1xuLy8gdmFyIG1zZyA9IHJlcXVpcmUoJ21zZycpLmluaXQoJ2N0Jywge1xuLy8gICBwaW5nOiBmdW5jdGlvbihkb25lKSB7IGRvbmUoJ3BvbmcnKTsgfVxuLy8gfSk7XG4vL1xuLy8gbXNnLmJnKCdzcXVhcmUnLCA1LCBmdW5jdGlvbihyZXMpIHtcbi8vICAgY29uc29sZS5sb2cocmVzKTsgIC8vIC0tLT4gMjVcbi8vIH0pO1xuLy9cbi8vIC0tLS0tLS0tLS1cbi8vXG4vLyBUaGVyZSBhcmUgdHdvIGRlZGljYXRlZCBiYWNrZ3JvdW5kIGhhbmRsZXJzIHRoYXQsIHdoZW4gcHJvdmlkZWQgaW4gYGhhbmRsZXJzYFxuLy8gb2JqZWN0IGZvciBgYmdgIGNvbnRleHQgaW4gYGluaXRgIGZ1bmN0aW9uLCBhcmUgaW52b2tlZCBieSB0aGUgbWVzc2FnaW5nXG4vLyBzeXN0ZW0gaXRzZWxmLiBUaGVzZSBoYW5kbGVycyBhcmU6XG4vL1xuLy8gKyBvbkNvbm5lY3Q6IGZ1bmN0aW9uKGNvbnRleHROYW1lLCB0YWJJZCksXG4vLyArIG9uRGlzY29ubmVjdDogZnVuY3Rpb24oY29udGV4dE5hbWUsIHRhYklkKVxuLy9cbi8vIFRoZXNlIHR3byBzcGVjaWFsIGhhbmRsZXJzLCBpZiBwcm92aWRlZCwgYXJlIGludm9rZWQgd2hlbiBuZXcgUG9ydCBpc1xuLy8gY29ubmVjdGVkIChpLmUuIHdoZW4gYGluaXRgIGZ1bmN0aW9uIGlzIGludm9rZWQgaW4gbm9uLWJnIGNvbnRleHQpLCBhbmRcbi8vIHRoZW4gd2hlbiB0aGV5IGFyZSBjbG9zZWQgKGRpc2Nvbm5lY3RlZCkgbGF0ZXIgb24uIFRoaXMgbm90aWZpY2F0aW9uIHN5c3RlbVxuLy8gYWxsb3dzIHRvIG1haW50YWluIHNvbWUgc3RhdGUgYWJvdXQgY29ubmVjdGVkIGNvbnRleHRzIGluIGV4dGVuc2lvblxuLy8gYmFja3JvdW5kLlxuLy9cbi8vIFBsZWFzZSBub3RlIHRoYXQgdW5saWtlIGFsbCBvdGhlciBoYW5kbGVycyBwYXNzZWQgYXMgdGhlIGBoYW5kbGVyc2Agb2JqZWN0IHRvXG4vLyBgaW5pdGAgZnVuY3Rpb24sIHRoZXNlIHR3byBzcGVjaWFsIGhhbmRsZXJzIGRvIE5PVCB0YWtlIGNhbGxiYWNrIGFzIHRoZWlyXG4vLyBsYXN0IGFyZ3VtZW50cy4gQW55IHJldHVybiB2YWx1ZSB0aGVzZSBoYW5kbGVycyBtYXkgcmV0dXJuIGlzIGlnbm9yZWQuXG4vL1xuLy8gVGhlIGBjb250ZXh0TmFtZWAgcGFyYW1ldGVyIGlzIHZhbHVlIHByb3ZpZGVkIHRvIG5vbi1iYWNrZ3JvdW5kIGBpbml0YFxuLy8gZnVuY3Rpb24sIHdoaWxlIHRoZSBgdGFiSWRgIGlzIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyLiBJZiB0YWJJZCBpcyBub3Rcbi8vIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyLCB0aGUgYHRhYklkYCB3aWxsIGJlIGBJbmZpbml0eWAuXG4vL1xuXG5cbi8vIGNvbnN0YW50IGZvciBcInNhbWUgdGFiIGFzIG1lXCJcbmNvbnN0IFNBTUVfVEFCID0gLTEwMDA7ICAvLyB3YXMgLUluZmluaXR5LCBidXQgSlNPTi5zdHJpbmdpZnkoKSArIEpTT04ucGFyc2UoKSBkb24ndCBsaWtlIHRoYXQgdmFsdWVcblxuLy8gcnVuLXRpbWUgQVBJOlxuLy8gdmFyaWFibGUgKyBleHBvcnRlZCBmdW5jdGlvbiB0byBjaGFuZ2UgaXQsIHNvIGl0IGNhbiBiZSBtb2NrZWQgaW4gdW5pdCB0ZXN0c1xuLyogZ2xvYmFsIGNocm9tZSAqL1xuY29uc3QgcnVudGltZSA9ICh0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0JykgJiYgY2hyb21lLnJ1bnRpbWU7XG4vLyB0aGUgc2FtZSBmb3IgZGV2dG9vbHMgQVBJOlxuY29uc3QgZGV2dG9vbHMgPSAodHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCcpICYmIGNocm9tZS5kZXZ0b29scztcblxuLy8gdXRpbGl0eSBmdW5jdGlvbiBmb3IgbG9vcGluZyB0aHJvdWdoIG9iamVjdCdzIG93biBrZXlzXG4vLyBjYWxsYmFjazogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb2JqKSAuLi4gZG9lc24ndCBuZWVkIHRvIHVzZSBhbGwgMyBwYXJhbWV0ZXJzXG4vLyByZXR1cm5zIG9iamVjdCB3aXRoIHNhbWUga2V5cyBhcyB0aGUgY2FsbGJhY2sgd2FzIGludm9rZWQgb24sIHZhbHVlcyBhcmUgdGhlXG4vLyAgIGNhbGxiYWNrIHJldHVybmVkIHZhbHVlcyAuLi4gY2FuIGJlIG9mIGNvdXJzZSBpZ25vcmVkIGJ5IHRoZSBjYWxsZXIsIHRvb1xuZnVuY3Rpb24gZm9yT3duUHJvcHMob2JqLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcmVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICByZXNba2V5XSA9IGNhbGxiYWNrKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8vIHdlIHdyYXAgdGhlIHdob2xlIG1vZHVsZSBmdW5jdGlvbmFsaXR5IGludG8gaXNvbGF0ZWQgc2NvcGUsIHNvIHRoYXQgbGF0ZXIgd2Vcbi8vIGNhbiBpbnN0YW50aWF0ZSBtdWx0aXBsZSBwYXJhbGxlbCBzY29wZXMgZm9yIHVuaXQgdGVzdGluZy5cbi8vIFRoZSBtb2R1bGUgd2lsbCBzdGlsbCBzZWVtIHRvIGhvbGQgc2luZ2xldG9uIG9iamVjdCwgYmVjYXVzZSB3ZSdsbCBjcmVhdGVcbi8vIHRoaXMgc2luZ2xldG9uIGFuZCB3aWxsIGV4cG9ydCBpdHMgbWV0aG9kcyBhcyAod2hvbGUpIG1vZHVsZSBtZXRob2RzLlxuXG5mdW5jdGlvbiBNZXNzYWdpbmcoKSB7XG4gIC8vIGhhbmRsZXJzIGF2YWlsYWJsZSBpbiBnaXZlbiBjb250ZXh0IChmdW5jdGlvbiBsb29rdXAgdGFibGUpLCBzZXQgaW4gYGluaXQoKWBcbiAgLy8gZm9ybWF0OlxuICAvLyB7XG4gIC8vICAgKHN0cmluZyk8ZnVuY3Rpb05hbWU+OiAoZnVuY3Rpb24pPGNvZGU+LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMuaGFuZGxlcnMgPSB7fTtcblxuICAvLyBpZCBhc3NpZ25lZCBieSBiYWNrZ3JvdW5kLCB1c2VkIGluIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHRzIG9ubHlcbiAgLy8gaW4gYmFja2dyb3VuZCBzZXQgdG8gJ2JnJ1xuICB0aGlzLmlkID0gbnVsbDtcblxuICAvLyBwb3J0IHVzZWQgZm9yIGNvbW11bmljYXRpb24gd2l0aCBiYWNrZ3JvdW5kIChpLmUuIG5vdCB1c2VkIGluIGJhY2tncm91bmQpXG4gIC8vIHR5cGU6IChjaHJvbWUucnVudGltZSkgUG9ydFxuICB0aGlzLnBvcnQgPSBudWxsO1xuXG4gIC8vIG1hcCBvZiBwb3J0cyBmb3IgY29ubmVjdGVkIGV4dGVuc2lvbnNcbiAgLy8ga2V5ID0gZXh0ZW5zaW9uIGlkLCB2YWx1ZSA9IHBvcnRcbiAgdGhpcy5leHRQb3J0cyA9IHt9O1xuXG4gIC8vIGNhbGxiYWNrIGxvb2t1cCB0YWJsZTogaWYgcmVxdWVzdCB3YWl0cyBmb3IgcmVzcG9uc2UsIHRoaXMgdGFibGUgaG9sZHNcbiAgLy8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2UgdXBvbiByZXNwb25zZVxuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoaW50KTxyZXF1ZXN0SWQ+OiAoZnVuY3Rpb24pPGNhbGxiYWNrIGNvZGU+LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMuY2JUYWJsZSA9IHt9O1xuXG4gIC8vIGJhY2tncm91bmQgdGFibGUgb2YgcGVuZGluZyByZXF1ZXN0c1xuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoc3RyaW5nKTxwb3J0SWQ+OiBbIHsgaWQ6IChpbnQpPHJlcXVlc3RJZD4sIGNiOiAoZnVuY3Rpb24pPGNhbGxiYWNrPiB9LCAuLi5dLFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIHRoaXMucGVuZGluZ1JlcXMgPSB7fTtcblxuICAvLyB1bmlxdWUgY29udGV4dCBpZCwgdXNlZCBieSBiYWNrZ3JvdW5kXG4gIHRoaXMudUlkID0gMTtcblxuICAvLyByZXF1ZXN0IGlkLCB1c2VkIGJ5IGFsbCBjb250ZXh0c1xuICB0aGlzLnJlcXVlc3RJZCA9IDE7XG5cbiAgLy8gbWFwcGluZyBub24tYmFja2dyb3VuZCBjb250ZXh0IG5hbWVzIHRvIG9iamVjdHMgaW5kZXhlZCBieSBuYW1lIG9mIHRoZSBjb250ZXh0XG4gIC8vIGluc3RhbmNlcywgaG9sZGluZyB7IHRhYi1pZCwgKGNocm9tZS5ydW50aW1lLilQb3J0IH0gcGFpcnMsXG4gIC8vIHVzZWQgZm9yIG1lc3NhZ2UgZGlzcGF0Y2hpbmdcbiAgLy8gZm9ybWF0OlxuICAvLyB7XG4gIC8vICAgKHN0cmluZyk8Y2F0ZWdvcnk+OiB7XG4gIC8vICAgICAoc3RyaW5nKTxpZD46IHsgdGFiSWQ6IChvcHRpb25hbCk8aW50PiwgcG9ydDogPGNocm9tZS5ydW50aW1lLlBvcnQ+IH0sXG4gIC8vICAgICAuLi5cbiAgLy8gICB9LFxuICAvLyAgIC4uLlxuICAvLyB9XG4gIC8vIGJhY2tncm91bmQtb25seSB2YXJpYWJsZVxuICB0aGlzLnBvcnRNYXAgPSB7fTtcblxuICAvLyBydW5ldGltZSBhbmQgZGV2dG9vbHMgcmVmZXJlbmNlcywgc28gdGhhdCB3ZSBjYW4gY2hhbmdlIGl0IGluIHVuaXQgdGVzdHNcbiAgdGhpcy5ydW50aW1lID0gcnVudGltZTtcbiAgdGhpcy5kZXZ0b29scyA9IGRldnRvb2xzO1xufVxuXG4vLyBiYWNrZ3JvdW5kIGZ1bmN0aW9uIGZvciBzZWxlY3RpbmcgdGFyZ2V0IHBvcnRzIHRvIHdoaWNoIHdlIGJyb2FkY2FzdCB0aGUgcmVxdWVzdFxuLy8gZnJvbUJnOiBpcyB0aGUgcmVxdWVzdCB0byBjb2xsZWN0IHRhcmdldHMgZnJvbSBiYWNncm91bmQsIG9yIGJhc2VkIG9uIG1lc3NhZ2U/XG4vLyB0YXJnKjogZmlsdGVyIGZvciB0YXJnZXQgcG9ydHNcbi8vIHNyYyo6IGluZm9ybWF0aW9uIGFib3V0IHNvdXJjZSBwb3J0XG4vLyByZXR1cm5zIGFycmF5IG9mIHsgcG9ydDogKGNocm9tZS5ydW50aW1lLlBvcnQpLCBpZDogKHN0cmluZykgfVxuTWVzc2FnaW5nLnByb3RvdHlwZS5zZWxlY3RUYXJnZXRzID1cbiAgZnVuY3Rpb24gc2VsZWN0VGFyZ2V0cyhmcm9tQmcsIHRhcmdUYWJJZCwgdGFyZ0NhdGVnb3JpZXMsIHNyY0NhdGVnb3J5LCBzcmNQb3J0SWQpIHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBjb25zdCBfcG9ydCA9IHRoaXMucG9ydE1hcFtzcmNDYXRlZ29yeV0gJiYgdGhpcy5wb3J0TWFwW3NyY0NhdGVnb3J5XVtzcmNQb3J0SWRdO1xuICAgIGlmICghZnJvbUJnICYmICFfcG9ydCkge1xuICAgICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCB3ZSBqdXN0IGdvdCByZXF1ZXN0IGZyb20gdGhpcyBwb3J0IVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoIWZyb21CZyAmJiAodGFyZ1RhYklkID09PSBTQU1FX1RBQikpIHtcbiAgICAgIHRhcmdUYWJJZCA9IF9wb3J0LnRhYklkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBwb3J0TWFwLCBwaWNrIHRhcmdldHM6XG4gICAgZm9yT3duUHJvcHModGhpcy5wb3J0TWFwLCAoY2F0ZWcsIHBvcnRHcm91cCkgPT4ge1xuICAgICAgaWYgKHRhcmdDYXRlZ29yaWVzICYmICh0YXJnQ2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnKSA9PT0gLTEpKSB7XG4gICAgICAgIC8vIHdlIGFyZSBpbnRlcmVzdGVkIG9ubHkgaW4gc3BlY2lmaWVkIGNvbnRleHRzLFxuICAgICAgICAvLyBhbmQgdGhpcyBjYXRlZ29yeSBpcyBub3Qgb24gdGhlIGxpc3RcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yT3duUHJvcHMocG9ydEdyb3VwLCAoaWQsIF9yZWYpID0+IHtcbiAgICAgICAgaWYgKHRhcmdUYWJJZCAmJiAodGFyZ1RhYklkICE9PSBfcmVmLnRhYklkKSkge1xuICAgICAgICAgIC8vIHdlIGFyZSBpbnRlcmVzdGVkIGluIHNwZWNpZmllZCB0YWIgaWQsXG4gICAgICAgICAgLy8gYW5kIHRoaXMgaWQgZG9lc24ndCBtYXRjaFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbUJnIHx8IChfcG9ydC5wb3J0ICE9PSBfcmVmLnBvcnQpKSB7XG4gICAgICAgICAgLy8gZG8gbm90IGFzayBtZSBiYWNrLCBhc2sgb25seSBkaWZmZXJlbnQgcG9ydHNcbiAgICAgICAgICByZXMucHVzaCh7IHBvcnQ6IF9yZWYucG9ydCwgaWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbi8vIG1lc3NhZ2UgaGFuZGxlciAodXNlYiBieSBib3RoIGJhY2tncm91bmQgYW5kIG5vbi1iYWNrb3VuZClcbk1lc3NhZ2luZy5wcm90b3R5cGUub25DdXN0b21Nc2cgPSBmdW5jdGlvbiBvbkN1c3RvbU1zZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4gIGxldCBfcG9ydDtcbiAgbGV0IF9hcnI7XG4gIGxldCBfbG9jYWxIYW5kbGVyO1xuICBsZXQgX3JlZjtcbiAgbGV0IGk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAvLyBoZWxwZXIgZnVuY3Rpb25zOlxuXG4gIC8vIHNlbmQgcmVzcG9uc2Ugb24gcmVzdWx0IChub24tYmFja2dyb3VuZCk6XG4gIGZ1bmN0aW9uIHNlbmRSZXN1bHRDYihyZXN1bHQpIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgICByZXFJZDogbWVzc2FnZS5yZXFJZCxcbiAgICAgICAgcmVzdWx0VmFsaWQ6IHRydWUsXG4gICAgICAgIHJlc3VsdFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIGNhbGxiYWNrIHdhaXRpbmcgZm9yIE4gcmVzdWx0cywgdGhlbiBzZW5kIHJlc3BvbnNlIChiYWNrZ3JvdW5kKTpcbiAgZnVuY3Rpb24gY3JlYXRlQ2JGb3JNb3JlUmVzdWx0cyhOKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IG15SWQgPSB0aGlzLnJ1bnRpbWUuaWQ7XG4gICAgcmV0dXJuIChyZXN1bHQsIHJlc3VsdFZhbGlkKSA9PiB7XG4gICAgICBpZiAocmVzdWx0VmFsaWQgIT09IGZhbHNlKSB7ICAvLyBjYW4gYmUgZWl0aGVyIGB0cnVlYCBvciBgdW5kZWZpbmVkYFxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIE4gLT0gMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgaWYgKCFOICYmIG1lc3NhZ2Uuc2VuZFJlc3BvbnNlICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgKFxuICAgICAgICAgIChfcG9ydCA9IHRoaXMuZXh0UG9ydHNbbWVzc2FnZS5leHRlbnNpb25JZF0pIHx8XG4gICAgICAgICAgKFxuICAgICAgICAgICAgdGhpcy5wb3J0TWFwW21lc3NhZ2UuY2F0ZWdvcnldICYmXG4gICAgICAgICAgICAoX3BvcnQgPSB0aGlzLnBvcnRNYXBbbWVzc2FnZS5jYXRlZ29yeV1bbWVzc2FnZS5wb3J0SWRdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICByZXFJZDogbWVzc2FnZS5yZXFJZCxcbiAgICAgICAgICByZXN1bHQ6IG1lc3NhZ2UuYnJvYWRjYXN0ID8gcmVzdWx0cyA6IHJlc3VsdHNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWVzc2FnZS5leHRlbnNpb25JZCkge1xuICAgICAgICAgIHJlc3BvbnNlLmV4dGVuc2lvbklkID0gbXlJZDtcbiAgICAgICAgfVxuICAgICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9OyAvLyAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIG1haW4gbWVzc2FnZSBwcm9jZXNzaW5nOlxuICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UuY21kKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3NldE5hbWUnKSB7XG4gICAgdGhpcy5pZCA9IG1lc3NhZ2UubmFtZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRoaXMuaWQgPT09ICdiZycpIHtcbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgaWYgKG1lc3NhZ2UuY21kID09PSAncmVxdWVzdCcpIHtcbiAgICAgIGNvbnN0IHRhcmdldFBvcnRzID0gdGhpcy5zZWxlY3RUYXJnZXRzKFxuICAgICAgICBmYWxzZSwgbWVzc2FnZS50YWJJZCwgbWVzc2FnZS5jb250ZXh0cywgbWVzc2FnZS5jYXRlZ29yeSwgbWVzc2FnZS5wb3J0SWRcbiAgICAgICk7XG4gICAgICBsZXQgcmVzcG9uc2VzTmVlZGVkID0gdGFyZ2V0UG9ydHMubGVuZ3RoO1xuICAgICAgaWYgKChtZXNzYWdlLnRhYklkID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgICghbWVzc2FnZS5jb250ZXh0cyB8fCAobWVzc2FnZS5jb250ZXh0cy5pbmRleE9mKCdiZycpICE9PSAtMSkpKSB7XG4gICAgICAgIC8vIHdlIGFyZSBhbHNvIGludGVyZXN0ZWQgaW4gcmVzcG9uc2UgZnJvbSBiYWNrZ3JvdW5kIGl0c2VsZlxuICAgICAgICBpZiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgICAgICAoX3JlZiA9IHRoaXMuaGFuZGxlcnNbbWVzc2FnZS5jbWROYW1lXSkgJiZcbiAgICAgICAgICAodHlwZW9mIF9yZWYgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICkge1xuICAgICAgICAgIF9sb2NhbEhhbmRsZXIgPSBfcmVmO1xuICAgICAgICAgIHJlc3BvbnNlc05lZWRlZCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3BvbnNlc05lZWRlZCkge1xuICAgICAgICAvLyBubyBvbmUgdG8gYW5zd2VyIHRoYXQgbm93XG4gICAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZFJlc3BvbnNlICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgKF9wb3J0ID0gdGhpcy5leHRQb3J0c1ttZXNzYWdlLmV4dGVuc2lvbklkXSkgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgdGhpcy5wb3J0TWFwW21lc3NhZ2UuY2F0ZWdvcnldICYmXG4gICAgICAgICAgICAgIChfcG9ydCA9IHRoaXMucG9ydE1hcFttZXNzYWdlLmNhdGVnb3J5XVttZXNzYWdlLnBvcnRJZF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICAgICAgcmVzdWx0VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0OiBtZXNzYWdlLmJyb2FkY2FzdCA/IFtdIDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobWVzc2FnZS5leHRlbnNpb25JZCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZXh0ZW5zaW9uSWQgPSB0aGlzLnJ1bnRpbWUuaWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9wb3J0LnBvcnQucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzb21lIHJlc3BvbnNlcyBuZWVkZWRcbiAgICAgICAgY29uc3QgY2IgPSBjcmVhdGVDYkZvck1vcmVSZXN1bHRzLmNhbGwodGhpcywgcmVzcG9uc2VzTmVlZGVkKTtcbiAgICAgICAgLy8gc2VuZCB0byB0YXJnZXQgcG9ydHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRhcmdldFBvcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgX3BvcnQgPSB0YXJnZXRQb3J0c1tpXTtcbiAgICAgICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgY21kTmFtZTogbWVzc2FnZS5jbWROYW1lLFxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICAgICAgYXJnczogbWVzc2FnZS5hcmdzLFxuICAgICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX2FyciA9IHRoaXMucGVuZGluZ1JlcXNbX3BvcnQuaWRdIHx8IFtdO1xuICAgICAgICAgIF9hcnIucHVzaCh7IGlkOiB0aGlzLnJlcXVlc3RJZCwgY2IgfSk7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gPSBfYXJyO1xuICAgICAgICAgIHRoaXMucmVxdWVzdElkICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IGxvY2FsIHJlc3BvbnNlIChpZiBiYWNrZ3JvdW5kIGNhbiBwcm92aWRlIGl0KVxuICAgICAgICBpZiAoX2xvY2FsSGFuZGxlcikge1xuICAgICAgICAgIG1lc3NhZ2UuYXJncy5wdXNoKGNiKTtcbiAgICAgICAgICBfbG9jYWxIYW5kbGVyLmFwcGx5KHRoaXMuaGFuZGxlcnMsIG1lc3NhZ2UuYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY21kID09PSAncmVzcG9uc2UnKSB7XG4gICAgICBjb25zdCBpZCA9IG1lc3NhZ2UucG9ydElkIHx8IG1lc3NhZ2UuZXh0ZW5zaW9uSWQ7XG4gICAgICBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tpZF07ICAvLyB3YXJuaW5nOiBJRSBjcmVhdGVzIGEgY29weSBoZXJlIVxuICAgICAgaWYgKF9hcnIpIHtcbiAgICAgICAgLy8gc29tZSByZXN1bHRzIGZyb20gZ2l2ZW4gcG9ydCBleHBlY3RlZCwgZmluZCB0aGUgY2FsbGJhY2sgZm9yIHJlcUlkXG4gICAgICAgIGkgPSAwO1xuICAgICAgICB3aGlsZSAoKGkgPCBfYXJyLmxlbmd0aCkgJiYgKF9hcnJbaV0uaWQgIT09IG1lc3NhZ2UucmVxSWQpKSB7IGkgKz0gMTsgfVxuICAgICAgICBpZiAoaSA8IF9hcnIubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gY2FsbGJhY2sgZm91bmRcbiAgICAgICAgICBfYXJyW2ldLmNiKG1lc3NhZ2UucmVzdWx0LCBtZXNzYWdlLnJlc3VsdFZhbGlkKTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdSZXFzW2lkXS5zcGxpY2UoaSwgMSk7ICAgLy8gbmVlZCB0byB1c2Ugb3JpZyBhcnJheSAoSUUgcHJvYmxlbSlcbiAgICAgICAgICBpZiAoIXRoaXMucGVuZGluZ1JlcXNbaWRdLmxlbmd0aCkgeyAgLy8gLi4uIHNhbWUgaGVyZVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1JlcXNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jbWQgPT09ICd1cGRhdGVUYWJJZCcpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBtZXNzYWdlLmNvbnRleHQ7XG4gICAgICBjb25zdCBwb3J0SWQgPSBtZXNzYWdlLnBvcnRJZDtcbiAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAoX3BvcnQgPSB0aGlzLnBvcnRNYXBbY29udGV4dF0pICYmXG4gICAgICAgIChfcG9ydCA9IF9wb3J0W3BvcnRJZF0pXG4gICAgICApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlcnMub25EaXNjb25uZWN0KGNvbnRleHQsIF9wb3J0LnRhYklkKTtcbiAgICAgICAgfVxuICAgICAgICBfcG9ydC50YWJJZCA9IG1lc3NhZ2UudGFiSWQ7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVycy5vbkNvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZXJzLm9uQ29ubmVjdChjb250ZXh0LCBfcG9ydC50YWJJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5jbWQgPT09ICdyZXF1ZXN0JykgeyAvLyBub24tYmFja2dyb3VuZFxuICAgIF9sb2NhbEhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzW21lc3NhZ2UuY21kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBfbG9jYWxIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAobWVzc2FnZS5zZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBjbWQ6ICdyZXNwb25zZScsXG4gICAgICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICAgIHJlc3VsdFZhbGlkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hcmdzLnB1c2goc2VuZFJlc3VsdENiLmJpbmQodGhpcykpO1xuICAgICAgX2xvY2FsSGFuZGxlci5hcHBseSh0aGlzLmhhbmRsZXJzLCBtZXNzYWdlLmFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3Jlc3BvbnNlJykge1xuICAgIGlmICh0aGlzLmNiVGFibGVbbWVzc2FnZS5yZXFJZF0pIHtcbiAgICAgIHRoaXMuY2JUYWJsZVttZXNzYWdlLnJlcUlkXShtZXNzYWdlLnJlc3VsdCk7XG4gICAgICBkZWxldGUgdGhpcy5jYlRhYmxlW21lc3NhZ2UucmVxSWRdO1xuICAgIH1cbiAgfVxufTtcblxuLy8gaW52b2tlIGNhbGxiYWNrcyBmb3IgcGVuZGluZyByZXF1ZXN0cyBhbmQgcmVtb3ZlIHRoZSByZXF1ZXN0cyBmcm9tIHRoZSBzdHJ1Y3R1cmVcbk1lc3NhZ2luZy5wcm90b3R5cGUuY2xvc2VQZW5kaW5nUmVxcyA9IGZ1bmN0aW9uIGNsb3NlUGVuZGluZ1JlcXMocG9ydElkKSB7XG4gIGxldCBhcnI7XG4gIGlmIChhcnIgPSB0aGlzLnBlbmRpbmdSZXFzW3BvcnRJZF0pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhcnJbaV0uY2IodW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdSZXFzW3BvcnRJZF07XG4gIH1cbn07XG5cbk1lc3NhZ2luZy5wcm90b3R5cGUucmVnaXN0ZXJFeHRlcm5hbENvbm5lY3Rpb24gPSBmdW5jdGlvbiByZWdFeHRlcm5hbENvbm5lY3Rpb24oZXh0ZW5zaW9uSWQsIHBvcnQpIHtcbiAgdGhpcy5leHRQb3J0c1tleHRlbnNpb25JZF0gPSB7IHBvcnQgfTtcblxuICBsZXQgb25DdXN0b21Nc2c7XG4gIGxldCBvbkRpc2Nvbm5lY3Q7XG5cbiAgLy8gb24gZGlzY29ubmVjdDogcmVtb3ZlIGxpc3RlbmVycyBhbmQgZGVsZXRlIGZyb20gcG9ydCBtYXBcbiAgZnVuY3Rpb24gb25EaXNjb25uZWN0Rm4oKSB7XG4gICAgLy8gbGlzdGVuZXJzOlxuICAgIHBvcnQub25EaXNjb25uZWN0LnJlbW92ZUxpc3RlbmVyKG9uRGlzY29ubmVjdCk7XG4gICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25DdXN0b21Nc2cpO1xuICAgIGRlbGV0ZSB0aGlzLmV4dFBvcnRzW2V4dGVuc2lvbklkXTtcbiAgICAvLyBjbG9zZSBhbGwgcGVuZGluZyByZXF1ZXN0czpcbiAgICB0aGlzLmNsb3NlUGVuZGluZ1JlcXMoZXh0ZW5zaW9uSWQpO1xuICAgIC8vIGludm9rZSBjdXN0b20gb25EaXNjb25uZWN0IGhhbmRsZXJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25EaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLm9uRXh0ZW5zaW9uRGlzY29ubmVjdChleHRlbnNpb25JZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFsbCBwb3J0IGhhbmRsZXJzXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uQ3VzdG9tTXNnID0gdGhpcy5vbkN1c3RvbU1zZy5iaW5kKHRoaXMpKTtcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIob25EaXNjb25uZWN0ID0gb25EaXNjb25uZWN0Rm4uYmluZCh0aGlzKSk7XG4gIC8vIGludm9rZSBjdXN0b20gb25Db25uZWN0IGhhbmRsZXJcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRXh0ZW5zaW9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25Db25uZWN0KGV4dGVuc2lvbklkKTtcbiAgfVxufTtcblxuTWVzc2FnaW5nLnByb3RvdHlwZS5vbkNvbm5lY3RFeHRlcm5hbCA9IGZ1bmN0aW9uIG9uQ29ubmVjdEV4dGVybmFsKHBvcnQpIHtcbiAgaWYgKHRoaXMuZXh0UG9ydHNbcG9ydC5zZW5kZXIuaWRdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbihwb3J0LnNlbmRlci5pZCwgcG9ydCk7XG59O1xuXG4vLyBiYWNrcm91bmQgb25Db25uZWN0IGhhbmRsZXJcbk1lc3NhZ2luZy5wcm90b3R5cGUub25Db25uZWN0ID0gZnVuY3Rpb24gb25Db25uZWN0KHBvcnQpIHtcbiAgLy8gYWRkIHRvIHBvcnQgbWFwXG4gIGNvbnN0IGNhdGVnTmFtZSA9IHBvcnQubmFtZSB8fCAndW5rbm93bic7XG4gIGNvbnN0IHBvcnRJZCA9IGAke2NhdGVnTmFtZX0tJHt0aGlzLnVJZH1gO1xuICB0aGlzLnVJZCArPSAxO1xuICBsZXQgcG9ydENhdGVnID0gdGhpcy5wb3J0TWFwW2NhdGVnTmFtZV0gfHwge307XG4gIGxldCB0YWJJZCA9IChwb3J0LnNlbmRlciAmJiBwb3J0LnNlbmRlci50YWIgJiYgcG9ydC5zZW5kZXIudGFiLmlkKSB8fCBJbmZpbml0eTtcbiAgcG9ydENhdGVnW3BvcnRJZF0gPSB7IHBvcnQsIHRhYklkIH07XG4gIHRoaXMucG9ydE1hcFtjYXRlZ05hbWVdID0gcG9ydENhdGVnO1xuICBsZXQgb25DdXN0b21Nc2c7XG4gIGxldCBvbkRpc2Nvbm5lY3Q7XG4gIC8vIG9uIGRpc2Nvbm5lY3Q6IHJlbW92ZSBsaXN0ZW5lcnMgYW5kIGRlbGV0ZSBmcm9tIHBvcnQgbWFwXG4gIGZ1bmN0aW9uIG9uRGlzY29ubmVjdEZuKCkge1xuICAgIC8vIGxpc3RlbmVyczpcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5yZW1vdmVMaXN0ZW5lcihvbkRpc2Nvbm5lY3QpO1xuICAgIHBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG9uQ3VzdG9tTXNnKTtcbiAgICAvLyBwb3J0IG1hcDpcbiAgICBwb3J0Q2F0ZWcgPSB0aGlzLnBvcnRNYXBbY2F0ZWdOYW1lXTtcbiAgICBsZXQgX3BvcnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBpZiAocG9ydENhdGVnICYmIChfcG9ydCA9IHBvcnRDYXRlZ1twb3J0SWRdKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICB0YWJJZCA9IF9wb3J0LnRhYklkO1xuICAgICAgZGVsZXRlIHBvcnRDYXRlZ1twb3J0SWRdO1xuICAgIH1cbiAgICAvLyBjbG9zZSBhbGwgcGVuZGluZyByZXF1ZXN0czpcbiAgICB0aGlzLmNsb3NlUGVuZGluZ1JlcXMocG9ydElkKTtcbiAgICAvLyBpbnZva2UgY3VzdG9tIG9uRGlzY29ubmVjdCBoYW5kbGVyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uRGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5oYW5kbGVycy5vbkRpc2Nvbm5lY3QoY2F0ZWdOYW1lLCB0YWJJZCk7XG4gICAgfVxuICB9XG4gIC8vIGluc3RhbGwgcG9ydCBoYW5kbGVyc1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbkN1c3RvbU1zZyA9IHRoaXMub25DdXN0b21Nc2cuYmluZCh0aGlzKSk7XG4gIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKG9uRGlzY29ubmVjdCA9IG9uRGlzY29ubmVjdEZuLmJpbmQodGhpcykpO1xuICAvLyBhc2sgY291bnRlciBwYXJ0IHRvIHNldCBpdHMgaWRcbiAgcG9ydC5wb3N0TWVzc2FnZSh7IGNtZDogJ3NldE5hbWUnLCBuYW1lOiBwb3J0SWQgfSk7XG4gIC8vIGludm9rZSBjdXN0b20gb25Db25uZWN0IGhhbmRsZXJcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuaGFuZGxlcnMub25Db25uZWN0KGNhdGVnTmFtZSwgdGFiSWQpO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgbWFpbiBtZXNzYWdpbmcgb2JqZWN0LCBoaWRpbmcgYWxsIHRoZSBjb21wbGV4aXR5IGZyb20gdGhlIHVzZXJcbi8vIGl0IHRha2VzIG5hbWUgb2YgbG9jYWwgY29udGV4dCBgbXlDb250ZXh0TmFtZWBcbi8vXG4vLyB0aGUgcmV0dXJuZWQgb2JqZWN0IGhhcyB0d28gbWFpbiBmdW5jdGlvbnM6IGNtZCBhbmQgYmNhc3Rcbi8vXG4vLyB0aGV5IGJlaGF2ZSB0aGUgc2FtZSB3YXkgYW5kIGhhdmUgYWxzbyB0aGUgc2FtZSBhcmd1bWVudHMsIHRoZSBvbmx5XG4vLyBkaWZmZXJlbmNlIGlzIHRoYXQgdG8gYGNtZGAgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSBpcyBpbnZva2VkIHdpdGggb25seSBvbmVcbi8vIHJlc3BvbnNlIHZhbHVlIGZyb20gYWxsIHBvc3NpYmxlIHJlc3BvbnNlcywgd2hpbGUgdG8gYGJjYXN0YCBjYWxsYmFjayAoaWZcbi8vIHByb3ZpZGVkKSB3ZSBwYXNzIGFycmF5IHdpdGggYWxsIHZhbGlkIHJlc3BvbnNlcyB3ZSBjb2xsZWN0ZWQgd2hpbGVcbi8vIGJyb2FkY2FzdGluZyBnaXZlbiByZXF1ZXN0LlxuLy9cbi8vIGZ1bmN0aW9ucyBhcmd1bWVudHM6XG4vL1xuLy8gKG9wdGlvbmFsKSBbaW50XSB0YWJJZDogaWYgbm90IHNwZWNpZmllZCwgYnJvYWRjYXN0ZWQgdG8gYWxsIHRhYnMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGdpdmVuIHRhYiwgY2FuIHVzZSBTQU1FX1RBQiB2YWx1ZSBoZXJlXG4vL1xuLy8gKG9wdGlvbmFsKSBbYXJyYXldIGNvbnRleHRzOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgY29udGV4dHMsXG4vLyAgICAgIGlmIHNwZWNpZmllZCwgc2VudCBvbmx5IHRvIGxpc3RlZCBjb250ZXh0c1xuLy9cbi8vIChyZXF1aXJlZCkgW3N0cmluZ10gY29tbWFuZDogbmFtZSBvZiB0aGUgY29tbWFuZCB0byBiZSBleGVjdXRlZFxuLy9cbi8vIChvcHRpb25hbCkgW2FueSB0eXBlXSBhcmd1bWVudHM6IGFueSBudW1iZXIgb2YgYXJ1bWVudHMgdGhhdCBmb2xsb3cgY29tbWFuZFxuLy8gICAgICBuYW1lIGFyZSBwYXNzZWQgdG8gZXhlY3V0aW9uIGhhbmRsZXIgd2hlbiBpdCBpcyBpbnZva2VkXG4vL1xuLy8gKG9wdGlvbmFsKSBbZnVuY3Rpb24ocmVzdWx0KV0gY2FsbGJhY2s6IGlmIHByb3ZpZGVkIChhcyBsYXN0IGFyZ3VtZW50IHRvXG4vLyAgICAgIGBjbWRgIG9yIGBiY2FzdGApIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIHJlc3BvbnNlKHMpXG4vLyAgICAgIGlzL2FyZSByZWNlaXZlZFxuLy9cbi8vIHRoZSBmdW5jdGlvbnMgcmV0dXJuIGB0cnVlYCBpZiB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bFxuLy8gKGkuZS4gaWYgYWxsIHRoZSBhcmd1bWVudHMgd2VyZSByZWNvZ25pemVkIHByb3Blcmx5KSwgb3RoZXJ3aXNlIGl0IHJldHVybnNcbi8vIGBmYWxzZWAuXG4vL1xuLy8gZm9yIG5vbi1iZyBjb250ZXh0cyB0aGVyZSBpcyBvbmUgbW9yZSBmdW5jdGlvbiBpbiB0aGUgbWVzc2FnaW5nIG9iamVjdFxuLy8gYXZhaWxhYmxlOiAnYmcnIGZ1bmN0aW9uLCB0aGF0IGlzIHRoZSBzYW1lIGFzICdjbWQnLCBidXQgcHJlcGVuZHMgdGhlIGxpc3Qgb2Zcbi8vIGFyZ3VtZW50cyB3aXRoIFsnYmcnXSwgc28gdGhhdCB0aGUgdXNlciBkb2Vzbid0IGhhdmUgdG8gd3JpdGUgaXQgd2hlblxuLy8gcmVxdWVzdGluZyBzb21lIGluZm8gaW4gbm9uLWJnIGNvbnRleHQgZnJvbSBiYWNrZ3JvdW5kLlxuLy9cbk1lc3NhZ2luZy5wcm90b3R5cGUuY3JlYXRlTXNnT2JqZWN0ID0gZnVuY3Rpb24gY3JlYXRlTXNnT2JqZWN0KG15Q29udGV4dE5hbWUpIHtcbiAgLy8gZ2VuZXJhdG9yIGZvciBmdW5jdGlvbnMgYGNtZGAgYW5kIGBiY2FzdGBcbiAgZnVuY3Rpb24gY3JlYXRlRm4oYnJvYWRjYXN0KSB7XG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBpbnZva2luZyBwcm92aWRlZCBjYWxsYmFjayBpbiBiYWNrZ3JvdW5kXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2JGb3JNb3JlUmVzdWx0cyhOLCBjYWxsYmFjaykge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgcmV0dXJuIChyZXN1bHQsIHJlc3VsdFZhbGlkKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRWYWxpZCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIE4gLT0gMTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBpZiAoKE4gPD0gMCkgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhicm9hZGNhc3QgPyByZXN1bHRzIDogcmVzdWx0c1swXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGdlbmVyYXRlZCBmdW5jdGlvbjpcbiAgICByZXR1cm4gZnVuY3Rpb24gX21zZygpIHtcbiAgICAgIC8vIHByb2Nlc3MgYXJndW1lbnRzOlxuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGF0IGxlYXN0IGNvbW1hbmQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgICAvLyBzaW5jZSB3ZSBsZWFybiBvdXIgaWQgb2Ygbm9uLWJhY2tncm91bmQgY29udGV4dCBpbiBhc3luY2hyb25vdXNcbiAgICAgICAgLy8gbWVzc2FnZSwgd2UgbWF5IG5lZWQgdG8gd2FpdCBmb3IgaXQuLi5cbiAgICAgICAgY29uc3QgX2N0eCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgX21zZy5hcHBseShfY3R4LCBfYXJncyk7IH0sIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCB0YWJJZDtcbiAgICAgIGxldCBjb250ZXh0cztcbiAgICAgIGxldCBjbWROYW1lO1xuICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgbGV0IGN1ckFyZyA9IDA7XG4gICAgICBsZXQgYXJnc0xpbWl0ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgY2FsbGJhY2s6XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmdzTGltaXQgLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzTGltaXQgLT0gMTtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbYXJnc0xpbWl0XTtcbiAgICAgIH1cbiAgICAgIC8vIG90aGVyIGFyZ3VtZW50czpcbiAgICAgIHdoaWxlIChjdXJBcmcgPCBhcmdzTGltaXQpIHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJndW1lbnRzW2N1ckFyZ107XG4gICAgICAgIGN1ckFyZyArPSAxO1xuICAgICAgICBpZiAoY21kTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgaGF2ZSBjb21tYW5kIG5hbWUgeWV0Li4uXG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgKGFyZykpIHtcbiAgICAgICAgICAgIC8vIHRhYiBpZFxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgaWYgKHRhYklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHdlIGFscmVhZHkgaGF2ZSB0YWIgaWQgLS0+IGludmFsaWQgYXJnc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYklkID0gYXJnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNvbnRleHRzICAoYXJyYXkpXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICBpZiAoKHR5cGVvZiAoYXJnLmxlbmd0aCkgPT09ICd1bmRlZmluZWQnKSB8fCAoY29udGV4dHMgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHdlIGVpdGhlciBoYXZlIGl0LCBvciBpdCBpcyBub3QgYXJyYXktbGlrZSBvYmplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0cyA9IGFyZztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjb21tYW5kIG5hbWVcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIGNtZE5hbWUgPSBhcmc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gYW55dGhpbmcgZWxzZSAtLT4gZXJyb3JcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjbWROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjb21tYW5kIG5hbWUgaXMgbWFuZGF0b3J5XG4gICAgICB9XG4gICAgICAvLyBzdG9yZSB0aGUgY2FsbGJhY2sgYW5kIGlzc3VlIHRoZSByZXF1ZXN0IChtZXNzYWdlKVxuICAgICAgaWYgKCdiZycgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9ydHMgPSB0aGlzLnNlbGVjdFRhcmdldHModHJ1ZSwgdGFiSWQsIGNvbnRleHRzKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VzTmVlZGVkID0gdGFyZ2V0UG9ydHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjYiA9IGNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMuY2FsbCh0aGlzLCByZXNwb25zZXNOZWVkZWQsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gc2VuZCB0byB0YXJnZXQgcG9ydHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRQb3J0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IF9wb3J0ID0gdGFyZ2V0UG9ydHNbaV07XG4gICAgICAgICAgX3BvcnQucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBjbWQ6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIGNtZE5hbWUsXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2U6IHRydWUsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgX2FyciA9IHRoaXMucGVuZGluZ1JlcXNbX3BvcnQuaWRdIHx8IFtdO1xuICAgICAgICAgIF9hcnIucHVzaCh7IGlkOiB0aGlzLnJlcXVlc3RJZCwgY2IgfSk7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gPSBfYXJyO1xuICAgICAgICAgIHRoaXMucmVxdWVzdElkICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXRQb3J0cy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBubyBvbmUgdG8gcmVzcG9uZCwgaW52b2tlIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHJpZ2h0IGF3YXlcbiAgICAgICAgICBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuY2JUYWJsZVt0aGlzLnJlcXVlc3RJZF0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICAgIGNtZE5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXMucmVxdWVzdElkLFxuICAgICAgICAgIHNlbmRSZXNwb25zZTogKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIGJyb2FkY2FzdCxcbiAgICAgICAgICBjYXRlZ29yeTogbXlDb250ZXh0TmFtZSxcbiAgICAgICAgICBwb3J0SWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdGFiSWQsXG4gICAgICAgICAgY29udGV4dHMsXG4gICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIGV2ZXJ5dGhpbmcgd2VudCBPS1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ21kRXh0Rm4oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9tc2coZXh0ZW5zaW9uSWQsIGNvbW1hbmROYW1lKSB7XG4gICAgICAvLyBwcm9jZXNzIGFyZ3VtZW50czpcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAvLyBhdCBsZWFzdCBleHRlbnNpb24gaWQgYW5kIGNvbW1hbmQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaWQgIT09ICdiZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGJhY2tncm91bmQgY2FuIHNlbmQgbWVzc2FnZXNzIHRvIGFub3RoZXIgZXh0ZW5zaW9uc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgIGxldCBjYWxsYmFjaztcbiAgICAgIGlmICh0eXBlb2YgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfcG9ydCA9IHRoaXMuZXh0UG9ydHNbZXh0ZW5zaW9uSWRdO1xuICAgICAgaWYgKCFfcG9ydCkge1xuICAgICAgICAvLyBubyBvbmUgdG8gcmVzcG9uZCwgaW52b2tlIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHJpZ2h0IGF3YXlcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgX3BvcnQucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICBjbWROYW1lOiBjb21tYW5kTmFtZSxcbiAgICAgICAgc2VuZFJlc3BvbnNlOiB0cnVlLFxuICAgICAgICBhcmdzLFxuICAgICAgICByZXFJZDogdGhpcy5yZXF1ZXN0SWQsXG4gICAgICAgIGV4dGVuc2lvbklkOiB0aGlzLnJ1bnRpbWUuaWRcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tleHRlbnNpb25JZF0gfHwgW107XG4gICAgICBfYXJyLnB1c2goeyBpZDogdGhpcy5yZXF1ZXN0SWQsXG4gICAgICAgIGNiKHJlc3VsdC8qICwgcmVzdWx0VmFsaWQvKiovKSB7IC8vIGlnbm9yZSAncmVzdWx0VmFsaWQnIGJlY2F1c2UgaXQgaXMgbm90IGFwcGxpY2FibGUgaGVyZVxuICAgICAgICAgIGlmIChjYWxsYmFjaykgeyBjYWxsYmFjayhyZXN1bHQpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wZW5kaW5nUmVxc1tleHRlbnNpb25JZF0gPSBfYXJyO1xuICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcblxuICAgICAgLy8gZXZlcnl0aGluZyB3ZW50IE9LXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyByZXR1cm5lZCBvYmplY3Q6XG4gIGNvbnN0IHJlcyA9IHtcbiAgICBjbWQ6IGNyZWF0ZUZuLmNhbGwodGhpcywgZmFsc2UpLFxuICAgIGJjYXN0OiBjcmVhdGVGbi5jYWxsKHRoaXMsIHRydWUpXG4gIH07XG5cbiAgLy8gZm9yIG1vcmUgY29udmVuaWVuY2UgKHdoZW4gc2VuZGluZyByZXF1ZXN0IGZyb20gbm9uLWJnIHRvIGJhY2tncm91bmQgb25seSlcbiAgLy8gYWRkaW5nICdiZyg8Y21kTmFtZT4sIC4uLiknIGZ1bmN0aW9uLCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gXCJjbWQoWydiZyddLCA8Y21kTmFtZT4sIC4uLilcIlxuICBpZiAobXlDb250ZXh0TmFtZSAhPT0gJ2JnJykge1xuICAgIHJlcy5iZyA9IGZ1bmN0aW9uIGJnKCkge1xuICAgICAgaWYgKDAgPT09IGFyZ3VtZW50cy5sZW5ndGggfHwgJ3N0cmluZycgIT09IHR5cGVvZiAoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBhcmdzID0gW1snYmcnXV07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgICAgcmV0dXJuIHJlcy5jbWQoLi4uYXJncyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXMuY29ubmVjdEV4dCA9IGZ1bmN0aW9uIGNvbm5lY3RFeHQoaWQpIHtcbiAgICAgIGlmICh0aGlzLmV4dFBvcnRzW2lkXSkgeyAvLyBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnJ1bnRpbWUuY29ubmVjdChpZCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRXh0ZXJuYWxDb25uZWN0aW9uKGlkLCBwb3J0KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIHJlcy5jbWRFeHQgPSBjcmVhdGVDbWRFeHRGbi5jYWxsKHRoaXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8vIGluaXQgZnVuY3Rpb24sIGV4cG9ydGVkXG4vL1xuLy8gdGFrZXMgbWFuZGF0b3J5IGBjb250ZXh0YCwgaXQgaXMgYW55IHN0cmluZyAoZS5nLiAnY3QnLCAncG9wdXAnLCAuLi4pLFxuLy8gb25seSBvbmUgdmFsdWUgaXMgb2Ygc3BlY2lhbCBtZWFuaW5nOiAnYmcnIC4uLiBtdXN0IGJlIHVzZWQgZm9yIGluaXRpYWxpemluZ1xuLy8gb2YgdGhlIGJhY2tncm91bmQgcGFydCwgYW55IG90aGVyIGNvbnRleHQgaXMgY29uc2lkZXJlZCBub24tYmFja2dyb3VuZFxuLy9cbi8vIG9wdGlvbmFsbHkgdGFrZXMgYGhhbmRsZXJzYCwgd2hpY2ggaXMgb2JqZWN0IG1hcHBpbmcgZnVuY3Rpb24gbmFtZXMgdG9cbi8vIGZ1bmN0aW9uIGNvZGVzLCB0aGF0IGlzIHVzZWQgYXMgZnVuY3Rpb24gbG9va3VwIHRhYmxlLiBlYWNoIG1lc3NhZ2UgaGFuZGxpbmdcbi8vIGZ1bmN0aW9uIE1VU1QgdGFrZSBjYWxsYmFjayBhcyBpdHMgbGFzdCBhcmd1bWVudCBhbmQgaW52b2tlIHRoaXMgY2FsbGJhY2tcbi8vIHdoZW4gdGhlIG1lc3NhZ2UgaGFuZGxlciBpcyBkb25lIHdpdGggcHJvY2Vzc2luZyBvZiB0aGUgbWVzc2FnZSAocmVnYXJkbGVzc1xuLy8gaWYgc3luY2hyb25vdXMgb3IgYXN5bmNocm9ub3VzKS4gdGhlIGNhbGxiYWNrIHRha2VzIG9uZSBhcmd1bWVudCwgdGhpc1xuLy8gYXJndW1lbnQgaXMgdHJlYXRlZCBhcyByZXR1cm4gdmFsdWUgb2YgdGhlIG1lc3NhZ2UgaGFuZGxlci5cbi8vXG4vLyBmb3IgYmFja2dyb3VuZCAoYGNvbnRleHRgIGlzICdiZycpOiBpbnN0YWxscyBvbkNvbm5lY3QgbGlzdGVuZXJcbi8vIGZvciBub24tYmFja2dyb3VuZCBjb250ZXh0IGl0IGNvbm5lY3RzIHRvIGJhY2tncm91bmRcbi8vXG5NZXNzYWdpbmcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KGNvbnRleHQsIGhhbmRsZXJzKSB7XG4gIC8vIHNldCBtZXNzYWdlIGhhbmRsZXJzIChvcHRpb25hbClcbiAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzIHx8IHt9O1xuXG4gIC8vIGxpc3RlbmVyIHJlZmVyZW5jZXNcbiAgbGV0IG9uRGlzY29ubmVjdDtcbiAgbGV0IG9uQ3VzdG9tTXNnO1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbjpcbiAgZnVuY3Rpb24gb25EaXNjb25uZWN0Rm4oKSB7XG4gICAgdGhpcy5wb3J0Lm9uRGlzY29ubmVjdC5yZW1vdmVMaXN0ZW5lcihvbkRpc2Nvbm5lY3QpO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25DdXN0b21Nc2cpO1xuICB9XG5cbiAgbGV0IHRhYklkO1xuICBmdW5jdGlvbiB1cGRhdGVUYWJJZCgpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHNldFRpbWVvdXQodXBkYXRlVGFiSWQuYmluZCh0aGlzKSwgMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBjbWQ6ICd1cGRhdGVUYWJJZCcsXG4gICAgICBjb250ZXh0LFxuICAgICAgcG9ydElkOiB0aGlzLmlkLFxuICAgICAgdGFiSWRcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250ZXh0ID09PSAnYmcnKSB7XG4gICAgLy8gYmFja2dyb3VuZFxuICAgIHRoaXMuaWQgPSAnYmcnO1xuICAgIHRoaXMucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIodGhpcy5vbkNvbm5lY3QuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ydW50aW1lLm9uQ29ubmVjdEV4dGVybmFsLmFkZExpc3RlbmVyKHRoaXMub25Db25uZWN0RXh0ZXJuYWwuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYW55dGhpbmcgZWxzZSB0aGFuIGJhY2tncm91bmRcbiAgICB0aGlzLnBvcnQgPSB0aGlzLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IGNvbnRleHQgfSk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbkN1c3RvbU1zZyA9IHRoaXMub25DdXN0b21Nc2cuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihvbkRpc2Nvbm5lY3QgPSBvbkRpc2Nvbm5lY3RGbi5iaW5kKHRoaXMpKTtcbiAgICAvLyB0YWJJZCB1cGRhdGUgZm9yIGRldmVsb3BlciB0b29sc1xuICAgIC8vIHVuZm9ydHVuYXRlbHkgd2UgbmVlZCBkZWRpY2F0ZWQgbmFtZSBmb3IgZGV2ZWxvcGVyIHRvb2xzIGNvbnRleHQsIGR1ZSB0b1xuICAgIC8vIHRoaXMgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzU2MTMzXG4gICAgLy8gLi4uIHdlIGFyZSBub3QgYWJsZSB0byB0ZWxsIGlmIHdlIGFyZSBpbiBEVCBjb250ZXh0IG90aGVyd2lzZSA6KFxuICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgKGNvbnRleHQgPT09ICdkdCcpICYmIHRoaXMuZGV2dG9vbHMgJiZcbiAgICAgICh0YWJJZCA9IHRoaXMuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93KSAmJlxuICAgICAgICAgKHR5cGVvZiAodGFiSWQgPSB0YWJJZC50YWJJZCkgPT09ICdudW1iZXInKVxuICAgICkge1xuICAgICAgdXBkYXRlVGFiSWQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGVNc2dPYmplY3QoY29udGV4dCk7XG59O1xuXG5cbi8vIHNpbmdsZXRvbiByZXByZXNlbnRpbmcgdGhpcyBtb2R1bGVcbmNvbnN0IHNpbmdsZXRvbiA9IG5ldyBNZXNzYWdpbmcoKTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGluc3RhbGwgbWV0aG9kcyB1c2VkIGZvciB1bml0IHRlc3RzXG5mdW5jdGlvbiBpbnN0YWxsVW5pdFRlc3RNZXRob2RzKHRhcmdldCwgZGVsZWdhdGUpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduICovXG4gIC8vIHNldHRlcnNcbiAgdGFyZ2V0Ll9fc2V0UnVudGltZSA9IChydCkgPT4geyBkZWxlZ2F0ZS5ydW50aW1lID0gcnQ7IHJldHVybiB0YXJnZXQ7IH07XG4gIHRhcmdldC5fX3NldERldlRvb2xzID0gKGR0KSA9PiB7IGRlbGVnYXRlLmRldnRvb2xzID0gZHQ7IHJldHVybiB0YXJnZXQ7IH07XG4gIC8vIGdldHRlcnNcbiAgdGFyZ2V0Ll9fZ2V0SWQgPSAoKSA9PiBkZWxlZ2F0ZS5pZDtcbiAgdGFyZ2V0Ll9fZ2V0UG9ydCA9ICgpID0+IGRlbGVnYXRlLnBvcnQ7XG4gIHRhcmdldC5fX2dldFBvcnRNYXAgPSAoKSA9PiBkZWxlZ2F0ZS5wb3J0TWFwO1xuICB0YXJnZXQuX19nZXRIYW5kbGVycyA9ICgpID0+IGRlbGVnYXRlLmhhbmRsZXJzO1xuICB0YXJnZXQuX19nZXRQZW5kaW5nUmVxcyA9ICgpID0+IGRlbGVnYXRlLnBlbmRpbmdSZXFzO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gc2FtZSB0YWIgaWRcbiAgU0FNRV9UQUIsXG4gIC8vIHNlZSBkZXNjcmlwdGlvbiBmb3IgaW5pdCBmdW5jdGlvbiBhYm92ZVxuICBpbml0OiBzaW5nbGV0b24uaW5pdC5iaW5kKHNpbmdsZXRvbiksXG4gIC8vIC0tLSBmb3IgdW5pdCB0ZXN0cyAtLS1cbiAgLy8gYWxsb3cgdW5pdCB0ZXN0aW5nIG9mIHRoZSBtYWluIG1vZHVsZTpcbiAgX19hbGxvd1VuaXRUZXN0cygpIHsgaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyh0aGlzLCBzaW5nbGV0b24pOyB9LFxuICAvLyBjb250ZXh0IGNsb25pbmdcbiAgX19jcmVhdGVDbG9uZSgpIHtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBNZXNzYWdpbmcoKTtcbiAgICBjbG9uZS5TQU1FX1RBQiA9IFNBTUVfVEFCO1xuICAgIGluc3RhbGxVbml0VGVzdE1ldGhvZHMoY2xvbmUsIGNsb25lKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9tc2cuanMiLCIvLyBjcmVhdGUgaGFuZGxlciBtb2R1bGUgZm9yIGdpdmVuIGBjb250ZXh0YC5cbi8vIGhhbmRsZXMgYHJhbmRvbWAsIGByYW5kb21Bc3luY2AsIGFuZCBgZWNob2AgY29tbWFuZHMuXG4vLyBib3RoIGByYW5kb21gIGZ1bmN0aW9uIGxvZyB0aGUgaW52b2NhdGlvbiBpbmZvcm1hdGlvbiB0byBjb25zb2xlIGFuZCByZXR1cm5cbi8vIHJhbmRvbSBudW1iZXIgMCAtIDk5OS4gYHJhbmRvbUFzeW5jYCByZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIDE1IHNlY29uZCBkZWxheS5cbi8vIGBlY2hvYCBmdW5jdGlvbiBkb2Vzbid0IHJldHVybiBhbnl0aGluZywganVzdCBsb2dzIHRoZSBpbnB1dCBwYXJhbWV0ZXJcbi8vIGB3aGF0YC5cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgY29uc29sZS5sb2coLi4uYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxufVxuXG5jb25zdCBoYW5kbGVycyA9IHt9O1xuXG5oYW5kbGVycy5jcmVhdGUgPSBjb250ZXh0ID0+ICh7XG4gIHJhbmRvbTogKGRvbmUpID0+IHtcbiAgICBsb2coYC0tLT4ke2NvbnRleHR9OjpyYW5kb20oKSBpbnZva2VkYCk7XG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IoMTAwMCAqIE1hdGgucmFuZG9tKCkpO1xuICAgIGxvZyhgPC0tLSByZXR1cm5zOiAke3J9YCk7XG4gICAgZG9uZShyKTtcbiAgfSxcbiAgcmFuZG9tQXN5bmM6IChkb25lKSA9PiB7XG4gICAgbG9nKGAtLS0+JHtjb250ZXh0fTo6cmFuZG9tQXN5bmMoKSBpbnZva2VkICgxNSBzZWMgZGVsYXkpYCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCByID0gTWF0aC5mbG9vcigxMDAwICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBsb2coYDwtLS0gcmV0dXJuczogJHtyfWApO1xuICAgICAgZG9uZShyKTtcbiAgICB9LCAxNSAqIDEwMDApO1xuICB9LFxuICBlY2hvOiAod2hhdCwgZG9uZSkgPT4ge1xuICAgIGxvZyhgLS0tPiAke2NvbnRleHR9OjplY2hvKFwiJHt3aGF0fVwiKSBpbnZva2VkYCk7XG4gICAgbG9nKCc8LS0tIChubyByZXR1cm4gdmFsdWUpJyk7XG4gICAgZG9uZSgpO1xuICB9XG59KTtcblxuLy8gZm9yIHN1cnByZXNzaW5nIGNvbnNvbGUubG9nIG91dHB1dCBpbiB1bml0IHRlc3RzOlxuaGFuZGxlcnMuX19yZXNldExvZyA9ICgpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICBsb2cgPSAoKSA9PiB7fTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1mdW5jLWFzc2lnblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9oYW5kbGVycy5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCBoYW5kbGVycyBmcm9tICcuL21vZHVsZXMvaGFuZGxlcnMnO1xuaW1wb3J0IG1zZyBmcm9tICcuL21vZHVsZXMvbXNnJztcblxuLy8gaGVyZSB3ZSB1c2UgU0hBUkVEIG1lc3NhZ2UgaGFuZGxlcnMsIHNvIGFsbCB0aGUgY29udGV4dHMgc3VwcG9ydCB0aGUgc2FtZVxuLy8gY29tbWFuZHMuIGJ1dCB0aGlzIGlzIE5PVCB0eXBpY2FsIG1lc3NhZ2luZyBzeXN0ZW0gdXNhZ2UsIHNpbmNlIHlvdSB1c3VhbGx5XG4vLyB3YW50IGVhY2ggY29udGV4dCB0byBoYW5kbGUgZGlmZmVyZW50IGNvbW1hbmRzLiBmb3IgdGhpcyB5b3UgZG9uJ3QgbmVlZFxuLy8gaGFuZGxlcnMgZmFjdG9yeSBhcyB1c2VkIGJlbG93LiBzaW1wbHkgY3JlYXRlIGluZGl2aWR1YWwgYGhhbmRsZXJzYCBvYmplY3Rcbi8vIGZvciBlYWNoIGNvbnRleHQgYW5kIHBhc3MgaXQgdG8gbXNnLmluaXQoKSBjYWxsLiBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIHRoZVxuLy8gY29udGV4dCB0byBzdXBwb3J0IGFueSBjb21tYW5kcywgYnV0IHdhbnQgdGhlIGNvbnRleHQgdG8gY29vcGVyYXRlIHdpdGggdGhlXG4vLyByZXN0IG9mIHRoZSBleHRlbnNpb24gdmlhIG1lc3NhZ2luZyBzeXN0ZW0gKHlvdSB3YW50IHRvIGtub3cgd2hlbiBuZXdcbi8vIGluc3RhbmNlIG9mIGdpdmVuIGNvbnRleHQgaXMgY3JlYXRlZCAvIGRlc3Ryb3llZCwgb3IgeW91IHdhbnQgdG8gYmUgYWJsZSB0b1xuLy8gaXNzdWUgY29tbWFuZCByZXF1ZXN0cyBmcm9tIHRoaXMgY29udGV4dCksIHlvdSBtYXkgc2ltcGx5IG9taXQgdGhlXG4vLyBgaGFuZGxlcnNgIHBhcmFtZXRlciBmb3IgZ29vZCB3aGVuIGludm9raW5nIG1zZy5pbml0KClcblxubXNnLmluaXQoJ2R0JywgaGFuZGxlcnMuY3JlYXRlKCdkdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kZXZUb29scy5qcyJdLCJzb3VyY2VSb290IjoiIn0=