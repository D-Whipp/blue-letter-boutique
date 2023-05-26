import './shipping.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const Shipping = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="shipping-container">
            <h2>Shipping</h2>
                <div className="shipping-text-container">
                    <p>
                        <span className="shipping-note">
                            {' '}
                            ALL orders in the CONTINENTAL USA over
                            $100.00 get FREE STANDARD SHIPPING.
                        </span>
                    </p>
                    <h3>Where are our products shipped from?</h3>
                    <p>
                        All of our products are housed and shipped
                        from our warehouse in Sante Fe, New Mexico,
                        USA.
                    </p>
                    <h3>SHIPPING TIMES</h3>
                    <p>Orders with Standard Shipping typically take between 1-3 business days to be processed and shipped from our warehouse in Sante Fe, NM. Express or UPS Next Day Air orders placed before 3:00 p.m. ET (12:00 a.m. PT) will be shipped the same day. Express or UPS Next Day Air orders placed after 3:00 p.m. ET (12:00 a.m. PT) will ship the following business day.  <span className='blue-text'>Weekends and holidays are <b><em>NOT</em></b> business days</span>, and are therefore excluded from processing and shipping times, so please account for non-business days when choosing your shipping method. You will receive an email with tracking information when your order has been shipped.</p>

                    <p><b>Counting business days</b> - Shipping days are 24-hour days. If you place your order on Monday (before 3pm ET), then 1 business day would be Tuesday. If you place your order on Monday (after 3pm ET), then 1 business day would be Wednesday.</p>
                    
                    <p>From time to time, we have epic sales. When that happens, we work to get all orders out quickly, but we could still end up a couple of days behind. So it could take another 1-2 business days in addition to our regular shipping schedule. But we will do our very best to get your orders to you as fast as humanly possible!</p>
                    
                    <p>You may select from Standard Shipping (5-8 business days), Priority Shipping (4-5 business days), Express Shipping (2-4 business days), or UPS Next Day Air. <b>Business days do not include weekends or holidays.</b></p> 
                    
                    <p>Credit card authorization and address verification must be received prior to shipping any order. Please note that credit card authorization can take up to <b>48 hours for approval.</b></p>

                    <p>We use UPS and USPS for domestic orders. We use USPS for APO/FPO addresses. We use UPS exclusively for Express and UPS Next Day Air orders. If an order is expedited, a physical address will be needed since UPS cannot deliver to P.O. Boxes. We do not offer Saturday delivery for expedited orders. Please remember that delivery time does not include weekends or holidays.</p>
                    
                    <p>You will be notified by email regarding back ordered items and expected delays. Red Dress will contact you with a follow-up email if the merchandise you have selected is not currently in stock or if we need additional identification provided for credit verification.</p>
                    <h3>Shipping methods</h3>
                    <h3>Standard Shipping (shipped via UPS or USPS)</h3>
                    <p>Orders with Standard Shipping typically take between 1-3 business days to be processed and shipped from our warehouse in Athens, GA. Orders shipped via standard delivery typically arrive in five (5) to eight (8) business days (Monday through Friday, not including holidays) for the Continental United States. All orders are shipped within 1-3 business days.  Standard shipping cost is $8.95 for all under $100. It is free for orders over $100.</p>
                    <p>International orders are usually delivered within 7-17 business days. Orders confirmed before 1:00 p.m. ET will be processed the same day pending credit card authorization and verification. Orders confirmed after 1:00 p.m. ET will be processed the following business day. Cost is $22.95. International orders will be shipped via USPS.</p>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shipping;
