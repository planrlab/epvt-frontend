import React from 'react';
import { Spinner } from 'react-bootstrap';

import './index.css';

const Component = ({ name, func, spinner, dummy = false }) => {
    return (
        <div className="col-4 handler">
            <button
                className="btn btn-outline-primary"
                type="button"
                onClick={func}
                style={dummy ? { opacity: '0.2' } : {}}
            >
                {spinner && (
                    <>
                        <Spinner as="span" animation="border" size="sm" role="status" />
                        &nbsp;
                    </>
                )}
                {name}
            </button>
        </div>
    );
};

export default Component;
