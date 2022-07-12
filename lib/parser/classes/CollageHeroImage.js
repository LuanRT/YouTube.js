import NavigationEndpoint from "./NavigationEndpoint.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class CollageHeroImage extends YTNode {
    static type = 'CollageHeroImage';
    constructor(data) {
        super();
        this.left = Thumbnail.fromResponse(data.leftThumbnail);
        this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
        this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default CollageHeroImage;
