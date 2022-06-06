export = SearchRefinementCard;
declare class SearchRefinementCard {
    constructor(data: any);
    type: string;
    thumbnail: any;
    endpoint: NavigationEndpoint;
    query: Text;
}
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
