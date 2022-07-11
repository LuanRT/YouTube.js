export = BackstageImage;
declare class BackstageImage {
    constructor(data: any);
    type: string;
    image: Thumbnail[];
}
import Thumbnail = require("./Thumbnail");
