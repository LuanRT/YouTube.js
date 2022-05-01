export = Playlist;
declare class Playlist {
    constructor(item: any);
    type: string;
    id: any;
    title: Text;
    author: Author;
    thumbnails: any;
    videos: number;
    first_videos: any;
    endpoint: NavigationEndpoint;
    view_playlist: Text;
}
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
