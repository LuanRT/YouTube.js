export = SearchRefinementCard;
declare class SearchRefinementCard {
    constructor(data: any);
    type: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint;
    query: any;
}
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
