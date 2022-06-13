export = SearchRefinementCard;
declare class SearchRefinementCard {
    constructor(data: any);
    type: string;
    thumbnails: any;
    endpoint: NavigationEndpoint;
    query: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
