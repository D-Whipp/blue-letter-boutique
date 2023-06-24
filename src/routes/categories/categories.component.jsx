import './categories.styles.css';

import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="categories-text-container">
                <p>Shop the category</p>
            </div>
            <div className="category-items-container">
                <div className="category-item dress-image">
                    <Link to="/pages/shop/dresses">
                        <p>Dresses</p>
                    </Link>
                </div>
                <div className="category-item two-piece-image">
                    <Link to="/pages/shop/two piece">
                        <p>Two Piece</p>
                    </Link>
                </div>
                <div className="category-item shirt-image">
                    <Link to="/pages/shop/shirts">
                        <p>Shirts</p>
                    </Link>
                </div>
                <div className="category-item pants-image">
                    <Link to="/pages/shop/pants">
                        <p>Pants</p>
                    </Link>
                </div>
                <div className="category-item hats-image">
                    <Link to="/pages/shop/hats">
                        <p>Hats</p>
                    </Link>
                </div>
                <div className="category-item shoes-image">
                    <Link to="/pages/shop/shoes">
                        <p>Shoes</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
