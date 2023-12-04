import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

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