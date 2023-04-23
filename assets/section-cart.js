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

eval("const productQuantityChangeLogic = () => {\r\n    const products = document.querySelectorAll('[product-selector]');\r\n    const cartCounter = document.querySelector('[data-cart-count]');\r\n    const cartPrice = document.querySelector('[data-cart-price]');\r\n\r\n    if (products.length > 0) {\r\n        for (const product of products) {\r\n            const productID = product.getAttribute('product-selector');\r\n            const productQuantitySelect = product.querySelector('[data-product-quantity]');\r\n            const productTotalPrice = product.querySelector('[data-product-total-price]');\r\n            \r\n            productQuantitySelect.addEventListener('change', () => {\r\n                const updateObj = {};\r\n\r\n                updateObj[productID] = productQuantitySelect.value;\r\n\r\n                fetch(window.Shopify.routes.root + 'cart/update.js', {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                    body: JSON.stringify(\r\n                        {\r\n                            updates: updateObj\r\n                        }\r\n                    )\r\n                })\r\n                .then((response) => response.json())\r\n                .then((data) => {\r\n                    console.log(data);\r\n\r\n                    for (const item of data.items) {\r\n                        if (item.id == productID) {\r\n                            productTotalPrice.innerHTML = (\"€\" + (item.final_line_price / 100));\r\n                            productQuantitySelect.value = item.quantity;\r\n                        }\r\n                    }\r\n                    \r\n                    cartCounter.innerHTML = data.item_count;\r\n                    cartPrice.innerHTML = (\"€\" + (data.total_price / 100));\r\n                })\r\n                .catch((error) => {\r\n                    console.error('Error:', error);\r\n                });\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nproductQuantityChangeLogic();\r\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-cart.js?");

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