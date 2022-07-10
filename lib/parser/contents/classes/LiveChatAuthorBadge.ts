'use strict';

import MetadataBadge from './MetadataBadge';
import Thumbnail from './Thumbnail';

class LiveChatAuthorBadge extends MetadataBadge {
  constructor(data) {
    super(data);
    this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
  }
}

export default LiveChatAuthorBadge;