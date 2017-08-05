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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ({

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_script_injector__ = __webpack_require__(119);


window.onload = function () {
  console.log('window.onload::gTranslate running');

  function locationHashChanged() {
    console.log('PAGE CHANGED');
  }

  if (window.location.href.includes('translate.googleusercontent')) {
    console.log(window.MutationObserver);

    var gTranslateKill = function gTranslateKill() {
      return '(' + function () {
        // eslint-disable-line func-names
        document.body.removeChild(document.getElementById('google-infowindow'));

        function unwrap(wrapper) {
          // place childNodes in document fragment
          var docFrag = document.createDocumentFragment();
          while (wrapper.firstChild) {
            var child = wrapper.removeChild(wrapper.firstChild);
            docFrag.appendChild(child);
          }

          // replace wrapper with document fragment
          wrapper.parentNode.replaceChild(docFrag, wrapper);
        }

        // Google wraps text/links with annoying garbage. Remove it and keep the wrapped el
        [].forEach.call(document.querySelectorAll('.notranslate'), function (wrapper) {
          return unwrap(wrapper);
        });
      }.toString() + ')();'; // eslint-disable-line func-names
    };

    var injectScript = function injectScript() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__modules_script_injector__["a" /* scriptInjector */])(document.head || document.documentElement, gTranslateKill);
    }; // eslint-disable-line max-len
    injectScript();
  }
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scriptInjector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);

/**
 * Utility function for dynamically injecting scripts into iframe
 * @param target: Target node to append script e.g. (document.head || document.documentElement)
 * @param callback: Function variable that returns the script from template
 *        callback example:
 *          const func = () => `(${(function() {
 *                                    console.log('script stuffs')
 *                               }).toString()})();`;
 * @param optId: HTML id attribute for script tag (optional, default is callback.name)
 *        optId format: { id: 'scriptIdString'}
 * @returns {Node|XML}: The actual built script element
 */
var scriptInjector = function scriptInjector(target, callback, _ref) {
  var optId = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, []);

  // eslint-disable-line arrow-body-style, max-len
  return target.appendChild(function (elem, inner) {
    elem.setAttribute('id', optId.id ? optId.id : callback.name);
    elem.setAttribute('type', 'text/javascript');
    elem.appendChild(document.createTextNode(inner));
    return elem;
  }(document.createElement('script'), callback()));
};


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ })

/******/ });
//# sourceMappingURL=gTranslate.js.map