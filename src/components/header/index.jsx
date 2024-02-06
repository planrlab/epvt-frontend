import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const Component = () => {
    return (
        <div className="header">
            <h2 className="header-title">
                <Link to="">
                    <span className="title-name">SoliFMT</span>: Formal Methods Toolkit for Solidity
                </Link>
            </h2>
        </div>
    );
};

export default Component;
