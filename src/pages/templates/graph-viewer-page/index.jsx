import React from 'react';

import SVGPanZoom from '../../../components/svg-pan-zoom';

import './index.css';

const Page = ({ name, graph, fileName, initialScale = 5 }) => {
    return (
        <div className="graph-viewer-page row">
            <h2>
                <span>SoliFMT</span> {name} Viewer
            </h2>

            <SVGPanZoom svg={graph} graphName={fileName} initialScale={initialScale} />
        </div>
    );
};

export default Page;
