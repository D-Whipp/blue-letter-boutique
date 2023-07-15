import './my-account.styles.css';

import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';

const MyAccount = () => {
    const { currentUser } = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    return (
        <>
            <Promotion />
            <Navigation />

            <div className="my-account-container">
                {user ? (
                    <div className="my-account-content">
                        <h2>Welcome back {user.displayName}</h2>
                        <div className="user-information">
                            <img
                                className="user-photo"
                                src={user.photoURL}
                                alt={user.displayName}
                            />
                        </div>
                        <div className="user-email">
                            <p>{user.email}</p>
                        </div>
                        <div className="buttons-container">
                            <button>
                                <Link to="/pages/shop">
                                    Let's Start Shopping!
                                </Link>
                            </button>
                            <button>
                                <Link to="/pages/contact-us">
                                    Need Help?
                                </Link>
                            </button>
                            <button onClick={signOutUser}>
                                Sign Out
                            </button>
                        </div>
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
