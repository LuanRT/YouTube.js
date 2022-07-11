import Text from "./Text.js";

class ThumbnailOverlayInlineUnplayable {
    type = 'ThumbnailOverlayInlineUnplayable';
    constructor(data) {
        this.text = new Text(data.text).toString();
        this.icon_type = data.icon.iconType;
    }
}
export default ThumbnailOverlayInlineUnplayable;
