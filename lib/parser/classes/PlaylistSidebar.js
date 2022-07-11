import Parser from "../index.js";

class PlaylistSidebar {
    type = 'PlaylistSidebar';
    constructor(data) {
        this.items = Parser.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
export default PlaylistSidebar;
