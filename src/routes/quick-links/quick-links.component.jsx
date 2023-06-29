import './quick-links.styles.css';

import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (
        <div className="links-and-social-media">
            <div className="social-media-symbols">
                <Link target="_blank" to="https://www.instagram.com/">
                    <p>Instagram</p>
                </Link>
                <Link target="_blank" to="https://www.facebook.com/">
                    <p>Facebook</p>
                </Link>
                <Link target="_blank" to="https://www.tiktok.com/">
                    <p>Tiktok</p>
                </Link>
                <Link target="_blank" to="https://www.pinterest.com/">
                    <p>Pinterest</p>
                </Link>
            </div>
            <div className="misc-links">
                <h3>Help</h3>
                <Link
                    className="quick-access-link"
                    to="/pages/contact-us"
                >
                    Contact Us
                </Link>
                <Link className="quick-access-link" to="/pages/faq">
                    FAQ
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/shipping"
                >
                    Shipping
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/returns"
                >
                    Returns
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/our-story"
                >
                    Our Story
                </Link>
            </div>
            <div className="quick-access">
                <h3>Quick Links</h3>
                <Link
                    className="quick-access-link"
                    to="/pages/my-account"
                >
                    My Account
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/shop/gift-card"
                >
                    Gift Cards
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/terms-of-use"
                >
                    Terms Of Use
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/privacy-and-security"
                >
                    Privacy & Security
                </Link>
                <Link
                    className="quick-access-link"
                    to="/pages/foundations"
                >
                    Foundations
                </Link>
            </div>
        </div>
    );
};

export default QuickLinks;
