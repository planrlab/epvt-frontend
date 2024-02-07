import React from 'react';

import '../index.css';

import Tool from '../../tool';
import ASTViewer from './ast-viewer';
import CFGViewer from './cfg-viewer';
import SSAViewer from './ssa-viewer';
import DSAViewer from './dsa-viewer';
import DomTreeViewer from './domtree-viewer';
import OGRViewer from './ogr-viewer';

const Component = ({ code }) => {
    return (
        <div className="toolbox">
            <div className="toolbox-header row">
                <h3>Visualization Tools</h3>
            </div>
            <div className="toolbox-tools">
                <div className="row">
                    <ASTViewer code={code} />
                    <DomTreeViewer code={code} />
                    <CFGViewer code={code} />
                </div>
                <div className="row">
                    <OGRViewer code={code} />
                    <SSAViewer code={code} />
                    <DSAViewer code={code} />
                </div>
                <div className="row">
                    <Tool code={code} name="Near-pruned SSA" dummy />
                    <Tool code={code} name="Direct DSA" dummy />
                    <Tool code={code} name="Dummy Tool" dummy />
                </div>
            </div>
        </div>
    );
};

export default Component;
