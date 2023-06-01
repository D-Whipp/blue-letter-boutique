import './privacy-and-security.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const PrivacyAndSecurity = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="privacy-and-security-container">
                <div className="privacy-and-policy-text-container">
                    <h3>Privacy and Security</h3>
                    <p>
                        Your privacy is super important to us! Blue
                        Letter Boutique is committed to protecting
                        your privacy and providing you with a safe and
                        secure online experience. This Privacy Policy
                        applies to www.blueletterboutique.com, as well
                        as any other website owned by Blue Letter
                        Boutique or communication sent by Blue Letter
                        Boutique. It discloses the kinds of
                        information we gather, how we may use it, and
                        how we may share it. Please read it carefully.
                        It may be modified periodically. Your
                        continued use of our website signifies your
                        acceptance of this Privacy Policy. As always,
                        feel free to contact us at
                        customerservice@blueletterboutique.com with
                        any questions.
                    </p>
                    <h4>
                        Blue Letter Boutique collects personal
                        information
                    </h4>
                    <p>
                        We collect personally identifiable information
                        to fulfill your orders, tell you about new
                        products and deals, and provide you with an
                        amazing shopping experience. That personal
                        information includes, but is not limited to,
                        your name, billing and shipping addresses, an
                        Blue Letter Boutique user name and password,
                        email address, phone number, and financial
                        information. We value your trust in us and
                        will do everything we can to safeguard your
                        privacy and the security of your transactions.
                    </p>
                    <p>
                        Blue Letter Boutique does not retain financial
                        information, other than possibly the last four
                        digits of your credit card number. Our payment
                        gateway is managed by PayPal. If you enter
                        your credit card information on our site,
                        PayPal will process the transaction and retain
                        a record of it. Blue Letter Boutique keeps no
                        record of your full credit card number. If you
                        checkout using your personal Amazon or PayPal
                        account, then that organization will process
                        the transaction using financial information
                        you have previously provided to it.
                    </p>
                    <p>
                        Information that you submit about yourself may
                        be used by Blue Letter Boutique to provide you
                        requested services, communicate with you about
                        Blue Letter Boutique products, improve your
                        online experience, or support our continuing
                        efforts to offer you the information and
                        services you want most. Blue Letter Boutique
                        does provide aggregate statistics and
                        information about our sales, traffic patterns
                        and related site information to third parties.
                        We also reserve the right to share aggregate
                        statistical data of which your personal
                        information is a part, as well as your
                        specific personal information sometime in the
                        future.
                    </p>
                    <p>
                        In addition, Blue Letter Boutique may, and you
                        hereby authorize us to, disclose your personal
                        information when required to do so by law,
                        when Blue Letter Boutique, in its sole
                        discretion believes that you are in violation
                        of our Terms and Conditions, or when you
                        violate any state or federal laws, or Blue
                        Letter Boutique in its sole discretion deems
                        it necessary or appropriate to protect the
                        personal safety of other users of Blue Letter
                        Boutique services or to protect the rights or
                        property of Blue Letter Boutique.
                    </p>
                    <h4>EMAIL</h4>
                    <p>
                        We know you love email! And we love to tell
                        you about new arrivals. So we send emails to
                        notify customers about new arrivals and
                        special events. New arrivals can happen twice
                        a day, so we may send ten or more emails per
                        week. You will only receive emails if you opt
                        in to our email marketing. You may opt out at
                        any time by clicking the unsubscribe link in
                        the email, or by sending a request to
                        customerservice@blueletterboutique.com. We may
                        send you emails to confirm your order, send
                        tracking information, or to communicate with
                        you specifically about your order, or in
                        response to a question either to our email,
                        chat, or any of our social media accounts.
                    </p>
                    <h4>social media</h4>
                    <p>
                        We are active on many social media sites and
                        we love to spend time with you there. Please
                        know that we cannot constantly monitor our
                        social media pages and that any information
                        that you share may be viewed by others.
                    </p>
                    <h4>Cookies</h4>
                    <p>
                        Blue Letter Boutique uses “cookies” to
                        identify visitors to our website. Cookies are
                        bits of information that a website transfers
                        to an individual's hard drive for record
                        keeping purposes. Cookies can enhance your
                        online experience by automatically saving your
                        preferences. We use cookies because they help
                        us to provide you a better online experience.
                        The information we collect through the use of
                        cookies does allow Blue Letter Boutique to
                        know when and for how long you logged on to
                        the Blue Letter Boutique website, so that we
                        can try to understand how to better serve your
                        needs.
                    </p>
                    <h4>Minors</h4>
                    <p>
                        Blue Letter Boutique is a very family friendly
                        company. Our products and culture reflect
                        that. But we do not direct our website or any
                        marketing materials to minors and do not
                        knowingly collect specific personal
                        information on minors.
                    </p>
                    <h4>contact us</h4>
                    <p>
                        We would love to hear from you! You can email
                        us anytime at orders@blueletterboutique.com.
                        You can chat with us using the chat icon at
                        the bottom of our website. You can call us at
                        706-425-8707. Our offices are open Monday
                        through Friday, from 9-5 ET. Or all of the
                        ways!
                    </p>
                    <p>
                        We are located at 1800 Fictional Street, Suite
                        D, Albuquerque, NM 87123
                    </p>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default PrivacyAndSecurity;
