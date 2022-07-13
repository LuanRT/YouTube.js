import Parser from "../index.js";

import { YTNode } from "../helpers";

class TwoColumnSearchResults extends YTNode {
    static type = 'TwoColumnSearchResults';
    constructor(data) {
        super();
        this.primary_contents = Parser.parse(data.primaryContents);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnSearchResults;
