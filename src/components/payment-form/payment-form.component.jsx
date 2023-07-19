import './payment-form.styles.css';

import {useState} from 'react';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: 10000 }),
            }
        ).then((response) => response.json());

        const {
            paymentIntent: { client_secret },
        } = response;

        console.log('Client Secret: ', client_secret);

        const paymentResult = await stripe.confirmCardPayment(
            client_secret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'David Whipple',
                    },
                },
            }
        );

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
            <button onClick={paymentHandler}>Pay Now</button>
        </div>
    );
};

export default PaymentForm;
