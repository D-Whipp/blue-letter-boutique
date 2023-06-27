import './whats-new.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';
import ProductCard from '../product-card/product-card.component';

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';

const WhatsNew = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const newItemsArray = [
            categoriesMap.dresses[2],
            categoriesMap.hats[5],
            categoriesMap.hats[3],
            categoriesMap.pants[3],
            categoriesMap.shirts[3],
            categoriesMap.shirts[6],
            categoriesMap.shoes[4],
            categoriesMap.shoes[2],
            categoriesMap.dresses[4],
        ];

        setProducts(newItemsArray);
    }, [categoriesMap]);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="whats-new-container">
                <h2>what's new</h2>
                <div className="whats-new-content-container">
                {products &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
            <QuickLinks />
            <Footer />
        </>
    );
};

export default WhatsNew;
