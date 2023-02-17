import MetadataBadge from './MetadataBadge.ts';
import Thumbnail from './misc/Thumbnail.ts';

class LiveChatAuthorBadge extends MetadataBadge {
  static type = 'LiveChatAuthorBadge';

  custom_thumbnail: Thumbnail[] | null;

  constructor(data: any) {
    super(data);
    this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
  }
}

export default LiveChatAuthorBadge;