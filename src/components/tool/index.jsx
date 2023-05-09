import React from 'react';
import { Spinner } from 'react-bootstrap';

import './index.css';

const Component = ({ name, func, spinner }) => {
    return (
        <div className="col-4 handler">
            <button className="btn btn-outline-primary" type="button" onClick={func}>
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
