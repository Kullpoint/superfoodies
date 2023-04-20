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

/***/ "./src/scripts/sections/section-collection.js":
/*!****************************************************!*\
  !*** ./src/scripts/sections/section-collection.js ***!
  \****************************************************/
/***/ (() => {

eval("const collectionBuyButtons = () => {\n    const productCards = document.querySelectorAll('[product-selector]');\n\n    for (const productCard of productCards) {\n        if (!productCard.querySelector('[data-procut-cart-buybtn]')) {\n            productCard.innerHTML += `\n                <div class=\"buy-button\" data-procut-cart-buybtn>VOEG TOE</div>\n            `;\n        }\n    }\n}\n\nconst categoriesFilter = () => {\n    const links = document.querySelectorAll('[ data-categories-link]');\n\n    for (const link of links) {\n        link.addEventListener('click', () => {\n            if (link.classList.contains('is-active')) {\n                link.classList.remove('is-active');\n                link.nextElementSibling.setAttribute('aria-hidden', 'true');\n            }\n            else {\n                for (const l of links) {\n                    l.classList.remove('is-active');\n                    l.nextElementSibling.setAttribute('aria-hidden', 'true');\n                }\n                link.classList.add('is-active');\n                link.nextElementSibling.setAttribute('aria-hidden', 'false');\n            }\n        });\n    }\n}\n\nsetInterval(() => {\n    collectionBuyButtons();\n}, 10);\n\ncategoriesFilter();\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/section-collection.js"]();
/******/ 	
/******/ })()
;