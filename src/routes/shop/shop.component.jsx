import './shop.styles.css';

import { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log('categories map: ', categoriesMap)

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="shop-container">
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })}
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shop;
