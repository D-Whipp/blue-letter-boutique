import './sale.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const Sale = () => {
    return (
        <>
        <Promotion />
        <Navigation />
        
        <div className='sale-container'>Sale Component is listening.</div>
        
        <QuickLinks />
        <Footer />
        </>
    )
}

export default Sale;