export = PlaylistVideoThumbnail;
declare class PlaylistVideoThumbnail {
    constructor(item: any);
    type: string;
    thumbnail: Thumbnail[];
}
import Thumbnail = require("./Thumbnail");
