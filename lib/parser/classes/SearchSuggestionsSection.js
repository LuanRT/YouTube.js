import Parser from "../index.js";

class SearchSuggestionsSection {
    type = 'SearchSuggestionsSection';
    constructor(data) {
        this.contents = Parser.parse(data.contents);
    }
}
export default SearchSuggestionsSection;
