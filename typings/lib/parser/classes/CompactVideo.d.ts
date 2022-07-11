export = CompactVideo;
declare class CompactVideo {
    constructor(data: any);
    type: string;
    id: any;
    thumbnails: Thumbnail[];
    rich_thumbnail: any;
    title: Text;
    author: Author;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    duration: {
        text: any;
        seconds: number;
    };
    thumbnail_overlays: any;
    endpoint: NavigationEndpoint;
    menu: any;
    get best_thumbnail(): Thumbnail;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
