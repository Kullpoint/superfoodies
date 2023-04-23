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

/***/ "./src/scripts/sections/section-search.js":
/*!************************************************!*\
  !*** ./src/scripts/sections/section-search.js ***!
  \************************************************/
/***/ (() => {

eval("const searchBuyButtons = () => {\r\n    const products = document.querySelectorAll('.clerk-design-product');\r\n\r\n    if (products.length > 0) {\r\n        for (const product of products) {\r\n            if (!product.querySelector('[data-procut-cart-buybtn]')) {\r\n                if (product.querySelector('[data-action=\"add-to-cart\"]').innerHTML != 'BEKIJKEN') {\r\n                    product.querySelector('[data-action=\"add-to-cart\"]').remove();\r\n                    product.querySelector('form').innerHTML += `\r\n                        <div class=\"buy-button\" data-procut-cart-buybtn>VOEG TOE</div>\r\n                    `;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nsetInterval(() => {\r\n    searchBuyButtons();\r\n}, 10);\r\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/section-search.js"]();
/******/ 	
/******/ })()
;