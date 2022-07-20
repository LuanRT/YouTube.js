import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class VerticalWatchCardList extends YTNode {
  static type = 'VerticalWatchCardList';
  constructor(data) {
    super();
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }
}
export default VerticalWatchCardList;
