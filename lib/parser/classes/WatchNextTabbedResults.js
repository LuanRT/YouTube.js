import TwoColumnBrowseResults from "./TwoColumnBrowseResults.js";

import { YTNode } from "..";

class WatchNextTabbedResults extends TwoColumnBrowseResults extends YTNode {
    static type = 'WatchNextTabbedResults';
    constructor(data) {
        super();
        super(data);
    }
}
export default WatchNextTabbedResults;
