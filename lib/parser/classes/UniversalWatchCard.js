import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class UniversalWatchCard extends YTNode {
    static [ParserTypeSymbol] = 'UniversalWatchCard';
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        this.call_to_action = Parser.parse(data.callToAction);
        this.sections = Parser.parse(data.sections);
    }
}
export default UniversalWatchCard;
