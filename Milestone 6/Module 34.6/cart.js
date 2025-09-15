const addToCart = () => {
    const name = document.getElementById('productName');
    const price = document.getElementById('productPrice');
    const productName = name.value;
    const productPrice = parseInt(price.value);
    // console.log(productName, productPrice);
    console.log(productName, productPrice);
    // localStorage.setItem(productName, productPrice);
    displayProduct(productName, productPrice);
    addProductToCart(productName, productPrice);
    name.value = '';
    price.value = '';
}

const getCart = () => {
    const cart = {}
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        return JSON.parse(cartJSON);
    }
    return cart;
}

const addProductToCart = (name, price) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = parseFloat(cart[name]) + parseFloat(price);
    } else {
    cart[name] = price;
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

const displayProduct = (name, price) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    console.log(name, price);
    li.textContent = `${name} - ${price}`;
    ul.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getCart();
    for (const product in cart) {
        const price = cart[product];
        console.log(product, price);
        displayProduct(product, price);
    }}

    displayStoredProducts();