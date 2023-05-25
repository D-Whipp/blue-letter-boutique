import './foundations.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const Foundations = () => {
    return (
        <>
            <Promotion />
            <Navigation />
            <div className="foundations-container">
                <div className="foundations-text-container">
                    <h2>Foundations</h2>
                    <p>
                        We at <span>Blue Letter Boutique</span> love
                        fashion and we've experienced tremendous
                        success within this industry. With this
                        success comes a powerful desire to give back
                        to our communities; to show how grateful we
                        are. While we give most of our donations
                        privately we feel compelled to publicly
                        recognize the orginizations we donate to.
                    </p>
                    <p>
                        Below is a list of the orginizations and a
                        little about them:
                    </p>
                </div>
                <div className="charities-container">
                    <h3 className="charity-title">
                        <a
                            href="https://www.salvationarmyalbuquerque.org/ways-to-give"
                            target="_blank"
                            rel="noreferrer"
                        >
                            The Salvation Army Albuquerque
                        </a>
                    </h3>
                    <p className="charity-details">
                        The Salvation Army Albuquerque provides many
                        services through their programs like their
                        Adult Rehabilitation Program, Albuquerque
                        Family Services, Emergency Disaster Services
                        and more. They accept monetary donations,
                        non-perishable food donations and household
                        goods.
                    </p>
                    <h3 className="charity-title">
                        <a
                            href="https://www.nmvic.org/donate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Veteran’s Integration Center
                        </a>
                    </h3>
                    <p className="charity-details">
                        The Veterans Integration Center, A 501(c)3
                        non-profit organization founded in 2005, is a
                        resource for Veterans and their families in
                        New Mexico. The VIC provides a multitude of
                        services including multiple housing assistance
                        options, peer support, food and nutrition, and
                        case management services to Veterans, their
                        families and the community as a proactive and
                        innovative agency that primarily serves
                        literally and at-risk homeless Veterans and
                        their families. They are accepting monetary
                        donations..
                    </p>
                    <h3 className="charity-title">
                        <a
                            href="https://www.joyjunction.org/how-to-help/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Joy Junction
                        </a>
                    </h3>
                    <p className="charity-details">
                        Joy Junction is a 501(c)(3) faith-based church
                        ministry that offers emergency and short-term
                        essentials such as food, clothing, counseling,
                        transportation, shelter to homeless men,
                        women, children, and families throughout
                        Albuquerque. Guests can also receive an array
                        of other services for their spiritual and
                        emotional needs. Joy Junction accepts
                        donations of food, clothes, home goods and
                        financial contributions.
                    </p>
                    <h3 className="charity-title">
                        <a
                            href="https://www.rrfb.org/give/give-funds/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Roadrunner Food Bank
                        </a>
                    </h3>
                    <p className="charity-details">
                        Roadrunner Food Bank of New Mexico, a Feeding
                        America member, is the largest non-profit
                        dedicated to solving food insecurity in New
                        Mexico. As a food distribution hub, they
                        provide food to hundreds of affiliated member
                        partners around the state including food
                        pantries, soup kitchens, shelters and regional
                        food banks. They are accepting financial
                        donations.
                    </p>
                    <h3 className="charity-title">
                        <a
                            href="https://mow-nm.org/how-you-can-help/monetary-donations/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Meals on Wheels Albuquerque
                        </a>
                    </h3>
                    <p className="charity-details">
                        Meals on Wheels of Albuquerque is a private
                        501(c)3 nonprofit corporation founded in 1972
                        by a group of women from Presbyterian Churches
                        around Albuquerque. Their program is currently
                        the only one of its kind in the Albuquerque
                        metro area. They provide our services to
                        anyone of any age. There are no restrictions
                        for age or disability. They can provide meals
                        for any duration whether they are needed
                        during a period of recuperation or for many
                        years. They are accepting financial donations.
                    </p>
                </div>
            </div>
            <QuickLinks />
            <Footer />
        </>
    );
};

export default Foundations;
