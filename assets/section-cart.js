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

eval("const productQuantityChangeLogic = () => {\n    const products = document.querySelectorAll('[product-selector]');\n    const cartCounter = document.querySelector('[data-cart-count]');\n    const cartPrice = document.querySelector('[data-cart-price]');\n\n    if (products.length > 0) {\n        for (const product of products) {\n            const productID = product.getAttribute('product-selector');\n            const productQuantitySelect = product.querySelector('[data-product-quantity]');\n            const productTotalPrice = product.querySelector('[data-product-total-price]');\n            \n            productQuantitySelect.addEventListener('change', () => {\n                const updateObj = {};\n\n                updateObj[productID] = productQuantitySelect.value;\n\n                fetch(window.Shopify.routes.root + 'cart/update.js', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(\n                        {\n                            updates: updateObj\n                        }\n                    )\n                })\n                .then((response) => response.json())\n                .then((data) => {\n                    console.log(data);\n\n                    for (const item of data.items) {\n                        if (item.id == productID) {\n                            productTotalPrice.innerHTML = (\"€\" + (item.final_line_price / 100));\n                            productQuantitySelect.value = item.quantity;\n                        }\n                    }\n                    \n                    cartCounter.innerHTML = data.item_count;\n                    cartPrice.innerHTML = (\"€\" + (data.total_price / 100));\n                })\n                .catch((error) => {\n                    console.error('Error:', error);\n                });\n            });\n        }\n    }\n}\n\nproductQuantityChangeLogic();\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-cart.js?");

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