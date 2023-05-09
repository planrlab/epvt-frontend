import React from 'react';

import './index.css';

const Component = () => {
    return (
        <div className="footer row">
            <div className="footer-copy col-4">
                &copy; 2023,{' '}
                <a href="https://iitp.ac.in/~planrlab" target="blank">
                    Blockchain &amp; Robotics Lab, IIT Patna
                </a>
                .
            </div>
            <div className="footer-about col-4">About the Team</div>
            <div className="footer-version  col-4">SolSA Frontend v1.1</div>
        </div>
    );
};

export default Component;
