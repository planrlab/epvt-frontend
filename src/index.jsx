import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </CookiesProvider>
);
