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

/***/ "./src/scripts/sections/section-cart.js":
/*!**********************************************!*\
  !*** ./src/scripts/sections/section-cart.js ***!
  \**********************************************/
/***/ (() => {

eval("// counter\n\nconst counterIncreaseBtn = document.querySelector('[counter-btn-top]');\nconst counterDecreaseBtn = document.querySelector('[counter-btn-bottom]');\nconst counterInput = document.getElementById('counterInput');\n\nconst counter = () => {\n    counterIncreaseBtn.addEventListener('click', () => {\n        if(counterInput.value < 10){\n            counterInput.value = +counterInput.value + 1;\n        }\n        \n    });\n\n    counterDecreaseBtn.addEventListener('click', () => {\n        if(counterInput.value > 0){\n            counterInput.value = +counterInput.value - 1;\n        }\n    })\n}\n\ncounter()\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-cart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/section-cart.js"]();
/******/ 	
/******/ })()
;