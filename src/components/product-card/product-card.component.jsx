import './product-card.styles.css';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <div className="product-card-container">
            <div className="product-card zoom">
                <img src={imageUrl} alt={`${name}`} />
                <div className="card-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <button className="card-button">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
