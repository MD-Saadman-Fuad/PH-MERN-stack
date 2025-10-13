import React from 'react';
import { useState } from 'react';
const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');   
    const handleProductSubmit =(e) =>{
        e.preventDefault();
        // console.log(e.target.name.value);
        // console.log(e.target.price.value);
        // console.log(e.target.quantity.value);
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const product = {name, price, quantity};
        console.log(product);

        if(name.length === 0 || price.length === 0 || quantity.length === 0){
            setError('All fields are required');
            return;
        }

        else if(product.price < 0 || product.quantity < 0){
            setError('Price and Quantity must be non-negative');
            return;
        }
        else{
            setError('');
        }

        

        
        // handleAddProduct(product);

        if(!error){
            handleAddProduct(product);
        }
    }
    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="name" placeholder='Product Name' />
                <br />
                <input type="text" name="price" id="price" placeholder='Product Price' />
                <br />
                <input type="text" name="quantity" id="quantity" placeholder='Product Quantity' />
                <br />
                <input type="submit" value='Add Product' />
            </form>
            <p><small style={{color: 'red'}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;