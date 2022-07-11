import Parser from "../index.js";
import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class VerticalWatchCardList {
    type = 'VerticalWatchCardList';
    constructor(data) {
        this.items = Parser.parse(data.items);
        this.contents = this.items; // XXX: alias for consistency
        this.view_all_text = new Text(data.viewAllText);
        this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
    }
}
export default VerticalWatchCardList;
