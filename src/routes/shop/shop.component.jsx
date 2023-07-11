import './shop.styles.css';

import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {

    return (
        <>
            <Promotion />
            <Navigation />

            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shop;