const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class ReelItem {
  type = 'ReelItem';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.headline, '');
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText, '');
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = ReelItem;