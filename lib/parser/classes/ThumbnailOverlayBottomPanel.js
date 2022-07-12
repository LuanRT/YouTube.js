
import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayBottomPanel extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayBottomPanel';
    constructor(data) {
        super();
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayBottomPanel;
