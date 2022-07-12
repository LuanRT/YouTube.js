import Parser from "../index.js";

import { YTNode } from "..";

class SingleColumnMusicWatchNextResults extends YTNode {
    static #type = Symbol('SingleColumnMusicWatchNextResults');
    static get type() { return this.#type }
    constructor(data) {
        super();
        return Parser.parse(data);
    }
}
export default SingleColumnMusicWatchNextResults;
