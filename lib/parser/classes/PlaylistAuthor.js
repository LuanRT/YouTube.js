import Author from "./misc/Author.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistAuthor extends Author extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistAuthor';
    constructor(data) {
        super();
        super(data);
        delete this.badges;
        delete this.is_verified;
        delete this.is_verified_artist;
    }
}
export default PlaylistAuthor;
