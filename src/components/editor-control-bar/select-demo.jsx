import React from 'react';

import demoContent from './demo';

const Component = ({ setEditorValue }) => {
    return (
        <select
            className="form-select form-select-sm"
            onChange={({ target: { value } }) => {
                setEditorValue({ code: value });
            }}
        >
            <option value={process.env.REACT_APP_DEMO_CODE}>Load Demo Code</option>
            {demoContent.map(({ name, code }, index) => {
                return (
                    <option key={index} value={code}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};

export default Component;
