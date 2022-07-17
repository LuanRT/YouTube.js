import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class BackstageImage extends YTNode {
  static type = 'BackstageImage';
  constructor(data) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
  }
}
export default BackstageImage;
