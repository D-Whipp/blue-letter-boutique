import './current-trends.styles.css';

import { Link } from 'react-router-dom';

const CurrentTrends = () => {
    return (
        <div className="trends-container">
            <div className="trends-text">
                <p>Current Trends</p>
            </div>
            <div className="trends-image-container">
                <div className="left-trend-container">
                    <p>
                        <Link to="/pages/shop/two piece">
                            Shop Two Piece
                        </Link>
                    </p>
                </div>
                <div className="right-trend-container">
                    <p>
                        <Link to="/pages/shop/dresses">
                            Shop Dresses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrentTrends;
