import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class ThumbnailOverlayLoadingPreview extends YTNode {
    static type = 'ThumbnailOverlayLoadingPreview';
    constructor(data) {
        super();
        this.text = new Text(data.text);
    }
}
export default ThumbnailOverlayLoadingPreview;
