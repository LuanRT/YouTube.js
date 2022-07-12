import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class RelatedChipCloud extends YTNode {
    static [ParserTypeSymbol] = 'RelatedChipCloud';
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default RelatedChipCloud;
