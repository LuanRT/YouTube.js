import Playlist from "./Playlist.js";

import { YTNode } from "..";

class Mix extends Playlist extends YTNode {
    static #type = Symbol('Mix');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default Mix;
