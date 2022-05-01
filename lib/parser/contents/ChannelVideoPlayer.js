const ResultsParser = require('.');
const Text = require('./Text');

class ChannelVideoPlayer {
  type = 'ChannelVideoPlayer';

  constructor(item) {
    this.id = item.videoId;
    this.title = new Text(item.title, '');
    this.description = new Text(item.description, '');
    this.views = new Text(item.viewCountText, '');
    this.published_at = new Text(item.publishedTimeText, '');
  }
}

module.exports = ChannelVideoPlayer;