import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class BrowseFeedActions extends YTNode {
    static [ParserTypeSymbol] = 'BrowseFeedActions';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default BrowseFeedActions;
