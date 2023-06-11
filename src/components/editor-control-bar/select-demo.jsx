import React from 'react';

import demoContent from './demo';
import StringConstants from '../../StringConstants';

const Component = ({ selectControl, setEditorValue }) => {
    const options = [
        <option key={-1} value={StringConstants.config.DEMO_CODE}>
            Load Demo Code
        </option>,
        ...demoContent.map(({ name, code }, index) => {
            return (
                <option key={index} value={code}>
                    {name}
                </option>
            );
        })
    ];

    return (
        <select
            className="form-select form-select-sm"
            value={selectControl.selectValue}
            onChange={({ target: { value } }) => {
                setEditorValue({ code: value });
                selectControl.setSelectValue(value);
            }}
        >
            {options}
        </select>
    );
};

export default Component;
