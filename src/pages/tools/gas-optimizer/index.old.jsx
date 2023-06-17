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
                <p>
                    Gas Optimized:{' '}
                    {
                        JSON.parse(localStorage.getItem(StringConstants.localStorage.GAS_OPT_CODE))
                            .gas
                    }
                </p>
            </div>
            <div className="row gas-optimizer-pane">
                <div className="col-6 gas-optimizer-pane-div">
                    <div className="row gas-optimizer-label">
                        <p>Original Smart Contract</p>
                    </div>
                    <div className="row gas-optimizer-editor">
                        <Editor
                            className="monaco-editor"
                            defaultLanguage="sol"
                            value={
                                JSON.parse(
                                    localStorage.getItem(StringConstants.localStorage.GAS_OPT_CODE)
                                ).original
                            }
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
                            className="monaco-editor"
                            defaultLanguage="sol"
                            value={
                                JSON.parse(
                                    localStorage.getItem(StringConstants.localStorage.GAS_OPT_CODE)
                                ).optimized
                            }
                            options={{ readOnly: true }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
