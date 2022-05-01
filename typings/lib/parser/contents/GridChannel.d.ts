export = GridChannel;
declare class GridChannel {
    constructor(item: any);
    type: string;
    id: any;
    thumbnails: Thumbnail[];
    videos: Text;
    subscribers: Text;
    name: Text;
    endpoint: NavigationEndpoint;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
