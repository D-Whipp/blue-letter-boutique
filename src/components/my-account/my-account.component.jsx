import './my-account.styles.css';

import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const MyAccount = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    console.log('My Account Current User: ', currentUser);
    console.log('My Account setCurrentUser: ', setCurrentUser);

    // console.log(UserCredentialImpl);
    return (
        <>
            <Promotion />
            <Navigation />

            <div className="my-account-container">
                Todo: Create My Account Page
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default MyAccount;
