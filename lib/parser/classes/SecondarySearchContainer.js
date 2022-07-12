import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class SecondarySearchContainer extends YTNode {
    static [ParserTypeSymbol] = 'SecondarySearchContainer';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default SecondarySearchContainer;
