'use strict';

import NavigationEndpoint from './NavigationEndpoint';
import Text from './Text';
import Thumbnail from './Thumbnail';

class HeaderLink {
  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data.icon);
    this.title = new Text(data.title);
  }
}

class ChannelHeaderLinks {
  type = 'ChannelHeaderLinks';

  constructor(data) {
    this.primary = data.primaryLinks?.map((link) => new HeaderLink(link)) || [];
    this.secondary = data.secondaryLinks?.map((link) => new HeaderLink(link)) || [];
  }
}

export default ChannelHeaderLinks;