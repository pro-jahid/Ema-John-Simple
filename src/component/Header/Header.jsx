
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="" /> 
           <div className='navber'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
           </div>
        </div>
    );
};

export default Header;