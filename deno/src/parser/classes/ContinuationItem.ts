import Parser from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

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