export = GridPlaylist;
declare class GridPlaylist {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    author: PlaylistAuthor;
    badges: any;
    endpoint: NavigationEndpoint;
    thumbnails: any;
    sidebar_thumbnails: any[];
    video_count: Text;
    video_count_short_text: Text;
}
import Text = require("./Text");
import PlaylistAuthor = require("./PlaylistAuthor");
import NavigationEndpoint = require("./NavigationEndpoint");
