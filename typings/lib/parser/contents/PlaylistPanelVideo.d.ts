export = PlaylistPanelVideo;
declare class PlaylistPanelVideo {
    constructor(item: any);
    type: string;
    index: string;
    selected: any;
    duration: Text;
    author: Author;
    endpoint: NavigationEndpoint;
    thumbnails: Thumbnail[];
    title: Text;
    id: any;
    get best_thumbnail(): Thumbnail;
}
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
import Thumbnail = require("./Thumbnail");
