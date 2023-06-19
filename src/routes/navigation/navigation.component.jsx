import './navigation.styles.css';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <div className="address-bar-container">
            <div className="website-title-container">
                <h1>
                    <Link className="nav-link" to="/">
                        Blue Letter Boutique
                    </Link>
                </h1>
            </div>
            <div className="navigation-container">
                <ul>
                    <li>WHAT'S NEW</li>
                    <li>DRESSES</li>
                    <li>SWIM</li>
                    <li>CLOTHING</li>
                    <li>JEWELRY</li>
                    <li>ACCESSORIES</li>
                    <li>SHOES</li>
                    <li>SALE</li>
                </ul>
            </div>

            <div className="search-box-container">
                <input
                    className="search-box"
                    type="search"
                    placeholder="I'm looking for..."
                />
            </div>
            {currentUser ? (
                <span
                    className="my-account-container"
                    onClick={signOutUser}
                >
                    SIGN OUT
                </span>
            ) : (
                <Link
                    className="my-account-container"
                    to="/pages/authentication"
                >
                    SIGN IN
                </Link>
            )}
            <div className="shop-icon-container">
                <Link to="/pages/shop">SHOP</Link>
            </div>
            <CartIcon />
            {
                isCartOpen &&           
                <CartDropdown />
            }
        </div>
    );
};

export default Navigation;
