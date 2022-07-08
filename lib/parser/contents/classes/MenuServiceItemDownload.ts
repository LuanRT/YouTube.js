'use strict';

import NavigationEndpoint from './NavigationEndpoint';

class MenuServiceItemDownload {
  type = 'MenuServiceItemDownload';

  constructor(data) {
    this.has_separator = data.hasSeparator;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

export default MenuServiceItemDownload;