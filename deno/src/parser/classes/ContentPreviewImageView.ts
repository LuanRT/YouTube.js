import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class ContentPreviewImageView extends YTNode {
  static type = 'ContentPreviewImageView';

  image: Thumbnail[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.style = data.style;
  }
}