import SearchSuggestion from './SearchSuggestion.js';

class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';

  constructor(data: any) {
    super(data);
  }
}

export default HistorySuggestion;