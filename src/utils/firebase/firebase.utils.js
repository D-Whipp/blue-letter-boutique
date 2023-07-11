import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAclF7XElM50roYiQe95F8JsIyBQhPWn0c',
    authDomain: 'blue-letter-boutique-db.firebaseapp.com',
    projectId: 'blue-letter-boutique-db',
    storageBucket: 'blue-letter-boutique-db.appspot.com',
    messagingSenderId: '656844952315',
    appId: '1:656844952315:web:ab9e1de0f3ade433fe965e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

export const db = getFirestore();

// method for uploading SHOP_DATA into firebase storage
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

// method for retrieving SHOP_DATA from firbase db
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce(
        (acc, docSnapshot) => {
            const { title, items } = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {}
    );

    return categoryMap;
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(
                'Error creating the user. ERROR MESSAGE: ',
                error.message
            );
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
};

export const signInAuthUserWithEmailAndPassword = async (
    email,
    password
) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
