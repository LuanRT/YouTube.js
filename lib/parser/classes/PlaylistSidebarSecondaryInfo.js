import Parser from "../index.js";

import { YTNode } from "../helpers";

class PlaylistSidebarSecondaryInfo extends YTNode {
    static type = 'PlaylistSidebarSecondaryInfo';
    constructor(data) {
        super();
        this.owner = Parser.parse(data.videoOwner) || null;
        this.button = Parser.parse(data.button) || null;
    }
}
export default PlaylistSidebarSecondaryInfo;
