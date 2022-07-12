import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class ChannelThumbnailWithLink extends YTNode {
    static #type = Symbol('ChannelThumbnailWithLink');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
    }
}
export default ChannelThumbnailWithLink;
