import './my-account.styles.css';

import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const MyAccount = () => {
    const { currentUser } = useContext(UserContext);
    const auth = getAuth();
    // updateProfile(auth.currentUser, {
    //     displayName: 'Miles M.',
    //     photoUrl:
    //         'https://ik.imagekit.io/dwimageKit/blue-letter-boutique/hats/orange-fall-hat.jpg?updatedAt=1683944831199',
    // })
    //     .then(() => {
    //         alert('profile updated!');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    console.log('My Account Current User: ', currentUser);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="my-account-container">
                {currentUser ? (
                    <div className="my-account-content">
                        <h2>
                            Welcome back {currentUser.displayName}
                        </h2>
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
