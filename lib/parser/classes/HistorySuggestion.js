import SearchSuggestion from "./SearchSuggestion.js";

class HistorySuggestion extends SearchSuggestion {
    type = 'HistorySuggestion';
    constructor(data) {
        super(data);
    }
}
export default HistorySuggestion;
