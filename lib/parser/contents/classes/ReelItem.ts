'use strict';

import NavigationEndpoint from './NavigationEndpoint';
import Text from './Text';
import Thumbnail from './Thumbnail';

class ReelItem {
  type = 'ReelItem';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.headline, '');
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText, '');
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default ReelItem;