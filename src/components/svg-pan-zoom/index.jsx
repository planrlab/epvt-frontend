import React from 'react';
import SVG from 'react-inlinesvg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FaPlus, FaMinus, FaRegDotCircle, FaDownload } from 'react-icons/fa';

import './index.css';

const Component = ({ svg, graphName = 'graph', initialScale = 2 }) => {
    const downloadGraph = () => {
        const element = document.createElement('a');
        const file = new Blob([svg], {
            type: 'image/svg+xml'
        });
        element.href = URL.createObjectURL(file);
        element.download = `${graphName}.svg`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <TransformWrapper
            initialScale={initialScale}
            maxScale={1000}
            centerZoomedOut
            wheel={{
                step: 2
            }}
            pinch={{ step: 1 }}
        >
            {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                    <div className="pan-zoom-controls">
                        <div className="row pan-zoom-download-btn">
                            <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={() => downloadGraph()}
                            >
                                <FaDownload />
                            </button>
                        </div>

                        <div className="row">
                            <button
                                type="button"
                                className="pan-zoom-controls-button"
                                onClick={() => zoomIn(2)}
                            >
                                <FaPlus />
                            </button>
                        </div>
                        <div className="row">
                            <button
                                type="button"
                                className="pan-zoom-controls-button"
                                onClick={() => resetTransform()}
                            >
                                <FaRegDotCircle />
                            </button>
                        </div>
                        <div className="row">
                            <button
                                type="button"
                                className="pan-zoom-controls-button"
                                onClick={() => zoomOut(2)}
                            >
                                <FaMinus />
                            </button>
                        </div>
                    </div>
                    <TransformComponent>
                        <SVG src={svg} width="100%" height="100%" title="React" />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default Component;
