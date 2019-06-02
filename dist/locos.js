(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["locos"] = factory();
	else
		root["locos"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locos.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction createElement(type, attrs) {\n  for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childElements[_key - 2] = arguments[_key];\n  }\n\n  var filteredElements = childElements.filter(function (child) {\n    return child && child !== false;\n  }).map(function (child) {\n    return child instanceof Object ? child : createTextElement(child);\n  });\n  return {\n    type: type,\n    props: attrs || {},\n    children: filteredElements\n  };\n}\n\nfunction createTextElement(textContent) {\n  return createElement('text', {\n    textContent: textContent\n  });\n}\n\n//# sourceURL=webpack://locos/./src/element.js?");

/***/ }),

/***/ "./src/locos.js":
/*!**********************!*\
  !*** ./src/locos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/element.js\");\n/* harmony import */ var _reconciler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciler */ \"./src/reconciler.js\");\n\n\nvar Locos = {\n  createElement: _element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"],\n  render: _reconciler__WEBPACK_IMPORTED_MODULE_1__[\"render\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Locos);\n\n//# sourceURL=webpack://locos/./src/locos.js?");

/***/ }),

/***/ "./src/reconciler.js":
/*!***************************!*\
  !*** ./src/reconciler.js ***!
  \***************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction render(vElement, container) {\n  diff(vElement, container, container.firstChild);\n}\n\nfunction diff(vElement, container, oldElement) {\n  if (!oldElement) {\n    mount(vElement, container);\n  } else {\n    update(vElement, oldElement, container);\n  }\n}\n\nfunction update(vElement, oldElement, container) {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(vElement.type)) {\n    updateComponent(vElement, oldElement, container);\n  } else {\n    updateElement(vElement, oldElement, container);\n  }\n}\n\nfunction updateComponent(vElement, oldElement, container) {\n  updateElement(vElement.type(vElement.props), oldElement, container);\n}\n\nfunction updateElement(vElement, oldElement, container) {\n  if (oldElement) {\n    var oldVElement = oldElement._virtualElement;\n\n    if (vElement.type === oldVElement.type) {\n      if (vElement.type === 'text') {\n        if (oldVElement.props.textContent !== vElement.props.textContent) {\n          oldElement.textContent = vElement.props.textContent;\n        }\n      } else {\n        updateAttributes(oldElement, vElement, oldVElement);\n        vElement.children.forEach(function (child, i) {\n          return update(child, oldElement.childNodes[i], oldElement);\n        });\n      }\n    } else {\n      mountElement(vElement, container, oldElement.nextSibling);\n      oldElement.remove();\n    }\n  } else {\n    console.log(container);\n    mountElement(vElement, container);\n  }\n}\n\nfunction mount(vElement, container) {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(vElement.type)) {\n    mountComponent(vElement, container);\n  } else {\n    mountElement(vElement, container);\n  }\n}\n\nfunction mountComponent(vElement, container) {\n  mountElement(vElement.type(vElement.props), container);\n}\n\nfunction mountElement(vElement, container, nextSibling) {\n  var newElement = generateElement(vElement);\n  newElement._virtualElement = vElement;\n\n  if (nextSibling) {\n    container.insertBefore(newElement, nextSibling);\n  } else {\n    container.appendChild(newElement);\n  }\n\n  if (vElement.children && vElement.children.length > 0) {\n    vElement.children.forEach(function (child) {\n      return mount(child, newElement);\n    });\n  }\n\n  return newElement;\n}\n\nfunction generateElement(vElement) {\n  var newElement = null;\n\n  if (vElement.type === 'text') {\n    newElement = document.createTextNode(vElement.props.textContent);\n  } else {\n    newElement = document.createElement(vElement.type);\n    updateAttributes(newElement, vElement, {});\n  }\n\n  return newElement;\n}\n\nfunction updateAttributes(newElement, vElement, oldVElement) {\n  var newProps = vElement.props || {};\n  var oldProps = oldVElement.props || {};\n  Object.keys(newProps).forEach(function (propName) {\n    var newPropValue = newProps[propName];\n    var oldPropValue = oldProps[propName];\n\n    if (oldPropValue !== newPropValue) {\n      if (propName.slice(0, 2) === 'on') {\n        var eventName = propName.toLowerCase().slice(2);\n        newElement.addEventListener(eventName, newPropValue, false);\n\n        if (oldPropValue) {\n          newElement.removeEventListener(eventName, oldPropValue, false);\n        }\n      } else if (propName === 'value' || propName === 'checked') {\n        newElement[propName] = newPropValue;\n      } else if (propName === 'className') {\n        newElement.setAttribute('class', newPropValue);\n      } else {\n        newElement.setAttribute(propName, newPropValue);\n      }\n    }\n  });\n  Object.keys(oldProps).forEach(function (propName) {\n    var oldProp = oldProps[propName];\n    var newProp = newProps[propName];\n\n    if (!newProp) {\n      if (propName.slice(0, 2) === 'on') {\n        newElement.removeEventListener(propName.slice(2).toLowerCase(), oldProp, false);\n      } else {\n        newElement.removeAttribute(propName);\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://locos/./src/reconciler.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\n\n//# sourceURL=webpack://locos/./src/utils.js?");

/***/ })

/******/ });
});