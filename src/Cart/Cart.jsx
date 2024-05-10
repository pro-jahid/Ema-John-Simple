
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;

    let total = 0;
    let totalShipping = 0;
    for(const products of cart){
        total = total + products.price;
        totalShipping = totalShipping + products.shipping; 
        
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>selected Items:{cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h5>Grand Total:$ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;