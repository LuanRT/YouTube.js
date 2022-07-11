import Text from "./Text.js";

class ThumbnailOverlayLoadingPreview {
    type = 'ThumbnailOverlayLoadingPreview';
    constructor(data) {
        this.text = new Text(data.text);
    }
}
export default ThumbnailOverlayLoadingPreview;
