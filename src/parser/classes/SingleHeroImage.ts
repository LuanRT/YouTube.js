import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class SingleHeroImage extends YTNode {
  static type = 'SingleHeroImage';

  thumbnails: Thumbnail[];
  style: string;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.style = data.style;
  }
}

export default SingleHeroImage;