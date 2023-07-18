import './checkout.styles.css';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { useContext } from 'react';
import { CartContext } from '../../components/contexts/cart.context';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="checkout-container">
                <div className="checkout-content">
                    <div className="checkout-header">
                        <div className="header-block">
                            <span>Product</span>
                        </div>
                        <div className="header-block">
                            <span>Description</span>
                        </div>
                        <div className="header-block">
                            <span>Quantity</span>
                        </div>
                        <div className="header-block">
                            <span>Price</span>
                        </div>
                        <div className="header-block">
                            <span>Remove</span>
                        </div>
                    </div>

                    {cartItems.map((cartItem) => (
                        <CheckoutItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />
                    ))}
                    <span className="total">Total: ${cartTotal}</span>

                    <PaymentForm />
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Checkout;
