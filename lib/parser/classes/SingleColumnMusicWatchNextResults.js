import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class SingleColumnMusicWatchNextResults extends YTNode {
    static [ParserTypeSymbol] = 'SingleColumnMusicWatchNextResults';
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default SingleColumnMusicWatchNextResults;
