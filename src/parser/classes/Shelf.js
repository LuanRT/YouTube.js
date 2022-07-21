import Text from './misc/Text';
import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class Shelf extends YTNode {
  static type = 'Shelf';

  constructor(data) {
    super();
    this.title = new Text(data.title);

    if (data.endpoint) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    this.content = Parser.parse(data.content) || [];

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    if (data.menu) {
      this.menu = Parser.parse(data.menu);
    }
  }
}

export default Shelf;