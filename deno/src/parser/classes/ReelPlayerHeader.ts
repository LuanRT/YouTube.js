import { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';

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