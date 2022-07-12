import Parser from "../index.js";

import { YTNode, ParserTypeSymbol } from "..";

class SearchSuggestionsSection extends YTNode {
    static [ParserTypeSymbol] = 'SearchSuggestionsSection';
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default SearchSuggestionsSection;
