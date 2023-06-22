import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // When this useEffect fires it'll load the SHOP_DATA to
    // our firestore db, it only needs to fire ONCE
    // WHICH IT ALREADY HAS, check the db
    // so don't uncomment it
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
