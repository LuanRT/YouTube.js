import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class ChannelThumbnailWithLink {
    type = 'ChannelThumbnailWithLink';
    constructor(data) {
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
    }
}
export default ChannelThumbnailWithLink;
