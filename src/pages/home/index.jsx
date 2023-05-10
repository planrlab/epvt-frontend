import React, { useState, useEffect } from 'react';

import './index.css';

import Header from '../../components/header';

import CodeEditor from '../../components/code-editor';
import ToolKit from '../../components/toolkit';

const Page = () => {
    const [editor, setEditor] = useState({ code: '' });

    useEffect(() => {
        setEditor(process.env.REACT_APP_DEMO_CODE);
    }, []);

    return (
        <div className="home row">
            <Header />
            <div className="left-pane col-lg-7">
                <CodeEditor editorState={{ state: editor, setState: setEditor }} />
            </div>
            <div className="right-pane col-lg-5">
                <ToolKit code={editor.code} />
            </div>
        </div>
    );
};

export default Page;
