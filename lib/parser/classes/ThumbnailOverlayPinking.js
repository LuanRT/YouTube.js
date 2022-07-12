
import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayPinking extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayPinking';
    constructor(data) {
        super();
        this.hack = data.hack;
    }
}
export default ThumbnailOverlayPinking;
