import './gift-cards.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const GiftCards = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="gift-card-container">
                <div className="gift-card">
                    <div className="gift-card-logo">Blue Letter</div>
                    <div className="gift-card-heading">
                        Blue Letter Boutique Gift Card
                    </div>
                    <div className="gift-card-text">$25</div>
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default GiftCards;
