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

/***/ "./src/scripts/sections/section-blog.js":
/*!**********************************************!*\
  !*** ./src/scripts/sections/section-blog.js ***!
  \**********************************************/
/***/ (() => {

eval("//blog posts filter\nconst allPostsBtn = document.querySelector('[all-posts-btn]');\nconst tagHandle = window.location.href.split('/').slice(-1)[0];\nconst filterBtn = document.querySelectorAll('[filter-btn]');\n\nfor(let btn of filterBtn) {\n    const btnHref = btn.getAttribute('href').split('/').slice(-1)[0];\n    btn.parentElement.classList.remove('active');\n    \n    if (btnHref === tagHandle) {\n        allPostsBtn.classList.remove('active');\n        btn.parentElement.classList.add('active');\n    }\n\n}\n\n//open filter for mobile devices\nconst openBtn = document.querySelector('[open-filter]');\nconst filterBody = document.querySelector('[filter-body]');\n\nopenBtn.addEventListener('click', () => {\n    filterBody.classList.toggle('active');\n    openBtn.classList.toggle('active');\n})\n\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/sections/section-blog.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/section-blog.js"]();
/******/ 	
/******/ })()
;