import './shop.styles.css';

import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {
    // console.log('categories map: ', categoriesMap)

    return (
        <>
            <Promotion />
            <Navigation />

            <Routes>
                <Route index element={<CategoriesPreview />} />
            </Routes>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shop;
