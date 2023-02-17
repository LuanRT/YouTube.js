import { observe, ObservedArray, YTNode } from '../../../helpers.ts';
import Parser from '../../../index.ts';
import Button from '../../Button.ts';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.ts';
import MetadataBadge from '../../MetadataBadge.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';

class LiveChatTextMessage extends YTNode {
  static type = 'LiveChatTextMessage';

  message: Text;
  author?: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
    is_moderator: boolean | null;
    is_verified: boolean | null;
    is_verified_artist: boolean | null;
  };

  menu_endpoint?: NavigationEndpoint;
  inline_action_buttons: ObservedArray<Button>;
  timestamp: number;
  id: string;

  constructor(data: any) {
    super();
    this.message = new Text(data.message);

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

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.inline_action_buttons = Parser.parseArray<Button>(data.inlineActionButtons, [ Button ]);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.id = data.id;
  }
}

export default LiveChatTextMessage;