import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class SingleColumnBrowseResults extends YTNode {
    static [ParserTypeSymbol] = 'SingleColumnBrowseResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default SingleColumnBrowseResults;
