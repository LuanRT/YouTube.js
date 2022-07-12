import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayInlineUnplayable extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayInlineUnplayable';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
    }
}
export default ThumbnailOverlayInlineUnplayable;
