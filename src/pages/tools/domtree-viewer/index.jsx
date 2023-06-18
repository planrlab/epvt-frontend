import React, { useState } from 'react';

import GraphViewerPage from '../../templates/graph-viewer-page';
import StringConstants from '../../../StringConstants';

const Page = () => {
    const [svg] = useState(
        JSON.parse(localStorage.getItem(StringConstants.localStorage.SSA_FILES)).dominatorTree
    );

    return (
        <GraphViewerPage
            name="Dominator Tree"
            graph={svg}
            fileName="dominator_tree_graph"
            initialScale={2}
        />
    );
};

export default Page;
