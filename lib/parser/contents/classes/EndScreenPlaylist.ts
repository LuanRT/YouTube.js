'use strict';

import Text from './Text';
import Thumbnail from './Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

class EndScreenPlaylist {
  type = 'EndScreenPlaylist';

  constructor(data) {
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = new Text(data.longBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
  }
}

export default EndScreenPlaylist;