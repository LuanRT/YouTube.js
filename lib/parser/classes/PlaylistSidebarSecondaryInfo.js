import Parser from "../index.js";

class PlaylistSidebarSecondaryInfo {
    type = 'PlaylistSidebarSecondaryInfo';
    constructor(data) {
        this.owner = Parser.parse(data.videoOwner) || null;
        this.button = Parser.parse(data.button) || null;
    }
}
export default PlaylistSidebarSecondaryInfo;
