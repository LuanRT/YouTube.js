
import { YTNode } from "..";

class ThumbnailOverlayBottomPanel extends YTNode {
    static type = 'ThumbnailOverlayBottomPanel';
    constructor(data) {
        super();
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayBottomPanel;
