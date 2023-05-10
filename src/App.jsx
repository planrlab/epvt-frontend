import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './components/footer';
import Home from './pages/home';
import CFGViewer from './pages/tools/cfg-viewer';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cfg-viewer" element={<CFGViewer />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
