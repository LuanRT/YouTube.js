export = Video;
declare class Video {
    constructor(item: any);
    type: string;
    author: Author;
    /**
     * @type {import('./MetadataBadge')[]}
     */
    badges: import('./MetadataBadge')[];
    /**
     * @type {Thumbnail[]}
     */
    thumbnails: Thumbnail[];
    /**
     * @type {import('./MovingThumbnail') | undefined}
     */
    rich_thumbnail: import('./MovingThumbnail') | undefined;
    /**
     * @type {Date | undefined}
     */
    upcoming: Date | undefined;
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {Text}
     */
    title: Text;
    /**
     * @type {string}
     */
    duration: string;
    /**
     * @type {Text}
     */
    published_at: Text;
    /**
     * @type {Text}
     */
    views: Text;
    /**
     * @type {{
     *  text: Text,
     *  hoverText: Text,
     * }[]}
     */
    snippets: {
        text: Text;
        hoverText: Text;
    }[];
    /**
     * @type {Text}
     */
    description_snippet: Text;
    /**
     * @type {Text}
     */
    short_view_count: Text;
    /**
     * @type {NavigationEndpoint}
     */
    endpoint: NavigationEndpoint;
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
import Author = require("./Author");
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
