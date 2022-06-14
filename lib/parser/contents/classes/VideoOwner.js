'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class VideoOwner {
  type = 'videoOwnerRenderer';
  
  constructor(data) {
    this.name = new Text(data.title);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.subscription_button = data.subscriptionButton;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.badges = Parser.parse(data.badges);
    this.is_verified = this.badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || false;
    this.is_verified_artist = this.badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || false;
  }
}

module.exports = VideoOwner;