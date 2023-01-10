import Parser from '../../..';
import { observe, ObservedArray, YTNode } from '../../../helpers';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge';
import MetadataBadge from '../../MetadataBadge';
import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';

class LiveChatTickerSponsorItem extends YTNode {
  static type = 'LiveChatTickerSponsorItem';

  id: string;
  detail: Text;
  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
    is_moderator: boolean | null;
    is_verified: boolean | null;
    is_verified_artist: boolean | null;
  };

  duration_sec: string;

  constructor(data: any) {
    super();
    this.id = data.id;
    this.detail = new Text(data.detailText);

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.sponsorPhoto),
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

    this.duration_sec = data.durationSec;
    // TODO: finish this
  }
}

export default LiveChatTickerSponsorItem;