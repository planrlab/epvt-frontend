import React from 'react';
import SVG from 'react-inlinesvg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FaDownload } from 'react-icons/fa';
import './index.css';

const Page = () => {
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

            <TransformWrapper
                initialScale={5}
                maxScale={1000}
                centerZoomedOut
                wheel={{
                    step: 2
                }}
            >
                <TransformComponent>
                    <SVG
                        src={localStorage.getItem('cfg_svg_string')}
                        width="100%"
                        height="100%"
                        title="React"
                    />
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default Page;
