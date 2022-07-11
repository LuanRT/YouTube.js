import Thumbnail from "./Thumbnail.js";

class MusicThumbnail {
    type = 'MusicThumbnail';
    constructor(data) {
        return Thumbnail.fromResponse(data.thumbnail);
    }
}
export default MusicThumbnail;
