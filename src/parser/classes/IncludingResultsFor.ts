import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class IncludingResultsFor extends YTNode {
  static type = 'IncludingResultsFor';

  including_results_for: Text;
  corrected_query: Text;
  corrected_query_endpoint: NavigationEndpoint;
  search_only_for?: Text;
  original_query?: Text;
  original_query_endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.including_results_for = new Text(data.includingResultsFor);
    this.corrected_query = new Text(data.correctedQuery);
    this.corrected_query_endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
    this.search_only_for = Reflect.has(data, 'searchOnlyFor') ? new Text(data.searchOnlyFor) : undefined;
    this.original_query = Reflect.has(data, 'originalQuery') ? new Text(data.originalQuery) : undefined;
    this.original_query_endpoint = Reflect.has(data, 'originalQueryEndpoint') ? new NavigationEndpoint(data.originalQueryEndpoint) : undefined;
  }
}
