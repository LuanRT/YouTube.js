import type { RawNode } from '../index.ts';
import SearchSuggestion from './SearchSuggestion.ts';

export default class HistorySuggestion extends SearchSuggestion {
  static type = 'HistorySuggestion';

  constructor(data: RawNode) {
    super(data);
  }
}