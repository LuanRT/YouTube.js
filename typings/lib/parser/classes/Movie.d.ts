export = Movie;
declare class Movie {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    description_snippet: Text;
    top_metadata_items: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: any;
    author: Author;
    duration: {
        text: any;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
    badges: any;
    use_vertical_poster: any;
    show_action_menu: any;
    menu: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
