import React from 'react';

import './index.css';

import Visulization from '../toolboxes/visualization';
import StaticAnalysis from '../toolboxes/static-analysis';
import FormalAnalysis from '../toolboxes/formal-analysis';

const Component = ({ code }) => {
    return (
        <div className="toolkit row">
            <Visulization code={code} />
            <StaticAnalysis code={code} />
            <FormalAnalysis code={code} />
        </div>
    );
};

export default Component;
