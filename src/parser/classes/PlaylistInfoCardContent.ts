import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class PlaylistInfoCardContent extends YTNode {
  static type = 'PlaylistInfoCardContent';

  title: Text;
  thumbnails: Thumbnail[];
  video_count: Text;
  channel_name: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.playlistTitle);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.playlistVideoCount);
    this.channel_name = new Text(data.channelName);
    this.endpoint = new NavigationEndpoint(data.action);
  }
}