import './payment-form.styles.css';

import { CardElement } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    return (
        <div className="payment-form-container">
            <CardElement />
            <button>Pay Now</button>
        </div>
    );
};

export default PaymentForm;
