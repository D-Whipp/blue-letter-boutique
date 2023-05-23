import './returns.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const Returns = () => {
    return (
        <>
            <Promotion />
            <Navigation />
            <div className="returns-container">
                <div className="returns-text-container">
                    <h3>Welcome to Blue Letter Boutique!</h3>
                    <p>
                        Our goal at Blue Letter Boutique is for you to
                        love every piece you order but we know that
                        returns happen. So we hope this makes it a
                        simple process for you.
                    </p>
                    <h3>HOW DO I I START A RETURN?</h3>
                    <p>
                        Start your return by clicking the Return
                        Portal link <a href="!#">here</a>. Once you
                        enter your email address a link will be sent
                        to you to guide you to your Order History.
                        Once there, please select the eligible items
                        you would like to return. Once you have
                        finished the Returns process, a packing slip
                        and Return label will be emailed directly to
                        you. Print the label and packing slip and
                        please include the packing slip in the box
                        with your items. Please ensure all approved
                        items on the packing slip are included in the
                        same package.
                    </p>
                    <h3>WHAT IS YOUR RETURN POLICY?</h3>
                    <p>
                        <span>Within 14 days:</span> We gladly accept
                        returns for a refund (less the $8.00 return
                        label cost) if postmarked within 14 calendar
                        days from the date you receive your order.
                        Your return shipping is <span>FREE</span> if
                        you opt for an online credit!
                    </p>
                    <p>
                        <span>After 14 days:</span> After 14 days, we
                        will accept returns for an online credit only
                        (less the $8.00 return label cost) if
                        postmarked within 30 calendar days from the
                        date your order was shipped. Free shipping is
                        not available after 14 days.
                    </p>
                    <h3>WHAT QUALIFIES FOR A RETURN?</h3>
                    <p>
                        Items that qualify for a return are any item
                        that is unworn, unwashed, undamaged, unused
                        and with all the original tags attached and
                        not marked FINAL SALE.
                    </p>
                    <p>
                        Gift Cards, cosmetics, bodysuits, intimates,
                        bras, camisoles, slips, tights, socks and
                        Final Sale/Clearance category items are final
                        sale and may not be returned or exchanged.
                    </p>
                    <p>
                        <span>
                            Items purchased with a 30% or more coupon
                            code are final sale and cannot be
                            returned.
                        </span>
                    </p>
                    <p>
                        Shoes scuff easily on any hard surface. Please
                        try on shoes on carpet to keep them from
                        scuffing before making your final decision.
                        Shoe boxes are such an important part of the
                        product presentation and must be returned
                        without damage, along with the shoes.
                    </p>
                    <p>
                        Swimwear should always be tried on with
                        underwear for sanitary reasons. Please do not
                        remove the protective sticker.
                    </p>
                    <p>
                        Tops and dresses can get makeup on them very
                        easily during the tryon process. Please take
                        extra care of makeup or deodorant rubbing off
                        on the clothing.
                    </p>
                    <h3>MY ITEM ARRIVED DAMAGED. WHAT DO I DO?</h3>
                    <p>
                        If you receive an item that is damaged, please
                        notify our customer service department within
                        3 days. You can email them at
                        orders@shopblueletter.com. We ask that you
                        please include photos of the damage to
                        expedite the process. We do our best to
                        accurately depict the correct colors of our
                        clothing but colors may vary due to
                        photography lenses and lighting. These
                        situations do not qualify as defects but you
                        most certainly can still return them.{' '}
                    </p>
                    <h3>
                        MY ITEM IS MARKED FINAL SALE. CAN I STILL
                        RETURN IT?
                    </h3>
                    <p>
                        Items marked with Final Sale cannot be
                        returned, refunded or exchanged. We do not
                        charge restocking fees but Final sale items
                        are limited to heavily marked down items from
                        past seasons as well as items that cannot be
                        returned for sanitary reasons. Gift cards are
                        also final sale items.
                    </p>
                    <p>
                        For any questions, please contact
                        orders@shopblueletter.com.
                    </p>
                    <p>
                        If any returns do not meet the requirements
                        listed above, our amazing customer service
                        team will contact you via email or phone.{' '}
                    </p>
                    <h3>ARE YOUR RETURN LABELS FREE?</h3>
                    <p>
                        Not right now but we are always working on
                        improving our customer service experience.
                        Currently, if you choose to use the pre-paid
                        UPS return label sent to your email, the $8.00
                        cost of the label will be deducted from the
                        return total once we process your return. Our
                        pre-paid return labels are only for use in the
                        United States.{' '}
                    </p>
                    <p>
                        Original shipping charges are not refundable.{' '}
                    </p>
                    <p>
                        If you choose to not use the Pre-Paid label,
                        you may use the shipping carrier of your
                        choice however, you will be responsible for
                        paying postage. Please keep a record of your
                        tracking number so you can follow your order
                        back to us.
                    </p>
                    <h3>
                        WHAT PACKAGING SHOULD I SEND THE RETURN IN?
                    </h3>
                    <p>
                        You are free to return your items in the
                        original packaging or any packaging that will
                        safely return the items back to us. Please do
                        not staple any bags as it can damage the
                        items.{' '}
                    </p>
                    <h3>WHAT IS YOUR RETURN PROCESSING TIME?</h3>
                    <p>
                        Once you receive an email indicating your
                        return has reached our warehouse, please allow
                        us up to 14 business days for us process your
                        return. We appreciate your patience while we
                        work to increase staffing and processing time.
                        We are always working to increase the customer
                        experience and we hope to speed up this
                        process shortly.
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

export default Returns;
