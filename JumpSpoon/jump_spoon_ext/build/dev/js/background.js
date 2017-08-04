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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 85:
/***/ (function(module, exports) {

/* eslint-env webextensions */
/*
import handlers from './modules/handlers';
import msg from './modules/msg';
*/

// here we use SHARED message handlers, so all the contexts support the same
// commands. in background, we extend the handlers with two special
// notification hooks. but this is NOT typical messaging system usage, since
// you usually want each context to handle different commands. for this you
// don't need handlers factory as used below. simply create individual
// `handlers` object for each context and pass it to msg.init() call. in case
// you don't need the context to support any commands, but want the context to
// cooperate with the rest of the extension via messaging system (you want to
// know when new instance of given context is created / destroyed, or you want
// to be able to issue command requests from this context), you may simply
// omit the `hadnlers` parameter for good when invoking msg.init()

console.log('BACKGROUND SCRIPT WORKS!'); // eslint-disable-line no-console

/**
 *  DEMO FOR MESSENGER
/*
// adding special background notification handlers onConnect / onDisconnect
function logEvent(ev, context, tabId) {
  console.log(`${ev}: context = ${context}, tabId = ${tabId}`); // eslint-disable-line no-console
}
handlers.onConnect = logEvent.bind(null, 'onConnect');
handlers.onDisconnect = logEvent.bind(null, 'onDisconnect');
const message = msg.init('bg', handlers.create('bg'));

// issue `echo` command in 10 seconds after invoked,
// schedule next run in 5 minutes
function helloWorld() {
  console.log( // eslint-disable-line no-console
  '===== will broadcast "hello world!" in 10 seconds');
    setTimeout(() => {
    console.log('>>>>> broadcasting "hello world!" now'); // eslint-disable-line no-console
    message.bcast('echo', 'hello world!', () =>
      console.log('<<<<< broadcasting done') // eslint-disable-line no-console
    );
  }, 10 * 1000);
  setTimeout(helloWorld, 5 * 60 * 1000);
}

// start broadcasting loop
helloWorld();
*/

var HEADERS_TO_STRIP_LOWERCASE = ['content-security-policy', 'x-frame-options', 'x-xss-protection'];

// CORS Support for iframes and XHR's
chrome.webRequest.onHeadersReceived.addListener(function (details) {
  // eslint-disable-line arrow-body-style, max-len
  return {
    responseHeaders: details.responseHeaders.filter(function (header) {
      // eslint-disable-line arrow-body-style, max-len
      return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
    })
  };
}, { urls: ['<all_urls>'] }, ['blocking', 'responseHeaders']);

/*
const filter = { url: [
  { hostContains: 'google.com/translate?sl=ja&tl=en&u=' },
  { hostPrefix: 'translate' }
]};

function logOnCommitted(details) {
  console.log("target URL: " + details.url);
  console.log("transition type: " + details.transitionType);
  console.log("transition qualifiers: " + details.transitionQualifiers);
  chrome.tabs.executeScript({ file: 'gTranslate.js', allFrames: true });
}

chrome.webNavigation.onCommitted.addListener(logOnCommitted, filter);
*/

/*
chrome.tabs.query({active: true}, function(selectedTab) {
  chrome.tabs.executeScript(selectedTab[0].id, {file: 'g_translate.js'});
});
*/

/***/ })

/******/ });
//# sourceMappingURL=background.js.map