import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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