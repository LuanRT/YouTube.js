import Playlist from "./Playlist";

import { YTNode } from "../helpers";

class CompactMix extends Playlist {
    static type = 'CompactMix';
    constructor(data) {
        super(data);
    }
}
export default CompactMix;
