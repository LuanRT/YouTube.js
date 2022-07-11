import Text from "./Text.js";

class ThumbnailOverlayEndorsement {
    type = 'ThumbnailOverlayEndorsement';
    constructor(data) {
        this.text = new Text(data.text).toString();
    }
}
export default ThumbnailOverlayEndorsement;
