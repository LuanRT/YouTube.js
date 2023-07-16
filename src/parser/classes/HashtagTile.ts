import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Thumbnail } from '../misc.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class HashtagTile extends YTNode {
  static type = 'HashtagTile';

  hashtag: Text;
  hashtag_info_text: Text;
  hashtag_thumbnail: Thumbnail[];
  endpoint: NavigationEndpoint;
  hashtag_background_color: number;
  hashtag_video_count: Text;
  hashtag_channel_count: Text;

  constructor(data: RawNode) {
    super();
    this.hashtag = new Text(data.hashtag);
    this.hashtag_info_text = new Text(data.hashtagInfoText);
    this.hashtag_thumbnail = Thumbnail.fromResponse(data.hashtagThumbnail);
    this.endpoint = new NavigationEndpoint(data.onTapCommand);
    this.hashtag_background_color = data.hashtagBackgroundColor;
    this.hashtag_video_count = new Text(data.hashtagVideoCount);
    this.hashtag_channel_count = new Text(data.hashtagChannelCount);
  }
}