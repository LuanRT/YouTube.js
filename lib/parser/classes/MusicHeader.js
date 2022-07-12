import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class MusicHeader extends YTNode {
    static [ParserTypeSymbol] = 'MusicHeader';
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
    }
}
export default MusicHeader;
