const Parser = require('..');
const Thumbnail = require('./Thumbnail');

class BackstageImage {
  type = 'BackstageImage';

  constructor(item) {
    this.image = Thumbnail.fromResponse(item.image);
  }
}

module.exports = BackstageImage;