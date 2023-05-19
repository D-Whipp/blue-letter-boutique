import './home.styles.css';

// import { Outlet } from 'react-router-dom';
import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import Jumbotron from '../jumbotron/jumbotron.component';
import Categories from '../categories/categories.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
    // const directories = [
    //     {
    //         id: 1,
    //         title: 'Hats',

    //     }
    // ]

    return (
        <>
            <Promotion />

            <Navigation />

            <Jumbotron />

            <div className="trends-container">
                <div className="trends-text">
                    <p>Current Trends</p>
                </div>
                <div className="trends-image-container">
                    <div className="left-trend-container">
                        <p>Shop Two Piece</p>
                    </div>
                    <div className="right-trend-container">
                        <p>Shop Dresses</p>
                    </div>
                </div>
            </div>

            <Categories />

            <QuickLinks />

            <Footer />
        </>
    );
};

export default Home;
