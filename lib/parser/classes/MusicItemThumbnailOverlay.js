import Parser from "../index";

import { YTNode } from "../helpers";

class MusicItemThumbnailOverlay extends YTNode {
    static type = 'MusicItemThumbnailOverlay';
    constructor(data) {
        super();
        this.content = Parser.parse(data.content);
        this.content_position = data.contentPosition;
        this.display_style = data.displayStyle;
    }
}
export default MusicItemThumbnailOverlay;
