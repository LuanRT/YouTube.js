import Parser from "../index.js";
import Text from "./Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

class SearchBox {
    type = 'SearchBox';
    constructor(data) {
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.search_button = Parser.parse(data.searchButton);
        this.clear_button = Parser.parse(data.clearButton);
        this.placeholder_text = new Text(data.placeholderText);
    }
}
export default SearchBox;
