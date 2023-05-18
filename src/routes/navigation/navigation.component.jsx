import './navigation.styles.css';

const Navigation = () => {
    return (
        <div className="address-bar-container">
            <div className="website-title-container">
                <h1>Blue Letter Boutique</h1>
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
            <div className="my-account-container">MY ACCOUNT</div>
            <div className="shop-icon-container">FAVICON</div>
        </div>
    );
};

export default Navigation;
