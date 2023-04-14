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

eval("const questionsLogic = () => {\n    const items = document.querySelectorAll('[data-questions-item]');\n\n    for (const item of items) {\n        const title = item.querySelector('[data-questions-item-title]');\n        const content = item.querySelector('[data-questions-item-content]');\n        const minusIcon = item.querySelector('[data-questions-item-minus-icon]');\n        const plusIcon = item.querySelector('[data-questions-item-plus-icon]');\n\n        const openLogic = () => {\n            content.classList.remove('dn');\n            minusIcon.classList.remove('dn');\n            plusIcon.classList.add('dn');\n        }\n\n        const closeLogic = () => {\n            content.classList.add('dn');\n            minusIcon.classList.add('dn');\n            plusIcon.classList.remove('dn');\n        }\n\n        title.addEventListener('click', () => {\n            if (minusIcon.classList.contains('dn')) {\n                openLogic();\n            }\n            else {\n                closeLogic();\n            }\n        });\n    }\n}\n\nquestionsLogic();\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-questions.js?");

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