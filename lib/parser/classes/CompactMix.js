import Playlist from "./Playlist.js";

import { YTNode } from "../helpers";

class CompactMix extends Playlist {
    static type = 'CompactMix';
    constructor(data) {
        super(data);
    }
}
export default CompactMix;
