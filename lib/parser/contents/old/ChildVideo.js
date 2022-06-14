const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ChildVideo {
  type = 'ChildVideo';

  constructor(item) {
    this.id = item.videoId;
    this.title = new Text(item.title);
    this.length = new Text(item.lengthText);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
  }
}

module.exports = ChildVideo;