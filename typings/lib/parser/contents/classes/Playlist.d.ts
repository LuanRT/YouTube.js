export = Playlist;
declare class Playlist {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    author: Text | PlaylistAuthor;
    badges: any;
    endpoint: NavigationEndpoint;
    thumbnail: {
        thumbnails: any;
        sampled_thumbnail_color: any;
    };
    video_count: Text;
    video_count_short_text: Text;
    first_videos: any;
}
import Text = require("./Text");
import PlaylistAuthor = require("./PlaylistAuthor");
import NavigationEndpoint = require("./NavigationEndpoint");
