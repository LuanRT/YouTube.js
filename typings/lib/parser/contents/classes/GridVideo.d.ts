export = GridVideo;
declare class GridVideo {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    thumbnails: any;
    thumbnail_overlays: any;
    published: Text;
    duration: string | Text;
    author: Author;
    views: Text;
    short_view_count: Text;
    endpoint: NavigationEndpoint;
    menu: any;
}
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
