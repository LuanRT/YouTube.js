import Playlist from "./Playlist.js";

import { YTNode } from "..";

class CompactPlaylist extends Playlist extends YTNode {
    static #type = Symbol('CompactPlaylist');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactPlaylist;
