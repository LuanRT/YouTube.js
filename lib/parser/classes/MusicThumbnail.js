import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class MusicThumbnail extends YTNode {
    static [ParserTypeSymbol] = 'MusicThumbnail';
    constructor(data) {
        super();
        return Thumbnail.fromResponse(data.thumbnail);
    }
}
export default MusicThumbnail;
