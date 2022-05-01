export = GridVideo;
declare class GridVideo {
    constructor(item: any);
    type: string;
    id: any;
    thumbnails: Thumbnail[];
    rich_thumbnail: any;
    title: Text;
    badges: any;
    duration: string | Text;
    published_at: Text;
    views: Text;
    endpoint: NavigationEndpoint;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
