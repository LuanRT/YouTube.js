import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class TwoColumnBrowseResults extends YTNode {
    static [ParserTypeSymbol] = 'TwoColumnBrowseResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnBrowseResults;
