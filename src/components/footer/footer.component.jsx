import './footer.styles.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer-container">
            <p>
                &copy; {year} Blue Letter Boutique. All Rights
                Reserved
            </p>
        </div>
    );
};

export default Footer;
