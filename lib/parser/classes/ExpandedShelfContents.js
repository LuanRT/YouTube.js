import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class ExpandedShelfContents extends YTNode {
    static [ParserTypeSymbol] = 'ExpandedShelfContents';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default ExpandedShelfContents;
