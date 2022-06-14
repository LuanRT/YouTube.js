export = CompactVideo;
declare class CompactVideo {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    author: Author;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    duration: {
        text: any;
        seconds: number;
    };
    thumbnails: any;
    channel_thumbnails: any;
    thumbnail_overlays: any;
    endpoint: NavigationEndpoint;
    menu: any;
}
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
