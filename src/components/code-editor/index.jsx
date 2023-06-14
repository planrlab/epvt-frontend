import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

import EditorControlBar from '../editor-control-bar';
import StringConstants from '../../StringConstants';

import './index.css';

const Component = ({ editorState }) => {
    const editorRef = useRef(null);

    return (
        <div className="code-editor">
            <EditorControlBar setEditorValue={editorState.setState} editorRef={editorRef} />
            <Editor
                className="monaco-editor"
                defaultLanguage="sol"
                value={editorState.state.code}
                onChange={(value) => {
                    editorState.setState({ code: value });
                }}
                onMount={(editor) => {
                    editorRef.current = editor;
                    editorState.setState({ code: StringConstants.config.DEMO_CODE });
                    editor.focus();
                }}
            />
        </div>
    );
};

export default Component;
