import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Component = ({ setSelectValue, setEditorValue, editorRef }) => {
    return (
        <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
                setEditorValue({ code: process.env.REACT_APP_DEMO_CODE });
                setSelectValue('');
                editorRef.current.focus();
            }}
        >
            <FontAwesomeIcon icon={faFile} /> New File
        </button>
    );
};

export default Component;
