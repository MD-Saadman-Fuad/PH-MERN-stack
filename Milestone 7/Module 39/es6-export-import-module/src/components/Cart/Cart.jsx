import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key = {bottle.id}>
                    <img src={bottle.img} alt={bottle.name} />
                    <h4>{bottle.name}</h4>
                    <p>Price: ${bottle.price}</p>
                    <button onClick={() => handleRemoveFromCart(bottle)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default Cart;