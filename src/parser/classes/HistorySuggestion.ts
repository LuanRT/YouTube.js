import type { RawNode } from '../index.js';
import SearchSuggestion from './SearchSuggestion.js';

export default class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';

  constructor(data: RawNode) {
    super(data);
  }
}