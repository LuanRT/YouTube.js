import Parser from '../index.js';
import BackstageImage from './BackstageImage.js';

import { YTNode } from '../helpers.js';

class PostMultiImage extends YTNode {
  static type = 'PostMultiImage';

  images : BackstageImage[];

  constructor(data: any) {
    super();
    this.images = Parser.parseArray(data.images, BackstageImage);
  }
}

export default PostMultiImage;