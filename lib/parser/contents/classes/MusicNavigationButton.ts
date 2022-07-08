'use strict';

import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class MusicNavigationButton {
  type = 'MusicNavigationButton';

  constructor(data) {
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default MusicNavigationButton;