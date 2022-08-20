import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class BackstageImage extends YTNode {
  static type = 'BackstageImage';

  image: Thumbnail[];

  constructor(data: any) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
  }
}

export default BackstageImage;