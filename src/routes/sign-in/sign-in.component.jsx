import './sign-in.styles.css';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const SignIn = () => {
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="sign-in-container">
                <div className='sign-in-text-container'>
                Sign In is listening...
                </div>
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default SignIn;
