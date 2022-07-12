import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class Endscreen extends YTNode {
    static [ParserTypeSymbol] = 'Endscreen';
    constructor(data) {
        super();
        this.elements = Parser.parse(data.elements);
        this.start_ms = data.startMs;
    }
}
export default Endscreen;
