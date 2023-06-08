import './sign-in.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
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
                            <h2>Sign In Page</h2>
                            <button onClick={logGoogleUser}>
                                Sign in with Google Popup
                            </button>
                        </div>
                        <div className='sign-up-method'>
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

export default SignIn;
