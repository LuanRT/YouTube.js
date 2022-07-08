'use strict';

import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class SubFeedOption {
  type = 'SubFeedOption';

  constructor(data) {
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default SubFeedOption;