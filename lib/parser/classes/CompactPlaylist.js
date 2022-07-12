import Playlist from "./Playlist.js";

import { YTNode, ParserTypeSymbol } from "..";

class CompactPlaylist extends Playlist extends YTNode {
    static [ParserTypeSymbol] = 'CompactPlaylist';
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactPlaylist;
