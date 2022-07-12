import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayLoadingPreview extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayLoadingPreview';
    constructor(data) {
        super();
        this.text = new Text(data.text);
    }
}
export default ThumbnailOverlayLoadingPreview;
