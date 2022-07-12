import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class BackstagePostThread extends YTNode {
    static [ParserTypeSymbol] = 'BackstagePostThread';
    constructor(data) {
        super();
        this.post = Parser.parse(data.post);
    }
}
export default BackstagePostThread;
