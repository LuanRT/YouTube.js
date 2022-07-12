import Parser from "../index.js";

import { YTNode } from "..";

class MusicPlaylistShelf extends YTNode {
    static #type = Symbol('MusicPlaylistShelf');
    static get type() { return this.#type }
    #continuations;
    constructor(data) {
        super();
        this.playlist_id = data.playlistId;
        this.contents = Parser.parse(data.contents);
        this.collapsed_item_count = data.collapsedItemCount;
        this.#continuations = data.continuations;
    }
    get continuation() {
        return this.#continuations?.[0]?.nextContinuationData;
    }
}
export default MusicPlaylistShelf;
