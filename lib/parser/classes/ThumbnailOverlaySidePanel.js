import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlaySidePanel extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlaySidePanel';
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlaySidePanel;
