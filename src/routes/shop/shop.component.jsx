import './shop.styles.css'

import { useContext } from 'react';
import { ProductsContext } from '../../components/contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className='shop-container'>
                {products.map((product) => (
                    <ProductCard key={products.id} product={product} />
                ))}
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default Shop;
