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
                name="Dominator Tree"
                spinner={spinner}
                alert={alert}
                func={() => {
                    setSpinner(true);
                    fetch(`${process.env.REACT_APP_BACKEND_URL_SSA_GEN}/generate`, {
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
                                StringConstants.localStorage.SSA_FILES,
                                JSON.stringify({
                                    source: res.source,
                                    dominatorTree: res.dominator_tree,
                                    cfg: res.cfg,
                                    ssaForm: res.ssa_form,
                                    dsaForm: res.dsa_form
                                })
                            );

                            // open cfg-viewer in new window
                            const win = window.open('/domtree-viewer', '_blank');
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
