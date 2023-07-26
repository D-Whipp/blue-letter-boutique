import './product-card.styles.css';

import { useState, useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const addProductToCart = () => {
        addItemToCart(product);
        disableButton();
    };

    const disableButton = () => {
        const addToCartBtn =
            document.getElementById('add-to-cart-btn');
        addToCartBtn.classList.add('spinner-button');
        addToCartBtn.setAttribute('disabled', true);
        console.log('Cart Btn: ', addToCartBtn);

        setDelay(5000);
        
    };

    function setDelay(milliSeconds) {
        milliSeconds += Date.now();
        while(Date.now() < milliSeconds){
            console.log(milliSeconds)
        }
    }

    const resetBtn = () => {
        const addToCartBtn =
            document.getElementById('add-to-cart-btn');

        addToCartBtn.classList.remove('spinner-button');
        addToCartBtn.removeAttribute('disabled');
        console.log('reset', addToCartBtn);
    };

    return (
        <div className="product-card-container">
            <div className="product-card zoom">
                <img src={imageUrl} alt={`${name}`} />
                <div className="card-footer">
                    <span className="name">{name}</span>
                    <span className="price">$ {price}</span>
                </div>
                <button
                    id="add-to-cart-btn"
                    className="card-button"
                    onClick={addProductToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
