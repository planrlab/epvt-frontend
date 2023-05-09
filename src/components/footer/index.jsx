import React from 'react';

import './index.css';

import AboutTeam from '../about-team';

const Component = () => {
    return (
        <div className="footer row">
            <div className="footer-copy col-4">
                &copy;&nbsp;{new Date().getFullYear()},&nbsp;
                <a href="https://iitp.ac.in/~planrlab" target="blank">
                    Blockchain &amp; Robotics Lab, IIT Patna
                </a>
                .
            </div>
            <div className="footer-about col-4">
                <AboutTeam />
            </div>
            <div className="footer-version  col-4">
                SoliFMT Frontend version {process.env.REACT_APP_VERSION}
            </div>
        </div>
    );
};

export default Component;
