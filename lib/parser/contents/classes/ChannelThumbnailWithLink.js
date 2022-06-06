'use strict';

const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class ChannelThumbnailWithLink {
  type = 'channelThumbnailWithLinkRenderer';
  
  constructor(data) {
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.label = data.accessibility.accessibilityData.label;
  }
}

module.exports = ChannelThumbnailWithLink;