import './faq.styles.css';

import { Link } from 'react-router-dom';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const FAQ = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="faq-container">
                <h2>frequently asked questions</h2>
                <div className="faq-text-container">
                    <details>
                        <summary className="root-details-container">
                            My Account & Ordering
                        </summary>
                        <details className="level-one-details-container">
                            <summary>
                                How do I create an account?
                            </summary>
                            <p>
                                Hover over the MY ACCOUNT link located
                                in the top right hand corner and click
                                on CREATE ACCOUNT.{' '}
                            </p>
                        </details>
                        <details className="level-one-details-container">
                            <summary>
                                I forgot my password. What do I do?
                            </summary>
                            <p>
                                Click{' '}
                                <Link
                                    className="click-me"
                                    to="/pages/contact-us"
                                >
                                    here
                                </Link>{' '}
                                to access the Contact Us page.
                            </p>
                            <p>
                                Simply fill out the form and in{' '}
                                <span className="your-message-text">
                                    your message
                                </span>{' '}
                                mention you need your password reset.
                            </p>
                            <p>
                                In 48 hours you will receive an email
                                with a link for the password reset.
                            </p>
                        </details>
                    </details>
                    <details>
                        <summary className="root-details-container">
                            Shipping
                        </summary>
                        <details className="level-one-details-container">
                            <summary>
                                What shipping methods do you offer?
                            </summary>
                            <h3>
                                Standard Shipping (shipped via UPS or
                                USPS)
                            </h3>
                            <p>
                                Orders with Standard Shipping
                                typically take between 1-3 business
                                days to be processed and shipped.
                                Orders shipped via standard delivery
                                typically arrive in five (5) to eight
                                (8) business days (Monday through
                                Friday, not including holidays) for
                                the Continental United States. All
                                orders are shipped within 1-2 business
                                days. Cost is $8.95 if the order is
                                under $100. It is free for orders over
                                $100.
                            </p>
                            <p>
                                Standard International orders are
                                usually delivered within 7-17 business
                                days. Orders confirmed before 1:00
                                p.m. ET will be processed the same day
                                pending credit card authorization and
                                verification. Orders confirmed after
                                1:00 p.m. ET will be processed the
                                following business day. Cost is based
                                on weight and destination.
                                International orders will be shipped
                                via USPS.
                            </p>
                            <h3>
                                Priority Shipping (shipped via UPS or
                                USPS)
                            </h3>
                            <p>
                                Orders with Priority Shipping are
                                processed once credit card
                                authorization and address verification
                                have been obtained. Orders shipped via
                                priority delivery typically arrive in
                                four (4) to five (5) business days
                                (Monday through Friday, not including
                                holidays) for the Continental United
                                States. All orders are shipped within
                                1-3 business days. Priority shipping
                                cost is $12.95.
                            </p>
                            <h4>
                                Express Shipping (shipped via UPS)
                            </h4>
                            <p className="shipping-method-topic">
                                Orders with Express Shipping are
                                processed once credit card
                                authorization and address verification
                                have been obtained. Orders shipped via
                                express delivery typically arrive in
                                two (2) to four (4) business days
                                (Monday through Friday, not including
                                holidays) for the Continental United
                                States. Express shipping requires a
                                physical address. UPS cannot deliver
                                to P.O. Boxes. All orders are shipped
                                within 1-3 business days. Express
                                shipping cost is $22.95.
                            </p>
                            <h4>
                                UPS Next Day Air (shipped via UPS)
                            </h4>
                            <p className="shipping-method-topic">
                                Orders with UPS Next Day Air Shipping
                                are processed once credit card
                                authorization and address verification
                                have been obtained. Orders shipped via
                                UPS Next Day Air delivery typically
                                arrive in one (1) business day (Monday
                                through Friday, not including
                                holidays) for the Continental United
                                States. UPS Next Day Air Shipping is
                                not available for Alaska or Hawaii.
                                UPS Next Day Air shipping requires a
                                physical address. UPS cannot deliver
                                to P.O. Boxes. Orders placed by 1 p.m.
                                ET will ship the same day. Orders
                                shipped after 1 p.m. EST will ship the
                                following business day. UPS Next Day
                                Air shipping cost is $39.95.
                            </p>
                            <p>
                                Expedited International orders are
                                usually delivered within 3-5 business
                                days. Orders confirmed before 1:00
                                p.m. ET will be processed the same day
                                pending credit card authorization and
                                verification. Orders confirmed after
                                1:00 p.m. ET will be processed the
                                following business day. Cost is based
                                on weight and destination.
                                International orders will be shipped
                                via USPS.
                            </p>
                            <h3>
                                P.O. Boxes and Military Addresses -
                                (shipped via USPS)
                            </h3>
                            <p>
                                We ship to APO/FPO and P.O. Boxes with
                                standard shipping. Delivery time to
                                APO/FPO and P.O. Boxes varies and is
                                generally longer than our standard
                                ground shipping.
                            </p>
                        </details>
                    </details>
                    <details>
                        <summary className="root-details-container">
                            Returns
                        </summary>
                        <details className="level-one-details-container">
                            <summary>
                                What is your return policy?
                            </summary>
                            <p>
                                <span className="important-notice">
                                    We accept returns for refund to
                                    your original form of payment when
                                    postmarked within 14 calendar days
                                    from the date you receive your
                                    order.
                                </span>
                            </p>
                            <p>
                                <span className="important-notice">
                                    We accept returns for an online
                                    credit for non-final sale items
                                    when postmarked within 30 calendar
                                    days from the date your order was
                                    shipped.
                                </span>
                            </p>
                            <p>
                                Items marked with Final Sale cannot be
                                returned, refunded or exchanged. For
                                any questions, please contact
                                orders@shopblueletterboutique.com
                            </p>
                            <p className="bold-text">
                                Items purchased with a 30% or more
                                coupon code are final sale and cannot
                                be returned.
                            </p>
                            <p>
                                Returns must be issued as credit to
                                the original form of payment. If this
                                is not possible, returns will be
                                issued in the form of an online
                                credit.
                            </p>
                            <p>
                                If any returns do not meet these
                                requirements, you will be contacted
                                and the items returned to you. We
                                reserve the right to refuse a refund
                                if the items have any signs of wear,
                                alteration, misuse or damage.
                            </p>
                            <p>
                                Jewelry and hats are returnable in new
                                condition. Jewelry and hats are not
                                returnable if they are in the sale
                                section.
                            </p>
                            <p>
                                Final Sale/Clearance category items
                                are final sale and may not be returned
                                or exchanged.
                            </p>
                        </details>
                    </details>
                    <details>
                        <summary className="root-details-container">
                            Payments
                        </summary>
                        <details className="level-one-details-container">
                            <summary>
                                What forms of payment do you accept?
                            </summary>
                            <p>
                                We use Stripe's payment API's to
                                process our payments.
                            </p>
                            <p>What does this mean?</p>
                            <p>
                                The forms of payment we accept are{' '}
                                <span className="payment-forms-text">
                                    VISA, MASTERCARD, AMERICAN
                                    EXPRESS, DISCOVER, JCB, DINERS
                                    CLUB, CHINA UNIONPAY, and DEBIT
                                    CARDS.
                                </span>
                            </p>
                        </details>
                    </details>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default FAQ;
