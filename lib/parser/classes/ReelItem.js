import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class ReelItem extends YTNode {
    static [ParserTypeSymbol] = 'ReelItem';
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.headline, '');
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.views = new Text(data.viewCountText, '');
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default ReelItem;
