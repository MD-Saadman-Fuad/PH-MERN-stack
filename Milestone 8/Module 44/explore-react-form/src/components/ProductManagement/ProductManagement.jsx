import React from 'react';
import { useState } from 'react';
import ProductForm from './ProductForm.jsx';
import ProductTable from './ProductTable.jsx';
const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;