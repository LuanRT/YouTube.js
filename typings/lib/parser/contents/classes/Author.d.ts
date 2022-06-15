export = Author;
declare class Author {
    constructor(item: any, badges: any, thumbs: any);
    /**
     * @type {import('./MetadataBadge')[]}
     */
    badges: import('./MetadataBadge')[];
    /**
     * @type {Thumbnail[]}
     */
    thumbnails: Thumbnail[];
    get url(): any;
    set name(arg: any);
    get name(): any;
    get endpoint(): import("./NavigationEndpoint");
    get id(): any;
    /**
     * @type {boolean}
     */
    get is_verified(): boolean;
    /**
     * @type {boolean}
     */
    get is_verified_artist(): boolean;
    /**
     * @type {Thumbnail | undefined}
     */
    get best_thumbnail(): Thumbnail;
    #private;
}
import Thumbnail = require("./Thumbnail");
