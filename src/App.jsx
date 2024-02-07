import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './components/footer';
import Home from './pages/home';

import CFGViewer from './pages/tools/cfg-viewer';
import ASTViewer from './pages/tools/ast-viewer';
import GasOptimizer from './pages/tools/gas-optimizer';
import SSAViewer from './pages/tools/ssa-viewer';
import DSAViewer from './pages/tools/dsa-viewer';
import DomTreeViewer from './pages/tools/domtree-viewer';
import OGRViewer from './pages/tools/ogr-viewer';

import About from './pages/about';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<Home />} />

                <Route path="ast-viewer" element={<ASTViewer />} />
                <Route path="cfg-viewer" element={<CFGViewer />} />
                <Route path="ssa-viewer" element={<SSAViewer />} />
                <Route path="dsa-viewer" element={<DSAViewer />} />
                <Route path="domtree-viewer" element={<DomTreeViewer />} />
                <Route path="object-graph-viewer" element={<OGRViewer />} />

                <Route path="gas-optimizer" element={<GasOptimizer />} />

                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
