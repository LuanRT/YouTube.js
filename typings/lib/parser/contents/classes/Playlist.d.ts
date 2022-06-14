export = Playlist;
declare class Playlist {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    author: Text | PlaylistAuthor;
    thumbnails: any;
    video_count: Text;
    video_count_short: Text;
    first_videos: any;
    share_url: any;
    menu: any;
    badges: any;
    endpoint: NavigationEndpoint;
    thumbnail_overlays: any;
}
import Text = require("./Text");
import PlaylistAuthor = require("./PlaylistAuthor");
import NavigationEndpoint = require("./NavigationEndpoint");
