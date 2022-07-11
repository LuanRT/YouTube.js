import Thumbnail from "./Thumbnail.js";

class MovingThumbnail {
    type = 'MovingThumbnail';
    constructor(data) {
        return data.movingThumbnailDetails?.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
    }
}
export default MovingThumbnail;
