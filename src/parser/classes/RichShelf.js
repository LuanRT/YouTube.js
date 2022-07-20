import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';

import { YTNode } from '../helpers';

class RichShelf extends YTNode {
  static type = 'RichShelf';
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.contents = Parser.parse(data.contents);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }
}
export default RichShelf;
