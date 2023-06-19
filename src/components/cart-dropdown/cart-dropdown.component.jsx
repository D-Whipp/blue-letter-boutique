import './cart-dropdown.styles.css';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <button>go to checkout</button>
        </div>
    );
};

export default CartDropdown;
