import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';

export default class LiveChatTickerSponsorItem extends YTNode {
  static type = 'LiveChatTickerSponsorItem';

  id: string;
  detail: Text;
  author: Author;
  duration_sec: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.detail = new Text(data.detailText);
    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.sponsorPhoto,
      data.authorExternalChannelId
    );
    this.duration_sec = data.durationSec;
    // TODO: Parse remaining props.
  }
}