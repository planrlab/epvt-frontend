import React, { useState } from 'react';

import GraphViewerPage from '../../templates/graph-viewer-page';
import StringConstants from '../../../StringConstants';

const Page = () => {
    const [svg] = useState(localStorage.getItem(StringConstants.localStorage.AST_SVG));

    return <GraphViewerPage name="Abstract Syntax Tree" graph={svg} fileName="ast_graph" />;
};

export default Page;
