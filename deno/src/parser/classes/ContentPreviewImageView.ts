import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';

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