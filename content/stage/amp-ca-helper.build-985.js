/*!  name:amp-ca-helper - version: 985 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 201);
/******/ })
/************************************************************************/
/******/ ({

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(202);


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

eval("/* eslint-disable no-extend-native */\n/* eslint-disable no-var */\n/* eslint-disable func-names */\nString.prototype.includes = function (str) {\n  var returnValue = false;\n\n  if (this.indexOf(str) !== -1) {\n    returnValue = true;\n  }\n\n  return returnValue;\n};\n\nvar ampCa = {};\n\nvar isStaging = function isStaging(url) {\n  if (url.includes('localhost') || url.includes('dev') || url.includes('stg') || url.includes('stage')) {\n    return true;\n  }\n  return false;\n};\n\nampCa.getContentEnv = function () {\n  if (isStaging(window.location.hostname)) {\n    return '9c2ecb6j86lt1gm3hx01m1tfs.staging.bigcontent.io';\n  }\n  return 'c1.adis.ws';\n};\n\nampCa.getComponentEnv = function () {\n  if (isStaging(window.location.hostname)) {\n    return 'stage';\n  }\n  return 'prod';\n};\n\nif (window.halfords && typeof window.halfords !== 'undefined') {\n  window.halfords.ampCa = ampCa;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9hbXBsaWVuY2UtY2EtaGVscGVyLmpzP2Q5M2IiXSwibmFtZXMiOlsiU3RyaW5nIiwicHJvdG90eXBlIiwiaW5jbHVkZXMiLCJzdHIiLCJyZXR1cm5WYWx1ZSIsImluZGV4T2YiLCJhbXBDYSIsImlzU3RhZ2luZyIsInVybCIsImdldENvbnRlbnRFbnYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiZ2V0Q29tcG9uZW50RW52IiwiaGFsZm9yZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBQSxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixHQUE0QixVQUFVQyxHQUFWLEVBQWU7QUFDekMsTUFBSUMsY0FBYyxLQUFsQjs7QUFFQSxNQUFJLEtBQUtDLE9BQUwsQ0FBYUYsR0FBYixNQUFzQixDQUFDLENBQTNCLEVBQThCO0FBQzVCQyxrQkFBYyxJQUFkO0FBQ0Q7O0FBRUQsU0FBT0EsV0FBUDtBQUNELENBUkQ7O0FBVUEsSUFBTUUsUUFBUSxFQUFkOztBQUVBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQVM7QUFDekIsTUFBSUEsSUFBSU4sUUFBSixDQUFhLFdBQWIsS0FBNkJNLElBQUlOLFFBQUosQ0FBYSxLQUFiLENBQTdCLElBQW9ETSxJQUFJTixRQUFKLENBQWEsS0FBYixDQUFwRCxJQUEyRU0sSUFBSU4sUUFBSixDQUFhLE9BQWIsQ0FBL0UsRUFBc0c7QUFDcEcsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQUxEOztBQU9BSSxNQUFNRyxhQUFOLEdBQXNCLFlBQU07QUFDMUIsTUFBSUYsVUFBVUcsT0FBT0MsUUFBUCxDQUFnQkMsUUFBMUIsQ0FBSixFQUF5QztBQUN2QyxXQUFPLGlEQUFQO0FBQ0Q7QUFDRCxTQUFPLFlBQVA7QUFDRCxDQUxEOztBQU9BTixNQUFNTyxlQUFOLEdBQXdCLFlBQU07QUFDNUIsTUFBSU4sVUFBVUcsT0FBT0MsUUFBUCxDQUFnQkMsUUFBMUIsQ0FBSixFQUF5QztBQUN2QyxXQUFPLE9BQVA7QUFDRDtBQUNELFNBQU8sTUFBUDtBQUNELENBTEQ7O0FBT0EsSUFBSUYsT0FBT0ksUUFBUCxJQUFtQixPQUFPSixPQUFPSSxRQUFkLEtBQTJCLFdBQWxELEVBQStEO0FBQzdESixTQUFPSSxRQUFQLENBQWdCUixLQUFoQixHQUF3QkEsS0FBeEI7QUFDRCIsImZpbGUiOiIyMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmluZGV4T2Yoc3RyKSAhPT0gLTEpIHtcbiAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG5jb25zdCBhbXBDYSA9IHt9O1xuXG5jb25zdCBpc1N0YWdpbmcgPSAodXJsKSA9PiB7XG4gIGlmICh1cmwuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpIHx8IHVybC5pbmNsdWRlcygnZGV2JykgfHwgdXJsLmluY2x1ZGVzKCdzdGcnKSB8fCB1cmwuaW5jbHVkZXMoJ3N0YWdlJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5hbXBDYS5nZXRDb250ZW50RW52ID0gKCkgPT4ge1xuICBpZiAoaXNTdGFnaW5nKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkpIHtcbiAgICByZXR1cm4gJzljMmVjYjZqODZsdDFnbTNoeDAxbTF0ZnMuc3RhZ2luZy5iaWdjb250ZW50LmlvJztcbiAgfVxuICByZXR1cm4gJ2MxLmFkaXMud3MnO1xufTtcblxuYW1wQ2EuZ2V0Q29tcG9uZW50RW52ID0gKCkgPT4ge1xuICBpZiAoaXNTdGFnaW5nKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkpIHtcbiAgICByZXR1cm4gJ3N0YWdlJztcbiAgfVxuICByZXR1cm4gJ3Byb2QnO1xufTtcblxuaWYgKHdpbmRvdy5oYWxmb3JkcyAmJiB0eXBlb2Ygd2luZG93LmhhbGZvcmRzICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuaGFsZm9yZHMuYW1wQ2EgPSBhbXBDYTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL2FtcGxpZW5jZS1jYS1oZWxwZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///202\n");

/***/ })

/******/ });