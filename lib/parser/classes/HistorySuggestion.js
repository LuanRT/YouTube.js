import SearchSuggestion from "./SearchSuggestion.js";

import { YTNode } from "..";

class HistorySuggestion extends SearchSuggestion extends YTNode {
    static type = 'HistorySuggestion';
    constructor(data) {
        super();
        super(data);
    }
}
export default HistorySuggestion;
