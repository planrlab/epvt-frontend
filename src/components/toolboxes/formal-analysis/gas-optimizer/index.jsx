import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import StringConstants from '../../../../StringConstants';

import './index.css';

import Tool from '../../../tool';

const Component = ({ code }) => {
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '' });

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
                name="Optimize Gas"
                spinner={spinner}
                alert={alert}
                func={() => {
                    setSpinner(true);
                    fetch(`${process.env.REACT_APP_BACKEND_URL_GAS_OPT}/optimize`, {
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

                            localStorage.setItem(
                                StringConstants.localStorage.GAS_OPT_FILES,
                                JSON.stringify({
                                    source: res['original-code'],
                                    optimized: res['optimized-code'],
                                    cseOptimized: res['cse-optimized-code']
                                })
                            );

                            // open cfg-viewer in new window
                            const win = window.open('/gas-optimizer', '_blank');
                            win.focus();
                        })
                        .catch((err) => {
                            setSpinner(false);
                            setAlert({ show: true, message: err.message });
                        });
                }}
            />
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
