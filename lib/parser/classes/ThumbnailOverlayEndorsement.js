import Text from "./misc/Text.js";

import { YTNode } from "..";

class ThumbnailOverlayEndorsement extends YTNode {
    static type = 'ThumbnailOverlayEndorsement';
    constructor(data) {
        super();
        this.text = new Text(data.text).toString();
    }
}
export default ThumbnailOverlayEndorsement;
