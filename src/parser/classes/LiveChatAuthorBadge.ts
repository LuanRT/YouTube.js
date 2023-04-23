import type { RawNode } from '../index.js';
import MetadataBadge from './MetadataBadge.js';
import Thumbnail from './misc/Thumbnail.js';

export default class LiveChatAuthorBadge extends MetadataBadge {
  static type = 'LiveChatAuthorBadge';

  custom_thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super(data);
    this.custom_thumbnail = Thumbnail.fromResponse(data.customThumbnail);
  }
}