import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class AnimatedThumbnailOverlayView extends YTNode {
  static type = 'AnimatedThumbnailOverlayView';

  public thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}
