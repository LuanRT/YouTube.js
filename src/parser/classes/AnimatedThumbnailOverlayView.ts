import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class AnimatedThumbnailOverlayView extends YTNode {
  static type = 'AnimatedThumbnailOverlayView';

  public thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}
