import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { Text } from '../misc.js';
import ButtonView from './ButtonView.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class TextCarouselItemView extends YTNode {
  static type = 'TextCarouselItemView';

  icon_name: string;
  text: Text;
  on_tap_endpoint: NavigationEndpoint;
  button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.icon_name = data.iconName;
    this.text = Text.fromAttributed(data.text);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
    this.button = Parser.parseItem(data.button, ButtonView);
  }
}