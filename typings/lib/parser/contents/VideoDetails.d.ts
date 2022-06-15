export = VideoDetails;
declare class VideoDetails {
    constructor(item: any);
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {string}
     */
    channel_id: string;
    /**
     * @type {string}
     */
    title: string;
    /**
     * @type {string[]}
     */
    keywords: string[];
    /**
     * @type {string}
     */
    short_description: string;
    /**
     * @type {string}
     */
    author: string;
    duration: number;
    is_owner_viewing: boolean;
    thumbnail: Thumbnail[];
    allow_ratings: boolean;
    view_count: number;
    is_private: boolean;
    is_live_content: boolean;
    is_crawlable: boolean;
}
import Thumbnail = require("./Thumbnail");
