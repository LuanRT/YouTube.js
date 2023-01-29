import Parser from '../index';
import BackstageImage from './BackstageImage';

import { YTNode } from '../helpers';

class PostMultiImage extends YTNode {
  static type = 'PostMultiImage';

  images : BackstageImage[];

  constructor(data: any) {
    super();
    this.images = Parser.parseArray(data.images, BackstageImage);
  }
}

export default PostMultiImage;