export = GridPlaylist;
declare class GridPlaylist {
    constructor(item: any);
    type: string;
    id: any;
    videos: Text;
    thumbnauls: Thumbnail[];
    video_thumbnails: any;
    title: Text;
    endpoint: NavigationEndpoint;
    view_playlist: Text;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
