import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class PlaylistInfoCardContent extends YTNode {
  static type = 'PlaylistInfoCardContent';

  title: Text;
  thumbnails: Thumbnail[];
  video_count: Text;
  channel_name: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.playlistTitle);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.playlistVideoCount);
    this.channel_name = new Text(data.channelName);
    this.endpoint = new NavigationEndpoint(data.action);
  }
}

export default PlaylistInfoCardContent;