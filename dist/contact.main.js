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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.svg */ \"./src/phone.svg\");\n/* harmony import */ var _clock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.svg */ \"./src/clock.svg\");\n\r\n\r\n\r\nconst mapCoordinates = `https://www.openstreetmap.org/export/embed.html?bbox=-4.2984867095947275,53.18988759662502,-4.130258560180665,53.25535521592485&amp;layer=mapnik`;\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('div');\r\n    header.classList.add('contact-header');\r\n\r\n    const headerText = document.createElement('span');\r\n    headerText.textContent = 'Contact Us';\r\n\r\n    header.appendChild(headerText);\r\n\r\n    return header;\r\n}\r\n\r\nfunction createForm() {\r\n    const formContainer = document.createElement('div');\r\n    formContainer.classList.add('contact-form');\r\n\r\n    const form = document.createElement('form');\r\n\r\n    const nameField = document.createElement('input');\r\n    nameField.type = 'text';\r\n    nameField.placeholder = 'Name';\r\n    nameField.name = 'name';\r\n    nameField.required = true;\r\n    nameField.classList.add('feedback-input');\r\n\r\n    const emailField = document.createElement('input');\r\n    emailField.type = 'email';\r\n    emailField.placeholder = 'Email';\r\n    emailField.name = 'email';\r\n    emailField.required = true;\r\n    emailField.classList.add('feedback-input');\r\n\r\n    const textArea = document.createElement('textarea');\r\n    textArea.placeholder = 'Message';\r\n    textArea.name = 'text';\r\n    textArea.required = true;\r\n    textArea.classList.add('feedback-input');\r\n\r\n    const submitButton = document.createElement('input');\r\n    submitButton.type = 'submit';\r\n    submitButton.value = 'Submit';\r\n\r\n    const formArray = [nameField, emailField, textArea, submitButton];\r\n\r\n    formArray.forEach((element) => {\r\n        form.appendChild(element);\r\n    });\r\n\r\n    formContainer.appendChild(form);\r\n\r\n    return formContainer;\r\n}\r\n\r\nfunction createContactDetails() {\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.classList.add('contact-details');\r\n\r\n    const phone = document.createElement('div');\r\n    phone.classList.add('phone');\r\n\r\n    const phoneIcon = document.createElement('img');\r\n    phoneIcon.src = _phone_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    phoneIcon.id = 'phone-icon';\r\n\r\n    const phoneNumber = document.createElement('span');\r\n    phoneNumber.innerText = 'PHONE: 0113 123 1234';\r\n\r\n    phone.appendChild(phoneIcon);\r\n    phone.appendChild(phoneNumber);\r\n\r\n    const workingHours = document.createElement('div');\r\n    workingHours.classList.add('work-times');\r\n\r\n    const clockIcon = document.createElement('img');\r\n    clockIcon.src = _clock_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    clockIcon.id = 'clock-icon';\r\n\r\n    const workingHoursText = document.createElement('span');\r\n    workingHoursText.innerText = 'SUN-THUR: 08:00 - 22:00';\r\n\r\n    const workingHoursWeekend = document.createElement('span');\r\n    workingHoursWeekend.id = 'weekend';\r\n    workingHoursWeekend.innerText = 'FRI-SAT: 08:00 - 13:00';\r\n\r\n    workingHours.appendChild(clockIcon);\r\n    workingHours.appendChild(workingHoursText);\r\n    workingHours.appendChild(document.createElement('br'));\r\n    workingHours.appendChild(workingHoursWeekend);\r\n\r\n    const mapIframe = document.createElement('div');\r\n    mapIframe.classList.add('iframe-container');\r\n\r\n    const iframe = document.createElement('iframe');\r\n    iframe.setAttribute('loading', 'lazy');\r\n    iframe.setAttribute('src', mapCoordinates);\r\n\r\n    mapIframe.appendChild(iframe);\r\n\r\n    const contactDetails = [phone, workingHours, mapIframe];\r\n\r\n    contactDetails.forEach((element) => {\r\n        contactContainer.appendChild(element);\r\n    });\r\n\r\n    return contactContainer;\r\n}\r\n\r\nfunction contact() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.classList.add('contact-container');\r\n\r\n    const header = createHeader();\r\n    const formContainer = createForm();\r\n    const contactDetails = createContactDetails();\r\n\r\n    contactContainer.appendChild(formContainer);\r\n    contactContainer.appendChild(contactDetails);\r\n\r\n    const contactArray = [header, contactContainer];\r\n\r\n    contactArray.forEach((element) => {\r\n        container.appendChild(element);\r\n    });\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/clock.svg":
/*!***********************!*\
  !*** ./src/clock.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4444556a0df6e7065f7.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/clock.svg?");

/***/ }),

/***/ "./src/phone.svg":
/*!***********************!*\
  !*** ./src/phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85c5c3654e0dd27f73a6.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/phone.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contact.js");
/******/ 	
/******/ })()
;