'use strict';

const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class EndscreenElement {
  type = 'EndscreenElement';

  constructor(data) {
    this.style = data.style;
    
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    
    if (data.image) {
      this.image = Thumbnail.fromResponse(data.image)
    }

    if (data.icon) {
      this.icon = Thumbnail.fromResponse(data.icon)
    }

    if (data.metadata) {
      this.metadata = new Text(data.metadata)
    }

    if (data.callToAction) {
      this.call_to_action = new Text(data.callToAction)
    }

    if (data.hovercardButton) {
      this.hovercard_button = Parser.parse(data.hovercardButton)
    }

    if (data.isSubscribe) {
      this.is_subscribe = data.isSubscribe
    }

    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.left = data.left;
    this.width = data.width;
    this.top = data.top;
    this.aspect_ratio = data.aspectRatio;
    this.start_ms = data.startMs;
    this.end_ms = data.endMs;
    this.id = data.id;
  }
}

module.exports = EndscreenElement;