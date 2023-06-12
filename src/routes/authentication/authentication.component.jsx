import './sign-in.styles.css';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="sign-in-container">
                <div className="sign-in-text-container">
                    <div className="sign-in-methods-container">
                        <div className="sign-in-method">
                            <h2>Google Sign In</h2>
                            <button onClick={logGoogleUser}>
                                Sign in with Google
                            </button>
                        </div>
                        <div className="sign-up-method">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
            <QuickLinks />
            <Footer />
        </>
    );
};

export default Authentication;
