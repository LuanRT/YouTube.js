import TwoColumnBrowseResults from "./TwoColumnBrowseResults.js";

import { YTNode } from "..";

class WatchNextTabbedResults extends TwoColumnBrowseResults extends YTNode {
    static #type = Symbol('WatchNextTabbedResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default WatchNextTabbedResults;
