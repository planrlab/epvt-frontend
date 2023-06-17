import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
// import { FaDownload } from 'react-icons/fa';

// import SVGPanZoom from '../../../components/svg-pan-zoom';

import StringConstants from '../../../StringConstants';

import './index.css';

const Page = () => {
    const [panes, setPanes] = useState(['block', 'none', 'none', 'none']);
    const [paneTabs, setPaneTabs] = useState([
        StringConstants.colors.BG_HIGHLIGHT,
        '#fff',
        '#fff',
        '#fff'
    ]);

    const switchPane = ({ target: { id } }) => {
        const index = parseInt(id.replace('ssa-pane-', ''), 10);

        const newPaneConfig = ['none', 'none', 'none', 'none'];
        newPaneConfig[index] = 'block';
        setPanes(newPaneConfig);

        const newPaneTabConfig = ['#fff', '#fff', '#fff', '#fff'];
        newPaneTabConfig[index] = StringConstants.colors.BG_HIGHLIGHT;
        setPaneTabs(newPaneTabConfig);
    };

    return (
        <div className="opt-viewer row">
            <div className="col-4">
                <h2>
                    <span>SoliFMT</span> Gas Optimization
                </h2>
            </div>
            <div className="row opt-viewer-pane">
                <div className="col-6 opt-viewer-pane-div">
                    <div className="row opt-viewer-label">
                        <p>Original Smart Contract</p>
                    </div>
                    <div className="row opt-viewer-editor">
                        <Editor
                            className="monaco-editor"
                            defaultLanguage="sol"
                            value={
                                JSON.parse(
                                    localStorage.getItem(StringConstants.localStorage.GAS_OPT_FILES)
                                ).source
                            }
                            options={{ readOnly: true }}
                        />
                    </div>
                </div>
                <div className="col-6 opt-viewer-pane-div">
                    <div className="row opt-viewer-graphs">
                        <div
                            className="col-6 bttn-with-border"
                            id="ssa-pane-0"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[0] }}
                        >
                            Optimized Code
                        </div>
                        <div
                            className="col-6 bttn-with-border"
                            id="ssa-pane-1"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[1] }}
                        >
                            CSE Optimized
                        </div>
                    </div>
                    <div className="row opt-viewer-editor">
                        <div
                            className="col-12 opt-viewer-graph-panes"
                            style={{ display: panes[0] }}
                        >
                            <Editor
                                className="monaco-editor"
                                defaultLanguage="sol"
                                value={
                                    JSON.parse(
                                        localStorage.getItem(
                                            StringConstants.localStorage.GAS_OPT_FILES
                                        )
                                    ).optimized
                                }
                                options={{ readOnly: true }}
                            />
                        </div>
                        <div
                            className="col-12 opt-viewer-graph-panes"
                            style={{ display: panes[1] }}
                        >
                            <Editor
                                className="monaco-editor"
                                defaultLanguage="sol"
                                value={
                                    JSON.parse(
                                        localStorage.getItem(
                                            StringConstants.localStorage.GAS_OPT_FILES
                                        )
                                    ).cseOptimized
                                }
                                options={{ readOnly: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
