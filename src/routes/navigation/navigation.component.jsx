import './navigation.styles.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
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
            <Link
                className="my-account-container"
                to="/pages/sign-in"
            >
                SIGN IN
            </Link>
            <div className="shop-icon-container">SHOPICON</div>
        </div>
    );
};

export default Navigation;
