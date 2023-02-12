import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class EndScreenPlaylist extends YTNode {
  static type = 'EndScreenPlaylist';

  id: string;
  title: Text;
  author: Text;
  endpoint: NavigationEndpoint;
  thumbnails: Thumbnail[];
  video_count: Text;

  constructor(data: any) {
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