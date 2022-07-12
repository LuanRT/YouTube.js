import NavigationEndpoint from "./NavigationEndpoint.js";
import Thumbnail from "./Thumbnail.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class SearchRefinementCard extends YTNode {
    static type = 'SearchRefinementCard';
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.searchEndpoint);
        this.query = new Text(data.query).toString();
    }
}
export default SearchRefinementCard;
