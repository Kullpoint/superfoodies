import { loginModal } from './components/loginModal';
import { showHidePassword } from './modules/showHidePassword';

const removePreloader = () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        document.body.style.overflow = '';
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.classList.add('dn');
        }, 500);
    }, 300);
}

const megaMenuLogic = () => {
    const links = document.querySelectorAll('[data-mega-menu-link]');
    const menus = document.querySelectorAll('[data-mega-menu]');

    for (const link of links) {
        for (const menu of menus) {
            if (link.getAttribute('data-mega-menu-link') == menu.getAttribute('data-mega-menu')) {
                const openMenu = () => {
                    menu.classList.remove('dn');
                    setTimeout(() => {
                        menu.classList.add('active');
                    }, 1);
                }

                const closeMenu = () => {
                    menu.classList.remove('active');
                    setTimeout(() => {
                        menu.classList.add('dn');
                    }, 300);
                }

                link.addEventListener('mouseover', () => {
                    openMenu();
                });

                link.addEventListener('mouseleave', (e) => {
                    if (e.toElement == menu) {
                        return;
                    }

                    closeMenu();
                });

                menu.addEventListener('mouseleave', (e) => {
                    if (e.toElement == link) {
                        return;
                    }

                    closeMenu();
                });

                break;
            }
        }
    }
}

const mobileMenuLogic = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const openBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const closeBtns = document.querySelectorAll(['[data-mobile-menu-close-btn]']);
    const links = document.querySelectorAll('[data-mobile-megamenu-link]');
    const menus = document.querySelectorAll('[data-mobile-megamenu]');

    //open/close mobile menu logic
    const openMobileMenu = () => {
        mobileMenu.classList.remove('dn');
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 1);
    }

    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.classList.add('dn');
        }, 300);

        //close all megamenus
        for (const menu of menus) {
            const closeMenu = () => {
                menu.classList.remove('active');
                setTimeout(() => {
                    menu.classList.add('dn');
                }, 300);
            }

            closeMenu();
        }
    }

    for (const openBtn of openBtns) {
        openBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
            else {
                openMobileMenu();
            }
        });
    }

    for (const closeBtn of closeBtns) {
        closeBtn.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    //megamenus logic
    for (const link of links) {
        for (const menu of menus) {
            if (link.getAttribute('data-mobile-megamenu-link') == menu.getAttribute('data-mobile-megamenu')) {
                const backBtn = menu.querySelector('[data-mobile-megamenu-back-btn]');

                const openMenu = () => {
                    menu.classList.remove('dn');
                    setTimeout(() => {
                        menu.classList.add('active');
                    }, 1);
                }

                const closeMenu = () => {
                    menu.classList.remove('active');
                    setTimeout(() => {
                        menu.classList.add('dn');
                    }, 300);
                }

                link.addEventListener('click', () => {
                    openMenu();
                });

                backBtn.addEventListener('click', () => {
                    closeMenu();
                });

                break;
            }
        }
    }
}

const mobileSearchLogic = () => {
    const search = document.querySelector('[data-header-search]');
    const openBtns = document.querySelectorAll('[data-mobile-search-open-btn]');
    const closeBtns = document.querySelectorAll('[data-mobile-search-close-btn]');

    const searchOpen = () => {
        search.classList.remove('dn');
        setTimeout(() => {
            search.classList.add('active');
        }, 1);
    }

    const searchClose = () => {
        search.classList.remove('active');
        setTimeout(() => {
            search.classList.add('dn');
        }, 300);
    }

    for (const openBtn of openBtns) {
        openBtn.addEventListener('click', () => {
            if (search.classList.contains('active')) {
                searchClose();
            }
            else {
                searchOpen();
            }
        });
    }

    for (const closeBtn of closeBtns) {
        closeBtn.addEventListener('click', () => {
            searchClose();
        });
    }
}

const addToCartLogic = () => {
    if (window.allPageProducts) {
        const products = document.querySelectorAll('[product-selector]');

        if (products.length > 0) {
            for (const product of products) {
                const productID = product.getAttribute('product-selector');
    
                for (const allPageProduct of window.allPageProducts) {
                    if (allPageProduct.id == productID) {
                        if (!product.classList.contains('logic')) {
                            product.classList.add('logic');
                            const productSubmit = product.querySelector('[data-procut-cart-buybtn]');
                            const varantId = allPageProduct.variants[0].id;
                            
                            productSubmit.addEventListener('click', () => {
                                const productQuantity = product.querySelector('[data-product-quantity]');
                                const updateObj = {};
            
                                if (productQuantity) {
                                    updateObj[varantId] = productQuantity.value;
                                }
                                else {
                                    updateObj[varantId] = 1;
                                }
            
                                fetch(window.Shopify.routes.root + 'cart/update.js', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(
                                        {
                                            updates: updateObj
                                        }
                                    )
                                })
                                .then((response) => response.json())
                                .then((data) => {
                                    console.log(data);
                                    // for (const item of data.items) {
                                    //     if (item.id == allPageProduct.id) {
                                    //         if (Array.from(document.querySelectorAll("[data-product-item]")).some((product) => product.getAttribute("data-product-item") == productId.value)) {
                                    //             for (const product of document.querySelectorAll("[data-product-item]")) {
                                    //                 if (product.getAttribute("data-product-item") == productId.value) {
                                    //                     const productPrice = product.querySelector("[data-product-price]");
                                    //                     const quantityInput = product.querySelector("[data-product-quantity]");
                                    //                     productPrice.innerHTML = ("€" + (+item.final_line_price / 100));
                                    //                     quantityInput.value = +item.quantity;
                                    //                     break;
                                    //                 }
                                    //             }
                                    //         }
                                    //         else {
                                    //             //add please varinats for product__material
                                                
                                    //             cartProductsBlock.innerHTML = `
                                    //                 <div class="cart-block__product" data-product-item="${ item.id }">
                                    //                     <img src="${ item.featured_image.url}" alt="product image" width="auto" height="auto" loading="lazy" class="product__image">
                                    //                     <h3 class="product__title">${ item.product_title }</h3>
                                    //                     <div class="product__material" pf>${ item.variant_options[0] }</div>
                                    //                     <div class="product__counter">
                                    //                         <div data-product-quantity-minus>-</div>
                                    //                         <input name="updates[]" class="count" value="${ item.quantity }" readonly data-product-quantity>
                                    //                         <div data-product-quantity-plus>+</div>
                                    //                     </div>
                                    //                     <div class="product__price" data-product-price="${ item.final_line_price }">
                                    //                         ${ "€" + (+item.final_line_price / 100) }
                                    //                     </div>
                                    //                     <div class="product__remove" data-product-remove>
                                    //                         <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    //                             <path fill-rule="evenodd" clip-rule="evenodd" d="M6.72451 0.857143C6.36856 0.857143 6.02719 0.992602 5.7755 1.23372C5.5238 1.47484 5.3824 1.80186 5.3824 2.14286V3.43025H11.6456V2.14286C11.6456 1.80186 11.5042 1.47484 11.2525 1.23372C11.0008 0.992602 10.6594 0.857143 10.3035 0.857143H6.72451ZM12.5403 3.43025V2.14286C12.5403 1.57454 12.3046 1.02949 11.8851 0.627628C11.4657 0.225765 10.8967 0 10.3035 0H6.72451C6.13126 0 5.56231 0.225765 5.14282 0.627628C4.72333 1.02949 4.48766 1.57454 4.48766 2.14286V3.43025H2.29064C2.27752 3.42914 2.26424 3.42857 2.25082 3.42857C2.23741 3.42857 2.22413 3.42914 2.21101 3.43025H0.447368C0.200294 3.43025 0 3.62212 0 3.85882C0 4.09551 0.200294 4.28739 0.447368 4.28739H1.80345V15.8571C1.80345 16.4255 2.03912 16.9705 2.45861 17.3724C2.8781 17.7742 3.44705 18 4.0403 18H12.9877C13.5809 18 14.1499 17.7742 14.5694 17.3724C14.9888 16.9705 15.2245 16.4255 15.2245 15.8571V4.28739H16.5526C16.7997 4.28739 17 4.09551 17 3.85882C17 3.62212 16.7997 3.43025 16.5526 3.43025H14.817C14.8038 3.42914 14.7906 3.42857 14.7771 3.42857C14.7637 3.42857 14.7504 3.42914 14.7373 3.43025H12.5403ZM14.3298 4.28739H2.69819V15.8571C2.69819 16.1981 2.83959 16.5252 3.09128 16.7663C3.34298 17.0074 3.68435 17.1429 4.0403 17.1429H12.9877C13.3436 17.1429 13.685 17.0074 13.9367 16.7663C14.1884 16.5252 14.3298 16.1981 14.3298 15.8571V4.28739ZM6.69655 7.71429C6.94362 7.71429 7.14392 7.90616 7.14392 8.14286V13.2857C7.14392 13.5224 6.94362 13.7143 6.69655 13.7143C6.44947 13.7143 6.24918 13.5224 6.24918 13.2857V8.14286C6.24918 7.90616 6.44947 7.71429 6.69655 7.71429ZM10.3035 7.71429C10.5505 7.71429 10.7508 7.90616 10.7508 8.14286V13.2857C10.7508 13.5224 10.5505 13.7143 10.3035 13.7143C10.0564 13.7143 9.85609 13.5224 9.85609 13.2857V8.14286C9.85609 7.90616 10.0564 7.71429 10.3035 7.71429Z" fill="black"/>
                                    //                         </svg>
                                    //                     </div>
                                    //                 </div>
                                    //             `;
                        
                                    //             for (const i of data.items) {
                                    //                 if (i.id != productId.value) {
                                    //                     cartProductsBlock.innerHTML += `
                                    //                         <div class="cart-block__product" data-product-item="${ i.id }">
                                    //                             <img src="${ i.featured_image.url}" alt="product image" width="auto" height="auto" loading="lazy" class="product__image">
                                    //                             <h3 class="product__title">${ i.product_title }</h3>
                                    //                             <div class="product__material">${ i.variant_options[0] }</div>
                                    //                             <div class="product__counter">
                                    //                                 <div data-product-quantity-minus>-</div>
                                    //                                 <input name="updates[]" class="count" value="${ i.quantity }" readonly data-product-quantity>
                                    //                                 <div data-product-quantity-plus>+</div>
                                    //                             </div>
                                    //                             <div class="product__price" data-product-price="${ i.final_line_price }">
                                    //                                 ${ "€" + (+i.final_line_price / 100) }
                                    //                             </div>
                                    //                             <div class="product__remove" data-product-remove>
                                    //                                 <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    //                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.72451 0.857143C6.36856 0.857143 6.02719 0.992602 5.7755 1.23372C5.5238 1.47484 5.3824 1.80186 5.3824 2.14286V3.43025H11.6456V2.14286C11.6456 1.80186 11.5042 1.47484 11.2525 1.23372C11.0008 0.992602 10.6594 0.857143 10.3035 0.857143H6.72451ZM12.5403 3.43025V2.14286C12.5403 1.57454 12.3046 1.02949 11.8851 0.627628C11.4657 0.225765 10.8967 0 10.3035 0H6.72451C6.13126 0 5.56231 0.225765 5.14282 0.627628C4.72333 1.02949 4.48766 1.57454 4.48766 2.14286V3.43025H2.29064C2.27752 3.42914 2.26424 3.42857 2.25082 3.42857C2.23741 3.42857 2.22413 3.42914 2.21101 3.43025H0.447368C0.200294 3.43025 0 3.62212 0 3.85882C0 4.09551 0.200294 4.28739 0.447368 4.28739H1.80345V15.8571C1.80345 16.4255 2.03912 16.9705 2.45861 17.3724C2.8781 17.7742 3.44705 18 4.0403 18H12.9877C13.5809 18 14.1499 17.7742 14.5694 17.3724C14.9888 16.9705 15.2245 16.4255 15.2245 15.8571V4.28739H16.5526C16.7997 4.28739 17 4.09551 17 3.85882C17 3.62212 16.7997 3.43025 16.5526 3.43025H14.817C14.8038 3.42914 14.7906 3.42857 14.7771 3.42857C14.7637 3.42857 14.7504 3.42914 14.7373 3.43025H12.5403ZM14.3298 4.28739H2.69819V15.8571C2.69819 16.1981 2.83959 16.5252 3.09128 16.7663C3.34298 17.0074 3.68435 17.1429 4.0403 17.1429H12.9877C13.3436 17.1429 13.685 17.0074 13.9367 16.7663C14.1884 16.5252 14.3298 16.1981 14.3298 15.8571V4.28739ZM6.69655 7.71429C6.94362 7.71429 7.14392 7.90616 7.14392 8.14286V13.2857C7.14392 13.5224 6.94362 13.7143 6.69655 13.7143C6.44947 13.7143 6.24918 13.5224 6.24918 13.2857V8.14286C6.24918 7.90616 6.44947 7.71429 6.69655 7.71429ZM10.3035 7.71429C10.5505 7.71429 10.7508 7.90616 10.7508 8.14286V13.2857C10.7508 13.5224 10.5505 13.7143 10.3035 13.7143C10.0564 13.7143 9.85609 13.5224 9.85609 13.2857V8.14286C9.85609 7.90616 10.0564 7.71429 10.3035 7.71429Z" fill="black"/>
                                    //                                 </svg>
                                    //                             </div>
                                    //                         </div>
                                    //                     `;
                                    //                 }
                                    //             }
                        
                                    //             productQuanityRecalculation();
                                                
                                    //         }
                                    //         break;
                                    //     }
                                    // }
                        
                                    // cartSubtotalPrice.innerHTML = ("€" + (+data.total_price / 100));
                                    cartItemsCount.innerHTML = data.item_count;
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                            });
                        }
                    }
                }
            }
        }
    }
}

const videoLogic = () => {
    const videoContainers = document.querySelectorAll('[data-video-container]');

    if (videoContainers.length) {
        for (const videoContainer of videoContainers) {
            const video = videoContainer.querySelector('[data-video]');
            const videoPlayZone = videoContainer.querySelector('[data-video-playzone]');
            const videoPlayButton = videoContainer.querySelector('[data-video-btn="play"]');
            const videoPauseButton = videoContainer.querySelector('[data-video-btn="pause"]');

            const playVideo = () => {
                videoPlayButton.classList.add('dn');
                videoPlayZone.classList.add('dn');
                videoPauseButton.classList.remove('dn');
                video.play();
            }

            const pauseVideo = () => {
                videoPauseButton.classList.add('dn');
                videoPlayButton.classList.remove('dn');
                videoPlayZone.classList.remove('dn');
                video.pause();
            }

            video.addEventListener('click', () => {
                pauseVideo();
            });

            videoPlayZone.addEventListener('click', () => {
                playVideo();
            });

            videoPlayButton.addEventListener('click', () => {
                playVideo();
            });

            videoPauseButton.addEventListener('click', () => {
                pauseVideo();
            });
        }
    }
}

const yearChanger = () => {
    const yearBlock = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();

    yearBlock.innerHTML = currentYear;
}

document.addEventListener('DOMContentLoaded', () => {
    removePreloader();
    megaMenuLogic();
    mobileMenuLogic();
    mobileSearchLogic();
    setInterval(() => {
        addToCartLogic();
    }, 100);
    videoLogic();
    yearChanger();
    loginModal();
    showHidePassword();
});
