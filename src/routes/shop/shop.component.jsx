import SHOP_DATA from '../../shop-data.json';

import './shop.styles.css'

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className='shop-container'>
                {SHOP_DATA.map(({ id, name }) => (
                    <div key={id}>
                        <h2>{name}</h2>
                    </div>
                ))}
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shop;
