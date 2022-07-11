import Text from "./Text.js";

class ThumbnailOverlayHoverText {
    type = 'ThumbnailOverlayHoverText';
    constructor(data) {
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlayHoverText;
