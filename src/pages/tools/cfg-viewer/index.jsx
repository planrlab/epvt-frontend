import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

import SVGPanZoom from '../../../components/svg-pan-zoom';

import './index.css';

const Page = () => {
    const [svg] = useState(localStorage.getItem('cfg_svg_string'));

    const downloadCFG = () => {
        const element = document.createElement('a');
        const file = new Blob([localStorage.getItem('cfg_svg_string')], { type: 'image/svg+xml' });
        element.href = URL.createObjectURL(file);
        element.download = 'control_flow_graph.svg';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };
    return (
        <div className="cfg-viewer row">
            <h2>
                <span>SoliFMT</span> CFG Viewer
            </h2>

            <button
                type="button"
                className="cfg-download-button btn btn-outline-success"
                onClick={() => downloadCFG()}
            >
                <FaDownload />
                &nbsp;Download CFG
            </button>

            <SVGPanZoom svg={svg} />
        </div>
    );
};

export default Page;
