export = Video;
declare class Video {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    description: Text;
    snippets: any;
    thumbnails: any;
    thumbnail_overlays: any;
    moving_thumbnails: any;
    channel_thumbnail: any;
    author: Author;
    endpoint: NavigationEndpoint;
    published: Text;
    view_count_text: Text;
    short_view_count_text: Text;
    duration: {
        text: any;
        seconds: number;
    };
    show_action_menu: any;
    is_watched: any;
    menu: any;
}
import Text = require("./Text");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
