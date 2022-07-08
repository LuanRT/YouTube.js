'use strict';

const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class ChannelThumbnailWithLink {
  type = 'ChannelThumbnailWithLink';

  constructor(data) {
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.label = data.accessibility.accessibilityData.label;
  }
}

module.exports = ChannelThumbnailWithLink;