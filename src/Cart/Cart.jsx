
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const products of cart){
        if(products.quantity === 0){
            products.quantity = 1;
        }
        // products.quantity = products.quantity || 1;
        total = total + products.price * products.quantity;
        totalShipping = totalShipping + products.shipping; 
        quantity = quantity + products.quantity;
        
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>selected Items:{quantity}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h5>Grand Total:$ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;