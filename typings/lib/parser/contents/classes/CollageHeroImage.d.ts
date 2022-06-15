export = CollageHeroImage;
declare class CollageHeroImage {
    constructor(data: any);
    type: string;
    left: Thumbnail[];
    top_right: Thumbnail[];
    bottom_right: Thumbnail[];
    endpoint: NavigationEndpoint;
}
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
