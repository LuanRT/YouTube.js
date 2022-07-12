import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class RichGrid extends YTNode {
    static [ParserTypeSymbol] = 'RichGrid';
    constructor(data) {
        super();
        // XXX: we don't parse the masthead since it is usually an advertisement
        // XXX: reflowOptions aren't parsed, I think its only used internally for layout
        this.header = Parser.parse(data.header);
        this.contents = Parser.parse(data.contents);
    }
}
export default RichGrid;
