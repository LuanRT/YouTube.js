import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class EndScreenPlaylist extends YTNode {
  static type = 'EndScreenPlaylist';
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = new Text(data.longBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
  }
}
export default EndScreenPlaylist;
