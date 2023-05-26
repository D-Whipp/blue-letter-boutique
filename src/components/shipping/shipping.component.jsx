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
                    <p>
                        Orders with Standard Shipping typically take
                        between 1-3 business days to be processed and
                        shipped from our warehouse in Sante Fe, NM.
                        Express or UPS Next Day Air orders placed
                        before 3:00 p.m. MT (12:00 a.m. PT) will be
                        shipped the same day. Express or UPS Next Day
                        Air orders placed after 3:00 p.m. MT (12:00
                        a.m. PT) will ship the following business day.{' '}
                        <span className="blue-text">
                            Weekends and holidays are{' '}
                            <b>
                                <em>NOT</em>
                            </b>{' '}
                            business days
                        </span>
                        , and are therefore excluded from processing
                        and shipping times, so please account for
                        non-business days when choosing your shipping
                        mMThod. You will receive an email with
                        tracking information when your order has been
                        shipped.
                    </p>

                    <p>
                        <b>Counting business days</b> - Shipping days
                        are 24-hour days. If you place your order on
                        Monday (before 3pm MT), then 1 business day
                        would be Tuesday. If you place your order on
                        Monday (after 3pm MT), then 1 business day
                        would be Wednesday.
                    </p>

                    <p>
                        From time to time, we have <em>epic sales</em>
                        . When that happens, we work to get all orders
                        out quickly, but we could still end up a
                        couple of days behind. So it could take
                        another 1-2 business days in addition to our
                        regular shipping schedule. But we will do our
                        very best to get your orders to you as fast as
                        humanly possible!
                    </p>

                    <p>
                        You may select from Standard Shipping (5-8
                        business days), Priority Shipping (4-5
                        business days), Express Shipping (2-4 business
                        days), or UPS Next Day Air.{' '}
                        <b>
                            Business days do not include weekends or
                            holidays.
                        </b>
                    </p>

                    <p>
                        Credit card authorization and address
                        verification must be received prior to
                        shipping any order. Please note that credit
                        card authorization can take up to{' '}
                        <span className="blue-text">
                            48 hours for approval.
                        </span>
                    </p>

                    <p>
                        We use UPS and USPS for domestic orders. We
                        use USPS for APO/FPO addresses. We use UPS
                        exclusively for Express and UPS Next Day Air
                        orders. If an order is expedited, a physical
                        address will be needed since UPS{' '}
                        <span className="blue-text">cannot</span>{' '}
                        deliver to P.O. Boxes. We do not offer
                        Saturday delivery for expedited orders. Please
                        remember that delivery time does not include
                        weekends or holidays.
                    </p>

                    <p>
                        You will be notified by email regarding back
                        ordered items and expected delays. Blue Letter
                        Boutique will contact you with a follow-up
                        email if the merchandise you have selected is
                        not currently in stock or if we need
                        additional identification provided for credit
                        verification.
                    </p>
                    <h3>Shipping methods</h3>
                    <h3>
                        Standard Shipping (shipped via UPS or USPS)
                    </h3>
                    <p>
                        Orders with Standard Shipping typically take
                        between 1-3 business days to be processed and
                        shipped from our warehouse in Sante Fe, New
                        Mexico. Orders shipped via standard delivery
                        typically arrive in five (5) to eight (8)
                        business days (Monday through Friday, not
                        including holidays) for the Continental United
                        States. All orders are shipped within 1-3
                        business days. Standard shipping cost is $8.95
                        for all under $100. It is free for orders over
                        $100.
                    </p>
                    <p>
                        International orders are usually delivered
                        within 7-17 business days. Orders confirmed
                        before 3:00 p.m. MT will be processed the same
                        day pending credit card authorization and
                        verification. Orders confirmed after 3:00 p.m.
                        MT will be processed the following business
                        day. Cost is $22.95. International orders will
                        be shipped via USPS.
                    </p>
                    <h3>
                        Priority Shipping (shipped via UPS or USPS)
                    </h3>
                    <p>
                        Orders with Priority Shipping are processed
                        once credit card authorization and address
                        verification have been obtained. Orders
                        shipped via priority delivery typically arrive
                        in four (4) to five (5) business days (Monday
                        through Friday, not including holidays) for
                        the Continental United States. All orders are
                        shipped within 1-3 business days. Priority
                        shipping cost is $12.95.
                    </p>
                    <h3>Express Shipping (shipped via UPS)</h3>
                    <p>
                        Orders with Express Shipping are processed
                        once credit card authorization and address
                        verification have been obtained. Orders
                        shipped via express delivery typically arrive
                        in two (2) to four (4) business days (Monday
                        through Friday, not including holidays) for
                        the Continental United States. Express
                        shipping requires a physical address. UPS
                        cannot deliver to P.O. Boxes. All orders are
                        shipped within 1-3 business days. Express
                        shipping cost is $22.95.
                    </p>
                    <h3>UPS Next Day Air (shipped via UPS)</h3>
                    <p>
                        {' '}
                        Orders with UPS Next Day Air Shipping are
                        processed once credit card authorization and
                        address verification have been obtained.
                        Orders shipped via UPS Next Day Air delivery
                        typically arrive in one (1) business day
                        (Monday through Friday, not including
                        holidays) for the Continental United States.
                        UPS Next Day Air Shipping is not available for
                        Alaska or Hawaii. UPS Next Day Air shipping
                        requires a physical address.{' '}
                        <span className="blue-text">
                            UPS cannot deliver to P.O. Boxes
                        </span>
                        . Orders placed by 3 p.m. MT will ship the
                        same day. Orders shipped after 3 p.m. MST will
                        ship the following business day. UPS Next Day
                        Air shipping cost is $39.95.
                    </p>
                    <h3>INTERNATIONAL SHIPPING</h3>

                    <p>Standard International</p>
                    <p>
                        Standard International orders are usually
                        delivered within 7-17 business days. Orders
                        confirmed before 3:00 p.m. MT will be
                        processed the same day pending credit card
                        authorization and verification. Orders
                        confirmed after 3:00 p.m. MT will be processed
                        the following business day. Cost is $22.95. We
                        currently do not offer expedited shipping for
                        international orders.
                    </p>
                    <p>Customs and Duties</p>
                    <p>
                        Blue Letter Boutique does not pay any customs,
                        duties, or taxes of any kind on international
                        orders. Countries may or may not assess a fee
                        for your order entering the country. This does
                        not always happen. But please be aware that it
                        can happen, and that Blue Letter Boutique does
                        not pay these fees.
                    </p>
                    <p>
                        Please call us for any questions or concerns:
                        555-555-5555 or you may email us at
                        orders@shopblueletter.com
                    </p>
                    <h3>LOST PACKAGES</h3>
                    <p>
                        Once the investigation is complete, if your
                        order is lost in transit or delivered to the
                        wrong address, we will replace your items if
                        they are still available. If we cannot replace
                        them, then we will refund your order, as well
                        as any shipping costs.However, if shipping
                        carrier confirms delivery to the correct
                        address, we are unable to issue a refund.
                    </p>
                    <h3>REFUSED OR UNDELIVERABLE PACKAGES</h3>
                    <p>
                        Refused or undeliverable packages are subject
                        to return shipping costs that vary by shipping
                        method used in the original order. Next Day
                        Air - $39.95 return cost. Express Shipping -
                        $22.95 return cost. Priority Shipping - $12.95
                        return cost. Standard Shipping - $8.95 return
                        cost. If you choose not to have your order
                        re-delivered, we can refund you the cost of
                        the items, but the original shipping cost and
                        the undeliverable charge from the carrier will
                        be deducted from the reimbursement.
                    </p>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shipping;
