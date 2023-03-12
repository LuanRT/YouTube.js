import Text from './misc/Text.js';
import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';

class Shelf extends YTNode {
  static type = 'Shelf';

  title: Text;
  endpoint?: NavigationEndpoint;
  content: YTNode | null;
  icon_type?: string;
  menu?: YTNode | null;
  play_all_button?: Button | null;

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

    if (data.playAllButton) {
      this.play_all_button = Parser.parseItem<Button>(data.playAllButton);
    }
  }
}

export default Shelf;