import Text from './misc/Text.ts';
import Parser from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import Button from './Button.ts';

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
      this.play_all_button = Parser.parseItem(data.playAllButton, Button);
    }
  }
}

export default Shelf;