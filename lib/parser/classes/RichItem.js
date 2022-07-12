import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class RichItem extends YTNode {
    static [ParserTypeSymbol] = 'RichItem';
    constructor(data) {
        super();
        return Parser.parse(data.content);
    }
}
export default RichItem;
