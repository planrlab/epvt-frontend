import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './components/footer';
import Home from './pages/home';
import CFGViewer from './pages/tools/cfg-viewer';
import About from './pages/about';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cfg-viewer" element={<CFGViewer />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
