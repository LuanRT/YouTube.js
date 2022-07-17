import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class ContinuationItem extends YTNode {
  static type = 'ContinuationItem';
  constructor(data) {
    super();
    this.trigger = data.trigger;
    data.button &&
            (this.button = Parser.parse(data.button));
    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}
export default ContinuationItem;
