import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';

export default class ReelPlayerHeader extends YTNode {
  static type = 'ReelPlayerHeader';

  reel_title_text: Text;
  timestamp_text: Text;
  channel_title_text: Text;
  channel_thumbnail: Thumbnail[];
  author: Author;

  constructor(data: RawNode) {
    super();
    this.reel_title_text = new Text(data.reelTitleText);
    this.timestamp_text = new Text(data.timestampText);
    this.channel_title_text = new Text(data.channelTitleText);
    this.channel_thumbnail = Thumbnail.fromResponse(data.channelThumbnail);
    this.author = new Author(data.channelNavigationEndpoint, undefined);
  }
}