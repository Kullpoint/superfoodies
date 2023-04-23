/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sections/section-questions.js":
/*!***************************************************!*\
  !*** ./src/scripts/sections/section-questions.js ***!
  \***************************************************/
/***/ (() => {

eval("const questionsLogic = () => {\r\n    const items = document.querySelectorAll('[data-questions-item]');\r\n\r\n    for (const item of items) {\r\n        const title = item.querySelector('[data-questions-item-title]');\r\n        const content = item.querySelector('[data-questions-item-content]');\r\n        const minusIcon = item.querySelector('[data-questions-item-minus-icon]');\r\n        const plusIcon = item.querySelector('[data-questions-item-plus-icon]');\r\n\r\n        const openLogic = () => {\r\n            content.classList.remove('dn');\r\n            minusIcon.classList.remove('dn');\r\n            plusIcon.classList.add('dn');\r\n        }\r\n\r\n        const closeLogic = () => {\r\n            content.classList.add('dn');\r\n            minusIcon.classList.add('dn');\r\n            plusIcon.classList.remove('dn');\r\n        }\r\n\r\n        title.addEventListener('click', () => {\r\n            if (minusIcon.classList.contains('dn')) {\r\n                openLogic();\r\n            }\r\n            else {\r\n                closeLogic();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nquestionsLogic();\r\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-questions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/section-questions.js"]();
/******/ 	
/******/ })()
;