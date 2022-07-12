import Parser from "../index.js";

import { YTNode } from "..";

class PlaylistVideoList extends YTNode {
    static #type = Symbol('PlaylistVideoList');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.is_editable = data.isEditable;
        this.can_reorder = data.canReorder;
        this.videos = Parser.parse(data.contents);
    }
}
export default PlaylistVideoList;
