/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pancake_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pancake.svg */ \"./src/pancake.svg\");\n/* harmony import */ var _pancakes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pancakes.jpg */ \"./src/pancakes.jpg\");\n/* harmony import */ var _donuts_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donuts.jpg */ \"./src/donuts.jpg\");\n/* harmony import */ var _crepe_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crepe.jpg */ \"./src/crepe.jpg\");\n/* harmony import */ var _cheesecake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cheesecake.jpg */ \"./src/cheesecake.jpg\");\n/* harmony import */ var _macarons_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./macarons.jpg */ \"./src/macarons.jpg\");\n/* harmony import */ var _ice_cream_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ice-cream.jpg */ \"./src/ice-cream.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuData = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\r\n\r\nclass MenuCard {\r\n    constructor(data = {}) {\r\n        Object.assign(this, data);\r\n    }\r\n}\r\n\r\nconst backgrounds = [_pancakes_jpg__WEBPACK_IMPORTED_MODULE_1__, _donuts_jpg__WEBPACK_IMPORTED_MODULE_2__, _crepe_jpg__WEBPACK_IMPORTED_MODULE_3__, _cheesecake_jpg__WEBPACK_IMPORTED_MODULE_4__, _macarons_jpg__WEBPACK_IMPORTED_MODULE_5__, _ice_cream_jpg__WEBPACK_IMPORTED_MODULE_6__];\r\n\r\nconst populateCardText = function populateCardText(text, name, price, description, sale = '') {\r\n    if (sale) {\r\n        text.appendChild(name);\r\n        text.appendChild(price);\r\n        text.appendChild(sale);\r\n        text.appendChild(description);\r\n    } else {\r\n        text.appendChild(name);\r\n        text.appendChild(price);\r\n        text.appendChild(description);\r\n    }\r\n};\r\n\r\nfunction menu() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const header = document.createElement('div');\r\n    header.classList.add('menu-header');\r\n    const icon = document.createElement('img');\r\n\r\n    icon.src = _pancake_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const title = document.createElement('span');\r\n    title.innerText = 'Menu';\r\n\r\n    header.appendChild(icon);\r\n    header.appendChild(title);\r\n    header.appendChild(icon.cloneNode(true));\r\n\r\n    const cards = document.createElement('div');\r\n    cards.classList.add('menu-cards');\r\n\r\n    menuData.menu.forEach((card, i) => {\r\n        const menuItem = new MenuCard(card);\r\n        const item = document.createElement('div');\r\n        item.classList.add('card');\r\n        const image = document.createElement('div');\r\n\r\n        image.classList.add('card-image');\r\n        image.style.backgroundImage = `url(${backgrounds[i]})`;\r\n        item.appendChild(image);\r\n\r\n        const text = document.createElement('div');\r\n        text.classList.add('card-text');\r\n\r\n        const name = document.createElement('h2');\r\n        name.innerText = menuItem.name;\r\n\r\n        const price = document.createElement('span');\r\n        price.innerText = `$ ${menuItem.price}`;\r\n\r\n        const description = document.createElement('p');\r\n        description.innerText = menuItem.description;\r\n\r\n        if (menuItem.sale) {\r\n            const sale = document.createElement('span');\r\n            sale.innerText = `$ ${menuItem.sale}`;\r\n            sale.classList.add('sale');\r\n            price.classList.add('sale-tag');\r\n            populateCardText(text, name, price, description, sale);\r\n        } else {\r\n            populateCardText(text, name, price, description);\r\n        }\r\n\r\n        item.appendChild(text);\r\n        cards.appendChild(item);\r\n    });\r\n\r\n    container.appendChild(header);\r\n    container.appendChild(cards);\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/cheesecake.jpg":
/*!****************************!*\
  !*** ./src/cheesecake.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7d79499d2243e518297.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/cheesecake.jpg?");

/***/ }),

/***/ "./src/crepe.jpg":
/*!***********************!*\
  !*** ./src/crepe.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af70cb812fd30df1a655.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/crepe.jpg?");

/***/ }),

/***/ "./src/donuts.jpg":
/*!************************!*\
  !*** ./src/donuts.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fe4dd2b5d6a16338b39.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/donuts.jpg?");

/***/ }),

/***/ "./src/ice-cream.jpg":
/*!***************************!*\
  !*** ./src/ice-cream.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1ad8a30ec6e776a38ed.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/ice-cream.jpg?");

/***/ }),

/***/ "./src/macarons.jpg":
/*!**************************!*\
  !*** ./src/macarons.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4be8239dc21c3c36cbce.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/macarons.jpg?");

/***/ }),

/***/ "./src/pancake.svg":
/*!*************************!*\
  !*** ./src/pancake.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b858cb2c63491c1da61.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/pancake.svg?");

/***/ }),

/***/ "./src/pancakes.jpg":
/*!**************************!*\
  !*** ./src/pancakes.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0b066652abd8a539d62.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/pancakes.jpg?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"name\":\"Original Pancakes\",\"price\":\"5.99\",\"sale\":\"\",\"description\":\"Where it all began\",\"image\":\"Pancakes\"},{\"name\":\"Donuts\",\"price\":\"8.99\",\"sale\":\"8.98\",\"description\":\"Holes sold separately\",\"image\":\"Donuts\"},{\"name\":\"Crêpe\",\"price\":\"6.99\",\"sale\":\"\",\"description\":\"Thinner than a pancake\",\"image\":\"Crepe\"},{\"name\":\"Blueberry Cheesecake\",\"price\":\"5.99\",\"sale\":\"4.99\",\"description\":\"Actually a custard pie\",\"image\":\"Cheesecake\"},{\"name\":\"Macarons\",\"price\":\"3.99\",\"sale\":\"\",\"description\":\"Tastes like macaroni\",\"image\":\"Macarons\"},{\"name\":\"Ice Cream\",\"price\":\"49.99\",\"sale\":\"2.99\",\"description\":\"May come melted\",\"image\":\"Ice-cream\"}]}');\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;