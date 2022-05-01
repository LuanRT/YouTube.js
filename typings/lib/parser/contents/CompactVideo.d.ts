export = CompactVideo;
declare class CompactVideo {
    constructor(item: any);
    type: string;
    id: any;
    thumbnails: Thumbnail[];
    rich_thumbnail: any;
    title: Text;
    author: Author;
    published_at: Text;
    views: Text;
    duration: Text;
    endpoint: NavigationEndpoint;
    get best_thumbnail(): Thumbnail;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
