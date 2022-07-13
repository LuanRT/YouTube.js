import Parser from "../index.js";

import { YTNode } from "../helpers";

class PlaylistSidebar extends YTNode {
    static type = 'PlaylistSidebar';
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default PlaylistSidebar;
