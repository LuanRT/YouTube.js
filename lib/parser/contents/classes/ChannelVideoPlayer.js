const Parser = require('..');
const Text = require('./Text');

class ChannelVideoPlayer {
  type = 'ChannelVideoPlayer';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title, '');
    this.description = new Text(data.description, '');
    this.views = new Text(data.viewCountText, '');
    this.published_at = new Text(data.publishedTimeText, '');
  }
}

module.exports = ChannelVideoPlayer;