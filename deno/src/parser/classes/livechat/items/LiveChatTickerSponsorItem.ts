import { YTNode } from '../../../helpers.ts';
import Text from '../../misc/Text.ts';
import type { RawNode } from '../../../index.ts';
import Author from '../../misc/Author.ts';

class LiveChatTickerSponsorItem extends YTNode {
  static type = 'LiveChatTickerSponsorItem';

  id: string;
  detail: Text;
  author: Author;

  duration_sec: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.detail = new Text(data.detailText);

    this.author = new Author(data.authorName, data.authorBadges, data.sponsorPhoto, data.authorExternalChannelId);

    this.duration_sec = data.durationSec;
    // TODO: finish this
  }
}

export default LiveChatTickerSponsorItem;