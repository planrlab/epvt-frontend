import React from 'react';
import SVG from 'react-inlinesvg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FaPlus, FaMinus, FaRegDotCircle } from 'react-icons/fa';

import './index.css';

const Component = ({ svg }) => {
    return (
        <TransformWrapper
            initialScale={5}
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
                        <div className="row">
                            <button type="button" onClick={() => zoomIn(2)}>
                                <FaPlus />
                            </button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => resetTransform()}>
                                <FaRegDotCircle />
                            </button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => zoomOut(2)}>
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
