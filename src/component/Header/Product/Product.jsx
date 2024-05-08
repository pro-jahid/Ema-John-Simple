import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, quantity, price} =props.products;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <p><small>{quantity}</small></p>
            <h5>{seller}</h5>
        </div>
    );
};

export default Product;