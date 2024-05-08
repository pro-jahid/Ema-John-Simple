import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../component/Header/Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        product.map(products=> <Product key={products.id} products={products}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Order Summery</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;