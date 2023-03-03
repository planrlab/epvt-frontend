import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

import './index.css';
import defaultContent from './demo';

import ToolBox from '../../components/toolbox';

const Page = () => {
    const [editorValue, setEditorValue] = useState({ code: defaultContent });

    return (
        <div className="home row">
            <div className="col-lg-6">
                <Editor
                    defaultLanguage="sol"
                    value={editorValue.code}
                    onChange={(value) => {
                        setEditorValue({ code: value });
                    }}
                />
            </div>
            <div className="col-lg-6">
                <ToolBox code={editorValue.code} />
            </div>
        </div>
    );
};

export default Page;
