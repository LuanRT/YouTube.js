import SearchSuggestion from './SearchSuggestion';

class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';
  constructor(data) {
    super(data);
  }
}
export default HistorySuggestion;
