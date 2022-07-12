import Parser from "../index.js";

import { YTNode } from "..";

class SearchSuggestionsSection extends YTNode {
    static #type = Symbol('SearchSuggestionsSection');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.contents = Parser.parse(data.contents);
    }
}
export default SearchSuggestionsSection;
