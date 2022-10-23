const products = Array.from(document.querySelectorAll('div.product'))
products.forEach(product => {
    const amountDiv = product.querySelector('div.product__quantity-value')
    let amount = parseInt(amountDiv.textContent)
    product.querySelector('div.product__quantity-control_dec').addEventListener('click', event => {
        amount = amount - 1
        amountDiv.textContent = amount
    })
    product.querySelector('div.product__quantity-control_inc').addEventListener('click', event => {
        amount = amount + 1
        amountDiv.textContent = amount
    })
    const productAdd = product.querySelector('div.product__add')
    const cart = document.querySelector('div.cart__products')
    productAdd.addEventListener('click', event => {
        if(amount == 0) {return}
        let producstInCart = Array.from(cart.querySelectorAll('div.cart__product'))
        let targetProduct = producstInCart.find(cartProduct => cartProduct.dataset.id == product.dataset.id)
        if(targetProduct) {
            let count = targetProduct.querySelector('div.cart__product-count')
            count.textContent = parseInt(count.textContent) + amount
            if(count.textContent <= 0) {
                targetProduct.remove()
            }
        } else if(amount < 0) {return} else {
            cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector('img.product__image').attributes.src.value}">
                <div class="cart__product-count">${amount}</div>
            </div>`
            )
        }

    })
});