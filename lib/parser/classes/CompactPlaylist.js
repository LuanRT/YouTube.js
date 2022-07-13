import Playlist from "./Playlist.js";

import { YTNode } from "../helpers";

class CompactPlaylist extends Playlist {
    static type = 'CompactPlaylist';
    constructor(data) {
                super(data);
    }
}
export default CompactPlaylist;
