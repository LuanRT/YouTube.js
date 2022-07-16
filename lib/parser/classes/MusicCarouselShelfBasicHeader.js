import Text from "./misc/Text";
import Thumbnail from "./misc/Thumbnail";

import { YTNode } from "../helpers";

class MusicCarouselShelfBasicHeader extends YTNode {
    static type = 'MusicCarouselShelfBasicHeader';
    constructor(data) {
        super();
        if (data.strapline) {
            this.strapline = new Text(data.strapline).toString();
        }
        this.title = new Text(data.title).toString();
        // This.label = data.accessibilityData.accessibilityData.label;
        // ^^ redundant?
        if (data.thumbnail) {
            this.thumbnail = Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail);
        }
    }
}
export default MusicCarouselShelfBasicHeader;
