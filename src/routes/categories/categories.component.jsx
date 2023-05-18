import './categories.styles.css';

const Categories = () => {
    return (
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
    )
}

export default Categories;