const ResultsParser = require('.');
const Author = require('./Author');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class Channel {
  type = 'Channel';

  constructor(item) {
    this.id = item.channelId;
    this.author = new Author({
      ...item.title,
      navigationEndpoint: item.navigationEndpoint
    }, item.ownerBadges, item.thumbnail);
    this.subscribers = new Text(item.subscriberCountText);
    this.videos = new Text(item.videoCountText);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.description_snippet = new Text(item.descriptionSnippet);
  }
}

module.exports = Channel;