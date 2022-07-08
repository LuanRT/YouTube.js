'use strict';

import Thumbnail from './Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

class ChannelThumbnailWithLink {
  type = 'ChannelThumbnailWithLink';

  constructor(data) {
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.label = data.accessibility.accessibilityData.label;
  }
}

export default ChannelThumbnailWithLink;