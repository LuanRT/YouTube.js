export = Video;
declare class Video {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    description_snippet: Text;
    snippets: any;
    thumbnails: Thumbnail[];
    thumbnail_overlays: any;
    rich_thumbnail: any;
    author: Author;
    endpoint: NavigationEndpoint;
    published: Text;
    view_count_text: Text;
    short_view_count_text: Text;
    upcoming: Date;
    duration: {
        text: any;
        seconds: number;
    };
    show_action_menu: any;
    is_watched: any;
    menu: any;
    /**
     * @returns {string}
     */
    get description(): string;
    /**
     * @type {boolean}
     */
    get is_live(): boolean;
    /**
     * @type {boolean}
     */
    get is_upcoming(): boolean;
    /**
     * @type {boolean}
     */
    get has_captions(): boolean;
    /**
     * @type {Thumbnail | undefined}
     */
    get best_thumbnail(): Thumbnail;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import Author = require("./Author");
import NavigationEndpoint = require("./NavigationEndpoint");
