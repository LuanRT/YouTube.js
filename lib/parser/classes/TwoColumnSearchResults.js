import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class TwoColumnSearchResults extends YTNode {
    static [ParserTypeSymbol] = 'TwoColumnSearchResults';
    constructor(data) {
        super();
        this.primary_contents = Parser.parse(data.primaryContents);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
export default TwoColumnSearchResults;
