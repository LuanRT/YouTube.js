'use strict';

import Text from './Text';

class CallToActionButton {
  type = 'CallToActionButton';

  constructor(data) {
    this.label = new Text(data.label);
    this.icon_type = data.icon.iconType;
    this.style = data.style;
  }
}

export default CallToActionButton;