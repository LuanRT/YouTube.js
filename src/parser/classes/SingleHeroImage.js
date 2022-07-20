import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class SingleHeroImage extends YTNode {
  static type = 'SingleHeroImage';
  constructor(data) {
    super();
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.style = data.style;
  }
}
export default SingleHeroImage;
