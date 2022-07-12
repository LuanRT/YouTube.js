import SearchSuggestion from "./SearchSuggestion.js";

import { YTNode } from "..";

class HistorySuggestion extends SearchSuggestion extends YTNode {
    static #type = Symbol('HistorySuggestion');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default HistorySuggestion;
