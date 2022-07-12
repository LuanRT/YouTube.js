import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class MusicPlaylistShelf extends YTNode {
    static [ParserTypeSymbol] = 'MusicPlaylistShelf';
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
