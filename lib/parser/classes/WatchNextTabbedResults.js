import TwoColumnBrowseResults from "./TwoColumnBrowseResults.js";

import { YTNode, ParserTypeSymbol } from "..";

class WatchNextTabbedResults extends TwoColumnBrowseResults extends YTNode {
    static [ParserTypeSymbol] = 'WatchNextTabbedResults';
    constructor(data) {
        super();
        super(data);
    }
}
export default WatchNextTabbedResults;
