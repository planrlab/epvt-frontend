import React, { useState } from 'react';
// import { FaDownload } from 'react-icons/fa';

import SVGPanZoom from '../../../components/svg-pan-zoom';
import StringConstants from '../../../StringConstants';

import './index.css';

const Page = () => {
    const [svg] = useState(localStorage.getItem(StringConstants.localStorage.CFG_SVG));

    // const downloadCFG = () => {
    //     const element = document.createElement('a');
    //     const file = new Blob([localStorage.getItem(StringConstants.localStorage.CFG_SVG)], {
    //         type: 'image/svg+xml'
    //     });
    //     element.href = URL.createObjectURL(file);
    //     element.download = 'control_flow_graph.svg';
    //     document.body.appendChild(element); // Required for this to work in FireFox
    //     element.click();
    // };
    return (
        <div className="cfg-viewer row">
            <h2>
                <span>SoliFMT</span> CFG Viewer
            </h2>

            {/* <button
                type="button"
                className="cfg-download-button btn btn-outline-success"
                onClick={() => downloadCFG()}
            >
                <FaDownload />
                &nbsp;Download CFG
            </button> */}

            <SVGPanZoom svg={svg} graphName="control_flow_graph" initialScale={5} />
        </div>
    );
};

export default Page;
