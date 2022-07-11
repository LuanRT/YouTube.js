import Text from "./Text.js";

class ThumbnailOverlaySidePanel {
    type = 'ThumbnailOverlaySidePanel';
    constructor(data) {
        this.text = new Text(data.text);
        this.type = data.icon.iconType;
    }
}
export default ThumbnailOverlaySidePanel;
