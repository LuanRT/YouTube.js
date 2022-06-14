'use strict';

const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class EndscreenElement {
  type = 'EndscreenElement';
  
  constructor(data) {
    this.style = data.style;
  
    data.image && 
      (this.image = Thumbnail.fromResponse(data.image));
    
    data.icon &&
      (this.icon = Thumbnail.fromResponse(data.icon));
    
    data.metadata &&
      (this.metadata = new Text(data.metadata));
    
    data.callToAction &&
      (this.call_to_action = new Text(data.callToAction));
     
    data.hovercardButton &&
      (this.hovercard_button = Parser.parse(data.hovercardButton));
    
    data.isSubscribe &&
      (this.is_subscribe = data.isSubscribe);
      
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.endpoint);
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