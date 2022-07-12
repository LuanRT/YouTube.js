import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayHoverText extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayHoverText';
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayHoverText;
