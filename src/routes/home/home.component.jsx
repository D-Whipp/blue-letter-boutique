import './home.styles.css';

import Promotion from '../promotion/promotion.component';
import Navigation from '../navigation/navigation.component';
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
            <Jumbotron />
            <CurrentTrends />
            <Categories />
            <QuickLinks />
            <Footer />
        </>
    );
};

export default Home;
