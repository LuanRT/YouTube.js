import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class TabbedSearchResults extends YTNode {
    static [ParserTypeSymbol] = 'TabbedSearchResults';
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
    }
}
export default TabbedSearchResults;
