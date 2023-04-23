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

eval("const collectionBuyButtons = () => {\r\n    if (window.allPageProducts) {\r\n        const products = document.querySelectorAll('[product-selector]');\r\n\r\n        if (products.length > 0) {\r\n            for (const product of products) {\r\n                const productID = product.getAttribute('product-selector');\r\n    \r\n                for (const allPageProduct of window.allPageProducts) {\r\n                    if (allPageProduct.id == productID) {\r\n                        if (allPageProduct.available != false) {\r\n                            if (!product.querySelector('[data-procut-cart-buybtn]')) {\r\n                                product.innerHTML += `\r\n                                    <div class=\"buy-button\" data-procut-cart-buybtn>VOEG TOE</div>\r\n                                `;\r\n                            }\r\n                        }\r\n                        else {\r\n                            if (!product.querySelector('[data-procut-cart-subscribe]')) {\r\n                                product.innerHTML += `\r\n                                    <a href=\"${product.closest('[product-selector]').querySelector('a').getAttribute('href')}\" class=\"buy-button\" data-procut-cart-subscribe>BEKIJKEN</a>\r\n                                `;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst categoriesFilter = () => {\r\n    const links = document.querySelectorAll('[ data-categories-link]');\r\n\r\n    for (const link of links) {\r\n        link.addEventListener('click', () => {\r\n            if (link.classList.contains('is-active')) {\r\n                link.classList.remove('is-active');\r\n                link.nextElementSibling.setAttribute('aria-hidden', 'true');\r\n            }\r\n            else {\r\n                for (const l of links) {\r\n                    l.classList.remove('is-active');\r\n                    l.nextElementSibling.setAttribute('aria-hidden', 'true');\r\n                }\r\n                link.classList.add('is-active');\r\n                link.nextElementSibling.setAttribute('aria-hidden', 'false');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nsetInterval(() => {\r\n    collectionBuyButtons();\r\n}, 10);\r\n\r\ncategoriesFilter();\r\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-collection.js?");

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