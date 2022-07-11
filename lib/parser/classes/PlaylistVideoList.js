import Parser from "../index.js";

class PlaylistVideoList {
    type = 'PlaylistVideoList';
    constructor(data) {
        this.id = data.playlistId;
        this.is_editable = data.isEditable;
        this.can_reorder = data.canReorder;
        this.videos = Parser.parse(data.contents);
    }
}
export default PlaylistVideoList;
