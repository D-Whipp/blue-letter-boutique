import './authentication.styles.css';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="authentication-container">
                <div className="authentication-text-container">
                    <div className="authentication-methods-container">
                        <div className="sign-in-method">
                            <SignInForm />
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
