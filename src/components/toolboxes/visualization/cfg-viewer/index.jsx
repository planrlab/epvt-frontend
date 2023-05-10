import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FaDownload } from 'react-icons/fa';

import './index.css';

import Tool from '../../../tool';

const Component = ({ code }) => {
    const [CFG, setCFG] = useState('');
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '' });

    const downloadCFG = () => {
        const element = document.createElement('a');
        const file = new Blob([CFG], { type: 'image/svg+xml' });
        element.href = URL.createObjectURL(file);
        element.download = 'control_flow_graph.svg';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <>
            <Tool
                name="Generate CFG"
                spinner={spinner}
                alert={alert}
                func={() => {
                    setSpinner(true);
                    fetch(`${process.env.REACT_APP_BACKEND_URL}/cfg-svg`, {
                        method: 'POST',
                        crossDomain: true,
                        body: JSON.stringify({
                            source: code
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        }
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            setSpinner(false);
                            setShow(true);
                            setCFG(res['svg-string']);
                        })
                        .catch((err) => {
                            setSpinner(false);
                            setAlert({ show: true, message: err.message });
                        });
                }}
            />
            <Modal fullscreen show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>CFG Viewer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button
                        type="button"
                        className="cfg-download-button btn btn-outline-success"
                        onClick={() => downloadCFG()}
                    >
                        <FaDownload />
                        &nbsp;Download Image
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
                            <SVG src={CFG} width="100%" height="100%" title="React" />
                        </TransformComponent>
                    </TransformWrapper>
                </Modal.Body>
            </Modal>
            <Modal show={alert.show} onHide={() => setAlert({ show: false })}>
                <Modal.Body>
                    <Alert key="danger" variant="danger">
                        {alert.message}
                    </Alert>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Component;
