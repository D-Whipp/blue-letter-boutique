import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log('Category Map: ', categoryMap);
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    // When this useEffect fires it'll upload the SHOP_DATA to
    // our firestore db, it only needs to fire ONCE
    // WHICH IT ALREADY HAS, check the db
    // so don't uncomment it
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};