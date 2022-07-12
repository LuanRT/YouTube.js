import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistSidebarSecondaryInfo extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistSidebarSecondaryInfo';
    constructor(data) {
        super();
        this.owner = Parser.parse(data.videoOwner) || null;
        this.button = Parser.parse(data.button) || null;
    }
}
export default PlaylistSidebarSecondaryInfo;
