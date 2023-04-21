const productQuantityChangeLogic = () => {
    const products = document.querySelectorAll('[product-selector]');
    const cartCounter = document.querySelector('[data-cart-count]');
    const cartPrice = document.querySelector('[data-cart-price]');

    if (products.length > 0) {
        for (const product of products) {
            const productID = product.getAttribute('product-selector');
            const productQuantitySelect = product.querySelector('[data-product-quantity]');
            const productTotalPrice = product.querySelector('[data-product-total-price]');
            
            productQuantitySelect.addEventListener('change', () => {
                const updateObj = {};

                updateObj[productID] = productQuantitySelect.value;

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

                    for (const item of data.items) {
                        if (item.id == productID) {
                            productTotalPrice.innerHTML = ("€" + (item.final_line_price / 100));
                            productQuantitySelect.value = item.quantity;
                        }
                    }
                    
                    cartCounter.innerHTML = data.item_count;
                    cartPrice.innerHTML = ("€" + (data.total_price / 100));
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            });
        }
    }
}

productQuantityChangeLogic();
