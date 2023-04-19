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

setInterval(() => {
    collectionBuyButtons();
}, 10);
