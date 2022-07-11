export = PlaylistVideoThumbnail;
declare class PlaylistVideoThumbnail {
    constructor(data: any);
    type: string;
    thumbnail: Thumbnail[];
}
import Thumbnail = require("./Thumbnail");
