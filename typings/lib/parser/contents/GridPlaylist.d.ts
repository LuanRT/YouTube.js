export = GridPlaylist;
declare class GridPlaylist {
    constructor(item: any);
    type: string;
    id: any;
    videos: Text;
    thumbnails: Thumbnail[];
    video_thumbnails: any;
    title: Text;
    endpoint: NavigationEndpoint;
    view_playlist: NavigatableText;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
import NavigatableText = require("./NavigatableText");
