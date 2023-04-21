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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_loginModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loginModal */ \"./src/scripts/components/loginModal.js\");\n/* harmony import */ var _modules_showHidePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showHidePassword */ \"./src/scripts/modules/showHidePassword.js\");\n\n\n\nconst removePreloader = () => {\n    const preloader = document.getElementById('preloader');\n\n    setTimeout(() => {\n        document.body.style.overflow = '';\n        preloader.classList.add('hidden');\n        setTimeout(() => {\n            preloader.classList.add('dn');\n        }, 500);\n    }, 300);\n}\n\nconst megaMenuLogic = () => {\n    const links = document.querySelectorAll('[data-mega-menu-link]');\n    const menus = document.querySelectorAll('[data-mega-menu]');\n\n    for (const link of links) {\n        for (const menu of menus) {\n            if (link.getAttribute('data-mega-menu-link') == menu.getAttribute('data-mega-menu')) {\n                const openMenu = () => {\n                    menu.classList.remove('dn');\n                    setTimeout(() => {\n                        menu.classList.add('active');\n                    }, 1);\n                }\n\n                const closeMenu = () => {\n                    menu.classList.remove('active');\n                    setTimeout(() => {\n                        menu.classList.add('dn');\n                    }, 300);\n                }\n\n                link.addEventListener('mouseover', () => {\n                    openMenu();\n                });\n\n                link.addEventListener('mouseleave', (e) => {\n                    if (e.toElement == menu) {\n                        return;\n                    }\n\n                    closeMenu();\n                });\n\n                menu.addEventListener('mouseleave', (e) => {\n                    if (e.toElement == link) {\n                        return;\n                    }\n\n                    closeMenu();\n                });\n\n                break;\n            }\n        }\n    }\n}\n\nconst mobileMenuLogic = () => {\n    const mobileMenu = document.getElementById('mobile-menu');\n    const openBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');\n    const closeBtns = document.querySelectorAll(['[data-mobile-menu-close-btn]']);\n    const links = document.querySelectorAll('[data-mobile-megamenu-link]');\n    const menus = document.querySelectorAll('[data-mobile-megamenu]');\n\n    //open/close mobile menu logic\n    const openMobileMenu = () => {\n        mobileMenu.classList.remove('dn');\n        setTimeout(() => {\n            mobileMenu.classList.add('active');\n        }, 1);\n    }\n\n    const closeMobileMenu = () => {\n        mobileMenu.classList.remove('active');\n        setTimeout(() => {\n            mobileMenu.classList.add('dn');\n        }, 300);\n\n        //close all megamenus\n        for (const menu of menus) {\n            const closeMenu = () => {\n                menu.classList.remove('active');\n                setTimeout(() => {\n                    menu.classList.add('dn');\n                }, 300);\n            }\n\n            closeMenu();\n        }\n    }\n\n    for (const openBtn of openBtns) {\n        openBtn.addEventListener('click', () => {\n            if (mobileMenu.classList.contains('active')) {\n                closeMobileMenu();\n            }\n            else {\n                openMobileMenu();\n            }\n        });\n    }\n\n    for (const closeBtn of closeBtns) {\n        closeBtn.addEventListener('click', () => {\n            closeMobileMenu();\n        });\n    }\n\n    //megamenus logic\n    for (const link of links) {\n        for (const menu of menus) {\n            if (link.getAttribute('data-mobile-megamenu-link') == menu.getAttribute('data-mobile-megamenu')) {\n                const backBtn = menu.querySelector('[data-mobile-megamenu-back-btn]');\n\n                const openMenu = () => {\n                    menu.classList.remove('dn');\n                    setTimeout(() => {\n                        menu.classList.add('active');\n                    }, 1);\n                }\n\n                const closeMenu = () => {\n                    menu.classList.remove('active');\n                    setTimeout(() => {\n                        menu.classList.add('dn');\n                    }, 300);\n                }\n\n                link.addEventListener('click', () => {\n                    openMenu();\n                });\n\n                backBtn.addEventListener('click', () => {\n                    closeMenu();\n                });\n\n                break;\n            }\n        }\n    }\n}\n\nconst mobileSearchLogic = () => {\n    const search = document.querySelector('[data-header-search]');\n    const openBtns = document.querySelectorAll('[data-mobile-search-open-btn]');\n    const closeBtns = document.querySelectorAll('[data-mobile-search-close-btn]');\n\n    const searchOpen = () => {\n        search.classList.remove('dn');\n        setTimeout(() => {\n            search.classList.add('active');\n        }, 1);\n    }\n\n    const searchClose = () => {\n        search.classList.remove('active');\n        setTimeout(() => {\n            search.classList.add('dn');\n        }, 300);\n    }\n\n    for (const openBtn of openBtns) {\n        openBtn.addEventListener('click', () => {\n            if (search.classList.contains('active')) {\n                searchClose();\n            }\n            else {\n                searchOpen();\n            }\n        });\n    }\n\n    for (const closeBtn of closeBtns) {\n        closeBtn.addEventListener('click', () => {\n            searchClose();\n        });\n    }\n}\n\nconst addToCartLogic = () => {\n    if (window.allPageProducts) {\n        const products = document.querySelectorAll('[product-selector]');\n\n        if (products.length > 0) {\n            for (const product of products) {\n                const productID = product.getAttribute('product-selector');\n    \n                for (const allPageProduct of window.allPageProducts) {\n                    if (allPageProduct.id == productID) {\n                        if (!product.classList.contains('logic')) {\n                            product.classList.add('logic');\n                            const productSubmit = product.querySelector('[data-procut-cart-buybtn]');\n                            const varantId = allPageProduct.variants[0].id;\n                            \n                            productSubmit.addEventListener('click', () => {\n                                const productQuantity = product.querySelector('[data-product-quantity]');\n                                const updateObj = {};\n            \n                                if (productQuantity) {\n                                    updateObj[varantId] = productQuantity.value;\n                                }\n                                else {\n                                    updateObj[varantId] = 1;\n                                }\n            \n                                fetch(window.Shopify.routes.root + 'cart/update.js', {\n                                    method: 'POST',\n                                    headers: {\n                                        'Content-Type': 'application/json'\n                                    },\n                                    body: JSON.stringify(\n                                        {\n                                            updates: updateObj\n                                        }\n                                    )\n                                })\n                                .then((response) => response.json())\n                                .then((data) => {\n                                    console.log(data);\n                                    // for (const item of data.items) {\n                                    //     if (item.id == allPageProduct.id) {\n                                    //         if (Array.from(document.querySelectorAll(\"[data-product-item]\")).some((product) => product.getAttribute(\"data-product-item\") == productId.value)) {\n                                    //             for (const product of document.querySelectorAll(\"[data-product-item]\")) {\n                                    //                 if (product.getAttribute(\"data-product-item\") == productId.value) {\n                                    //                     const productPrice = product.querySelector(\"[data-product-price]\");\n                                    //                     const quantityInput = product.querySelector(\"[data-product-quantity]\");\n                                    //                     productPrice.innerHTML = (\"€\" + (+item.final_line_price / 100));\n                                    //                     quantityInput.value = +item.quantity;\n                                    //                     break;\n                                    //                 }\n                                    //             }\n                                    //         }\n                                    //         else {\n                                    //             //add please varinats for product__material\n                                                \n                                    //             cartProductsBlock.innerHTML = `\n                                    //                 <div class=\"cart-block__product\" data-product-item=\"${ item.id }\">\n                                    //                     <img src=\"${ item.featured_image.url}\" alt=\"product image\" width=\"auto\" height=\"auto\" loading=\"lazy\" class=\"product__image\">\n                                    //                     <h3 class=\"product__title\">${ item.product_title }</h3>\n                                    //                     <div class=\"product__material\" pf>${ item.variant_options[0] }</div>\n                                    //                     <div class=\"product__counter\">\n                                    //                         <div data-product-quantity-minus>-</div>\n                                    //                         <input name=\"updates[]\" class=\"count\" value=\"${ item.quantity }\" readonly data-product-quantity>\n                                    //                         <div data-product-quantity-plus>+</div>\n                                    //                     </div>\n                                    //                     <div class=\"product__price\" data-product-price=\"${ item.final_line_price }\">\n                                    //                         ${ \"€\" + (+item.final_line_price / 100) }\n                                    //                     </div>\n                                    //                     <div class=\"product__remove\" data-product-remove>\n                                    //                         <svg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\">\n                                    //                             <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.72451 0.857143C6.36856 0.857143 6.02719 0.992602 5.7755 1.23372C5.5238 1.47484 5.3824 1.80186 5.3824 2.14286V3.43025H11.6456V2.14286C11.6456 1.80186 11.5042 1.47484 11.2525 1.23372C11.0008 0.992602 10.6594 0.857143 10.3035 0.857143H6.72451ZM12.5403 3.43025V2.14286C12.5403 1.57454 12.3046 1.02949 11.8851 0.627628C11.4657 0.225765 10.8967 0 10.3035 0H6.72451C6.13126 0 5.56231 0.225765 5.14282 0.627628C4.72333 1.02949 4.48766 1.57454 4.48766 2.14286V3.43025H2.29064C2.27752 3.42914 2.26424 3.42857 2.25082 3.42857C2.23741 3.42857 2.22413 3.42914 2.21101 3.43025H0.447368C0.200294 3.43025 0 3.62212 0 3.85882C0 4.09551 0.200294 4.28739 0.447368 4.28739H1.80345V15.8571C1.80345 16.4255 2.03912 16.9705 2.45861 17.3724C2.8781 17.7742 3.44705 18 4.0403 18H12.9877C13.5809 18 14.1499 17.7742 14.5694 17.3724C14.9888 16.9705 15.2245 16.4255 15.2245 15.8571V4.28739H16.5526C16.7997 4.28739 17 4.09551 17 3.85882C17 3.62212 16.7997 3.43025 16.5526 3.43025H14.817C14.8038 3.42914 14.7906 3.42857 14.7771 3.42857C14.7637 3.42857 14.7504 3.42914 14.7373 3.43025H12.5403ZM14.3298 4.28739H2.69819V15.8571C2.69819 16.1981 2.83959 16.5252 3.09128 16.7663C3.34298 17.0074 3.68435 17.1429 4.0403 17.1429H12.9877C13.3436 17.1429 13.685 17.0074 13.9367 16.7663C14.1884 16.5252 14.3298 16.1981 14.3298 15.8571V4.28739ZM6.69655 7.71429C6.94362 7.71429 7.14392 7.90616 7.14392 8.14286V13.2857C7.14392 13.5224 6.94362 13.7143 6.69655 13.7143C6.44947 13.7143 6.24918 13.5224 6.24918 13.2857V8.14286C6.24918 7.90616 6.44947 7.71429 6.69655 7.71429ZM10.3035 7.71429C10.5505 7.71429 10.7508 7.90616 10.7508 8.14286V13.2857C10.7508 13.5224 10.5505 13.7143 10.3035 13.7143C10.0564 13.7143 9.85609 13.5224 9.85609 13.2857V8.14286C9.85609 7.90616 10.0564 7.71429 10.3035 7.71429Z\" fill=\"black\"/>\n                                    //                         </svg>\n                                    //                     </div>\n                                    //                 </div>\n                                    //             `;\n                        \n                                    //             for (const i of data.items) {\n                                    //                 if (i.id != productId.value) {\n                                    //                     cartProductsBlock.innerHTML += `\n                                    //                         <div class=\"cart-block__product\" data-product-item=\"${ i.id }\">\n                                    //                             <img src=\"${ i.featured_image.url}\" alt=\"product image\" width=\"auto\" height=\"auto\" loading=\"lazy\" class=\"product__image\">\n                                    //                             <h3 class=\"product__title\">${ i.product_title }</h3>\n                                    //                             <div class=\"product__material\">${ i.variant_options[0] }</div>\n                                    //                             <div class=\"product__counter\">\n                                    //                                 <div data-product-quantity-minus>-</div>\n                                    //                                 <input name=\"updates[]\" class=\"count\" value=\"${ i.quantity }\" readonly data-product-quantity>\n                                    //                                 <div data-product-quantity-plus>+</div>\n                                    //                             </div>\n                                    //                             <div class=\"product__price\" data-product-price=\"${ i.final_line_price }\">\n                                    //                                 ${ \"€\" + (+i.final_line_price / 100) }\n                                    //                             </div>\n                                    //                             <div class=\"product__remove\" data-product-remove>\n                                    //                                 <svg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\">\n                                    //                                     <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.72451 0.857143C6.36856 0.857143 6.02719 0.992602 5.7755 1.23372C5.5238 1.47484 5.3824 1.80186 5.3824 2.14286V3.43025H11.6456V2.14286C11.6456 1.80186 11.5042 1.47484 11.2525 1.23372C11.0008 0.992602 10.6594 0.857143 10.3035 0.857143H6.72451ZM12.5403 3.43025V2.14286C12.5403 1.57454 12.3046 1.02949 11.8851 0.627628C11.4657 0.225765 10.8967 0 10.3035 0H6.72451C6.13126 0 5.56231 0.225765 5.14282 0.627628C4.72333 1.02949 4.48766 1.57454 4.48766 2.14286V3.43025H2.29064C2.27752 3.42914 2.26424 3.42857 2.25082 3.42857C2.23741 3.42857 2.22413 3.42914 2.21101 3.43025H0.447368C0.200294 3.43025 0 3.62212 0 3.85882C0 4.09551 0.200294 4.28739 0.447368 4.28739H1.80345V15.8571C1.80345 16.4255 2.03912 16.9705 2.45861 17.3724C2.8781 17.7742 3.44705 18 4.0403 18H12.9877C13.5809 18 14.1499 17.7742 14.5694 17.3724C14.9888 16.9705 15.2245 16.4255 15.2245 15.8571V4.28739H16.5526C16.7997 4.28739 17 4.09551 17 3.85882C17 3.62212 16.7997 3.43025 16.5526 3.43025H14.817C14.8038 3.42914 14.7906 3.42857 14.7771 3.42857C14.7637 3.42857 14.7504 3.42914 14.7373 3.43025H12.5403ZM14.3298 4.28739H2.69819V15.8571C2.69819 16.1981 2.83959 16.5252 3.09128 16.7663C3.34298 17.0074 3.68435 17.1429 4.0403 17.1429H12.9877C13.3436 17.1429 13.685 17.0074 13.9367 16.7663C14.1884 16.5252 14.3298 16.1981 14.3298 15.8571V4.28739ZM6.69655 7.71429C6.94362 7.71429 7.14392 7.90616 7.14392 8.14286V13.2857C7.14392 13.5224 6.94362 13.7143 6.69655 13.7143C6.44947 13.7143 6.24918 13.5224 6.24918 13.2857V8.14286C6.24918 7.90616 6.44947 7.71429 6.69655 7.71429ZM10.3035 7.71429C10.5505 7.71429 10.7508 7.90616 10.7508 8.14286V13.2857C10.7508 13.5224 10.5505 13.7143 10.3035 13.7143C10.0564 13.7143 9.85609 13.5224 9.85609 13.2857V8.14286C9.85609 7.90616 10.0564 7.71429 10.3035 7.71429Z\" fill=\"black\"/>\n                                    //                                 </svg>\n                                    //                             </div>\n                                    //                         </div>\n                                    //                     `;\n                                    //                 }\n                                    //             }\n                        \n                                    //             productQuanityRecalculation();\n                                                \n                                    //         }\n                                    //         break;\n                                    //     }\n                                    // }\n                        \n                                    // cartSubtotalPrice.innerHTML = (\"€\" + (+data.total_price / 100));\n                                    cartItemsCount.innerHTML = data.item_count;\n                                })\n                                .catch((error) => {\n                                    console.error('Error:', error);\n                                });\n                            });\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\nconst videoLogic = () => {\n    const videoContainers = document.querySelectorAll('[data-video-container]');\n\n    if (videoContainers.length) {\n        for (const videoContainer of videoContainers) {\n            const video = videoContainer.querySelector('[data-video]');\n            const videoPlayZone = videoContainer.querySelector('[data-video-playzone]');\n            const videoPlayButton = videoContainer.querySelector('[data-video-btn=\"play\"]');\n            const videoPauseButton = videoContainer.querySelector('[data-video-btn=\"pause\"]');\n\n            const playVideo = () => {\n                videoPlayButton.classList.add('dn');\n                videoPlayZone.classList.add('dn');\n                videoPauseButton.classList.remove('dn');\n                video.play();\n            }\n\n            const pauseVideo = () => {\n                videoPauseButton.classList.add('dn');\n                videoPlayButton.classList.remove('dn');\n                videoPlayZone.classList.remove('dn');\n                video.pause();\n            }\n\n            video.addEventListener('click', () => {\n                pauseVideo();\n            });\n\n            videoPlayZone.addEventListener('click', () => {\n                playVideo();\n            });\n\n            videoPlayButton.addEventListener('click', () => {\n                playVideo();\n            });\n\n            videoPauseButton.addEventListener('click', () => {\n                pauseVideo();\n            });\n        }\n    }\n}\n\nconst yearChanger = () => {\n    const yearBlock = document.getElementById('current-year');\n    const currentYear = new Date().getFullYear();\n\n    yearBlock.innerHTML = currentYear;\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    removePreloader();\n    megaMenuLogic();\n    mobileMenuLogic();\n    mobileSearchLogic();\n    setInterval(() => {\n        addToCartLogic();\n    }, 100);\n    videoLogic();\n    yearChanger();\n    (0,_components_loginModal__WEBPACK_IMPORTED_MODULE_0__.loginModal)();\n    (0,_modules_showHidePassword__WEBPACK_IMPORTED_MODULE_1__.showHidePassword)();\n});\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/application.js?");

/***/ }),

/***/ "./src/scripts/components/loginModal.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/loginModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginModal\": () => (/* binding */ loginModal)\n/* harmony export */ });\nconst loginModal = () => {\n    const form = document.getElementById('customer_login');\n    const submitBtn = document.getElementById('login_submit_btn');\n\n    submitBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n\n        fetch('/account/login', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: form\n        })\n        .then((response) => response.json())\n        .then((data) => {\n            console.log(data);\n        })\n        .catch((error) => {\n            console.error('Error:', error);\n        });\n    });\n}\n\n\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/components/loginModal.js?");

/***/ }),

/***/ "./src/scripts/modules/showHidePassword.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/showHidePassword.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHidePassword\": () => (/* binding */ showHidePassword)\n/* harmony export */ });\nconst showHidePassword = () => {\n    const containers = document.querySelectorAll('[data-show-hide-password-container]');\n\n    if (containers.length > 0) {\n        for (const container of containers) {\n            const passwordInput = container.querySelector('[data-show-hide-password-input=\"password\"]');\n            const showPasswordBtn = container.querySelector('[data-show-hide-password-button=\"show_password\"]');\n            const hidePasswordBtn = container.querySelector('[data-show-hide-password-button=\"hide_password\"]');\n\n            showPasswordBtn.addEventListener('click', () => {\n                passwordInput.setAttribute('type', 'password');\n                showPasswordBtn.classList.add('dn');\n                hidePasswordBtn.classList.remove('dn');\n            });\n        \n            hidePasswordBtn.addEventListener('click', () => {\n                passwordInput.setAttribute('type', 'text');\n                showPasswordBtn.classList.remove('dn');\n                hidePasswordBtn.classList.add('dn');\n            });\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://superfoodies/./src/scripts/modules/showHidePassword.js?");

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