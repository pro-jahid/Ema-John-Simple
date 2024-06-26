
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, seller, ratings, price} =props.products;
    const productAddHandle = props.productAddHandle;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => productAddHandle (props.products)} className='btn-cart'>Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;