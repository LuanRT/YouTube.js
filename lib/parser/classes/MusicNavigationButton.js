import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class MusicNavigationButton extends YTNode {
  static type = 'MusicNavigationButton';
  constructor(data) {
    super();
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}
export default MusicNavigationButton;
