import Parser from "../index.js";

class MusicPlaylistShelf {
    type = 'MusicPlaylistShelf';
    #continuations;
    constructor(data) {
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
