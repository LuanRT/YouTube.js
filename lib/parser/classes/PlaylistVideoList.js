import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistVideoList extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistVideoList';
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.is_editable = data.isEditable;
        this.can_reorder = data.canReorder;
        this.videos = Parser.parse(data.contents);
    }
}
export default PlaylistVideoList;
