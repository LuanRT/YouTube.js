import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class Tabbed extends YTNode {
    static [ParserTypeSymbol] = 'Tabbed';
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default Tabbed;
