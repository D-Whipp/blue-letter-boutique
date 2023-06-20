import './cart-dropdown.styles.css';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/pages/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <button onClick={goToCheckoutHandler}>go to checkout</button>
        </div>
    );
};

export default CartDropdown;
