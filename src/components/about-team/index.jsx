import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import './index.css';

import AboutSoliMNT from './about-solimnt';
import Team from './team';

const Component = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button type="button" className="about-team-button" onClick={() => setShow(true)}>
                About the Team
            </button>
            <Modal fullscreen show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>About SoliFMT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AboutSoliMNT />
                    <Team />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Component;
