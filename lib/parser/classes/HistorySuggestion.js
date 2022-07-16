import SearchSuggestion from "./SearchSuggestion";

import { YTNode } from "../helpers";

class HistorySuggestion extends SearchSuggestion {
    static type = 'HistorySuggestion';
    constructor(data) {
                super(data);
    }
}
export default HistorySuggestion;
