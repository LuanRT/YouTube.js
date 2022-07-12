import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class BackstageImage extends YTNode {
    static [ParserTypeSymbol] = 'BackstageImage';
    constructor(data) {
        super();
        this.image = Thumbnail.fromResponse(data.image);
    }
}
export default BackstageImage;
