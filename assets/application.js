/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/application.js":
/*!************************************!*\
  !*** ./src/scripts/application.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_productQuantityChanger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/productQuantityChanger */ \"./src/scripts/modules/productQuantityChanger.js\");\n\n\nconst removePreloader = () => {\n    const preloader = document.getElementById('preloader');\n\n    setTimeout(() => {\n        document.body.style.overflow = '';\n        preloader.classList.add('hidden');\n        setTimeout(() => {\n            preloader.classList.add('dn');\n        }, 500);\n    }, 300);\n}\n\nconst megaMenuLogic = () => {\n    const links = document.querySelectorAll('[data-mega-menu-link]');\n    const menus = document.querySelectorAll('[data-mega-menu]');\n\n    for (const link of links) {\n        for (const menu of menus) {\n            if (link.getAttribute('data-mega-menu-link') == menu.getAttribute('data-mega-menu')) {\n                const openMenu = () => {\n                    menu.classList.remove('dn');\n                    setTimeout(() => {\n                        menu.classList.add('active');\n                    }, 1);\n                }\n\n                const closeMenu = () => {\n                    menu.classList.remove('active');\n                    setTimeout(() => {\n                        menu.classList.add('dn');\n                    }, 300);\n                }\n\n                link.addEventListener('mouseover', () => {\n                    openMenu();\n                });\n\n                link.addEventListener('mouseleave', (e) => {\n                    if (e.toElement == menu) {\n                        return;\n                    }\n\n                    closeMenu();\n                });\n\n                menu.addEventListener('mouseleave', (e) => {\n                    if (e.toElement == link) {\n                        return;\n                    }\n\n                    closeMenu();\n                });\n\n                break;\n            }\n        }\n    }\n}\n\nconst mobileMenuLogic = () => {\n    const mobileMenu = document.getElementById('mobile-menu');\n    const openBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');\n    const closeBtns = document.querySelectorAll(['[data-mobile-menu-close-btn]']);\n    const links = document.querySelectorAll('[data-mobile-megamenu-link]');\n    const menus = document.querySelectorAll('[data-mobile-megamenu]');\n\n    //open/close mobile menu logic\n    const openMobileMenu = () => {\n        mobileMenu.classList.remove('dn');\n        setTimeout(() => {\n            mobileMenu.classList.add('active');\n        }, 1);\n    }\n\n    const closeMobileMenu = () => {\n        mobileMenu.classList.remove('active');\n        setTimeout(() => {\n            mobileMenu.classList.add('dn');\n        }, 300);\n\n        //close all megamenus\n        for (const menu of menus) {\n            const closeMenu = () => {\n                menu.classList.remove('active');\n                setTimeout(() => {\n                    menu.classList.add('dn');\n                }, 300);\n            }\n\n            closeMenu();\n        }\n    }\n\n    for (const openBtn of openBtns) {\n        openBtn.addEventListener('click', () => {\n            if (mobileMenu.classList.contains('active')) {\n                closeMobileMenu();\n            }\n            else {\n                openMobileMenu();\n            }\n        });\n    }\n\n    for (const closeBtn of closeBtns) {\n        closeBtn.addEventListener('click', () => {\n            closeMobileMenu();\n        });\n    }\n\n    //megamenus logic\n    for (const link of links) {\n        for (const menu of menus) {\n            if (link.getAttribute('data-mobile-megamenu-link') == menu.getAttribute('data-mobile-megamenu')) {\n                const backBtn = menu.querySelector('[data-mobile-megamenu-back-btn]');\n\n                const openMenu = () => {\n                    menu.classList.remove('dn');\n                    setTimeout(() => {\n                        menu.classList.add('active');\n                    }, 1);\n                }\n\n                const closeMenu = () => {\n                    menu.classList.remove('active');\n                    setTimeout(() => {\n                        menu.classList.add('dn');\n                    }, 300);\n                }\n\n                link.addEventListener('click', () => {\n                    openMenu();\n                });\n\n                backBtn.addEventListener('click', () => {\n                    closeMenu();\n                });\n\n                break;\n            }\n        }\n    }\n}\n\nconst mobileSearchLogic = () => {\n    const search = document.querySelector('[data-header-search]');\n    const openBtns = document.querySelectorAll('[data-mobile-search-open-btn]');\n    const closeBtns = document.querySelectorAll('[data-mobile-search-close-btn]');\n\n    const searchOpen = () => {\n        search.classList.remove('dn');\n        setTimeout(() => {\n            search.classList.add('active');\n        }, 1);\n    }\n\n    const searchClose = () => {\n        search.classList.remove('active');\n        setTimeout(() => {\n            search.classList.add('dn');\n        }, 300);\n    }\n\n    for (const openBtn of openBtns) {\n        openBtn.addEventListener('click', () => {\n            if (search.classList.contains('active')) {\n                searchClose();\n            }\n            else {\n                searchOpen();\n            }\n        });\n    }\n\n    for (const closeBtn of closeBtns) {\n        closeBtn.addEventListener('click', () => {\n            searchClose();\n        });\n    }\n}\n\nconst videoLogic = () => {\n    const videoContainers = document.querySelectorAll('[data-video-container]');\n\n    if (videoContainers.length) {\n        for (const videoContainer of videoContainers) {\n            const video = videoContainer.querySelector('[data-video]');\n            const videoPlayZone = videoContainer.querySelector('[data-video-playzone]');\n            const videoPlayButton = videoContainer.querySelector('[data-video-btn=\"play\"]');\n            const videoPauseButton = videoContainer.querySelector('[data-video-btn=\"pause\"]');\n\n            const playVideo = () => {\n                videoPlayButton.classList.add('dn');\n                videoPlayZone.classList.add('dn');\n                videoPauseButton.classList.remove('dn');\n                video.play();\n            }\n\n            const pauseVideo = () => {\n                videoPauseButton.classList.add('dn');\n                videoPlayButton.classList.remove('dn');\n                videoPlayZone.classList.remove('dn');\n                video.pause();\n            }\n\n            video.addEventListener('click', () => {\n                pauseVideo();\n            });\n\n            videoPlayZone.addEventListener('click', () => {\n                playVideo();\n            });\n\n            videoPlayButton.addEventListener('click', () => {\n                playVideo();\n            });\n\n            videoPauseButton.addEventListener('click', () => {\n                pauseVideo();\n            });\n        }\n    }\n}\n\nconst yearChanger = () => {\n    const yearBlock = document.getElementById('current-year');\n    const currentYear = new Date().getFullYear();\n\n    yearBlock.innerHTML = currentYear;\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    removePreloader();\n    megaMenuLogic();\n    mobileMenuLogic();\n    mobileSearchLogic();\n    videoLogic();\n    yearChanger();\n    (0,_modules_productQuantityChanger__WEBPACK_IMPORTED_MODULE_0__.productQuantityChanger)();\n});\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/application.js?");

/***/ }),

/***/ "./src/scripts/modules/productQuantityChanger.js":
/*!*******************************************************!*\
  !*** ./src/scripts/modules/productQuantityChanger.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productQuantityChanger\": () => (/* binding */ productQuantityChanger)\n/* harmony export */ });\nconst productQuantityChanger = () => {\n    //Press alt + f4 to make it works\n}\n\n\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/modules/productQuantityChanger.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/application.js");
/******/ 	
/******/ })()
;