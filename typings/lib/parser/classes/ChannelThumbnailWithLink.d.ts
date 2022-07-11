export = ChannelThumbnailWithLink;
declare class ChannelThumbnailWithLink {
    constructor(data: any);
    type: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint;
    label: any;
}
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
