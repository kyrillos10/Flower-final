let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function clearCart() {
    cart = [];
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in cart</p>';
    } else {
        const ul = document.createElement('ul');
        cart.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - £${product.price.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeFromCart(index);
            li.appendChild(removeButton);
            ul.appendChild(li);
        });
        cartDiv.appendChild(ul);
    }
}


