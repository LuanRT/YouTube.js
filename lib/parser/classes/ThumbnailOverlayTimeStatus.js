import Text from "./Text.js";

class ThumbnailOverlayTimeStatus {
    type = 'ThumbnailOverlayTimeStatus';
    constructor(data) {
        this.text = new Text(data.text).text;
    }
}
export default ThumbnailOverlayTimeStatus;
