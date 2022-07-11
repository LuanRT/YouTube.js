import Text from "./Text.js";

class ThumbnailOverlayPlaybackStatus {
    type = 'ThumbnailOverlayPlaybackStatus';
    constructor(data) {
        this.text = data.texts.map((text) => new Text(text))[0].toString();
    }
}
export default ThumbnailOverlayPlaybackStatus;
