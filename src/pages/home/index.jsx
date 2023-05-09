import React, { useState } from 'react';

import './index.css';

import CodeEditor from '../../components/code-editor';
import ToolKit from '../../components/toolkit';

const Page = () => {
    const [editor, setEditor] = useState({ code: process.env.REACT_APP_DEMO_CODE });

    return (
        <div className="home row">
            <div className="left-pane col-lg-6">
                <CodeEditor editorState={{ state: editor, setState: setEditor }} />
            </div>
            <div className="right-pane col-lg-6">
                <ToolKit code={editor.code} />
            </div>
        </div>
    );
};

export default Page;
