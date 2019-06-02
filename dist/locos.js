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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/element.js
function createElement(type, attrs) {
  for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  var filteredElements = childElements.filter(function (child) {
    return child && child !== false;
  }).map(function (child) {
    return child instanceof Object ? child : createTextElement(child);
  });
  return {
    type: type,
    props: attrs || {},
    children: filteredElements
  };
}

function createTextElement(textContent) {
  return createElement('text', {
    textContent: textContent
  });
}
// CONCATENATED MODULE: ./src/utils.js
function isFunction(value) {
  return typeof value === 'function';
}
// CONCATENATED MODULE: ./src/reconciler.js

function render(vElement, container) {
  diff(vElement, container, container.firstChild);
}

function diff(vElement, container, oldElement) {
  if (!oldElement) {
    mount(vElement, container);
  } else {
    update(vElement, oldElement);
  }
}

function update(vElement, oldElement) {
  if (isFunction(vElement.type)) {} else {
    updateElement(vElement, oldElement);
  }
}

function updateElement(vElement, oldElement) {
  var oldVElement = oldElement._virtualElement;

  if (vElement.type === oldVElement.type) {
    if (vElement.type === 'text') {
      if (oldVElement.props.textContent !== vElement.props.textContent) {
        oldElement.textContent = vElement.props.textContent;
      }
    } else {
      updateAttributes(oldElement, vElement, oldVElement);
      vElement.children.forEach(function (child, i) {
        return update(child, oldElement.childNodes[i]);
      });
    }
  }
}

function mount(vElement, container) {
  if (isFunction(vElement.type)) {
    mountComponent(vElement, container);
  } else {
    mountElement(vElement, container);
  }
}

function mountComponent(vElement, container) {
  mountElement(vElement.type(), container);
}

function mountElement(vElement, container) {
  var newElement = null;

  if (vElement.type === 'text') {
    newElement = document.createTextNode(vElement.props.textContent);
  } else {
    newElement = document.createElement(vElement.type);
    updateAttributes(newElement, vElement, {});
  }

  newElement._virtualElement = vElement;
  container.appendChild(newElement);

  if (vElement.children && vElement.children.length > 0) {
    vElement.children.forEach(function (child) {
      return mount(child, newElement);
    });
  }
}

function updateAttributes(newElement, vElement, oldVElement) {
  var newProps = vElement.props || {};
  var oldProps = oldVElement.props || {};
  Object.keys(newProps).forEach(function (propName) {
    var newPropValue = newProps[propName];
    var oldPropValue = oldProps[propName];

    if (oldPropValue !== newPropValue) {
      if (propName.slice(0, 2) === 'on') {
        var eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropValue, false);

        if (oldPropValue) {
          newElement.removeEventListener(eventName, oldPropValue, false);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropValue;
      } else if (propName === 'className') {
        newElement.setAttribute('class', newPropValue);
      } else {
        newElement.setAttribute(propName, newPropValue);
      }
    }
  });
  Object.keys(oldProps).forEach(function (propName) {
    var oldProp = oldProps[propName];
    var newProp = newProps[propName];

    if (!newProp) {
      if (propName.slice(0, 2) === 'on') {
        newElement.removeEventListener(propName.slice(2).toLowerCase(), oldProp, false);
      } else {
        newElement.removeAttribute(propName);
      }
    }
  });
}
// CONCATENATED MODULE: ./src/locos.js


var Locos = {
  createElement: createElement,
  render: render
};
/* harmony default export */ var locos = __webpack_exports__["default"] = (Locos);

/***/ })
/******/ ]);
});