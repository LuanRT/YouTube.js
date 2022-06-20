export = Author;
declare class Author {
    constructor(item: any, badges: any, thumbs: any);
    id: any;
    name: any;
    thumbnails: Thumbnail[];
    endpoint: any;
    badges: any;
    is_verified: any;
    is_verified_artist: any;
    url: string;
    /**
     * @type {Thumbnail | undefined}
     */
    get best_thumbnail(): Thumbnail;
    #private;
}
import Thumbnail = require("./Thumbnail");
