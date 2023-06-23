import './product-card.styles.css';

import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <div className="product-card zoom">
                <img src={imageUrl} alt={`${name}`} />
                <div className="card-footer">
                    <span className="name">{name}</span>
                    <span className="price">$ {price}</span>
                </div>
                <button className="card-button" onClick={addProductToCart}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
