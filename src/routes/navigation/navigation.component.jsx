import './navigation.styles.css';

import MobileNavigation from '../mobile-navigation/mobile-navigation.component';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();

    const onSearchChange = (event) => {
        const searchFieldString =
            event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);

        if (searchField === 'dres') {
            navigate('/pages/shop/dresses');
        } else if (searchField === 'gift') {
            navigate('/pages/shop/gift-card');
        } else if (searchField === 'ha') {
            navigate('/pages/shop/hats');
        } else if (searchField === 'pan') {
            navigate('/pages/shop/pants');
        } else if (searchField === 'sal') {
            navigate('/pages/shop/sales');
        } else if (searchField === 'shi') {
            navigate('/pages/shop/shirts');
        } else if (searchField === 'sho') {
            navigate('/pages/shop/shoes');
        } else if (searchField === 'two') {
            navigate('/pages/shop/two piece');
        } else if (searchField === 'wha' || searchField === 'ne') {
            navigate('/pages/whats-new');
        }
    };

    return (
        <>
            <MobileNavigation />

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
                    </ul>
                </div>

                <div className="search-box-container">
                    <input
                        className="search-box"
                        type="search"
                        placeholder="I'm looking for..."
                        onChange={onSearchChange}
                    />
                </div>

                {currentUser ? (
                    <span
                        className="authen-button"
                        onClick={signOutUser}
                    >
                        SIGN OUT
                    </span>
                ) : (
                    <Link
                        className="authen-button"
                        to="/pages/authentication"
                    >
                        SIGN IN
                    </Link>
                )}

                <div className="shop-icon-container">
                    <Link to="/pages/shop">SHOP</Link>
                </div>
                <CartIcon />
                {isCartOpen && <CartDropdown />}
            </div>
        </>
    );
};

export default Navigation;
