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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
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
/* 90 */,
/* 91 */,
/* 92 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjhiNTJlMTc4ZmExMWJlMTgxOWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbXNnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2hhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RldlRvb2xzLmpzIl0sIm5hbWVzIjpbIlNBTUVfVEFCIiwicnVudGltZSIsImNocm9tZSIsImRldnRvb2xzIiwiZm9yT3duUHJvcHMiLCJvYmoiLCJjYWxsYmFjayIsInJlcyIsImtleSIsImhhc093blByb3BlcnR5IiwiTWVzc2FnaW5nIiwiaGFuZGxlcnMiLCJpZCIsInBvcnQiLCJleHRQb3J0cyIsImNiVGFibGUiLCJwZW5kaW5nUmVxcyIsInVJZCIsInJlcXVlc3RJZCIsInBvcnRNYXAiLCJwcm90b3R5cGUiLCJzZWxlY3RUYXJnZXRzIiwiZnJvbUJnIiwidGFyZ1RhYklkIiwidGFyZ0NhdGVnb3JpZXMiLCJzcmNDYXRlZ29yeSIsInNyY1BvcnRJZCIsIl9wb3J0IiwidGFiSWQiLCJjYXRlZyIsInBvcnRHcm91cCIsImluZGV4T2YiLCJfcmVmIiwicHVzaCIsIm9uQ3VzdG9tTXNnIiwibWVzc2FnZSIsIl9hcnIiLCJfbG9jYWxIYW5kbGVyIiwiaSIsInNlbmRSZXN1bHRDYiIsInJlc3VsdCIsInNlbmRSZXNwb25zZSIsInBvc3RNZXNzYWdlIiwiY21kIiwicG9ydElkIiwicmVxSWQiLCJyZXN1bHRWYWxpZCIsImNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMiLCJOIiwicmVzdWx0cyIsIm15SWQiLCJleHRlbnNpb25JZCIsImNhdGVnb3J5IiwicmVzcG9uc2UiLCJicm9hZGNhc3QiLCJuYW1lIiwidGFyZ2V0UG9ydHMiLCJjb250ZXh0cyIsInJlc3BvbnNlc05lZWRlZCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNtZE5hbWUiLCJjYiIsImNhbGwiLCJhcmdzIiwiYXBwbHkiLCJzcGxpY2UiLCJjb250ZXh0Iiwib25EaXNjb25uZWN0Iiwib25Db25uZWN0IiwiYmluZCIsImNsb3NlUGVuZGluZ1JlcXMiLCJhcnIiLCJyZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbiIsInJlZ0V4dGVybmFsQ29ubmVjdGlvbiIsIm9uRGlzY29ubmVjdEZuIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJvbkV4dGVuc2lvbkRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lciIsIm9uRXh0ZW5zaW9uQ29ubmVjdCIsIm9uQ29ubmVjdEV4dGVybmFsIiwic2VuZGVyIiwiY2F0ZWdOYW1lIiwicG9ydENhdGVnIiwidGFiIiwiSW5maW5pdHkiLCJjcmVhdGVNc2dPYmplY3QiLCJteUNvbnRleHROYW1lIiwiY3JlYXRlRm4iLCJfbXNnIiwiYXJndW1lbnRzIiwiX2N0eCIsIl9hcmdzIiwic2V0VGltZW91dCIsImN1ckFyZyIsImFyZ3NMaW1pdCIsImFyZyIsImNyZWF0ZUNtZEV4dEZuIiwiY29tbWFuZE5hbWUiLCJBcnJheSIsInNsaWNlIiwicG9wIiwiYmNhc3QiLCJiZyIsImNvbm5lY3RFeHQiLCJjb25uZWN0IiwiY21kRXh0IiwiaW5pdCIsInVwZGF0ZVRhYklkIiwiaW5zcGVjdGVkV2luZG93Iiwic2luZ2xldG9uIiwiaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyIsInRhcmdldCIsImRlbGVnYXRlIiwiX19zZXRSdW50aW1lIiwicnQiLCJfX3NldERldlRvb2xzIiwiZHQiLCJfX2dldElkIiwiX19nZXRQb3J0IiwiX19nZXRQb3J0TWFwIiwiX19nZXRIYW5kbGVycyIsIl9fZ2V0UGVuZGluZ1JlcXMiLCJfX2FsbG93VW5pdFRlc3RzIiwiX19jcmVhdGVDbG9uZSIsImNsb25lIiwibG9nIiwiY3JlYXRlIiwicmFuZG9tIiwiZG9uZSIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb21Bc3luYyIsImVjaG8iLCJ3aGF0IiwiX19yZXNldExvZyIsIm1zZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2ZBLHlDOzs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEQUFBK0gsQ0FBSTlCLElBQUosQ0FBUyxJQUFULEVBQWUsa0VBQUFqRyxDQUFTcUgsTUFBVCxDQUFnQixJQUFoQixDQUFmLEUiLCJmaWxlIjoiLi9qcy9kZXZUb29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OGI1MmUxNzhmYTExYmUxODE5YiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvL1xuLy8gRXh0ZW5zaW9uIG1lc3NhZ2luZyBzeXN0ZW0uXG4vL1xuLy9cbi8vIFRoaXMgbW9kdWxlLCB3aGVuIHVzZWQsIGFsbG93cyBjb21tdW5pY2F0aW9uIGFtb25nIGFueSBleHRlbnNpb24tcmVsYXRlZFxuLy8gY29udGV4dHMgKGJhY2tncm91bmQgc2NyaXB0LCBjb250ZW50IHNjcmlwdHMsIGRldmVsb3BtZW50IHRvb2xzIHNjcmlwdHMsIGFueVxuLy8gSlMgY29kZSBydW5uaW5nIGluIGV4dGVuc2lvbi1yZWxhdGVkIEhUTUwgcGFnZXMsIHN1Y2ggYXMgcG9wdXBzLCBvcHRpb25zLFxuLy8gLi4uKS5cbi8vXG4vLyBUbyBzdGFydCB1c2luZyB0aGUgc3lzdGVtLCBvbmUgbmVlZHMgdG8gaW52b2tlIGV4cG9ydGVkIGBpbml0YCBmdW5jdGlvbiBmcm9tXG4vLyBiYWNrZ3JvdW5kIHNjcmlwdCAob25jZSksIHBhc3NpbmcgJ2JnJyBhcyB0aGUgbmFtZSBvZiB0aGUgY29udGV4dCwgb3B0aW9uYWxseVxuLy8gcHJvdmlkaW5nIG1lc3NhZ2UgaGFuZGxpbmcgZnVuY3Rpb25zLiBUaGlzIHdpbGwgaW5zdGFsbCBvbkNvbm5lY3QgbGlzdGVuZXJcbi8vIGZvciBpbmNvbWluZyBQb3J0IGNvbm5lY3Rpb25zIGZyb20gYWxsIG90aGVyIGNvbnRleHQuXG4vL1xuLy8gQW55IG90aGVyIGNvbnRleHQgKHdpdGggYXJiaXRyYXJ5IG5hbWUgYW5kIChvcHRpb25hbCkgbWVzc2FnZSBoYW5kbGVycykgYWxzb1xuLy8gaW52b2tlcyB0aGUgYGluaXRgIGZ1bmN0aW9uLiBJbiB0aGlzIGNhc2UsIFBvcnQgaXMgY3JlYXRlZCBhbmQgY29ubmVjdGVkIHRvXG4vLyBiYWNrZ3JvdW5kIHNjcmlwdC5cbi8vXG4vLyBOb3RlOiBkdWUgdG8gYnVnIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTYxMzNcbi8vIHdlIGFsc28gaGF2ZSBkZWRpY2F0ZWQgbmFtZSBmb3IgZGV2ZWxvcGVyIHRvb2xzIGNvbnRleHQ6ICdkdCcuIE9uY2UgdGhpcyBidWdcbi8vIGlzIGZpeGVkLCB0aGUgb25seSByZXNlcnZlZCBjb250ZXh0IG5hbWUgd2lsbCBiZSAnYmcnIGZvciBiYWNrZ3JvdW5kIGFnYWluLlxuLy9cbi8vIFRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucywgbWFrZSBzdXJlIHRoYXQgeW91ciBiYWNrZ3JvdW5kIHNjcmlwdCBjYWxscyBgaW5pdGBcbi8vIGZ1bmN0aW9uIGFmdGVyIGl0IGlzIHN0YXJ0ZWQsIHNvIGl0IGRvZXNuJ3QgbWlzcyBhbnkgUG9ydCBjb25uZWN0aW9uc1xuLy8gYXR0ZW1wdHMuXG4vL1xuLy8gVG8gYmUgYWJsZSB0byBoYW5kbGUgY29tbWFuZHMgKG9yIGFzc29jaWF0ZWQgbWVzc2FnZXMpIGluIGNvbnRleHRzIChib3RoXG4vLyBiYWNrZ3JvdW5kIGFuZCBub24tYmFja2dyb3VuZCksIG9uZSBtdXN0IHBhc3MgbWVzc2FnZSBoYW5kbGluZyBmdW5jdGlvbnMgaW5cbi8vIGBoYW5kbGVyc2Agb2JqZWN0IHdoZW4gaW52b2tpbmcgcmVzcGVjdGl2ZSBgaW5pdGAgZnVuY3Rpb24gZm9yIGdpdmVuIGNvbnRleHQuXG4vLyBUaGUgYGhhbmRsZXJzYCBvYmplY3QgaXMgYSBmdW5jdGlvbiBsb29rdXAgdGFibGUsIGkuZS4gb2JqZWN0IHdpdGggZnVuY3Rpb25cbi8vIG5hbWVzIGFzIGl0cyBrZXlzIGFuZCBmdW5jdGlvbnMgKGNvZGUpIGFzIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBUaGUgZnVuY3Rpb25cbi8vIHdpbGwgYmUgaW52b2tlZCwgd2hlbiBnaXZlbiBjb250ZXh0IGlzIHJlcXVlc3RlZCB0byBoYW5kbGUgbWVzc2FnZVxuLy8gcmVwcmVzZW50aW5nIGNvbW1hbmQgd2l0aCBuYW1lIHRoYXQgY2FuIGJlIGZvdW5kIGFzIGEga2V5IG9mIHRoZSBgaGFuZGxlcnNgXG4vLyBvYmplY3QuIEl0cyByZXR1cm4gdmFsdWUgKHBhc3NlZCBpbiBjYWxsYmFjaywgc2VlIGJlbG93KSB3aWxsIGJlIHRyZWF0ZWQgYXNcbi8vIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBiYWNrIHRvIHRoZSByZXF1ZXN0b3IuXG4vL1xuLy8gRWFjaCBtZXNzYWdlIGhhbmRsaW5nIGZ1bmN0aW9uIGNhbiB0YWtlIGFueSBudW1iZXIgb2YgcGFyYW1ldGVycywgYnV0IE1VU1Rcbi8vIHRha2UgY2FsbGJhY2sgYXMgaXRzIGxhc3QgYXJndW1lbnQgYW5kIGludm9rZSB0aGlzIGNhbGxiYWNrIHdoZW4gdGhlIG1lc3NhZ2Vcbi8vIGhhbmRsZXIgaXMgZG9uZSB3aXRoIHByb2Nlc3Npbmcgb2YgdGhlIG1lc3NhZ2UgKHJlZ2FyZGxlc3MgaWYgc3luY2hyb25vdXMgb3Jcbi8vIGFzeW5jaHJvbm91cykuIFRoZSBjYWxsYmFjayB0YWtlcyBvbmUgYXJndW1lbnQsIHRoaXMgYXJndW1lbnQgaXMgdHJlYXRlZCBhc1xuLy8gcmV0dXJuIHZhbHVlIG9mIHRoZSBtZXNzYWdlIGhhbmRsZXIuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBNVVNUIGJlIGludm9rZWRcbi8vIG9uY2UgYW5kIG9ubHkgb25jZS5cbi8vXG4vLyBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgKGZvciBhbnkgY29udGV4dCBpdCBpcyBpbnZva2VkIGluKSBtZXNzYWdpbmdcbi8vIG9iamVjdCB3aXRoIHR3byBmdW5jdGlvbjogYGNtZGAgYW5kIGBiY2FzdGAsIGJvdGggdXNlZCBmb3Igc2VuZGluZyBtZXNzYWdlc1xuLy8gdG8gZGlmZmVyZW50IGNvbnRleHRzIChvciBzYW1lIGNvbnRleHQgaW4gZGlmZmVyZW50IHdpbmRvd3MgLyB0YWJzKS5cbi8vXG4vLyBCb3RoIGZ1bmN0aW9ucyBiZWhhdmUgdGhlIHNhbWUgd2F5IGFuZCBoYXZlIGFsc28gdGhlIHNhbWUgYXJndW1lbnRzLCB0aGUgb25seVxuLy8gZGlmZmVyZW5jZSBpcyB0aGF0IHRoZSBgY21kYCBjYWxsYmFjayAoaXRzIGxhc3QgYXJndW1lbnQsIGlmIHByb3ZpZGVkKSBpc1xuLy8gaW52b2tlZCB3aXRoIG9ubHkgb25lIHJlc3BvbnNlIHZhbHVlIGZyb20gYWxsIGNvbGxlY3RlZCByZXNwb25zZXMsIHdoaWxlIHRvXG4vLyB0aGUgYGJjYXN0YCBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdlIHBhc3MgYXJyYXkgd2l0aCBhbGwgdmFsaWQgcmVzcG9uc2VzIHdlXG4vLyBjb2xsZWN0ZWQgd2hpbGUgYnJvYWRjYXN0aW5nIGdpdmVuIHJlcXVlc3QuXG4vL1xuLy8gYGNtZGAgYW5kIGBiY2FzdGAgZnVuY3Rpb25zIGFyZ3VtZW50czpcbi8vXG4vLyAob3B0aW9uYWwpIFtpbnRdIHRhYklkOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgdGFicyxcbi8vICAgICAgaWYgc3BlY2lmaWVkLCBzZW50IG9ubHkgdG8gZ2l2ZW4gdGFiLCBjYW4gdXNlIFNBTUVfVEFCIHZhbHVlIGhlcmVcbi8vICAgICAgKGV4cG9ydGVkIGZyb20gdGhpcyBtb2R1bGUsIHRvbylcbi8vXG4vLyAob3B0aW9uYWwpIFthcnJheV0gY29udGV4dHM6IGlmIG5vdCBzcGVjaWZpZWQsIGJyb2FkY2FzdGVkIHRvIGFsbCBjb250ZXh0cyxcbi8vICAgICAgaWYgc3BlY2lmaWVkLCBzZW50IG9ubHkgdG8gbGlzdGVkIGNvbnRleHRzIChjb250ZXh0IG5hbWUgaXMgcHJvdmlkZWRcbi8vICAgICAgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHdoZW4gaW52b2tpbmcgdGhlIGBpbml0YCBmdW5jdGlvbilcbi8vXG4vLyAocmVxdWlyZWQpIFtzdHJpbmddIGNvbW1hbmQ6IG5hbWUgb2YgdGhlIGNvbW1hbmQgdG8gYmUgZXhlY3V0ZWRcbi8vXG4vLyAob3B0aW9uYWwpIFthbnkgdHlwZV0gYXJndW1lbnRzOiBhbnkgbnVtYmVyIG9mIGFydW1lbnRzIHRoYXQgZm9sbG93IGNvbW1hbmRcbi8vICAgICAgbmFtZSBhcmUgcGFzc2VkIHRvIGV4ZWN1dGlvbiBoYW5kbGVyIHdoZW4gaXQgaXMgaW52b2tlZFxuLy9cbi8vIChvcHRpb25hbCkgW2Z1bmN0aW9uKHJlc3VsdCldIGNhbGxiYWNrOiBpZiBwcm92aWRlZCAoYXMgbGFzdCBhcmd1bWVudCB0b1xuLy8gICAgICBgY21kYCBvciBgYmNhc3RgKSwgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgcmVzcG9uc2Uocylcbi8vICAgICAgaXMvYXJlIHJlY2VpdmVkXG4vL1xuLy8gVGhlIGBjbWRgIGFuZCBgYmNhc3RgIGZ1bmN0aW9ucyByZXR1cm4gYHRydWVgIGlmIHRoZSBwcm9jZXNzaW5nIG9mIHRoZVxuLy8gcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCAoaS5lLiBpZiBhbGwgdGhlIGFyZ3VtZW50cyB3ZXJlIHJlY29nbml6ZWQgcHJvcGVybHkpLFxuLy8gb3RoZXJ3aXNlIGl0IHJldHVybnMgYGZhbHNlYC5cbi8vXG4vLyBXaGVuIGBjbWRgIG9yIGBiY2FzdGAgZnVuY3Rpb24gaXMgaW52b2tlZCBmcm9tIGJhY2tncm91bmQgY29udGV4dCwgYSBzZXQgb2Zcbi8vIGNvbnRleHQgaW5zdGFuY2VzLCB0byB3aGljaCB0aGUgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8sIGlzIGNyZWF0ZWQgYmFzZWQgb25cbi8vIHByb3ZpZGVkIGFyZ3VtZW50cyAodGFiIGlkIGFuZCBjb250ZXh0IG5hbWVzKS4gVGhlIHNldCBpcyBOT1QgZmlsdGVyZWQgYnlcbi8vIHByb3ZpZGVkIGNvbW1hbmQgbmFtZSwgYXMgYmFja2dyb3VuZCBjb250ZXh0IGRvZXNuJ3Qga25vdyB3aGF0IG1lc3NhZ2Vcbi8vIGhhbmRsZXJzIGFyZSB1c2VkIGluIGFsbCB0aGUgY29udGV4dHMgKGkuZS4gaXQgZG9lc24ndCBrbm93IHRoZSBmdW5jdGlvblxuLy8gbmFtZXMgaW4gbWVzc2FnZSBoYW5kbGluZyBsb29rdXAgZnVuY3Rpb24gdGFibGVzIG9mIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHRzKS5cbi8vXG4vLyBXaGVuIHRhYiBpZCBvciBjb250ZXh0IG5hbWVzIGFyZSBOT1QgcHJvdmlkZWQsIHRoZSBjb21tYW5kIGlzIGJyb2FkY2FzdGVkIHRvXG4vLyBhbGwgcG9zc2libGUgY29udGV4dCBpbnN0YW5jZXMsIHdoaWNoIHRoZSBiYWNrZ3JvdW5kIGtub3dzIGFib3V0LCBhbmQgdGhhdFxuLy8gbWF5IHJlcXVpcmUgYSBsb3Qgb2YgbWVzc2FnaW5nLi4uIFNvIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIGl0IGlzIHdpc2UgdG9cbi8vIHByb3ZpZGUgdGFiLWlkIGFuZCAvIG9yIGNvbnRleHQgbmFtZShzKSB3aGVuZXZlciBwb3NzaWJsZSB0byByZWR1Y2UgdGhlIHNpemVcbi8vIG9mIHRoZSBjb250ZXh0IGluc3RhbmNlcyBzZXQgYXMgbXVjaCBhcyBpdCBnZXRzLlxuLy9cbi8vIFdoZW4gbWVzc2FnZSBjb3JyZXNwb25kaW5nIHRvIGNvbW1hbmQgaXMgdGhlbiByZWNlaXZlZCBpbiBub24tYmFja2dyb3VuZFxuLy8gY29udGV4dCwgdGhlIGhhbmRsZXIgbG9va3VwIHRhYmxlIGlzIGNoZWNrZWQgaWYgaXQgY29udGFpbnMgaGFuZGxlciBmb3Jcbi8vIHJlcXVlc3RlZCBjb21tYW5kIG5hbWUuIElmIHNvLCB0aGUgaGFuZGxlciBpcyBpbnZva2VuZCBhbmQgaXRzIFwicmV0dXJuIHZhbHVlXCJcbi8vIChwYXNzZWQgaW4gY2FsbGJhY2ssIHRvIGFsbG93IGFzeW5jaHJvbm91cyBtZXNzYWdlIGhhbmRsaW5nKSBpcyB0aGVuIHNlbnRcbi8vIGJhY2sgdG8gYmFja2dyb3VuZC4gSWYgdGhlcmUgaXMgbm8gY29ycmVzcG9uZGluZyBoYW5kbGVyIChmb3IgcmVxdWVzdGVkXG4vLyBjb21tYW5kIG5hbWUpLCBtZXNzYWdlIGluZGljYXRpbmcgdGhhdCBpcyBzZW50IGJhY2sgaW5zdGVhZC5cbi8vXG4vLyBXaGVuIGJhY2tncm91bmQgY29sbGVjdHMgYWxsIHRoZSByZXNwb25zZXMgYmFjayBmcm9tIGFsbCB0aGUgY29udGV4dFxuLy8gaW5zdGFuY2VzIGl0IHNlbnQgdGhlIG1lc3NhZ2UgdG8sIGl0IGludm9rZXMgdGhlIGBjbWRgIG9yIGBiY2FzdGAgY2FsbGJhY2ssXG4vLyBwYXNzaW5nIHRoZSByZXNwb25zZSB2YWx1ZShzKS4gSWYgdGhlcmUgd2FzIG5vIGNhbGxiYWNrIHByb3ZpZGVkLCB0aGVcbi8vIGNvbGxlY3RlZCByZXNwb25zZSB2YWx1ZXMgYXJlIHNpbXBseSBkcm9wcGVkLlxuLy9cbi8vIFdoZW4gYGNtZGAgb3IgYGJjYXN0YCBmdW5jdGlvbiBpcyBpbnZva2VkIGZyb20gbm9uLWJhY2tncm91bmQgY29udGV4dCwgdGhlXG4vLyByZXF1ZXN0IG1lc3NhZ2UgaXMgc2VudCB0byBiYWNrZ3JvdW5kLiBCYWNrZ3JvdW5kIHRoZW4gZGlzcGF0Y2hlcyB0aGUgcmVxdWVzdFxuLy8gdG8gYWxsIHJlbGV2YW50IGNvbnRleHQgaW5zdGFuY2VzIHRoYXQgbWF0Y2ggcHJvdmlkZWQgZmlsdGVycyAoYWdhaW4sIGJhc2VkIG9uXG4vLyBwYXNzZWQgdGFiIGlkIGFuZCAvIG9yIGNvbnRleHQgbmFtZXMpLCBhbmQgZGlzcGF0Y2hlcyB0aGUgcmVxdWVzdCBpbiBmYXZvciBvZlxuLy8gdGhlIGNvbnRleHQgaW5zdGFuY2UgdGhhdCBzZW50IHRoZSBvcmlnaW5hbCByZXF1ZXN0IHRvIGJhY2tncm91bmQuIFRoZVxuLy8gZGlzcGF0Y2hpbmcgbG9naWMgaXMgZGVzY3JpYmVkIGFib3ZlIChpLmUuIGl0IGlzIHRoZSBzYW1lIGFzIGlmIHRoZSByZXF1ZXN0XG4vLyB3YXMgc2VudCBieSBiYWNrZ3JvdW5kKS5cbi8vXG4vLyBUaGVyZSBpcyBvbmUgZGlmZmVyZW5jZSB0aG91Z2g6IGlmIGJhY2tncm91bmQgaGFzIGNvcnJlc3BvbmRpbmcgaGFuZGxlciBmb3Jcbi8vIHJlcXVlc3RlZCBjb21tYW5kIG5hbWUgKGFuZCBiYWNrZ3JvdW5kIGNvbnRleHQgaXMgbm90IGZpbHRlcmVkIG91dCB3aGVuXG4vLyBjcmVhdGluZyB0aGUgc2V0IG9mIGNvbnRleHRzKSwgdGhpcyBoYW5kbGVyIGlzIGludm9rZWQgKGluIGJhY2tncm91bmRcbi8vIGNvbnRleHQpIGFuZCB0aGUgXCJyZXR1cm4gdmFsdWVcIiBpcyBhbHNvIHBhcnQgb2YgdGhlIGNvbGxlY3RlZCBzZXQgb2Zcbi8vIHJlc3BvbnNlcy5cbi8vXG4vLyBXaGVuIGFsbCB0aGUgcHJvY2Vzc2luZyBpbiBhbGwgdGhlIGNvbnRleHQgaW5zdGFuY2VzIChpbmNsdWRpbmcgYmFja2dyb3VuZFxuLy8gY29udGV4dCwgaWYgYXBwbGljYWJsZSkgaXMgZmluaXNoZWQgYW5kIHJlc3BvbnNlcyBhcmUgY29sbGVjdGVkLCB0aGVcbi8vIHJlc3BvbnNlcyBhcmUgc2VudCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IGluc3RhbmNlIHRoYXQgaW5pdGlhdGVkIHRoZVxuLy8gbWVzc2FnZSBwcm9jZXNzaW5nLlxuLy9cbi8vXG4vLyBFWEFNUExFOlxuLy9cbi8vIGJhY2tncm91bmQgc2NyaXB0OlxuLy8gLS0tLS1cbi8vXG4vLyB2YXIgbXNnID0gcmVxdWlyZSgnbXNnJykuaW5pdCgnYmcnLCB7XG4vLyAgIHNxdWFyZTogZnVuY3Rpb24od2hhdCwgZG9uZSkgeyBkb25lKHdoYXQqd2hhdCk7IH1cbi8vIH0pO1xuLy9cbi8vIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuLy8gICBtc2cuYmNhc3QoLyogWydjdCddICovLCAncGluZycsIGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlcyk7ICAvLyAtLS0+ICBbJ3BvbmcnLCdwb25nJywuLi5dXG4vLyAgIH0pO1xuLy8gfSwgMTAwMCk7ICAvLyBicm9hZGNhc3QgJ3BpbmcnIGVhY2ggc2Vjb25kXG4vL1xuLy9cbi8vIGNvbnRlbnQgc2NyaXB0OlxuLy8gLS0tLS1cbi8vXG4vLyB2YXIgbXNnID0gcmVxdWlyZSgnbXNnJykuaW5pdCgnY3QnLCB7XG4vLyAgIHBpbmc6IGZ1bmN0aW9uKGRvbmUpIHsgZG9uZSgncG9uZycpOyB9XG4vLyB9KTtcbi8vXG4vLyBtc2cuY21kKC8qIFsnYmcnXSAqLywgJ3NxdWFyZScsIDUsIGZ1bmN0aW9uKHJlcykge1xuLy8gICBjb25zb2xlLmxvZyhyZXMpOyAgLy8gLS0tPiAyNVxuLy8gfSk7XG4vL1xuLy8gLS0tLS0tLS0tLVxuLy9cbi8vIEZvciBjb252ZW5pZW50IHNlbmRpbmcgcmVxdWVzdHMgZnJvbSBub24tYmFja2dyb3VuZCBjb250ZXh0cyB0b1xuLy8gYmFja2dyb3VuZC1vbmx5IChhcyB0aGlzIGlzIG1vc3QgY29tbW9uIGNhc2U6IG5vbi1iZyBjb250ZXh0IG5lZWRzIHNvbWUgaW5mb1xuLy8gZnJvbSBiYWNrZ3JvdW5kKSwgdGhlcmUgaXMgb25lIG1vcmUgZnVuY3Rpb24gaW4gdGhlIG1lc3NhZ2luZyBvYmplY3QgcmV0dXJuZWRcbi8vIGJ5IHRoZSBpbml0KCkgZnVuY3Rpb24uIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgJ2JnJyBhbmQgaXQgcHJlcGVuZHMgdGhlIGxpc3Rcbi8vIG9mIHBhc3NlZCBhcmd1bWVudHMgd2l0aCBbJ2JnJ10gYXJyYXksIHNvIHRoYXQgbWVhbnMgdGhlIHJldXFlc3QgaXMgdGFyZ2V0ZWRcbi8vIHRvIGJhY2tncm91bmQtb25seS4gVGhlICdiZycgZnVuY3Rpb24gZG9lcyBOT1QgdGFrZSAndGFiSWQnIG9yICdjb250ZXh0cydcbi8vIHBhcmFtZXRlcnMsIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIHRoZSBjb21tYW5kIG5hbWUuXG4vL1xuLy8gRVhBTVBMRTpcbi8vXG4vLyBiYWNrZ3JvdW5kIHNjcmlwdFxuLy8gLS0tLS1cbi8vXG4vLyAoIC4uLiBhcyBhYm92ZSAuLi4gKVxuLy9cbi8vIGNvbnRlbnQgc2NyaXB0OlxuLy8gLS0tLS1cbi8vXG4vLyB2YXIgbXNnID0gcmVxdWlyZSgnbXNnJykuaW5pdCgnY3QnLCB7XG4vLyAgIHBpbmc6IGZ1bmN0aW9uKGRvbmUpIHsgZG9uZSgncG9uZycpOyB9XG4vLyB9KTtcbi8vXG4vLyBtc2cuYmcoJ3NxdWFyZScsIDUsIGZ1bmN0aW9uKHJlcykge1xuLy8gICBjb25zb2xlLmxvZyhyZXMpOyAgLy8gLS0tPiAyNVxuLy8gfSk7XG4vL1xuLy8gLS0tLS0tLS0tLVxuLy9cbi8vIFRoZXJlIGFyZSB0d28gZGVkaWNhdGVkIGJhY2tncm91bmQgaGFuZGxlcnMgdGhhdCwgd2hlbiBwcm92aWRlZCBpbiBgaGFuZGxlcnNgXG4vLyBvYmplY3QgZm9yIGBiZ2AgY29udGV4dCBpbiBgaW5pdGAgZnVuY3Rpb24sIGFyZSBpbnZva2VkIGJ5IHRoZSBtZXNzYWdpbmdcbi8vIHN5c3RlbSBpdHNlbGYuIFRoZXNlIGhhbmRsZXJzIGFyZTpcbi8vXG4vLyArIG9uQ29ubmVjdDogZnVuY3Rpb24oY29udGV4dE5hbWUsIHRhYklkKSxcbi8vICsgb25EaXNjb25uZWN0OiBmdW5jdGlvbihjb250ZXh0TmFtZSwgdGFiSWQpXG4vL1xuLy8gVGhlc2UgdHdvIHNwZWNpYWwgaGFuZGxlcnMsIGlmIHByb3ZpZGVkLCBhcmUgaW52b2tlZCB3aGVuIG5ldyBQb3J0IGlzXG4vLyBjb25uZWN0ZWQgKGkuZS4gd2hlbiBgaW5pdGAgZnVuY3Rpb24gaXMgaW52b2tlZCBpbiBub24tYmcgY29udGV4dCksIGFuZFxuLy8gdGhlbiB3aGVuIHRoZXkgYXJlIGNsb3NlZCAoZGlzY29ubmVjdGVkKSBsYXRlciBvbi4gVGhpcyBub3RpZmljYXRpb24gc3lzdGVtXG4vLyBhbGxvd3MgdG8gbWFpbnRhaW4gc29tZSBzdGF0ZSBhYm91dCBjb25uZWN0ZWQgY29udGV4dHMgaW4gZXh0ZW5zaW9uXG4vLyBiYWNrcm91bmQuXG4vL1xuLy8gUGxlYXNlIG5vdGUgdGhhdCB1bmxpa2UgYWxsIG90aGVyIGhhbmRsZXJzIHBhc3NlZCBhcyB0aGUgYGhhbmRsZXJzYCBvYmplY3QgdG9cbi8vIGBpbml0YCBmdW5jdGlvbiwgdGhlc2UgdHdvIHNwZWNpYWwgaGFuZGxlcnMgZG8gTk9UIHRha2UgY2FsbGJhY2sgYXMgdGhlaXJcbi8vIGxhc3QgYXJndW1lbnRzLiBBbnkgcmV0dXJuIHZhbHVlIHRoZXNlIGhhbmRsZXJzIG1heSByZXR1cm4gaXMgaWdub3JlZC5cbi8vXG4vLyBUaGUgYGNvbnRleHROYW1lYCBwYXJhbWV0ZXIgaXMgdmFsdWUgcHJvdmlkZWQgdG8gbm9uLWJhY2tncm91bmQgYGluaXRgXG4vLyBmdW5jdGlvbiwgd2hpbGUgdGhlIGB0YWJJZGAgaXMgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIuIElmIHRhYklkIGlzIG5vdFxuLy8gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIsIHRoZSBgdGFiSWRgIHdpbGwgYmUgYEluZmluaXR5YC5cbi8vXG5cblxuLy8gY29uc3RhbnQgZm9yIFwic2FtZSB0YWIgYXMgbWVcIlxuY29uc3QgU0FNRV9UQUIgPSAtMTAwMDsgIC8vIHdhcyAtSW5maW5pdHksIGJ1dCBKU09OLnN0cmluZ2lmeSgpICsgSlNPTi5wYXJzZSgpIGRvbid0IGxpa2UgdGhhdCB2YWx1ZVxuXG4vLyBydW4tdGltZSBBUEk6XG4vLyB2YXJpYWJsZSArIGV4cG9ydGVkIGZ1bmN0aW9uIHRvIGNoYW5nZSBpdCwgc28gaXQgY2FuIGJlIG1vY2tlZCBpbiB1bml0IHRlc3RzXG4vKiBnbG9iYWwgY2hyb21lICovXG5jb25zdCBydW50aW1lID0gKHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnKSAmJiBjaHJvbWUucnVudGltZTtcbi8vIHRoZSBzYW1lIGZvciBkZXZ0b29scyBBUEk6XG5jb25zdCBkZXZ0b29scyA9ICh0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0JykgJiYgY2hyb21lLmRldnRvb2xzO1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBsb29waW5nIHRocm91Z2ggb2JqZWN0J3Mgb3duIGtleXNcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbihrZXksIHZhbHVlLCBvYmopIC4uLiBkb2Vzbid0IG5lZWQgdG8gdXNlIGFsbCAzIHBhcmFtZXRlcnNcbi8vIHJldHVybnMgb2JqZWN0IHdpdGggc2FtZSBrZXlzIGFzIHRoZSBjYWxsYmFjayB3YXMgaW52b2tlZCBvbiwgdmFsdWVzIGFyZSB0aGVcbi8vICAgY2FsbGJhY2sgcmV0dXJuZWQgdmFsdWVzIC4uLiBjYW4gYmUgb2YgY291cnNlIGlnbm9yZWQgYnkgdGhlIGNhbGxlciwgdG9vXG5mdW5jdGlvbiBmb3JPd25Qcm9wcyhvYmosIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCByZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIHJlc1trZXldID0gY2FsbGJhY2soa2V5LCBvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLy8gd2Ugd3JhcCB0aGUgd2hvbGUgbW9kdWxlIGZ1bmN0aW9uYWxpdHkgaW50byBpc29sYXRlZCBzY29wZSwgc28gdGhhdCBsYXRlciB3ZVxuLy8gY2FuIGluc3RhbnRpYXRlIG11bHRpcGxlIHBhcmFsbGVsIHNjb3BlcyBmb3IgdW5pdCB0ZXN0aW5nLlxuLy8gVGhlIG1vZHVsZSB3aWxsIHN0aWxsIHNlZW0gdG8gaG9sZCBzaW5nbGV0b24gb2JqZWN0LCBiZWNhdXNlIHdlJ2xsIGNyZWF0ZVxuLy8gdGhpcyBzaW5nbGV0b24gYW5kIHdpbGwgZXhwb3J0IGl0cyBtZXRob2RzIGFzICh3aG9sZSkgbW9kdWxlIG1ldGhvZHMuXG5cbmZ1bmN0aW9uIE1lc3NhZ2luZygpIHtcbiAgLy8gaGFuZGxlcnMgYXZhaWxhYmxlIGluIGdpdmVuIGNvbnRleHQgKGZ1bmN0aW9uIGxvb2t1cCB0YWJsZSksIHNldCBpbiBgaW5pdCgpYFxuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoc3RyaW5nKTxmdW5jdGlvTmFtZT46IChmdW5jdGlvbik8Y29kZT4sXG4gIC8vICAgLi4uXG4gIC8vIH1cbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gIC8vIGlkIGFzc2lnbmVkIGJ5IGJhY2tncm91bmQsIHVzZWQgaW4gbm9uLWJhY2tncm91bmQgY29udGV4dHMgb25seVxuICAvLyBpbiBiYWNrZ3JvdW5kIHNldCB0byAnYmcnXG4gIHRoaXMuaWQgPSBudWxsO1xuXG4gIC8vIHBvcnQgdXNlZCBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIGJhY2tncm91bmQgKGkuZS4gbm90IHVzZWQgaW4gYmFja2dyb3VuZClcbiAgLy8gdHlwZTogKGNocm9tZS5ydW50aW1lKSBQb3J0XG4gIHRoaXMucG9ydCA9IG51bGw7XG5cbiAgLy8gbWFwIG9mIHBvcnRzIGZvciBjb25uZWN0ZWQgZXh0ZW5zaW9uc1xuICAvLyBrZXkgPSBleHRlbnNpb24gaWQsIHZhbHVlID0gcG9ydFxuICB0aGlzLmV4dFBvcnRzID0ge307XG5cbiAgLy8gY2FsbGJhY2sgbG9va3VwIHRhYmxlOiBpZiByZXF1ZXN0IHdhaXRzIGZvciByZXNwb25zZSwgdGhpcyB0YWJsZSBob2xkc1xuICAvLyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZSB1cG9uIHJlc3BvbnNlXG4gIC8vIGZvcm1hdDpcbiAgLy8ge1xuICAvLyAgIChpbnQpPHJlcXVlc3RJZD46IChmdW5jdGlvbik8Y2FsbGJhY2sgY29kZT4sXG4gIC8vICAgLi4uXG4gIC8vIH1cbiAgdGhpcy5jYlRhYmxlID0ge307XG5cbiAgLy8gYmFja2dyb3VuZCB0YWJsZSBvZiBwZW5kaW5nIHJlcXVlc3RzXG4gIC8vIGZvcm1hdDpcbiAgLy8ge1xuICAvLyAgIChzdHJpbmcpPHBvcnRJZD46IFsgeyBpZDogKGludCk8cmVxdWVzdElkPiwgY2I6IChmdW5jdGlvbik8Y2FsbGJhY2s+IH0sIC4uLl0sXG4gIC8vICAgLi4uXG4gIC8vIH1cbiAgdGhpcy5wZW5kaW5nUmVxcyA9IHt9O1xuXG4gIC8vIHVuaXF1ZSBjb250ZXh0IGlkLCB1c2VkIGJ5IGJhY2tncm91bmRcbiAgdGhpcy51SWQgPSAxO1xuXG4gIC8vIHJlcXVlc3QgaWQsIHVzZWQgYnkgYWxsIGNvbnRleHRzXG4gIHRoaXMucmVxdWVzdElkID0gMTtcblxuICAvLyBtYXBwaW5nIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHQgbmFtZXMgdG8gb2JqZWN0cyBpbmRleGVkIGJ5IG5hbWUgb2YgdGhlIGNvbnRleHRcbiAgLy8gaW5zdGFuY2VzLCBob2xkaW5nIHsgdGFiLWlkLCAoY2hyb21lLnJ1bnRpbWUuKVBvcnQgfSBwYWlycyxcbiAgLy8gdXNlZCBmb3IgbWVzc2FnZSBkaXNwYXRjaGluZ1xuICAvLyBmb3JtYXQ6XG4gIC8vIHtcbiAgLy8gICAoc3RyaW5nKTxjYXRlZ29yeT46IHtcbiAgLy8gICAgIChzdHJpbmcpPGlkPjogeyB0YWJJZDogKG9wdGlvbmFsKTxpbnQ+LCBwb3J0OiA8Y2hyb21lLnJ1bnRpbWUuUG9ydD4gfSxcbiAgLy8gICAgIC4uLlxuICAvLyAgIH0sXG4gIC8vICAgLi4uXG4gIC8vIH1cbiAgLy8gYmFja2dyb3VuZC1vbmx5IHZhcmlhYmxlXG4gIHRoaXMucG9ydE1hcCA9IHt9O1xuXG4gIC8vIHJ1bmV0aW1lIGFuZCBkZXZ0b29scyByZWZlcmVuY2VzLCBzbyB0aGF0IHdlIGNhbiBjaGFuZ2UgaXQgaW4gdW5pdCB0ZXN0c1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICB0aGlzLmRldnRvb2xzID0gZGV2dG9vbHM7XG59XG5cbi8vIGJhY2tncm91bmQgZnVuY3Rpb24gZm9yIHNlbGVjdGluZyB0YXJnZXQgcG9ydHMgdG8gd2hpY2ggd2UgYnJvYWRjYXN0IHRoZSByZXF1ZXN0XG4vLyBmcm9tQmc6IGlzIHRoZSByZXF1ZXN0IHRvIGNvbGxlY3QgdGFyZ2V0cyBmcm9tIGJhY2dyb3VuZCwgb3IgYmFzZWQgb24gbWVzc2FnZT9cbi8vIHRhcmcqOiBmaWx0ZXIgZm9yIHRhcmdldCBwb3J0c1xuLy8gc3JjKjogaW5mb3JtYXRpb24gYWJvdXQgc291cmNlIHBvcnRcbi8vIHJldHVybnMgYXJyYXkgb2YgeyBwb3J0OiAoY2hyb21lLnJ1bnRpbWUuUG9ydCksIGlkOiAoc3RyaW5nKSB9XG5NZXNzYWdpbmcucHJvdG90eXBlLnNlbGVjdFRhcmdldHMgPVxuICBmdW5jdGlvbiBzZWxlY3RUYXJnZXRzKGZyb21CZywgdGFyZ1RhYklkLCB0YXJnQ2F0ZWdvcmllcywgc3JjQ2F0ZWdvcnksIHNyY1BvcnRJZCkge1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGNvbnN0IF9wb3J0ID0gdGhpcy5wb3J0TWFwW3NyY0NhdGVnb3J5XSAmJiB0aGlzLnBvcnRNYXBbc3JjQ2F0ZWdvcnldW3NyY1BvcnRJZF07XG4gICAgaWYgKCFmcm9tQmcgJiYgIV9wb3J0KSB7XG4gICAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIGp1c3QgZ290IHJlcXVlc3QgZnJvbSB0aGlzIHBvcnQhXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICghZnJvbUJnICYmICh0YXJnVGFiSWQgPT09IFNBTUVfVEFCKSkge1xuICAgICAgdGFyZ1RhYklkID0gX3BvcnQudGFiSWQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvcnRNYXAsIHBpY2sgdGFyZ2V0czpcbiAgICBmb3JPd25Qcm9wcyh0aGlzLnBvcnRNYXAsIChjYXRlZywgcG9ydEdyb3VwKSA9PiB7XG4gICAgICBpZiAodGFyZ0NhdGVnb3JpZXMgJiYgKHRhcmdDYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWcpID09PSAtMSkpIHtcbiAgICAgICAgLy8gd2UgYXJlIGludGVyZXN0ZWQgb25seSBpbiBzcGVjaWZpZWQgY29udGV4dHMsXG4gICAgICAgIC8vIGFuZCB0aGlzIGNhdGVnb3J5IGlzIG5vdCBvbiB0aGUgbGlzdFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3JPd25Qcm9wcyhwb3J0R3JvdXAsIChpZCwgX3JlZikgPT4ge1xuICAgICAgICBpZiAodGFyZ1RhYklkICYmICh0YXJnVGFiSWQgIT09IF9yZWYudGFiSWQpKSB7XG4gICAgICAgICAgLy8gd2UgYXJlIGludGVyZXN0ZWQgaW4gc3BlY2lmaWVkIHRhYiBpZCxcbiAgICAgICAgICAvLyBhbmQgdGhpcyBpZCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tQmcgfHwgKF9wb3J0LnBvcnQgIT09IF9yZWYucG9ydCkpIHtcbiAgICAgICAgICAvLyBkbyBub3QgYXNrIG1lIGJhY2ssIGFzayBvbmx5IGRpZmZlcmVudCBwb3J0c1xuICAgICAgICAgIHJlcy5wdXNoKHsgcG9ydDogX3JlZi5wb3J0LCBpZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuLy8gbWVzc2FnZSBoYW5kbGVyICh1c2ViIGJ5IGJvdGggYmFja2dyb3VuZCBhbmQgbm9uLWJhY2tvdW5kKVxuTWVzc2FnaW5nLnByb3RvdHlwZS5vbkN1c3RvbU1zZyA9IGZ1bmN0aW9uIG9uQ3VzdG9tTXNnKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgbGV0IF9wb3J0O1xuICBsZXQgX2FycjtcbiAgbGV0IF9sb2NhbEhhbmRsZXI7XG4gIGxldCBfcmVmO1xuICBsZXQgaTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbnM6XG5cbiAgLy8gc2VuZCByZXNwb25zZSBvbiByZXN1bHQgKG5vbi1iYWNrZ3JvdW5kKTpcbiAgZnVuY3Rpb24gc2VuZFJlc3VsdENiKHJlc3VsdCkge1xuICAgIGlmIChtZXNzYWdlLnNlbmRSZXNwb25zZSkge1xuICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAncmVzcG9uc2UnLFxuICAgICAgICBwb3J0SWQ6IHRoaXMuaWQsXG4gICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICByZXN1bHRWYWxpZDogdHJ1ZSxcbiAgICAgICAgcmVzdWx0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgY2FsbGJhY2sgd2FpdGluZyBmb3IgTiByZXN1bHRzLCB0aGVuIHNlbmQgcmVzcG9uc2UgKGJhY2tncm91bmQpOlxuICBmdW5jdGlvbiBjcmVhdGVDYkZvck1vcmVSZXN1bHRzKE4pIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgbXlJZCA9IHRoaXMucnVudGltZS5pZDtcbiAgICByZXR1cm4gKHJlc3VsdCwgcmVzdWx0VmFsaWQpID0+IHtcbiAgICAgIGlmIChyZXN1bHRWYWxpZCAhPT0gZmFsc2UpIHsgIC8vIGNhbiBiZSBlaXRoZXIgYHRydWVgIG9yIGB1bmRlZmluZWRgXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgTiAtPSAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBpZiAoIU4gJiYgbWVzc2FnZS5zZW5kUmVzcG9uc2UgJiYgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAoXG4gICAgICAgICAgKF9wb3J0ID0gdGhpcy5leHRQb3J0c1ttZXNzYWdlLmV4dGVuc2lvbklkXSkgfHxcbiAgICAgICAgICAoXG4gICAgICAgICAgICB0aGlzLnBvcnRNYXBbbWVzc2FnZS5jYXRlZ29yeV0gJiZcbiAgICAgICAgICAgIChfcG9ydCA9IHRoaXMucG9ydE1hcFttZXNzYWdlLmNhdGVnb3J5XVttZXNzYWdlLnBvcnRJZF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgY21kOiAncmVzcG9uc2UnLFxuICAgICAgICAgIHJlcUlkOiBtZXNzYWdlLnJlcUlkLFxuICAgICAgICAgIHJlc3VsdDogbWVzc2FnZS5icm9hZGNhc3QgPyByZXN1bHRzIDogcmVzdWx0c1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtZXNzYWdlLmV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgcmVzcG9uc2UuZXh0ZW5zaW9uSWQgPSBteUlkO1xuICAgICAgICB9XG4gICAgICAgIF9wb3J0LnBvcnQucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07IC8vIC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gbWFpbiBtZXNzYWdlIHByb2Nlc3Npbmc6XG4gIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5jbWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1lc3NhZ2UuY21kID09PSAnc2V0TmFtZScpIHtcbiAgICB0aGlzLmlkID0gbWVzc2FnZS5uYW1lO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGhpcy5pZCA9PT0gJ2JnJykge1xuICAgIC8vIGJhY2tncm91bmRcbiAgICBpZiAobWVzc2FnZS5jbWQgPT09ICdyZXF1ZXN0Jykge1xuICAgICAgY29uc3QgdGFyZ2V0UG9ydHMgPSB0aGlzLnNlbGVjdFRhcmdldHMoXG4gICAgICAgIGZhbHNlLCBtZXNzYWdlLnRhYklkLCBtZXNzYWdlLmNvbnRleHRzLCBtZXNzYWdlLmNhdGVnb3J5LCBtZXNzYWdlLnBvcnRJZFxuICAgICAgKTtcbiAgICAgIGxldCByZXNwb25zZXNOZWVkZWQgPSB0YXJnZXRQb3J0cy5sZW5ndGg7XG4gICAgICBpZiAoKG1lc3NhZ2UudGFiSWQgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAgKCFtZXNzYWdlLmNvbnRleHRzIHx8IChtZXNzYWdlLmNvbnRleHRzLmluZGV4T2YoJ2JnJykgIT09IC0xKSkpIHtcbiAgICAgICAgLy8gd2UgYXJlIGFsc28gaW50ZXJlc3RlZCBpbiByZXNwb25zZSBmcm9tIGJhY2tncm91bmQgaXRzZWxmXG4gICAgICAgIGlmICggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAgIChfcmVmID0gdGhpcy5oYW5kbGVyc1ttZXNzYWdlLmNtZE5hbWVdKSAmJlxuICAgICAgICAgICh0eXBlb2YgX3JlZiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgX2xvY2FsSGFuZGxlciA9IF9yZWY7XG4gICAgICAgICAgcmVzcG9uc2VzTmVlZGVkICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcmVzcG9uc2VzTmVlZGVkKSB7XG4gICAgICAgIC8vIG5vIG9uZSB0byBhbnN3ZXIgdGhhdCBub3dcbiAgICAgICAgaWYgKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgICAgbWVzc2FnZS5zZW5kUmVzcG9uc2UgJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICAoX3BvcnQgPSB0aGlzLmV4dFBvcnRzW21lc3NhZ2UuZXh0ZW5zaW9uSWRdKSB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICB0aGlzLnBvcnRNYXBbbWVzc2FnZS5jYXRlZ29yeV0gJiZcbiAgICAgICAgICAgICAgKF9wb3J0ID0gdGhpcy5wb3J0TWFwW21lc3NhZ2UuY2F0ZWdvcnldW21lc3NhZ2UucG9ydElkXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgY21kOiAncmVzcG9uc2UnLFxuICAgICAgICAgICAgcmVxSWQ6IG1lc3NhZ2UucmVxSWQsXG4gICAgICAgICAgICByZXN1bHRWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6IG1lc3NhZ2UuYnJvYWRjYXN0ID8gW10gOiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChtZXNzYWdlLmV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgICByZXNwb25zZS5leHRlbnNpb25JZCA9IHRoaXMucnVudGltZS5pZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3BvcnQucG9ydC5wb3N0TWVzc2FnZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNvbWUgcmVzcG9uc2VzIG5lZWRlZFxuICAgICAgICBjb25zdCBjYiA9IGNyZWF0ZUNiRm9yTW9yZVJlc3VsdHMuY2FsbCh0aGlzLCByZXNwb25zZXNOZWVkZWQpO1xuICAgICAgICAvLyBzZW5kIHRvIHRhcmdldCBwb3J0c1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0UG9ydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfcG9ydCA9IHRhcmdldFBvcnRzW2ldO1xuICAgICAgICAgIF9wb3J0LnBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgY21kOiAncmVxdWVzdCcsXG4gICAgICAgICAgICBjbWROYW1lOiBtZXNzYWdlLmNtZE5hbWUsXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2U6IHRydWUsXG4gICAgICAgICAgICBhcmdzOiBtZXNzYWdlLmFyZ3MsXG4gICAgICAgICAgICByZXFJZDogdGhpcy5yZXF1ZXN0SWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gfHwgW107XG4gICAgICAgICAgX2Fyci5wdXNoKHsgaWQ6IHRoaXMucmVxdWVzdElkLCBjYiB9KTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdSZXFzW19wb3J0LmlkXSA9IF9hcnI7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgbG9jYWwgcmVzcG9uc2UgKGlmIGJhY2tncm91bmQgY2FuIHByb3ZpZGUgaXQpXG4gICAgICAgIGlmIChfbG9jYWxIYW5kbGVyKSB7XG4gICAgICAgICAgbWVzc2FnZS5hcmdzLnB1c2goY2IpO1xuICAgICAgICAgIF9sb2NhbEhhbmRsZXIuYXBwbHkodGhpcy5oYW5kbGVycywgbWVzc2FnZS5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jbWQgPT09ICdyZXNwb25zZScpIHtcbiAgICAgIGNvbnN0IGlkID0gbWVzc2FnZS5wb3J0SWQgfHwgbWVzc2FnZS5leHRlbnNpb25JZDtcbiAgICAgIF9hcnIgPSB0aGlzLnBlbmRpbmdSZXFzW2lkXTsgIC8vIHdhcm5pbmc6IElFIGNyZWF0ZXMgYSBjb3B5IGhlcmUhXG4gICAgICBpZiAoX2Fycikge1xuICAgICAgICAvLyBzb21lIHJlc3VsdHMgZnJvbSBnaXZlbiBwb3J0IGV4cGVjdGVkLCBmaW5kIHRoZSBjYWxsYmFjayBmb3IgcmVxSWRcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIHdoaWxlICgoaSA8IF9hcnIubGVuZ3RoKSAmJiAoX2FycltpXS5pZCAhPT0gbWVzc2FnZS5yZXFJZCkpIHsgaSArPSAxOyB9XG4gICAgICAgIGlmIChpIDwgX2Fyci5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBjYWxsYmFjayBmb3VuZFxuICAgICAgICAgIF9hcnJbaV0uY2IobWVzc2FnZS5yZXN1bHQsIG1lc3NhZ2UucmVzdWx0VmFsaWQpO1xuICAgICAgICAgIHRoaXMucGVuZGluZ1JlcXNbaWRdLnNwbGljZShpLCAxKTsgICAvLyBuZWVkIHRvIHVzZSBvcmlnIGFycmF5IChJRSBwcm9ibGVtKVxuICAgICAgICAgIGlmICghdGhpcy5wZW5kaW5nUmVxc1tpZF0ubGVuZ3RoKSB7ICAvLyAuLi4gc2FtZSBoZXJlXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nUmVxc1tpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3VwZGF0ZVRhYklkJykge1xuICAgICAgY29uc3QgY29udGV4dCA9IG1lc3NhZ2UuY29udGV4dDtcbiAgICAgIGNvbnN0IHBvcnRJZCA9IG1lc3NhZ2UucG9ydElkO1xuICAgICAgaWYgKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAgIChfcG9ydCA9IHRoaXMucG9ydE1hcFtjb250ZXh0XSkgJiZcbiAgICAgICAgKF9wb3J0ID0gX3BvcnRbcG9ydElkXSlcbiAgICAgICkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25EaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVycy5vbkRpc2Nvbm5lY3QoY29udGV4dCwgX3BvcnQudGFiSWQpO1xuICAgICAgICB9XG4gICAgICAgIF9wb3J0LnRhYklkID0gbWVzc2FnZS50YWJJZDtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzLm9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuaGFuZGxlcnMub25Db25uZWN0KGNvbnRleHQsIF9wb3J0LnRhYklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChtZXNzYWdlLmNtZCA9PT0gJ3JlcXVlc3QnKSB7IC8vIG5vbi1iYWNrZ3JvdW5kXG4gICAgX2xvY2FsSGFuZGxlciA9IHRoaXMuaGFuZGxlcnNbbWVzc2FnZS5jbWROYW1lXTtcbiAgICBpZiAodHlwZW9mIF9sb2NhbEhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChtZXNzYWdlLnNlbmRSZXNwb25zZSkge1xuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGNtZDogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICBwb3J0SWQ6IHRoaXMuaWQsXG4gICAgICAgICAgcmVxSWQ6IG1lc3NhZ2UucmVxSWQsXG4gICAgICAgICAgcmVzdWx0VmFsaWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFyZ3MucHVzaChzZW5kUmVzdWx0Q2IuYmluZCh0aGlzKSk7XG4gICAgICBfbG9jYWxIYW5kbGVyLmFwcGx5KHRoaXMuaGFuZGxlcnMsIG1lc3NhZ2UuYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1lc3NhZ2UuY21kID09PSAncmVzcG9uc2UnKSB7XG4gICAgaWYgKHRoaXMuY2JUYWJsZVttZXNzYWdlLnJlcUlkXSkge1xuICAgICAgdGhpcy5jYlRhYmxlW21lc3NhZ2UucmVxSWRdKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgIGRlbGV0ZSB0aGlzLmNiVGFibGVbbWVzc2FnZS5yZXFJZF07XG4gICAgfVxuICB9XG59O1xuXG4vLyBpbnZva2UgY2FsbGJhY2tzIGZvciBwZW5kaW5nIHJlcXVlc3RzIGFuZCByZW1vdmUgdGhlIHJlcXVlc3RzIGZyb20gdGhlIHN0cnVjdHVyZVxuTWVzc2FnaW5nLnByb3RvdHlwZS5jbG9zZVBlbmRpbmdSZXFzID0gZnVuY3Rpb24gY2xvc2VQZW5kaW5nUmVxcyhwb3J0SWQpIHtcbiAgbGV0IGFycjtcbiAgaWYgKGFyciA9IHRoaXMucGVuZGluZ1JlcXNbcG9ydElkXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFycltpXS5jYih1bmRlZmluZWQsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMucGVuZGluZ1JlcXNbcG9ydElkXTtcbiAgfVxufTtcblxuTWVzc2FnaW5nLnByb3RvdHlwZS5yZWdpc3RlckV4dGVybmFsQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIHJlZ0V4dGVybmFsQ29ubmVjdGlvbihleHRlbnNpb25JZCwgcG9ydCkge1xuICB0aGlzLmV4dFBvcnRzW2V4dGVuc2lvbklkXSA9IHsgcG9ydCB9O1xuXG4gIGxldCBvbkN1c3RvbU1zZztcbiAgbGV0IG9uRGlzY29ubmVjdDtcblxuICAvLyBvbiBkaXNjb25uZWN0OiByZW1vdmUgbGlzdGVuZXJzIGFuZCBkZWxldGUgZnJvbSBwb3J0IG1hcFxuICBmdW5jdGlvbiBvbkRpc2Nvbm5lY3RGbigpIHtcbiAgICAvLyBsaXN0ZW5lcnM6XG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QucmVtb3ZlTGlzdGVuZXIob25EaXNjb25uZWN0KTtcbiAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihvbkN1c3RvbU1zZyk7XG4gICAgZGVsZXRlIHRoaXMuZXh0UG9ydHNbZXh0ZW5zaW9uSWRdO1xuICAgIC8vIGNsb3NlIGFsbCBwZW5kaW5nIHJlcXVlc3RzOlxuICAgIHRoaXMuY2xvc2VQZW5kaW5nUmVxcyhleHRlbnNpb25JZCk7XG4gICAgLy8gaW52b2tlIGN1c3RvbSBvbkRpc2Nvbm5lY3QgaGFuZGxlclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVycy5vbkV4dGVuc2lvbkRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25EaXNjb25uZWN0KGV4dGVuc2lvbklkKTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIHBvcnQgaGFuZGxlcnNcbiAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25DdXN0b21Nc2cgPSB0aGlzLm9uQ3VzdG9tTXNnLmJpbmQodGhpcykpO1xuICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihvbkRpc2Nvbm5lY3QgPSBvbkRpc2Nvbm5lY3RGbi5iaW5kKHRoaXMpKTtcbiAgLy8gaW52b2tlIGN1c3RvbSBvbkNvbm5lY3QgaGFuZGxlclxuICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25FeHRlbnNpb25Db25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVycy5vbkV4dGVuc2lvbkNvbm5lY3QoZXh0ZW5zaW9uSWQpO1xuICB9XG59O1xuXG5NZXNzYWdpbmcucHJvdG90eXBlLm9uQ29ubmVjdEV4dGVybmFsID0gZnVuY3Rpb24gb25Db25uZWN0RXh0ZXJuYWwocG9ydCkge1xuICBpZiAodGhpcy5leHRQb3J0c1twb3J0LnNlbmRlci5pZF0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlZ2lzdGVyRXh0ZXJuYWxDb25uZWN0aW9uKHBvcnQuc2VuZGVyLmlkLCBwb3J0KTtcbn07XG5cbi8vIGJhY2tyb3VuZCBvbkNvbm5lY3QgaGFuZGxlclxuTWVzc2FnaW5nLnByb3RvdHlwZS5vbkNvbm5lY3QgPSBmdW5jdGlvbiBvbkNvbm5lY3QocG9ydCkge1xuICAvLyBhZGQgdG8gcG9ydCBtYXBcbiAgY29uc3QgY2F0ZWdOYW1lID0gcG9ydC5uYW1lIHx8ICd1bmtub3duJztcbiAgY29uc3QgcG9ydElkID0gYCR7Y2F0ZWdOYW1lfS0ke3RoaXMudUlkfWA7XG4gIHRoaXMudUlkICs9IDE7XG4gIGxldCBwb3J0Q2F0ZWcgPSB0aGlzLnBvcnRNYXBbY2F0ZWdOYW1lXSB8fCB7fTtcbiAgbGV0IHRhYklkID0gKHBvcnQuc2VuZGVyICYmIHBvcnQuc2VuZGVyLnRhYiAmJiBwb3J0LnNlbmRlci50YWIuaWQpIHx8IEluZmluaXR5O1xuICBwb3J0Q2F0ZWdbcG9ydElkXSA9IHsgcG9ydCwgdGFiSWQgfTtcbiAgdGhpcy5wb3J0TWFwW2NhdGVnTmFtZV0gPSBwb3J0Q2F0ZWc7XG4gIGxldCBvbkN1c3RvbU1zZztcbiAgbGV0IG9uRGlzY29ubmVjdDtcbiAgLy8gb24gZGlzY29ubmVjdDogcmVtb3ZlIGxpc3RlbmVycyBhbmQgZGVsZXRlIGZyb20gcG9ydCBtYXBcbiAgZnVuY3Rpb24gb25EaXNjb25uZWN0Rm4oKSB7XG4gICAgLy8gbGlzdGVuZXJzOlxuICAgIHBvcnQub25EaXNjb25uZWN0LnJlbW92ZUxpc3RlbmVyKG9uRGlzY29ubmVjdCk7XG4gICAgcG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIob25DdXN0b21Nc2cpO1xuICAgIC8vIHBvcnQgbWFwOlxuICAgIHBvcnRDYXRlZyA9IHRoaXMucG9ydE1hcFtjYXRlZ05hbWVdO1xuICAgIGxldCBfcG9ydDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGlmIChwb3J0Q2F0ZWcgJiYgKF9wb3J0ID0gcG9ydENhdGVnW3BvcnRJZF0pKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgICAgIHRhYklkID0gX3BvcnQudGFiSWQ7XG4gICAgICBkZWxldGUgcG9ydENhdGVnW3BvcnRJZF07XG4gICAgfVxuICAgIC8vIGNsb3NlIGFsbCBwZW5kaW5nIHJlcXVlc3RzOlxuICAgIHRoaXMuY2xvc2VQZW5kaW5nUmVxcyhwb3J0SWQpO1xuICAgIC8vIGludm9rZSBjdXN0b20gb25EaXNjb25uZWN0IGhhbmRsZXJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25EaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLm9uRGlzY29ubmVjdChjYXRlZ05hbWUsIHRhYklkKTtcbiAgICB9XG4gIH1cbiAgLy8gaW5zdGFsbCBwb3J0IGhhbmRsZXJzXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uQ3VzdG9tTXNnID0gdGhpcy5vbkN1c3RvbU1zZy5iaW5kKHRoaXMpKTtcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIob25EaXNjb25uZWN0ID0gb25EaXNjb25uZWN0Rm4uYmluZCh0aGlzKSk7XG4gIC8vIGFzayBjb3VudGVyIHBhcnQgdG8gc2V0IGl0cyBpZFxuICBwb3J0LnBvc3RNZXNzYWdlKHsgY21kOiAnc2V0TmFtZScsIG5hbWU6IHBvcnRJZCB9KTtcbiAgLy8gaW52b2tlIGN1c3RvbSBvbkNvbm5lY3QgaGFuZGxlclxuICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnMub25Db25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVycy5vbkNvbm5lY3QoY2F0ZWdOYW1lLCB0YWJJZCk7XG4gIH1cbn07XG5cbi8vIGNyZWF0ZSBtYWluIG1lc3NhZ2luZyBvYmplY3QsIGhpZGluZyBhbGwgdGhlIGNvbXBsZXhpdHkgZnJvbSB0aGUgdXNlclxuLy8gaXQgdGFrZXMgbmFtZSBvZiBsb2NhbCBjb250ZXh0IGBteUNvbnRleHROYW1lYFxuLy9cbi8vIHRoZSByZXR1cm5lZCBvYmplY3QgaGFzIHR3byBtYWluIGZ1bmN0aW9uczogY21kIGFuZCBiY2FzdFxuLy9cbi8vIHRoZXkgYmVoYXZlIHRoZSBzYW1lIHdheSBhbmQgaGF2ZSBhbHNvIHRoZSBzYW1lIGFyZ3VtZW50cywgdGhlIG9ubHlcbi8vIGRpZmZlcmVuY2UgaXMgdGhhdCB0byBgY21kYCBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIGlzIGludm9rZWQgd2l0aCBvbmx5IG9uZVxuLy8gcmVzcG9uc2UgdmFsdWUgZnJvbSBhbGwgcG9zc2libGUgcmVzcG9uc2VzLCB3aGlsZSB0byBgYmNhc3RgIGNhbGxiYWNrIChpZlxuLy8gcHJvdmlkZWQpIHdlIHBhc3MgYXJyYXkgd2l0aCBhbGwgdmFsaWQgcmVzcG9uc2VzIHdlIGNvbGxlY3RlZCB3aGlsZVxuLy8gYnJvYWRjYXN0aW5nIGdpdmVuIHJlcXVlc3QuXG4vL1xuLy8gZnVuY3Rpb25zIGFyZ3VtZW50czpcbi8vXG4vLyAob3B0aW9uYWwpIFtpbnRdIHRhYklkOiBpZiBub3Qgc3BlY2lmaWVkLCBicm9hZGNhc3RlZCB0byBhbGwgdGFicyxcbi8vICAgICAgaWYgc3BlY2lmaWVkLCBzZW50IG9ubHkgdG8gZ2l2ZW4gdGFiLCBjYW4gdXNlIFNBTUVfVEFCIHZhbHVlIGhlcmVcbi8vXG4vLyAob3B0aW9uYWwpIFthcnJheV0gY29udGV4dHM6IGlmIG5vdCBzcGVjaWZpZWQsIGJyb2FkY2FzdGVkIHRvIGFsbCBjb250ZXh0cyxcbi8vICAgICAgaWYgc3BlY2lmaWVkLCBzZW50IG9ubHkgdG8gbGlzdGVkIGNvbnRleHRzXG4vL1xuLy8gKHJlcXVpcmVkKSBbc3RyaW5nXSBjb21tYW5kOiBuYW1lIG9mIHRoZSBjb21tYW5kIHRvIGJlIGV4ZWN1dGVkXG4vL1xuLy8gKG9wdGlvbmFsKSBbYW55IHR5cGVdIGFyZ3VtZW50czogYW55IG51bWJlciBvZiBhcnVtZW50cyB0aGF0IGZvbGxvdyBjb21tYW5kXG4vLyAgICAgIG5hbWUgYXJlIHBhc3NlZCB0byBleGVjdXRpb24gaGFuZGxlciB3aGVuIGl0IGlzIGludm9rZWRcbi8vXG4vLyAob3B0aW9uYWwpIFtmdW5jdGlvbihyZXN1bHQpXSBjYWxsYmFjazogaWYgcHJvdmlkZWQgKGFzIGxhc3QgYXJndW1lbnQgdG9cbi8vICAgICAgYGNtZGAgb3IgYGJjYXN0YCkgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2hlbiB0aGUgcmVzcG9uc2Uocylcbi8vICAgICAgaXMvYXJlIHJlY2VpdmVkXG4vL1xuLy8gdGhlIGZ1bmN0aW9ucyByZXR1cm4gYHRydWVgIGlmIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsXG4vLyAoaS5lLiBpZiBhbGwgdGhlIGFyZ3VtZW50cyB3ZXJlIHJlY29nbml6ZWQgcHJvcGVybHkpLCBvdGhlcndpc2UgaXQgcmV0dXJuc1xuLy8gYGZhbHNlYC5cbi8vXG4vLyBmb3Igbm9uLWJnIGNvbnRleHRzIHRoZXJlIGlzIG9uZSBtb3JlIGZ1bmN0aW9uIGluIHRoZSBtZXNzYWdpbmcgb2JqZWN0XG4vLyBhdmFpbGFibGU6ICdiZycgZnVuY3Rpb24sIHRoYXQgaXMgdGhlIHNhbWUgYXMgJ2NtZCcsIGJ1dCBwcmVwZW5kcyB0aGUgbGlzdCBvZlxuLy8gYXJndW1lbnRzIHdpdGggWydiZyddLCBzbyB0aGF0IHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSB0byB3cml0ZSBpdCB3aGVuXG4vLyByZXF1ZXN0aW5nIHNvbWUgaW5mbyBpbiBub24tYmcgY29udGV4dCBmcm9tIGJhY2tncm91bmQuXG4vL1xuTWVzc2FnaW5nLnByb3RvdHlwZS5jcmVhdGVNc2dPYmplY3QgPSBmdW5jdGlvbiBjcmVhdGVNc2dPYmplY3QobXlDb250ZXh0TmFtZSkge1xuICAvLyBnZW5lcmF0b3IgZm9yIGZ1bmN0aW9ucyBgY21kYCBhbmQgYGJjYXN0YFxuICBmdW5jdGlvbiBjcmVhdGVGbihicm9hZGNhc3QpIHtcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIGludm9raW5nIHByb3ZpZGVkIGNhbGxiYWNrIGluIGJhY2tncm91bmRcbiAgICBmdW5jdGlvbiBjcmVhdGVDYkZvck1vcmVSZXN1bHRzKE4sIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICByZXR1cm4gKHJlc3VsdCwgcmVzdWx0VmFsaWQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdFZhbGlkKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgTiAtPSAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGlmICgoTiA8PSAwKSAmJiBjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGJyb2FkY2FzdCA/IHJlc3VsdHMgOiByZXN1bHRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZ2VuZXJhdGVkIGZ1bmN0aW9uOlxuICAgIHJldHVybiBmdW5jdGlvbiBfbXNnKCkge1xuICAgICAgLy8gcHJvY2VzcyBhcmd1bWVudHM6XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gYXQgbGVhc3QgY29tbWFuZCBuYW1lIG11c3QgYmUgcHJvdmlkZWRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICAgIC8vIHNpbmNlIHdlIGxlYXJuIG91ciBpZCBvZiBub24tYmFja2dyb3VuZCBjb250ZXh0IGluIGFzeW5jaHJvbm91c1xuICAgICAgICAvLyBtZXNzYWdlLCB3ZSBtYXkgbmVlZCB0byB3YWl0IGZvciBpdC4uLlxuICAgICAgICBjb25zdCBfY3R4ID0gdGhpcztcbiAgICAgICAgY29uc3QgX2FyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBfbXNnLmFwcGx5KF9jdHgsIF9hcmdzKTsgfSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbGV0IHRhYklkO1xuICAgICAgbGV0IGNvbnRleHRzO1xuICAgICAgbGV0IGNtZE5hbWU7XG4gICAgICBjb25zdCBhcmdzID0gW107XG4gICAgICBsZXQgY2FsbGJhY2s7XG4gICAgICBsZXQgY3VyQXJnID0gMDtcbiAgICAgIGxldCBhcmdzTGltaXQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBjYWxsYmFjazpcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2FyZ3NMaW1pdCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3NMaW1pdCAtPSAxO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1thcmdzTGltaXRdO1xuICAgICAgfVxuICAgICAgLy8gb3RoZXIgYXJndW1lbnRzOlxuICAgICAgd2hpbGUgKGN1ckFyZyA8IGFyZ3NMaW1pdCkge1xuICAgICAgICBjb25zdCBhcmcgPSBhcmd1bWVudHNbY3VyQXJnXTtcbiAgICAgICAgY3VyQXJnICs9IDE7XG4gICAgICAgIGlmIChjbWROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBoYXZlIGNvbW1hbmQgbmFtZSB5ZXQuLi5cbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiAoYXJnKSkge1xuICAgICAgICAgICAgLy8gdGFiIGlkXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICBpZiAodGFiSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gd2UgYWxyZWFkeSBoYXZlIHRhYiBpZCAtLT4gaW52YWxpZCBhcmdzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFiSWQgPSBhcmc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY29udGV4dHMgIChhcnJheSlcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgIGlmICgodHlwZW9mIChhcmcubGVuZ3RoKSA9PT0gJ3VuZGVmaW5lZCcpIHx8IChjb250ZXh0cyAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gd2UgZWl0aGVyIGhhdmUgaXQsIG9yIGl0IGlzIG5vdCBhcnJheS1saWtlIG9iamVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHRzID0gYXJnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNvbW1hbmQgbmFtZVxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgY21kTmFtZSA9IGFyZztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBhbnl0aGluZyBlbHNlIC0tPiBlcnJvclxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNtZE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGNvbW1hbmQgbmFtZSBpcyBtYW5kYXRvcnlcbiAgICAgIH1cbiAgICAgIC8vIHN0b3JlIHRoZSBjYWxsYmFjayBhbmQgaXNzdWUgdGhlIHJlcXVlc3QgKG1lc3NhZ2UpXG4gICAgICBpZiAoJ2JnJyA9PT0gdGhpcy5pZCkge1xuICAgICAgICBjb25zdCB0YXJnZXRQb3J0cyA9IHRoaXMuc2VsZWN0VGFyZ2V0cyh0cnVlLCB0YWJJZCwgY29udGV4dHMpO1xuICAgICAgICBjb25zdCByZXNwb25zZXNOZWVkZWQgPSB0YXJnZXRQb3J0cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNiID0gY3JlYXRlQ2JGb3JNb3JlUmVzdWx0cy5jYWxsKHRoaXMsIHJlc3BvbnNlc05lZWRlZCwgY2FsbGJhY2spO1xuICAgICAgICAvLyBzZW5kIHRvIHRhcmdldCBwb3J0c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldFBvcnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgX3BvcnQgPSB0YXJnZXRQb3J0c1tpXTtcbiAgICAgICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGNtZDogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgY21kTmFtZSxcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZTogdHJ1ZSxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICByZXFJZDogdGhpcy5yZXF1ZXN0SWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBfYXJyID0gdGhpcy5wZW5kaW5nUmVxc1tfcG9ydC5pZF0gfHwgW107XG4gICAgICAgICAgX2Fyci5wdXNoKHsgaWQ6IHRoaXMucmVxdWVzdElkLCBjYiB9KTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdSZXFzW19wb3J0LmlkXSA9IF9hcnI7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldFBvcnRzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIG5vIG9uZSB0byByZXNwb25kLCBpbnZva2UgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgcmlnaHQgYXdheVxuICAgICAgICAgIGNiKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy5jYlRhYmxlW3RoaXMucmVxdWVzdElkXSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgY21kOiAncmVxdWVzdCcsXG4gICAgICAgICAgY21kTmFtZSxcbiAgICAgICAgICByZXFJZDogdGhpcy5yZXF1ZXN0SWQsXG4gICAgICAgICAgc2VuZFJlc3BvbnNlOiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgYnJvYWRjYXN0LFxuICAgICAgICAgIGNhdGVnb3J5OiBteUNvbnRleHROYW1lLFxuICAgICAgICAgIHBvcnRJZDogdGhpcy5pZCxcbiAgICAgICAgICB0YWJJZCxcbiAgICAgICAgICBjb250ZXh0cyxcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZCArPSAxO1xuICAgICAgfVxuICAgICAgLy8gZXZlcnl0aGluZyB3ZW50IE9LXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDbWRFeHRGbigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gX21zZyhleHRlbnNpb25JZCwgY29tbWFuZE5hbWUpIHtcbiAgICAgIC8vIHByb2Nlc3MgYXJndW1lbnRzOlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIC8vIGF0IGxlYXN0IGV4dGVuc2lvbiBpZCBhbmQgY29tbWFuZCBuYW1lIG11c3QgYmUgcHJvdmlkZWRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pZCAhPT0gJ2JnJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYmFja2dyb3VuZCBjYW4gc2VuZCBtZXNzYWdlc3MgdG8gYW5vdGhlciBleHRlbnNpb25zXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgaWYgKHR5cGVvZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9wb3J0ID0gdGhpcy5leHRQb3J0c1tleHRlbnNpb25JZF07XG4gICAgICBpZiAoIV9wb3J0KSB7XG4gICAgICAgIC8vIG5vIG9uZSB0byByZXNwb25kLCBpbnZva2UgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgcmlnaHQgYXdheVxuICAgICAgICBpZiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBfcG9ydC5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY21kOiAncmVxdWVzdCcsXG4gICAgICAgIGNtZE5hbWU6IGNvbW1hbmROYW1lLFxuICAgICAgICBzZW5kUmVzcG9uc2U6IHRydWUsXG4gICAgICAgIGFyZ3MsXG4gICAgICAgIHJlcUlkOiB0aGlzLnJlcXVlc3RJZCxcbiAgICAgICAgZXh0ZW5zaW9uSWQ6IHRoaXMucnVudGltZS5pZFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IF9hcnIgPSB0aGlzLnBlbmRpbmdSZXFzW2V4dGVuc2lvbklkXSB8fCBbXTtcbiAgICAgIF9hcnIucHVzaCh7IGlkOiB0aGlzLnJlcXVlc3RJZCxcbiAgICAgICAgY2IocmVzdWx0LyogLCByZXN1bHRWYWxpZC8qKi8pIHsgLy8gaWdub3JlICdyZXN1bHRWYWxpZCcgYmVjYXVzZSBpdCBpcyBub3QgYXBwbGljYWJsZSBoZXJlXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrKHJlc3VsdCk7IH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnBlbmRpbmdSZXFzW2V4dGVuc2lvbklkXSA9IF9hcnI7XG4gICAgICB0aGlzLnJlcXVlc3RJZCArPSAxO1xuXG4gICAgICAvLyBldmVyeXRoaW5nIHdlbnQgT0tcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIHJldHVybmVkIG9iamVjdDpcbiAgY29uc3QgcmVzID0ge1xuICAgIGNtZDogY3JlYXRlRm4uY2FsbCh0aGlzLCBmYWxzZSksXG4gICAgYmNhc3Q6IGNyZWF0ZUZuLmNhbGwodGhpcywgdHJ1ZSlcbiAgfTtcblxuICAvLyBmb3IgbW9yZSBjb252ZW5pZW5jZSAod2hlbiBzZW5kaW5nIHJlcXVlc3QgZnJvbSBub24tYmcgdG8gYmFja2dyb3VuZCBvbmx5KVxuICAvLyBhZGRpbmcgJ2JnKDxjbWROYW1lPiwgLi4uKScgZnVuY3Rpb24sIHRoYXQgaXMgZXF1aXZhbGVudCB0byBcImNtZChbJ2JnJ10sIDxjbWROYW1lPiwgLi4uKVwiXG4gIGlmIChteUNvbnRleHROYW1lICE9PSAnYmcnKSB7XG4gICAgcmVzLmJnID0gZnVuY3Rpb24gYmcoKSB7XG4gICAgICBpZiAoMCA9PT0gYXJndW1lbnRzLmxlbmd0aCB8fCAnc3RyaW5nJyAhPT0gdHlwZW9mIChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbWydiZyddXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7IGFyZ3MucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgICByZXR1cm4gcmVzLmNtZCguLi5hcmdzKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJlcy5jb25uZWN0RXh0ID0gZnVuY3Rpb24gY29ubmVjdEV4dChpZCkge1xuICAgICAgaWYgKHRoaXMuZXh0UG9ydHNbaWRdKSB7IC8vIGFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9ydCA9IHRoaXMucnVudGltZS5jb25uZWN0KGlkKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJFeHRlcm5hbENvbm5lY3Rpb24oaWQsIHBvcnQpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgcmVzLmNtZEV4dCA9IGNyZWF0ZUNtZEV4dEZuLmNhbGwodGhpcyk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLy8gaW5pdCBmdW5jdGlvbiwgZXhwb3J0ZWRcbi8vXG4vLyB0YWtlcyBtYW5kYXRvcnkgYGNvbnRleHRgLCBpdCBpcyBhbnkgc3RyaW5nIChlLmcuICdjdCcsICdwb3B1cCcsIC4uLiksXG4vLyBvbmx5IG9uZSB2YWx1ZSBpcyBvZiBzcGVjaWFsIG1lYW5pbmc6ICdiZycgLi4uIG11c3QgYmUgdXNlZCBmb3IgaW5pdGlhbGl6aW5nXG4vLyBvZiB0aGUgYmFja2dyb3VuZCBwYXJ0LCBhbnkgb3RoZXIgY29udGV4dCBpcyBjb25zaWRlcmVkIG5vbi1iYWNrZ3JvdW5kXG4vL1xuLy8gb3B0aW9uYWxseSB0YWtlcyBgaGFuZGxlcnNgLCB3aGljaCBpcyBvYmplY3QgbWFwcGluZyBmdW5jdGlvbiBuYW1lcyB0b1xuLy8gZnVuY3Rpb24gY29kZXMsIHRoYXQgaXMgdXNlZCBhcyBmdW5jdGlvbiBsb29rdXAgdGFibGUuIGVhY2ggbWVzc2FnZSBoYW5kbGluZ1xuLy8gZnVuY3Rpb24gTVVTVCB0YWtlIGNhbGxiYWNrIGFzIGl0cyBsYXN0IGFyZ3VtZW50IGFuZCBpbnZva2UgdGhpcyBjYWxsYmFja1xuLy8gd2hlbiB0aGUgbWVzc2FnZSBoYW5kbGVyIGlzIGRvbmUgd2l0aCBwcm9jZXNzaW5nIG9mIHRoZSBtZXNzYWdlIChyZWdhcmRsZXNzXG4vLyBpZiBzeW5jaHJvbm91cyBvciBhc3luY2hyb25vdXMpLiB0aGUgY2FsbGJhY2sgdGFrZXMgb25lIGFyZ3VtZW50LCB0aGlzXG4vLyBhcmd1bWVudCBpcyB0cmVhdGVkIGFzIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVzc2FnZSBoYW5kbGVyLlxuLy9cbi8vIGZvciBiYWNrZ3JvdW5kIChgY29udGV4dGAgaXMgJ2JnJyk6IGluc3RhbGxzIG9uQ29ubmVjdCBsaXN0ZW5lclxuLy8gZm9yIG5vbi1iYWNrZ3JvdW5kIGNvbnRleHQgaXQgY29ubmVjdHMgdG8gYmFja2dyb3VuZFxuLy9cbk1lc3NhZ2luZy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQoY29udGV4dCwgaGFuZGxlcnMpIHtcbiAgLy8gc2V0IG1lc3NhZ2UgaGFuZGxlcnMgKG9wdGlvbmFsKVxuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnMgfHwge307XG5cbiAgLy8gbGlzdGVuZXIgcmVmZXJlbmNlc1xuICBsZXQgb25EaXNjb25uZWN0O1xuICBsZXQgb25DdXN0b21Nc2c7XG5cbiAgLy8gaGVscGVyIGZ1bmN0aW9uOlxuICBmdW5jdGlvbiBvbkRpc2Nvbm5lY3RGbigpIHtcbiAgICB0aGlzLnBvcnQub25EaXNjb25uZWN0LnJlbW92ZUxpc3RlbmVyKG9uRGlzY29ubmVjdCk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihvbkN1c3RvbU1zZyk7XG4gIH1cblxuICBsZXQgdGFiSWQ7XG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYklkKCkge1xuICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgc2V0VGltZW91dCh1cGRhdGVUYWJJZC5iaW5kKHRoaXMpLCAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgIGNtZDogJ3VwZGF0ZVRhYklkJyxcbiAgICAgIGNvbnRleHQsXG4gICAgICBwb3J0SWQ6IHRoaXMuaWQsXG4gICAgICB0YWJJZFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbnRleHQgPT09ICdiZycpIHtcbiAgICAvLyBiYWNrZ3JvdW5kXG4gICAgdGhpcy5pZCA9ICdiZyc7XG4gICAgdGhpcy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcih0aGlzLm9uQ29ubmVjdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJ1bnRpbWUub25Db25uZWN0RXh0ZXJuYWwuYWRkTGlzdGVuZXIodGhpcy5vbkNvbm5lY3RFeHRlcm5hbC5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhbnl0aGluZyBlbHNlIHRoYW4gYmFja2dyb3VuZFxuICAgIHRoaXMucG9ydCA9IHRoaXMucnVudGltZS5jb25uZWN0KHsgbmFtZTogY29udGV4dCB9KTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uQ3VzdG9tTXNnID0gdGhpcy5vbkN1c3RvbU1zZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKG9uRGlzY29ubmVjdCA9IG9uRGlzY29ubmVjdEZuLmJpbmQodGhpcykpO1xuICAgIC8vIHRhYklkIHVwZGF0ZSBmb3IgZGV2ZWxvcGVyIHRvb2xzXG4gICAgLy8gdW5mb3J0dW5hdGVseSB3ZSBuZWVkIGRlZGljYXRlZCBuYW1lIGZvciBkZXZlbG9wZXIgdG9vbHMgY29udGV4dCwgZHVlIHRvXG4gICAgLy8gdGhpcyBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNTYxMzNcbiAgICAvLyAuLi4gd2UgYXJlIG5vdCBhYmxlIHRvIHRlbGwgaWYgd2UgYXJlIGluIERUIGNvbnRleHQgb3RoZXJ3aXNlIDooXG4gICAgaWYgKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgICAoY29udGV4dCA9PT0gJ2R0JykgJiYgdGhpcy5kZXZ0b29scyAmJlxuICAgICAgKHRhYklkID0gdGhpcy5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cpICYmXG4gICAgICAgICAodHlwZW9mICh0YWJJZCA9IHRhYklkLnRhYklkKSA9PT0gJ251bWJlcicpXG4gICAgKSB7XG4gICAgICB1cGRhdGVUYWJJZC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZU1zZ09iamVjdChjb250ZXh0KTtcbn07XG5cblxuLy8gc2luZ2xldG9uIHJlcHJlc2VudGluZyB0aGlzIG1vZHVsZVxuY29uc3Qgc2luZ2xldG9uID0gbmV3IE1lc3NhZ2luZygpO1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gaW5zdGFsbCBtZXRob2RzIHVzZWQgZm9yIHVuaXQgdGVzdHNcbmZ1bmN0aW9uIGluc3RhbGxVbml0VGVzdE1ldGhvZHModGFyZ2V0LCBkZWxlZ2F0ZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgLy8gc2V0dGVyc1xuICB0YXJnZXQuX19zZXRSdW50aW1lID0gKHJ0KSA9PiB7IGRlbGVnYXRlLnJ1bnRpbWUgPSBydDsgcmV0dXJuIHRhcmdldDsgfTtcbiAgdGFyZ2V0Ll9fc2V0RGV2VG9vbHMgPSAoZHQpID0+IHsgZGVsZWdhdGUuZGV2dG9vbHMgPSBkdDsgcmV0dXJuIHRhcmdldDsgfTtcbiAgLy8gZ2V0dGVyc1xuICB0YXJnZXQuX19nZXRJZCA9ICgpID0+IGRlbGVnYXRlLmlkO1xuICB0YXJnZXQuX19nZXRQb3J0ID0gKCkgPT4gZGVsZWdhdGUucG9ydDtcbiAgdGFyZ2V0Ll9fZ2V0UG9ydE1hcCA9ICgpID0+IGRlbGVnYXRlLnBvcnRNYXA7XG4gIHRhcmdldC5fX2dldEhhbmRsZXJzID0gKCkgPT4gZGVsZWdhdGUuaGFuZGxlcnM7XG4gIHRhcmdldC5fX2dldFBlbmRpbmdSZXFzID0gKCkgPT4gZGVsZWdhdGUucGVuZGluZ1JlcXM7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBzYW1lIHRhYiBpZFxuICBTQU1FX1RBQixcbiAgLy8gc2VlIGRlc2NyaXB0aW9uIGZvciBpbml0IGZ1bmN0aW9uIGFib3ZlXG4gIGluaXQ6IHNpbmdsZXRvbi5pbml0LmJpbmQoc2luZ2xldG9uKSxcbiAgLy8gLS0tIGZvciB1bml0IHRlc3RzIC0tLVxuICAvLyBhbGxvdyB1bml0IHRlc3Rpbmcgb2YgdGhlIG1haW4gbW9kdWxlOlxuICBfX2FsbG93VW5pdFRlc3RzKCkgeyBpbnN0YWxsVW5pdFRlc3RNZXRob2RzKHRoaXMsIHNpbmdsZXRvbik7IH0sXG4gIC8vIGNvbnRleHQgY2xvbmluZ1xuICBfX2NyZWF0ZUNsb25lKCkge1xuICAgIGNvbnN0IGNsb25lID0gbmV3IE1lc3NhZ2luZygpO1xuICAgIGNsb25lLlNBTUVfVEFCID0gU0FNRV9UQUI7XG4gICAgaW5zdGFsbFVuaXRUZXN0TWV0aG9kcyhjbG9uZSwgY2xvbmUpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGVzL21zZy5qcyIsIi8vIGNyZWF0ZSBoYW5kbGVyIG1vZHVsZSBmb3IgZ2l2ZW4gYGNvbnRleHRgLlxuLy8gaGFuZGxlcyBgcmFuZG9tYCwgYHJhbmRvbUFzeW5jYCwgYW5kIGBlY2hvYCBjb21tYW5kcy5cbi8vIGJvdGggYHJhbmRvbWAgZnVuY3Rpb24gbG9nIHRoZSBpbnZvY2F0aW9uIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUgYW5kIHJldHVyblxuLy8gcmFuZG9tIG51bWJlciAwIC0gOTk5LiBgcmFuZG9tQXN5bmNgIHJldHVybnMgdGhlIHZhbHVlIHdpdGggMTUgc2Vjb25kIGRlbGF5LlxuLy8gYGVjaG9gIGZ1bmN0aW9uIGRvZXNuJ3QgcmV0dXJuIGFueXRoaW5nLCBqdXN0IGxvZ3MgdGhlIGlucHV0IHBhcmFtZXRlclxuLy8gYHdoYXRgLlxuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuICBjb25zb2xlLmxvZyguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG59XG5cbmNvbnN0IGhhbmRsZXJzID0ge307XG5cbmhhbmRsZXJzLmNyZWF0ZSA9IGNvbnRleHQgPT4gKHtcbiAgcmFuZG9tOiAoZG9uZSkgPT4ge1xuICAgIGxvZyhgLS0tPiR7Y29udGV4dH06OnJhbmRvbSgpIGludm9rZWRgKTtcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcigxMDAwICogTWF0aC5yYW5kb20oKSk7XG4gICAgbG9nKGA8LS0tIHJldHVybnM6ICR7cn1gKTtcbiAgICBkb25lKHIpO1xuICB9LFxuICByYW5kb21Bc3luYzogKGRvbmUpID0+IHtcbiAgICBsb2coYC0tLT4ke2NvbnRleHR9OjpyYW5kb21Bc3luYygpIGludm9rZWQgKDE1IHNlYyBkZWxheSlgKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKDEwMDAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGxvZyhgPC0tLSByZXR1cm5zOiAke3J9YCk7XG4gICAgICBkb25lKHIpO1xuICAgIH0sIDE1ICogMTAwMCk7XG4gIH0sXG4gIGVjaG86ICh3aGF0LCBkb25lKSA9PiB7XG4gICAgbG9nKGAtLS0+ICR7Y29udGV4dH06OmVjaG8oXCIke3doYXR9XCIpIGludm9rZWRgKTtcbiAgICBsb2coJzwtLS0gKG5vIHJldHVybiB2YWx1ZSknKTtcbiAgICBkb25lKCk7XG4gIH1cbn0pO1xuXG4vLyBmb3Igc3VycHJlc3NpbmcgY29uc29sZS5sb2cgb3V0cHV0IGluIHVuaXQgdGVzdHM6XG5oYW5kbGVycy5fX3Jlc2V0TG9nID0gKCkgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gIGxvZyA9ICgpID0+IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWZ1bmMtYXNzaWduXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGVzL2hhbmRsZXJzLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiaW1wb3J0IGhhbmRsZXJzIGZyb20gJy4vbW9kdWxlcy9oYW5kbGVycyc7XG5pbXBvcnQgbXNnIGZyb20gJy4vbW9kdWxlcy9tc2cnO1xuXG4vLyBoZXJlIHdlIHVzZSBTSEFSRUQgbWVzc2FnZSBoYW5kbGVycywgc28gYWxsIHRoZSBjb250ZXh0cyBzdXBwb3J0IHRoZSBzYW1lXG4vLyBjb21tYW5kcy4gYnV0IHRoaXMgaXMgTk9UIHR5cGljYWwgbWVzc2FnaW5nIHN5c3RlbSB1c2FnZSwgc2luY2UgeW91IHVzdWFsbHlcbi8vIHdhbnQgZWFjaCBjb250ZXh0IHRvIGhhbmRsZSBkaWZmZXJlbnQgY29tbWFuZHMuIGZvciB0aGlzIHlvdSBkb24ndCBuZWVkXG4vLyBoYW5kbGVycyBmYWN0b3J5IGFzIHVzZWQgYmVsb3cuIHNpbXBseSBjcmVhdGUgaW5kaXZpZHVhbCBgaGFuZGxlcnNgIG9iamVjdFxuLy8gZm9yIGVhY2ggY29udGV4dCBhbmQgcGFzcyBpdCB0byBtc2cuaW5pdCgpIGNhbGwuIGluIGNhc2UgeW91IGRvbid0IG5lZWQgdGhlXG4vLyBjb250ZXh0IHRvIHN1cHBvcnQgYW55IGNvbW1hbmRzLCBidXQgd2FudCB0aGUgY29udGV4dCB0byBjb29wZXJhdGUgd2l0aCB0aGVcbi8vIHJlc3Qgb2YgdGhlIGV4dGVuc2lvbiB2aWEgbWVzc2FnaW5nIHN5c3RlbSAoeW91IHdhbnQgdG8ga25vdyB3aGVuIG5ld1xuLy8gaW5zdGFuY2Ugb2YgZ2l2ZW4gY29udGV4dCBpcyBjcmVhdGVkIC8gZGVzdHJveWVkLCBvciB5b3Ugd2FudCB0byBiZSBhYmxlIHRvXG4vLyBpc3N1ZSBjb21tYW5kIHJlcXVlc3RzIGZyb20gdGhpcyBjb250ZXh0KSwgeW91IG1heSBzaW1wbHkgb21pdCB0aGVcbi8vIGBoYW5kbGVyc2AgcGFyYW1ldGVyIGZvciBnb29kIHdoZW4gaW52b2tpbmcgbXNnLmluaXQoKVxuXG5tc2cuaW5pdCgnZHQnLCBoYW5kbGVycy5jcmVhdGUoJ2R0JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2RldlRvb2xzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==