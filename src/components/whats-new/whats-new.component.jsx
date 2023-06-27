import './whats-new.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';
import ProductCard from '../product-card/product-card.component';

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';

// import { useParams } from 'react-router-dom';

const WhatsNew = () => {
    // const { category } = useParams();
    // console.log('Category useParams: ', category);

    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);
    // const [newItems, setNewItems] = useState([]);

    // console.log(products);

    useEffect(() => {
        setProducts(categoriesMap);
    }, [categoriesMap]);

    // useEffect(() => {
    //     setNewItems(products);
    // }, [products])
    // let newItems = [];

    // if (products.length) {
    const newItems = [
        products.dresses[2],
        products.hats[5],
        products.hats[3],
        products.pants[3],
        products.shirts[3],
        products.shirts[6],
        products.shoes[4],
        products.shoes[2],
        products.dresses[4],
    ];
    // }
    // console.log('categoriesMap: ', categoriesMap)
    // console.log('products: ', products);
    // console.log('setProducts: ', setProducts)
    // let newItems;

    // if (products) {
    // }
    // this.setState = /

    // console.log('this: ', this)
    // console.log('new item: ', newItems);

    // useEffect(() => {
    //     setProducts(categoriesMap[category]);
    // }, [category, categoriesMap])

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="whats-new-container">
                <h2>what's new</h2>
                <div className="whats-new-content-container">
                    {newItems.length > 0 &&
                        newItems.map((newItem) => (
                            <ProductCard
                                key={newItem.id}
                                product={newItem}
                            />
                        ))}
                </div>
            </div>
            <QuickLinks />
            <Footer />
        </>
    );
};

// {newItems.length
//     ? newItems.map((newItem) => (
//           <ProductCard
//               key={newItem.id}
//               product={newItem}
//           />
//       ))
//     : console.log(
//           'Failed to load new items array'
//       )}

// {newItems.length &&
//     newItems.map((newItem) => ( <ProductCard key={newItem.id} product={newItem} />))}
export default WhatsNew;
