'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class VideoOwner {
  type = 'VideoOwner';
  
  constructor(data) {
    this.subscription_button = data.subscriptionButton;
    this.subscriber_count = new Text(data.subscriberCountText);
    this.author = new Author({
        ...item.title,
        navigationEndpoint: item.navigationEndpoint
    }, item.badges, item.thumbnail);
  }
}

module.exports = VideoOwner;