import React from 'react';

import './index.css';

import Visulization from '../toolboxes/visualization';
import FormalAnalysis from '../toolboxes/formal-analysis';
import FormalVerification from '../toolboxes/formal-verification';

const Component = ({ code }) => {
    return (
        <div className="toolkit row">
            <Visulization code={code} />
            <FormalAnalysis code={code} />
            <FormalVerification code={code} />
        </div>
    );
};

export default Component;
