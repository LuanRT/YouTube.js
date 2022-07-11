import Thumbnail from "./Thumbnail.js";

class PlaylistVideoThumbnail {
    type = 'PlaylistVideoThumbnail';
    constructor(data) {
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    }
}
export default PlaylistVideoThumbnail;
