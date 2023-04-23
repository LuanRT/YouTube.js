import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class SingleHeroImage extends YTNode {
  static type = 'SingleHeroImage';

  thumbnails: Thumbnail[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.style = data.style;
  }
}