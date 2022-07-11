export = EndScreenVideo;
declare class EndScreenVideo {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: any;
    author: Author;
    endpoint: NavigationEndpoint;
    short_view_count_text: Text;
    badges: any;
    duration: {
        text: any;
        seconds: any;
    };
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
