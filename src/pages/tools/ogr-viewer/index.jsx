import React, { useState } from 'react';

import GraphViewerPage from '../../templates/graph-viewer-page';
import StringConstants from '../../../StringConstants';

const Page = () => {
    const [svg] = useState(
        JSON.parse(localStorage.getItem(StringConstants.localStorage.OGR_FILES)).ogrGraph
    );

    return (
        <GraphViewerPage name="Object Graph" graph={svg} fileName="object_graph" initialScale={2} />
    );
};

export default Page;
