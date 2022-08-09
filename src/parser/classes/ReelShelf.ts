import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class ReelShelf extends YTNode {
  static type = 'ReelShelf';

  title: Text;
  items;
  endpoint: NavigationEndpoint | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ReelShelf;