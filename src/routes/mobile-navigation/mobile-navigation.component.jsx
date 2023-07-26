import './mobile-navigation.styles.css';

import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

// CART DROPDOWN IMPORTS
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../components/contexts/cart.context';

const MobileNavigation = () => {
    const [mobileNavToggle, setMobileNavToggle] = useState(false);

    const toggleMobileNavbarFunc = () =>
        setMobileNavToggle(!mobileNavToggle);

    // CART DROPDOWN CODE
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="mobile-navbar-dropdown-container">
                <CartIcon />
                {isCartOpen && <CartDropdown />}
            </div>

            <div
                className="hamburger-icon"
                onClick={toggleMobileNavbarFunc}
            >
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
            </div>
            <div
                className={
                    mobileNavToggle
                        ? 'mobile-navigation-container'
                        : 'no-display'
                }
            >
                <div className="website-title-container">
                    <h1>
                        <Link className="nav-link" to="/">
                            Blue Letter Boutique
                        </Link>
                    </h1>
                </div>
                <div className="mobile-navigation-links">
                    <ul>
                        <li>
                            <Link to="/pages/shop/whats-new">
                                WHAT'S NEW
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/dresses">
                                DRESSES
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/two piece">
                                TWO PIECE
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/shirts">
                                SHIRTS
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/pants">PANTS</Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/hats">HATS</Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/shoes">SHOES</Link>
                        </li>
                        <li>
                            <Link to="/pages/shop/sales">SALE</Link>
                        </li>
                        <li>
                            <Link to="/pages/shop">SHOP</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavigation;
