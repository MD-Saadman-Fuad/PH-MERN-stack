import React from 'react';
import { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';
const LatestProducts = ({ products }) => {
    const latestProducts = use(products);
    console.log(latestProducts);
    return (
        <div className=''>
            <h2 className='text-5xl text-center'>Latest <span className='text-primary'>Products</span></h2>
            <div className='grid gap-4 grid-cols-1 md;grid-cols-2 lg:grid-cols-3 my-10 justify-items-center'>
                {
                    latestProducts.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default LatestProducts;