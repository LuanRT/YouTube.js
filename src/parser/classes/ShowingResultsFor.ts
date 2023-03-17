import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ShowingResultsFor extends YTNode {
  static type = 'ShowingResultsFor';

  corrected_query: Text;
  original_query: Text;
  corrected_query_endpoint: NavigationEndpoint;
  original_query_endpoint: NavigationEndpoint;
  search_instead_for: Text;
  showing_results_for: Text;

  constructor(data: RawNode) {
    super();
    this.corrected_query = new Text(data.correctedQuery);
    this.original_query = new Text(data.originalQuery);
    this.corrected_query_endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
    this.search_instead_for = new Text(data.searchInsteadFor);
    this.showing_results_for = new Text(data.showingResultsFor);
  }
}