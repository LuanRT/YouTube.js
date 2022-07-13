import Parser from "../index.js";

import { YTNode } from "../helpers";

class TwoColumnBrowseResults extends YTNode {
    static type = 'TwoColumnBrowseResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnBrowseResults;
