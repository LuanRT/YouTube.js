'use strict';

const MetadataBadge = require('./MetadataBadge');
const Thumbnail = require('./Thumbnail');

class LiveChatAuthorBadge extends MetadataBadge {
  constructor(data) {
    super(data);
    
    this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
  }
}

module.exports = LiveChatAuthorBadge;