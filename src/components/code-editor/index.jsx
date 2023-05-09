import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

import EditorControlBar from '../editor-control-bar';

import './index.css';

const Component = ({ editorState }) => {
    const editorRef = useRef(null);

    return (
        <div className="code-editor">
            <EditorControlBar setEditorValue={editorState.setState} editorRef={editorRef} />
            <Editor
                defaultLanguage="sol"
                value={editorState.state.code}
                onChange={(value) => {
                    editorState.setState({ code: value });
                }}
                onMount={(editor) => {
                    editorRef.current = editor;
                    editorState.setState({ code: process.env.REACT_APP_DEMO_CODE });
                    editor.focus();
                }}
            />
        </div>
    );
};

export default Component;
