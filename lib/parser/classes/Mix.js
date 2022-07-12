import Playlist from "./Playlist.js";

import { YTNode } from "..";

class Mix extends Playlist extends YTNode {
    static type = 'Mix';
    constructor(data) {
        super();
        super(data);
    }
}
export default Mix;
