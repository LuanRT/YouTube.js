import Parser from "../index.js";

import { YTNode } from "..";

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
