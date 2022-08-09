import Text from './misc/Text';
import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class Shelf extends YTNode {
  static type = 'Shelf';

  title: Text;
  endpoint;
  content;
  icon_type;
  menu;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);

    if (data.endpoint) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    this.content = Parser.parse(data.content) || null;

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    if (data.menu) {
      this.menu = Parser.parse(data.menu);
    }
  }
}

export default Shelf;