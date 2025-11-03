import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h2>Phone Details</h2>
            <h3>{phone.name}</h3>
            <img src={phone.image} alt={phone.name} />
            <p>Brand: {phone.brand}</p>
            <p>Price: ${phone.price}</p>
            <p>Description: {phone.description}</p>

        </div>
    );
};

export default Phone;