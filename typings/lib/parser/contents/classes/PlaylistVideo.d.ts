export = PlaylistVideo;
declare class PlaylistVideo {
    constructor(data: any);
    type: string;
    id: any;
    index: Text;
    title: Text;
    author: PlaylistAuthor;
    thumbnails: Thumbnail[];
    set_video_id: any;
    endpoint: NavigationEndpoint;
    is_playable: any;
    duration: {
        text: any;
        seconds: number;
    };
}
import Text = require("./Text");
import PlaylistAuthor = require("./PlaylistAuthor");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
