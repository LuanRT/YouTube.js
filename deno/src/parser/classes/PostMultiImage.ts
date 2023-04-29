import Parser, { type RawNode } from '../index.ts';
import BackstageImage from './BackstageImage.ts';
import { YTNode } from '../helpers.ts';

export default class PostMultiImage extends YTNode {
  static type = 'PostMultiImage';

  images : BackstageImage[];

  constructor(data: RawNode) {
    super();
    this.images = Parser.parseArray(data.images, BackstageImage);
  }
}