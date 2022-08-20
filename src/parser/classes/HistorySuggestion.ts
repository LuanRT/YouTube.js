import SearchSuggestion from './SearchSuggestion';

class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';

  constructor(data: any) {
    super(data);
  }
}

export default HistorySuggestion;