import Playlist from "./Playlist.js";

import { YTNode } from "..";

class CompactMix extends Playlist extends YTNode {
    static #type = Symbol('CompactMix');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default CompactMix;
