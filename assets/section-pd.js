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

/***/ "./src/scripts/productPage/section-pd.js":
/*!***********************************************!*\
  !*** ./src/scripts/productPage/section-pd.js ***!
  \***********************************************/
/***/ (() => {

eval("const showmoreLogic = () => {\n    const sections = document.querySelectorAll('[data-product-description-section]');\n\n    for (const section of sections) {\n        const shortDescription = section.querySelector('[data-short-description]');\n        const description = section.querySelector('[data-description]');\n        const showmoreBtn = section.querySelector('[data-showmore-btn]');\n        const showlessBtn = section.querySelector('[data-showless-btn]');\n\n        const showMore = () => {\n            shortDescription.classList.add('dn');\n            description.classList.remove('dn');\n            showmoreBtn.classList.add('dn');\n            showlessBtn.classList.remove('dn');\n        }\n\n        const showLess = () => {\n            shortDescription.classList.remove('dn');\n            description.classList.add('dn');\n            showmoreBtn.classList.remove('dn');\n            showlessBtn.classList.add('dn');\n        }\n\n        showmoreBtn.addEventListener('click', () => {\n            showMore();\n        });\n\n        showlessBtn.addEventListener('click', () => {\n            showLess();\n        });\n    }\n}\n\nshowmoreLogic();\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/productPage/section-pd.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/productPage/section-pd.js"]();
/******/ 	
/******/ })()
;