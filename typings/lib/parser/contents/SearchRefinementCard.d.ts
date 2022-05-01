export = SearchRefinementCard;
declare class SearchRefinementCard {
    constructor(item: any);
    type: string;
    thumbnail: Thumbnail[];
    endpoint: NavigationEndpoint;
    query: Text;
    style: any;
}
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
import Text = require("./Text");
