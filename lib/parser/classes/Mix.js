import Playlist from "./Playlist.js";

import { YTNode } from "../helpers";

class Mix extends Playlist {
    static type = 'Mix';
    constructor(data) {
        super();
        super(data);
    }
}
export default Mix;
