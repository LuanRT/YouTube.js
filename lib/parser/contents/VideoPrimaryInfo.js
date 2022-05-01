const ResultsParser = require('.');
const Text = require('./Text');

class VideoPrimaryInfo {
  type = 'VideoPrimaryInfo';

  constructor(item) {
    this.title = new Text(item.title);
    this.published_at = new Date(item.dateText);
    // menuRenderer
    this.actions = ResultsParser.parseItem(item.videoActions);
    this.views = new Text(item.viewCount.videoViewCountRenderer?.viewCount || item.viewCount.videoViewCountRenderer?.shortViewCount);
  }
}

module.exports = VideoPrimaryInfo;