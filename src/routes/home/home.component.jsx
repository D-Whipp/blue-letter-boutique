import './home.styles.css';

const Home = () => {
    // const directories = [
    //     {
    //         id: 1,
    //         title: 'Hats',

    //     }
    // ]

    return (
        <>
            <div className="sales-bar-container">
                <h2>SPEND $100 FOR FREE SHIPPING</h2>
                <p>Ground shipping, continental US only</p>
            </div>

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

            <div className="jumbotron-container">
                <div className="jumbotron-text">
                    <h2 className="gradient-text">BEAUTY IN STYLE</h2>
                    <p>SHOP THE COLLECTION</p>
                </div>
            </div>

            <div className="trends-container">
                <div className="trends-text">
                    <p>Current Trends</p>
                </div>
                <div className="trends-image-container">
                    <div className="left-trend-container">
                        <p>Shop Two Piece</p>
                    </div>
                    <div className="right-trend-container">
                        <p>Shop Dresses</p>
                    </div>
                </div>
            </div>

            <div className="categories-container">
                <div className="categories-text-container">
                    <p>Shop the category</p>
                </div>
                <div className="category-items-container">
                    <div className="category-item dress-image">
                        <p>Dresses</p>
                    </div>
                    <div className="category-item two-piece-image">
                        <p>Two Piece</p>
                    </div>
                    <div className="category-item shirt-image">
                        <p>Shirts</p>
                    </div>
                    <div className="category-item pants-image">
                        <p>Pants</p>
                    </div>
                    <div className="category-item hats-image">
                        <p>Hats</p>
                    </div>
                    <div className="category-item shoes-image">
                        <p>Shoes</p>
                    </div>
                </div>
            </div>

            <div className="links-and-social-media">
                <div className="social-media-symbols">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Tiktok</p>
                    <p>Pinterest</p>
                </div>
                <div className="misc-links">
                    <h3>Help</h3>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>Our Story</p>
                </div>
                <div className="quick-access">
                    <h3>Quick Links</h3>
                    <p>My Account</p>
                    <p>Gift Cards</p>
                    <p>Terms Of Use</p>
                    <p>Privacy & Security</p>
                    <p>Foundations</p>
                </div>
            </div>

            <div className="footer-container">
                <p>
                    &copy; 2021-2023 Blue Letter Boutique. All Rights
                    Reserved
                </p>
            </div>
        </>
    );
};

export default Home;
