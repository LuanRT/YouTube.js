import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class CollageHeroImage extends YTNode {
  static type = 'CollageHeroImage';

  constructor(data) {
    super();
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default CollageHeroImage;