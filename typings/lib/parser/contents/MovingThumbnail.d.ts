export = MovingThumbnail;
declare class MovingThumbnail {
    constructor(item: any);
    type: string;
    thumbnails: Thumbnail[];
}
import Thumbnail = require("./Thumbnail");
