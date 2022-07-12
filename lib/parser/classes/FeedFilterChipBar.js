import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class FeedFilterChipBar extends YTNode {
    static [ParserTypeSymbol] = 'FeedFilterChipBar';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default FeedFilterChipBar;
