import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import OurStory from './components/our-story/our-story.component';
import Foundations from './components/foundations/foundations.components';
import TermsOfUse from './components/terms-of-use/terms-of-use.component';
import Returns from './components/returns/returns.components';
import './App.styles.css';
import Shipping from './components/shipping/shipping.component';
import FAQ from './components/faq/faq.component';

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/pages/our-story" element={<OurStory />} />
            <Route
                path="/pages/foundations"
                element={<Foundations />}
            />
            <Route
                path="/pages/terms-of-use"
                element={<TermsOfUse />}
            />
            <Route path="/pages/returns" element={<Returns />} />
            <Route path="/pages/shipping" element={<Shipping />} />
            <Route path='/pages/faq' element={<FAQ />} />
        </Routes>
    );
};

export default App;
