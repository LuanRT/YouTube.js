import { Parser, type RawNode } from '../index.js';
import BackstageImage from './BackstageImage.js';
import { YTNode } from '../helpers.js';

export default class PostMultiImage extends YTNode {
  static type = 'PostMultiImage';

  images : BackstageImage[];

  constructor(data: RawNode) {
    super();
    this.images = Parser.parseArray(data.images, BackstageImage);
  }
}