const collectionBuyButtons = () => {
    if (window.allPageProducts) {
        const products = document.querySelectorAll('[product-selector]');

        if (products.length > 0) {
            for (const product of products) {
                const productID = product.getAttribute('product-selector');
    
                for (const allPageProduct of window.allPageProducts) {
                    if (allPageProduct.id == productID) {
                        if (allPageProduct.available != false) {
                            if (!product.querySelector('[data-procut-cart-buybtn]')) {
                                product.innerHTML += `
                                    <div class="buy-button" data-procut-cart-buybtn>VOEG TOE</div>
                                `;
                            }
                        }
                        else {
                            if (!product.querySelector('[data-procut-cart-subscribe]')) {
                                product.innerHTML += `
                                    <a href="${product.closest('[product-selector]').querySelector('a').getAttribute('href')}" class="buy-button" data-procut-cart-subscribe>BEKIJKEN</a>
                                `;
                            }
                        }
                    }
                }
            }
        }
    }
}

const categoriesFilter = () => {
    const links = document.querySelectorAll('[ data-categories-link]');

    for (const link of links) {
        link.addEventListener('click', () => {
            if (link.classList.contains('is-active')) {
                link.classList.remove('is-active');
                link.nextElementSibling.setAttribute('aria-hidden', 'true');
            }
            else {
                for (const l of links) {
                    l.classList.remove('is-active');
                    l.nextElementSibling.setAttribute('aria-hidden', 'true');
                }
                link.classList.add('is-active');
                link.nextElementSibling.setAttribute('aria-hidden', 'false');
            }
        });
    }
}

setInterval(() => {
    collectionBuyButtons();
}, 10);

categoriesFilter();
