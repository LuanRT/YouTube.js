'use strict';

const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class PlayerAnnotationsExpanded {
  type = 'PlayerAnnotationsExpanded';

  constructor(data) {
    this.featured_channel = {
      start_time_ms: data.featuredChannel.startTimeMs,
      end_time_ms: data.featuredChannel.endTimeMs,
      watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
      channel_name: data.featuredChannel.channelName,
      endpoint: new NavigationEndpoint(data.featuredChannel.navigationEndpoint),
      subscribe_button: Parser.parse(data.featuredChannel.subscribeButton)
    };
    this.allow_swipe_dismiss = data.allowSwipeDismiss;
    this.annotation_id = data.annotationId;
  }
}

module.exports = PlayerAnnotationsExpanded;