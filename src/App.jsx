import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage';
import NewsLetter from './pages/NewsLetter';
import Swap from './pages/Swap';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/swipe" element={<HomePage />} />
                    <Route path="/" element={<NewsLetter />} />
                    <Route path="/newsletter" element={<Swap />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
