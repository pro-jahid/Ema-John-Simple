import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../component/Header/Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    const productAddHandle = (products)=>{
        const newCart = [...cart,products]
        setCart(newCart)
        addToDb(products.id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        product.map(products=> <Product key={products.id} products={products} productAddHandle={productAddHandle}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;