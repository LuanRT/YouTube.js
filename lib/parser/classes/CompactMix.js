import Playlist from "./Playlist.js";

import { YTNode, ParserTypeSymbol } from "..";

class CompactMix extends Playlist extends YTNode {
    static [ParserTypeSymbol] = 'CompactMix';
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactMix;
