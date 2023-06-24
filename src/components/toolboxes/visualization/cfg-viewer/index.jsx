import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import StringConstants from '../../../../StringConstants';

import './index.css';

import Tool from '../../../tool';

const Component = ({ code }) => {
    // const [CFG, setCFG] = useState('');
    // const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '' });

    // const downloadCFG = () => {
    //     const element = document.createElement('a');
    //     const file = new Blob([CFG], { type: 'image/svg+xml' });
    //     element.href = URL.createObjectURL(file);
    //     element.download = 'control_flow_graph.svg';
    //     document.body.appendChild(element); // Required for this to work in FireFox
    //     element.click();
    // };

    const setErrMessage = () => {
        if (
            alert.message === StringConstants.errors.SYNTAX_F ||
            alert.message === StringConstants.errors.SYNTAX_C
        )
            return 'Syntax Error: Could not parse .sol file.';

        if (alert.message === StringConstants.errors.POPUP)
            return 'Browser Error: Please enable Pop-up and Redirects for SoliFMT.';

        if (
            alert.message === StringConstants.errors.NETWORK_F ||
            alert.message === StringConstants.errors.NETWORK_C
        )
            return 'Network Error: Could not connect to SoliFMT Backend Services.';

        return `Unknown Error: ${alert.message}`;
    };

    return (
        <>
            <Tool
                name="Control Flow"
                spinner={spinner}
                alert={alert}
                func={() => {
                    setSpinner(true);
                    fetch(`${process.env.REACT_APP_BACKEND_URL_CFG_GEN}/cfg-svg`, {
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
                            // setShow(true);
                            // setCFG(res['svg-string']);

                            localStorage.setItem(
                                StringConstants.localStorage.CFG_SVG,
                                res['svg-string']
                            );

                            // open cfg-viewer in new window
                            const win = window.open('/cfg-viewer', '_blank');
                            win.focus();
                        })
                        .catch((err) => {
                            setSpinner(false);
                            setAlert({ show: true, message: err.message });
                        });
                }}
            />
            {/* <Modal fullscreen show={show} onHide={() => setShow(false)}>
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
            </Modal> */}
            <Modal show={alert.show} onHide={() => setAlert({ show: false })}>
                <Modal.Body>
                    <Alert key="danger" variant="danger">
                        {setErrMessage()}
                    </Alert>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Component;
