import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class DidYouMean extends YTNode {
  static type = 'DidYouMean';

  corrected_query: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default DidYouMean;