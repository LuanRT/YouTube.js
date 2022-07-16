import Parser from "../index";
import Text from "./misc/Text";
import NavigationEndpoint from "./NavigationEndpoint";

import { YTNode } from "../helpers";

class SearchBox extends YTNode {
    static type = 'SearchBox';
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.search_button = Parser.parse(data.searchButton);
        this.clear_button = Parser.parse(data.clearButton);
        this.placeholder_text = new Text(data.placeholderText);
    }
}
export default SearchBox;
