import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class MusicQueue extends YTNode {
    static [ParserTypeSymbol] = 'MusicQueue';
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
    }
}
export default MusicQueue;
