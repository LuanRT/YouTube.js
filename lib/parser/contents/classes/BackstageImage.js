const Parser = require('..');
const Thumbnail = require('./Thumbnail');

class BackstageImage {
  type = 'BackstageImage';

  constructor(data) {
    this.image = Thumbnail.fromResponse(data.image);
  }
}

module.exports = BackstageImage;