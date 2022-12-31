import Text from './misc/Text';
import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class Shelf extends YTNode {
  static type = 'Shelf';

  title: Text;
  endpoint?: NavigationEndpoint;
  content: YTNode | null;
  icon_type?: string;
  menu?: YTNode | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);

    if (data.endpoint) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    this.content = Parser.parseItem(data.content) || null;

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    if (data.menu) {
      this.menu = Parser.parseItem(data.menu);
    }
  }
}

export default Shelf;