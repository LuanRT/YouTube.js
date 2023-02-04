import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class MusicNavigationButton extends YTNode {
  static type = 'MusicNavigationButton';

  button_text: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint(data.clickCommand);
  }
}

export default MusicNavigationButton;