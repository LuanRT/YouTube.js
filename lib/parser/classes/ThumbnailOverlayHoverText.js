import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class ThumbnailOverlayHoverText extends YTNode {
    static type = 'ThumbnailOverlayHoverText';
    constructor(data) {
        super();
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayHoverText;
