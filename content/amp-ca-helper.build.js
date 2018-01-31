/*!  name:helpers/amp-ca-helper - version: 1017 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 489);
/******/ })
/************************************************************************/
/******/ ({

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(490);


/***/ }),

/***/ 490:
/***/ (function(module, exports) {

eval("/* eslint-disable no-extend-native */\n/* eslint-disable no-var */\n/* eslint-disable func-names */\nString.prototype.includes = function (str) {\n  var returnValue = false;\n\n  if (this.indexOf(str) !== -1) {\n    returnValue = true;\n  }\n\n  return returnValue;\n};\n\nvar ampCa = {};\n\nvar isStaging = function isStaging(url) {\n  if (url.includes('localhost') || url.includes('dev') || url.includes('stg') || url.includes('stage')) {\n    return true;\n  }\n  return false;\n};\n\nampCa.getContentEnv = function () {\n  if (isStaging(window.location.hostname)) {\n    return '9c2ecb6j86lt1gm3hx01m1tfs.staging.bigcontent.io';\n  }\n  return 'c1.adis.ws';\n};\n\nampCa.getComponentEnv = function () {\n  if (isStaging(window.location.hostname)) {\n    return 'stage';\n  }\n  return 'prod';\n};\n\nif (window && typeof window !== 'undefined') {\n  window.ampCa = ampCa;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9hbXBsaWVuY2UtY2EtaGVscGVyLmpzP2Q5M2IiXSwibmFtZXMiOlsiU3RyaW5nIiwicHJvdG90eXBlIiwiaW5jbHVkZXMiLCJzdHIiLCJyZXR1cm5WYWx1ZSIsImluZGV4T2YiLCJhbXBDYSIsImlzU3RhZ2luZyIsInVybCIsImdldENvbnRlbnRFbnYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZ2V0Q29tcG9uZW50RW52Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQUEsT0FBT0MsU0FBUCxDQUFpQkMsUUFBakIsR0FBNEIsVUFBVUMsR0FBVixFQUFlO0FBQ3pDLE1BQUlDLGNBQWMsS0FBbEI7O0FBRUEsTUFBSSxLQUFLQyxPQUFMLENBQWFGLEdBQWIsTUFBc0IsQ0FBQyxDQUEzQixFQUE4QjtBQUM1QkMsa0JBQWMsSUFBZDtBQUNEOztBQUVELFNBQU9BLFdBQVA7QUFDRCxDQVJEOztBQVVBLElBQU1FLFFBQVEsRUFBZDs7QUFFQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ3pCLE1BQUlBLElBQUlOLFFBQUosQ0FBYSxXQUFiLEtBQTZCTSxJQUFJTixRQUFKLENBQWEsS0FBYixDQUE3QixJQUFvRE0sSUFBSU4sUUFBSixDQUFhLEtBQWIsQ0FBcEQsSUFBMkVNLElBQUlOLFFBQUosQ0FBYSxPQUFiLENBQS9FLEVBQXNHO0FBQ3BHLFdBQU8sSUFBUDtBQUNEO0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FMRDs7QUFPQUksTUFBTUcsYUFBTixHQUFzQixZQUFNO0FBQzFCLE1BQUlGLFVBQVVHLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCLENBQUosRUFBeUM7QUFDdkMsV0FBTyxpREFBUDtBQUNEO0FBQ0QsU0FBTyxZQUFQO0FBQ0QsQ0FMRDs7QUFPQU4sTUFBTU8sZUFBTixHQUF3QixZQUFNO0FBQzVCLE1BQUlOLFVBQVVHLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCLENBQUosRUFBeUM7QUFDdkMsV0FBTyxPQUFQO0FBQ0Q7QUFDRCxTQUFPLE1BQVA7QUFDRCxDQUxEOztBQU9BLElBQUlGLFVBQVUsT0FBT0EsTUFBUCxLQUFrQixXQUFoQyxFQUE2QztBQUMzQ0EsU0FBT0osS0FBUCxHQUFlQSxLQUFmO0FBQ0QiLCJmaWxlIjoiNDkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5TdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgcmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICBpZiAodGhpcy5pbmRleE9mKHN0cikgIT09IC0xKSB7XG4gICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuY29uc3QgYW1wQ2EgPSB7fTtcblxuY29uc3QgaXNTdGFnaW5nID0gKHVybCkgPT4ge1xuICBpZiAodXJsLmluY2x1ZGVzKCdsb2NhbGhvc3QnKSB8fCB1cmwuaW5jbHVkZXMoJ2RldicpIHx8IHVybC5pbmNsdWRlcygnc3RnJykgfHwgdXJsLmluY2x1ZGVzKCdzdGFnZScpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuYW1wQ2EuZ2V0Q29udGVudEVudiA9ICgpID0+IHtcbiAgaWYgKGlzU3RhZ2luZyh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpKSB7XG4gICAgcmV0dXJuICc5YzJlY2I2ajg2bHQxZ20zaHgwMW0xdGZzLnN0YWdpbmcuYmlnY29udGVudC5pbyc7XG4gIH1cbiAgcmV0dXJuICdjMS5hZGlzLndzJztcbn07XG5cbmFtcENhLmdldENvbXBvbmVudEVudiA9ICgpID0+IHtcbiAgaWYgKGlzU3RhZ2luZyh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpKSB7XG4gICAgcmV0dXJuICdzdGFnZSc7XG4gIH1cbiAgcmV0dXJuICdwcm9kJztcbn07XG5cbmlmICh3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmFtcENhID0gYW1wQ2E7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9hbXBsaWVuY2UtY2EtaGVscGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///490\n");

/***/ })

/******/ });