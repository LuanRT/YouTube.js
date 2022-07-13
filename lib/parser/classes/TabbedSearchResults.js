import Parser from "../index.js";

import { YTNode } from "../helpers";

class TabbedSearchResults extends YTNode {
    static type = 'TabbedSearchResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default TabbedSearchResults;
