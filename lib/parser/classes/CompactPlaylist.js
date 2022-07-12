import Playlist from "./Playlist.js";

import { YTNode } from "..";

class CompactPlaylist extends Playlist extends YTNode {
    static type = 'CompactPlaylist';
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactPlaylist;
