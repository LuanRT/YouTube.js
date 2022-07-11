export = GridVideo;
declare class GridVideo {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: any;
    rich_thumbnail: any;
    published: Text;
    duration: string | Text;
    author: Author;
    views: Text;
    short_view_count: Text;
    endpoint: NavigationEndpoint;
    menu: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
