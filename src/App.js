import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './routes/home/home.component';
import OurStory from './components/our-story/our-story.component';
import Foundations from './components/foundations/foundations.components';
import TermsOfUse from './components/terms-of-use/terms-of-use.component';
import Returns from './components/returns/returns.components';
import './App.styles.css';
import Shipping from './components/shipping/shipping.component';
import FAQ from './components/faq/faq.component';
import PrivacyAndSecurity from './components/privacy-and-security/privacy-and-security.component';
import ContactUs from './components/contact-us/contact-us.component';
import GiftCards from './components/gift-cards/gift-cards.component';
import MyAccount from './components/my-account/my-account.component';

const App = () => {
    useEffect(() => {
        if (document) {
          const stylesheet = document.createElement("link");
          stylesheet.rel = "stylesheet";
          stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
    
          document.head.appendChild(stylesheet);
        }
      }, []);

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
            <Route path="/pages/faq" element={<FAQ />} />
            <Route
                path="/pages/privacy-and-security"
                element={<PrivacyAndSecurity />}
            />
            <Route path="/pages/contact-us" element={<ContactUs />} />
            <Route path='/pages/gift-cards' element={<GiftCards />} />
            <Route path='/pages/my-account' element={<MyAccount />} />
            </Routes>
    );
};

export default App;
