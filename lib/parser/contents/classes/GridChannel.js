const Parser = require('..');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class GridChannel {
  type = 'GridChannel';

  constructor(item) {
    this.id = item.channelId;
    this.author = new Author({
      ...item.title,
      navigationEndpoint: item.navigationEndpoint
    }, item.ownerBadges, item.thumbnail);
    this.subscribers = new Text(item.subscriberCountText);
    this.videos = new Text(item.videoCountText);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
  }
}

module.exports = GridChannel;