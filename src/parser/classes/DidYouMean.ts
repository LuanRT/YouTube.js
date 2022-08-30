import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class DidYouMean extends YTNode {
  static type = 'DidYouMean';

  text: string;
  corrected_query: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.text = new Text(data.didYouMean).toString();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.correctedQueryEndpoint);
  }
}

export default DidYouMean;