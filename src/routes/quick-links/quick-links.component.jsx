import './quick-links.styles.css';

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
    );
};

export default QuickLinks;
