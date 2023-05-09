import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
