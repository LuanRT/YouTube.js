import NavigationEndpoint from "./NavigationEndpoint.js";
import Thumbnail from "./Thumbnail.js";
import Text from "./Text.js";

class SearchRefinementCard {
    type = 'SearchRefinementCard';
    constructor(data) {
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.searchEndpoint);
        this.query = new Text(data.query).toString();
    }
}
export default SearchRefinementCard;
