import Author from '../../misc/Author.js';
import { Parser } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';

import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';

export default class LiveChatTickerPaidMessageItem extends YTNode {
  static type = 'LiveChatTickerPaidMessageItem';

  id: string;
  author: Author;
  amount?: Text;
  amount_text_color: number;
  start_background_color: number;
  end_background_color: number;
  duration_sec: number;
  full_duration_sec: number;
  show_item: YTNode;
  show_item_endpoint: NavigationEndpoint;
  animation_origin: string;
  open_engagement_panel_command: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.id = data.id;

    this.author = new Author(
      data.authorName || data.authorUsername,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    if (Reflect.has(data, 'amount')) {
      this.amount = new Text(data.amount);
    }

    this.amount_text_color = data.amountTextColor;
    this.start_background_color = data.startBackgroundColor;
    this.end_background_color = data.endBackgroundColor;
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = Parser.parseItem(data.showItemEndpoint?.showLiveChatItemEndpoint?.renderer);
    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
    this.animation_origin = data.animationOrigin;
    this.open_engagement_panel_command = new NavigationEndpoint(data.openEngagementPanelCommand);
  }
}