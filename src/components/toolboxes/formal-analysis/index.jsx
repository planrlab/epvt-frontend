import React from 'react';

import '../index.css';

import Tool from '../../tool';
import GasOptimizer from './gas-optimizer';

const Component = ({ code }) => {
    return (
        <div className="toolbox">
            <div className="toolbox-header row">
                <h3>Formal Analysis Tools</h3>
            </div>
            <div className="toolbox-tools">
                <div className="row">
                    <GasOptimizer code={code} />
                    <Tool code={code} name="SSA Generator" />
                    <Tool code={code} name="Dummy Tool" dummy />
                </div>
                <div className="row">
                    <Tool code={code} name="Dummy Tool" dummy />
                    <Tool code={code} name="Dummy Tool" dummy />
                    <Tool code={code} name="Dummy Tool" dummy />
                </div>
            </div>
        </div>
    );
};

export default Component;
