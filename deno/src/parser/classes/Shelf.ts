import Text from './misc/Text.ts';
import Parser, { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import Button from './Button.ts';

export default class Shelf extends YTNode {
  static type = 'Shelf';

  title: Text;
  endpoint?: NavigationEndpoint;
  content: YTNode | null;
  icon_type?: string;
  menu?: YTNode | null;
  play_all_button?: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'endpoint')) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    this.content = Parser.parseItem(data.content);

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }

    if (Reflect.has(data, 'menu')) {
      this.menu = Parser.parseItem(data.menu);
    }

    if (Reflect.has(data, 'playAllButton')) {
      this.play_all_button = Parser.parseItem(data.playAllButton, Button);
    }
  }
}