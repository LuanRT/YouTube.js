import SearchSuggestion from "./SearchSuggestion.js";

import { YTNode, ParserTypeSymbol } from "..";

class HistorySuggestion extends SearchSuggestion extends YTNode {
    static [ParserTypeSymbol] = 'HistorySuggestion';
    constructor(data) {
        super();
        super(data);
    }
}
export default HistorySuggestion;
