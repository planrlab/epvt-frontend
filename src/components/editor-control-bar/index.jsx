import React, { useState } from 'react';

import NewFile from './new-file';
import SelectDemo from './select-demo';
import UploadFile from './upload-file';

import './index.css';

const Component = ({ setEditorValue, editorRef }) => {
    const [selectValue, setSelectValue] = useState('');
    return (
        <div className="editor-control-bar row">
            <div className="control-button col-3">
                <NewFile
                    setSelectValue={setSelectValue}
                    setEditorValue={setEditorValue}
                    editorRef={editorRef}
                />
            </div>
            <div className="control-button col-3">
                <SelectDemo
                    selectControl={{ selectValue, setSelectValue }}
                    setEditorValue={setEditorValue}
                />
            </div>
            <div className="control-button col-6">
                <UploadFile setEditorValue={setEditorValue} />
            </div>
        </div>
    );
};

export default Component;
