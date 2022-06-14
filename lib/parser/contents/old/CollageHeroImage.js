const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Thumbnail = require('./Thumbnail');

class CollageHeroImage {
  type = 'CollageHeroImage';

  constructor(item) {
    this.left = Thumbnail.fromResponse(item.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(item.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(item.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
  }
}

module.exports = CollageHeroImage;