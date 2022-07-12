import Playlist from "./Playlist.js";

import { YTNode, ParserTypeSymbol } from "..";

class Mix extends Playlist extends YTNode {
    static [ParserTypeSymbol] = 'Mix';
    constructor(data) {
        super();
        super(data);
    }
}
export default Mix;
