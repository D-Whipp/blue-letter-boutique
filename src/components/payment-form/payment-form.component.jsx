import './payment-form.styles.css';

import { useState, useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import { UserContext } from '../contexts/user.context';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartTotal } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const amount = cartTotal;
    const [isProcessingPayment, setIsProcessingPayment] =
        useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }
        ).then((response) => response.json());

        const {
            paymentIntent: { client_secret },
        } = response;

        const paymentResult = await stripe.confirmCardPayment(
            client_secret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser
                            ? currentUser.displayName
                            : 'Guest',
                    },
                },
            }
        );

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };

    return (
        <div className="payment-form-container">
            <h2>Credit Card Payment: </h2>
            <CardElement />
            {isProcessingPayment ? (
                <button
                    disabled={isProcessingPayment}
                    className="spinner-button"
                >
                    ...
                </button>
            ) : (
                <button onClick={paymentHandler}>Pay Now</button>
            )}
        </div>
    );
};

export default PaymentForm;
