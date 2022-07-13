import SearchSuggestion from "./SearchSuggestion.js";

import { YTNode } from "../helpers";

class HistorySuggestion extends SearchSuggestion {
    static type = 'HistorySuggestion';
    constructor(data) {
                super(data);
    }
}
export default HistorySuggestion;
