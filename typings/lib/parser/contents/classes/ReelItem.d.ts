export = ReelItem;
declare class ReelItem {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    thumbnails: Thumbnail[];
    views: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
