const searchBuyButtons = () => {
    const products = document.querySelectorAll('.clerk-design-product');

    if (products.length > 0) {
        for (const product of products) {
            if (!product.querySelector('[data-procut-cart-buybtn]')) {
                if (product.querySelector('[data-action="add-to-cart"]').innerHTML != 'BEKIJKEN') {
                    product.querySelector('[data-action="add-to-cart"]').remove();
                    product.querySelector('form').innerHTML += `
                        <div class="buy-button" data-procut-cart-buybtn>VOEG TOE</div>
                    `;
                }
            }
        }
    }
}

setInterval(() => {
    searchBuyButtons();
}, 10);
