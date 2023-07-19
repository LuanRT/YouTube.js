import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ContentPreviewImageView extends YTNode {
  static type = 'ContentPreviewImageView';

  image: Thumbnail[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.image = data.image.sources.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
    this.style = data.style;
  }
}