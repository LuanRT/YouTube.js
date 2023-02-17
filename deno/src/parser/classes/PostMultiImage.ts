import Parser from '../index.ts';
import BackstageImage from './BackstageImage.ts';

import { YTNode } from '../helpers.ts';

class PostMultiImage extends YTNode {
  static type = 'PostMultiImage';

  images : BackstageImage[];

  constructor(data: any) {
    super();
    this.images = Parser.parseArray(data.images, BackstageImage);
  }
}

export default PostMultiImage;