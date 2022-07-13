import Parser from "../index.js";

import { YTNode } from "../helpers";

class SingleColumnBrowseResults extends YTNode {
    static type = 'SingleColumnBrowseResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default SingleColumnBrowseResults;
