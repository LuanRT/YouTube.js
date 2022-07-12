import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistSidebar extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistSidebar';
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
