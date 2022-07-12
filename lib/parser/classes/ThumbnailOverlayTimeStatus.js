import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayTimeStatus extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayTimeStatus';
    constructor(data) {
        super();
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayTimeStatus;
