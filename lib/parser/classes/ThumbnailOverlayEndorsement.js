import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayEndorsement extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayEndorsement';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default ThumbnailOverlayEndorsement;
