import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MusicNavigationButton extends YTNode {
  static type = 'MusicNavigationButton';

  button_text: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint(data.clickCommand);
  }
}