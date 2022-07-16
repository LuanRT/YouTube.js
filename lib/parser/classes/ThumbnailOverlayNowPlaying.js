import Text from "./misc/Text";

import { YTNode } from "../helpers";

class ThumbnailOverlayNowPlaying extends YTNode {
    static type = 'ThumbnailOverlayNowPlaying';
    constructor(data) {
        super();
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayNowPlaying;
