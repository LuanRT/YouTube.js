import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ReelShelf extends YTNode {
  static type = 'ReelShelf';

  title: Text;
  items;
  endpoint: NavigationEndpoint | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parseArray(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ReelShelf;