import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChannelThumbnailWithLink extends YTNode {
    static [ParserTypeSymbol] = 'ChannelThumbnailWithLink';
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
    }
}
export default ChannelThumbnailWithLink;
