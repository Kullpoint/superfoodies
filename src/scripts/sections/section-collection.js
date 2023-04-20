const collectionBuyButtons = () => {
    const productCards = document.querySelectorAll('[product-selector]');

    for (const productCard of productCards) {
        if (!productCard.querySelector('[data-procut-cart-buybtn]')) {
            productCard.innerHTML += `
                <div class="buy-button" data-procut-cart-buybtn>VOEG TOE</div>
            `;
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
