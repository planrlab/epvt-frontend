import React from 'react';
import Editor from '@monaco-editor/react';

import EditorControlBar from '../editor-control-bar';

import './index.css';

const Component = ({ editorState }) => {
    return (
        <div className="code-editor">
            <EditorControlBar setEditorValue={editorState.setState} />
            <Editor
                defaultLanguage="sol"
                value={editorState.state.code}
                onChange={(value) => {
                    editorState.setState({ code: value });
                    console.log('THIS', value);
                }}
            />
        </div>
    );
};

export default Component;
