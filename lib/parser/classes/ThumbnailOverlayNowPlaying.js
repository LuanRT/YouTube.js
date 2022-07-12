import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayNowPlaying extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayNowPlaying';
    constructor(data) {
        super();
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayNowPlaying;
