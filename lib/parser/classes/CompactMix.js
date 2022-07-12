import Playlist from "./Playlist.js";

import { YTNode } from "..";

class CompactMix extends Playlist extends YTNode {
    static type = 'CompactMix';
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactMix;
