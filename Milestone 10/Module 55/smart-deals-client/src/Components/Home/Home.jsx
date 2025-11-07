import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts.jsx';

const latestProductsPromise = fetch('http://localhost:3000/latest-products')
    .then(response => response.json());
const Home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>
            <h2>Latest Products</h2>
            <LatestProducts products={latestProductsPromise} />
        </div>
    );
};

export default Home;