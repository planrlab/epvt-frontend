import React from 'react';

const Component = ({ setEditorValue }) => {
    return (
        <input
            type="file"
            accept=".sol"
            className="form-control form-control-sm"
            onChange={async (event) => {
                event.preventDefault();
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const fileContent = e.target.result;
                    setEditorValue({ code: fileContent });
                };
                reader.readAsText(event.target.files[0]);
            }}
        />
    );
};

export default Component;
