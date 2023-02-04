import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class ShowingResultsFor extends YTNode {
  static type = 'ShowingResultsFor';

  corrected_query: Text;
  endpoint: NavigationEndpoint;
  original_query_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
  }
}

export default ShowingResultsFor;