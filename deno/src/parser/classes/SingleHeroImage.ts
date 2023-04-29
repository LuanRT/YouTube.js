import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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