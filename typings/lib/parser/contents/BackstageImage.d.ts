export = BackstageImage;
declare class BackstageImage {
    constructor(item: any);
    type: string;
    image: Thumbnail[];
}
import Thumbnail = require("./Thumbnail");
