import React, { useState, useEffect } from 'react';
import SplitPane, { Pane } from 'split-pane-react';

import 'split-pane-react/esm/themes/default.css';
import './index.css';

import Header from '../../components/header';

import CodeEditor from '../../components/code-editor';
import ToolKit from '../../components/toolkit';
import StringConstants from '../../StringConstants';

const Page = () => {
    const [editor, setEditor] = useState({ code: '' });

    useEffect(() => {
        setEditor(StringConstants.config.DEMO_CODE);
    }, []);

    const [sizes, setSizes] = useState(['55%']);

    // const layoutCSS = {
    //     height: '100%',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // };

    return (
        <div className="row">
            <Header />
            <div className="home row">
                <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
                    <Pane minSize={50} maxSize="70%">
                        <div className="left-pane">
                            <CodeEditor editorState={{ state: editor, setState: setEditor }} />
                        </div>
                    </Pane>
                    <Pane minSize={30} maxSize="50%">
                        <div className="right-pane">
                            <ToolKit code={editor.code} />
                        </div>
                    </Pane>
                </SplitPane>
            </div>
        </div>
    );
};

export default Page;
