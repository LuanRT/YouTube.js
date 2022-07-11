export = PlaylistInfoCardContent;
declare class PlaylistInfoCardContent {
    constructor(data: any);
    type: string;
    title: Text;
    thumbnails: Thumbnail[];
    video_count: Text;
    channel_name: Text;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
