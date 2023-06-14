import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
// import { FaDownload } from 'react-icons/fa';

import SVGPanZoom from '../../../components/svg-pan-zoom';

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
        <div className="ssa-viewer row">
            <div className="col-4">
                <h2>
                    <span>SoliFMT</span> SSA Viewer
                </h2>
            </div>
            <div className="row ssa-viewer-pane">
                <div className="col-5 ssa-viewer-pane-div">
                    <div className="row ssa-viewer-label">
                        <p>Original Smart Contract</p>
                    </div>
                    <div className="row ssa-viewer-editor">
                        <Editor
                            className="monaco-editor"
                            defaultLanguage="sol"
                            value={
                                JSON.parse(
                                    localStorage.getItem(StringConstants.localStorage.SSA_FILES)
                                ).source
                            }
                            options={{ readOnly: true }}
                        />
                    </div>
                </div>
                <div className="col-7 ssa-viewer-pane-div">
                    <div className="row ssa-viewer-graphs">
                        <div
                            className="col-3"
                            id="ssa-pane-0"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[0] }}
                        >
                            Dominator Tree
                        </div>
                        <div
                            className="col-3"
                            id="ssa-pane-1"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[1] }}
                        >
                            CFG
                        </div>
                        <div
                            className="col-3"
                            id="ssa-pane-2"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[2] }}
                        >
                            SSA Form
                        </div>
                        <div
                            className="col-3"
                            id="ssa-pane-3"
                            onClick={switchPane}
                            style={{ backgroundColor: paneTabs[3] }}
                        >
                            DSA Form
                        </div>
                    </div>
                    <div className="row ssa-viewer-editor">
                        <div className="col-12" style={{ display: panes[0] }}>
                            <SVGPanZoom
                                svg={
                                    JSON.parse(
                                        localStorage.getItem(StringConstants.localStorage.SSA_FILES)
                                    ).dominatorTree
                                }
                            />
                        </div>
                        <div className="col-12" style={{ display: panes[1] }}>
                            <SVGPanZoom
                                svg={
                                    JSON.parse(
                                        localStorage.getItem(StringConstants.localStorage.SSA_FILES)
                                    ).cfg
                                }
                            />
                        </div>
                        <div className="col-12" style={{ display: panes[2] }}>
                            <SVGPanZoom
                                svg={
                                    JSON.parse(
                                        localStorage.getItem(StringConstants.localStorage.SSA_FILES)
                                    ).ssaForm
                                }
                            />
                        </div>
                        <div className="col-12" style={{ display: panes[3] }}>
                            <SVGPanZoom
                                svg={
                                    JSON.parse(
                                        localStorage.getItem(StringConstants.localStorage.SSA_FILES)
                                    ).dsaForm
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
