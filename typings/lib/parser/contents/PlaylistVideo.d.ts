export = PlaylistVideo;
declare class PlaylistVideo {
    constructor(item: any);
    type: string;
    index: string;
    is_playable: any;
    duration: Text;
    endpoint: NavigationEndpoint;
    author: Author;
    thumbnails: Thumbnail[];
    title: Text;
    id: any;
    get best_thumbnail(): Thumbnail;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
import Author = require("./Author");
import Thumbnail = require("./Thumbnail");
