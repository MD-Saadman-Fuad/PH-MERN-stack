import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h2>Product List</h2>
            <h3>{<span >{products.length}</span>}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;