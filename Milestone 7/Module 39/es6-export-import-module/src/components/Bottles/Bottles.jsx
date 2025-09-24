 import React, { useEffect } from 'react';
 import { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import Cart from '../Cart/Cart';
import { addToStoreCart, getStoreCart } from '../../utils/localstorage/localstorage';
 const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);
    // console.log(bottles);


    useEffect(() => {
        const storedCartIDs = getStoreCart();
        // console.log(storedCartIDs, bottles);
        const storedCart = [];
        for (const id of storedCartIDs) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log(storedCart);
        setCart(storedCart);
    }, [bottles]);



    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        console.log('Bottle added to cart:', cart);

        // addToStoreCart(bottle.id);
        addToStoreCart(bottle.id);
    }

    const handleRemoveFromCart = (bottle) => {
        const remaining = cart.filter(b => b.id !== bottle.id);
        setCart(remaining);
        console.log('Bottle removed from cart:', bottle);
    }

    return (
        <div >
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
 };
 
 export default Bottles;