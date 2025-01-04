import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage';
import NewsLetter from './pages/NewsLetter';
import Swap from './pages/Swap';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/newsletter" element={<NewsLetter />} />
                    <Route path="/swap" element={<Swap />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
