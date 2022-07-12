import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class WatchCardSectionSequence extends YTNode {
    static [ParserTypeSymbol] = 'WatchCardSectionSequence';
    constructor(data) {
        super();
        this.lists = Parser.parse(data.lists);
    }
}
export default WatchCardSectionSequence;
