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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 83:
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

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  // eslint-disable-line arrow-body-style, max-len
  return {
    responseHeaders: details.responseHeaders.filter(function (header) {
      // eslint-disable-line arrow-body-style, max-len
      return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
    })
  };
}, { urls: ['<all_urls>'] }, ['blocking', 'responseHeaders']);

// Used to let content script know when to call init() method (seems to have no effect))
/*
chrome.webRequest.onCompleted.addListener((details) => {
  /* Process the XHR response */ /*
                                 logEvent.bind(null, details);
                                 }, { urls: ['<all_urls>'] });
                                 */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWMzYjJhMTU5M2E4NTdiOTg3NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkhFQURFUlNfVE9fU1RSSVBfTE9XRVJDQVNFIiwiY2hyb21lIiwid2ViUmVxdWVzdCIsIm9uSGVhZGVyc1JlY2VpdmVkIiwiYWRkTGlzdGVuZXIiLCJkZXRhaWxzIiwicmVzcG9uc2VIZWFkZXJzIiwiZmlsdGVyIiwiaGVhZGVyIiwiaW5kZXhPZiIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVybHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxRQUFRQyxHQUFSLENBQVksMEJBQVosRSxDQUF5Qzs7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLElBQU1DLDZCQUE2QixDQUNqQyx5QkFEaUMsRUFFakMsaUJBRmlDLEVBR2pDLGtCQUhpQyxDQUFuQzs7QUFNQUMsT0FBT0MsVUFBUCxDQUFrQkMsaUJBQWxCLENBQW9DQyxXQUFwQyxDQUFnRCxVQUFDQyxPQUFELEVBQWE7QUFBRTtBQUM3RCxTQUFPO0FBQ0xDLHFCQUFpQkQsUUFBUUMsZUFBUixDQUF3QkMsTUFBeEIsQ0FBK0IsVUFBQ0MsTUFBRCxFQUFZO0FBQUU7QUFDNUQsYUFBT1IsMkJBQTJCUyxPQUEzQixDQUFtQ0QsT0FBT0UsSUFBUCxDQUFZQyxXQUFaLEVBQW5DLElBQWdFLENBQXZFO0FBQ0QsS0FGZ0I7QUFEWixHQUFQO0FBS0QsQ0FORCxFQU1HLEVBQUVDLE1BQU0sQ0FBQyxZQUFELENBQVIsRUFOSCxFQU02QixDQUFDLFVBQUQsRUFBYSxpQkFBYixDQU43Qjs7QUFRQTtBQUNBOztpQ0FFZ0MiLCJmaWxlIjoiLi9qcy9iYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gODMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFjM2IyYTE1OTNhODU3Yjk4Nzc1IiwiLyogZXNsaW50LWVudiB3ZWJleHRlbnNpb25zICovXG4vKlxuaW1wb3J0IGhhbmRsZXJzIGZyb20gJy4vbW9kdWxlcy9oYW5kbGVycyc7XG5pbXBvcnQgbXNnIGZyb20gJy4vbW9kdWxlcy9tc2cnO1xuKi9cblxuLy8gaGVyZSB3ZSB1c2UgU0hBUkVEIG1lc3NhZ2UgaGFuZGxlcnMsIHNvIGFsbCB0aGUgY29udGV4dHMgc3VwcG9ydCB0aGUgc2FtZVxuLy8gY29tbWFuZHMuIGluIGJhY2tncm91bmQsIHdlIGV4dGVuZCB0aGUgaGFuZGxlcnMgd2l0aCB0d28gc3BlY2lhbFxuLy8gbm90aWZpY2F0aW9uIGhvb2tzLiBidXQgdGhpcyBpcyBOT1QgdHlwaWNhbCBtZXNzYWdpbmcgc3lzdGVtIHVzYWdlLCBzaW5jZVxuLy8geW91IHVzdWFsbHkgd2FudCBlYWNoIGNvbnRleHQgdG8gaGFuZGxlIGRpZmZlcmVudCBjb21tYW5kcy4gZm9yIHRoaXMgeW91XG4vLyBkb24ndCBuZWVkIGhhbmRsZXJzIGZhY3RvcnkgYXMgdXNlZCBiZWxvdy4gc2ltcGx5IGNyZWF0ZSBpbmRpdmlkdWFsXG4vLyBgaGFuZGxlcnNgIG9iamVjdCBmb3IgZWFjaCBjb250ZXh0IGFuZCBwYXNzIGl0IHRvIG1zZy5pbml0KCkgY2FsbC4gaW4gY2FzZVxuLy8geW91IGRvbid0IG5lZWQgdGhlIGNvbnRleHQgdG8gc3VwcG9ydCBhbnkgY29tbWFuZHMsIGJ1dCB3YW50IHRoZSBjb250ZXh0IHRvXG4vLyBjb29wZXJhdGUgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZXh0ZW5zaW9uIHZpYSBtZXNzYWdpbmcgc3lzdGVtICh5b3Ugd2FudCB0b1xuLy8ga25vdyB3aGVuIG5ldyBpbnN0YW5jZSBvZiBnaXZlbiBjb250ZXh0IGlzIGNyZWF0ZWQgLyBkZXN0cm95ZWQsIG9yIHlvdSB3YW50XG4vLyB0byBiZSBhYmxlIHRvIGlzc3VlIGNvbW1hbmQgcmVxdWVzdHMgZnJvbSB0aGlzIGNvbnRleHQpLCB5b3UgbWF5IHNpbXBseVxuLy8gb21pdCB0aGUgYGhhZG5sZXJzYCBwYXJhbWV0ZXIgZm9yIGdvb2Qgd2hlbiBpbnZva2luZyBtc2cuaW5pdCgpXG5cbmNvbnNvbGUubG9nKCdCQUNLR1JPVU5EIFNDUklQVCBXT1JLUyEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbi8qKlxuICogIERFTU8gRk9SIE1FU1NFTkdFUlxuLypcbi8vIGFkZGluZyBzcGVjaWFsIGJhY2tncm91bmQgbm90aWZpY2F0aW9uIGhhbmRsZXJzIG9uQ29ubmVjdCAvIG9uRGlzY29ubmVjdFxuZnVuY3Rpb24gbG9nRXZlbnQoZXYsIGNvbnRleHQsIHRhYklkKSB7XG4gIGNvbnNvbGUubG9nKGAke2V2fTogY29udGV4dCA9ICR7Y29udGV4dH0sIHRhYklkID0gJHt0YWJJZH1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG59XG5oYW5kbGVycy5vbkNvbm5lY3QgPSBsb2dFdmVudC5iaW5kKG51bGwsICdvbkNvbm5lY3QnKTtcbmhhbmRsZXJzLm9uRGlzY29ubmVjdCA9IGxvZ0V2ZW50LmJpbmQobnVsbCwgJ29uRGlzY29ubmVjdCcpO1xuY29uc3QgbWVzc2FnZSA9IG1zZy5pbml0KCdiZycsIGhhbmRsZXJzLmNyZWF0ZSgnYmcnKSk7XG5cbi8vIGlzc3VlIGBlY2hvYCBjb21tYW5kIGluIDEwIHNlY29uZHMgYWZ0ZXIgaW52b2tlZCxcbi8vIHNjaGVkdWxlIG5leHQgcnVuIGluIDUgbWludXRlc1xuZnVuY3Rpb24gaGVsbG9Xb3JsZCgpIHtcbiAgY29uc29sZS5sb2coIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAnPT09PT0gd2lsbCBicm9hZGNhc3QgXCJoZWxsbyB3b3JsZCFcIiBpbiAxMCBzZWNvbmRzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJz4+Pj4+IGJyb2FkY2FzdGluZyBcImhlbGxvIHdvcmxkIVwiIG5vdycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICBtZXNzYWdlLmJjYXN0KCdlY2hvJywgJ2hlbGxvIHdvcmxkIScsICgpID0+XG4gICAgICBjb25zb2xlLmxvZygnPDw8PDwgYnJvYWRjYXN0aW5nIGRvbmUnKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICApO1xuICB9LCAxMCAqIDEwMDApO1xuICBzZXRUaW1lb3V0KGhlbGxvV29ybGQsIDUgKiA2MCAqIDEwMDApO1xufVxuXG4vLyBzdGFydCBicm9hZGNhc3RpbmcgbG9vcFxuaGVsbG9Xb3JsZCgpO1xuKi9cblxuY29uc3QgSEVBREVSU19UT19TVFJJUF9MT1dFUkNBU0UgPSBbXG4gICdjb250ZW50LXNlY3VyaXR5LXBvbGljeScsXG4gICd4LWZyYW1lLW9wdGlvbnMnLFxuICAneC14c3MtcHJvdGVjdGlvbidcbl07XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uSGVhZGVyc1JlY2VpdmVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYXJyb3ctYm9keS1zdHlsZSwgbWF4LWxlblxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlSGVhZGVyczogZGV0YWlscy5yZXNwb25zZUhlYWRlcnMuZmlsdGVyKChoZWFkZXIpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBhcnJvdy1ib2R5LXN0eWxlLCBtYXgtbGVuXG4gICAgICByZXR1cm4gSEVBREVSU19UT19TVFJJUF9MT1dFUkNBU0UuaW5kZXhPZihoZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpKSA8IDA7XG4gICAgfSlcbiAgfTtcbn0sIHsgdXJsczogWyc8YWxsX3VybHM+J10gfSwgWydibG9ja2luZycsICdyZXNwb25zZUhlYWRlcnMnXSk7XG5cbi8vIFVzZWQgdG8gbGV0IGNvbnRlbnQgc2NyaXB0IGtub3cgd2hlbiB0byBjYWxsIGluaXQoKSBtZXRob2QgKHNlZW1zIHRvIGhhdmUgbm8gZWZmZWN0KSlcbi8qXG5jaHJvbWUud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4ge1xuICAvKiBQcm9jZXNzIHRoZSBYSFIgcmVzcG9uc2UgKi8vKlxuICBsb2dFdmVudC5iaW5kKG51bGwsIGRldGFpbHMpO1xuXG59LCB7IHVybHM6IFsnPGFsbF91cmxzPiddIH0pO1xuKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==