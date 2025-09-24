import React from 'react';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle)
    const { name, img, price, seller, ratings, ratingsCount } = bottle;
    return (
        <div className="card bottle">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} ({ratingsCount} reviews)</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;