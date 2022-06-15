export = GridVideo;
declare class GridVideo {
    constructor(item: any);
    type: string;
    id: any;
    author: Author;
    thumbnails: Thumbnail[];
    rich_thumbnail: any;
    title: Text;
    badges: any;
    duration: string | Text;
    published_at: Text;
    views: Text;
    endpoint: NavigationEndpoint;
    short_view_count: Text;
    get best_thumbnail(): Thumbnail;
}
import Author = require("./Author");
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
