import type { RawNode } from '../index.ts';
import MetadataBadge from './MetadataBadge.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class LiveChatAuthorBadge extends MetadataBadge {
  static type = 'LiveChatAuthorBadge';

  custom_thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super(data);
    this.custom_thumbnail = Thumbnail.fromResponse(data.customThumbnail);
  }
}