import Text from './misc/Text.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';

export default class Shelf extends YTNode {
  static type = 'Shelf';

  title: Text;
  endpoint?: NavigationEndpoint;
  content: YTNode | null;
  icon_type?: string;
  menu?: YTNode | null;
  play_all_button?: Button | null;
  subtitle?: Text;

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

    if (Reflect.has(data, 'subtitle')) {
      this.subtitle = new Text(data.subtitle);
    }
  }
}