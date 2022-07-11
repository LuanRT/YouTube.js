import Thumbnail from "./Thumbnail.js";

class BackstageImage {
    type = 'BackstageImage';
    constructor(data) {
        this.image = Thumbnail.fromResponse(data.image);
    }
}
export default BackstageImage;
