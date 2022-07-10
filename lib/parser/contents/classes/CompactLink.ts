'use strict';

import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class CompactLink {
  type = 'CompactLink';

  constructor(data) {
    this.title = new Text(data.title).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.style = data.style;
  }
}

export default CompactLink;