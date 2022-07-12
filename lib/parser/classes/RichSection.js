import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class RichSection extends YTNode {
    static [ParserTypeSymbol] = 'RichSection';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.content);
    }
}
export default RichSection;
