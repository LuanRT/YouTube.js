import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import { Text } from '../misc.ts';
import ButtonView from './ButtonView.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

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