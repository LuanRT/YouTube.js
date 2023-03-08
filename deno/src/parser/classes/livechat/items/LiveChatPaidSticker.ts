import { observe, ObservedArray, YTNode } from '../../../helpers.ts';
import Parser from '../../../index.ts';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.ts';
import MetadataBadge from '../../MetadataBadge.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import type { RawNode } from '../../../index.ts';

class LiveChatPaidSticker extends YTNode {
  static type = 'LiveChatPaidSticker';

  id: string;

  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
    is_moderator: boolean | null;
    is_verified: boolean | null;
    is_verified_artist: boolean | null;
  };

  money_chip_background_color: number;
  money_chip_text_color: number;
  background_color: number;
  author_name_text_color: number;
  sticker: Thumbnail[];
  purchase_amount: string;
  context_menu: NavigationEndpoint;
  menu_endpoint?: NavigationEndpoint;
  timestamp: number;

  constructor(data: RawNode) {
    super();
    this.id = data.id;

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data.authorName),
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

    this.money_chip_background_color = data.moneyChipBackgroundColor;
    this.money_chip_text_color = data.moneyChipTextColor;
    this.background_color = data.backgroundColor;
    this.author_name_text_color = data.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

export default LiveChatPaidSticker;