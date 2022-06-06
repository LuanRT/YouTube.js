export = PlaylistVideo;
declare class PlaylistVideo {
    constructor(data: any);
    type: string;
    id: any;
    index: Text;
    title: Text;
    author: PlaylistAuthor;
    thumbnails: any;
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
import NavigationEndpoint = require("./NavigationEndpoint");
