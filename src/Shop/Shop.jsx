import React, { useEffect, useState } from 'react';
import './Shop.css'

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
                    <h2>Products coming here:{product.length}</h2>
                </div>
                <div className="cart-container">
                    <h3>Order Summery</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;