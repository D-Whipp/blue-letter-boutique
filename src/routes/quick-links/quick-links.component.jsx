import './quick-links.styles.css';

import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (
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
                <p>
                    <Link to="/pages/faq">FAQ</Link>
                </p>
                <p>
                    <Link to="/pages/shipping">Shipping</Link>
                </p>
                <p>
                    <Link to="/pages/returns">Returns</Link>
                </p>
                <p>Our Story</p>
            </div>
            <div className="quick-access">
                <h3>Quick Links</h3>
                <Link to="/my-account">My Account</Link>
                <p>Gift Cards</p>
                <p>Terms Of Use</p>
                <p>Privacy & Security</p>
                <p>Foundations</p>
            </div>
        </div>
    );
};

export default QuickLinks;
