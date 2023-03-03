import React from 'react';

import './index.css';

import Tool from '../tool';
import CFGViewer from '../cfg-viewer';

const Component = ({ code }) => {
    return (
        <div className="toolbox">
            <div className="row">
                <h3>Static Analysis Tool Box</h3>
            </div>
            <div className="row">
                <CFGViewer code={code} />
                <Tool code={code} name="Dummy Function" />
                <Tool code={code} name="Dummy Function" />
            </div>
            <div className="row">
                <Tool code={code} name="Dummy Function" />
                <Tool code={code} name="Dummy Function" />
                <Tool code={code} name="Dummy Function" />
            </div>
        </div>
    );
};

export default Component;
