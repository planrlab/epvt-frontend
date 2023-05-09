import React from 'react';

import NewFile from './new-file';
import SelectDemo from './select-demo';
import UploadFile from './upload-file';

import './index.css';

const Component = ({ setEditorValue }) => {
    return (
        <div className="editor-control-bar row">
            <div className="control-button col-3">
                <NewFile setEditorValue={setEditorValue} />
            </div>
            <div className="control-button col-3">
                <SelectDemo setEditorValue={setEditorValue} />
            </div>
            <div className="control-button col-6">
                <UploadFile setEditorValue={setEditorValue} />
            </div>
        </div>
    );
};

export default Component;
