import Parser from "../index.js";
import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode, ParserTypeSymbol } from "..";

class SearchBox extends YTNode {
    static [ParserTypeSymbol] = 'SearchBox';
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.search_button = Parser.parse(data.searchButton);
        this.clear_button = Parser.parse(data.clearButton);
        this.placeholder_text = new Text(data.placeholderText);
    }
}
export default SearchBox;
