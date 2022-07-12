import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayPlaybackStatus extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayPlaybackStatus';
    constructor(data) {
        super();
        this.text = data.texts.map((text) => new Text(text))[0].toString();
    }
}
export default ThumbnailOverlayPlaybackStatus;
