import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ThemedImage extends YTNode {
  static type = 'ThemedImage';

  thumbnails: Thumbnail[];
  image_height: number;
  image_width: number;
  is_circular: boolean;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse({ thumbnails: data.imageLight?.thumbnails || [] });
    this.image_height = data.imageHeight;
    this.image_width = data.imageWidth;
    this.is_circular = data.isCircular;
  }
}
