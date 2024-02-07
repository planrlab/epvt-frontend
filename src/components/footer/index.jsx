import React from 'react';
import { Link } from 'react-router-dom';

import StringConstants from '../../StringConstants';

import './index.css';

// import AboutTeam from '../about-team';

const Component = () => {
    return (
        <div className="footer row">
            <div className="footer-version  col-4">
                <Link to="/">SoliFMT v{StringConstants.config.VERSION}</Link>
            </div>
            <div className="footer-about col-4">
                <Link to="about">About</Link>
            </div>
            <div className="footer-copy col-4">
                &copy;&nbsp;{new Date().getFullYear()},&nbsp;
                <a href="https://iitp.ac.in/~planrlab" target="blank">
                    PLANR Lab, IIT Patna
                </a>
                .
            </div>
        </div>
    );
};

export default Component;
