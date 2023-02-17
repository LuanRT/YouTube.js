import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

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