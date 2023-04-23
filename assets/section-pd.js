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

eval("const showmoreLogic = () => {\r\n    const sections = document.querySelectorAll('[data-product-description-section]');\r\n\r\n    for (const section of sections) {\r\n        const shortDescription = section.querySelector('[data-short-description]');\r\n        const description = section.querySelector('[data-description]');\r\n        const showmoreBtn = section.querySelector('[data-showmore-btn]');\r\n        const showlessBtn = section.querySelector('[data-showless-btn]');\r\n\r\n        if (showmoreBtn) {\r\n            const showMore = () => {\r\n                shortDescription.classList.add('dn');\r\n                description.classList.remove('dn');\r\n                showmoreBtn.classList.add('dn');\r\n                showlessBtn.classList.remove('dn');\r\n            }\r\n    \r\n            const showLess = () => {\r\n                shortDescription.classList.remove('dn');\r\n                description.classList.add('dn');\r\n                showmoreBtn.classList.remove('dn');\r\n                showlessBtn.classList.add('dn');\r\n            }\r\n    \r\n            showmoreBtn.addEventListener('click', () => {\r\n                showMore();\r\n            });\r\n    \r\n            showlessBtn.addEventListener('click', () => {\r\n                showLess();\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nshowmoreLogic();\r\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/productPage/section-pd.js?");

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