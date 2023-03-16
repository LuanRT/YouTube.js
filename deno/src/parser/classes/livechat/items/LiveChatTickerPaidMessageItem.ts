import Parser from '../../../index.ts';
import Text from '../../misc/Text.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import type { RawNode } from '../../../index.ts';

import { YTNode } from '../../../helpers.ts';
import Author from '../../misc/Author.ts';

class LiveChatTickerPaidMessageItem extends YTNode {
  static type = 'LiveChatTickerPaidMessageItem';

  author: Author;

  amount: Text;
  duration_sec: string; // Or number?
  full_duration_sec: string;
  show_item;
  show_item_endpoint: NavigationEndpoint;
  id: string;

  constructor(data: RawNode) {
    super();

    this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);

    this.amount = new Text(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = Parser.parseItem(data.showItemEndpoint?.showLiveChatItemEndpoint?.renderer);
    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
    this.id = data.id;
  }
}

export default LiveChatTickerPaidMessageItem;