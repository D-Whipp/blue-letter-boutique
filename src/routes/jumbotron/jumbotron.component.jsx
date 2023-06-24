import './jumbotron.styles.css';

import { Link } from 'react-router-dom';

const Jumbotron = () => {
    return (
        <div className="jumbotron-container">
            <div className="jumbotron-text">
                <h2 className="gradient-text">BEAUTY IN STYLE</h2>
                <p>
                    <Link to="/pages/shop">SHOP THE COLLECTION</Link>
                </p>
            </div>
        </div>
    );
};

export default Jumbotron;
