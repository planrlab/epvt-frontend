import React, { useState } from 'react';

import GraphViewerPage from '../../templates/graph-viewer-page';
import StringConstants from '../../../StringConstants';

const Page = () => {
    const [svg] = useState(localStorage.getItem(StringConstants.localStorage.CFG_SVG));

    return <GraphViewerPage name="CFG" graph={svg} fileName="cfg_graph" />;
};

export default Page;
