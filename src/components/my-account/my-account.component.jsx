import './my-account.styles.css';

import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import { Link } from 'react-router-dom';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const MyAccount = () => {
    const { currentUser } = useContext(UserContext);

    console.log('My Account Current User: ', currentUser);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="my-account-container">
                {currentUser ? (
                    <div className='my-account-content'>
                    <h2>Welcome back {currentUser.email}!</h2>
                    </div>
                ) : (
                    <div className="login-needed">
                        You're not logged in!
                        <button>
                            <Link to="/pages/authentication">
                                Go To Login
                            </Link>
                        </button>
                    </div>
                )}
            </div>

            <QuickLinks />
            <Footer />
        </>
    );
};

export default MyAccount;
