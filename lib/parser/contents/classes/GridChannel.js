const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class GridChannel {
  type = 'GridChannel';

  constructor(data) {
    this.id = data.channelId;
    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);
    this.subscribers = new Text(data.subscriberCountText);
    this.videos = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = GridChannel;