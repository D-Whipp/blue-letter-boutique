import './shop.styles.css';

import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log('categories map: ', categoriesMap)

    return (
        <Fragment>
            <Promotion />
            <Navigation />

            <div className="shop-container">
                {Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>

            <QuickLinks />
            <Footer />
        </Fragment>
    );
};

export default Shop;
