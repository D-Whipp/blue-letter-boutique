import './home.styles.css';

// import { Outlet } from 'react-router-dom';
import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import Categories from '../categories/categories.component';

const Home = () => {
    // const directories = [
    //     {
    //         id: 1,
    //         title: 'Hats',

    //     }
    // ]

    return (
        <>
            <Promotion />

            <Navigation />

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

            <Categories />

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
