'use strict';

const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class Channel {
  type = 'Channel';

  constructor(data) {
    this.id = data.channelId;
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);
    this.subscribers = new Text(data.subscriberCountText);
    this.videos = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
}

module.exports = Channel;