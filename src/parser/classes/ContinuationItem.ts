import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class ContinuationItem extends YTNode {
  static type = 'ContinuationItem';

  trigger: string;
  button?;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.trigger = data.trigger;

    if (data.button) {
      this.button = Parser.parseItem(data.button);
    }

    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}

export default ContinuationItem;