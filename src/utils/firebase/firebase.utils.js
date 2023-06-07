import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
