import React from 'react';

import '../index.css';

import Tool from '../../tool';

const Component = ({ code }) => {
    return (
        <div className="toolbox">
            <div className="toolbox-header row">
                <h3>Static Analysis Tools</h3>
            </div>
            <div className="toolbox-tools">
                <div className="row">
                    <Tool code={code} name="Dummy Function" />
                    <Tool code={code} name="Dummy Function" />
                    <Tool code={code} name="Dummy Function" />
                </div>
                <div className="row">
                    <Tool code={code} name="Dummy Function" />
                    <Tool code={code} name="Dummy Function" />
                    <Tool code={code} name="Dummy Function" />
                </div>
            </div>
        </div>
    );
};

export default Component;
