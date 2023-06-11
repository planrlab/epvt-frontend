import React from 'react';
import Editor from '@monaco-editor/react';
// import { FaDownload } from 'react-icons/fa';

import StringConstants from '../../../StringConstants';

import './index.css';

const Page = () => {
    return (
        <div className="gas-optimizer row">
            <div className="col-4">
                <h2>
                    <span>SoliFMT</span> Gas Optimizer
                </h2>
            </div>
            <div className="col-8 gas-optimizer-stats">
                <p>Gas Optimized: 0000</p>
            </div>
            <div className="row gas-optimizer-pane">
                <div className="col-6 gas-optimizer-pane-div">
                    <div className="row gas-optimizer-label">
                        <p>Original Smart Contract</p>
                    </div>
                    <div className="row gas-optimizer-editor">
                        <Editor
                            defaultLanguage="sol"
                            value={localStorage.getItem(StringConstants.localStorage.CFG_SVG)}
                            options={{ readOnly: true }}
                        />
                    </div>
                </div>
                <div className="col-6 gas-optimizer-pane-div">
                    <div className="row gas-optimizer-label">
                        <p>Gas Optimized Version</p>
                    </div>
                    <div className="row gas-optimizer-editor">
                        <Editor
                            defaultLanguage="sol"
                            value={localStorage.getItem(StringConstants.localStorage.CFG_SVG)}
                            options={{ readOnly: true }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
