import './home.styles.css';

// import { Outlet } from 'react-router-dom';
import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';
import Jumbotron from '../jumbotron/jumbotron.component';
import CurrentTrends from '../current-trends/current-trends.component';
import Categories from '../categories/categories.component';
import QuickLinks from '../quick-links/quick-links.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
    return (
        <>
            <Promotion />
            <Navigation />
            <MobileNavigation />
            <Jumbotron />
            <CurrentTrends />
            <Categories />
            <QuickLinks />
            <Footer />
        </>
    );
};

export default Home;
