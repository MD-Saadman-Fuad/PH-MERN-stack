

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

const removeItemFromCartLocalStorage = id => {
    const cart = getCartfromLocalStorage();
    const remaining = cart.filter(itemId => itemId !== id);
    saveCartToLocalStorage(remaining);
}


export { getCartfromLocalStorage as getStoreCart, 
    addItemToCartLocalStorage as addToStoreCart, 
    removeItemFromCartLocalStorage as removeFromStoreCart };