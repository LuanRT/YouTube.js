import Parser from '../../../index.ts';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.ts';
import MetadataBadge from '../../MetadataBadge.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import type { RawNode } from '../../../index.ts';

import { observe, ObservedArray, YTNode } from '../../../helpers.ts';

class LiveChatTickerPaidStickerItem extends YTNode {
  static type = 'LiveChatTickerPaidStickerItem';

  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
    is_moderator: boolean | null;
    is_verified: boolean | null;
    is_verified_artist: boolean | null;
  };

  amount: Text;
  duration_sec: string; // Or number?
  full_duration_sec: string;
  show_item;
  show_item_endpoint: NavigationEndpoint;
  id: string;

  constructor(data: RawNode) {
    super();

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: observe([]).as(LiveChatAuthorBadge, MetadataBadge),
      is_moderator: null,
      is_verified: null,
      is_verified_artist: null
    };

    const badges = Parser.parseArray<LiveChatAuthorBadge | MetadataBadge>(data.authorBadges, [ MetadataBadge, LiveChatAuthorBadge ]);

    this.author.badges = badges;
    this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == 'MODERATOR') : null;
    this.author.is_verified = badges ? badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') : null;
    this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') : null;

    this.amount = new Text(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = Parser.parseItem(data.showItemEndpoint?.showLiveChatItemEndpoint?.renderer);
    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
    this.id = data.id;
  }
}

export default LiveChatTickerPaidStickerItem;