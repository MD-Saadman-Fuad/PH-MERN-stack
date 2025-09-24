

const getCartfromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addItemToCartLocalStorage = id => {
    const cart = getCartfromLocalStorage();
    // cart.push(id);
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);

}

export { getCartfromLocalStorage as getStoreCart, 
    addItemToCartLocalStorage as addToStoreCart};