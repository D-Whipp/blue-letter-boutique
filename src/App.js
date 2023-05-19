import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import OurStory from './components/our-story/our-story.component';
// import './App.styles.css';


const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/our-story' element={<OurStory />} />
        </Routes>
    );
};

export default App;
