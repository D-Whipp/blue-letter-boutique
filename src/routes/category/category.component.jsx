import './category-styles.css';

import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect( () => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
        {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
        </div>
    )
}

export default Category;