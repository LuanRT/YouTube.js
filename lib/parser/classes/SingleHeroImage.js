import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class SingleHeroImage extends YTNode {
    static [ParserTypeSymbol] = 'SingleHeroImage';
    constructor(data) {
        super();
        this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
        this.style = data.style;
    }
}
export default SingleHeroImage;
